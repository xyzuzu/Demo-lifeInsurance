<template>
    <div id="tabBar">
        <ul class="tab-list">
           <li v-for="(item,index) in navList" @click="toNext(item)" :class="item.check?'li-act':''">
                <img :src="item.check?item.act_pic:item.pic" alt="icon"><p>{{item.name}}</p>
           </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: ['navList'],
        data () {
            return {
                
            }
        },
        methods:{
            toNext(e){
                this.$emit('toNext',e)
            }
        }
    }
</script>
<style lang="scss" scoped>
    #tabBar{
        position:fixed;
        bottom:0;
        width:100%;
        border-top:1px solid #eee;
        background:#fff;
        padding:0.15rem 0;
    }
    .tab-list{
        display:flex;
        li{
            flex:1;
            align-items: center;
            text-align: center;
            font-size:0.28rem;
            color:#8a8a8a;
            img{
                width:0.64rem;
                height:0.64rem;
            }
            &.li-act{
                color:#009b63;
            }
        }
    }
</style>