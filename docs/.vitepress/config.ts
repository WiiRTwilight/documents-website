import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Twilight's Documents",
  description: "Twilight's Documents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: '关于此文档',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: '基本信息', link: '/about' },
          { text: 'FreeBSD', link: '/freebsd/intro',
            items: [
              { text: '关于FreeBSD', link: '/freebsd/about-fbsd' },
              { text: '安装FreeBSD', link: '/freebsd/install-fbsd' },
              { text: '配置FreeBSD', link: '/freebsd/conf-fbsd' },
            ] },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WiiRTwilight/documents-website' }
    ]
  }
})
