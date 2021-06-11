// https://vuepress.vuejs.org/zh/config/
function getOperationsSidebar(operationsTitle, issueTitle) {
  return [
    {
      title: operationsTitle,
      collapsable: true,
      path: './',
    },
    {
      title: issueTitle,
      collapsable: true,
      path: 'issue',
    },
  ];
}

function getFurtherSidebar() {
  return [
    {
      title: '扩展阅读',
      collapsable: true,
      path: './',
    },
    {
      title: '推荐书单',
      collapsable: true,
      path: './booklist',
    },
  ];
}

function getTopicSidebar() {
  return [
    '2020',
    'react',
    'vue',
    'webpack',
  ];
}

function getCssSidebar() {
  return [
    {
      title: 'css 实践笔记',
      collapsable: true,
      path: './',
    },
    {
      title: 'css 理论笔记',
      collapsable: true,
      path: 'theory',
    },
  ];
}

module.exports = ctx => ({
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
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        displayAllHeaders: true,
        sidebar: {
          '/operations/': getOperationsSidebar('运维笔记', 'issue'),
          '/topic/': getTopicSidebar(),
          '/css/': getCssSidebar(),
          '/further/': getFurtherSidebar(),
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
