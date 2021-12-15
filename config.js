// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: 'https://www.lwd-temp.top',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'uptimerobot.lwd-temp.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1430636-9b547cd238b2367eb4723499',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '帮助',
      url: 'https://jekyll.lwd-temp.top/notice/about-status/'
    },
    {
      text: '本站主页',
      url: 'https://www.lwd-temp.top'
    },
    {
      text: '导航页',
      url: 'https://navi.lwd-temp.top/'
    },
    {
      text: '捐赠',
      url: 'https://donate.lwd-temp.top/'
    }
  ]
};
