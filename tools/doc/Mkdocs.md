
# MkDocs

MKdoc 用于生成静态页面，Mkdocs 的 markdown 的解析能力基于

__MkDocs__

- mkdoc-github:  https://github.com/mkdocs/mkdocs
- mkdoc-docs:  https://www.mkdocs.org/

__Material for MkDocs__

- material-github: https://github.com/squidfunk/mkdocs-material.git
- material-docs:  https://squidfunk.github.io/mkdocs-material/

## Package.json - command

* `mk-deploy-github`:  自动发布编译后的 site 到 gh-pages 分支
    * deploy 命令执行的前提条件是 通过 subtree 来实现，所以需要提前建立号关联关系
    * subtree push 前，需要把改动生成 commit 
    * `mk-deploy-gitee` 同理

- `push`: 做了git提交集成, 只需要输入注释即可完成 commit and push 