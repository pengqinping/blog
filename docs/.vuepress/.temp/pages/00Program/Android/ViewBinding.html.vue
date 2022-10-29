<template><div><h1 id="databinding" tabindex="-1"><a class="header-anchor" href="#databinding" aria-hidden="true">#</a> DataBinding</h1>
<ul>
<li>
<p>Google文档 https://developer.android.google.cn/topic/libraries/data-binding</p>
</li>
<li>
<p>项目涉及代码库 https://gitee.com/pengqinping/architecture-components-samples/tree/master/BasicSample</p>
</li>
<li>
<p>dataBinding https://gitee.com/pengqinping/databinding-samples</p>
</li>
</ul>
<h2 id="databinding-相对比较简单" tabindex="-1"><a class="header-anchor" href="#databinding-相对比较简单" aria-hidden="true">#</a> databinding 相对比较简单</h2>
<h3 id="_1-app-开启-databinding-支持-buidle-gradle" tabindex="-1"><a class="header-anchor" href="#_1-app-开启-databinding-支持-buidle-gradle" aria-hidden="true">#</a> 1. <strong>app</strong> 开启 <code v-pre>dataBinding</code> 支持 <code v-pre>buidle.gradle</code></h3>
<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre v-pre class="language-groovy"><code>android <span class="token punctuation">{</span>
    dataBinding <span class="token punctuation">{</span>
        enabled <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-定义xml文件支持databinding-以list-fragment-xml-为例" tabindex="-1"><a class="header-anchor" href="#_2-定义xml文件支持databinding-以list-fragment-xml-为例" aria-hidden="true">#</a> 2. <strong>定义xml文件支持dataBinding 以list_fragment.xml 为例</strong></h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- 关键是layout 包裹，只有Layout包裹 DataBinding才会去识别 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res/android<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>app</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>variable</span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoading<span class="token punctuation">"</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>boolean<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>data</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- ...  somecode --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>androidx.appcompat.widget.AppCompatEditText</span>
        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/products_search_box<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0dp<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrap_content<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_weight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>hint</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@string/search_products_hint<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImageButton</span>
        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/products_search_btn<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>48dp<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>48dp<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>contentDescription</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@string/cd_search_products<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">app:</span>srcCompat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@drawable/ic_search_black_24dp<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token comment">&lt;!-- ...  somecode --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>layout</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-databinding-工具会在编译的时候-listfragmentbinding-java-文件-里面有描述-布局的代码" tabindex="-1"><a class="header-anchor" href="#_3-databinding-工具会在编译的时候-listfragmentbinding-java-文件-里面有描述-布局的代码" aria-hidden="true">#</a> 3. dataBinding 工具会在编译的时候 ListFragmentBinding.java 文件 里面有描述 布局的代码</h3>
<p>目录 app/buidl/generated/data_binding_base_class_source_out/{debug}/out/{packagname}/databinding/xxx.java</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//列举一小部分</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ListFragmentBinding</span> <span class="token keyword">extends</span> <span class="token class-name">ViewDataBinding</span> <span class="token punctuation">{</span>
<span class="token annotation punctuation">@NonNull</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">AppCompatEditText</span> productsSearchBox<span class="token punctuation">;</span>

<span class="token annotation punctuation">@NonNull</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">ImageButton</span> productsSearchBtn<span class="token punctuation">;</span>
<span class="token comment">// ... some code</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-在-fragment-实例化对象-并且使用" tabindex="-1"><a class="header-anchor" href="#_4-在-fragment-实例化对象-并且使用" aria-hidden="true">#</a> 4. 在 fragment 实例化对象 , 并且使用</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">ListFragmentBinding</span> mBinding<span class="token punctuation">;</span>
<span class="token annotation punctuation">@Nullable</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">View</span> <span class="token function">onCreateView</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">LayoutInflater</span> inflater<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ViewGroup</span> container<span class="token punctuation">,</span>
        <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mBinding <span class="token operator">=</span> <span class="token class-name">DataBindingUtil</span><span class="token punctuation">.</span><span class="token function">inflate</span><span class="token punctuation">(</span>inflater<span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>list_fragment<span class="token punctuation">,</span> container<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//... some code</span>
    <span class="token keyword">return</span> mBinding<span class="token punctuation">.</span><span class="token function">getRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onViewCreated</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NonNull</span> <span class="token class-name">View</span> view<span class="token punctuation">,</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onViewCreated</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 通过 binding 对象直接引用</span>
    mBinding<span class="token punctuation">.</span>productsSearchBtn<span class="token punctuation">.</span><span class="token function">setOnClickListener</span><span class="token punctuation">(</span>v <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token class-name">Editable</span> query <span class="token operator">=</span> mBinding<span class="token punctuation">.</span>productsSearchBox<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewModel<span class="token punctuation">.</span><span class="token function">setQuery</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在布局里面写Viewmodel就不多介绍了，写过 vue angularjs 前端的 这些很好理解， 数据绑定的概念</p>
<h2 id="baseobservablefield-和-viewmodel-在-数据绑定中的引用" tabindex="-1"><a class="header-anchor" href="#baseobservablefield-和-viewmodel-在-数据绑定中的引用" aria-hidden="true">#</a> BaseObservableField 和 ViewModel 在 数据绑定中的引用</h2>
<ul>
<li>项目地址 https://gitee.com/pengqinping/databinding-samples/tree/master</li>
</ul>
<h3 id="_1-用observableint演示" tabindex="-1"><a class="header-anchor" href="#_1-用observableint演示" aria-hidden="true">#</a> 1. 用ObservableInt演示</h3>
<ul>
<li>
<p>a.在Activity定义 ObservableInt</p>
<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre v-pre class="language-kotlin"><code><span class="token keyword">data</span> <span class="token keyword">class</span> <span class="token function">ObservableFieldProfile</span><span class="token punctuation">(</span>
    <span class="token keyword">val</span> name<span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">val</span> lastName<span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">val</span> likes<span class="token operator">:</span> ObservableInt
<span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token keyword">val</span> observableFieldProfile <span class="token operator">=</span> <span class="token function">ObservableFieldProfile</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Ada"</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"Lovelace"</span></span><span class="token punctuation">,</span> <span class="token function">ObservableInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>b.在布局定义引用</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span>
<span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res/android<span class="token punctuation">"</span></span>
<span class="token attr-name"><span class="token namespace">xmlns:</span>app</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res-auto<span class="token punctuation">"</span></span>
<span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/tools<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.example.android.databinding.basicsample.R<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.example.android.databinding.basicsample.util.ConverterUtil<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- 定义名词和类型 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>variable</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.example.android.databinding.basicsample.data.ObservableFieldProfile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- 设置文本 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xml</span>
        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{user.name}<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- 设置表达式 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xml</span> 
        <span class="token attr-name"><span class="token namespace">app:</span>srcCompat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{user.likes <span class="token entity named-entity" title="&lt;">&amp;lt;</span> 4 ? R.drawable.ic_person_black_96dp : R.drawable.ic_whatshot_black_96dp }<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- 类型转换 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xml</span> 
        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{Integer.toString(user.likes)}<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!-- 会自动调用 Activity 中的 fun OnLink 函数，Google 不推荐这么干，所以最好使用ViewModel --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">android:</span>onClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onLike<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>data</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>C. 绑定及赋值</p>
<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre v-pre class="language-kotlin"><code><span class="token keyword">val</span> binding<span class="token operator">:</span> ObservableFieldProfileBinding <span class="token operator">=</span>
            DataBindingUtil<span class="token punctuation">.</span><span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> R<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>observable_field_profile<span class="token punctuation">)</span>
    binding<span class="token punctuation">.</span>user <span class="token operator">=</span> observableFieldProfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>1.这个BaseObservableField只适合简单逻辑，加入判断比较复杂就很难受了
2.普通的BaseObservableFiled 对象改变值是需要手动去set更新的</p>
<h3 id="_2-viewmodel-livedata演示" tabindex="-1"><a class="header-anchor" href="#_2-viewmodel-livedata演示" aria-hidden="true">#</a> 2. ViewModel+LiveData演示</h3>
<p>看了ViewModel 你可能会喜欢上使用这个东西</p>
<ul>
<li>
<p>a. 定义ViewModel 和 LiveData演示</p>
<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre v-pre class="language-kotlin"><code><span class="token keyword">class</span> ProfileLiveDataViewModel <span class="token operator">:</span> <span class="token function">ViewModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">val</span> _name <span class="token operator">=</span> <span class="token function">MutableLiveData</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Ada"</span></span><span class="token punctuation">)</span> <span class="token comment">// LiveData ，数据发生变化会自动更新布局，不用在重新拿View 去set数据</span>
    <span class="token keyword">private</span> <span class="token keyword">val</span> _lastName <span class="token operator">=</span> <span class="token function">MutableLiveData</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"Lovelace"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">val</span> _likes <span class="token operator">=</span>  <span class="token function">MutableLiveData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token comment">// 这里转了一次，主要是避免 在其他地方操作 这边变量，对外自提供 可读操作，内部实现可写操作</span>
    <span class="token keyword">val</span> name<span class="token operator">:</span> LiveData<span class="token operator">&lt;</span>String<span class="token operator">></span> <span class="token operator">=</span> _name
    <span class="token keyword">val</span> lastName<span class="token operator">:</span> LiveData<span class="token operator">&lt;</span>String<span class="token operator">></span> <span class="token operator">=</span> _lastName
    <span class="token keyword">val</span> likes<span class="token operator">:</span> LiveData<span class="token operator">&lt;</span>Int<span class="token operator">></span> <span class="token operator">=</span> _likes

    <span class="token comment">// popularity is exposed as LiveData using a Transformation instead of a @Bindable property.</span>
    <span class="token comment">// 数据转换</span>
    <span class="token keyword">val</span> popularity<span class="token operator">:</span> LiveData<span class="token operator">&lt;</span>Popularity<span class="token operator">></span> <span class="token operator">=</span> Transformations<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>_likes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">when</span> <span class="token punctuation">{</span>
            it <span class="token operator">></span> <span class="token number">9</span> <span class="token operator">-></span> Popularity<span class="token punctuation">.</span>STAR
            it <span class="token operator">></span> <span class="token number">4</span> <span class="token operator">-></span> Popularity<span class="token punctuation">.</span>POPULAR
            <span class="token keyword">else</span> <span class="token operator">-></span> Popularity<span class="token punctuation">.</span>NORMAL
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// xml 中 函数调用</span>
    <span class="token keyword">fun</span> <span class="token function">onLike</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _likes<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">(</span>_likes<span class="token punctuation">.</span>value <span class="token operator">?:</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>b. 在布局中引入ViewModel</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>variable</span>
        <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewmodel<span class="token punctuation">"</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.example.android.databinding.basicsample.data.ProfileLiveDataViewModel<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>data</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 变量 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xml</span>  <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{viewmodel.lastName}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token comment">&lt;!-- 事件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>xml</span> <span class="token attr-name"><span class="token namespace">android:</span>onClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{() -> viewmodel.onLike()}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>c. 在Activity中绑定</p>
<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre v-pre class="language-kotlin"><code><span class="token comment">// Obtain binding</span>
<span class="token keyword">val</span> binding<span class="token operator">:</span> ViewmodelProfileBinding <span class="token operator">=</span>
        DataBindingUtil<span class="token punctuation">.</span><span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> R<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>viewmodel_profile<span class="token punctuation">)</span>

<span class="token comment">// Bind layout with ViewModel</span>
binding<span class="token punctuation">.</span>viewmodel <span class="token operator">=</span> viewModel

<span class="token comment">// LiveData needs the lifecycle owner</span>
binding<span class="token punctuation">.</span>lifecycleOwner <span class="token operator">=</span> <span class="token keyword">this</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="官方还介绍了一种-替换livedata-方式-bindable" tabindex="-1"><a class="header-anchor" href="#官方还介绍了一种-替换livedata-方式-bindable" aria-hidden="true">#</a> 官方还介绍了一种 替换LiveData 方式， @Bindable</h2>
<ul>
<li>https://developer.android.google.cn/topic/libraries/data-binding/observability</li>
</ul>
</div></template>


