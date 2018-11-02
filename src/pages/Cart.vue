<template>
    <div class="xd-wrapper">
        <div class="xd-wrapper-head">
            购物车
        </div>
        <div class="xd-empty">
            <div class="xd-empty-left">
                您可以在登录后查看之前加入购物车的商品
            </div>
            <div class="xd-empty-right">
                <router-link to="/login" tag="button">登录</router-link>
            </div>
        </div>
        <div class="xd-container" v-if="cart.length>0">
            已满足免运费条件
        </div>
        <div class="xd-content">
            <div 
            v-for="item in cart"
            :key="item.id"
            class="xd-content-list">
                <input v-model="checkedItem" type="checkbox" :value="item.id">
                <div class="xd-content-list-img">
                    <img :src="item.img" alt="">
                </div>
                <div class="xd-content-list-item">
                    <p class="title">{{item.title}}</p>
                    <div class="xd-content-list-item-num">
                        <span class="btn" @click="decrement(item.id)">-</span>
                        <span class="count">{{item.count}}</span>
                        <span class="btn" @click="increment(item.id)">+</span>
                    </div>
                </div>
                <div class="xd-content-list-wrap">
                    <div class="xd-content-list-wrap-price">
                        ￥{{item.price}}
                    </div>
                    <div class="xd-content-list-wrap-del">
                        <button @click="onItemDelete(item.id)">删除</button>
                    </div>
                </div>   
            </div>
            <div class="xd-content-border"></div>
        </div>
        <div class="xd-wrapper-bag" v-if="cart.length===0">
            <div class="xd-wrapper-bag-img">
                <img src="//static.xidibuy.com/m/static/global/images/1.0.0/feedback.png" alt="">
            </div>
            <div class="xd-wrapper-bag-title">
                <p>您的购物车没有商品,</p>
                <p>赶紧挑选心爱的商品塞满您的购物车吧</p>
            </div>
            <div class="xd-wrapper-bag-btn">
                <router-link tag="button" to="/home">随便逛逛</router-link>
            </div>
        </div>
        <div class="xd-wrapper-bag-bottom"></div>
        <div class="xd-wrapper-contain">
            <h4>——为您推荐——</h4>
            <div class="xd-wrapper-contain-container">
                <div class="wrapper-contain-container-list">
                    <div class="xd-wrapper-contain-container-list-img">
                        <img src="//image.xidibuy.com/shop/shop.7afca799c93e8376fe289a359c75e800e30949942bc7ada2358afc5948f29150.jpeg/800x800/280" alt="">
                    </div>
                    <div class="xd-wrapper-contain-container-list-title">
                        澳大利亚纯羊毛
                    </div>
                    <div class="xd-wrapper-contain-container-list-price">
                        ￥98.99
                    </div>
                </div>
                <div class="wrapper-contain-container-list">
                    <div class="xd-wrapper-contain-container-list-img">
                        <img src="//image.xidibuy.com/shop/shop.14d337e91f577d1f215794fd71019a24dcb6477abccf93073500842dd515aa3d.jpeg/1500x1500/280" alt="">
                    </div>
                    <div class="xd-wrapper-contain-container-list-title">
                        澳大利亚纯羊毛
                    </div>
                    <div class="xd-wrapper-contain-container-list-price">
                        ￥98.99
                    </div>
                </div>      
            </div>
        </div>
        <div class="xd-total" v-if="cart.length>0">
            <input v-model="isAllChecked" type="checkbox"><i>全选</i>
            <div class="xd-total-num">
                <span>总计:</span>
                <span class="price">￥{{(checkedTotalPrice.toFixed(2))}}</span>
            </div>
            <div class="xd-total-allnum">
                <button :class="checkedItem.length>0 ? 'active' : ''">
                    结算<span v-if="checkedItem.length>0">({{totalCheckedCount | maxNumber}})</span>
                </button>
            </div>    
        </div>
    </div>
</template>
<script>
import {
    mapState,
    mapGetters,
    mapMutations
} from 'vuex'
export default {
    name: 'cart',
    data () {
        return {
            checkedItem: []
        }
    },
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['totalCount']),
        isAllChecked: {
            get() {
                return this.checkedItem.length === this.$store.state.cart.length;
            },
            set(val) {
                if(val) {
                    this.checkedItem = this.$store.state.cart.map(item => item.id);
                } else {
                    this.checkedItem = [];
                }
            }
        },
        checkedTotalPrice() {
            return this.$store.state.cart.reduce((result, item)=>{
            if (this.checkedItem.includes(item.id)) {
                result += item.price * item.count;
            }
            return result
            }, 0)
        },
        totalCheckedCount () {
            return this.$store.state.cart.reduce((result, item)=>{
            if (this.checkedItem.includes(item.id)) {
                result +=item.count;
            }
            return result
            }, 0)
        }
    },
    filters: {
        maxNumber(n) {
        return n > 99 ? '99+' : n;
        },
    },
    methods: {
        ...mapMutations(['increment','decrement','onItemDelete']),
    }
}
</script>

