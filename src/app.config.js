export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '返回',
    navigationBarTextStyle: 'black'
  },
  subPackages: [
    {
      "root": "pages/order/",
      "pages": [
        "index"
      ]
    },
    {
      "root": "pages/homePage/",
      "pages": [
        "index"
      ]
    },
    {
      "root": "pages/foodinfo/",
      "pages": [
        "index"
      ]
    },
    {
      "root": "pages/shopCart/",
      "pages": [
        "index"
      ]
    },
  ]
})
