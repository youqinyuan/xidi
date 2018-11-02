<template>
    <div class="xd-swiper">
        <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1"><img src="https://image.xidibuy.com/common/common.e29e81bff967004a2eee7b9cb54663b4f1f68bf1d00758cbbf5aa4c4361a27fb.jpeg/640" alt=""></mt-swipe-item>
        <mt-swipe-item class="slide2"><img src="https://image.xidibuy.com/common/common.8e383668cc0d04cf5bd514ad85af79eecade8d29ccfeb705bf5aa4c4361a27fb.jpeg/640x320/640" alt=""></mt-swipe-item>
        <mt-swipe-item class="slide3"><img src="https://image.xidibuy.com/common/common.8e383668cc0d04cf459df99b354c469f43c5ae6f82974007bf5aa4c4361a27fb.jpeg/640x320/640" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    name: 'swiper'
}
</script>

<style lang="scss">
.xd-swiper{
    width: 100%;
    height: 200px;
    text-align: center;
    overflow: hidden;
}
.mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.mint-swipe-item {
    line-height: 200px;
}
.slide1 {
    img{
        width: 100%;
        height: 200px;
    }
}
.slide2 {
    img{
        width: 100%;
        height: 200px;
    }
}
.slide3 {
    img{
        width: 100%;
        height: 200px;
    }
}
</style>
