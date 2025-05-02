import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Comark",
  description: "Comark 是一个图片加水印工具，支持读取 EXIF 信息，用户可自定义水印样式和位置，快速为照片添加快门、ISO 等相机参数。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/images/logo.svg',
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
      { icon: 'github', link: 'https://github.com/comarkapp/comark' }
    ],

    footer: {
      message: 'Released under the Apache License 2.0.',
      copyright: 'Copyright © 2025 Kohai'
    }
  }
})
