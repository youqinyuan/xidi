<template>
<div class="xd-wrapper">
    <div class="xd-wrapper-search" @click="handleClick">
        <i class="icon iconfont icon-sousuo"></i>
        <input id="txt" type="text" placeholder="去喜地，逛世界">
    </div>
    <div class="xd-wrapper-category">CATEGORY</div>
    <router-link to="/list" tag="div">
        <div class="xd-wrapper-type">
            <div class="xd-wrapper-type-list">
                <div class="xd-wrapper-type-list-img">
                    <img src="https://image.xidibuy.com/shop/shop.e42fe8a6caa54b215ede86b1f4527ea7bf27b3c55bb7658d3500842dd515aa3d.png/800x800/180" alt="">
                </div>
                <div class="xd-wrapper-type-list-desc">
                    厨房用具
                </div>
            </div>
            <div class="xd-wrapper-type-list">
                <div class="xd-wrapper-type-list-img">
                    <img src="https://image.xidibuy.com/shop/shop.4831b40e5ad1745c53fcd790fd252655a425edb8f25382ad3500842dd515aa3d.jpeg/1500x1500/180" alt="">
                </div>
                <div class="xd-wrapper-type-list-desc">
                    母婴用品
                </div>
            </div>
            <div class="xd-wrapper-type-list">
                <div class="xd-wrapper-type-list-img">
                    <img src="https://image.xidibuy.com/shop/shop.b2fee0a3a14c555d13cc0defd02bf1b5681f77de7d1c34ed3500842dd515aa3d.jpeg/1500x1500/180" alt="">
                </div>
                <div class="xd-wrapper-type-list-desc">
                    鞋包配饰
                </div>
            </div>
        </div>
        <div class="xd-wrapper-type">
            <div class="xd-wrapper-type-list">
                <div class="xd-wrapper-type-list-img">
                    <img src="https://image.xidibuy.com/shop/shop.5a081c4c1d0bbdcd8570c178350a5166a439537b0504a8f73500842dd515aa3d.jpeg/800x800/180" alt="">
                </div>
                <div class="xd-wrapper-type-list-desc">
                    卫浴个护
                </div>
            </div>
            <div class="xd-wrapper-type-list">
                <div class="xd-wrapper-type-list-img">
                    <img src="https://image.xidibuy.com/shop/shop.7558c17aa6a38cf4226492f942d98268c934c1d3ec63ed3c3500842dd515aa3d.jpeg/1500x1500/180" alt="">
                </div>
                <div class="xd-wrapper-type-list-desc">
                    家居生活
                </div>
            </div>
            <div class="xd-wrapper-type-list">
                <div class="xd-wrapper-type-list-img">
                    <img src="https://image.xidibuy.com/shop/shop.18bb4f5459583365486f57910b4d4c0eef7470619dad5f763500842dd515aa3d.jpeg/1000x1000/180" alt="">
                </div>
                <div class="xd-wrapper-type-list-desc">
                    办公通勤
                </div>
            </div>    
        </div>
        <div class="xd-wrapper-type">
            <div class="xd-wrapper-type-list">
                <div class="xd-wrapper-type-list-img">
                    <img src="https://image.xidibuy.com/shop/shop.53a7cbfbf394f430b8cd5f5f41f197e947dce5e2df6a6bff3500842dd515aa3d.jpeg/1500x1500/280" alt="">
                </div>
                <div class="xd-wrapper-type-list-desc">
                    各类零食
                </div>
            </div>
            <div class="xd-wrapper-type-list">
                <div class="xd-wrapper-type-list-img">
                    <img src="https://image.xidibuy.com/shop/shop.8b25c6993c88c313c35f8b55099d1957648d29680ee463903500842dd515aa3d.jpeg/800x800/280" alt="">
                </div>
                <div class="xd-wrapper-type-list-desc">
                    服装服饰
                </div>
            </div>
            <div class="xd-wrapper-type-list">
                <div class="xd-wrapper-type-list-img">
                    <img src="https://image.xidibuy.com/shop/shop.d2a2bc9d0bd39cc77d7ed7b46730f99fd93a1f198d821ee63500842dd515aa3d.jpeg/800x800/280" alt="">
                </div>
                <div class="xd-wrapper-type-list-desc">
                    精美挂件
                </div>
            </div>    
        </div>
    </router-link>
</div>
</template>

<script>
export default {
    name: 'type',
    methods: {
        handleClick () {
            this.$router.push('/search')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../libs/scss/var.scss';
@import '../libs/scss/icon.scss';
.xd-wrapper{
    &-search{
        height: 40px;
        width: 90%;
        text-align: center;
        margin: 10px auto;
        background: #fff;
        background: #eaeaea;
        input{
            border: none;
            outline: none;
            margin-right:80px;
            height: 37px;
            background: #eaeaea;
        }
    }
    &-category{
        height: 80px;
        line-height: 100px;
        text-align: center;
        font-size: 24px;
        color: $text-color;
    }
    &-type{
        width: 95%;
        margin-left: 10px;
        display: flex;
        justify-content: space-around;
        &-list{
            height: 180px;
            width: 33%;
            text-align: center;
            &-img{
                height: 100px;
                img{
                    height: 100px; 
                }
            }
        }
    }
}

</style>
