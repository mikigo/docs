import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: 'docs',
  base: '/',
  title: 'mikigo`s docs',
  description: 'mikigo`s docs',
  icon: '/favicon.ico',
  logo: '/logo.png',
  logoText: 'mikigo',
  themeConfig: {
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    enableScrollToTop: true,
    lastUpdated: true,

    footer: {
      message: `版权所有 © 2020-${new Date().getFullYear()} mikigo`,
    },
    hideNavbar: 'auto',

    outlineTitle: '本页目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
    lastUpdatedText: '最近更新时间',
    searchPlaceholderText: '搜索文档',
    overview: {
      filterNameText: '快速查找',
      filterPlaceholderText: '输入关键词',
      filterNoResultText: '未查询到结果',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/mikigo/docs',
      },
      {
        icon: 'wechat',
        mode: 'text',
        content: 'mikigo_18782963750',
      }
    ],
  },
});