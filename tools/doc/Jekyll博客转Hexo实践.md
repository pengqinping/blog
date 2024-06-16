
# Jekyll to Hexo

本来不准备对这次的切换做个总结的，网上的教程确实都很详情了，不过还是想记录一下这个过程和相关的操作，切换的话一路都很顺利,关键hexo还有中文。还是记录下以备不时之需

### 环境备注
> 整改前: mac + jekyll 部署到 github pages 上面 配置有(多说)
> 整改后: mac + hexo 部署到 github pages 和 conding pages  配置有(阅读统计，图片改为外链七牛，百度统计)

### 工具清单
> git,node,npm,hexo,sublime text,

### 相关地址
a. hexo官网，有详细的博客搭建教程[https://hexo.io/zh-cn/docs/](https://hexo.io/zh-cn/docs/)
b. next主题教程,主题关联详细配置[http://theme-next.iissnan.com/getting-started.html](http://theme-next.iissnan.com/getting-started.html)
c. 百度统计登录[https://tongji.baidu.com/web/welcome/login](https://tongji.baidu.com/web/welcome/login)
d. next主题下配置POST的阅读数[https://notes.wanghao.work/2015-10-21-为NexT主题添加文章阅读量统计功能.html](https://notes.wanghao.work/2015-10-21-为NexT主题添加文章阅读量统计功能.html) ，leancloud注册地址[https://leancloud.cn/](https://leancloud.cn/)
e. 博客搜索[https://www.algolia.com/](https://www.algolia.com/)
f. 七牛存储[https://www.qiniu.com/](https://www.qiniu.com/)

### Hexo deploy
这个命令确实很好用只会把编译好的静态页面进行传递到page的配置库，而源代码你可以保存在本地也可以保存在某个私有配置库如果你不想开放源代码的话，
a. 服务器上面创建配置库，并且初始化和创建好分支, github上面分支gh-pages ,coding上面分支 coding-pages.
b. 如果使用ssh协议的话，需要配置公钥用来在deploy进行代码的推送，配置方法[Github配置](https://help.github.com/articles/connecting-to-github-with-ssh/), [Coding配置](https://coding.net/user/account/setting/keys)
c. Hexo中配置deploy的

```xml
  - type: git
    repo: git@github.com:xxxx/blog.git
    branch: gh-pages
    message: hexo自动提交
  - type: git 
    repo: git@git.coding.net:xxxx/blog.git
    branch: coding-pages
    message: hexo自动提交
```

d.当本地都编译完成后提交代码到pages分支的话直接 hexo deploy


### 小问题
a. next主题教程中菜单的配置中名称和图标是分开的，不过在next5.1.3的版本中图标和菜单的路径是一起配置的，'||' 前面的是在博客中点击后指向的目录 '||'后面的是 awesome 的图标，在编写的过程中一味的按照文档来，傻不拉几的在哪里调试，然后还去看了代码，最后发现注释中有说明。

```xml
menu:
  home: / || home
  android: /android/ || android
  about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
```

b. algolia 搜索 api key 无法访问 ，在 api key 默认生成的search api key的权限不够
首先我们要配置一个环境变量 HEXO_ALGOLIA_INDEXING_KEY=apikey
```shell
export HEXO_ALGOLIA_INDEXING_KEY=apikey
```
默认apikey修改权限：在apikey的修改界面，进行权限配置，全部☑️即可



