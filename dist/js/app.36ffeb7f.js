(function(){"use strict";var t={9465:function(t,e,s){var n=s(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("div",{staticClass:"main"},[e("router-view",{attrs:{name:"SlideBar"}}),e("router-view",{attrs:{name:"main"}})],1)],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:{name:"root"}}},[e("img",{attrs:{src:"//static2.cnodejs.org/public/images/cnodejs_light.svg"}})]),t._m(0)],1)},o=[function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("首页")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("新手入门")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("API")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("关于")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("注册")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("登录")])])])}],c={name:"header-vue"},u=c,l=s(1001),p=(0,l.Z)(u,r,o,!1,null,"141cf574",null),_=p.exports,d={name:"App",components:{Header:_}},h=d,f=(0,l.Z)(h,a,i,!1,null,null,null),v=f.exports,g=s(6954),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"article"},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:s(6053)}})]):e("div",[e("div",{staticClass:"topic_header"},[e("div",{staticClass:"topic_title"},[t._v(t._s(t.post.title))]),e("ul",[e("li",[t._v("*<发布></发布>于:"+t._s(t._f("formatDate")(t.post.create_at)))]),e("li",[t._v("*作者: "+t._s(t.post.author.loginname))]),e("li",[t._v("*"+t._s(t.post.visit_count)+"次浏览")]),e("li",[t._v("*来自"+t._s(t._f("tabFormatter")(t.post)))])]),e("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.post.content)}})]),e("div",{attrs:{id:"reply"}},[e("div",{staticClass:"topbar"},[t._v("回复")]),t._l(t.post.replies,(function(s,n){return e("div",{key:n,staticClass:"replySec"},[e("div",{staticClass:"replyUp"},[e("router-link",{attrs:{to:{name:"user_info",params:{name:s.author.loginname}}}},[e("img",{attrs:{src:s.author.avatar_url}})]),e("router-link",{attrs:{to:{name:"user_info",params:{name:s.author.loginname}}}},[e("span",[t._v(t._s(s.author.loginname))])]),e("span",[t._v(" "+t._s(n+1)+"楼")]),s.ups.length>0?e("span",[t._v(" ☝"+t._s(s.ups.length)+" ")]):e("span")],1),e("p",{domProps:{innerHTML:t._s(s.content)}})])}))],2)])])},b=[],C={name:"Article-vue",data(){return{isLoading:!1,post:{}}},methods:{getArticleData(){this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`).then((t=>{1==t.data.success&&(this.isLoading=!1,this.post=t.data.data)})).catch((t=>{console.log(t)}))}},beforeMount(){this.isLoading=!0,this.getArticleData()},watch:{$route(t,e){this.getArticleData()}}},k=C,y=(0,l.Z)(k,m,b,!1,null,null,null),P=y.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"PostList"},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:s(6053)}})]):e("div",{staticClass:"posts"},[e("ul",[t._m(0),t._l(t.posts,(function(s){return e("li",{key:s.id},[e("img",{attrs:{src:s.author.avatar_url}}),e("span",{staticClass:"allcount"},[e("span",{staticClass:"reply_count"},[t._v(t._s(s.reply_count))]),t._v(" /"+t._s(s.visit_count)+" ")]),e("span",{class:[{put_good:1==s.good,put_top:1==s.top,"topiclist-tab":1!=s.good&&1!=s.top}]},[e("span",[t._v(" "+t._s(t._f("tabFormatter")(s))+" ")])]),e("router-link",{attrs:{to:{name:"post_count",params:{id:s.id,name:s.author.loginname}}}},[e("span",[t._v(" "+t._s(s.title)+" ")])]),e("span",{staticClass:"last_reply"},[t._v(t._s(t._f("formatDate")(s.last_reply_at)))])],1)})),e("li",[e("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},w=[function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"toobar"},[e("span",[t._v("全部")]),e("span",[t._v("精华")]),e("span",[t._v("分享")]),e("span",[t._v("问答")]),e("span",[t._v("招聘")])])])}],D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("button",{on:{click:t.changeBtn}},[t._v("首页")]),e("button",{on:{click:t.changeBtn}},[t._v("上一页")]),t.jduge?e("button",{staticClass:"pagebtn"},[t._v("....")]):t._e(),t._l(t.pagebtns,(function(s){return e("button",{key:s.id,class:[{currentPage:s==t.currentPage},"pagebtn"],on:{click:function(e){return t.changeBtn(s)}}},[t._v(" "+t._s(s)+" ")])})),e("button",{on:{click:t.changeBtn}},[t._v("下一页")])],2)},j=[],x=(s(541),s(7387)),Z=s.n(x),$={name:"Pagination-vue",data(){return{pagebtns:[1,2,3,4,5,"...."],currentPage:1,jduge:!1}},methods:{changeBtn(t){if("number"==typeof t)this.currentPage=t,this.jduge=t>4,t==this.pagebtns[4]?(this.pagebtns.shift(),this.pagebtns.splice(4,0,this.pagebtns[3]+1)):t==this.pagebtns[0]&&1!=t&&(this.pagebtns.unshift(this.pagebtns[0]-1),this.pagebtns.splice(5,1)),this.$emit("handleList",this.currentPage);else switch(t.target.innerText){case"上一页":Z()("button.currentPage").prev().click();break;case"下一页":Z()("button.currentPage").next().click();break;case"首页":this.pagebtns=[1,2,3,4,5,"....."],this.changeBtn(1);break}}}},O=$,I=(0,l.Z)(O,D,j,!1,null,"387edca5",null),B=I.exports,T={name:"PostList",data(){return{isLoading:!1,posts:[],postpage:1}},components:{Pagination:B},methods:{getData(){this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postpage,limit:20}}).then((t=>{this.isLoading=!1,this.posts=t.data.data})).catch((function(t){console.log(t)}))},renderList(t){this.postpage=t,this.getData()}},beforeMount(){this.isLoading=!0,this.getData()}},M=T,A=(0,l.Z)(M,L,w,!1,null,"590b8a89",null),F=A.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"UserInfo"},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:s(6053)}})]):e("div",{staticClass:"userInfomation"},[e("section",[e("img",{attrs:{src:t.userinfo.avatar_url}}),e("span",[t._v(t._s(t.userinfo.loginname))]),e("p",[t._v(t._s(t.userinfo.score)+"积分")]),e("p",[t._v("注册时间:"+t._s(t._f("formatDate")(t.userinfo.create_at)))])]),e("div",{staticClass:"replies"},[e("p",[t._v("回复的主题")]),e("ul",t._l(t.userinfo.recent_replies,(function(s){return e("li",{key:s.id},[e("router-link",{attrs:{to:{name:"post_count",params:{id:s.id}}}},[t._v(" "+t._s(s.title)+" ")])],1)})),0)]),e("div",{staticClass:"topics"},[e("p",[t._v("创建的主题")]),e("ul",t._l(t.userinfo.recent_topics,(function(s){return e("li",{key:s.id},[e("router-link",{attrs:{to:{name:"post_count",params:{id:s.id}}}},[t._v(" "+t._s(s.title)+" ")])],1)})),0)])])])},S=[],U={name:"UserInfo",data(){return{isLoading:!1,userinfo:{}}},methods:{getData(){this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then((t=>{this.isLoading=!1,this.userinfo=t.data.data})).catch((function(t){console.log(t)}))}},beforeMount(){this.isLoading=!0,this.getData()}},E=U,q=(0,l.Z)(E,H,S,!1,null,"3d8022ba",null),z=q.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"autherinfo"},[e("div",{attrs:{clas:"authersummay"}},[e("div",{staticClass:"topbar"},[t._v("作者")]),e("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[e("img",{attrs:{src:t.userinfo.avatar_url}})])],1),e("div",{staticClass:"recent_topics"},[e("div",{staticClass:"topbar"},[t._v("作者最近主题")]),e("ul",t._l(t.topcilimiby5,(function(s){return e("li",{key:s.id},[e("router-link",{attrs:{to:{name:"post_count",params:{id:s.id,name:s.author.loginname}}}},[t._v(" "+t._s(s.title)+" ")])],1)})),0)]),e("div",{staticClass:"recent_replies"},[e("div",{staticClass:"topbar"},[t._v("作者最近回复")]),e("ul",t._l(t.replylimiby5,(function(s){return e("li",{key:s.id},[e("router-link",{attrs:{to:{name:"post_count",params:{id:s.id,name:s.author.loginname}}}},[t._v(" "+t._s(s.title)+" ")])],1)})),0)])])},J=[],K={name:"SlideBar",data(){return{userinfo:{}}},methods:{getData(){this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then((t=>{this.isLoading=!1,this.userinfo=t.data.data})).catch((function(t){console.log(t)}))}},computed:{topcilimiby5(){return this.userinfo.recent_topics?this.userinfo.recent_topics.slice(0,5):this.userinfo.recent_topics},replylimiby5(){return this.userinfo.recent_replies?this.userinfo.recent_replies.slice(0,5):this.userinfo.recent_replies}},beforeMount(){this.isLoading=!0,this.getData()}},N=K,Q=(0,l.Z)(N,G,J,!1,null,"a7a1eeb0",null),R=Q.exports;n.ZP.use(g.ZP);var V=new g.ZP({routes:[{name:"root",path:"/",components:{main:F}},{name:"post_count",path:"/topic/:id&author=:name",components:{main:P,SlideBar:R}},{name:"user_info",path:"/userinfo/:name",components:{main:z}}]}),W=s(2881),X=s.n(W);n.ZP.prototype.$http=X(),n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(v),router:V}).$mount("#app"),n.ZP.filter("formatDate",(function(t){if(!t)return"";var e=new Date(t),s=(new Date).getTime()-e.getTime();return s<0?"":s/1e3<30?"刚刚":s/1e3<60?parseInt(s/1e3)+"秒前":s/6e4<60?parseInt(s/6e4)+"分钟前":s/36e5<24?parseInt(s/36e5)+"小时前":s/864e5<31?parseInt(s/864e5)+"天前":s/2592e6<12?parseInt(s/2592e6)+"月前":parseInt(s/31536e6)+"年前"})),n.ZP.filter("tabFormatter",(function(t){return 1==t.good?"精华":1==t.top?"置顶":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"}))},6053:function(t,e,s){t.exports=s.p+"img/loading.3c55c629.gif"}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,i){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],i=t[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(o=!1,i<r&&(r=i));if(o){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,r=n[0],o=n[1],c=n[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var l=c(s)}for(e&&e(n);u<r.length;u++)i=r[u],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(l)},n=self["webpackChunkcnode"]=self["webpackChunkcnode"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(9465)}));n=s.O(n)})();
//# sourceMappingURL=app.36ffeb7f.js.map