// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      userInfo:{},
      hasUserInfo: false
    },
  
    onShow() {
      var userInfo = wx.getStorageSync('userInfo');
      if (userInfo) {
        console.log(userInfo)
        this.setData({
          userInfo: userInfo,
          hasUserInfo:true
        })
      }
    },
    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          wx.setStorageSync('userInfo', res.userInfo);
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          
        }
      })
    }
    // /**
    //  * 生命周期函数--监听页面显示
    //  */
    // onShow: function () {
    //   console.log("hello");
    //   var userInfo=wx.getStorageSync("userInfo");
    //   this.setData({
    //     userInfo:userInfo
    //   })
    // }
  })