var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()
Page({
<<<<<<< HEAD
  data: {
    tabs: ["评论", "私信"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    that.setData({
      activeIndex: options.activeIndexData
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    })
  }
})
=======

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function() {
    this.setData({
      hasUserInfo: app.globalData.hasUserInfo
    })
    //登录判断
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '您未登录~',
        image: '/images/icons/error.png'
      })
      setTimeout(function() {
        // 返回
        wx.switchTab({
          url: '/pages/index/index',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }, 1000);

    }

    await this.loadMessage(1)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  onPullDownRefresh: async function () {
    if(!this.data.isLoading){
      await this.loadMessage(null)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /*选择个人或者系统信息*/
  chooceSystemInfo: async function(e) {
    this.setData({
      showSystemInfo: true
    })
    await this.loadMessage(1)
  },
  choocePersonalInfo: async function(e) {
    this.setData({
      showSystemInfo: false
    })
    await this.loadMessage(1)
  },
  // 跳转详情
  navigateToMessageDetail: function(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/MessageDetail/MessageDetail?session_id=' + id + '&status=message',
    })
  },
  // 开始监听活动
  touchStart: function (e) {
    this.setData({
      touch: {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    })
  },
  // 结束监听活动
  touchEnd: async function (e) {
    let x = e.changedTouches[0].clientX
    let y = e.changedTouches[0].clientY
    if (Math.abs(this.data.touch.x - x) > 50) {
      if (x < this.data.touch.x) {
        if(this.data.showSystemInfo){

        }else{
          this.setData({showSystemInfo: true})
          await this.loadMessage(1)
        }
      } else if (this.data.touch.x < x) {
        if (!this.data.showSystemInfo) {

        } else {
          this.setData({ showSystemInfo: false })
          await this.loadMessage(1)
        }
      }
      // 重新加载

    } else { }
    switch (this.data.currentTab) {
      case '0':
        this.loadTaskList(1);
        break;
      case '1':
        this.loadTaskList(1, 'run');
        break;
      case '2':
        this.loadTaskList(1, 'info');
        break;
      case '3':
        this.loadTaskList(1, 'questionnaire');
        break;
    }
  }
})
>>>>>>> main
