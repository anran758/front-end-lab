import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/css/': [
    '/css/README.md',
    '/css/theory.md',
    
  ],
  '/javascript/': [
    '/javascript/README.md',
    '/javascript/libs.md',
  ],
  '/operations/': [
    {
      text: '运维笔记',
      link: '/operations/',
    },
    {
      text: 'issue',
      link: '/operations/issue.md',
    },
  ],
  '/topic/': [
    '2020',
    'react',
    'vue',
    'webpack',
  ],
  '/further/': [
    '/further/README.md',
    '/further/booklist.md',
    '/further/compatibility.md',
  ],
}
