<template>
  <div>
    <router-view class="xd-body"></router-view>
    <div class="tabbar-wrapper">
      <tabbar v-if="showTabbar==='/home' || showTabbar==='/type'|| showTabbar==='/cart' || showTabbar==='/mine'"></tabbar>
    </div>
  </div>
</template>
<script>
import Tabbar from '@/components/Tabbar';
import routes from '@/router/routes';
export default {
  name: 'App',
  components: {
    Tabbar
  },

  computed: {
    showTabbar () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang='scss' scoped>
  @import './libs/scss/var.scss';
  html,
  body{
    display: flex;
    flex-direction: column;
  }
  .xd-body{
    flex:1;
    overflow-x:hidden; 
  }

</style>
