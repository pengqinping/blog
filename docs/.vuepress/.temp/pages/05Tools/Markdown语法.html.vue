<template><div><p>写博客的过程中总喜欢忘记md语法，然后去百度比较浪费时间。这里记录下平时常用的md语法</p>
<blockquote>
<p><a href="http://markdown.tw/" target="_blank" rel="noopener noreferrer">繁体http://markdown.tw/<ExternalLinkIcon/></a>
<a href="http://www.appinn.com/markdown/" target="_blank" rel="noopener noreferrer">简体翻译http://www.appinn.com/markdown/<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="markdown思想" tabindex="-1"><a class="header-anchor" href="#markdown思想" aria-hidden="true">#</a> MarkDown思想</h3>
<p>可读性，无论如何，都是最重要的。一份使用 Markdown 格式撰写的文件应该可以直接以纯文本发布，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的影响，包括 <code v-pre>Setext</code>、<code v-pre>atx</code>、<code v-pre>Textile</code>、<code v-pre>reStructuredText</code>、<code v-pre>Grutatext</code> 和 <code v-pre>EtText</code>，而最大灵感来源其实是纯文本电子邮件的格式。</p>
<p>总之， Markdown 的语法全由一些符号所组成，这些符号经过精挑细选，其作用一目了然。比如：在文字两旁加上星号，看起来就像<code v-pre>*强调*</code>。Markdown 的列表看起来，嗯，就是列表。Markdown 的区块引用看起来就真的像是引用一段文字，就像你曾在电子邮件中见过的那样。</p>
<h3 id="兼容html" tabindex="-1"><a class="header-anchor" href="#兼容html" aria-hidden="true">#</a> 兼容Html</h3>
<p>直接编写 html标签在markdown 无需其他标志，要制约的只有一些 HTML 区块元素――比如 <code v-pre>&lt;div&gt;</code>、<code v-pre>&lt;table&gt;</code>、<code v-pre>&lt;pre&gt;</code>、<code v-pre>&lt;p&gt;</code> 等标签，必须在前后加上空行与其它内容区隔开，还要求它们的开始标签与结尾标签不能用制表符或空格来缩进。</p>
<div class="language-HTML line-numbers-mode" data-ext="HTML"><pre v-pre class="language-HTML"><code>This is a regular paragraph.

&lt;table&gt;
    &lt;tr&gt;
        &lt;td&gt;Foo&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;

This is another regular paragraph.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请注意</strong>，在 HTML 区块标签间的 Markdown 格式语法将不会被处理。比如，你在 HTML 区块内使用 Markdown 样式的<code v-pre>*强调*</code>会没有效果。</p>
<h3 id="特殊字符转换" tabindex="-1"><a class="header-anchor" href="#特殊字符转换" aria-hidden="true">#</a> 特殊字符转换</h3>
<p><code v-pre>&lt;</code>和<code v-pre>&amp;</code>特殊字符的处理，HTMl中如果你需要显示 <code v-pre>&lt;</code>和<code v-pre>&amp;</code>必须使用他们的实体 <code v-pre>&amp;lt;</code>和<code v-pre>&amp;amp;</code>来表示
在md中可以直接使用 &lt; &amp; 包括在代码块中,例如</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>4 &lt; 5 
AT&amp;T
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区块元素" tabindex="-1"><a class="header-anchor" href="#区块元素" aria-hidden="true">#</a> 区块元素</h3>
<blockquote>
<p>一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）。普通段落不该用空格或制表符来缩进。</p>
</blockquote>
<h4 id="标题-利用-最高阶标题-和-第二阶标题" tabindex="-1"><a class="header-anchor" href="#标题-利用-最高阶标题-和-第二阶标题" aria-hidden="true">#</a> 标题 利用 <code v-pre>=</code> （最高阶标题）和 <code v-pre>-</code> （第二阶标题）</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>底部双横线
=======

