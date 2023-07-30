<!-- omit in toc -->

# 运维笔记

- [版本管理与编辑器](#版本管理与编辑器)
  - [vim](#vim)
  - [iTerm2](#iterm2)
- [命令行工具](#命令行工具)
  - [macos](#macos)
  - [windows](#windows)
- [环境配置](#环境配置)
  - [淘宝镜像](#淘宝镜像)
  - [更新 Node.js 版本](#更新-nodejs-版本)
  - [更新 package.json 中的版本号](#更新-packagejson-中的版本号)
- [常用快捷键速览](#常用快捷键速览)
  - [windows 速查快捷键](#windows-速查快捷键)
  - [MacOS 常用快捷键](#macos-常用快捷键)
- [nginx](#nginx)
  - [基础配置](#基础配置)
  - [启用 HTTPS 的配置](#启用-https-的配置)
  - [反向代理配置](#反向代理配置)
  - [启用 Gzip 压缩](#启用-gzip-压缩)
  - [配置 CORS](#配置-cors)

## 版本管理与编辑器

### vim

**Tips**

1. 输入 `vim` 命令前需要将输入法设为英文, 否则可能会遇到输入不了命令的问题.
2. 默认情况下 `vim` 属于普通模式，按下 `:` 进入命令行模式，以下命令并不是都用于命令行模式的命令。如普通模式输入 `gg` 可以将光标跳到文件首行，但在命令行模式输入是不起效的，必须退出命令行模式才可以使用。
3. 输入 `Esc` 恢复为普通模式。

**退出 vim:**

| 命令      | 说明                                     |
| --------- | ---------------------------------------- |
| `:q`      | 不保存文件，退出vi.                      |
| `:q!`     | 不保存文件，强制退出vi.                  |
| `:w`      | 保存文件但不退出 `vim`                   |
| `:wq`     | 保存文件并退出 `vim`                     |
| `:wq!`    | 强制保存文件，并退出 `vim`               |
| `:w!`     | 强制保存，不推出 `vim`                   |
| `:w file` | 将修改另外保存到 `file` 中，不退出 `vim` |
| `:e!`     | 放弃所有修改，从上次保存文件开始再编辑   |

**光标调整：**

| 命令                   | 说明                           |
| ---------------------- | ------------------------------ |
| `0`、`^`               | 跳到行首                       |
| `$`                    | 跳到行尾                       |
| `:<number>`            | 直接输入数字可以跳去指定的行号 |
| `gg`、`:1`             | 跳到文件第一行行首             |
| `G`、`:$`、`Shift + G` | 跳到文件最后一行行首           |
| `/{搜索的文本}`        | 搜索内容                       |
| `n`                    | 搜索内容向前找                 |
| `N`                    | 搜索内容向后找                 |

**文本处理：**

| 命令              | 说明                                           |
| ----------------- | ---------------------------------------------- |
| `dd`              | 删除当前行                                     |
| `:[start],[end]d` | 删除指定行，例如 `:3,5d` 是删除第 3~5 行的文本 |

### iTerm2

iTerm 2是 Terminal 的替代品，是 iTerm 的后继产品。它有好看的 UI 界面与使用的功能，比如[分隔终端](https://www.iterm2.com/features.html)等功能。

**常用快捷键**

| 快捷键          | 说明         |
| --------------- | ------------ |
| `Command` + `F` | 查找内容     |
| `Ctrl` + `P`    | 上一条命令   |
| `Ctrl` + `R`    | 搜索命令历史 |

**输入**

| 快捷键          | 说明                               |
| --------------- | ---------------------------------- |
| `Command` + `R` | 将输出过的信息隐藏到屏幕外(伪清屏) |
| `Ctrl` + `L`    | 清屏                               |
| `Ctrl` + `U`    | 清除当前行                         |
| `Ctrl` + `A`    | 跳到行首                           |
| `Ctrl` + `E`    | 跳到行尾                           |
| `Ctrl` + `D`    | 删除当前光标的字符                 |
| `Ctrl` + `H`    | 删除光标之前的字符                 |
| `Ctrl` + `W`    | 删除光标之前的单词                 |
| `Ctrl` + `K`    | 删除到文本末尾                     |
| `Ctrl` + `T`    | 交换光标处文本                     |

**标签页**

| 快捷键                                         | 说明                     |
| ---------------------------------------------- | ------------------------ |
| `Command` + `<number>`                         | 调到第 `<number>` 个 Tab |
| `Command` + `T`                                | 新建标签                 |
| `Command` + `W`                                | 关闭标签                 |
| `Command` + `number`、`Command` + `left/right` | 切换标签                 |

**分屏**

| 快捷键                                                            | 说明           |
| ----------------------------------------------------------------- | -------------- |
| `Command` + `D`                                                   | 垂直分屏       |
| `Command` + `Shift` + `D`                                         | 水平分屏       |
| `Command` + `Option` + `方向键`、`Command` + `[`、`Command` + `]` | 切换屏幕       |
| `Command` + `;`                                                   | 查看历史命令   |
| `Command` + `Shift` + `H`                                         | 查看剪贴板历史 |
| `Command` + `Enter`                                               | 切换全屏       |

**其他**

- [iterm 配置utf8编码，本地终端中文不乱码，ssh 远程中文乱码](https://segmentfault.com/q/1010000002426378)

## 命令行工具

命令行工具是开发人员日常工作中不可或缺的部分，了解如何高效使用命令行可以显著提高工作效率。

**通用命令**

在Windows和MacOS平台上，有许多命令是通用的，以下列出了一些基础且常用的命令：

| command                          | 说明                           |
| -------------------------------- | ------------------------------ |
| `pwd`                            | 显示当前路径                   |
| `mv <fileName> <filePath>`       | 移动文件                       |
| `mv <fileName> <modifyFileName>` | 重命名文件                     |
| `netstat –ano`                   | 查看所有进程端口和进程 ID      |
| `netstat –ano \| findstr 8080`   | 查看所有 8080 端口             |
| `dir`、`ls`                      | 查看当前目录下的文件           |
| `type NUL > .nojekyll`           | 新建文件, 并命名为 `.nojekyll` |

### macos

| command                  | 说明                                   |
| ------------------------ | -------------------------------------- |
| `pbcopy`                 | 操作粘贴板                             |
| `pwd \| pbcopy`          | 复制当前路径到粘贴板                   |
| `pbcopy < blog-post.txt` | 将文件 blog-post.text 的内容读入粘贴板 |

**操作粘贴板**

将当前目录的路径复制到剪贴板：

```bash
# `|` 是管道符，即前一个命令的输出结果会作为后一个命令接收的输入
pwd | pbcopy
```

将当前目录下的 `file.txt` 文件的内容复制到剪贴板中:

```bash
pbcopy < file.txt
```

**批量修改文件名**

可以通过 Homebrew 安装 `rename` 可以实现批量修改文件名称。

```bash
brew install rename

# 替换文件
rename 's/from/to/' *.txt
```

假如某目录有以下文件：

- `report1_2023.txt`
- `report2_2023.txt`
- `summary_2023.txt`

现在，我们想将这些文件中的年份从 `2023` 改为 `2024`，可以执行以下命令：

```bash
rename 's/_2023/_2024/' *.txt
```

解释：

- `s/_2023/_2024/`：这是一个 Perl 正则表达式，表示将匹配到的字符串 `_2023` 替换为 `_2024`。
  - `s` 表示替换（substitute）操作。
  - `/` 是分隔符，用来区分不同部分的正则表达式。
  - `_2023` 是需要被替换的文本。
  - `_2024` 是替换后的文本。
- `*.txt`：这指定了要操作的文件，`*`是一个通配符，表示匹配当前目录下所有以`.txt`结尾的文件。

**整理文本**

假设有一个服务器的访问日志文件 `access.log`，其中每行记录包含了访问时间、IP 地址、请求类型、URL、返回状态码等信息，格式如下：

```log
127.0.0.1 - - [10/Oct/2023:13:55:36 +0200] "GET /index.html HTTP/1.1" 200 532 "-"
"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
192.168.1.1 - - [10/Oct/2023:13:55:37 +0200] "POST /submit-form HTTP/1.1" 404 152 "-"
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
...
```

现在想要分析这些日志，提取每个 IP 地址的访问次数：

```bash
awk '{print $1}' access.log | sort | uniq -c | sort -nr
```

> awk 的字段区分默认是按照空格或制表符作为分隔符，$1 指的是第一个字段

- `awk '{print $1}' access.log`：使用 `awk` 打印每行的第一个字段（IP 地址）。
- `sort`：对输出的 IP 地址进行排序，以便 `uniq` 命令可以正确统计。
- `uniq -c`：统计每个唯一 IP 地址的出现次数。
- `sort -nr`：对结果按照访问次数进行降序排序。

**"列出当前目录下的从大到小排序的文件名和大小"**

有时候在做构建优化的相关工作时，需要比较优化前与优化后的成果。因此需要将某构建目录下的文件信息记录下来，以方便比对：

```bash
ls -lhS | awk 'NR > 1 {printf("| %-5s | %-46s |\n", $5, $9);}'
```

此命令使用 `ls` 和 `awk` 工具来筛选并格式化当前目录下的文件信息，便于进行构建优化前后的比对。

`ls` 是列出目录内容的命令:

- `-l` 选项表示以长格式列出信息，显示文件的详细信息，如权限、所有者、大小等。
- `-h` 选项使得文件大小以易读的格式显示（如 KB、MB）。
- `-S` 选项按文件大小排序，显示结果以文件大小降序排列。

`awk` 命令用于文本处理，这里用于格式化 `ls` 命令的输出:

- `NR > 1`：这是一个条件判断，`NR` 是 `awk` 的内置变量，代表"当前记录号"，或者可以理解为"当前是第几行"。`NR > 1` 的意思是对除了第一行之外的每一行执行大括号 `{}` 里的命令。这通常用来跳过标题行或是特定的不需要处理的第一行数据。
- `printf("| %-5s | %-46s |\n", $5, $9);`：是 `awk` 的 `printf` 函数调用，用于格式化输出数据。
  - `| %-5s |`：表示以竖线开始，然后输出第五个字段（`$5`），这里指的是文件大小。`%-5s` 表示该字段为字符串格式，左对齐，并保证至少有5个字符的宽度，如果不足5个字符，则用空格填充到5个字符宽。这样做可以确保输出的对齐美观。
  - `%-46s |`：表示输出第九个字段（`$9`），即文件名。同样，`%-46s` 表示该字段为字符串格式，左对齐，并保证至少有46个字符的宽度，不足部分用空格填充。这保证了即使文件名长度不一，输出也能整齐对齐。
  - `\n`：表示每条记录后输出一个换行符，即每条输出占用一行。

每行输出的结果为：

```log
| 文件大小 | 文件名                                           |
```

### windows

| 命令         | 说明                         |
| ------------ | ---------------------------- |
| `explorer`   | 打开文件管理器               |
| `explorer .` | 打开**当前路径**的文件管理器 |

## 环境配置

### 淘宝镜像

`npm` 和 `yarn` 都可以通过国内的淘宝镜像来安装依赖。

如果只想单个项目中使用淘宝镜像来安装依赖，可以输入以下命令:

```shell
# npm
npm install --registry=https://registry.npm.taobao.org

# yarn
yarn --registry=https://registry.npm.taobao.org
```

也可以安装他们定制的 `cnpm` 命令:

```shell
# 全局安装命令
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 使用 cnpm 安装依赖
cnpm install
```

### 更新 Node.js 版本

推荐使用 `nvm` 来管理 `Node.js` 的版本:

- Windows： [Node Version Manager (nvm) for Windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)
- MacOS/unix: [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating)

使用方法如下:

```shell
# [mac]: 查看可以安装的 Node.js 版本
nvm ls-remote

# [windows]: 查看本地已安装的版本
#            加上 available 参数后查看 Node.js 可安装的版本
nvm list [available]

# 查看本地已安装的版本
vm ls

# 安装指定版本
nvm install 6.14.4

# 安装最新版本的 Node.js
nvm install --lts

# 使用已安装的版本
nvm use 6.14.4
```

注意：在 mac 环境中，某些编辑器的插件会使用 bash 来执行 node 命令，哪怕最常用的是 `zsh`。因此即便你装了 `nvm` 并且能在 `zsh` 使用，但 `bash` 默认配置未设置的情况可能会抛出 `nvm not found` 的错误。
因此你可以尝试执行以下命令来修复路径的问题。

```bash
source ~/.nvm/nvm.sh
```

从 `nvm ls` 可以看到当前安装的 node 版本，其中有个关键词是 `system`。`system` 是系统安装的版本，因此 `nvm` 不能直接删除或更新它。因此可以通过 `n` 包来更新：

```bash
npx n latest
```

### 更新 package.json 中的版本号

使用 `npm-check-updates` 工具进行版本升级:

```shell
# 全局安装
npm -g npm-check-updates
num -u
```

第三方库 `lerna` 中有个 `lerna version` 也能根据当前的版本引导开发者选择本次升级的版本。

## 常用快捷键速览

快捷键是提高工作效率的重要手段。以下列出了在Windows和MacOS操作系统上常用的快捷键。

- [Mac 键盘快捷键](https://support.apple.com/zh-cn/HT201236)
- [Windows 键盘快捷键](https://support.microsoft.com/zh-cn/help/12445/windows-keyboard-shortcuts)
- [Chrome 键盘快捷键](https://support.google.com/chrome/answer/157179?hl=zh-Hans)
- [VS Code Tips and Tricks](https://github.com/Microsoft/vscode-tips-and-tricks)

### windows 速查快捷键

- `win` + `Tab`: 创建新的虚拟桌面
- `win` + `Ctrl` + `D`: 创建新的虚拟桌面
- `win` + `Ctrl` + `F4`: 删除当前虚拟桌面
- `win` + `Ctrl` + `left/right`: 切换虚拟桌面
- `win` + `E`: 打开资源管理器

### MacOS 常用快捷键

| 快捷键                    | 说明               |
| ------------------------- | ------------------ |
| `Shift` `+` `Alt` `+` `.` | 显示和隐藏隐藏文件 |

## nginx

修改完配置后在命令行输入 `nginx -s reload` 平滑使用 nginx 配置。reload 后会启动新的进程接受新请求，对于未处理完的请求还是用旧的配置，直到所有请求处理完毕后，旧的进程进行会退出。

### 基础配置

```nginx
server {
    listen 80; # HTTP的默认端口
    server_name react-app.com; # 你的域名

    root /var/www/react-app; # 指向你的前端项目构建产物目录
    index index.html; # 默认文档

    location / {
        try_files $uri $uri/ /index.html; # 用于支持 SPA 的前端路由
    }
}
```

这个配置告诉 Nginx 监听80端口，为 `example.com` 域名服务，并将所有 HTTP 请求定向到项目的根目录。`try_files` 指令用于处理SPA的前端路由，当直接访问一个不存在的路径时，Nginx 会返回 `index.html` 页面，由前端路由器处理请求路径。

### 启用 HTTPS 的配置

若已获取SSL证书及私钥，并存放于 `/etc/nginx/ssl` 目录，以下配置示例启用HTTPS支持：

```nginx
# 注意, nginx 可以定义多个 server 块。因此上面 80 端口的配置和现在这个 443 端口的配置是可以共存的，不需要覆盖。
server {
    listen 443 ssl; # HTTPS 的默认端口
    server_name react-app.com;

    ssl_certificate /etc/nginx/ssl/react-app.com.pem; # SSL证书路径
    ssl_certificate_key /etc/nginx/ssl/react-app.com.key; # 私钥路径

    root /var/www/react-app;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 反向代理配置

对于前端应用中的 API 请求，通常需要通过 Nginx 将这些请求转发到后端服务。以下配置示例展示了如何将以`/api` 开头的请求转发到后端服务：

```nginx
location /api {
    proxy_pass http://backend-server.com; # 后端服务器地址
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

### 启用 Gzip 压缩

为了提高网页加载速度，可以在Nginx配置中启用Gzip压缩。以下配置启用了对特定类型文件的压缩：

```nginx
gzip on;
gzip_disable "msie6";
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

这些指令配置了Gzip压缩的各种参数，如压缩级别(`gzip_comp_level`)、压缩缓冲区大小(`gzip_buffers`)，以及需要压缩的MIME类型(`gzip_types`)。

### 配置 CORS

为了允许跨域请求，可以在Nginx中配置CORS。以下配置为所有响应添加了CORS相关的头部，允许来自任何源的请求：

```nginx
location / {
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain; charset=utf-8';
        add_header 'Content-Length' 0;
        return 204;
    }
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';
}
```

此配置对预检请求（OPTIONS请求）和实际请求都添加了CORS头部，允许跨域资源共享。
