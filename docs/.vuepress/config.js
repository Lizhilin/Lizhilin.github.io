module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      }
    },
    // valine
    valineConfig: {
      appId: '...',// 从LeanCloud的应用中得到的appId
      appKey: '...', // 从LeanCloud的应用中得到的APP Key
      placeholder: '说点什么吧',
      verify: true,
      visitor: false,
      recordIP: true
    }
  },
  title: '心满',
  description: '心满的工作室',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  serviceWorker: true
}
