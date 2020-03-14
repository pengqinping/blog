---
layout: post
title: "SublimeT text 3"
header-color: "#FBC562"
date:       2016-11-19rake
author:     认知弱点
categories: 工具使用
excerpt: "Sublime Text 3 配置 Code Snippet"
tags: 
    - Sublime Text
    - Mac tools

---

#### Sublime Text 3 配置 `Code Snippet`
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


#### Sublime Text 3 开启自动换行

1. 打开 Preferences -> Setting - User（设置 - 用户）
2. 添加配置 "word_wrap" : true
```json
{
	"color_scheme": "Packages/Dracula Color Scheme/Dracula.tmTheme",
	// some config .... 
	"word_wrap": true
}
```





