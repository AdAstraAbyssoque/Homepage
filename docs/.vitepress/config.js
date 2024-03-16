module.exports = {
    title: 'AdAstraAbyssosque',
    description: 'This is my own space to write about things I like and share them with the world.',
    base: '/',
    themeConfig: {
      nav: [
        { text: '主页', link: '/' },
        { text: '文章', link: '/articles/' },
      ],
      sidebar: {
        '/articles/': getArticlesSidebar(),
      },
    },
  }
  
  function getArticlesSidebar() {
    return [
      {
        text: 'Articles',
        children: [
          '/articles/是乍见之欢， 也是天各一方.md',
        ],
      },
    ]
  }
  