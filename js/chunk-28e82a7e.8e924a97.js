(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28e82a7e"],{"0992":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"levelsSelect"}},[r("div",{staticClass:"w-full flex mt-10 justify-center"},[r("div",{staticClass:"w-full flex flex-wrap justify-center max-w-5xl"},[r("div",{staticClass:"w-1/3 px-3 mb-6"},[r("label",{staticClass:"block uppercase tracking-wide text-sm font-bold mb-2"},[t._v("Levels:")]),r("div",{staticClass:"relative"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"block appearance-none w-full bg-purple-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.level=e.target.multiple?r:r[0]}}},t._l(t.levels,(function(e,a){return r("option",{key:e,domProps:{value:a}},[t._v(t._s(e))])})),0),r("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])])])])},s=[],l={name:"levelsSelect",props:{levels:{type:Array,default:function(){return["Easy","Medium","Hard"]}}},data:function(){return{level:0}},methods:{dataForApp:function(){this.$emit("dataForApp",this.level)}},watch:{level:function(){this.dataForApp()}}},n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["a"]=o.exports},"2ab8":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"InteractiveBord"}},[r("div",{staticClass:"w-full flex flex-col items-center mt-16 font-bold text-sm lg:text-xl"},[r("div",{staticClass:"w-full flex flex-wrap justify-center items-center",class:t.maxW},[r("div",{},[r("button",{staticClass:"bg-purple-500 uppercase rounded-lg py-2 px-4 leading-tight focus:outline-none cursor-pointer",on:{click:function(e){return t.$emit("changeSetting")}}},[t._v("restart")])])]),r("div",{staticClass:"w-full flex flex-wrap justify-between mt-5 items-center",class:t.maxW},[r("div",{staticClass:"ml-10"},[t._v("Score : "),r("span",{domProps:{textContent:t._s(t.score)}})]),r("div",{staticClass:"mr-10"},[t._v("Time Left : "),r("span",{class:t.getTimeColor(),domProps:{textContent:t._s(t.timer)}}),t._v(" s")])])])])},s=[],l=(r("a9e3"),{name:"InteractiveBord",props:{score:{type:Number,default:0},timeLimit:{type:Number,default:60},maxW:{type:String,default:"max-w-5xl"}},data:function(){return{timePassed:0,timerInterval:null,stopGame:!1}},methods:{getTimeColor:function(){var t=this;return t.timePassed==t.timeLimit?"text-red-500":t.timePassed>=t.timeLimit/2?"text-yellow-500":"text-green-500"},startTimer:function(){var t=this;this.timerInterval=setInterval((function(){return t.timePassed+=1}),1e3)},stopTimer:function(){clearInterval(this.timerInterval)},TimeOver:function(){this.stopGame||(this.stopGame=!0,this.stopTimer(),this.dataForApp(),console.log("Time Over"))},dataForApp:function(){this.$emit("dataForApp")}},computed:{timer:function(){var t=this.timeLimit-this.timePassed;return t||this.TimeOver(),t}},watch:{}}),n=l,i=r("2877"),o=Object(i["a"])(n,a,s,!1,null,null,null);e["a"]=o.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),s=r("5899"),l="["+s+"]",n=RegExp("^"+l+l+"*"),i=RegExp(l+l+"*$"),o=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(n,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,r){var a=r("861d"),s=r("d2bb");t.exports=function(t,e,r){var l,n;return s&&"function"==typeof(l=e.constructor)&&l!==r&&a(n=l.prototype)&&n!==r.prototype&&s(t,n),t}},a9e3:function(t,e,r){"use strict";var a=r("83ab"),s=r("da84"),l=r("94ca"),n=r("6eeb"),i=r("5135"),o=r("c6b6"),c=r("7156"),u=r("c04e"),m=r("d039"),d=r("7c73"),p=r("241c").f,f=r("06cf").f,v=r("9bf2").f,g=r("58a8").trim,h="Number",b=s[h],x=b.prototype,w=o(d(x))==h,C=function(t){var e,r,a,s,l,n,i,o,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=g(c),e=c.charCodeAt(0),43===e||45===e){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+c}for(l=c.slice(2),n=l.length,i=0;i<n;i++)if(o=l.charCodeAt(i),o<48||o>s)return NaN;return parseInt(l,a)}return+c};if(l(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(w?m((function(){x.valueOf.call(r)})):o(r)!=h)?c(new b(C(e)),r,N):C(e)},I=a?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;I.length>_;_++)i(b,y=I[_])&&!i(N,y)&&v(N,y,f(b,y));N.prototype=x,x.constructor=N,n(s,h,N)}},abac:function(t,e,r){"use strict";var a=r("e0b3"),s=r.n(a);s.a},d3c0:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-16",attrs:{id:"FindTheNumber"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.alert.status,expression:"alert.status"}],staticClass:"fixed z-50 w-full flex justify-center alertFade",class:t.alert.class,staticStyle:{top:"10%"}},[r("span",{staticClass:"px-10 py-2 rounded-lg font-bold text-black text-3xl",class:t.alert.color,domProps:{textContent:t._s(t.alert.msg)}})]),r("InteractiveBord",{ref:"InteractiveBord",attrs:{score:t.score},on:{dataForApp:t.updateTimeOver,changeSetting:function(e){return t.changeSettings()}}}),r("div",{staticClass:"w-full flex flex-col items-center font-bold"},[r("div",{staticClass:"bg-gray-500 w-1/6 h-12 sm:h-16 md:h-24 rounded-lg"},[r("span",{staticClass:"text-4xl sm:text-5xl md:text-6xl",class:t.targetNumber.color,domProps:{textContent:t._s(t.targetNumber.num)}})]),r("div",{staticClass:"w-full flex flex-wrap max-w-5xl mt-3"},t._l(t.numbersList,(function(e,a){return r("div",{key:a,staticClass:"md:p-1 w-1/6 h-12 sm:h-16 md:h-20"},[r("div",{staticClass:"h-full w-full rounded-lg overflow-hidden cursor-pointer border",class:e.bgcolor,on:{click:function(r){return t.clickNumber(e)}}},[r("span",{staticClass:"text-3xl sm:text-4xl md:text-5xl",class:e.color,domProps:{textContent:t._s(e.num)}})])])})),0)]),r("LevelsSelect",{attrs:{levels:["Easy","Hard"]},on:{dataForApp:t.updateLevelValue}}),r("span",{staticClass:"w-1/12 text-red-800 bg-red-500"}),r("span",{staticClass:"w-1/12 text-gray-800 bg-gray-500"}),r("span",{staticClass:"w-1/12 text-green-800 bg-green-500"}),r("span",{staticClass:"w-1/12 text-blue-800 bg-blue-500"}),r("span",{staticClass:"w-1/12 text-indigo-800 bg-indigo-500"}),r("span",{staticClass:"w-1/12 text-orange-800 bg-orange-500"}),r("span",{staticClass:"w-1/12 text-yellow-800 bg-yellow-500"}),r("span",{staticClass:"w-1/12 text-purple-800 bg-purple-500"}),r("span",{staticClass:"w-1/12 text-teal-800 bg-teal-500"}),r("span",{staticClass:"w-1/12 text-pink-800 bg-pink-500"})],1)},s=[],l=r("2ab8"),n=r("0992"),i={name:"FindTheNumber",components:{InteractiveBord:l["a"],LevelsSelect:n["a"]},data:function(){return{targetNumber:{num:0,color:"textt",bgcolor:"color"},numbersList:[],score:0,stopGame:!1,level:0,alert:{status:!1,class:"opacity-0",color:null,msg:null},alerttimeout1:null,alerttimeout2:null,colors:["red","gray","green","blue","indigo","orange","yellow","purple","teal","pink"]}},created:function(){this.MStart()},methods:{MStart:function(){this.callAddNumber()},callAddNumber:function(){this.randomAddNumbers()},clickNumber:function(t){var e=this;e.stopGame||(e.$refs.InteractiveBord.timerInterval||e.$refs.InteractiveBord.startTimer(),e.targetNumber.num==t.num&&e.targetNumber.color==t.color?(e.score+=1,e.alertShow("+1"),e.callAddNumber()):(e.score>0&&(e.score-=1),e.score>0?e.alertShow("-1","bg-red-500"):e.alertShow("0","bg-red-500"),e.callAddNumber()))},AddNumbers:function(){var t=this;t.numbersList=[];for(var e=0;e<18;e++)t.numbersList.push({bgcolor:"bg-"+t.getRandomColor()+"-500",color:"text-gray-900",num:e});t.targetNumber=t.numbersList[Math.floor(Math.random()*t.numbersList.length)]},randomAddNumbers:function(){var t=this;t.numbersList=[];for(var e=[],r=0;r<42;++r)e[r]=Math.floor(r/3);var a,s,l=e.length;if(l)while(--l)s=Math.floor(Math.random()*(l+1)),a=e[s],e[s]=e[l],e[l]=a;for(var n=0;n<e.length;n++)t.numbersList.push({bgcolor:"bg-"+t.getRandomColor()+"-500",color:t.getColor(),num:e[n]});t.targetNumber=t.numbersList[Math.floor(Math.random()*t.numbersList.length)]},getColor:function(){var t="";return t=0==this.level?"gray":this.getRandomColor(),"text-"+t+"-800"},getRandomColor:function(){var t=this.colors,e=t[Math.floor(Math.random()*t.length)];return e},alertShow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-green-500",r=this;r.alert.status=!0,r.alert.class="opacity-1",r.alert.color=e,r.alert.msg=t,r.alertFadeOut(500)},alertTimeOver:function(){var t=this;t.alert.status=!0,t.alert.class="opacity-1",t.alert.color="bg-red-500",t.alert.msg="Time Over :(",t.alertFadeOut(7e3)},alertFadeOut:function(t){clearTimeout(this.alerttimeout1),clearTimeout(this.alerttimeout2);var e=this;e.alerttimeout1=setTimeout((function(){e.alert.class="opacity-0",e.alerttimeout2=setTimeout((function(){e.alert.status=!1}),500)}),t)},updateTimeOver:function(){this.stopGame=!0,this.alertTimeOver()},updateLevelValue:function(t){this.level=t,this.changeSettings()},changeSettings:function(){var t=this,e=t.level;t.$refs.InteractiveBord.stopTimer(),Object.assign(t.$data,t.$options.data.call(t)),t.level=e,t.MStart()}}},o=i,c=(r("abac"),r("2877")),u=Object(c["a"])(o,a,s,!1,null,null,null);e["default"]=u.exports},e0b3:function(t,e,r){}}]);
//# sourceMappingURL=chunk-28e82a7e.8e924a97.js.map