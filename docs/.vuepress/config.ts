import { defineUserConfig } from '@vuepress/cli';
import { path } from '@vuepress/utils';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup';
import { viteBundler } from '@vuepress/bundler-vite';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { defaultTheme } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';

import { navbar, sidebar } from './configs';

const isProd = process.env.NODE_ENV === 'production';

/**
 * @see {@link https://github.com/vuepress/vuepress-next/blob/main/docs/.vuepress/config.ts}
 */
export default defineUserConfig({
  base: '/front-end-lab/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Web 实验室',
      description: 'Web 开发笔记与解决方案',
    },
  },

  head: [
    ['link', { rel: 'icon', href: `/icons/logo.svg` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  alias: {
    '@image': path.resolve(__dirname, '../_images'),
  },

  // theme: '@vuepress/vue',
  theme: defaultTheme({
    repo: 'https://github.com/anran758/front-end-lab',
    editLinks: true,
    docsDir: 'docs',
    smoothScroll: true,
    backToTop: true,
    sidebarDepth: 4,
    displayAllHeaders: true,
    locales: {
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
  }),
  plugins: [
    /**
     * @see https://vuepress.github.io/zh/reference/plugin/search.html#locales
     */
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),

    pwaPlugin({}),
    pwaPopupPlugin({
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
    }),

    googleAnalyticsPlugin({
      id: 'G-F07WV60EQR',
    }),

    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),

    // only enable shiki plugin in production mode
    // isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],

  // extraWatchFiles: ['.vuepress/nav/zh.js']
});
