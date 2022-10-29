<template><div><p><a href="http://www.runoob.com/kotlin/kotlin-basic-syntax.html" target="_blank" rel="noopener noreferrer">本文参考地址 http://www.runoob.com/kotlin/kotlin-basic-syntax.html<ExternalLinkIcon/></a>
<a href="http://www.runoob.com/kotlin/kotlin-basic-syntax.html" target="_blank" rel="noopener noreferrer">本文参考地址  https://www.kotlincn.net/docs/tutorials/getting-started.html<ExternalLinkIcon/></a></p>
<h2 id="包申明" tabindex="-1"><a class="header-anchor" href="#包申明" aria-hidden="true">#</a> 包申明</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>twp<span class="token punctuation">.</span>kontlin<span class="token punctuation">.</span>demo</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="函数定义" tabindex="-1"><a class="header-anchor" href="#函数定义" aria-hidden="true">#</a> 函数定义</h2>
<p>函数定义使用关键字 fun，参数格式为：参数 : 类型 , 语法有点像oc</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>fun <span class="token function">sum</span><span class="token punctuation">(</span>a <span class="token operator">:</span> <span class="token class-name">Int</span> <span class="token punctuation">,</span>b<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//表达式作为函数体，返回类型自动推断： a+b 为表达式,作为了函数的返回</span>
fun <span class="token function">sum1</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">=</span> a <span class="token operator">+</span> b

<span class="token comment">// public 方法则必须明确写出返回类型</span>
<span class="token keyword">public</span> fun <span class="token function">sum2</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> a <span class="token operator">+</span> b


<span class="token comment">//无返回值的函数(类似Java中的void)：</span>
fun <span class="token function">printSum</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name">Unit</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"not public method "</span><span class="token operator">+</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// 如果是返回 Unit类型，则可以省略(对于public方法也是这样)：</span>
<span class="token keyword">public</span> fun <span class="token function">printSum1</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"public method "</span><span class="token operator">+</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lambda" tabindex="-1"><a class="header-anchor" href="#lambda" aria-hidden="true">#</a> lambda</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//lambda表达式使用实例</span>
val sumLambda<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token class-name">Int</span><span class="token punctuation">,</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span>y <span class="token operator">-></span> x<span class="token operator">+</span>y<span class="token punctuation">}</span>
val voidLambda<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token class-name">Int</span> <span class="token punctuation">,</span><span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Unit</span> <span class="token operator">=</span><span class="token punctuation">{</span>x<span class="token punctuation">,</span>y <span class="token operator">-></span> x<span class="token operator">+</span>y <span class="token punctuation">;</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">" this is unit return method"</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"lambda:"</span><span class="token operator">+</span><span class="token function">sumLambda</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">voidLambda</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量-变量" tabindex="-1"><a class="header-anchor" href="#常量-变量" aria-hidden="true">#</a> 常量&amp;变量</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//常量和变量</span>
<span class="token comment">//变量: var &lt;标识符>:&lt;类型>=&lt;初始化值></span>
val firstval<span class="token operator">:</span><span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
val secondVal <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
val thirdVal <span class="token operator">=</span> <span class="token string">"ddd"</span><span class="token punctuation">;</span>

<span class="token comment">//常量: val &lt;标识符>:&lt;类型>=&lt;初始化值></span>
<span class="token keyword">var</span> finalVar <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符模板" tabindex="-1"><a class="header-anchor" href="#字符模板" aria-hidden="true">#</a> 字符模板</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//字符串模板</span>
fun <span class="token function">stringMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Unit</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> firstString <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token comment">// 模板中的简单名称：</span>
    val s1 <span class="token operator">=</span> <span class="token string">"firstString is $firstString"</span>
    <span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
    firstString <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token comment">// 模板中的任意表达式：</span>
    val s2 <span class="token operator">=</span> <span class="token string">"${s1.replace("</span>is<span class="token string">", "</span>was<span class="token string">")}, but now is $firstString"</span>
    <span class="token function">println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="null检查机制" tabindex="-1"><a class="header-anchor" href="#null检查机制" aria-hidden="true">#</a> NULL检查机制</h2>
<p>Kotlin的空安全设计对于声明可为空的参数，在使用时要进行空判断处理，有两种处理方式，字段后加!!像Java一样抛出空异常，另一种字段后加?可不做处理返回值为 null或配合?:做空判断处理</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>fun <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token class-name">Array</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//类型后面加?表示可为空</span>
    <span class="token comment">//var age: String? = "aa"</span>
   <span class="token comment">// var age: String? = "1"</span>
    <span class="token keyword">var</span> age<span class="token operator">:</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token keyword">null</span>
     <span class="token comment">//抛出空指针异常</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        val ages <span class="token operator">=</span> age<span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ages:"</span><span class="token operator">+</span>ages<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e <span class="token operator">:</span> <span class="token class-name">KotlinNullPointerException</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"parse has exception "</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//不做处理返回 null</span>
    val ages1 <span class="token operator">=</span> age<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token comment">//age为空返回-1</span>
    val ages2 <span class="token operator">=</span> age<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"age:"</span><span class="token operator">+</span>age<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ages1:"</span><span class="token operator">+</span>ages1<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ages2:"</span><span class="token operator">+</span>ages2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>age = null</code> 输出</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>parse has exception 
age<span class="token operator">:</span><span class="token keyword">null</span>
ages1<span class="token operator">:</span><span class="token keyword">null</span>
ages2<span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>age = &quot;aa&quot;</code> 所有的 toInt()都会报错 <code v-pre>NumberFormatException</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>fun <span class="token function">parseInt</span><span class="token punctuation">(</span>str <span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token class-name">Int</span><span class="token operator">?</span><span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token class-name">NumberFormatException</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

fun <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token class-name">Array</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     val x <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">"3"</span><span class="token punctuation">)</span>
    val y <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">"4"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> y<span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//函数parseInt 声明了返回值可以为NULL所以需要对x,y进行空判断</span>
        <span class="token function">println</span><span class="token punctuation">(</span>x<span class="token operator">*</span>y<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
输出：
<span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="区间" tabindex="-1"><a class="header-anchor" href="#区间" aria-hidden="true">#</a> 区间</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>fun <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token class-name">Array</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// i >=1 &amp;&amp; i&lt;=4</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"for in 1..4  "</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i in <span class="token number">1.</span><span class="token number">.4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span> i<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// .. 表示从小到大,所以这个条件下是没有范围的</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"for in 4..1 "</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i in <span class="token number">4.</span><span class="token number">.1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// downTo  表示从大到小,</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"for in 4 downTo 1  "</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i in <span class="token number">4</span> downTo <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//step 指定步长</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"for in 4 downTo 1 step 2"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i in <span class="token number">4</span> downTo <span class="token number">1</span> step <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 使用 until 函数排除结束元素</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"for in 1 until 10"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i in <span class="token number">1</span> until <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// i in [1, 10) 排除了 10</span>
        <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// until 不区分正反</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"for in 10 until 1"</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i in <span class="token number">1</span> until <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// i in [1, 10) 排除了 10</span>
        <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kotlin-基本数据类型" tabindex="-1"><a class="header-anchor" href="#kotlin-基本数据类型" aria-hidden="true">#</a> Kotlin 基本数据类型</h2>
<blockquote>
<p>Kotlin 的基本数值类型包括 Byte、Short、Int、Long、Float、Double 等。不同于Java的是，字符不属于数值类型，是一个独立的数据类型。</p>
</blockquote>
<table>
<thead>
<tr>
<th>类型</th>
<th>位宽度</th>
</tr>
</thead>
<tbody>
<tr>
<td>Double</td>
<td>64</td>
</tr>
<tr>
<td>Float</td>
<td>32</td>
</tr>
<tr>
<td>Long</td>
<td>64</td>
</tr>
<tr>
<td>Int</td>
<td>32</td>
</tr>
<tr>
<td>Short</td>
<td>16</td>
</tr>
<tr>
<td>Byte</td>
<td>8</td>
</tr>
</tbody>
</table>
<h3 id="数字" tabindex="-1"><a class="header-anchor" href="#数字" aria-hidden="true">#</a> 数字</h3>
<p>在 Java 平台数字是物理存储为 JVM 的原生类型，除非我们需要一个可空的引用（如 Int?）或泛型。 后者情况下会把数字装箱。
在 Kotlin 中，<strong>三个等号 === 表示比较对象地址，两个 == 表示比较两个值大小。</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>fun <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token class-name">Array</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val a<span class="token operator">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">10000</span>
    val b<span class="token operator">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">10000</span>
    <span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span><span class="token operator">=</span> a<span class="token punctuation">)</span> <span class="token comment">// true，值相等，对象地址相等</span>
    <span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span><span class="token operator">=</span> b<span class="token punctuation">)</span> <span class="token comment">// true，值相等，对象地址相等</span>
    <span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token comment">// true，值相等，对象地址相等 这个时候的 a 和 b 是没有经过装箱的,空引用和泛型才会装箱</span>
    <span class="token comment">//经过了装箱，创建了两个不同的对象</span>
    val boxedA<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token operator">?</span> <span class="token operator">=</span> a
    val anotherBoxedA<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token operator">?</span> <span class="token operator">=</span> a
    <span class="token comment">//虽然经过了装箱，但是值是相等的，都是10000</span>
    <span class="token function">println</span><span class="token punctuation">(</span>boxedA <span class="token operator">==</span><span class="token operator">=</span> anotherBoxedA<span class="token punctuation">)</span> <span class="token comment">//  false，值相等，对象地址不一样</span>
    <span class="token function">println</span><span class="token punctuation">(</span>boxedA <span class="token operator">==</span> anotherBoxedA<span class="token punctuation">)</span> <span class="token comment">// true，值相等</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此较小的类型不能隐式转换为较大的类型。 这意味着在不进行显式转换的情况下我们不能把 Byte 型值赋给一个 Int 变量。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>val b<span class="token operator">:</span> <span class="token class-name">Byte</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// OK, 字面值是静态检测的</span>
val i<span class="token operator">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> b <span class="token comment">// 错误</span>
<span class="token comment">//我们可以显式转换来拓宽数字</span>
val i<span class="token operator">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// OK: 显式拓宽</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


