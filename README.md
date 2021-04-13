## Cookie

## 创建 Cookie

```js
documnet.cookie =
  "name=value;domain:.yourdomain.com;path=/;expires=Tue, 13 Apr 2021 08:23:36 GMT;secure";
```

**名称**

唯一标识 `cookie` 的名称。`cookie` 名不区分大小写。**cookie 名必须经过 URL 编码**。

**值**

存储在 `cookie` 里的字符串值。这个值**必须经过 URL 编码**。

**domain**

`cookie` 有效的域。发送到这个域的所有请求都会包含对应的 `cookie`。这个值可能包含子域(如 `www.wrox.com`)，也可以不包含(如`.wrox.com` 表示对 `wrox.com` 的所有子域都有效)。如果不明确设置，则默认为设置 `cookie` 的域。

**path**

请求 URL 中包含这个路径才会把 `cookie` 发送到服务器。例如，可以指定 `cookie` 只能由`http://www.wrox.com/books/`访问，因此访问`http://www.wrox.com/`下的页面就不会发送 `cookie`，即使请求的是同一个域。

**expires**

表示何时删除 `cookie` 的时间戳(即什么时间之后就不发送到服务器了)。默认情况下，浏览器会话结束后会删除所有 `cookie`。不过，也可以设置删除 `cookie` 的时间。这个值是 GMT 格 式(Wdy, DD-Mon-YYYY HH:MM:SS GMT)，用于指定删除 `cookie` 的具体时间。这样即使关闭 浏览器 `cookie` 也会保留在用户机器上。把过期时间设置为过去的时间会立即删除 `cookie`。

**secure**

设置之后，只在使用 SSL 安全连接的情况下才会把 `cookie` 发送到服务器。例如，请 求 `https://www.wrox.com` 会发送 `cookie`，而请求 `http://www.wrox.com` 则不会。

**所有名和值都是 URL 编码的，因此必须使用 `decodeURIComponent()`解码。**

## 获取 Cookie

`document.cookie` 返回包含页面中所有有效 `cookie` 的字符串(根据域、路径、过期时间和安全设置)，以分号分隔

```js
document.cookie;
```

## 删除 Cookie

没有直接删除已有 cookie 的方法。为此，需要再次设置同名 cookie(包括相同路径、域和安全选项)，但要将其过期时间设置为某个过去的时间。

#### reference

- [HTTP cookies](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)
- [axios cookies](https://github.com/axios/axios/blob/master/lib/helpers/cookies.js)
- [js-cookie](https://github.com/js-cookie/js-cookie)
