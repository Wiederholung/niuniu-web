// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleGetUserinfo(e){
    var useInfo=e.detail.userInfo;
    wx.setStorageSync('userInfo', useInfo);
    wx.navigateBack({
      delta: 1,
    });
  }
})