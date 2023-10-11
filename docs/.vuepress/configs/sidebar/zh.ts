import type { SidebarConfig } from '@vuepress/theme-default';

export const zh: SidebarConfig = {
  '/topic/': [
    {
      text: 'Web 技术栈',
      children: [
        '/topic/html.md',
        '/topic/css.md',
        '/topic/js.md',
        '/topic/nodejs.md',
      ],
    },
    {
      text: '开发框架与工具',
      children: ['/topic/react.md', '/topic/vue.md', '/topic/webpack.md'],
    },
    {
      text: '优化与原理解析',
      children: [
        '/topic/browser.md',
        '/topic/performance.md',
        '/topic/network.md',
      ],
    },
    '/topic/complex.md',
  ],

  '/': [
    {
      text: 'JavaScript 生态',
      children: [
        '/develop/javascript/README.md',
        '/develop/javascript/typescript.md',
        '/develop/javascript/vue.md',
        '/develop/javascript/react.md',
        '/develop/javascript/nodejs.md',
        '/develop/javascript/mini-program.md',
        '/develop/javascript/libs.md',
      ],
    },
    {
      text: 'Web 开发',
      children: [
        '/develop/html/README.md',
        '/develop/css/README.md',
        '/develop/css/theory.md',
        '/REGEXP/README.md',
        '/develop/solution.md',
      ],
    },
    {
      text: '项目管理',
      children: ['/git.md', '/hg.md', '/jira.md', '/dev-ops.md'],
    },
    {
      text: '更多',
      children: [
        '/further/glossary.md',
        '/further/books.md',
        '/further/README.md',
      ],
    },
  ],
};
