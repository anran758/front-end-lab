import { defineUserConfig } from '@vuepress/cli'
import { path } from '@vuepress/utils'
import type { DefaultThemeOptions } from '@vuepress/theme-default'

import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/front-end-lab/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Web 实验室',
      description: 'Web 开发笔记与解决方案'
    }
  },
  head: [
    ["link", { rel: "icon", href: `/icons/logo.svg` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // theme: '@vuepress/vue',
  themeConfig: {
    repo: 'https://github.com/anran758/front-end-lab',
    editLinks: true,
    docsDir: 'docs',
    smoothScroll: true,
    backToTop: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        navbar: navbar.zh,
        displayAllHeaders: true,
        sidebar: sidebar.zh,
      }
    }
  },
  plugins: [
    ['@vuepress/plugin-debug'],
    ['@vuepress/pwa'],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
          '/zh/': {
            message: '发现新内容可用',
            buttonText: '刷新',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-F07WV60EQR'
      }
    ],
    [
      '@vuepress/container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
    [
      '@vuepress/container',
      {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
      }
    ],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    // 绘制流程图插件
    // https://flowchart.vuepress.ulivz.com/#install
    // ["flowchart"]
  ],
  // extraWatchFiles: ['.vuepress/nav/zh.js']
});
