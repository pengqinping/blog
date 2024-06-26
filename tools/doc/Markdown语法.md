---
title: MarkDown 语法备忘录
author: 认知弱点
date: 2017-10-22 09:59:25
categories: 工具使用
tags:
  - markdown
excerpt: "Markdown 基本使用教程"  
---

# MarkDown

写博客的过程中总喜欢忘记md语法，然后去百度比较浪费时间。这里记录下平时常用的md语法
From - github: https://docs.github.com/en/rest/markdown

### MarkDown思想
可读性，无论如何，都是最重要的。一份使用 Markdown 格式撰写的文件应该可以直接以纯文本发布，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的影响，包括 `Setext`、`atx`、`Textile`、`reStructuredText`、`Grutatext` 和 `EtText`，而最大灵感来源其实是纯文本电子邮件的格式。

总之， Markdown 的语法全由一些符号所组成，这些符号经过精挑细选，其作用一目了然。比如：在文字两旁加上星号，看起来就像`*强调*`。Markdown 的列表看起来，嗯，就是列表。Markdown 的区块引用看起来就真的像是引用一段文字，就像你曾在电子邮件中见过的那样。

### 兼容Html
直接编写 html标签在markdown 无需其他标志，要制约的只有一些 HTML 区块元素――比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行与其它内容区隔开，还要求它们的开始标签与结尾标签不能用制表符或空格来缩进。

```HTML
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```

**请注意**，在 HTML 区块标签间的 Markdown 格式语法将不会被处理。比如，你在 HTML 区块内使用 Markdown 样式的`*强调*`会没有效果。


### 特殊字符转换
`<`和`&`特殊字符的处理，HTMl中如果你需要显示 `<`和`&`必须使用他们的实体 `&lt;`和`&amp;`来表示
在md中可以直接使用 < & 包括在代码块中,例如
```html
4 < 5 
AT&T
```

### 区块元素
> 一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）。普通段落不该用空格或制表符来缩进。

#### 标题 利用 `=` （最高阶标题）和 `-` （第二阶标题）
```html
底部双横线
=======

底部单横线
-------
```
#### 标题 利用 `#` （最高阶标题）
```html
# 表示标题1
## 表示标题2
###### 标题6
```

#### 区块引用
```html
a. 每行都添加 `>`
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.

b. 段落的第一行添加
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
m.......

c. 多层段落
> This is the first level of quoting.
> 
> > This is nested blockquote
> Back to the first level

```

#### 区块效果展示区：
a. 每行都添加 `>`
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.

b. 段落的第一行添加
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
m.......

c. 多层段落
> This is the first level of quoting.
> 
> > This is nested blockquote
> Back to the first level


### 列表
标记符号有 `*`,`+`,`-`,`数组.`,
```html
* First
* Second
* Threed

+ Red
+ Green
+ Bue

1. Bird
2. McHale
3. Parish
```
列表效果展示如下：
* First
* Second
* Threed

+ Red
+ Green
+ Bue

1. Bird
2. McHale
3. Parish

#### 列表包含段落
列表项目可以包含多个段落，每个项目下的段落都必须缩进**4**个空格或是**1**个制表符：
```html
1.    This is a list item with two paragraphs. Lorem ipsum dolor
      sit amet, consectetuer adipiscing elit. Aliquam hendrerit
      mi posuere lectus.
      
      Vestibulum enim wisi, viverra nec, fringilla in, laoreet
      vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
      sit amet velit.

2.    Suspendisse id sem consectetuer libero luctus adipiscing.
```
效果展示如下：
1.    This is a list item with two paragraphs. Lorem ipsum dolor
      sit amet, consectetuer adipiscing elit. Aliquam hendrerit
      mi posuere lectus.
      
      Vestibulum enim wisi, viverra nec, fringilla in, laoreet
      vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
      sit amet velit.
      
2.    Suspendisse id sem consectetuer libero luctus adipiscing.

#### 列表包含引用
如果要在列表项目内放进引用，那 `>` 就需要缩进,缩进规则**4**个空格和**1**个tab：
```html
* A list item with a block
    > This is a block quote
    > This is a block quote
```
效果演示如下：
* A list item with a block
    > This is a block quote
    > This is a block quote

#### 列表包含代码块
如果要放代码区块的话，该区块就需要缩进两次，也就是**8**个空格或是**2**个制表符：
```html
* A list item with a blockquote
        
        This is a code in the list item

```
效果演示如下：
* A list item with a blockquote
        
        This is a code in the list item

#### 如果行首出现数组+点的组合`100.` 需要做特殊处理
```html
1986\. What a great season.
```

### 分割线
一行中可以使用3个或者3个以上的`*`,`-`,`_` 来进行一个风格线
```html
***
---
____
```
效果演示如下：

*****

----

____


### 超链接
Markdown 支持两种形式的链接语法： 行内式和参考式两种形式。
```html
行内式: 
This is [an example](http://example.com/ "Title") inline link.
[This link](http://example.net/) has no title attribute.

参考式:
The click goto [first][1]
The click goto [second][2]

[1]: https://www.baidu.com "百度"
[2]: https://google.com "Google"

```
效果如下
This is [an example](http://example.com/ "Title") inline link.
[This link](http://example.net/) has no title attribute.

参考式:
The click goto [first][1]
The click goto [second][2]

[1]: https://www.baidu.com "百度"
[2]: https://google.com "Google"



### 字体样式
斜体：`*`和`_`
加粗体: `**` 和 `__`

```html
斜体 *Good*
斜体 _Good_
加粗 **Good**
加粗 __Good__

如果你的 * 和 _ 两边都有空白的话，它们就只会被当成普通的符号。
mmm * Good * 

如果需要`*` 使用 `\*` 来显示
\*this is a so much money\*

```
斜体 *Good*
斜体 _Good_
加粗 **Good**
加粗 __Good__

mmm * Good * 

\*this is a so much money\*


### 代码块
三个\`符号
```html
`print()`
```
`print()`


### 图片引用
```html
Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： 行内式和参考式。
![我的博客](http://img.sc115.com/uploads/sc/cjpgs/1410/apic6991_sc115.com.jpg)
![我的博客](http://img.sc115.com/uploads/sc/cjpgs/1410/apic6991_sc115.com.jpg "My Blogs")
```
显示效果：
![我的博客](http://img.sc115.com/uploads/sc/cjpgs/1410/apic6991_sc115.com.jpg)
![我的博客](http://img.sc115.com/uploads/sc/cjpgs/1410/apic6991_sc115.com.jpg "My Blogs")



#### Table

```html
This is a table:

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

```

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

You can align cell contents with syntax like this:

```
| Left Aligned  | Center Aligned  | Right Aligned |
|:------------- |:---------------:| -------------:|
| col 3 is      | some wordy text |         $1600 |
| col 2 is      | centered        |           $12 |
| zebra stripes | are neat        |            $1 |
```

| Left Aligned  | Center Aligned  | Right Aligned |
|:------------- |:---------------:| -------------:|
| col 3 is      | some wordy text |         $1600 |
| col 2 is      | centered        |           $12 |
| zebra stripes | are neat        |            $1 |

The left- and right-most pipes (`|`) are only aesthetic, and can be omitted. The spaces don’t matter, either. Alignment depends solely on `:` marks.





