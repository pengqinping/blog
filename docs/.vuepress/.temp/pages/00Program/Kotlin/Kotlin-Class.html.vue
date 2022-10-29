<template><div><h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3>
<blockquote>
<p>关键字 <code v-pre>class</code> 类申明由类名、类头(指定其类型参数，主构造函数)和由大括号包括的类体构成。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Empty</span> <span class="token comment">//一个类没有实体，可以省略花括号</span>

<span class="token keyword">class</span> <span class="token class-name">Invoice</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3>
<blockquote>
<p>主构造器跟在类名后</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token function">constructor</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
<span class="token comment">//主构造器没有其他注解和可见性的修饰符，可以省略这个constructor</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span>

<span class="token comment">//初始化代码可以放到`init`的初始化快中</span>

<span class="token keyword">class</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    init<span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"init class"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>次构造器</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>parent<span class="token operator">:</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      parent<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果类有一个主构造函数，每个次构造函数需要委托给主构造函数， 可以直接委托或者通过别的次构造函数间接委托。委托到同一个类的另一个构造函数用 this 关键字即可</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>val name<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> parent<span class="token operator">:</span> <span class="token class-name">Person</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建类的实例</strong></p>
<blockquote>
<p>要创建一个类的实例，我们就像普通函数一样调用构造函数：</p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>val invoice <span class="token operator">=</span> <span class="token class-name">Invoice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
val customer <span class="token operator">=</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span><span class="token string">"Joe Smith"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>类成员</strong>
包含：
-- 构造器函数和初始化块
-- 函数(成员函数)
-- 属性(成员函数)
-- 嵌套类和内部类
-- 对象声明</p>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<blockquote>
<p>在Kotlin中所有的类都有一个共同的超类 <strong>Any</strong> 对于没有超类型申明的类是默认超类
<strong>Any</strong> 只有三个成员函数  <em>equals</em>、<em>hashCode</em> 、<em>toString</em></p>
</blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//open 标注 表示允许其他类从这个类继承，默认都是final 不允许继承的。</span>
<span class="token keyword">open</span> <span class="token keyword">class</span> <span class="token class-name">Base</span><span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span>
<span class="token comment">//声明一个显示的超类</span>
<span class="token keyword">class</span> <span class="token class-name">Drived</span><span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token class-name">Base</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


