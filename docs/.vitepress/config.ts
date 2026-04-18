import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Twilight's Documents",
  description: "Twilight's Documents",
  lang: 'zh-Hans',
  cleanUrls: true,
  lastUpdated: true,
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
          { text: 'FreeBSD',
            items: [
              { text: '关于FreeBSD', link: '/freebsd/about-fbsd' },
            ] },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WiiRTwilight/documents-website' }
    ],
    lastUpdatedText: '最后更新于'
  },
  sitemap: {
    hostname: 'https://docs.timeless-twilight.com'
  },
  transformPageData(pageData) {
    // 因为开启了 cleanUrls，所以直接把 .md 去掉即可，不需要替换为 .html 了
    const canonicalUrl = `https://docs.timeless-twilight.com/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, ''); 

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ]);
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: "Twilight's Documents" }],
    ['meta', { property: 'og:site_name', content: "Twilight's Documents" }],
  ],
})
