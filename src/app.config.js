export default defineAppConfig({
  pages: [
    'pages/index/index'
    
  ],
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  },
  "requiredPrivateInfos":[
      "getFuzzyLocation",
      "choosePoi",
      "chooseAddress"
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
        "index",
          'pay'
      ]
    },
    {
      "root": "pages/Addcommend/",
      "pages": [
        "index"
      ]
    },
    {
      "root": "pages/Editaddress/",
      "pages": [
        "index"
      ]
    }
  ]
})
