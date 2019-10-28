<template>
    <div id="remindWrap" v-show="remind">
        <div id="remind">
            <img :src="remind_img" alt="">
            <p>{{remind_text}}</p>
        </div>
    </div>
</template>

<script>
    import bus from '../assets/js/bus'

    export default {
        data() {
            return {
                remind: false,
                remind_img: '',
                remind_text: '',
                timer: null
            }
        },
        mounted(){
            let _self = this;
            bus.$on('remind', (img, text) => {
                _self.remind = true;
                _self.remind_img = img;
                _self.remind_text = text;
                setTimeout( () => {
                    _self.remind = false;
                },2000)
            });
            bus.$on('loading', (remind_text) => {
                _self.remind = true;
                _self.remind_img = require('../assets/images/loading.gif');
                _self.remind_text = remind_text?remind_text:'加载中...';
            })
            bus.$on('loaded', () => {
                _self.remind = false;
                _self.remind_text = '';
            })
        }
    }
</script>
<style lang="scss" scoped>
    #remindWrap{
        position:fixed;
        width:100%;
        height:100vh;
        top:0;
        left:0;
        z-index:99;
        background:transparent;
        // background:rgba(0,0,0,.8)
    }
    #remind{
        padding:0  0.1rem;
        min-width: 2.4rem;
        min-height: 2.4rem;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0 ,0 ,0 ,.8);
        -webkit-border-radius: 0.08rem;
        -moz-border-radius: 0.08rem;
        -ms-border-radius: 0.08rem;
        -o-border-radius: 0.08rem;
        border-radius: 0.08rem;
        padding-top: .45rem;
        z-index: 100;
        text-align:center;
        img{
            width:0.64rem;
            height:0.64rem;
        }
        p{
            height:0.92rem;
            line-height:0.92rem;
            font-size:0.28rem;
            color:#fff;
        }
    }
    
</style>

