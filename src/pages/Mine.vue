<template>
    <div class="xd-wrapper">
        <div class="xd-wrapper-content">
            <div class="xd-wrapper-content-top">
                <span @click="quitlogin">退出</span>
                <i class="icon iconfont icon-xiaoxi"></i>
            </div>
            <div class="xd-wrapper-content-user">
                <div class="xd-wrapper-content-user-top">
                    <img src="https://static.xidibuy.com/static/global/images/1.0.0/avator_01.jpg" alt="">
                </div>
                <div class="xd-wrapper-content-user-bottom">
                    沁未央
                </div>
            </div>
        </div>
        <div class="xd-wrapper-order">
            我的订单
            <span>&gt;</span>
        </div>
        <div class="xd-wrapper-wait">
            <div class="xd-wrapper-wait-list">
                <div class="xd-wrapper-wait-list-img">
                    <i class="icon iconfont icon-daifukuan"></i>
                </div>
                <div class="xd-wrapper-wait-list-desc">
                    待付款
                </div>
            </div>
            <div class="xd-wrapper-wait-list">
                <div class="xd-wrapper-wait-list-img">
                    <i class="icon iconfont icon-daifahuo"></i>
                </div>
                <div class="xd-wrapper-wait-list-desc">
                    待发货
                </div>
            </div>
            <div class="xd-wrapper-wait-list">
                <div class="xd-wrapper-wait-list-img">
                    <i class="icon iconfont icon-daishouhuo"></i>
                </div>
                <div class="xd-wrapper-wait-list-desc">
                    待收货
                </div>
            </div>
            <div class="xd-wrapper-wait-list">
                <div class="xd-wrapper-wait-list-img">
                    <i class="icon iconfont icon-daipingjia"></i>
                </div>
                <div class="xd-wrapper-wait-list-desc">
                    待评价
                </div>
            </div>
            <div class="xd-wrapper-wait-list">
                <div class="xd-wrapper-wait-list-img">
                    <i class="icon iconfont icon-shouhoutuikuan"></i>
                </div>
                <div class="xd-wrapper-wait-list-desc">
                    退货退款
                </div>
            </div>
        </div>
        <div class="xd-wrapper-empty"></div>
        <div class="xd-wrapper-container">
            <div class="xd-wrapper-container-img">
                <i class="icon iconfont icon-youhuiquan"></i>我的优惠<span>&gt;</span>
            </div>
            <div class="xd-wrapper-container-img">
                <i class="icon iconfont icon-xihuan"></i>我的喜欢<span>&gt;</span>
            </div>
            <div class="xd-wrapper-container-img">
                <i class="icon iconfont icon-zuji"></i>我的足迹<span>&gt;</span>
            </div>
            <div class="xd-wrapper-container-img">
                <i class="icon iconfont icon-shouhuodizhi"></i>收货地址<span>&gt;</span>
            </div>
        </div>
        <div class="xd-wrapper-contain">
            <div class="xd-wrapper-contain-img">
                <i class="icon iconfont icon-wenti"></i>常见问题<span>&gt;</span>
            </div>
            <div class="xd-wrapper-contain-img">
                <i class="icon iconfont icon-kefu"></i>联系客服<span>&gt;</span>
            </div>
            <div class="xd-wrapper-contain-img">
                <i class="icon iconfont icon-guanyu"></i>关于喜地<span>&gt;</span>
            </div>
            <div class="xd-wrapper-contain-img">
                <i class="icon iconfont icon-fankui"></i>意见反馈<span>&gt;</span>
            </div>
            <div class="xd-wrapper-contain-img">
                <i class="icon iconfont icon-fenxiang"></i>分享喜地<span>&gt;</span>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapState,
    mapMutations
} from 'vuex';
export default {
    name: 'mine',
    computed: {
    ...mapState(['isLogin']),
    },
    methods: {
    ...mapMutations(['quitlogin'])
    }
}
</script>

<style lang='scss' scoped>
@import '../libs/scss/var.scss';
@import '../libs/scss/icon.scss';
.xd-wrapper{
    &-content{
        height: 180px;
        background-color: aqua;
        &-top{
            height: 40px;
            width: 95%;
            margin-left: 10px;
            color:#fff;
            span{
                margin-top:8px;
                font-size: 18px;
                display:inline-block;
            }
            i{
                float: right;
                margin-top:8px;
                font-size: 30px;
                display:inline-block;
            }
        }
        &-user{
            height: 80px;
            width: 150px;
            margin: 15px auto;
            text-align: center;
            color: #fff;
            &-top{
                margin-bottom: 5px;
                img{
                    height: 60px;
                    width: 60px;
                    border-radius:50%; 
                }
            }
        }
    }
    &-order{
        height: 40px;
        width: 95%;
        margin-left: 10px;
        line-height: 40px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid $border-color;
        span{
            color: #b9b8b8;
        }
    }
    &-wait{
        display: flex;
        width: 95%;
        margin-left: 10px;
        height: 100px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        &-list{
            &-img{
                margin: 10px 0;
                i{
                    font-size: 30px;
                    color: #b9b8b8;
                }
            }
        }
    }
    &-empty{
        height: 8px;
        background: #ecebeb;
    }
    &-container{
        height: 120px;
        width: 95%;
        margin-left: 10px;
        border-bottom: 1px solid $border-color;
        &-img{
            height: 30px;
            line-height: 30px;
            .icon{
                color: #b9b8b8;
                margin-right: 8px;
                font-size: 18px;
            }
            span{
                display: inline-block;
                float: right;
                color: #b9b8b8;
            }
        }
    }
    &-contain{
        height: 150px;
        width: 95%;
        margin-left: 10px;
        &-img{
            height: 30px;
            line-height: 30px;
            .icon{
                color: #b9b8b8;
                margin-right: 8px;
                font-size: 18px;
            }
            span{
                display: inline-block;
                float: right;
                color: #b9b8b8;
            }
        }
    }
}
</style>
