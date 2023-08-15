# 综合篇

### npm install 做了什么

`npm install` 命令是用于安装项目中的所有依赖，其主要工作步骤如下：

1. **解析 `package.json`**：读取项目的 `package.json` 文件以确定所需的依赖包及版本。
2. **检查已安装依赖**：在 `node_modules` 目录中检查已安装的依赖包，确认是否需要更新或新增。
3. **执行 `preinstall` 钩子**：在任何依赖包被安装之前触发，可以用来设置安装前的环境或配置。
4. **下载依赖**：从 npm 注册中心下载所需的依赖包及其子依赖。
5. **安装依赖**：将下载的依赖包解压到 `node_modules` 目录，并执行任何必要的构建脚本。
6. **`postinstall` 钩子**：在所有依赖包安装完成后触发，可以用来执行构建脚本、编译源代码或其他后处理操作。
7. **更新 `package-lock.json`**：创建或更新 `package-lock.json` 文件，确保未来安装时能使用相同版本的依赖。
8. **`prepublish` 和 `prepare` 钩子**：如果是在发布包时执行 `npm install`，这些钩子会被触发，用于执行发布前的构建或测试脚本。

### 列举移动端适配方案

1. rem 方案
2. webpack + `vw`/`vh` 方案
3. 响应式布局

### 怎么处理跨域？

- JSONP：通过动态创建 script 标签实现跨域请求数据，但只能实现 GET 请求。
- CORS：服务器设置响应头 Access-Control-Allow-Origin 允许跨域请求，但需要浏览器的支持。
- 前端开发时可使用 webpack dev-server 进行代理
- 使用 Nginx 反向代理实现跨域

<details block>
<summary>使用 Nginx 反向代理实现跨域</summary>

假设前端项目运行在 localhost:3000 上，需要请求 api.example.com 上的接口，但是由于跨域限制，请求会被浏览器拦截。

可以使用 Nginx 反向代理来实现跨域请求。具体步骤如下：

1. 在 Nginx 配置文件中添加以下配置：

   ```bash
   server {
       listen 80;
       server_name localhost;

       location /api {
           proxy_pass http://api.example.com;
           add_header 'Access-Control-Allow-Origin' '*';
       }
   }
   ```

   这里的 listen 表示监听端口，server_name 表示服务器名称。location /api 表示当请求的路径以 /api 开头时，将会被转发到 `http://api.example.com` 上。add_header 'Access-Control-Allow-Origin' '\*' 表示在响应头中添加 Access-Control-Allow-Origin，允许跨域请求。

2. 重新加载 Nginx 配置文件：

   ```bash
   sudo nginx -s reload
   ```

3. 在前端代码中请求 localhost:3000/api，即可通过 Nginx 实现跨域请求。

通过这种方式，前端代码只需要请求本地服务器的地址，Nginx 将会代理请求到目标服务器上，并在响应头中添加 Access-Control-Allow-Origin，实现了跨域请求。

</details>

### 阿里云的 CDN 资源有缓存，如何强制更新缓存?

阿里云 CDN 中有一个 Tab 叫**刷新预热**, 在该选项中可以强制刷新缓存。更新缓存的方式有 **URL 刷新**、**目录刷新**以及 **URL 预热**。

### git 除了 `pull`、`push` 外还了解哪些命令？

可以参考 [Git 速查笔记](../git/README.md) 来回答

### 正向代理、反向代理区别?

正向代理和反向代理都是代理服务器的应用。

正向代理是客户端通过代理服务器向互联网请求资源，代理服务器代表客户端访问互联网，客户端无法直接访问目标服务器，而需要通过代理服务器来访问目标服务器。举个例子，你在中国访问Google，但由于某些原因无法直接访问，于是你就需要通过一个代理服务器来访问，这个代理服务器就是正向代理服务器。

反向代理则是客户端无法直接访问目标服务器，而需要通过代理服务器来访问，但这个代理服务器是站在目标服务器这一端的。客户端无法直接访问目标服务器，而是通过代理服务器向目标服务器请求资源，代理服务器代表目标服务器与客户端通信，客户端并不知道目标服务器的存在。举个例子，当你访问一个网站时，实际上是访问了反向代理服务器，反向代理服务器会根据请求的资源来决定去哪个目标服务器获取数据。

简单来说，正向代理隐藏了客户端的真实IP地址，而反向代理隐藏了服务器的真实IP地址。

### 其他运维相关问题

结合自身的经历回答：

1. **Q**: 了解过 docker 吗？
2. **Q**: 你们项目的 CI/CD 是怎么搭建的？

### 杂谈

1. 你哪些项目实现的比较满意？
2. 你碰到最难的一个问题是什么？
3. 是否写过测试用例
4. 是否了解敏捷开发

### 求职者关心的问题

- [反向面试](https://github.com/yifeikong/reverse-interview-zh): 技术面试最后反问面试官的话
