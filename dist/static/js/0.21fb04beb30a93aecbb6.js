webpackJsonp([0],{KcpI:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("SYt/"),c=i("IPo5"),a={data:function(){return{navList:[{name:"主页",url:"/index",check:!1,pic:i("OBd5"),act_pic:i("Z+6N")},{name:"服务",url:"/service",check:!0,pic:i("2yQX"),act_pic:i("MgZf")},{name:"我的",url:"/mine",check:!1,pic:i("AGL3"),act_pic:i("th6g")}]}},components:{tabBar:n.a},created:function(){},mounted:function(){setTimeout(function(){c.a.$emit("loaded")},1e3)},methods:{toNext:function(t){this.$route.path!=t.url&&this.$router.push({path:t.url})}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"serviceWrap"}},[e("div",{staticClass:"empty"},[this._v("更多服务项目，敬请期待...")]),this._v(" "),e("tabBar",{attrs:{navList:this.navList},on:{toNext:this.toNext}})],1)},staticRenderFns:[]},s=i("C7Lr")(a,r,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=0.21fb04beb30a93aecbb6.js.map