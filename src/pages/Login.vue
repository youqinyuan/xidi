<template>
<div class="xd-wrapper">
    <div class="xd-wrapper-content">
        <div class="xd-wrapper-content-top">
            <span @click="handleReturn">返回</span>
            <router-link to="/home" tag="i" class="icon iconfont icon-home-normal"></router-link>
        </div>
        <div class="xd-wrapper-content-bottom">
            <i class="icon iconfont icon-xidi"></i>
            <span>喜地</span>
        </div>
    </div>
    <div class="xd-wrapper-input">
        <div class="xd-wrapper-input-phone">
            <i class="icon iconfont icon-mine-normal"></i>
            <input id="txt" type="text" placeholder="手机号/邮箱/用户名">
        </div>
        <div class="xd-wrapper-input-pwd">
            <i class="icon iconfont icon-mima"></i>
            <input type="password" placeholder="登录密码">
        </div>
    </div>
    <div class="xd-wrapper-login">
        <div class="xd-wrapper-login-top">
            <button @click="login">登录</button>
        </div>
        <div class="xd-wrapper-login-bottom">
            <span>手机动态码登录</span>
            <span>忘记密码</span>
        </div>
    </div>
    <div class="xd-wrapper-register">
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
} from 'vuex';
export default {
    name: 'login',
    data () {
        return {

        }
    },
    computed: {
    ...mapState(['isLogin']),
    },
    methods: {
        ...mapActions(['login']),
        handleReturn () {
            this.$router.history.go(-1)
        }
    },
    watch: {
        isLogin(n) {
        if (n === true) {
            const path = this.$route.params.to ? this.$route.params.to.path : '/';
            this.$router.push(path);
        }
        },
    },
}
</script>

<style lang='scss' scoped>
@import '../libs/scss/var.scss';
@import '../libs/scss/icon.scss';
.xd-wrapper{
    background: rgb(119, 215, 253);
    &-content{
        height: 180px;
        &-top{
            height: 40px;
            width: 95%;
            margin-left: 10px;
            color:#fff;
            span{
                display: inline-block;
                font-size: 18px;
                margin-top: 10px;
            }
            i{
                float: right;
                margin-top:8px;
                font-size: 24px;
                display:inline-block;
            }
        }
        &-bottom{
            width: 95%;
            margin-top: 70px;
            text-align: center; 
            i{
                color:#fff;
                font-size: 60px;
                width: 80px;
                height: 40px;
                margin: 0 15px;
            } 
            span{
                font-size: 35px;
                color:#fff;
            }
        }
    }
    &-input{
        margin-top: 15px;
        &-phone{
            height: 40px;
            width: 80%;
            text-align: center;
            margin: 0px auto;
            background: #fff;
            input{
                border: none;
                outline: none;
                margin-right:80px;
                height: 37px;
            }
        }
        &-pwd{
            height: 40px;
            width: 80%;
            text-align: center;
            margin: 20px auto;
            background: #fff;
            input{
                border: none;
                outline: none;
                margin-right:80px;
                height: 37px;
            }
        }
    }
    &-login{
        width: 80%;
        height: 60px;
        margin: 0 auto;
        &-top{
            button{
                height: 40px;
                width: 100%;
                border: none;
                outline: none;
                background: aqua;
                color: #fff;
                font-size: 18px;
                margin-top: 20px;
            }
        }
        &-bottom{
            margin-top: 15px;
            margin-bottom: 150px;
            display: flex;
            justify-content: space-between;
            span{
                color: #fff;
            }
        }
    }
    &-register{
        margin-top:290px; 
    }
}

</style>
