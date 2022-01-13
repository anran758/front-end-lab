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
    text: 'REGEXP',
    link: '/REGEXP/'
  },
  {
    text: '完整目录',
    children: [
      {
        text: '开发语言',
        children: [
          {
            text: 'HTML',
            link: '/html/'
          },
          {
            text: 'CSS',
            link: '/css/'
          },
          {
            text: 'JavaScript',
            link: '/javascript/'
          }
        ]
      },
      {
        text: '版本控制',
        children: [
          {
            text: 'Git',
            link: '/git/'
          },
          {
            text: 'Hg (Mercurial)',
            link: '/hg/'
          },
        ]
      },
      {
        text: '笔记',
        children: [
          {
            text: 'REGEXP',
            link: '/REGEXP/'
          },
          {
            text: '移动端开发解决方案',
            link: '/mobile/'
          },
          {
            text: '前端 QA',
            link: '/topic/'
          },
          {
            text: '运维笔记',
            link: '/operations/'
          },
          {
            text: 'Jira',
            link: '/jira/'
          },
        ]
      },
      {
        text: '扩展阅读',
        link: '/further/'
      },
    ]
  },
  {
    text: '了解更多',
    children: [
      {
        text: 'Home',
        link: 'https://anran758.github.io/'
      },
      {
        text: 'Blog',
        link: 'https://anran758.github.io/blog/'
      },
    ],
  },
];
