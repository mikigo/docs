import { defineConfig } from 'rspress/config';

export default defineConfig({
  // 文档根目录
  root: 'docs',
  base: '/',
  title: 'mikigo`s docs',
  description: 'mikigo`s docs',
  icon: '/favicon.ico',
  logo: '/logo.png',
  logoText: 'docs',
  themeConfig: {
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    enableScrollToTop: true,
    footer: {
      message: `版权所有 © 2020-${new Date().getFullYear()} mikigo`,
    },
    hideNavbar: 'auto',
    outlineTitle: '本页目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
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
      },
      {
        icon: 'qq',
        mode: 'text',
        content: '1964191631',
      }
    ],
  },
});