<template>
    <div>
        <div
        item="item"
        class="xd-wrapper">
            <div class="xd-wrapper-head">
                <span @click="handleReturn">返回</span>
                商品-{{isId}}
            </div>
            <div class="xd-img">
                <img :src="item.img" alt="">
            </div>
            <div class="xd-content">
                <h3 class="title">{{item.title}}</h3>
                <p class="price">￥{{item.price}}</p>
            </div>
            <div class="xd-descripe">
                <h4>永不作恶的公司，海外品牌原产直供，原装进口全网大“实”价</h4>
                <div><span class="title1">真实:</span><span class="text">出厂价+海关税费</span></div>
                <div><span class="title1">诚实:</span><span class="text">无利可让，无法打折</span></div>
                <div><span class="title1">老实:</span><span class="text">玩不来套路，365天一个价</span></div>
            </div>
            <div class="xd-empty"></div>
            <div class="xd-detail">
                <p>颜色:  "灰蓝"</p>
                <div class="xd-detail-img">
                    <img :src="item.img" alt="">
                </div>
            </div>
            <div class="xd-num">
                <p>数量</p>
                <div>
                    <span class="btn" @click="reduceCount">-</span>
                    <span class="count">{{item.count}}</span>
                    <span class="btn" @click="addCount">+</span></div>
            </div>
            <div class="xd-buy">
                <div class="icon">
                    <i class="icon iconfont icon-xiaoxi"></i>
                    <i class="icon iconfont icon-cart-normal"></i>
                    <span v-if="cart.length>0" class="zv-badge" @click="handleSkip">{{totalCount | maxNumber}}</span>
                </div>
                <div class="btn">
                    <button class="btn-cart" @click="addtocart(item)">加入购物车</button>
                    <router-link to="/cart" tag="button">查看购物车</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapMutations,
    mapGetters,
    mapState
} from 'vuex'
export default {
    name: 'detail',
    data () {
        return {
            item: {},
            isId:this.$route.params.id
        }
    },
    mounted () {
        const id = this.$route.params.id;
        this.$ajax.getProductDetail(id)
        .then(resp =>{
            this.item = resp.data.data;
            this.item.id = id;
        })
        .catch(err => console.log(error))
    },
    computed: {
        ...mapGetters(['totalCount']),
        ...mapState(['cart'])
    },
    filters: {
        maxNumber(n) {
        return n > 99 ? '99+' : n;
        },
    },
    methods: {
        ...mapMutations(['addtocart']),
        handleReturn () {
            this.$router.history.go(-1)
        },
        reduceCount () {
            if(this.item.count <=1 ){
                this.item.count = 1
            } else{
                this.item.count -=1
            } 
        },
        addCount () {
            return this.item.count +=1
        },
        handleSkip () {
            this.$router.push('/cart')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../libs/scss/icon.scss';
@import '../libs/scss/var.scss';
.xd-wrapper{
    overflow: hidden;
    &-head{
        position: fixed;
        top:0;
        left:0;
        right: 0;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #fff;
        font-size: 20px;
        border-bottom: 1px solid $border-color;
        span{
            float: left;
            margin-top: 2px;
            margin-left: 10px;
            font-size: 18px;
        }
    }
}
.xd-img{
    margin-top: 60px;
    width: 100%;
    height: 200px;
    text-align: center;
    img{
        width: 100%;
        height: 200px;
    }

}
.xd-content{
    width: 95%;
    margin-left: 10px;
    height: 60px;
    line-height:30px;
    border-bottom: 1px dotted $border-color;
    .title{
        font-weight: bold;
    }
    .price{
        color: aqua;
        font-weight: bold;
    }
}
.xd-descripe{
    width: 95%;
    margin-left: 10px;
    margin-top: 20px;
    padding-bottom: 20px;
    // border-bottom: 1px solid $border-color;
    h4{
        font-weight: bold;
        font-size: 14px;
    }
    .title1{
        font-weight: bold;
        font-size: 14px;
        margin-right: 8px;
    }
    .text{
        font-size: 14px;
        color: #666;
    }
}
.xd-empty{
    width: 100%;
    height: 8px;
    background: #ecebeb;
}
.xd-detail{
    p{
        padding: 10px;
    }
    &-img{
        width: 100px;
        height: 100px;
        padding: 10px;
        img{
            width: 100%;
            height: 100%;
            border: 2px solid aqua;
        }
    }
}
.xd-num{
    width: 95%;
    margin-left: 10px;
    margin-top:15px;
    margin-bottom: 100px;
    p{
        height: 30px;
        line-height: 30px;
    }
    div{
        width: 135px;
        box-sizing: border-box;
        border: 1px solid $border-color;
        span{
            display: inline-block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center; 
        }
        .count{
            border:1px solid $border-color;
            border-width:0 1px;  
        }
    }
}
.xd-buy{
    border-top:1px solid $border-color;
    height: 40px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    i{
        height: 40px;
        padding: 2px;
        padding-right:20px;
        padding-left:5px; 
        border: 1px solid $border-color;
        border-width:0 1px; 
        line-height: 40px;
        font-size: 35px;
        color: #cdcdcd;
    }
    .icon-xiaoxi{
        border-left:none
    }
    .icon-cart-normal{
        border-left:none;
        border-right:none;
        font-size: 30px;
    }
    .zv-badge {
        position: absolute;
        width: 15px;
        height: 15px;
        text-align: center;
        bottom:25px;
        left:90px;
        background-color: aqua;
        color: #fff;
        line-height: 14px;
        font-size: 12px;
        padding: 5px;
        border-radius: 50%;
    }
    .btn{
        line-height: 40px;
        button{
            border: none;
            outline: none;
            background: aqua;
            height: 43px;
            width: 125px;
        }
        .btn-cart{
            background: #fff;
            border-left: 1px solid $border-color; 
        }
    }
}
</style>
