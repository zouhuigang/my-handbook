### nginx配置cdn加速


	vi /usr/local/nginx/conf/vhost/marketing-reverse-proxy.conf


	nginx -s reload
	
### 实现配置

	location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|html|htm|css|svg)$ {
	    if ($host ~* (c3|www)\.(.*)) {
		set $host_without_www $2;
	    }
	    rewrite ^/ https://s.$host_without_www$request_uri permanent;
	}



#匹配出对应域名

```
server {
        listen 80;
  	listen 443 ssl http2;
  	server_name *.yyang.net.cn;
	ssl on;
        ssl_certificate  /usr/local/nginx/conf/ssl/*.yyang.net.cn/*.yyang.net.cn.crt;
        ssl_certificate_key  /usr/local/nginx/conf/ssl/*.yyang.net.cn/*.yyang.net.cn.key;
	include /usr/local/nginx/conf/vhost/marketing-reverse-proxy.main;  	
        
        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|html|htm|css|svg)$ {
                rewrite ^/ https://s.yyang.net.cn$request_uri permanent;
        }
}
```

```
 location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|html|htm|css|svg)$ {
                root                    /data/nginx/cache;
                proxy_cache             content;
                proxy_cache_valid       200 206 304 12h;
                proxy_pass https://s.yyang.net.cn;
                #return 301 https://s.yyang.net.cn$request_uri;
        }
```

```
location ~* .*\.(gif|jpg|jpeg|png|bmp|swf|js|html|htm|css|svg)$ {
    
    # 泛域名开始配置
	if ( $host ~* (.*)\.(.*)\.(.*)\.(.*) ) {
        set $domaina $1;#获取当前的 域名前缀 hy
        set $domainb $2; #yyang
        set $domainc $3; #net
        set $domaind $4; #net
    }
    if ($domaina ~* ^hy$) {
        rewrite ^/ https://c4hy.$domaina-$domainb-$domainc-$domaind; 
    }

    if ($domaina !~* ^hy$) {
        rewrite ^/ https://c4test.$domaina-$domainb-$domainc-$domaind; 
    }

}
```

实际没用上：

```

#匹配hy
location ^~ /hystatic/ {
       proxy_pass http://localhost:19001/;
}
#匹配非hy
location ~* .*\.(gif|jpg|jpeg|png|bmp|swf|js|html|htm|css|svg)$ {
    
    # 泛域名开始配置
	if ( $host ~* (.*)\.(.*)\.(.*)\.(.*) ) {
        set $domaina $1;#获取当前的 域名前缀 hy
        set $domainb $2; #yyang
        set $domainc $3; #net
        set $domaind $4; #net
    }
    if ($host ~* (http|https)*\.(.*)) {
        set $domain $2;
    }
    if ($domaina ~* ^hy$) {
        rewrite ^/ /hystatic/$request_uri;
    }

    if ($domaina !~* ^hy$) {
        rewrite ^/ https://cdn.$domain$request_uri permanent; 
    }

}
```

if ( $host ~* (.*).(.*).(.*))
{
set $domain $1;
}


https://www.freehao123.com/nginx-cdn/