<style lang="scss" scoped>
@import '../libs/scss/var.scss';
.xd-wrapper-head{
    position: fixed;
    background: #fff;
    top: 0px;
    left: 0;
    right: 0;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid $border-color;
}
.xd-empty{
    margin-top: 60px;
    height: 40px;
    line-height: 40px;
    color:$text-color;
    &-left{
        float: left;
    }
    &-right{
        float: right;
        margin-right: 5px;
        button{
            border: none;
            background: #fff;
            outline: none;
            border:1px solid $border-color;
        }
    }
}
.xd-container{
    height: 40px;
    line-height: 40px;
    background: #fcdada;
    color: #fa6f6f;
    font-size: 18px;
    margin-bottom: 10px;
}
.xd-wrapper-bag{
    height: 380px;
    overflow: hidden;
    &-img{
        margin: 15px auto;
        margin-bottom: 0;
        width: 250px;
        height: 180px;
        img{
            width: 250px;
            height: 180px;
        }
    }
    &-title{
        width: 320px;
        height: 60px;
        line-height: 30px;
        margin: 0 auto;
        color: $text-color;
        text-align: center;
        p{
            font-size: 18px;
        }
    }
    &-btn{
        width: 95%;
        height: 40px;
        border: 1px solid #cac8c8;
        margin: 30px auto;
        button{
            border: none;
            outline: none;
            font-size: 16px;
            width: 100%;
            height: 40px;
            text-align: center;
            line-height: 40px;
            background: #fff;
        }

    }
    &-bottom{
        height: 8px;
        background: #ecebeb;
        border: 1px solid $border-color;
        border-width:1px 0;
    }
}
.xd-content{
    &-list{
        height: 116px;
        width: 95%;
        margin-left:10px;
        display: flex;
        border-top: 1px solid $border-color;
        input{
            display: inline-block;
            margin-top: 35px;
            width: 25px;
            height: 25px;
        }
        &-img{
            margin:10px;
            img{
                width: 80px;
                height: 80px;  
            }
        }
        &-item{
            width: 50%;
            margin-top: 15px;
            margin-left: 8px;
            .title{
                height:40px;
            }
            &-num{
                width: 100px;
                height: 30px;
                border: 1px solid $border-color;
                span{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    box-sizing: border-box;
                    line-height: 30px;
                    text-align: center; 
                }
                .count{
                    border:1px solid $border-color;
                    border-width:0 1px;  
                }
            }
        }
        &-wrap{
            margin-left: 15px;
            margin-top:8px;
            &-price{
                color: aqua;
                margin-bottom: 45px;
            }
            &-del{
                margin-left: 8px;
                margin-top: -20px;
                button{
                    width: 60px;
                    height: 30px;
                    border: none;
                    background: #fff;
                    outline: none;
                    border:1px solid $border-color;
                }
            }
        }
    }
    &-border{
        width: 100%;
        height: 8px;
        background: #ecebeb;
    }
}
.xd-wrapper-contain{
    margin-bottom: 100px;
    width: 95%;
    margin-left: 10px; 
    h4{
        font-size: 18px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    &-container{
        display: flex;
        justify-content: space-between;
        height: 260px;
        &-list{
            &-img{
                width: 170px;
                height: 150px;
                margin-bottom: 10px;
                img{
                    width: 170px;
                    height: 150px; 
                }
            }
            &-price{
                color: aqua;
            }
        }
    }
}
.xd-total{
    border-top:1px solid $border-color;
    width: 100%;
    position: fixed;
    background: #fff;
    bottom: 55px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    input{
        width: 20px;
        height: 20px;
        margin: 15px;
        margin-top: 20px;
    }
    i{
        display: inline-block;
        margin-top:20px;
        margin-left: -30px;
        color: aqua;
        font-style: normal; 
    }
    &-num{
        height: 60px;
        line-height: 60px;
        .price{
            font-size: 18px;
            color: aqua;
        }
    }
    &-allnum{
        height: 60px;
        line-height: 60px;
        .active{
            background-color: aqua;
        }
        button{
            background: #cdcdcd;
            width: 130px;
            line-height: 50px;
            height: 50px;
            border: none;
            outline: none;
            color:#fff;
            font-size: 20px;
            font-weight: bold;
        }
    }
}

</style>
