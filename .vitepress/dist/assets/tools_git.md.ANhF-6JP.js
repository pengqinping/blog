import{_ as i,c as e,o as t,a1 as a}from"./chunks/framework.D1yuQFjT.js";const k=JSON.parse('{"title":"GIT 教程","description":"","frontmatter":{},"headers":[],"relativePath":"tools/git.md","filePath":"tools/git.md"}'),l={name:"tools/git.md"},o=a(`<h1 id="git-教程" tabindex="-1">GIT 教程 <a class="header-anchor" href="#git-教程" aria-label="Permalink to &quot;GIT 教程&quot;">​</a></h1><blockquote><p>gitee: <a href="https://gitee.com/all-about-git" target="_blank" rel="noreferrer">https://gitee.com/all-about-git</a></p></blockquote><h2 id="git-学习建议" tabindex="-1">Git 学习建议 <a class="header-anchor" href="#git-学习建议" aria-label="Permalink to &quot;Git 学习建议&quot;">​</a></h2><ol><li><p>多练，在 github上开一个开源项目，使用命令行操作。熟练使用基本命令，文件提价，更新，撤销，分支的创建，切换，暂缓，删除，合拼，日志的查看...</p></li><li><p>多使用命令行。</p></li></ol><h2 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作&quot;">​</a></h2><h3 id="_1-提交流程" tabindex="-1">1. 提交流程 <a class="header-anchor" href="#_1-提交流程" aria-label="Permalink to &quot;1. 提交流程&quot;">​</a></h3><ul><li><code>git add</code> //从工作目录提交到index区</li><li><code>git commit -m &quot;comment&quot;</code> //把index区的代码提交到本地库并且添加comment注释</li><li><code>git push origin master{local}:master{remote}</code> //把本地库中的Masterlocal 分支推送到服务器上远程库名为origin的masterremote分支</li></ul><h3 id="_2-更新流程" tabindex="-1">2. 更新流程 <a class="header-anchor" href="#_2-更新流程" aria-label="Permalink to &quot;2. 更新流程&quot;">​</a></h3><ul><li><code>git fetch</code> //拉取代码到本地，</li><li><code>git merge origin/develop</code> //把origin/develop 分支合并到当前分支。如果不加分支名，会合并和当前分支同名的远程分支到本地。</li><li><code>git pull == git fetch + git merge</code> // 从服务器拉取并且合并分支。 更新最怕的就是更新失败，那些情况下会失败了？很简单 就是服务器有跟新的文件会override你本地的文件时就会失败。就是有同一个文件两个以上操作，这个说得操作而不是人，就是说通过个人两次操作也会更新失败。好吧不要说得太复杂在文章的最后推荐最佳操作。使用最佳操作一般不会有问题。</li></ul><h3 id="_3-冲突解决" tabindex="-1">3. 冲突解决 <a class="header-anchor" href="#_3-冲突解决" aria-label="Permalink to &quot;3. 冲突解决&quot;">​</a></h3><p>这也许是无数人都害怕的事情，产生冲突的原因就是合并，无非是直接pull 和 git fetch 后 git merge. 冲突产生后，使用 git status 看看那些文件冲突了，然后挨个修改，如何修改呢？一般有冲突 的文件都有如下格式：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> header</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">本地改动</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">===============</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">服务端改动</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt;&gt;&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">origin</span></span></code></pre></div><p>对比两个版本的地方，取舍，然后删除标记符， 所有的冲突都解决后使用 <code>git commit -a -m &quot;comment&quot;</code> 提交修改冲突 然后就可以了。</p><h2 id="分支之间-commit-迁移-git-cherry-pick" tabindex="-1">分支之间 commit 迁移 git cherry-pick <a class="header-anchor" href="#分支之间-commit-迁移-git-cherry-pick" aria-label="Permalink to &quot;分支之间 commit 迁移 git cherry-pick&quot;">​</a></h2><p>有分支 A ,B 我在 A上面提交了一个commit 但是发现 B 同样这个提交也要添加，告诉你们我不知道这个命令的时候，真心是在B全部修改一遍后commit,要是文件少还好，文件多简直要哭死的节奏。所以找到了这个命令。使用方法： <code>git cherry-pick &#39;commitId&#39;</code> 其中可能会遇到冲突 或者想要放弃修改 在git 命令行有提示。</p><h2 id="最佳实践" tabindex="-1">最佳实践， <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践，&quot;">​</a></h2><ol><li>如果本地距离上次没有做任何改动，<code>git pull</code></li><li>本地有修改 首先提交到本地， <code>git add </code>, <code>git commit</code> 然后 <code>git fetch</code> ,<code>git merge</code> 这个时候有冲突，修改即可 ，这边保证本地修改的代码不会被覆盖。</li></ol><h2 id="git-后悔药" tabindex="-1">git 后悔药 <a class="header-anchor" href="#git-后悔药" aria-label="Permalink to &quot;git 后悔药&quot;">​</a></h2><ol><li><code>git checkout -- &#39;file&#39;</code> //把工作目录的修改还原为缓冲区中代码。也就是放弃本地修改</li><li><code>git reset HEAD &#39;file&#39;</code> //把缓冲区的文件还原到没有add之前操作，也就是后退 add 命令的操作</li><li><code>git reset --hard HEAD</code> //把本地库的提交撤销，会撤销缓冲区，工作目录的所有修改，HEAD 可以为 分支名，commitID ... reset 还有很多用法，可以自行百度,满足所以的撤销操作。</li></ol>`,19),s=[o];function c(r,d,h,n,g,p){return t(),e("div",null,s)}const u=i(l,[["render",c]]);export{k as __pageData,u as default};