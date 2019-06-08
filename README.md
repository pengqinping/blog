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

## Hexo相关命令 
|Command|Describe|
|:--|:--|
|`hexo init`|初始化项目|
|`hexo new page` "First Page"  | 创建一篇名字为 First Page 的文章 |
|`hexo server `| 启动本地服务器，并且打开index.html || `hexo generate` | 编译为静态网站, 生成静态页面文件全部放在public文件夹下面|
| `hexo deploy` | 部署到git仓库 ，把静态网站上传到|
| `hexo generate --deploy` or `hexo deploy --generate ` | 部署和生成可以一起  简写（ `hexo g -d | hexo d -g`）| 
| `hexo new post `| 创建一个新的页面 ，类似目录页面 |

## 常用模板
### 表格

```xml
|Question|Answer|
|:--|:--|
|One|First|
```
