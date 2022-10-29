<template><div><h2 id="七牛测试域名过期之后-图片无法备份-qshell也不行-还有别的办法吗-求助" tabindex="-1"><a class="header-anchor" href="#七牛测试域名过期之后-图片无法备份-qshell也不行-还有别的办法吗-求助" aria-hidden="true">#</a> 七牛测试域名过期之后，图片无法备份，qshell也不行，还有别的办法吗，求助?</h2>
<ul>
<li>
<p>1.您绑定自定义域名后可以继续使用</p>
</li>
<li>
<p>2.如果您没有域名，可以用下面方法下载
有两种方式来获取文件：</p>
</li>
</ul>
<h3 id="_2-1-您需要先新建一个同区域存储空间-会分配一个新的测试域名到新空间。" tabindex="-1"><a class="header-anchor" href="#_2-1-您需要先新建一个同区域存储空间-会分配一个新的测试域名到新空间。" aria-hidden="true">#</a> 2.1 您需要先新建一个同区域存储空间，会分配一个新的测试域名到新空间。</h3>
<p>例如：之前有一个A存储空间过期了，现在新建一个B存储空间
通过<code>qshell batchcopy</code>到有域名的同区域空间然后再进行<code>qdownload</code>下载操作</p>
<ul>
<li><code>qshell listbucket A list.txt</code> （列出A空间的所有文件，保持在list.txt文件中）</li>
<li><code>cat list.txt | awk '{print $1}' &gt;list_final.txt</code>（ 用awk获取list结果的第一列）</li>
<li><code>cqshell batchcopy A B list_final.txt</code>（复制到新bucket的文件和原bucket文件名一致,可以完成）</li>
<li>4<code>cqshell qdownload newfilelist.txt</code> （newfilelist.txt为下载的配置文档，）</li>
</ul>
<blockquote>
<p>qshell安装包及文档请参考https://developer.qiniu.com/kodo/tools/1302/qshell
如果您不熟悉命令行工具的安装使用，也可以结合文档最后提供的视频教程 https://developer.qiniu.com/kodo/tools/1302/qshell#9</p>
</blockquote>
<h3 id="_2-2-使用工具qrsctl" tabindex="-1"><a class="header-anchor" href="#_2-2-使用工具qrsctl" aria-hidden="true">#</a> 2.2 使用工具qrsctl</h3>
<p>https://developer.qiniu.com/kodo/tools/1300/qrsctl
qrsctl get</p>
</div></template>


