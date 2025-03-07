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
    enableAppearanceAnimation: false,
    footer: {
      message: '© 2020 mikigo. All Rights Reserved.',
    },
    hideNavbar: 'auto',
    outlineTitle: '本页目录',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/mikigo/docs',
      }
    ],
  },
});