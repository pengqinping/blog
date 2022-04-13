---
title: Paging
author: 认知弱点
description: 'Paging 使用教程'
date: 2020-03-14 23:48:35
categories: Android-Jetpack
tags: Paging
---
# Paging
* Google 文档 https://developer.android.google.cn/topic/libraries/architecture/paging
* Github项目：https://github.com/android/architecture-components-samples/tree/master/PagingSample
* Gitee项目：https://gitee.com/pengqinping/architecture-components-samples/tree/master/PagingSample (developer 改 maven repo 为 ali )

<div style='background:#fff5f5; color:#ff502c; display:block; font-size: 14px; margin: 16px 0;padding: 10px; border-radius:5px;border: 1px #f97d64 dashed'> 开始前先问自己几个问题：<br/>1. 官方介绍说是用来做按需加载？那么和以前的 自己写的分页加载(根据页面判断数据是加在data列表的头还是尾)有什么区别<br/>2. Paging 解决的问题是什么？ 优势是什么？</div>

## 代码分析

```java
// 继承于列表，那就是当做 data列表用
// 加入了 刷新，开始，介绍 三种类型，每种类型都对应下面的五种状态
// 这不是分页熟悉的逻辑吗，只不过以前是封装在View层的，
public abstract class PagedList<T> extends AbstractList<T>{
   public enum LoadType { REFRESH, START, END }
   public enum LoadState { IDLE, LOADING, DONE, ERROR, RETRYABLE_ERROR }
}
// 构造器
PagedList(@NonNull PagedStorage<T> storage,
        @NonNull Executor mainThreadExecutor,
        @NonNull Executor backgroundThreadExecutor,
        @Nullable BoundaryCallback<T> boundaryCallback,
        @NonNull Config config) {
    mStorage = storage; // ContiguousPageList 和 TiledPagedList 默认值都是 new PagedStorage<V>() 
    mMainThreadExecutor = mainThreadExecutor; // ui线程池 默认值  ArchTaskExecutor.getMainThreadExecutor()
    mBackgroundThreadExecutor = backgroundThreadExecutor; // 耗时线程池 默认值： ArchTaskExecutor.getIOThreadExecutor()
    mBoundaryCallback = boundaryCallback; // 回调 传入
    mConfig = config; // 分页配置 一般是传入
    mRequiredRemainder = mConfig.prefetchDistance * 2 + mConfig.pageSize;
}

```

## PagingSample 项目解读

看了基本的结构，接下来 看如如何使用，既然是`Pagin`是M层，那么必定是在`ViewModel`里面使用，配合`LiveData`来实现可观察 实时刷新

1. 先看数据源
```kotlin
@Query("SELECT * FROM Cheese ORDER BY name COLLATE NOCASE ASC")
fun allCheesesByName(): DataSource.Factory<Int, Cheese>
```
他没有直接返回 `PagedList` 而是返回了一个 `DataSource.Factory`， 在 `LivePagedList` 扩展了一个  `DataSource.Factory<Key, Value>.toLiveData(config...)` 的函数 用来返回 `LiveData` 类型的 `PagedList`

**CheeseDao_Impl.java** 中具体的  `DataSource.Factory` 实现类
直接 new 了 一个匿名的抽象来 来返回一个 `LimitOffsetDataSource<Cheese>`
 
```java
@Override
public DataSource.Factory<Integer, Cheese> allCheesesByName() {
final String _sql = "SELECT * FROM Cheese ORDER BY name COLLATE NOCASE ASC";
final RoomSQLiteQuery _statement = RoomSQLiteQuery.acquire(_sql, 0);
return new DataSource.Factory<Integer, Cheese>() { 
    @Override
    public LimitOffsetDataSource<Cheese> create() {
    return new LimitOffsetDataSource<Cheese>(__db, _statement, false , "Cheese") {
        @Override
        protected List<Cheese> convertRows(Cursor cursor) {
        final int _cursorIndexOfId = CursorUtil.getColumnIndexOrThrow(cursor, "id");
        final int _cursorIndexOfName = CursorUtil.getColumnIndexOrThrow(cursor, "name");
        final List<Cheese> _res = new ArrayList<Cheese>(cursor.getCount());
        while(cursor.moveToNext()) {
            final Cheese _item;
            final int _tmpId;
            _tmpId = cursor.getInt(_cursorIndexOfId);
            final String _tmpName;
            _tmpName = cursor.getString(_cursorIndexOfName);
            _item = new Cheese(_tmpId,_tmpName);
            _res.add(_item);
        }
        return _res;
        }
    };
    }
};
}
```

2. `CheeseViewModel` 通过 `DataSource` 来返回 `LiveData<PagedList<Value>> ` 

