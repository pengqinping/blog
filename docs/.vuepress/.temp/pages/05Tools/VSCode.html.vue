<template><div><h3 id="vscode-markdown-中开启自动提示" tabindex="-1"><a class="header-anchor" href="#vscode-markdown-中开启自动提示" aria-hidden="true">#</a> VSCode markdown 中开启自动提示</h3>
<p>VSCode 中 markdown 不会开启默认提示需要自己配置</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code> <span class="token property">"[markdown]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"editor.quickSuggestions"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscode-配置-代码块" tabindex="-1"><a class="header-anchor" href="#vscode-配置-代码块" aria-hidden="true">#</a> VSCode 配置 代码块</h3>
<ol>
<li>VSCode --&gt; 首选项 --&gt; 用户代码块 --&gt; 选择对应的语言</li>
<li>以下以 通用为例</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 片段 描述</span>
<span class="token property">"format backgroud in markdown"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"html_deprecate_bg"</span><span class="token punctuation">,</span> <span class="token comment">//prefix 关键字</span>
    <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"&lt;span style='background-color:#FEEFE3;color:#BF350B;padding:3px'>$1&lt;/span>"</span><span class="token punctuation">,</span>
        <span class="token string">"$2"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// body 是 代码片段的内容</span>
    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"format backgroud in markdown"</span> <span class="token comment">// 描述</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


