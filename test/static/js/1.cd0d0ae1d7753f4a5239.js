webpackJsonp([1],{EXwE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("SYt/"),c=n("IPo5"),a={data:function(){return{navList:[{name:"主页",url:"/index",check:!1,pic:n("OBd5"),act_pic:n("Z+6N")},{name:"服务",url:"/service",check:!1,pic:n("2yQX"),act_pic:n("MgZf")},{name:"我的",url:"/mine",check:!0,pic:n("AGL3"),act_pic:n("th6g")}]}},components:{tabBar:i.a},created:function(){},mounted:function(){this.$nextTick(function(){setTimeout(function(){c.a.$emit("loaded")},1e3)})},methods:{toNext:function(t){this.$route.path!=t.url&&this.$router.push({path:t.url})}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mineWrap"}},[e("div",{staticClass:"empty"},[this._v("更多内容，敬请期待...")]),this._v(" "),e("tabBar",{attrs:{navList:this.navList},on:{toNext:this.toNext}})],1)},staticRenderFns:[]},s=n("C7Lr")(a,r,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=1.cd0d0ae1d7753f4a5239.js.map