<template><div><h2 id="相关地址" tabindex="-1"><a class="header-anchor" href="#相关地址" aria-hidden="true">#</a> 相关地址:</h2>
<ul>
<li><a href="http://jakewharton.github.io/butterknife/" target="_blank" rel="noopener noreferrer">ButterKnife 官网地址<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/JakeWharton/butterknife" target="_blank" rel="noopener noreferrer">ButterKnife Github<ExternalLinkIcon/></a></li>
<li><a href="http://dev.qq.com/topic/578753c0c9da73584b025875" target="_blank" rel="noopener noreferrer">ButterKnife 编译时注解,解释比较详细的一个博客<ExternalLinkIcon/></a></li>
</ul>
<h2 id="使用简介" tabindex="-1"><a class="header-anchor" href="#使用简介" aria-hidden="true">#</a> 使用简介:</h2>
<blockquote>
<p>使用butterKnife之后你会感觉很舒服,结合 <strong>Android-studio</strong> 的插件 <strong>Android Butterknife Zelezny</strong> 会更好</p>
</blockquote>
<ol>
<li>不用再输入 <code>findViewById(ResId)</code> <code>getResource(R.[string][color].resId)</code>等代码 ,这个使用的最多</li>
<li>简化事件响应流程</li>
</ol>
<h2 id="使用流程" tabindex="-1"><a class="header-anchor" href="#使用流程" aria-hidden="true">#</a> 使用流程</h2>
<blockquote>
<p>这个流程对应的是 <strong>com.jakewharton:butterknife:8.4.0</strong> 的版本 ,这个库期间更新过好几次配置,我直接描述最新配置,这里一定要注意版本对应,否则会编译报错</p>
</blockquote>
<ul>
<li>
<p>1.project 中的 <strong>build.gradle</strong> 添加 butterknife-gradle-plugin 的8.4.0的版本,</p>
<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre v-pre class="language-groovy"><code>buildscript <span class="token punctuation">{</span>
  repositories <span class="token punctuation">{</span>
    <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  dependencies <span class="token punctuation">{</span>
    classpath <span class="token string">'com.jakewharton:butterknife-gradle-plugin:8.4.0'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>2.在使用的module的<strong>build.grale</strong>中添加plugin 依赖和库依赖</p>
<p><code v-pre>apply plugin: 'com.jakewharton.butterknife'</code></p>
<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre v-pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
  compile <span class="token string">'com.jakewharton:butterknife:8.4.0'</span>
  annotationProcessor <span class="token string">'com.jakewharton:butterknife-compiler:8.4.0'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>3.开始在项目中使用<strong>ButterKnife</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token comment">// View UI</span>
    <span class="token annotation punctuation">@BindView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>login_progress<span class="token punctuation">)</span>
    <span class="token class-name">ProgressBar</span> mProgressView<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@BindView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>login_form<span class="token punctuation">)</span>
    <span class="token class-name">ScrollView</span> mLoginFormView<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@BindView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>email_login_form<span class="token punctuation">)</span>
    <span class="token class-name">LinearLayout</span> emailLoginForm<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@BindView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>email<span class="token punctuation">)</span> <span class="token class-name">AutoCompleteTextView</span> mEmailView<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@BindView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>password<span class="token punctuation">)</span> <span class="token class-name">EditText</span> mPasswordView<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@BindView</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>keystore<span class="token punctuation">)</span> <span class="token class-name">EditText</span> mKeystore<span class="token punctuation">;</span>
    
    <span class="token comment">//click event</span>
    <span class="token annotation punctuation">@OnClick</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>email_sign_in_button<span class="token punctuation">)</span> <span class="token keyword">void</span> <span class="token function">onEmailSignInButtonClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//TODO implement</span>
        <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@OnLongClick</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>email_sign_in_button<span class="token punctuation">)</span> <span class="token keyword">boolean</span> <span class="token function">onEmailSignInButtonLongClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//TODO implement</span>
            <span class="token function">attemptLogin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误" aria-hidden="true">#</a> 常见错误</h4>
<ul>
<li><code v-pre>NullPointException</code> 基本就是版本不一致导致的.</li>
</ul>
</div></template>


