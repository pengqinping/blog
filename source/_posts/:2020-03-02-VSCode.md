---
title: VSCode工具常用配置
author: 认知弱点
date: 2020-03-02 23:43:02
categories: VSCode
tags: 
    - 开发工具
excerpt: "VsCode中开启 markdownload 提示， 配置代码块自动提示"
---


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