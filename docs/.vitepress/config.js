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
      '/articles/': [
          {text:'文章', link: '/articles/',},
          {text:'是乍见之欢， 也是天各一方',link:'/articles/是乍见之欢， 也是天各一方.html',},
          {text:'关于我',link:'/articles/关于我.html',}
          ],
        },
  },
}
