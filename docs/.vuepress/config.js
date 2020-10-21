// https://vuepress.vuejs.org/zh/config/
// const { fs, path } = require("@vuepress/shared-utils");

// const DEFAULT_PAGE = ['readme', 'index']
// function getSidebarItem(pathInfo = {}, options = {}) {
//   const {dirPath = '', prefix = ''} = pathInfo
//   const names = fs
//     .readdirSync(path.resolve(__dirname, dirPath))
//     .map(filename => {
//       const name = filename.slice(0, -3).toLowerCase()
//       return DEFAULT_PAGE.includes(name)  ? prefix : prefix + name;
//     })
//     .sort();

//   return {
//       collapsable: false,
//       children: names,
//       ...options,
//     }
// }

function getOperationsSidebar(operationsTitle, issueTitle) {
  return [
    {
      title: operationsTitle,
      collapsable: false,
      children: ['', 'issue']
    }
  ];
}

module.exports = ctx => ({
  base: '/front-end-lab/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Front end Lab',
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
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        // sidebar: ['auto']
        sidebar: {
          // '/operations/': getOperationsSidebar('运维笔记', 'issue')
          '/operations/': ['', 'issue']
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-99223334-4'
      }
    ],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
    [
      'container',
      {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
      }
    ]
    // 绘制流程图插件
    // https://flowchart.vuepress.ulivz.com/#install
    // ["flowchart"]
  ],
  extraWatchFiles: ['.vuepress/nav/zh.js']
});
