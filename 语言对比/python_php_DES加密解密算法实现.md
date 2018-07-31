### DES加密解密 (PHP&Python版本对比)
> php和python语言实现一致的DES加密解密算法,纠结了一下午了，各种不符合的DES加密解密一堆，后来才发现php7.x的mcrypt被弃用了。

### DES解密 (python版)
---

```Python2.7
#!/usr/bin/env python
# -*- coding: utf-8 -*-
import pyDes
import base64
encrypt_text='jix38dgQ7NydmcrakkLDlBimzmwbu06j2/0KQ+fWUoCqKtjt/zsexhOL7BvCTTFjIt/ksFQ30iD9uAZrFfL2l33Mcz5LvjSCIiJGsJtRMzUyR+aAanf4gwaZG/7Lek0Hu1+2gnZPT5GEGs/bBhqYn7/dGC5aXoBsXYFwERxkzLXG7Pg7ImI16o5FzteuRiUFTFN7/4WkPtbLOWtna6tm6xBNpdTrqCv64QZBb/kSXTRJOQAJQgRbsd0qzu4ch63UpW7pe8cuR8T90HbFKUFrMzdjkErQdftrqhdEFjK9xLy34sFtG8OWVu5+M6wrXxBPxajDOkHdP7Je0tQenIoTM+HKlClFV4tR/8A2MU2YVpRyqxOGtr2/mQryw4Jzd8XK';
encrypt_text = base64.decodestring(encrypt_text)
des_key = 'fN/HWN910Kc='
des_key = base64.decodestring(des_key)
des_obj = pyDes.des(des_key,
                         pyDes.ECB,
                         "\0\0\0\0\0\0\0\0",
                         pad=None,
                         padmode=pyDes.PAD_PKCS5)
print 'des_key: ', des_key
xml=des_obj.decrypt(encrypt_text)
print 'decrypt: ', xml.decode('gbk').encode('utf-8')
```

显示:
```
zhg@zhg-ThinkPad-E450c:~/workspaces/marketing-public-api/application/models/client$ python2.7 des.py 
des_key:  |��X�uЧ
decrypt:  <?xml version="1.0" encoding="UTF-8"?><requst><idType>01</idType><idNo>440300198607060590</idNo><birthday></birthday><name>测试</name><type>fcb</type><fromId>64328</fromId><gender></gender><phoneNum>18516573852</phoneNum><email></email><ssid>TK_DEFAULT567650000000064328</ssid></requst>
```
### DES解密 (php版)
```php7.x
<?php
$encrypt_text='jix38dgQ7NydmcrakkLDlBimzmwbu06j2/0KQ+fWUoCqKtjt/zsexhOL7BvCTTFjIt/ksFQ30iD9uAZrFfL2l33Mcz5LvjSCIiJGsJtRMzUyR+aAanf4gwaZG/7Lek0Hu1+2gnZPT5GEGs/bBhqYn7/dGC5aXoBsXYFwERxkzLXG7Pg7ImI16o5FzteuRiUFTFN7/4WkPtbLOWtna6tm6xBNpdTrqCv64QZBb/kSXTRJOQAJQgRbsd0qzu4ch63UpW7pe8cuR8T90HbFKUFrMzdjkErQdftrqhdEFjK9xLy34sFtG8OWVu5+M6wrXxBPxajDOkHdP7Je0tQenIoTM+HKlClFV4tR/8A2MU2YVpRyqxOGtr2/mQryw4Jzd8XK';
$encrypt_text = base64_decode($encrypt_text);
$des_key = 'fN/HWN910Kc=';
$des_key = base64_decode($des_key);
echo 'des_key: '.$des_key;
$des_obj=openssl_decrypt ($encrypt_text, 'des-ecb', $des_key,true,'');
$xml=iconv("gbk", "utf-8//ignore", $des_obj);
echo 'decrypt: '. $xml;
?>
```
显示:
```
zhg@zhg-ThinkPad-E450c:~/workspaces/zphpjwt$ php des.php 
des_key: |��X�uЧdecrypt: <?xml version="1.0" encoding="UTF-8"?><requst><idType>01</idType><idNo>440300198607060590</idNo><birthday></birthday><name>测试</name><type>fcb</type><fromId>64328</fromId><gender></gender><phoneNum>18516573852</phoneNum><email></email><ssid>TK_DEFAULT567650000000064328</ssid></requst>
```


