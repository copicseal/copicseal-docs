import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Copicseal 官网 | 快速给图片加边框水印",
  description: "Copicseal 是一个给图片加边框水印的工具，支持读取 EXIF 信息，用户可自定义水印样式和位置，快速为照片添加快门、ISO 等相机参数。",
  head: [
    ['meta', { name: 'keywords', content: 'Copicseal, Copicseal官网, Copicseal官方下载, Copicseal下载, 图片加水印, 图片加水印工具, 图片加logo, 图片加logo工具, 图片加ISO, 图片加相机参数, 图片加EXIF信息, 图片加时间, 图片加日期, 图片加位置, 图片加经纬度, 图片加经度, 图片加纬度, 图片加经纬度信息, 图片加经度信息, 图片加纬度信息' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-RlVu25zR0J' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-YY005T1JZX' }],
    ['script', {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YY005T1JZX');`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Copicseal 官网',
    logo: { src: '/logo.svg', alt: 'Logo' },
    lastUpdated: {},
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '模板示例', link: '/template-examples' },
      { text: '常见问题', link: '/faq' },
      { text: '社区交流', link: '/community' },
    ],

    sidebar: [
      {
        text: '使用指南',
        items: [
          { text: '下载', link: '/download' },
          { text: '模板示例', link: '/template-examples' },
          { text: '常见问题', link: '/faq' },
          { text: '社区交流', link: '/community' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/copicseal/copicseal' }
    ],

    footer: {
      message: 'Released under the Apache License 2.0.',
      copyright: 'Copyright © 2025 Kohai'
    }
  },
  sitemap: {
    hostname: 'https://copicseal.kohai.top'
  }
})
