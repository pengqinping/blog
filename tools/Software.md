# 常用软件配置 VsCode Sublime As

## Vscode

### VSCode markdown 中开启自动提示

VSCode 中 markdown 不会开启默认提示需要自己配置

```json
 "[markdown]": {
        "editor.quickSuggestions": true
    },
```

### VSCode 配置 代码块

1. VSCode --> 首选项 --> 用户代码块 --> 选择对应的语言
2. 以下以 通用为例

```json
// 片段 描述
"format backgroud in markdown": {
    "prefix": "html_deprecate_bg", //prefix 关键字
    "body": [
        "<span style='background-color:#FEEFE3;color:#BF350B;padding:3px'>$1</span>",
        "$2"
    ], // body 是 代码片段的内容
    "description": "format backgroud in markdown" // 描述
}
```

## Sublime

### Sublime Text 3 配置 `Code Snippet`

1. “Tools”->"Developer"->“New Snippet...”

```xml
<snippet>
	<content><![CDATA[
Hello, ${1:this} is a ${2:snippet}.
]]></content>
	<!-- Optional: 配置用来自动提示的关键字 -->
	<tabTrigger>hello</tabTrigger>
	<!-- Optional: 配置在哪些语言环境下才会触发, 不配置的情况下全局都是 -->
	<!-- <scope>source.python</scope> -->
</snippet>
```

2. 命名格式 `*.sublime-snippet` 一定是以 <span style='background-color:#FEEFE3;color:#BF350B;padding:3px'>.sublime-snippet</span> 的格式保存

### Sublime Text 3 开启自动换行

1. 打开 Preferences -> Setting - User（设置 - 用户）
2. 添加配置 "word_wrap" : true

```json
{
  "color_scheme": "Packages/Dracula Color Scheme/Dracula.tmTheme",
  // some config ....
  "word_wrap": true
}
```

## 七牛测试域名过期之后，图片无法备份，qshell 也不行，还有别的办法吗，求助?

- 1.您绑定自定义域名后可以继续使用

- 2.如果您没有域名，可以用下面方法下载
  有两种方式来获取文件：

### 2.1 您需要先新建一个同区域存储空间，会分配一个新的测试域名到新空间。

例如：之前有一个 A 存储空间过期了，现在新建一个 B 存储空间
通过<code>qshell batchcopy</code>到有域名的同区域空间然后再进行<code>qdownload</code>下载操作

- <code>qshell listbucket A list.txt</code> （列出 A 空间的所有文件，保持在 list.txt 文件中）
- <code>cat list.txt | awk '{print $1}' >list_final.txt</code>（ 用 awk 获取 list 结果的第一列）
- <code>cqshell batchcopy A B list_final.txt</code>（复制到新 bucket 的文件和原 bucket 文件名一致,可以完成）
- 4<code>cqshell qdownload newfilelist.txt</code> （newfilelist.txt 为下载的配置文档，）

> qshell 安装包及文档请参考https://developer.qiniu.com/kodo/tools/1302/qshell
> 如果您不熟悉命令行工具的安装使用，也可以结合文档最后提供的视频教程 https://developer.qiniu.com/kodo/tools/1302/qshell#9

### 2.2 使用工具 qrsctl

https://developer.qiniu.com/kodo/tools/1300/qrsctl
qrsctl get
