---
title: ViewBinding
author: 认知弱点
date: 2020-03-14 10:24:08
categories: Android-Jetpack
excerpt: "MVVM之DataBinding 使用指南"
tags:
    - ViewBinding

---
# DataBinding 
* Google文档 https://developer.android.google.cn/topic/libraries/data-binding

* 项目涉及代码库 https://gitee.com/pengqinping/architecture-components-samples/tree/master/BasicSample
* dataBinding https://gitee.com/pengqinping/databinding-samples

## databinding 相对比较简单

### 1. **app** 开启 `dataBinding` 支持 `buidle.gradle`

```groovy
android {
    dataBinding {
        enabled = true
    }
}
```

### 2. **定义xml文件支持dataBinding 以list_fragment.xml 为例**

```xml
<!-- 关键是layout 包裹，只有Layout包裹 DataBinding才会去识别 -->
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">

    <data>
        <variable
            name="isLoading"
            type="boolean" />
    </data>
<!-- ...  somecode -->

<androidx.appcompat.widget.AppCompatEditText
        android:id="@+id/products_search_box"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:hint="@string/search_products_hint"/>

    <ImageButton
        android:id="@+id/products_search_btn"
        android:layout_width="48dp"
        android:layout_height="48dp"
        android:contentDescription="@string/cd_search_products"
        app:srcCompat="@drawable/ic_search_black_24dp"/>
<!-- ...  somecode -->
</layout>
```

### 3. dataBinding 工具会在编译的时候 ListFragmentBinding.java 文件 里面有描述 布局的代码 
目录 app/buidl/generated/data_binding_base_class_source_out/{debug}/out/{packagname}/databinding/xxx.java

```java
//列举一小部分
public abstract class ListFragmentBinding extends ViewDataBinding {
@NonNull
public final AppCompatEditText productsSearchBox;

@NonNull
public final ImageButton productsSearchBtn;
// ... some code

```

### 4. 在 fragment 实例化对象 , 并且使用

```java
private ListFragmentBinding mBinding;
@Nullable
@Override
public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container,
        @Nullable Bundle savedInstanceState) {
    mBinding = DataBindingUtil.inflate(inflater, R.layout.list_fragment, container, false);
    //... some code
    return mBinding.getRoot();
}
@Override
public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
    super.onViewCreated(view, savedInstanceState);
    // 通过 binding 对象直接引用
    mBinding.productsSearchBtn.setOnClickListener(v -> {
        Editable query = mBinding.productsSearchBox.getText();
        viewModel.setQuery(query);
    });
}

```
在布局里面写Viewmodel就不多介绍了，写过 vue angularjs 前端的 这些很好理解， 数据绑定的概念

## BaseObservableField 和 ViewModel 在 数据绑定中的引用
* 项目地址 https://gitee.com/pengqinping/databinding-samples/tree/master

### 1. 用ObservableInt演示
* a.在Activity定义 ObservableInt
    ```kotlin
    data class ObservableFieldProfile(
        val name: String,
        val lastName: String,
        val likes: ObservableInt
    )
    private val observableFieldProfile = ObservableFieldProfile("Ada", "Lovelace", ObservableInt(0))

    ```

* b.在布局定义引用
    ```xml
    <layout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">
    <data>

        <import type="com.example.android.databinding.basicsample.R"/>
        <import type="com.example.android.databinding.basicsample.util.ConverterUtil"/>
        <!-- 定义名词和类型 -->
        <variable
            name="user"
            type="com.example.android.databinding.basicsample.data.ObservableFieldProfile" />
        <!-- 设置文本 -->
        <xml
            android:text="@{user.name}" />
        <!-- 设置表达式 -->
        <xml 
            app:srcCompat="@{user.likes &lt; 4 ? R.drawable.ic_person_black_96dp : R.drawable.ic_whatshot_black_96dp }"/>
        <!-- 类型转换 -->
        <xml 
            android:text="@{Integer.toString(user.likes)}"
        />
        <!-- 会自动调用 Activity 中的 fun OnLink 函数，Google 不推荐这么干，所以最好使用ViewModel -->
        <button android:onClick="onLike" />
    </data>

    ```
* C. 绑定及赋值
    ```kotlin
    val binding: ObservableFieldProfileBinding =
                DataBindingUtil.setContentView(this, R.layout.observable_field_profile)
        binding.user = observableFieldProfile
    ```

1.这个BaseObservableField只适合简单逻辑，加入判断比较复杂就很难受了
2.普通的BaseObservableFiled 对象改变值是需要手动去set更新的

### 2. ViewModel+LiveData演示
看了ViewModel 你可能会喜欢上使用这个东西
* a. 定义ViewModel 和 LiveData演示
    ```kotlin
    class ProfileLiveDataViewModel : ViewModel() {
        private val _name = MutableLiveData("Ada") // LiveData ，数据发生变化会自动更新布局，不用在重新拿View 去set数据
        private val _lastName = MutableLiveData("Lovelace")
        private val _likes =  MutableLiveData(0)

        // 这里转了一次，主要是避免 在其他地方操作 这边变量，对外自提供 可读操作，内部实现可写操作
        val name: LiveData<String> = _name
        val lastName: LiveData<String> = _lastName
        val likes: LiveData<Int> = _likes

        // popularity is exposed as LiveData using a Transformation instead of a @Bindable property.
        // 数据转换
        val popularity: LiveData<Popularity> = Transformations.map(_likes) {
            when {
                it > 9 -> Popularity.STAR
                it > 4 -> Popularity.POPULAR
                else -> Popularity.NORMAL
            }
        }

        // xml 中 函数调用
        fun onLike() {
            _likes.value = (_likes.value ?: 0) + 1
        }
    }
    ```

* b. 在布局中引入ViewModel
    ```xml
    <data>
        <variable
            name="viewmodel"
            type="com.example.android.databinding.basicsample.data.ProfileLiveDataViewModel"/>
    </data>
    <!-- 变量 -->
    <xml  android:text="@{viewmodel.lastName}"/>
    <!-- 事件 -->
    <xml android:onClick="@{() -> viewmodel.onLike()}"/>

    ```
* c. 在Activity中绑定
    ```kotlin  
    // Obtain binding
    val binding: ViewmodelProfileBinding =
            DataBindingUtil.setContentView(this, R.layout.viewmodel_profile)

    // Bind layout with ViewModel
    binding.viewmodel = viewModel

    // LiveData needs the lifecycle owner
    binding.lifecycleOwner = this
    ```

## 官方还介绍了一种 替换LiveData 方式， @Bindable
* https://developer.android.google.cn/topic/libraries/data-binding/observability
