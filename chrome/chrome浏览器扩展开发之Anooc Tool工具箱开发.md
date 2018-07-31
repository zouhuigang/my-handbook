###chrome浏览器扩展开发之Anooc Tool工具箱开发

### manifest.json说明

```
{
    "background": {
	"persistent": true,
	"scripts": ["js/background.js"]
    },
    "content_scripts": [
    ],
    "author": "作者",
    "browser_action": {
	"default_icon": "img/logo/icon48.png",
	"default_popup": "popup.html"
    },
    "description": "Anooc tool",
    "icons": {
	"16": "img/logo/icon16.png",
	"48": "img/logo/icon48.png",
	"128": "img/logo/icon128.png"
    },
    "manifest_version": 2,
    "name": "Anooc Tool",
    "permissions": [
	"webRequest",
	"webRequestBlocking",
	"contextMenus",
	"http://*/*",
	"https://*/*",
	"<all_urls>",
	"tabs",
	"*://*/*",
	"clipboardWrite",
	"clipboardRead"],
    "update_url": "https://clients2.google.com/service/update2/crx",
    "version": "1.0.0"
}

```

### 查看源代码

[anooc_tool_chrome](https://github.com/zouhuigang/anooc_tool_chrome)


### 打包成crx文件

查看扩展程序存放的目录，在浏览器输入：

	chrome://version/

显示：

```
Chromium	67.0.3396.99 (正式版本) Built on Ubuntu , running on Ubuntu 18.04 （64 位）
修订版本	8ef023c8bf48f152812e2068fc21827bc5503917-
操作系统	Linux
JavaScript	V8 6.7.288.46
Flash	（已停用）
用户代理	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/67.0.3396.99 Chrome/67.0.3396.99 Safari/537.36
命令行	/usr/lib/chromium-browser/chromium-browser --enable-pinch --flag-switches-begin --flag-switches-end
可执行文件路径	/usr/lib/chromium-browser/chromium-browser
个人资料路径	/home/zhg/.config/chromium/Default
```

其中:

	/home/zhg/.config/chromium/Default/Extensions

即为扩展程序存放的目录。

```Shell
zhg@zhg-ThinkPad-E450c:~/.config/chromium/Default/Extensions$ ls
bcjindcccaagfpapjjmafapmmgkkhgoa  nhdogjmejiglipccpnnnanhbledajbpd
bfeoldjhjmapdnlgjeokfjmnkepcdaeh  padekgcemlokbadohgkifijomclgjgif
kjkjddcjojneaeeppobfolgojhohbpjn

```
这里的目录，就是扩展程序的ID号,可以在chrome://extensions/中查看。


#### 打包:

在chrome://extensions/下，找到“打包扩展程序”，找到开发的扩展路径根目录，秘钥为空。

	已创建以下文件：

	扩展程序：/home/zhg/workspaces/anooc_tool_chrome.crx
	密钥文件：/home/zhg/workspaces/anooc_tool_chrome.pem

	请妥善保存您的密钥文件。您还需要使用该文件创建新版扩展程序。
	
#### 使用crx文件

将anooc_tool_chrome.crx拖入到chrome浏览器中(最好访问chrome://extensions/)，即可安装。

### 查看扩展文档

[http://open.chrome.360.cn/extension_dev/overview.html](http://open.chrome.360.cn/extension_dev/overview.html)


### 问题汇总

Q：
	在使用打包过程中，提示
	指定扩展程序的私有密钥已存在。请重复使用该密钥，或者先删除它。
	
A：

查找crx:

		sudo find / -name *.crx
		
然后删除。
	
