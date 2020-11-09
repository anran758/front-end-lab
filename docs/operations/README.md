# 运维笔记

- [运维笔记](#运维笔记)
  - [常用快捷键速览](#常用快捷键速览)
    - [MacOS 常用快捷键](#macos-常用快捷键)
  - [vim](#vim)
  - [iTerm2](#iterm2)
    - [常用快捷键](#常用快捷键)
    - [输入](#输入)
    - [标签](#标签)
    - [分屏](#分屏)
  - [设置淘宝镜像](#设置淘宝镜像)
  - [更新 Node.js 版本](#更新-nodejs-版本)
  - [nginx](#nginx)

## 常用快捷键速览

想要提高办公效率，其中熟记常用的快捷键是其中一种途径。

- [Mac 键盘快捷键](https://support.apple.com/zh-cn/HT201236)
- [Chrome 键盘快捷键](https://support.google.com/chrome/answer/157179?hl=zh-Hans)
- [VS Code Tips and Tricks](https://github.com/Microsoft/vscode-tips-and-tricks)

<!-- omit in toc -->
### windows 速查快捷键

> [Windows 中的快捷键](https://support.microsoft.com/zh-cn/help/12445/windows-keyboard-shortcuts)

| 快捷键                        | 说明             |
| ----------------------------- | ---------------- |
| `win` + `Tab`                 | 创建新的虚拟桌面 |
| `win` + `Ctrl` + `D`          | 创建新的虚拟桌面 |
| `win` + `Ctrl` + `F4`         | 删除当前虚拟桌面 |
| `win` + `Ctrl` + `left/right` | 切换虚拟桌面     |
| `win` + `E`                   | 打开资源管理器   |

### MacOS 常用快捷键

| 快捷键                    | 说明               |
| ------------------------- | ------------------ |
| `Shift` `+` `Alt` `+` `.` | 显示和隐藏隐藏文件 |

## vim

**注意事项：**

- 输入 `vim` 命令前需要将输入法设为英文, 否则可能会遇到输入不了命令的问题
- 默认情况下 `vim` 属于普通模式，按下 `:` 进入命令行模式，以下命令并不是都用于命令行模式的命令。如普通模式输入 `gg` 可以将光标跳到文件首行，但在命令行模式输入是不起效的，必须退出命令行模式才可以使用。
- 输入 `Esc` 恢复为普通模式。
- 命令示例中存在 `+` 的意思是组合键，比如 `Shift + g` 是同时需要按下 `Shift` 和 `g` 键。

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

## iTerm2

iTerm 2是 Terminal 的替代品，是 iTerm 的后继产品。它有好看的 UI 界面与使用的功能，比如[分隔终端](https://www.iterm2.com/features.html)等功能。

> Tips: `command` <-> `win`

### 常用快捷键

| 快捷键       | 说明         |
| ------------ | ------------ |
| `win` + `F`  | 查找内容     |
| `Ctrl` + `P` | 上一条命令   |
| `Ctrl` + `R` | 搜索命令历史 |

### 输入

| 快捷键       | 说明                               |
| ------------ | ---------------------------------- |
| `win` + `R`  | 将输出过的信息隐藏到屏幕外(伪清屏) |
| `Ctrl` + `L` | 清屏                               |
| `Ctrl` + `U` | 清除当前行                         |
| `Ctrl` + `A` | 跳到行首                           |
| `Ctrl` + `E` | 跳到行尾                           |
| `Ctrl` + `D` | 删除当前光标的字符                 |
| `Ctrl` + `H` | 删除光标之前的字符                 |
| `Ctrl` + `W` | 删除光标之前的单词                 |
| `Ctrl` + `K` | 删除到文本末尾                     |
| `Ctrl` + `T` | 交换光标处文本                     |

### 标签

| 快捷键                                 | 说明                     |
| -------------------------------------- | ------------------------ |
| `win` + `<number>`                     | 调到第 `<number>` 个 Tab |
| `win` + `T`                            | 新建标签                 |
| `win` + `W`                            | 关闭标签                 |
| `win` + `number`、`win` + `left/right` | 切换标签                 |

### 分屏

| 快捷键                                                | 说明           |
| ----------------------------------------------------- | -------------- |
| `win` + `D`                                           | 垂直分屏       |
| `win` + `Shift` + `D`                                 | 水平分屏       |
| `win` + `Option` + `方向键`、`win` + `[`、`win` + `]` | 切换屏幕       |
| `win` + `;`                                           | 查看历史命令   |
| `win` + `Shift` + `H`                                 | 查看剪贴板历史 |
| `win` + `Enter`                                       | 切换全屏       |

## 设置淘宝镜像

`npm` 和 `yarn` 都可以通过国内的淘宝镜像来安装依赖。

如果只想单个项目中使用淘宝镜像来安装依赖，可以输入以下命令:

``` shell
# npm
npm install --registry=https://registry.npm.taobao.org

# yarn
yarn --registry=https://registry.npm.taobao.org
```

也可以安装他们定制的 `cnpm` 命令:

``` shell
# 全局安装命令
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 使用 cnpm 安装依赖
cnpm install
```

## 更新 Node.js 版本

推荐使用 `nvm` 来管理 `Node.js` 的版本:

- Windows： [Node Version Manager (nvm) for Windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)
- MacOS/unix: [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating)

使用方法如下:

``` shell
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

## nginx

修改完配置后在命令行输入 `nginx -s reload` 平滑使用 nginx 配置。reload 后会启动新的进程接受新请求，对于未处理完的请求还是用旧的配置，直到所有请求处理完毕后，旧的进程进行会退出。
