// index.js
Page({
    data: {
        imgUrls: [
            '../../images/icon/home.png',
            '../../images/icon/home.png',
            '../../images/code-cloud-callback-config.png'
        ],
        // swiperList:[] //存放轮播图数据
        iconArray: [
            {
                "id":1,
                "iconUrl": '../../images/icon/black-board-f.png',
                "iconText": '自学路径推荐'
            },
            
            {
                "id":2,
                "iconUrl": '../../images/icon/black-board-f.png',
                "iconText": 'Bry博客导航'
            },
            
            {
                "id":3,
                "iconUrl": '../../images/icon/black-board-f.png',
                "iconText": '科研网站导航'
            },
            
            {
                "id":4,
                "iconUrl": '../../images/icon/black-board-f.png',
                "iconText": '常用工具教学'
            },
            
            {
                "id":5,
                "iconUrl": '../../images/icon/black-board-f.png',
                "iconText": '课内资源'
            },
            
            {
                "id":6,
                "iconUrl": '../../images/icon/black-board-f.png',
                "iconText": '发现'
            }
        ]
    },
    onload:function(){
        // this.getSwiperList()
    },
    // getSwiperList(){//获取轮播图数据的方法
    //     wx.request({
    //       url: 'https://wwww.escook.cn/slides',
    //       method:'GET',
    //       success:(res)=>{
    //         console.log(res)
    //         this.setData({
    //             swiperList:res.data
    //         })
    //       }
    //     })
    // }
})