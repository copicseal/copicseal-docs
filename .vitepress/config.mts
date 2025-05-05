import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Copicseal",
  description: "Copicseal 是一个图片加水印工具，支持读取 EXIF 信息，用户可自定义水印样式和位置，快速为照片添加快门、ISO 等相机参数。",
  head: [
    ['meta', { name: 'keywords', content: 'Copicseal, 图片加水印, 图片加水印工具, 图片加logo, 图片加logo工具, 图片加ISO, 图片加相机参数, 图片加EXIF信息, 图片加时间, 图片加日期, 图片加位置, 图片加经纬度, 图片加经度, 图片加纬度, 图片加经纬度信息, 图片加经度信息, 图片加纬度信息' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      // { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
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
  }
})