### DES加密 (python版)
---

```Python2.7
#!/usr/bin/env python
# -*- coding: utf-8 -*-
import pyDes
import base64
body_xml='<?xml version="1.0" encoding="UTF-8"?><requst><idType>01</idType><idNo>440300198607060590</idNo><birthday></birthday><name>测试</name><type>fcb</type><fromId>64328</fromId><gender></gender><phoneNum>18516573852</phoneNum><email></email><ssid>TK_DEFAULT567650000000064328</ssid></requst>'
body_xml=body_xml.decode('utf-8').encode('gbk')
des_key = 'fN/HWN910Kc='
des_key = base64.decodestring(des_key)
des_obj = pyDes.des(des_key,
                         pyDes.ECB,
                         "\0\0\0\0\0\0\0\0",
                         pad=None,
                         padmode=pyDes.PAD_PKCS5)
print 'des_key: ', des_key
encrypt_txt = des_obj.encrypt(body_xml)
encrypt_txt = base64.encodestring(encrypt_txt)
print 'encrypt: ',encrypt_txt
```
显示:
```
zhg@zhg-ThinkPad-E450c:~/workspaces/marketing-public-api/application/models/client$ python2.7 des_enc.py 
des_key:  |��X�uЧ
encrypt:  jix38dgQ7NydmcrakkLDlBimzmwbu06j2/0KQ+fWUoCqKtjt/zsexhOL7BvCTTFjIt/ksFQ30iD9
uAZrFfL2l33Mcz5LvjSCIiJGsJtRMzUyR+aAanf4gwaZG/7Lek0Hu1+2gnZPT5GEGs/bBhqYn7/d
GC5aXoBsXYFwERxkzLXG7Pg7ImI16o5FzteuRiUFTFN7/4WkPtbLOWtna6tm6xBNpdTrqCv64QZB
b/kSXTRJOQAJQgRbsd0qzu4ch63UpW7pe8cuR8T90HbFKUFrMzdjkErQdftrqhdEFjK9xLy34sFt
G8OWVu5+M6wrXxBPxajDOkHdP7Je0tQenIoTM+HKlClFV4tR/8A2MU2YVpRyqxOGtr2/mQryw4Jz
d8XK
```

### DES加密 (php版)

```php7.x
<?php
$body_xml='<?xml version="1.0" encoding="UTF-8"?><requst><idType>01</idType><idNo>440300198607060590</idNo><birthday></birthday><name>测试</name><type>fcb</type><fromId>64328</fromId><gender></gender><phoneNum>18516573852</phoneNum><email></email><ssid>TK_DEFAULT567650000000064328</ssid></requst>';
$body_xml=iconv("utf-8", "gbk//ignore", $body_xml);
$des_key = 'fN/HWN910Kc=';
$des_key = base64_decode($des_key);
echo 'des_key: '.$des_key;
$des_obj=openssl_encrypt ($body_xml, 'des-ecb', $des_key,true,'');
$encrypt_txt=base64_encode($des_obj);
echo 'encrypt: '. $encrypt_txt;
?>
```


显示:
```
zhg@zhg-ThinkPad-E450c:~/workspaces/zphpjwt$ php des_enc.php 
des_key: |��X�uЧencrypt: jix38dgQ7NydmcrakkLDlBimzmwbu06j2/0KQ+fWUoCqKtjt/zsexhOL7BvCTTFjIt/ksFQ30iD9uAZrFfL2l33Mcz5LvjSCIiJGsJtRMzUyR+aAanf4gwaZG/7Lek0Hu1+2gnZPT5GEGs/bBhqYn7/dGC5aXoBsXYFwERxkzLXG7Pg7ImI16o5FzteuRiUFTFN7/4WkPtbLOWtna6tm6xBNpdTrqCv64QZBb/kSXTRJOQAJQgRbsd0qzu4ch63UpW7pe8cuR8T90HbFKUFrMzdjkErQdftrqhdEFjK9xLy34sFtG8OWVu5+M6wrXxBPxajDOkHdP7Je0tQenIoTM+HKlClFV4tR/8A2MU2YVpRyqxOGtr2/mQryw4Jzd8XK
```















