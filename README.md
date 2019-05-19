### 操作说明
1. hexo init 初始化项目
2. hexo new page "First Page" 创建一个文章
3. hexo server 启动本地服务查看效果
4. hexo generate 文件部署前需要生成
5. hexo deploy 部署到git仓库，
6. 部署和生成可以一起 hexo generate --deploy  ||  hexo deploy --generate  || 简写（ hexo g -d | hexo d -g）
说明：编译代码全部提交到 master 分支，使用 hexo deploy 自动推送到 gh-pages/condig-pages 分支, 不能自己手动进行推送代码到 生成网页的分支

 
### 相关命名
```xml 
hexo server --启动服务
hexo generate --生成静态页面文件全部放在public文件夹下面
hexo deploy --自动部署到相应的代码库，目前配置了两个，github&coding
hexo new page "page"
hexo new post 
```

### 搭建hexo博客相关网址
1. [hexo教程官网:https://hexo.io/zh-cn/](https://hexo.io/zh-cn/)
2. [搭建教程:https://www.ezlippi.com/blog/2016/02/jekyll-to-hexo.html](https://www.ezlippi.com/blog/2016/02/jekyll-to-hexo.html)
3. [主题推荐:http://www.jianshu.com/p/bcdbe7347c8d](http://www.jianshu.com/p/bcdbe7347c8d)
4. [next主题安装:http://theme-next.iissnan.com/getting-started.html](http://theme-next.iissnan.com/getting-started.html)


### 问题解决
1. Testing HEXO_ALGOLIA_INDEXING_KEY permissions.
   配置下 Search-Only API Key的权限就可以了，不要自己新建key

2. 新增gitment评论，