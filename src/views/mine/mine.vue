<template>
    <div id="mineWrap">
        <div class="empty">更多内容，敬请期待...</div>
        <tabBar :navList="navList" @toNext="toNext"></tabBar>
    </div>
</template>
<script>
    import tabBar from '@/components/tabBar/tabBar';
    export default{
        data(){
            return{
                navList:[
                    {name:'主页',url:'/index',check:false,pic:require('../../assets/images/index.png'),act_pic:require('../../assets/images/index_act.png')},
                    {name:'服务',url:'/service',check:false,pic:require('../../assets/images/fw.png'),act_pic:require('../../assets/images/fw_act.png')},
                    {name:'我的',url:'/mine',check:true,pic:require('../../assets/images/user.png'),act_pic:require('../../assets/images/user_act.png')}
                ]
            }
        },
        components: {
        	tabBar
        },
        created(){

        },
        methods:{
            toNext(e){
                if(this.$route.path == e.url) return;
                this.$router.push({path:e.url})
            }
        }
    }
</script>