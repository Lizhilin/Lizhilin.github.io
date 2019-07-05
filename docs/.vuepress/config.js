module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog',
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
    author: '心满',
    // valine
    valineConfig: {
      appId: 'bFVvAJlV8Jn17iazfoQ9xXos-gzGzoHsz', // 从LeanCloud的应用中得到的appId
      appKey: 'n8qKffmq8Ttip9SKkLR18iDx', // 从LeanCloud的应用中得到的APP Key
      placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
      notify: true, // 邮件提醒
      verify: true, // 验证码
      visitor: false, // 访问统计
      recordIP: true,
      avatar: ''
    },
    // 备案号
    record: '备案是不可能的，这辈子都不可能',
    // 项目开始时间，只填写年份
    startYear: '2019',
    huawei: false
  },
  title: '心满',
  description: '心满的工作室',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  serviceWorker: true
}
