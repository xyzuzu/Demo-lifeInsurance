<template>
    <div id="indexWrap">
        <transition name="fade">
            <div class="content-wrap">
                <div class="header">
                    <div class="weather">
                        <span><i>广州</i></span>
                        <span>阴天</span>
                        <span>25℃</span>
                        <span>23~25℃</span>
                        <span>星期六</span>
                    </div>
                    <div class="oil-item">
                        <div class="title">今日油价</div>
                        <div class="price">
                            <span>92#<i>****</i></span>
                            <span>95#<i>****</i></span>
                            <span>0#<i>****</i></span>
                        </div>
                        
                    </div>
                </div>
                <div class="banner">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item,index) in swiperSlides" :key="index">
                            <img :src="item.img" alt="">
                        </swiper-slide>
                        <p class="swiper-pagination" slot="pagination"></p>
                    </swiper>
                    <div class="msg" @click="toService"></div>
                </div>
                <div class="nav-ul">  
                    <ul>
                        <li v-for="(item,index) in indexNav" :key="index" @click="toService">
                            <img :src="item.img" alt="icon">
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                </div>
                <div class="section service-section">
                    <h2 class="sec-title"><span class="title">全心全意差异化服务</span></h2>
                    <div class="service-list">
                        <div class="service-item service-left" @click="toService">
                            <p>保险商城</p>
                        </div>
                        <div class="service-item service-center" @click="toService">
                            <p>道路救援</p>
                        </div>
                        <div class="service-item service-right" @click="toService">
                            <p>自由保</p>
                        </div>
                    </div>
                </div>
                <div class="section product-section">
                    <h2 class="sec-title"><span class="title">热销产品</span></h2>
                    <div class="product-list">
                        <div class="product-item product-left" @click="toService">
                            <div>
                                <h3>居家无忧（70周年版）</h3>
                                <p>加菜无忧/责任无忧/意外无忧</p>
                                <p><span><i>￥</i>198</span> 起</p>
                            </div>
                        </div>
                        <div class="product-item product-center" @click="toService">
                            <div>
                                <h3>安心驾</h3>
                                <p>意外身故/伤残/意外医疗</p>
                                <p><span><i>￥</i>198</span> 起</p>
                            </div>
                        </div>
                        <div class="product-item product-right" @click="toService">
                            <div>
                                <h3>2019家财险</h3>
                                <p>超值服务/全面保障/专业推荐</p>
                                <p><span><i>￥</i>20</span> 起</p>
                            </div>
                        </div>
                    </div>
                    <div class="bot-title"><span @click="toService">更多热销产品>></span></div>
                </div>
                <div class="more-section">
                    <h2 class="section" @click="toService"><p class="sec-title"><span class="title">更多精彩</span></p></h2>
                    <div class="section more-tab">
                        <div v-for="(item,index) in tabList" :key="item.id" class="tab"  :class="curIndex==(index+1)?'tab-act':''" @click="curIndex = (index+1)">
                            {{ item.name }}
                        </div>
                        <!-- <div class="tab"  :class="curIndex==1?'tab-act':''" @click="curIndex = 1">公司新闻</div>
                        <div class="tab" :class="curIndex==2?'tab-act':''" @click="curIndex = 2">更多动态</div> -->
                    </div>
                    
                    <!--<transition name="fade">-->
                        <div class="section news-list" v-if="curIndex == 1">
                            <div class="news-item" v-for="(item,index) in newList" :key="index" @click="toService">
                                <div class="news-left">
                                    <h4>{{item.title}}</h4>
                                    <p class="time">{{item.time}}</p>
                                </div>
                                <div class="news-right">
                                    <img :src="item.img" alt="新闻">
                                </div>
                            </div>
                            
                        </div>
                        <div class="section news-list" v-if="curIndex == 2">
                            <!--<div class="empty">暂无更多动态</div>-->
                            <div class="news-item" v-for="(item,index) in dynamicList" :key="index" @click="toService">
                                <div class="news-left">
                                    <h4>{{item.title}}</h4>
                                    <p class="time">{{item.time}}</p>
                                </div>
                                <div class="news-right">
                                    <img :src="item.img" alt="新闻">
                                </div>
                            </div>
                        </div>
                    <!--</transition>-->
                    <!--<transition name="fade">
                        <div class="section news-list" v-if="curIndex == 2">
                            <div class="empty">暂无更多动态</div>
                        </div>
                    </transition>-->
                </div>
            </div>
        </transition>
        <tabBar :navList="tabBarDatas" @toNext="toNext"></tabBar>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import bus from '../assets/js/bus';
    import tabBar from '@/components/tabBar/tabBar';
    export default{
        data(){
            return{
                swiperOption: {　　　
                    autoplay:true,//自动切换
                    delay:3000,
                    loop:true,
                    pagination: {
                    el: '.swiper-pagination'//分页器
                    }
                },
                swiperSlides: [
                    {img:require('../assets/images/banner_01.png')},
                    {img:require('../assets/images/banner1.png')},
                    {img:require('../assets/images/banner2.jpg')},
                ],
                indexNav:[
                    {name:'买车险',img:require('../assets/images/cx1.png'),url:''},
                    {name:'查保单',img:require('../assets/images/bd.png'),url:''},
                    {name:'办理赔',img:require('../assets/images/lp.png'),url:''},
                    {name:'理赔查询',img:require('../assets/images/lpcx.png'),url:''},
                    {name:'保单验真',img:require('../assets/images/yz.png'),url:''},
                    {name:'网点导航',img:require('../assets/images/wddh.png'),url:''},
                    {name:'祝福家',img:require('../assets/images/zfj.png'),url:''},
                    {name:'更多功能',img:require('../assets/images/more1.png'),url:''},
                ],
                tabBarDatas:[
                    {name:'主页',url:'/',check:true,pic:require('../assets/images/index.png'),act_pic:require('../assets/images/index_act.png')},
                    {name:'服务',url:'/service',check:false,pic:require('../assets/images/fw.png'),act_pic:require('../assets/images/fw_act.png')},
                    {name:'我的',url:'/mine',check:false,pic:require('../assets/images/user.png'),act_pic:require('../assets/images/user_act.png')}
                ],
                curIndex:1,
                tabList:[
                    {id:1,name:'公司新闻'},
                    {id:2,name:'更多动态'},
                ],
                newList:[
                    {title:'生日快乐！今天，中国人寿喜迎70华诞！生日快乐！今天，中国人寿喜迎70华诞！生日快乐！',time:'2019-10-21',img:require('../assets/images/news1.png')},
                    {title:'纪实|10分钟，读懂中国人寿的故事！',time:'2019-10-21',img:require('../assets/images/banner1.jpg')},
                    {title:'超燃！中国人寿司庆70周年主题歌曲《时间的托付》重磅发布！',time:'2019-10-21',img:require('../assets/images/banner2.jpg')},
                ],
                dynamicList:[
                    {title:'特惠|居家无忧家财险十月特惠，保费不变，保障翻倍！',time:'2019-10-21',img:require('../assets/images/banner2.jpg')},
                    {title:'感动|扎根在大山深处的“保险”书记！',time:'2019-10-21',img:require('../assets/images/news1.png')},
                    {title:'活动|感恩父母，从守护健康开始！',time:'2019-10-21',img:require('../assets/images/banner1.jpg')}
                ]
            }
        },
        components: {
        	tabBar,
            // remind,
            swiper, swiperSlide
        },
        created(){
        },
        mounted(){
            this.$nextTick( ()=>{
                setTimeout( ()=>{
                    bus.$emit('loaded');
                },1000)
            })
        },
        methods:{
            toNext(e){
                if(this.$route.path == e.url) return;
                this.$router.push({path:e.url})
            },
            toService(){
                this.$router.push({path:'/service'})
            }
        }
    }
</script>