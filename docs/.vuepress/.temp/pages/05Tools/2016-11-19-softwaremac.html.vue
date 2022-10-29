<template><div><h2 id="sublime-text-3-配置-code-snippet" tabindex="-1"><a class="header-anchor" href="#sublime-text-3-配置-code-snippet" aria-hidden="true">#</a> Sublime Text 3 配置 <code v-pre>Code Snippet</code></h2>
<ol>
<li>“Tools”-&gt;&quot;Developer&quot;-&gt;“New Snippet...”</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snippet</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>content</span><span class="token punctuation">></span></span><span class="token cdata">&lt;![CDATA[
Hello, ${1:this} is a ${2:snippet}.
]]></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>content</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- Optional: 配置用来自动提示的关键字 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tabTrigger</span><span class="token punctuation">></span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tabTrigger</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- Optional: 配置在哪些语言环境下才会触发, 不配置的情况下全局都是 --></span>
	<span class="token comment">&lt;!-- &lt;scope>source.python&lt;/scope> --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snippet</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>命名格式 <code v-pre>*.sublime-snippet</code> 一定是以 <span style='background-color:#FEEFE3;color:#BF350B;padding:3px'>.sublime-snippet</span> 的格式保存</li>
</ol>
<h2 id="sublime-text-3-开启自动换行" tabindex="-1"><a class="header-anchor" href="#sublime-text-3-开启自动换行" aria-hidden="true">#</a> Sublime Text 3 开启自动换行</h2>
<ol>
<li>打开 Preferences -&gt; Setting - User（设置 - 用户）</li>
<li>添加配置 &quot;word_wrap&quot; : true</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"color_scheme"</span><span class="token operator">:</span> <span class="token string">"Packages/Dracula Color Scheme/Dracula.tmTheme"</span><span class="token punctuation">,</span>
	<span class="token comment">// some config .... </span>
	<span class="token property">"word_wrap"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


