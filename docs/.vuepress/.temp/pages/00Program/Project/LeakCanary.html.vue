<template><div><blockquote>
<p>很给力的分析工具，基本上能够解决内存泄露的大部分场景，比MAT看起来清晰。</p>
</blockquote>
<h2 id="常见的内存泄露的几种场景" tabindex="-1"><a class="header-anchor" href="#常见的内存泄露的几种场景" aria-hidden="true">#</a> 常见的内存泄露的几种场景</h2>
<ol>
<li>数据库中的<code v-pre>Cursor</code>没有关闭;</li>
<li>广播接收器没有销毁;</li>
<li>IO 操作没有进行关闭</li>
<li>Bitmap没有销毁</li>
<li>context 泄露</li>
<li>Handler 泄露</li>
<li>线程泄露</li>
<li>Adapter 每次都直接 new View 返回。</li>
</ol>
<h2 id="leakcanary-使用" tabindex="-1"><a class="header-anchor" href="#leakcanary-使用" aria-hidden="true">#</a> LeakCanary 使用：</h2>
<blockquote>
<p>首先贴下 github的地址： <a href="https://github.com/square/leakcanary" target="_blank" rel="noopener noreferrer">https://github.com/square/leakcanary<ExternalLinkIcon/></a>使用方法参考README.md文件。</p>
</blockquote>
<p>有网络的情况下使用就很方便了。like this</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> dependencies <span class="token punctuation">{</span>
   debugCompile 'com<span class="token punctuation">.</span>squareup<span class="token punctuation">.</span>leakcanary<span class="token operator">:</span>leakcanary<span class="token operator">-</span>android<span class="token operator">:</span><span class="token number">1.3</span><span class="token number">.1</span>' <span class="token comment">// or 1.4-beta1</span>
   releaseCompile 'com<span class="token punctuation">.</span>squareup<span class="token punctuation">.</span>leakcanary<span class="token operator">:</span>leakcanary<span class="token operator">-</span>android<span class="token operator">-</span>no<span class="token operator">-</span>op<span class="token operator">:</span><span class="token number">1.3</span><span class="token number">.1</span>' <span class="token comment">// or 1.4-beta1</span>
   testCompile 'com<span class="token punctuation">.</span>squareup<span class="token punctuation">.</span>leakcanary<span class="token operator">:</span>leakcanary<span class="token operator">-</span>android<span class="token operator">-</span>no<span class="token operator">-</span>op<span class="token operator">:</span><span class="token number">1.3</span><span class="token number">.1</span>' <span class="token comment">// or 1.4-beta1</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>debugCompile</code> 表示只会在debug模式下才会去使用这个依赖，<code v-pre>releaseCompile</code> 表示只在发布正式版本的时候区使用这个依赖。这种模式非常方便我们在发布不同的包可以不用修改代码而取消到某些功能。
没有网络的开发环境就很辛苦了需要自己下载jar。这里我打包了leakcanary-jar-1.3的包，包括haha 包。<a href="https://github.com/pengqinping/leakcanary-demo/blob/master/download/leakcanary-jar.zip" target="_blank" rel="noopener noreferrer">下载<ExternalLinkIcon/></a></p>
<p>下载之后通过 import library project with jar/aar 即可。</p>
<h4 id="leak-canary-案例分析-demo直接使用liaohuqiu的demo" tabindex="-1"><a class="header-anchor" href="#leak-canary-案例分析-demo直接使用liaohuqiu的demo" aria-hidden="true">#</a> leak Canary 案例分析 demo直接使用<a href="https://github.com/liaohuqiu/leakcanary-demo" target="_blank" rel="noopener noreferrer">liaohuqiu<ExternalLinkIcon/></a>的demo,</h4>
<ol>
<li>静态持有 activity fragment 等生命周期短的 视图控件</li>
</ol>
<p><code v-pre>TestActivity.java</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_test<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TextView</span> textView <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TextView</span><span class="token punctuation">)</span> <span class="token function">findViewById</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>test_text_view<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TestDataModel</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setRetainedTextView</span><span class="token punctuation">(</span>textView<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>TestDataModel</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">TestDataModel</span> sInstance<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">TextView</span> mRetainedTextView<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">TestDataModel</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestDataModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRetainedTextView</span><span class="token punctuation">(</span><span class="token class-name">TextView</span> textView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mRetainedTextView <span class="token operator">=</span> textView<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就会有一个泄露，TestDataModel的单例对象会持有TestActivity 的 textView对象的引用，如果这个单例无法销毁就会有内存泄露，这个使用只需要进入 TestActivity后在退出leakcanary 就会检测到内存泄露。并且有相关的描述</p>
<p><img src="@source/assets/static_class_with_view.jpg" alt=""></p>
<p>2.handler 发送消息在activity destory的时候没有停止，导致activity不能被释放，</p>
<p><code v-pre>HandlerLeakAcivity.java</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setContentView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>activity_handler_leak<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mHandler<span class="token punctuation">.</span><span class="token function">postDelayed</span><span class="token punctuation">(</span>loopRunable<span class="token punctuation">,</span> <span class="token number">4000l</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Handler</span> mHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Runnable</span> loopRunable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">"lll"</span><span class="token punctuation">,</span> <span class="token string">"loopRunnable is Running"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mHandler<span class="token punctuation">.</span><span class="token function">postDelayed</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">3000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/assets/handler_leak.jpg" alt="leak_handler"></p>
<p><small class="img-hint">赶紧为你的项目添加 leakcanary 检测下是否有内存泄露吧 </small></p>
</div></template>


