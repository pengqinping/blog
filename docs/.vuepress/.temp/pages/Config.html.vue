<template><div><h2 id="mkdocs" tabindex="-1"><a class="header-anchor" href="#mkdocs" aria-hidden="true">#</a> MkDocs</h2>
<p>MKdoc 用于生成静态页面，Mkdocs 的 markdown 的解析能力基于</p>
<p><strong>MkDocs</strong></p>
<ul>
<li>mkdoc-github: https://github.com/mkdocs/mkdocs</li>
<li>mkdoc-docs: https://www.mkdocs.org/</li>
</ul>
<p><strong>Material for MkDocs</strong></p>
<ul>
<li>material-github: https://github.com/squidfunk/mkdocs-material.git</li>
<li>material-docs:  https://squidfunk.github.io/mkdocs-material/</li>
</ul>
<h2 id="vuepress-v2" tabindex="-1"><a class="header-anchor" href="#vuepress-v2" aria-hidden="true">#</a> VuePress V2</h2>
<h2 id="package-json-command" tabindex="-1"><a class="header-anchor" href="#package-json-command" aria-hidden="true">#</a> Package.json - command</h2>
<ul>
<li><code v-pre>mk-deploy-github</code>:  自动发布编译后的 site 到 gh-pages 分支
<ul>
<li>deploy 命令执行的前提条件是 通过 subtree 来实现，所以需要提前建立号关联关系</li>
<li>subtree push 前，需要把改动生成 commit</li>
<li><code v-pre>mk-deploy-gitee</code> 同理</li>
</ul>
</li>
</ul>
<ul>
<li><code v-pre>push</code>: 做了git提交集成, 只需要输入注释即可完成 commit and push</li>
</ul>
</div></template>


