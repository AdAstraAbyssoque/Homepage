import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HKUST(GZ)IGEM",
  description: "HKUST(Guangzhou) iGEM team Official Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: './' },
      { text: 'About us', link: './About_US' },
      { text: 'IGEM2024', link: './iGem2024' }
    ],

    sidebar: generateSidebar({
      documentRootPath: '/docs',
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      collapsed: true,
      collapseDepth: 2,
      sortMenusByName: true,
      excludeFiles: ['README.md'],
      includeFolderIndexFile: true,
      includeEmptyFolder: true,
      rootGroupText: 'Contents',
    })
/*    sidebar: [
      {
        text: 'About us',
        items: [
          { text: 'About us', link: '/About_us' },
        ] 
      },
      {
      text: 'About us',
      items: [
        { text: 'About us', link: '/About_us' },
      ]
      }
    ]*/
/*
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
*/
  }
 
})
