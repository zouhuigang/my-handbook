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
	git remote add -f _book  
    git@github.com:zouhuigang/my-handbook.git
	git add -A
	git commit -m "my-hardbook init"
	git subtree push  --prefix=_book  origin gh-pages
	
	
第二次：

	git checkout -b master (可直接在master上提交分支)
	git add -A
	git commit -m "..."
	git push origin master
    git subtree push  --prefix=_book  origin gh-pages
	
如果不能提交，则检查.gitignore文件里面，是不是有_book存在，如果存在，则注释掉。



## 支持本书

为贡献者加油！为云原生干杯🍻！

使用微信Or支付宝扫一扫请贡献者喝一杯☕️

<p align="center">
<img src="https://github.com/zouhuigang/my-handbook/blob/master/images/wechat-appreciate-qrcode.jpg?raw=true" alt="微信赞赏码"/>
</p>

<p align="center">
<img src="https://github.com/zouhuigang/my-handbook/blob/master/images/alipay-appreciate-qrcode.jpg?raw=true" alt="支付宝收款码"/>
</p>