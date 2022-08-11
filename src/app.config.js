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
        'index',
          'test'
      ]
    },
    {
      "root": "pages/homePage/",
      "pages": [
        "index"
      ]
    },
    {
      "root": "pages/myaddress/",
      "pages": [
        "index"
      ]
    },
    {
      "root": "pages/Addaddress/",
      "pages": [
        "index"
      ]
    },
    {
      "root": "pages/mycomment/",
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
    }
  ]
})
