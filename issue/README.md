# 常见错误

## npm

### npm 发布失败

``` bash
➜  module-test git:(master) npm publish
npm ERR! publish Failed PUT 403
npm ERR! code E403
npm ERR! [no_perms] Private mode enable, only admin can publish this module [no_perms] Private mode enable, only admin can publish this mod
ule: module-test
****
```

没有权限的原因可能是我们按照了淘宝的`npm`镜像，发布通过镜像代理，就会有权限问题。这时候将权限调整回来即可：

``` bash
➜  module-test git:(master) npm config set registry http://registry.npmjs.org

➜  module-test git:(master) npm publish
npm ERR! code ENEEDAUTH
npm ERR! need auth auth required for publishing
npm ERR! need auth You need to authorize this machine using `npm adduser`

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/anran/.npm/_logs/2019-04-27T13_56_25_234Z-debug.log

# 添加账号
➜  module-test git:(master) npm adduser
Username: anran758
Password:
Email: (this IS public) anran758@gmail.com
Logged in as anran758 on http://registry.npmjs.org/.

# 验证邮箱
➜  module-test git:(master) npm publish
npm ERR! publish Failed PUT 403
npm ERR! code E403
npm ERR! you must verify your email before publishing a new package: https://www.npmjs.com/email-edit : module-test

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/anran/.npm/_logs/2019-04-27T14_09_30_297Z-debug.log

➜  module-test git:(master) npm publish
+ module-test@1.0.0
```
