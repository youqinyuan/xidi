<template>
    <div class="xd-wrapper">
        <router-link tag="div" to="/type" class="xd-wrapper-return">返回</router-link>
        <div class="xd-wrapper-search">
            <i class="icon iconfont icon-sousuo"></i>
            <input ref="todoIput" v-model.trim="inputValue" type="text" placeholder="去喜地，逛世界">
        </div>
        <span @click="addTodo(inputValue)">搜索</span>
        <div class="xd-wrapper-bottom"></div>
        <div class="xd-wrapper-history">
            <h4 v-if="hotList.length>0">
                历史搜索
                <i class="icon iconfont icon-shanchu" @click="handleDelete"></i>
            </h4>
            <div class="xd-wrapper-history-container">
                <p v-for="(item, index) in hotList" :key="index">{{item}}</p>
            </div>
        </div>
        <div class="xd-wrapper-history">
            <h4>热门搜索</h4>
            <div class="xd-wrapper-history-container">
                <p v-for="item in searchList" :key="item.index">{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapState,
    mapMutations
}from 'vuex';
export default {
    name: 'search',
    data () {
        return {
            searchList: [],
            inputValue: ''
        }
    },
    computed: {
        ...mapState(['hotList']),
    },
    mounted () {
        this.$refs.todoIput.focus();
        this.$ajax.getSearch()
        .then(resp =>{
            this.searchList = resp;
        })
        .catch(err => console.log(error))
    },
    methods: {
        ...mapMutations(['addtosearch', 'handleDelete']),
        addTodo (val) {
            if(this.inputValue !== ''){
                this.addtosearch(val)
                this.inputValue = ''
                this.$router.push('/list')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../libs/scss/var.scss';
@import '../libs/scss/icon.scss';
.xd-wrapper{
    &-return{
        float: left;
        margin: 10px;
        margin-top: 20px;
        font-size: 16px;
    }
    &-search{
        float: left;
        height: 40px;
        width: 70%;
        text-align: center;
        margin-top: 10px;
        background: #fff;
        background: #eaeaea;
        input{
            border: none;
            outline: none;
            margin-right:50px;
            height: 37px;
            background: #eaeaea;
        }
    }
    span{
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-top: 20px;
        margin-left: 10px;
        font-size: 16px;
    }
    &-bottom{
        border: 1px solid #ebe8e8;
    }
    &-history{
        width: 95%;
        margin-left: 10px;
        margin-top: 20px;
        h4{
            font-size: 20px;
            display: flex;
            justify-content: space-between;
            font-weight: normal;
            color: #c0bfbf;
            i{
                font-size: 23px;
                padding-right: 20px;
            }
        }
        &-container{
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            p{
                font-size: 16px;
                margin: 8px;
                padding: 7px;
                background: #eeecec;
            }
        }
    }
}

</style>
