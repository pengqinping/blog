---
title: ViewModel
author: 认知弱点
date: 2020-03-14 10:08:29
excerpt: "ViewModel 是怎样被创建的？"
categories: Android-Jetpack
tags: 
    - ViewModel 
---
# ViewModel 是怎样被创建的？

## 介绍
* Google介绍：[https://developer.android.google.cn/topic/libraries/architecture/viewmodel](https://developer.android.google.cn/topic/libraries/architecture/viewmodel)
* <span style='background-color:#FEEFE3;color:#BF350B;padding:3px'>Deprecated</span> `ViewModelProviders.of()` 该方法过期，使用 `new ViewModleProvider()` 来替换 
* `ViewModelProvider` Documents: [https://developer.android.google.cn/reference/androidx/lifecycle/ViewModelProvider?hl=en](https://developer.android.google.cn/reference/androidx/lifecycle/ViewModelProvider?hl=en)

## architecutre 项目 ViewModel 创建 分析
ViewModel 是通过 ViewProvider 创建出来的

### `ViewModelProvider()` 
```java
// 构造器生成了两个对象， 
// Class的newInstance 来创建 ViewModel对象 fragment 和 Activity 返回的时 SavedStateViewModelFactory 的对象 
private final Factory mFactory; 
// 用来在Activity或者 Fragment 缓存 ViewModel用，如果有多个 ViewModel 就会进行缓存
private final ViewModelStore mViewModelStore;  
// 构造器
 public ViewModelProvider(@NonNull ViewModelStoreOwner owner) {
        this(owner.getViewModelStore(), owner instanceof HasDefaultViewModelProviderFactory
                ? ((HasDefaultViewModelProviderFactory) owner).getDefaultViewModelProviderFactory()
                : NewInstanceFactory.getInstance());
    } 
```
* `ViewModelStoreOwner` 接口 **`getViewModelStore`** 用来返回 `ViewModelStore`对象， `Fragment` 和 `ComponentActivity` 中实现了此接口, 
* `HasDefaultViewModelProviderFactory` 接口 **`getDefaultViewModelProviderFactory`** 就返回了一个 `factory`, `Fragment` 和 `ComponentActivity` 中实现了此接口
* **由此可见ViewModel中的两个东西其实都在 `fragment` 或 `ComponentActivity`中返回的**

```java
// Component.getViewModelStore()
   public ViewModelStore getViewModelStore() {
        if (getApplication() == null) {
            throw new IllegalStateException("Your activity is not yet attached to the "
                    + "Application instance. You can't request ViewModel before onCreate call.");
        }
        if (mViewModelStore == null) {
            NonConfigurationInstances nc =
                    (NonConfigurationInstances) getLastNonConfigurationInstance();
            if (nc != null) {
                // Restore the ViewModelStore from NonConfigurationInstances
                mViewModelStore = nc.viewModelStore;
            }
            if (mViewModelStore == null) {
                mViewModelStore = new ViewModelStore();
            }
        }
        return mViewModelStore;
    }

// FragmentManagerViewModel.getViewModelStore()
 ViewModelStore getViewModelStore(@NonNull Fragment f) {
     // mViewModelStores 是 一个Map 用来存放 viewModel, FragmentManager 可以存放多个fragment 
     // mWho =  UUID.randomUUID().toString();frament 标示
        ViewModelStore viewModelStore = mViewModelStores.get(f.mWho);
        if (viewModelStore == null) {
            viewModelStore = new ViewModelStore();
            mViewModelStores.put(f.mWho, viewModelStore);
        }
        return viewModelStore;
    }
```

```java
// Fragment.getDefaultViewModelProviderFactory
// ComponentActivity.getDefaultViewModelProviderFactory
// 这两个的实现差不多，都会创建 SavedStateViewModelFactory 对象
  @NonNull
    @Override
    public ViewModelProvider.Factory getDefaultViewModelProviderFactory() {
        // ... some code 
        if (mDefaultFactory == null) {
            mDefaultFactory = new SavedStateViewModelFactory(
                    getApplication(),
                    this,
                    getIntent() != null ? getIntent().getExtras() : null);
        }
        return mDefaultFactory;
    }
```
### viewModelProvider.get(ViewModel.class)
get里面无非就是调用 factory.create 来创建对象ViewModel
```java
// ViewModelProvider.get()
    public <T extends ViewModel> T get(@NonNull String key, @NonNull Class<T> modelClass) {
        ViewModel viewModel = mViewModelStore.get(key);
        // some code ... 
        if (mFactory instanceof KeyedFactory) {
            viewModel = ((KeyedFactory) (mFactory)).create(key, modelClass);
        } else {
            viewModel = (mFactory).create(modelClass);
        }
        mViewModelStore.put(key, viewModel);
        return (T) viewModel;
    }
```

### SavedStateViewModelFactory.create(key, modelClass)
* `ProductViewModel` 继承于 `AndroidViewModel`
* `findMatchingConstructor` 是用来判断是否存在 两个参数的构造器 `(Application, SavedStateHandle)`
* 如果有会带入 `SavedStateHandle` 这个对象 也就是 `SavedStateHandleController.getHandle()`
```java
 public <T extends ViewModel> T create(@NonNull String key, @NonNull Class<T> modelClass) {
        boolean isAndroidViewModel = AndroidViewModel.class.isAssignableFrom(modelClass);
        Constructor<T> constructor;
        if (isAndroidViewModel) {
            constructor = findMatchingConstructor(modelClass, ANDROID_VIEWMODEL_SIGNATURE);
        } else {
            constructor = findMatchingConstructor(modelClass, VIEWMODEL_SIGNATURE);
        }
        // doesn't need SavedStateHandle
        if (constructor == null) {
            return mFactory.create(modelClass);
        }

        SavedStateHandleController controller = SavedStateHandleController.create(
                mSavedStateRegistry, mLifecycle, key, mDefaultArgs);
           /// some code ... 
            T viewmodel;
            if (isAndroidViewModel) {
                viewmodel = constructor.newInstance(mApplication, controller.getHandle());
            } else {
                viewmodel = constructor.newInstance(controller.getHandle());
            }
            viewmodel.setTagIfAbsent(TAG_SAVED_STATE_HANDLE_CONTROLLER, controller);
            return viewmodel;
        /// some code ... 
    }
```
* 整个ViewModel的创建 无非就是使用了工厂模式，在Fragment和Activity中实现了工厂，
但是对象被创建出来了，折腾了这么大一个圈子，然后怎么使用呢？
* 官网的设计ViewModel理念是： ViewModel 类旨在以注重生命周期的方式存储和管理界面相关的数据。ViewModel 类让数据可在发生屏幕旋转等配置更改后继续存在。**那么是如何发挥这个作用的呢？**

### ViewModelStore 带来的存储 
```java 
// Activity.onRetainNonConfigurationInstance()
// 这个函数的解释是说 在config和页面destory的时候回调用这个方法，CompotentActivity 重写了这个方法 把 viewModelStore 缓存起来了,然后页面重建后 会通过 getLastNonConfigurationInstance() 来获取 
/*Called by the system, as part of destroying an
* activity due to a configuration change, when it is known that a new
* instance will immediately be created for the new configuration.  You
* can return any object you like here, including the activity instance
* itself, which can later be retrieved by calling
* {@link #getLastNonConfigurationInstance()} in the new activity
* instance.
*/
public final Object onRetainNonConfigurationInstance() {
    Object custom = onRetainCustomNonConfigurationInstance();

    ViewModelStore viewModelStore = mViewModelStore;
    if (viewModelStore == null) {
        // No one called getViewModelStore(), so see if there was an existing
        // ViewModelStore from our last NonConfigurationInstance
        NonConfigurationInstances nc =
                (NonConfigurationInstances) getLastNonConfigurationInstance();
        if (nc != null) {
            viewModelStore = nc.viewModelStore;
        }
    }

    if (viewModelStore == null && custom == null) {
        return null;
    }

    NonConfigurationInstances nci = new NonConfigurationInstances();
    nci.custom = custom;
    nci.viewModelStore = viewModelStore;
    return nci;
}
```