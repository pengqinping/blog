import{_ as o,c as t,o as e,a1 as a}from"./chunks/framework.D1yuQFjT.js";const p=JSON.parse('{"title":"MkDocs","description":"","frontmatter":{},"headers":[],"relativePath":"tools/doc/Mkdocs.md","filePath":"tools/doc/Mkdocs.md"}'),s={name:"tools/doc/Mkdocs.md"},r=a('<h1 id="mkdocs" tabindex="-1">MkDocs <a class="header-anchor" href="#mkdocs" aria-label="Permalink to &quot;MkDocs&quot;">​</a></h1><p>MKdoc 用于生成静态页面，Mkdocs 的 markdown 的解析能力基于</p><p><strong>MkDocs</strong></p><ul><li>mkdoc-github: <a href="https://github.com/mkdocs/mkdocs" target="_blank" rel="noreferrer">https://github.com/mkdocs/mkdocs</a></li><li>mkdoc-docs: <a href="https://www.mkdocs.org/" target="_blank" rel="noreferrer">https://www.mkdocs.org/</a></li></ul><p><strong>Material for MkDocs</strong></p><ul><li>material-github: <a href="https://github.com/squidfunk/mkdocs-material.git" target="_blank" rel="noreferrer">https://github.com/squidfunk/mkdocs-material.git</a></li><li>material-docs: <a href="https://squidfunk.github.io/mkdocs-material/" target="_blank" rel="noreferrer">https://squidfunk.github.io/mkdocs-material/</a></li></ul><h2 id="package-json-command" tabindex="-1">Package.json - command <a class="header-anchor" href="#package-json-command" aria-label="Permalink to &quot;Package.json - command&quot;">​</a></h2><ul><li><code>mk-deploy-github</code>: 自动发布编译后的 site 到 gh-pages 分支 <ul><li>deploy 命令执行的前提条件是 通过 subtree 来实现，所以需要提前建立号关联关系</li><li>subtree push 前，需要把改动生成 commit</li><li><code>mk-deploy-gitee</code> 同理</li></ul></li></ul><ul><li><code>push</code>: 做了git提交集成, 只需要输入注释即可完成 commit and push</li></ul>',9),c=[r];function i(l,d,m,n,k,h){return e(),t("div",null,c)}const _=o(s,[["render",i]]);export{p as __pageData,_ as default};