```kotlin
// 传入一个Config，主要配置 没有的数量，大小等
val allCheeses = dao.allCheesesByName().toLiveData(Config(pageSize=60, enablePlaceholders=true, maxSize=200))

// Config 是通过 PagedList.Config.Builder 构建出来的
fun Config(
    pageSize: Int,
    prefetchDistance: Int = pageSize,
    enablePlaceholders: Boolean = true,
    initialLoadSizeHint: Int =
            pageSize * PagedList.Config.Builder.DEFAULT_INITIAL_PAGE_MULTIPLIER,
    maxSize: Int = PagedList.Config.MAX_SIZE_UNBOUNDED
): PagedList.Config {
    return PagedList.Config.Builder()
            .setPageSize(pageSize)
            .setPrefetchDistance(prefetchDistance)
            .setEnablePlaceholders(enablePlaceholders)
            .setInitialLoadSizeHint(initialLoadSizeHint)
            .setMaxSize(maxSize)
            .build()
}
```

3. LimitOffsetDataSource<Cheese>.toLiveData() 直接带入实现类来分析

```kotlin 
fun <Key, Value> DataSource.Factory<Key, Value>.toLiveData(
    config: PagedList.Config,
    initialLoadKey = null,
    boundaryCallback = null,
    fetchExecutor: Executor = ArchTaskExecutor.getIOThreadExecutor()
): LiveData<PagedList<Value>> {
    return LivePagedListBuilder(this, config)
            .setInitialLoadKey(initialLoadKey)
            .setBoundaryCallback(boundaryCallback)
            .setFetchExecutor(fetchExecutor)
            .build()
}
// 经过下面一些列的封装主要做 两个事情
// 1. 创建 LiveData
// 2. 创建 PagedList 
LivePagedListBuilder.build() 
LivePagedListBuilder.create(key, PagedList.Config, PagedList.BoundaryCallback, DataSource.Factory<Key, Value>, Executor, Executor)

// LiveData 创建 : LiveData = new ComputableLiveData<PagedList<Value>>()
// PagedList =  PagedList.Builder<>().build()
// PagedList 创建 : PagedList =  PagedList.Builder<>().create(DataSource<K, T>, Executor,Executor, BoundaryCallback, Config, Key )
```

PagedList 到底怎么把数据 add 到自己的列表的呢？
在` PagedList.create() `中 最终返回的是 `ContiguousPagedList` 或者 `TiledPagedList` 通过构造来创建的对象。

```java
// ContiguousDataSource 与 PositionalDataSource 这里我们可以带入 LimitOffsetDataSource 来分析
 ContiguousDataSource<K, T> contigDataSource = (ContiguousDataSource<K, T>) dataSource;
return new ContiguousPagedList<>(contigDataSource,
        notifyExecutor,
        fetchExecutor,
        boundaryCallback,
        config,
        key,
        lastLoad);
return new TiledPagedList<>((PositionalDataSource<T>) dataSource,
                notifyExecutor,
                fetchExecutor,
                boundaryCallback,
                config,
                (key != null) ? (Integer) key : 0);
```

通过分析可知，最后调用到这里进行了 把 数据的数据 装载到了 List ，并且通过 Callback 返回了。
`LimitOffsetDataSource.loadInitial(LoadInitialParams params,LoadInitialCallback<T> callback)`

4. `LoadInitialCallbackImpl.OnResult()`
```java
@Override
public void onResult(@NonNull List<T> data, int position, int totalCount) {
    //... some code
    if (mCountingEnabled) {
        int trailingUnloadedCount = totalCount - position - data.size();
        mCallbackHelper.dispatchResultToReceiver(
                new PageResult<>(data, position, trailingUnloadedCount, 0));
    } else {
        // Only occurs when wrapped as contiguous
        mCallbackHelper.dispatchResultToReceiver(new PageResult<>(data, position));
    }
     //... some code
}
// LoadCallbackHelper.dispatchOnCurrentThread()
void dispatchOnCurrentThread(@Nullable PageResult<T> result,
        @Nullable Throwable error, boolean retryable) {
    if (result != null) {
        mReceiver.onPageResult(mResultType, result);
    } else {
        mReceiver.onPageError(mResultType, error, retryable);
    }
}
```

5. ContiguousPagedList.mReceiver or TiledPagedList.mReceiver
最终的 mReceiver 是定义在这两个实现类里面的
可以看到在这里对列表 进行了添加操作，以及 PagedList 一系列状态的管理。


回答最开始的几个问题
1. 通过分析看到，以前自己写的刷新主要是通过 在 View 层进行控制，以及加载事件的处理 加载，刷新以及状态处理。 通过 PagedList 可以看到 这些加载逻辑全部放到了 M 层，数据变化后自动会去更新（只用于Room本地数据库）

2. 在我的理解看来 它解决的主要是结合 MVVM框架而对M层在有批量加载的时候用来做分页处理，好处最明显的就是和本地数据库配合使用非常简单，易于扩张，如果你写过 分页逻辑，每个页面都是写一次 第一页 结束刷新，把数据加到头部，不是第一页把数据加到 列表尾部，结束加载更多，这个也许会成为你的菜。