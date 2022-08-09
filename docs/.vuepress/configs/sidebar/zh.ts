import type { SidebarConfig } from '@vuepress/theme-default';

export const zh: SidebarConfig = {
  '/topic/': [
    {
      text: '前端面试指南',
      children: [
        '/topic/js.md',
        '/topic/react.md',
        '/topic/vue.md',
        '/topic/css.md',
        '/topic/html.md',
        '/topic/webpack.md',
        '/topic/performance.md',
        '/topic/network.md',
        '/topic/complex.md',
      ],
    },
  ],

  '/': [
    {
      text: 'JavaScript',
      children: [
        '/develop/javascript/README.md',
        '/develop/javascript/vue.md',
        '/develop/javascript/react.md',
        '/develop/javascript/nodejs.md',
        '/develop/javascript/typescript.md',
        '/develop/javascript/mini-program.md',
        '/develop/javascript/libs.md',
      ],
    },
    {
      text: 'Web 开发',
      children: [
        '/develop/css/README.md',
        '/develop/css/theory.md',
        '/develop/html/README.md',
        '/develop/mobile/README.md',
        '/REGEXP/README.md',
        {
          text: '版本控制',
          children: ['/git/README.md', '/hg/README.md'],
        },
      ],
    },
    {
      text: '扩展阅读',
      children: [
        '/jira/README.md',
        '/further/booklist.md',
        '/further/compatibility.md',
        '/operations/README.md',
        '/operations/issue.md',
        '/further/README.md',
      ],
    },
  ],
};