底部单横线
-------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="标题-利用-最高阶标题" tabindex="-1"><a class="header-anchor" href="#标题-利用-最高阶标题" aria-hidden="true">#</a> 标题 利用 <code v-pre>#</code> （最高阶标题）</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code># 表示标题1
## 表示标题2
###### 标题6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="区块引用" tabindex="-1"><a class="header-anchor" href="#区块引用" aria-hidden="true">#</a> 区块引用</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>a. 每行都添加 `>`
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="区块效果展示区" tabindex="-1"><a class="header-anchor" href="#区块效果展示区" aria-hidden="true">#</a> 区块效果展示区：</h4>
<p>a. 每行都添加 <code v-pre>&gt;</code></p>
<blockquote>
<p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.</p>
</blockquote>
<p>b. 段落的第一行添加</p>
<blockquote>
<p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
m.......</p>
</blockquote>
<p>c. 多层段落</p>
<blockquote>
<p>This is the first level of quoting.</p>
<blockquote>
<p>This is nested blockquote
Back to the first level</p>
</blockquote>
</blockquote>
<h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3>
<p>标记符号有 <code v-pre>*</code>,<code v-pre>+</code>,<code v-pre>-</code>,<code v-pre>数组.</code>,</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>* First
* Second
* Threed

+ Red
+ Green
+ Bue

1. Bird
2. McHale
3. Parish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列表效果展示如下：</p>
<ul>
<li>First</li>
<li>Second</li>
<li>Threed</li>
</ul>
<ul>
<li>Red</li>
<li>Green</li>
<li>Bue</li>
</ul>
<ol>
<li>Bird</li>
<li>McHale</li>
<li>Parish</li>
</ol>
<h4 id="列表包含段落" tabindex="-1"><a class="header-anchor" href="#列表包含段落" aria-hidden="true">#</a> 列表包含段落</h4>
<p>列表项目可以包含多个段落，每个项目下的段落都必须缩进<strong>4</strong>个空格或是<strong>1</strong>个制表符：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>1.    This is a list item with two paragraphs. Lorem ipsum dolor
      sit amet, consectetuer adipiscing elit. Aliquam hendrerit
      mi posuere lectus.
      
      Vestibulum enim wisi, viverra nec, fringilla in, laoreet
      vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
      sit amet velit.

2.    Suspendisse id sem consectetuer libero luctus adipiscing.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果展示如下：</p>
<ol>
<li>
<p>This is a list item with two paragraphs. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit. Aliquam hendrerit
mi posuere lectus.</p>
<p>Vestibulum enim wisi, viverra nec, fringilla in, laoreet
vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
sit amet velit.</p>
</li>
<li>
<p>Suspendisse id sem consectetuer libero luctus adipiscing.</p>
</li>
</ol>
<h4 id="列表包含引用" tabindex="-1"><a class="header-anchor" href="#列表包含引用" aria-hidden="true">#</a> 列表包含引用</h4>
<p>如果要在列表项目内放进引用，那 <code v-pre>&gt;</code> 就需要缩进,缩进规则<strong>4</strong>个空格和<strong>1</strong>个tab：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>* A list item with a block
    > This is a block quote
    > This is a block quote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果演示如下：</p>
