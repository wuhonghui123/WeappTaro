import Taro from "@tarojs/taro";

export const grant = ()=>{
  //判断用户是否授权
  Taro.getSetting({
    success: function(res) {
      if (res.authSetting['scope.userInfo']) {
        //
        Taro.getUserInfo({
          success: (res)=> {
            // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
            //将用户信息存储到Storage里
            let userInfo = res.userInfo
            if(userInfo != null){
              Taro.setStorage({
                key: '__userInfo__',
                data: userInfo
              })
            }
            //登录
           login()
          }
        });
      } else {
        // 用户没有授权
      }
    }
  });
}

export async function login(){
  //登录
  Taro.login({
    success: res => {
      var code = res.code
      // 使用code换取openid 和 userinfo
      Taro.request({
        url: `https://g6.glypro19.com/weappapi/users/wxlogin?code=${code}`,
        data: {
        },
        header: {
          'content-type': 'application/json'
        },
        success: (res)=> {
          const sessionKeyAndOpenid = JSON.parse(`${res.data.data}`)
          Taro.setStorage({
            key:　'openid',
            data:　sessionKeyAndOpenid
          })
          //console.log('完成登录! openid = %s', sessionKeyAndOpenid.openid)
          //获取用户的itemcode并存在storage里
          getuser()
        }
      })
    }
  });

}

export const getuser = () => {
  Taro.getStorage({
    key: 'openid',
    success: (res)=> {
      // 获取用户信息
     getinfobyopenid(res.data.openid)
    }
  })
}

//根据openid获取用户信息
const getinfobyopenid=(openid)=>{
  Taro.request({
    url: APIBASEURL+"/getUserDetail",
    data:{
      openid: openid
    },
    header: {
      'content-type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    credentials: 'include',
    success: (res) => {
      Taro.setStorage({
        key: '__itemcode__',
        data: res.data.data.itemcode
      })
      //console.log('用户itemcode:',res.data.data.itemcode)
    },
    fail: function (errMsg) {
      Taro.showToast({
        title: '服务器请求错误',
        icon: 'none',
        duration: 3000
      })
    }
  });
}

