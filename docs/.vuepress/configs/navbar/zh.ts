import type { NavbarConfig } from '@vuepress/theme-default';

export const zh: NavbarConfig = [
  {
    text: 'Web 开发',
    link: '/develop/',
  },
  {
    text: '技术要点',
    link: '/topic/',
  },
  {
    text: '扩展阅读',
    link: '/further/',
    children: [
      {
        text: "Anran758's Homepage",
        link: 'https://anran758.github.io/',
      },
      {
        text: "Anran758's Blog",
        link: 'https://anran758.github.io/blog/',
      },
    ],
  },
];
