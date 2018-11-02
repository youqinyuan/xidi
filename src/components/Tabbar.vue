<template>
    <div class="xd-tabbar">
        <router-link 
        v-for="route in routes" 
        :to="route.path"
        :key="route.name"
        tag='div'>
        <div class="icon">
            <i 
            :class="`icon iconfont icon-${route.name}-${isCurrent.includes(route.path) ? 
            'active' 
            : 
            'normal'}`">
            </i>
        </div>
        <span class="zv-badge" v-if="route.path === '/cart' && cart.length">{{totalCount | maxNumber}}</span>
        {{route.text}}
        </router-link>
    </div>
</template>

<script>
import routes from '@/router/routes'
import {
    mapState,
    mapGetters
} from 'vuex'
export default {
    name: 'tabbar',
    data () {
        return {
            routes: routes.filter(route => route.isTabbar === true)
        }
    },
    computed: { 
        ...mapGetters(['totalCount']),
        ...mapState(['cart']),
        isCurrent () {
            return this.$route.fullPath
        }
    },
    filters: {
        maxNumber(n) {
        return n > 99 ? '99+' : n;
        },
    }
}
</script>

<style lang='scss' scoped>
@import '../libs/scss/var.scss';
@import '../libs/scss/icon.scss';
.xd-tabbar{
    position: fixed;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    background: #fff;
    border-top:1px solid $border-color;

    & > div{
            flex: 1;
            width: 650px;
            text-align: center;
            color: $text-color;
            font-size:$size;
        .icon{
            height: 30px;
            margin-top:8px; 
            font-size: 22px;
        }
    }
    .router-link-exact-active,
    .router-link-active{
        color:aqua;
    }
    .zv-badge {
        position: absolute;
        width: 15px;
        height: 15px;
        text-align: center;
        bottom:35px;
        left:240px;
        background-color: aqua;
        color: #fff;
        line-height: 14px;
        font-size: 12px;
        padding: 5px;
        border-radius: 50%;
    }
}
</style>
