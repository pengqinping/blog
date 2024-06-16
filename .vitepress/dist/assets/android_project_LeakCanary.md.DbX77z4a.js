import{_ as s,c as a,o as i,a1 as n}from"./chunks/framework.D1yuQFjT.js";const e="/blog/assets/static_class_with_view.DrtrAYH3.jpg",t="/blog/assets/handler_leak.jIkRIufS.jpg",F=JSON.parse('{"title":"LeakCanary","description":"","frontmatter":{},"headers":[],"relativePath":"android/project/LeakCanary.md","filePath":"android/project/LeakCanary.md"}'),l={name:"android/project/LeakCanary.md"},h=n(`<h1 id="leakcanary" tabindex="-1">LeakCanary <a class="header-anchor" href="#leakcanary" aria-label="Permalink to &quot;LeakCanary&quot;">​</a></h1><blockquote><p>很给力的分析工具，基本上能够解决内存泄露的大部分场景，比 MAT 看起来清晰。</p></blockquote><h2 id="常见的内存泄露的几种场景" tabindex="-1">常见的内存泄露的几种场景 <a class="header-anchor" href="#常见的内存泄露的几种场景" aria-label="Permalink to &quot;常见的内存泄露的几种场景&quot;">​</a></h2><ol><li>数据库中的<code>Cursor</code>没有关闭;</li><li>广播接收器没有销毁;</li><li>IO 操作没有进行关闭</li><li>Bitmap 没有销毁</li><li>context 泄露</li><li>Handler 泄露</li><li>线程泄露</li><li>Adapter 每次都直接 new View 返回。</li></ol><h2 id="leakcanary-使用" tabindex="-1">LeakCanary 使用： <a class="header-anchor" href="#leakcanary-使用" aria-label="Permalink to &quot;LeakCanary 使用：&quot;">​</a></h2><blockquote><p>首先贴下 github 的地址： <a href="https://github.com/square/leakcanary" target="_blank" rel="noreferrer">https://github.com/square/leakcanary</a>使用方法参考 README.md 文件。</p></blockquote><p>有网络的情况下使用就很方便了。like this</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dependencies {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   debugCompile </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;com.squareup.leakcanary:leakcanary-android:1.3.1&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // or 1.4-beta1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   releaseCompile </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;com.squareup.leakcanary:leakcanary-android-no-op:1.3.1&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // or 1.4-beta1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   testCompile </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;com.squareup.leakcanary:leakcanary-android-no-op:1.3.1&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // or 1.4-beta1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><p><code>debugCompile</code> 表示只会在 debug 模式下才会去使用这个依赖，<code>releaseCompile</code> 表示只在发布正式版本的时候区使用这个依赖。这种模式非常方便我们在发布不同的包可以不用修改代码而取消到某些功能。 没有网络的开发环境就很辛苦了需要自己下载 jar。这里我打包了 leakcanary-jar-1.3 的包，包括 haha 包。<a href="https://github.com/pengqinping/leakcanary-demo/blob/master/download/leakcanary-jar.zip" target="_blank" rel="noreferrer">下载</a></p><p>下载之后通过 import library project with jar/aar 即可。</p><h4 id="leak-canary-案例分析-demo-直接使用liaohuqiu的-demo" tabindex="-1">leak Canary 案例分析 demo 直接使用<a href="https://github.com/liaohuqiu/leakcanary-demo" target="_blank" rel="noreferrer">liaohuqiu</a>的 demo, <a class="header-anchor" href="#leak-canary-案例分析-demo-直接使用liaohuqiu的-demo" aria-label="Permalink to &quot;leak Canary 案例分析 demo 直接使用[liaohuqiu](https://github.com/liaohuqiu/leakcanary-demo)的 demo,&quot;">​</a></h4><ol><li>静态持有 activity fragment 等生命周期短的 视图控件</li></ol><p><code>TestActivity.java</code></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Bundle savedInstanceState) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(savedInstanceState);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        setContentView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(R.layout.activity_test);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        TextView textView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (TextView) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findViewById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(R.id.test_text_view);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        TestDataModel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setRetainedTextView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(textView);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><p><code>TestDataModel</code></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TestDataModel sInstance;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TextView mRetainedTextView;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TestDataModel </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (sInstance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            sInstance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestDataModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sInstance;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setRetainedTextView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TextView textView) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mRetainedTextView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> textView;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><p>这样就会有一个泄露，TestDataModel 的单例对象会持有 TestActivity 的 textView 对象的引用，如果这个单例无法销毁就会有内存泄露，这个使用只需要进入 TestActivity 后在退出 leakcanary 就会检测到内存泄露。并且有相关的描述</p><p><img src="`+e+`" alt=""></p><p>2.handler 发送消息在 activity destory 的时候没有停止，导致 activity 不能被释放，</p><p><code>HandlerLeakAcivity.java</code></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Bundle savedInstanceState) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onCreate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(savedInstanceState);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        setContentView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(R.layout.activity_handler_leak);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        mHandler.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postDelayed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(loopRunable, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4000l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Handler mHandler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Handler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Runnable loopRunable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Runnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lll&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loopRunnable is Running&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            mHandler.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postDelayed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span></code></pre></div><p><img src="`+t+'" alt="leak_handler"></p><p><small class="img-hint">赶紧为你的项目添加 leakcanary 检测下是否有内存泄露吧 </small></p>',23),p=[h];function k(r,d,E,o,c,y){return i(),a("div",null,p)}const u=s(l,[["render",k]]);export{F as __pageData,u as default};