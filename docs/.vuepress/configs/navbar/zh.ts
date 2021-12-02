import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: 'CSS',
    link: '/css/'
  },
  {
    text: 'JavaScript',
    link: '/javascript/'
  },
  {
    text: 'Git',
    link: '/git/'
  },
  {
    text: 'REGEXP',
    link: '/REGEXP/'
  },
  {
    text: '了解更多',
    ariaLabel: '了解更多',
    children: [
      {
        text: '开发',
        children: [
          {
            text: 'HTML',
            link: '/html/'
          },
          {
            text: 'TypeScript',
            link: '/typescript/'
          }
        ]
      },
      {
        text: '笔记',
        children: [
          {
            text: 'topic',
            link: '/topic/2020'
          },
          {
            text: '运维笔记',
            link: '/operations/'
          },
          {
            text: '移动端开发解决方案',
            link: '/mobile/'
          }
        ]
      },
      {
        text: '其他',
        children: [
          {
            text: '扩展阅读',
            link: '/further/'
          },
          {
            text: 'Blog',
            link: 'https://anran758.github.io/blog/'
          },
          {
            text: 'Web 展示页',
            link: 'https://anran758.github.io/'
          },
        ]
      }
    ]
  }
];
