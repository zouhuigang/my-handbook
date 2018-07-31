# 介绍

这是一本记录所有技术实践的书，方便未来遇到问题是查看使用。



### github发布页面

切换分支:

	  git checkout -b gh-pages
	  
将_book目录提交给分支gh-pages:
	
	git remote add -f <子仓库名> <子仓库地址>

其中-f意思是在添加远程仓库之后，立即执行fetch
	
	git subtree add –prefix=<子目录名> <子仓库名> <分支> –squash

–squash意思是把subtree的改动合并成一次commit，这样就不用拉取子项目完整的历史记录。–prefix之后的=等号也可以用空格
	
### 用法

初始化(第一次使用):

	git clone  git@github.com:zouhuigang/my-handbook.git
	git checkout -b gh-pages
	git remote add -f _book  git@github.com:zouhuigang/my-handbook.git
	git add -A
	git commit -m "my-hardbook init"
	git subtree push  --prefix=_book  origin gh-pages
	
	
第二次：

	git remote add -f _book  git@github.com:zouhuigang/my-handbook.git
	# git subtree add --prefix=_book     _book  gh-pages --squash
	git subtree push  --prefix=_book  origin gh-pages
	git add -A
	git commit -m "..."
	git push origin gh-pages
	
### 切换master分支，提交md文件
	
	git checkout -b master
	
如果不能提交，则检查.gitignore文件里面，是不是有_book存在，如果存在，则注释掉。