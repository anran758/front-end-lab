import type { SidebarConfig } from '@vuepress/theme-default';

export const zh: SidebarConfig = {
  '/develop/': [
    '/develop/html/README.md',
    '/develop/css/README.md',
    '/develop/css/theory.md',
    // '/develop/javascript/README.md',
    // '/develop/javascript/nodejs.md',
    // '/develop/javascript/typescript.md',
    // '/develop/javascript/libs.md',
    {
      text: 'JavaScript',
      children: [
        '/develop/javascript/README.md',
        '/develop/javascript/vue.md',
        '/develop/javascript/react.md',
        '/develop/javascript/mini-program.md',
        '/develop/javascript/nodejs.md',
        '/develop/javascript/typescript.md',
        '/develop/javascript/libs.md',
      ],
    },
    '/develop/mobile/README.md',
    {
      text: '版本控制',
      children: ['/git/README.md', '/hg/README.md'],
    },
  ],
  '/topic/': [
    '/topic/html.md',
    '/topic/css.md',
    '/topic/js.md',
    '/topic/react.md',
    '/topic/vue.md',
    '/topic/webpack.md',
    '/topic/performance.md',
    '/topic/network.md',
    '/topic/complex.md',
  ],
  '/': [
    {
      text: '版本控制',
      children: ['/git/README.md', '/hg/README.md'],
    },
    {
      text: '运维相关',
      children: ['/operations/README.md', '/operations/issue.md'],
    },
    '/REGEXP/README.md',
    '/jira/README.md',
    '/further/booklist.md',
    '/further/compatibility.md',
    '/further/README.md',
  ],
};
