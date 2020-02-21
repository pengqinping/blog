# ABlog 
输出一些自己写的东西

**Some Links**
1. [hexo教程官网:https://hexo.io/zh-cn/](https://hexo.io/zh-cn/)
2. [搭建教程:https://www.ezlippi.com/blog/2016/02/jekyll-to-hexo.html](https://www.ezlippi.com/blog/2016/02/jekyll-to-hexo.html)
3. [主题推荐:http://www.jianshu.com/p/bcdbe7347c8d](http://www.jianshu.com/p/bcdbe7347c8d)
4. [next主题安装:http://theme-next.iissnan.com/getting-started.html](http://theme-next.iissnan.com/getting-started.html)

## 项目说明
* 框架: Hexo
* 主题样式: next 


## 调整博客部署
* `master` 开发分支: 只会推送到 `gitee.com` 不推送到 `github`
* `gp-page` page服务配置， 在 `_config.yml` 文件中配置把  `public` 目录进行部署
* `gitee-page` page服务配置， 在 `_config.yml` 文件中配置把  `public` 目录进行部署

## 使用NPM进行了命令管理

|Command|Describe|
|:--|:--|
|`npm start` == `hexo serve -p 4001` |启动本地服务|
|`npm run deploy` == `hexo generate --deploy` |把build 生成的文件 public 发布到 远程的 coding-pages 和 gh-pages|
|`npm run push` |自动提交 ,在运行后，等待输入的地方 输入提交日志即可自动提交 |
|`npm run page` |生成page页面 等待输入的地方需要输入标题|
|`npm run post` |生成Post页面 等待输入的地方需要输入标题|

## Hexo相关命令 

|Command|Describe|
|:--|:--|
|`hexo init`|初始化项目|
|`hexo new page` "First Page"  | 创建一篇名字为 First Page 的文章 |
|`hexo server `| 启动本地服务器，并且打开index.html | | `hexo generate` | 编译为静态网站, 生成静态页面文件全部放在public文件夹下面|
| `hexo deploy` | 部署到git仓库 ，把静态网站上传到|
| `hexo generate --deploy` or `hexo deploy --generate ` | 部署和生成可以一起  简写（ `hexo g -d | hexo d -g`）| |
| `hexo new post `| 创建一个新的页面 ，类似目录页面 |
## 常用模板
### 表格

```xml
|Question|Answer|
|:--|:--|
|One|First|
```

## 问题记录

### Next主题切换Repo
|Title|Record|
|:--|:--|
| 问题描述 | Next 主题 一般是clone 下来的 一般会有 .git 目录，所以不会被跟踪到我们项目,导致 项目的 主题样式在提交的时候不会提交，一旦你换了电脑和目录那就麻烦了。|
|Next 切换到项目的 repo| 1. 删除 /themes/next/.git 文件夹 <br> 2. 在 项目 repo 目录下执行 `git rm  -r -cached /next `<br> 3. 把Next 加入到项目 repo `git add next/`|