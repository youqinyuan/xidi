<template>
    <div class="xd-wrapper">
        <div class="xd-wrapper-head">
            <span @click="handleReturn">返回</span>
            商品列表
        </div>
        <div class="xd-wrapper-list">
            <ul>
                <li
                @click="addClass(index)"
                :class=" index===current? 'active' : ''" 
                v-for="(item,index) in nav" 
                :key="item.id">{{item.title}}</li>
            </ul>
        </div>
        <div class="xd-wrapper-container">
        <router-link
            v-for="list in productList"
            :key="list.id"
            tag="div"
            :to="`/detail/${list.id}`" 
            class="xd-wrapper-container-list">
                <div class="xd-wrapper-container-list-item">
                    <div class="xd-wrapper-container-list-item-img">
                        <img :src="list.img" alt="">
                    </div>
                    <div class="xd-wrapper-container-list-item-title">
                        {{list.title}}
                    </div>
                    <div class="xd-wrapper-container-list-item-price">
                        ￥{{list.price}}
                    </div>
                </div>   
            </router-link>
        </div>
        <div class="xd-wrapper-bottom">
        </div>
    </div>
</template>

<script>
export default {
    name: 'list',
    data () {
        return {
            current: 0,
            productList: [],
            nav: [{
                id: 1,
                title: '综合'
            }, {
                id: 2,
                title: '销量'
            }, {
                id: 3,
                title: '新品'
            }, {
                id: 4,
                title: '价格'
            }]
        }
    },
    methods: {
        handleReturn () {
            this.$router.history.go(-1)
        },
        addClass (index) {
            this.current = index
            this.$ajax.getProductList()
            .then(resp => {
                this.productList = resp.data.data.slice(0,16);
            })
            .catch(err => console.log(error))
        }
    },
    mounted () {
        let sw = true;
        this.$ajax.getProductList()
            .then(resp => {
                this.productList = resp.data.data.slice(0,16);
            })
            .catch(err => console.log(error))

        window.addEventListener('scroll', () =>{
            const scrollTop = window.pageYOffset || document.body.scrollTop || document.body.scrollHeight;
            if(scrollTop + window.innerHeight >= document.body.offsetHeight) {
                if (sw==true) {
                    sw =false;
                    this.$ajax.getProductList()
                    .then(resp =>{
                        resp.data.data.slice(16,31).forEach((item,index) =>{
                            this.productList.push(item)
                        })
                    })
                }
            }
            
        })
    }
}
</script>
<style lang="scss" scoped>
@import '../libs/scss/icon.scss';
@import '../libs/scss/var.scss';
.xd-wrapper{
    &-head{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        background: #fff;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid $border-color;
        span{
            float: left;
            font-size: 18px;
            margin-top: 2px;
            margin-left: 10px;
        }
    }
    &-list{
        position: fixed;
        top:60px;
        left:0;
        right: 0;
        height: 40px;
        line-height: 40px;
        border:1px solid $border-color;
        border-width: 1px 0;
        background: #fff;
        ul{
            display: flex;
            justify-content: space-around;
            .active{
                color: aqua;
                border-bottom: 2px solid aqua;
            }
        }
    }
    &-container{
        margin-top: 120px;
        margin-left: 30px;
        width: 85%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-list{
            margin: 15px 0;
            width: 150px;
            height: 220px;
            &-item{
                &-img{
                    width: 150px;
                    height: 150px;
                    margin-bottom: 8px;
                }
                &-price{
                    color: aqua;
                }
            }
        }
    }
    &-bottom{
        height: 20px;
        width: 100%;
    }
}
</style>
