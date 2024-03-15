module.exports = {
    title: 'My Docs',
    description: 'This is my documentation website',
    base: '/',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Articles', link: '/articles/' },
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
          '/articles/tstarticle1.md',
          '/articles/tstarticle2.md',
        ],
      },
    ]
  }
  