<ul>
<li>A list item with a block
<blockquote>
<p>This is a block quote
This is a block quote</p>
</blockquote>
</li>
</ul>
<h4 id="列表包含代码块" tabindex="-1"><a class="header-anchor" href="#列表包含代码块" aria-hidden="true">#</a> 列表包含代码块</h4>
<p>如果要放代码区块的话，该区块就需要缩进两次，也就是<strong>8</strong>个空格或是<strong>2</strong>个制表符：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>* A list item with a blockquote
        
        This is a code in the list item

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果演示如下：</p>
<ul>
<li>
<p>A list item with a blockquote</p>
<pre><code>  This is a code in the list item
</code></pre>
</li>
</ul>
<h4 id="如果行首出现数组-点的组合100-需要做特殊处理" tabindex="-1"><a class="header-anchor" href="#如果行首出现数组-点的组合100-需要做特殊处理" aria-hidden="true">#</a> 如果行首出现数组+点的组合<code v-pre>100.</code> 需要做特殊处理</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>1986\. What a great season.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3>
<p>一行中可以使用3个或者3个以上的<code v-pre>*</code>,<code v-pre>-</code>,<code v-pre>_</code> 来进行一个风格线</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>***
---
____
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果演示如下：</p>
<hr>
<hr>
<hr>
<h3 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接" aria-hidden="true">#</a> 超链接</h3>
<p>Markdown 支持两种形式的链接语法： 行内式和参考式两种形式。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>行内式: 
This is [an example](http://example.com/ "Title") inline link.
[This link](http://example.net/) has no title attribute.

参考式:
The click goto [first][1]
The click goto [second][2]

[1]: https://www.baidu.com "百度"
[2]: https://google.com "Google"

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下
This is <a href="http://example.com/" title="Title" target="_blank" rel="noopener noreferrer">an example<ExternalLinkIcon/></a> inline link.
<a href="http://example.net/" target="_blank" rel="noopener noreferrer">This link<ExternalLinkIcon/></a> has no title attribute.</p>
<p>参考式:
The click goto <a href="https://www.baidu.com" title="百度" target="_blank" rel="noopener noreferrer">first<ExternalLinkIcon/></a>
The click goto <a href="https://google.com" title="Google" target="_blank" rel="noopener noreferrer">second<ExternalLinkIcon/></a></p>
<h3 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式" aria-hidden="true">#</a> 字体样式</h3>
<p>斜体：<code v-pre>*</code>和<code v-pre>_</code>
加粗体: <code v-pre>**</code> 和 <code v-pre>__</code></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>斜体 *Good*
斜体 _Good_
加粗 **Good**
加粗 __Good__

如果你的 * 和 _ 两边都有空白的话，它们就只会被当成普通的符号。
mmm * Good * 

如果需要`*` 使用 `\*` 来显示
\*this is a so much money\*

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>斜体 <em>Good</em>
斜体 <em>Good</em>
加粗 <strong>Good</strong>
加粗 <strong>Good</strong></p>
<p>mmm * Good *</p>
<p>*this is a so much money*</p>
<h3 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h3>
<p>三个`符号</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>`print()`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>print()</code></p>
<h3 id="图片引用" tabindex="-1"><a class="header-anchor" href="#图片引用" aria-hidden="true">#</a> 图片引用</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： 行内式和参考式。
![我的博客](http://img.sc115.com/uploads/sc/cjpgs/1410/apic6991_sc115.com.jpg)
![我的博客](http://img.sc115.com/uploads/sc/cjpgs/1410/apic6991_sc115.com.jpg "My Blogs")
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示效果：
<img src="http://img.sc115.com/uploads/sc/cjpgs/1410/apic6991_sc115.com.jpg" alt="我的博客">
<img src="http://img.sc115.com/uploads/sc/cjpgs/1410/apic6991_sc115.com.jpg" alt="我的博客" title="My Blogs"></p>
<h4 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>This is a table:

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>First Header</th>
<th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
</tbody>
</table>
<p>You can align cell contents with syntax like this:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>| Left Aligned  | Center Aligned  | Right Aligned |
|:------------- |:---------------:| -------------:|
| col 3 is      | some wordy text |         $1600 |
| col 2 is      | centered        |           $12 |
| zebra stripes | are neat        |            $1 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">Left Aligned</th>
<th style="text-align:center">Center Aligned</th>
<th style="text-align:right">Right Aligned</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">col 3 is</td>
<td style="text-align:center">some wordy text</td>
<td style="text-align:right">$1600</td>
</tr>
<tr>
<td style="text-align:left">col 2 is</td>
<td style="text-align:center">centered</td>
<td style="text-align:right">$12</td>
</tr>
<tr>
<td style="text-align:left">zebra stripes</td>
<td style="text-align:center">are neat</td>
<td style="text-align:right">$1</td>
</tr>
</tbody>
</table>
<p>The left- and right-most pipes (<code v-pre>|</code>) are only aesthetic, and can be omitted. The spaces don’t matter, either. Alignment depends solely on <code v-pre>:</code> marks.</p>
</div></template>


