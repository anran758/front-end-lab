import type { NavbarConfig } from '@vuepress/theme-default';

export const zh: NavbarConfig = [
  {
    text: 'Web 开发',
    link: '/develop/',
  },
  {
    text: '前端面试指南',
    link: '/topic/',
  },
  {
    text: '扩展阅读',
    link: '/further/',
    children: [
      {
        text: '扩展阅读',
        link: '/further/',
      },
      {
        text: 'Home',
        link: 'https://anran758.github.io/',
      },
      {
        text: 'Blog',
        link: 'https://anran758.github.io/blog/',
      },
    ],
  },
];
