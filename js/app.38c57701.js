(function(t){function e(e){for(var n,r,a=e[0],l=e[1],c=e[2],u=0,f=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},o=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var p=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"072f":function(t,e,i){t.exports=i.p+"img/17.25b78e2c.jpg"},"104f":function(t,e,i){t.exports=i.p+"img/22.82dfa3af.jpg"},"15dc":function(t,e,i){t.exports=i.p+"img/24.64ca0639.jpg"},"25f2":function(t,e,i){t.exports=i.p+"img/25.66666480.jpg"},"2b5c":function(t,e,i){t.exports=i.p+"img/16.510f2cc4.jpg"},"2d1e":function(t,e,i){var n={"./0.jpg":"d1f5","./1.jpg":"38f3","./10.jpg":"5e10","./11.jpg":"520a","./12.jpg":"b9fe","./13.jpg":"e018","./14.jpg":"4125","./15.jpg":"ace9","./16.jpg":"2b5c","./17.jpg":"072f","./18.jpg":"e28e","./19.jpg":"8869","./2.jpg":"cedd","./20.jpg":"fd19","./21.jpg":"f376","./22.jpg":"104f","./23.jpg":"366b","./24.jpg":"15dc","./25.jpg":"25f2","./3.jpg":"a760","./4.jpg":"ab86","./5.jpg":"4e68","./6.jpg":"7220","./7.jpg":"de17","./8.jpg":"7338","./9.jpg":"7de7"};function s(t){var e=o(t);return i(e)}function o(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=o,t.exports=s,s.id="2d1e"},"366b":function(t,e,i){t.exports=i.p+"img/23.eaec505d.jpg"},"38f3":function(t,e,i){t.exports=i.p+"img/1.6bbb23d5.jpg"},4125:function(t,e,i){t.exports=i.p+"img/14.268a81c0.jpg"},"4e68":function(t,e,i){t.exports=i.p+"img/5.333ececa.jpg"},"4ffd":function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},"520a":function(t,e,i){t.exports=i.p+"img/11.5eaab1aa.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=i("8c4f"),o=(i("def6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("NavBar"),i("router-view")],1)}),r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"content-wrapper  w-full border-purple-500 border-t-4 text-mytext-primary bg-background-primaryLight shadow-md"},[i("div",{staticClass:"flex items-center justify-between py-3 px-5"},[i("div",{staticClass:"cursor-pointer mx-2 font-semibold text-xl font-mono",on:{click:function(e){return t.GoToPage("/")}}},[t._v("M.Hard")]),t._m(0),i("div",{staticClass:"flex items-center"},[i("div",{staticClass:"hidden md:block",attrs:{id:"descktop"}},[i("div",{staticClass:"flex flex-wrap items-center"},[i("span",{staticClass:"cursor-pointer mx-2",on:{click:function(e){return t.GoToPage("/")}}},[t._v("Home")]),t._m(1)])]),i("div",{staticClass:"block md:hidden",attrs:{id:"phone"}},[i("button",{staticClass:"px-2 focus:outline-none",on:{click:function(e){t.isOpen=!t.isOpen}}},[t.isOpen?i("i",{staticClass:"fa fa-remove fa-lg"}):t._e(),t.isOpen?t._e():i("i",{staticClass:"fa fa-reorder"})])])])]),i("div",{staticClass:"md:hidden text-left px-2 pt2 pb-4",class:t.isOpen?"block":"hidden"},[i("span",{staticClass:"block px-2 py-1 rounded-lg hover:bg-gray-400",on:{click:function(e){return t.GoToPage("/")}}},[t._v("Home")]),t._m(2)])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"fa fa-spinner fa-pulse fa-fw mx-1"}),i("span",{staticClass:"text-xs font-bold "},[t._v("still Under Maintenance")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://github.com/m-HARD"}},[i("i",{staticClass:"fa fa-2x fa-github mx-1"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"block px-2 py-1 rounded-lg hover:bg-gray-400",attrs:{href:"https://github.com/m-HARD"}},[t._v("my page in githup"),i("i",{staticClass:"fa fa-github"})])}],c={name:"Navbar",data:function(){return{isOpen:!1}},methods:{GoToPage:function(t){this.$router.push(t)}}},p=c,u=i("2877"),f=Object(u["a"])(p,a,l,!1,null,null,null),d=f.exports,m={name:"App",components:{NavBar:d},data:function(){return{}}},g=m,h=(i("034f"),Object(u["a"])(g,o,r,!1,null,null,null)),v=h.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("h1",{staticClass:"text-6xl"},[t._v("Pages:")]),i("router-link",{attrs:{to:"/musab"}},[t._v("musabTest")]),i("br"),i("router-link",{attrs:{to:"/photo-memory"}},[t._v("photo-memory")])],1)},b=[],j={name:"App",components:{},data:function(){return{}}},w=j,y=Object(u["a"])(w,x,b,!1,null,null,null),_=y.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("p",[t._v("musab")])])}],k={name:"App",components:{}},P=k,T=(i("e223"),Object(u["a"])(P,C,O,!1,null,null,null)),N=T.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"PhotoMemory"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.alert.status,expression:"alert.status"}],staticClass:"fixed z-50 w-full flex justify-center musabFade",class:t.alert.class,staticStyle:{top:"40%"}},[i("span",{staticClass:"px-10 py-5 rounded-lg font-bold text-black text-3xl",class:t.alert.color,domProps:{textContent:t._s(t.alert.msg)}})]),i("div",{staticClass:"w-full flex justify-center mt-16 mb-5"},[i("div",{staticClass:"w-full flex flex-wrap justify-between max-w-5xl items-center font-bold text-xl"},[i("div",{staticClass:"ml-10"},[t._v("Count : "),i("span",{class:t.getColor(1),domProps:{textContent:t._s(t.count+"/"+t.photos.length/2)}})]),i("div",{},[i("button",{staticClass:"bg-purple-500 uppercase rounded-lg py-2 px-4 leading-tight focus:outline-none cursor-pointer",on:{click:function(e){return t.changeSettings()}}},[t._v("restart")])]),i("div",{staticClass:"mr-10"},[t._v("Time Left : "),i("span",{class:t.getColor(2),domProps:{textContent:t._s(t.timer)}}),t._v(" s")])])]),i("div",{staticClass:"w-full flex justify-center"},[i("div",{staticClass:"w-full flex flex-wrap max-w-5xl"},t._l(t.photos,(function(e,n){return i("div",{key:n,staticClass:"p-2"},[i("div",{staticClass:"flip-box rounded-lg overflow-hidden cursor-pointer",on:{click:function(i){return t.addfilp(e)}}},[i("div",{staticClass:"flip-box-inner",class:e.isFilp?"flip-now":""},[t._m(0,!0),i("div",{staticClass:"flip-box-back"},[i("img",{staticClass:"w-full h-full object-center",attrs:{src:e.imgPath,alt:"musab"}})])])])])})),0)]),i("div",{staticClass:"w-full flex mt-10 justify-center"},[i("div",{staticClass:"w-full flex flex-wrap justify-center max-w-5xl"},[i("div",{staticClass:"w-1/3 px-3 mb-6"},[i("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-select-1"}},[t._v("Level")]),i("div",{staticClass:"relative"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:"grid-select-1",required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.level=e.target.multiple?i:i[0]}}},t._l(t.levels,(function(e,n){return i("option",{key:e,domProps:{value:n}},[t._v(t._s(e))])})),0),i("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[i("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[i("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])])])])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flip-box-front"},[n("img",{attrs:{src:i("4ffd"),alt:"musab"}})])}],E=(i("4160"),i("159b"),{name:"PhotoMemory",components:{},data:function(){return{hasfilp:!1,first:null,scound:null,count:0,timeLimit:0,timePassed:0,timerInterval:null,stopGame:!1,levels:["Easy","Medium","Hard"],level:0,levelNow:0,alert:{status:!1,class:"opacity-0",color:null,msg:null},photos:[]}},created:function(){this.MStart()},methods:{MStart:function(){this.randomAddImg(),this.viewAllImg(),this.addTimeLimit()},addfilp:function(t){null!=this.first&&null!=this.scound||1!=t.isFilp&&(this.stopGame||(this.timerInterval||this.startTimer(),t.isFilp=!0,this.hasfilp?(this.scound=t,this.hasfilp=!1,this.check()):(this.first=t,this.hasfilp=!0)))},check:function(){var t=this;t.first.id==t.scound.id?(console.log(t.first.id+":"+t.scound.id),t.count++,this.ifAllDone(),t.first=null,t.scound=null):setTimeout((function(){t.first.isFilp=!1,t.scound.isFilp=!1,t.first=null,t.scound=null}),1e3)},ifAllDone:function(){var t=!0;this.photos.forEach((function(e){if(1!=e.isFilp)return t=!1,!1})),t&&(this.alertWin(),this.stopTimer(),console.log("allFilpDone"))},addImg:function(){var t;0==this.levelNow?t=18:1==this.levelNow?t=24:2==this.levelNow&&(t=30);for(var e=0;e<t;e++)this.photos.push({id:Math.floor(e/2),imgPath:i("2d1e")("./"+Math.floor(e/2)+".jpg"),isFilp:!1})},randomAddImg:function(){var t;0==this.levelNow?t=18:1==this.levelNow?t=24:2==this.levelNow&&(t=30);for(var e=[],n=0;n<t;n++)e[n]=n;var s,o,r=e.length;if(r)while(--r)o=Math.floor(Math.random()*(r+1)),s=e[o],e[o]=e[r],e[r]=s;for(var a=0;a<e.length;a++)this.photos.push({id:Math.floor(e[a]/2),imgPath:i("2d1e")("./"+Math.floor(e[a]/2)+".jpg"),isFilp:!1})},addTimeLimit:function(){var t=0;0==this.levelNow?t=60:1==this.levelNow?t=80:2==this.levelNow&&(t=100),this.timeLimit=t},viewAllImg:function(){var t=0;0==this.levelNow?t=3e3:1==this.levelNow?t=4e3:2==this.levelNow&&(t=5e3);var e=this;e.photos.forEach((function(t){t.isFilp=!0})),setTimeout((function(){e.photos.forEach((function(t){t.isFilp=!1}))}),t)},getColor:function(t){var e=this;return 1==t?e.count==e.photos.length/2?"text-green-500":e.count>=e.photos.length/2/2?"text-yellow-500":"text-red-500":2==t?e.timePassed==e.timeLimit?"text-red-500":e.timePassed>=e.timeLimit/2?"text-yellow-500":"text-green-500":void 0},startTimer:function(){var t=this;this.timerInterval=setInterval((function(){return t.timePassed+=1}),1e3)},stopTimer:function(){clearInterval(this.timerInterval)},gameOver:function(){this.stopTimer(),this.stopGame=!0,this.first&&(this.first.isFilp=!1),this.alertLoss(),console.log("Game Over")},alertWin:function(){var t=this;t.alert.status=!0,t.alert.class="opacity-1",t.alert.color="bg-green-500",t.alert.msg="You Win :)",setTimeout((function(){t.alertFadeOut()}),6e3)},alertLoss:function(){var t=this;t.alert.status=!0,t.alert.class="opacity-1",t.alert.color="bg-red-500",t.alert.msg="Game Over :(",setTimeout((function(){t.alertFadeOut()}),6e3)},alertFadeOut:function(){var t=this;t.alert.class="opacity-0",setTimeout((function(){t.alert.status=!1}),3e3)},changeSettings:function(){var t=this,e=t.level;t.stopTimer(),Object.assign(t.$data,t.$options.data.call(t)),t.level=e,t.levelNow=e,t.MStart()}},computed:{timer:function(){var t=this.timeLimit-this.timePassed;return t||this.gameOver(),t}}}),L=E,$=(i("fde3"),Object(u["a"])(L,M,F,!1,null,null,null)),A=$.exports;n["a"].config.productionTip=!1,n["a"].use(s["a"]);var I=[{path:"/",component:_},{path:"/musab",component:N},{path:"/photo-memory",component:A}],S=new s["a"]({routes:I,mode:"history"});new n["a"]({router:S,render:function(t){return t(v)}}).$mount("#app")},"5e10":function(t,e,i){t.exports=i.p+"img/10.5e08fdcb.jpg"},7220:function(t,e,i){t.exports=i.p+"img/6.679f85f6.jpg"},7338:function(t,e,i){t.exports=i.p+"img/8.c1144e53.jpg"},"7de7":function(t,e,i){t.exports=i.p+"img/9.3df1d617.jpg"},"85ec":function(t,e,i){},8869:function(t,e,i){t.exports=i.p+"img/19.0b74be67.jpg"},a760:function(t,e,i){t.exports=i.p+"img/3.7bd9b874.jpg"},ab86:function(t,e,i){t.exports=i.p+"img/4.713c326e.jpg"},ace9:function(t,e,i){t.exports=i.p+"img/15.6ddef387.jpg"},b9fe:function(t,e,i){t.exports=i.p+"img/12.3d282a63.jpg"},cedd:function(t,e,i){t.exports=i.p+"img/2.deaeffb8.jpg"},d1f5:function(t,e,i){t.exports=i.p+"img/0.08db6c9b.jpg"},de17:function(t,e,i){t.exports=i.p+"img/7.b83f522c.jpg"},def6:function(t,e,i){},df49:function(t,e,i){},e018:function(t,e,i){t.exports=i.p+"img/13.438f402f.jpg"},e223:function(t,e,i){"use strict";var n=i("df49"),s=i.n(n);s.a},e28e:function(t,e,i){t.exports=i.p+"img/18.df294e8d.jpg"},f376:function(t,e,i){t.exports=i.p+"img/21.5574769b.jpg"},fac5:function(t,e,i){},fd19:function(t,e,i){t.exports=i.p+"img/20.2071fa0a.jpg"},fde3:function(t,e,i){"use strict";var n=i("fac5"),s=i.n(n);s.a}});
//# sourceMappingURL=app.38c57701.js.map