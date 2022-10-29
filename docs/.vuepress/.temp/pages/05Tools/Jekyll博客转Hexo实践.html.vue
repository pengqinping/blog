<template><div><p>本来不准备对这次的切换做个总结的，网上的教程确实都很详情了，不过还是想记录一下这个过程和相关的操作，切换的话一路都很顺利,关键hexo还有中文。还是记录下以备不时之需</p>
<h3 id="环境备注" tabindex="-1"><a class="header-anchor" href="#环境备注" aria-hidden="true">#</a> 环境备注</h3>
<blockquote>
<p>整改前: mac + jekyll 部署到 github pages 上面 配置有(多说)
整改后: mac + hexo 部署到 github pages 和 conding pages  配置有(阅读统计，图片改为外链七牛，百度统计)</p>
</blockquote>
<h3 id="工具清单" tabindex="-1"><a class="header-anchor" href="#工具清单" aria-hidden="true">#</a> 工具清单</h3>
<blockquote>
<p>git,node,npm,hexo,sublime text,</p>
</blockquote>
<h3 id="相关地址" tabindex="-1"><a class="header-anchor" href="#相关地址" aria-hidden="true">#</a> 相关地址</h3>
<p>a. hexo官网，有详细的博客搭建教程<a href="https://hexo.io/zh-cn/docs/" target="_blank" rel="noopener noreferrer">https://hexo.io/zh-cn/docs/<ExternalLinkIcon/></a>
b. next主题教程,主题关联详细配置<a href="http://theme-next.iissnan.com/getting-started.html" target="_blank" rel="noopener noreferrer">http://theme-next.iissnan.com/getting-started.html<ExternalLinkIcon/></a>
c. 百度统计登录<a href="https://tongji.baidu.com/web/welcome/login" target="_blank" rel="noopener noreferrer">https://tongji.baidu.com/web/welcome/login<ExternalLinkIcon/></a>
d. next主题下配置POST的阅读数<a href="https://notes.wanghao.work/2015-10-21-%E4%B8%BANexT%E4%B8%BB%E9%A2%98%E6%B7%BB%E5%8A%A0%E6%96%87%E7%AB%A0%E9%98%85%E8%AF%BB%E9%87%8F%E7%BB%9F%E8%AE%A1%E5%8A%9F%E8%83%BD.html" target="_blank" rel="noopener noreferrer">https://notes.wanghao.work/2015-10-21-为NexT主题添加文章阅读量统计功能.html<ExternalLinkIcon/></a> ，leancloud注册地址<a href="https://leancloud.cn/" target="_blank" rel="noopener noreferrer">https://leancloud.cn/<ExternalLinkIcon/></a>
e. 博客搜索<a href="https://www.algolia.com/" target="_blank" rel="noopener noreferrer">https://www.algolia.com/<ExternalLinkIcon/></a>
f. 七牛存储<a href="https://www.qiniu.com/" target="_blank" rel="noopener noreferrer">https://www.qiniu.com/<ExternalLinkIcon/></a></p>
<h3 id="hexo-deploy" tabindex="-1"><a class="header-anchor" href="#hexo-deploy" aria-hidden="true">#</a> Hexo deploy</h3>
<p>这个命令确实很好用只会把编译好的静态页面进行传递到page的配置库，而源代码你可以保存在本地也可以保存在某个私有配置库如果你不想开放源代码的话，
a. 服务器上面创建配置库，并且初始化和创建好分支, github上面分支gh-pages ,coding上面分支 coding-pages.
b. 如果使用ssh协议的话，需要配置公钥用来在deploy进行代码的推送，配置方法<a href="https://help.github.com/articles/connecting-to-github-with-ssh/" target="_blank" rel="noopener noreferrer">Github配置<ExternalLinkIcon/></a>, <a href="https://coding.net/user/account/setting/keys" target="_blank" rel="noopener noreferrer">Coding配置<ExternalLinkIcon/></a>
c. Hexo中配置deploy的</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>  - type: git
    repo: git@github.com:xxxx/blog.git
    branch: gh-pages
    message: hexo自动提交
  - type: git 
    repo: git@git.coding.net:xxxx/blog.git
    branch: coding-pages
    message: hexo自动提交
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>d.当本地都编译完成后提交代码到pages分支的话直接 hexo deploy</p>
<h3 id="小问题" tabindex="-1"><a class="header-anchor" href="#小问题" aria-hidden="true">#</a> 小问题</h3>
<p>a. next主题教程中菜单的配置中名称和图标是分开的，不过在next5.1.3的版本中图标和菜单的路径是一起配置的，'||' 前面的是在博客中点击后指向的目录 '||'后面的是 awesome 的图标，在编写的过程中一味的按照文档来，傻不拉几的在哪里调试，然后还去看了代码，最后发现注释中有说明。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>menu:
  home: / || home
  android: /android/ || android
  about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. algolia 搜索 api key 无法访问 ，在 api key 默认生成的search api key的权限不够
首先我们要配置一个环境变量 HEXO_ALGOLIA_INDEXING_KEY=apikey</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HEXO_ALGOLIA_INDEXING_KEY</span><span class="token operator">=</span>apikey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认apikey修改权限：在apikey的修改界面，进行权限配置，全部☑️即可</p>
</div></template>


