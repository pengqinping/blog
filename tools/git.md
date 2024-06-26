
# GIT 教程

> gitee: https://gitee.com/all-about-git

## Git 学习建议
1. 多练，在 github上开一个开源项目，使用命令行操作。熟练使用基本命令，文件提价，更新，撤销，分支的创建，切换，暂缓，删除，合拼，日志的查看...  

2. 多使用命令行。

## 基本操作
### 1. 提交流程
* `git add`  //从工作目录提交到index区
* `git commit -m "comment"` //把index区的代码提交到本地库并且添加comment注释
* `git push origin master{local}:master{remote}`  //把本地库中的Masterlocal 分支推送到服务器上远程库名为origin的masterremote分支

### 2. 更新流程
* `git fetch`   //拉取代码到本地，
* `git merge origin/develop`  //把origin/develop 分支合并到当前分支。如果不加分支名，会合并和当前分支同名的远程分支到本地。
* `git pull == git fetch + git merge` // 从服务器拉取并且合并分支。
更新最怕的就是更新失败，那些情况下会失败了？很简单 就是服务器有跟新的文件会override你本地的文件时就会失败。就是有同一个文件两个以上操作，这个说得操作而不是人，就是说通过个人两次操作也会更新失败。好吧不要说得太复杂在文章的最后推荐最佳操作。使用最佳操作一般不会有问题。

### 3. 冲突解决
这也许是无数人都害怕的事情，产生冲突的原因就是合并，无非是直接pull 和 git fetch 后 git merge.
冲突产生后，使用 git status 看看那些文件冲突了，然后挨个修改，如何修改呢？一般有冲突
的文件都有如下格式：
```shell
<<<<<<< header
本地改动
===============
服务端改动
>>>>>>> origin
```
对比两个版本的地方，取舍，然后删除标记符，
所有的冲突都解决后使用 `git commit -a -m "comment"` 提交修改冲突 然后就可以了。


## 分支之间 commit 迁移 git cherry-pick
有分支 A ,B  我在 A上面提交了一个commit 但是发现 B 同样这个提交也要添加，告诉你们我不知道这个命令的时候，真心是在B全部修改一遍后commit,要是文件少还好，文件多简直要哭死的节奏。所以找到了这个命令。使用方法：
`git cherry-pick 'commitId'`
其中可能会遇到冲突 或者想要放弃修改 在git 命令行有提示。

## 最佳实践，
1. 如果本地距离上次没有做任何改动，`git pull` 
2. 本地有修改 首先提交到本地， `git add `,  `git commit` 然后 `git fetch` ,`git merge` 这个时候有冲突，修改即可 ，这边保证本地修改的代码不会被覆盖。

## git 后悔药
1. `git checkout -- 'file'`  //把工作目录的修改还原为缓冲区中代码。也就是放弃本地修改
2. `git reset HEAD 'file'`  //把缓冲区的文件还原到没有add之前操作，也就是后退 add 命令的操作
3. `git reset --hard HEAD` //把本地库的提交撤销，会撤销缓冲区，工作目录的所有修改，HEAD 可以为 分支名，commitID ... reset 还有很多用法，可以自行百度,满足所以的撤销操作。

