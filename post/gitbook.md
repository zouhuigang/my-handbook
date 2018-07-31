### gitbook的使用


安装:

	sudo cnpm install gitbook-cli -g
	
安装指定版本:

	gitbook fetch 3.2.3
	
	
### 使用

初始化:

	gitbook init 
	
生成Html:

	gitbook build
	
本地预览:

	gitbook serve
	
浏览器访问:

	http://localhost:4000/
	
安装插件：

	gitbook install


### 写一本书

目录结构：

```	.
	├── book.json   ##存放站点配置信息，例如:标题、作者、描述、插件、语言、版本、导航等
	├── README.md   ##书籍的简单介绍
	├── SUMMARY.md  ##定义目录结构的文件，文档左侧的目录就是根据这个文件来生成的，是用Markdown语法来定义目录树的父子关系的。
	├── Glossary.md ##词汇表文件，用于常用存储词汇信息。
	├── chapter-1/
	|   └── something.md
	└── chapter-2/    └── something.md
```

book.json

```Json
{
"title": "Common",          ##标题
"description": "公共文档",   ##简述
"author": "Common",         ##作者
"language": "zh-hans",      ##语言
"gitbook": "3.2.3",         ##版本
"root": ".",
"structure": {
"readme": "README.md"
},
"links": {                 ##左侧导航栏信息
"sidebar": {
"Home": "xxx"
}
},
"plugins": [               ##-：表示关闭此插件
"-lunr",
"-search",
"highlight",               ##语法高亮
"-livereload",
"-sharing",
"search-plus",             ##支持中文搜索
"simple-page-toc",         ##自动生成本页目录结构
"advanced-emoji",          ##支持emoji表情
"anchors",                 ##Github 风格的锚点样式
"include-codeblock",       ##插入代码块
"ace",                     ##支持ace
"emphasize",               ##文字加底色
"katex",                   ##数学公式插件
"splitter",                ##侧边栏宽度可自由调节
"tbfed-pagefooter",        ##添加脚页
"expandable-chapters-small",  ##目录可折叠
"sectionx",                   ##页面分块显示
"local-video",                ##视频插件(Video.js播放)
"anchor-navigation-ex",       ##悬浮导航
"todo",                       ##ToDo显示功能
"git-author",                 ##显示创建、修改记录
"alerts",                     ##不同alerts样式(info, warning, danger, success)
"include-csv"                 ##支持展示csv文件
],
"pluginsConfig": {
"theme-default": {
"showLevel": true},
"prism": {
"css": [
"prism-themes/themes/prism-base16-ateliersulphurpool.light.css"
]
},
"include-codeblock": {
"template": "ace",
"unindent": true,
"edit": true},
"tbfed-pagefooter": {
"copyright": "Copyright © xiaomi.com 2017",
"modify_label": "文档修订时间：",
"modify_format": "YYYY-MM-DD HH:mm:ss"
},
"simple-page-toc": {
"maxDepth": 3,
"skipFirstH1": true},
"anchor-navigation-ex": {
"showLevel": false,
"multipleH1":true,
"multipleH2":true,
"multipleH3":true,
    "mode": "float",
    "float": {
        "showLevelIcon": true,
        "level1Icon": "fa fa-hand-o-right",
        "level2Icon": "fa fa-hand-o-right",
        "level3Icon": "fa fa-hand-o-right"
    },
    "pageTop": {
       "showLevelIcon": true,
        "level1Icon": "fa fa-hand-o-right",
        "level2Icon": "fa fa-hand-o-right",
        "level3Icon": "fa fa-hand-o-right"
    }
},
"sectionx": {
"tag": "b"
},
"favicon": {
"shortcut": "favicon.ico",
"bookmark": "favicon.ico"
},
"git-author":{
    "position": "bottom",
    "createTpl": "Created by {user}：{timeStamp}",
    "modifyTpl": "Modified by {user}：{timeStamp}",
    "timeStampFormat": "YYYY-MM-DD"
},
"styles": {
    "website": "./styles/website.css"
},
"pluginsConfig": {
    "include-codeblock": {
        "template": "ace",
        "unindent": "true",
        "theme": "monokai"
    }
}
}
}
```

运行:

	gitbook install
	
太慢了，用翻墙命令

	proxychain4 gitbook install
	
会自动安装book.json中的插件
	
### 已有markdown，自动生成目录文件

安装到你的项目中。

	sudo cnpm install --save summarybuilder

全局安装

	sudo npm install -g summarybuilder 推荐
	
使用:

	summary -b -t

