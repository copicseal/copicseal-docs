---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Copicseal"
  text: "一个图片加水印工具"
  tagline: "支持读取 EXIF 信息，用户可自定义水印样式和位置，快速为照片添加快门、ISO 等相机参数。"
  image:
    src: /logo.svg
    alt: Copicseal
  actions:
    - theme: brand
      text: 前往下载
      link: https://github.com/copicseal/copicseal/releases
    - theme: alt
      text: 项目仓库
      link: https://github.com/copicseal/copicseal

features:
  - icon: 🖼️
    title: 图片水印
    details: 支持添加文本、EXIF 参数等多种水印形式，保护你的照片版权。
  - icon: 📷
    title: 自动识别 EXIF
    details: 自动解析照片中的快门速度、ISO、光圈、时间等信息并用于展示。
  - icon: 👀
    title: 所见即所得
    details: 实时预览与拖拽操作，水印添加简单直观，无需复杂配置。
  - icon: 💻
    title: 跨平台支持
    details: 支持 Windows 与 macOS，提供一致的用户体验。
  - icon: 🚀
    title: 零依赖打包
    details: 独立安装包，无需额外依赖，启动快速，占用资源低。
  - icon: 🔄
    title: 持续迭代
    details: 项目活跃开发中，未来将加入更多功能与定制选项。

---

<picture>
  <source srcset="/screenshot01.webp" type="image/webp">
  <img src="/screenshot01.png" alt="Copicseal Screenshot">
</picture>