(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a071299e"],{"0992":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"levelsSelect"}},[a("div",{staticClass:"w-full flex mt-10 justify-center"},[a("div",{staticClass:"w-full flex flex-wrap justify-center max-w-5xl"},[a("div",{staticClass:"w-1/3 px-3 mb-6"},[a("label",{staticClass:"block uppercase tracking-wide text-sm font-bold mb-2"},[t._v("Levels:")]),a("div",{staticClass:"relative"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"block appearance-none w-full bg-purple-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.level=e.target.multiple?a:a[0]}}},t._l(t.levels,(function(e,r){return a("option",{key:e,domProps:{value:r}},[t._v(t._s(e))])})),0),a("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])])])])},n=[],l={name:"levelsSelect",props:{levels:{type:Array,default:function(){return["Easy","Medium","Hard"]}}},data:function(){return{level:0}},methods:{dataForApp:function(){this.$emit("dataForApp",this.level)}},watch:{level:function(){this.dataForApp()}}},s=l,i=a("2877"),o=Object(i["a"])(s,r,n,!1,null,null,null);e["a"]=o.exports},"2ab8":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"InteractiveBord"}},[a("div",{staticClass:"w-full flex flex-col items-center mt-16 font-bold text-md lg:text-xl"},[a("div",{staticClass:"w-full flex flex-wrap justify-center items-center",class:t.maxW},[a("div",{},[a("button",{staticClass:"bg-purple-500 uppercase rounded-lg py-2 px-4 leading-tight focus:outline-none cursor-pointer",on:{click:function(e){return t.$emit("changeSetting")}}},[t._v("restart")])])]),a("div",{staticClass:"w-full flex flex-wrap justify-between mt-5 items-center",class:t.maxW},[t.count?a("div",{staticClass:"mx-10"},[t._v("Count : "),a("span",{domProps:{textContent:t._s(t.count)}})]):t._e(),t.count?t._e():a("div",{staticClass:"mx-10"},[t._v("Score : "),a("span",{domProps:{textContent:t._s(t.score)}})]),t.haveTimeLeft?a("div",{staticClass:"mx-10"},[t._v("Time Left : "),a("span",{class:t.getTimeColor(),domProps:{textContent:t._s(t.timer)}}),t._v(" s")]):t._e()])])])},n=[],l=(a("a9e3"),{name:"InteractiveBord",props:{score:{type:Number,default:0},count:{type:String,default:null},haveTimeLeft:{type:Boolean,default:!0},timeLimit:{type:Number,default:60},maxW:{type:String,default:"max-w-5xl"}},data:function(){return{timePassed:0,timerInterval:null,stopGame:!1}},methods:{getTimeColor:function(){var t=this;return t.timePassed==t.timeLimit?"text-red-500":t.timePassed>=t.timeLimit/2?"text-yellow-500":"text-green-500"},startTimer:function(){var t=this;this.timerInterval=setInterval((function(){return t.timePassed+=1}),1e3)},stopTimer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;clearInterval(this.timerInterval),t&&Object.assign(this.$data,this.$options.data.call(this))},TimeOver:function(){this.stopGame||(this.stopGame=!0,this.stopTimer(),this.dataForApp(),console.log("Time Over"))},dataForApp:function(){this.$emit("dataForApp")}},computed:{timer:function(){var t=this.timeLimit-this.timePassed;return t||this.TimeOver(),t}},watch:{}}),s=l,i=a("2877"),o=Object(i["a"])(s,r,n,!1,null,null,null);e["a"]=o.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),n=a("5899"),l="["+n+"]",s=RegExp("^"+l+l+"*"),i=RegExp(l+l+"*$"),o=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},"66bb":function(t,e,a){"use strict";var r=a("bbc9"),n=a.n(r);n.a},7156:function(t,e,a){var r=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var l,s;return n&&"function"==typeof(l=e.constructor)&&l!==a&&r(s=l.prototype)&&s!==a.prototype&&n(t,s),t}},"98ab":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Alert"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.alert.status,expression:"alert.status"}],staticClass:"fixed z-50 w-full flex justify-center alertFade",class:t.alert.class,staticStyle:{top:"10%"}},[a("span",{staticClass:"px-10 py-2 rounded-lg font-bold text-black text-3xl",class:t.alert.color,domProps:{textContent:t._s(t.alert.msg)}})])])},n=[],l={name:"Alrt",props:{},data:function(){return{alert:{status:!1,class:"opacity-0",color:null,msg:null},alerttimeout1:null,alerttimeout2:null}},methods:{alertShow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-green-500",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,r=this;r.alert.status=!0,r.alert.class="opacity-1",r.alert.color=e,r.alert.msg=t,r.alertFadeOut(a)},alertTimeOver:function(){var t=this;t.alert.status=!0,t.alert.class="opacity-1",t.alert.color="bg-red-500",t.alert.msg="Time Over :(",t.alertFadeOut(7e3)},alertFadeOut:function(t){clearTimeout(this.alerttimeout1),clearTimeout(this.alerttimeout2);var e=this;e.alerttimeout1=setTimeout((function(){e.alert.class="opacity-0",e.alerttimeout2=setTimeout((function(){e.alert.status=!1}),500)}),t)},dataForApp:function(){this.$emit("dataForApp",this.level)}},watch:{}},s=l,i=(a("66bb"),a("2877")),o=Object(i["a"])(s,r,n,!1,null,"635357be",null);e["a"]=o.exports},a9e3:function(t,e,a){"use strict";var r=a("83ab"),n=a("da84"),l=a("94ca"),s=a("6eeb"),i=a("5135"),o=a("c6b6"),c=a("7156"),u=a("c04e"),f=a("d039"),d=a("7c73"),m=a("241c").f,p=a("06cf").f,v=a("9bf2").f,h=a("58a8").trim,g="Number",x=n[g],w=x.prototype,b=o(d(w))==g,C=function(t){var e,a,r,n,l,s,i,o,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=h(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+c}for(l=c.slice(2),s=l.length,i=0;i<s;i++)if(o=l.charCodeAt(i),o<48||o>n)return NaN;return parseInt(l,r)}return+c};if(l(g,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var y,_=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof _&&(b?f((function(){w.valueOf.call(a)})):o(a)!=g)?c(new x(C(e)),a,_):C(e)},A=r?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;A.length>I;I++)i(x,y=A[I])&&!i(_,y)&&v(_,y,p(x,y));_.prototype=w,w.constructor=_,s(n,g,_)}},bbc9:function(t,e,a){},c933:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb-16",attrs:{id:"FindTheNumber"}},[a("Alert",{ref:"Alert"}),a("InteractiveBord",{ref:"InteractiveBord",attrs:{score:t.score,maxW:"max-w-xl"},on:{dataForApp:t.updateTimeOver,changeSetting:function(e){return t.changeSettings()}}}),a("div",{staticClass:"w-full flex flex-col items-center font-bold"},[a("div",{staticClass:"w-full flex flex-col max-w-xl mt-3 px-5"},[a("div",{staticClass:"h-full w-full flex items-center justify-center py-6 rounded-lg overflow-hidden border bg-purple-400 text-3xl"},[a("span",{domProps:{textContent:t._s(t.question1)}}),a("span",{staticClass:"mx-6 text-6xl",domProps:{textContent:t._s(t.logic)}}),a("span",{domProps:{textContent:t._s(t.question2)}})]),a("div",{staticClass:"w-full flex flex-wrap mt-8 justify-center text-5xl"},[a("div",{staticClass:"p-2 w-1/3 h-40"},[a("div",{staticClass:"h-full w-full flex items-center justify-center rounded-full overflow-hidden cursor-pointer border bg-green-600",domProps:{textContent:t._s("Yes")},on:{click:function(e){return t.clickAnswer(!0)}}})]),a("div",{staticClass:"p-2 w-1/3 h-40"},[a("div",{staticClass:"h-full w-full flex items-center justify-center rounded-full overflow-hidden cursor-pointer border bg-red-600",domProps:{textContent:t._s("No")},on:{click:function(e){return t.clickAnswer(!1)}}})])])])]),a("LevelsSelect",{staticClass:"mt-20",on:{dataForApp:t.updateLevelValue}})],1)},n=[],l=a("98ab"),s=a("2ab8"),i=a("0992"),o={name:"FindTheNumber",components:{Alert:l["a"],InteractiveBord:s["a"],LevelsSelect:i["a"]},data:function(){return{question1:null,question2:null,logic:null,answer:null,mathEx:[null,null,"+","-","*","/"],logicEx:[">","<","="],score:0,stopGame:!1,level:0}},created:function(){this.MStart()},methods:{MStart:function(){this.getQuestion()},clickAnswer:function(t){var e=this;if(!e.stopGame){e.$refs.InteractiveBord.timerInterval||e.$refs.InteractiveBord.startTimer();var a=e.$refs.Alert;t==e.answer?(e.score+=1,a.alertShow("+1"),console.log("+1")):(e.score>0&&(e.score-=1),e.score>0?a.alertShow("-1","bg-red-500"):a.alertShow("0","bg-red-500"),console.log("-1")),e.getQuestion()}},getQuestion:function(){var t,e,a,r,n=this;r=n.logicEx[Math.floor(Math.random()*n.logicEx.length)],t=n.getQuestionPart(),e=n.getQuestionPart(),n.question1=t[0],n.question2=e[0],n.logic=r,">"==r?a=t[1]>e[1]:"<"==r?a=t[1]<e[1]:"="==r&&(a=t[1]==e[1]),n.answer=a},getQuestionPart:function(){var t,e,a,r=this,n=0,l=0;if(a=r.mathEx[Math.floor(Math.random()*r.mathEx.length)],null==a)n=Math.floor(Math.random()*r.getRandomRange()),t=n,e=n;else if("+"==a)n=Math.floor(Math.random()*r.getRandomRange()),l=Math.floor(Math.random()*r.getRandomRange()),t=n+" + "+l,e=n+l;else if("-"==a){do{n=Math.floor(Math.random()*r.getRandomRange()),l=Math.floor(Math.random()*r.getRandomRange())}while(n<l);t=n+" - "+l,e=n-l}else if("*"==a)n=Math.floor(Math.random()*(r.getRandomRange()/3)),l=Math.floor(Math.random()*(r.getRandomRange()/3)),t=n+" X "+l,e=n*l;else if("/"==a){do{n=Math.floor(Math.random()*(2*r.getRandomRange())),l=Math.floor(Math.random()*(r.getRandomRange()/2))}while(n<l||0==l||n%l!=0);t=n+" / "+l,e=n/l}return[t,e]},getRandomRange:function(){var t=30;return 0==this.level?t=40:1==this.level?t=80:2==this.level&&(t=120),t},updateTimeOver:function(){this.stopGame=!0,this.$refs.Alert.alertTimeOver()},updateLevelValue:function(t){this.level=t,this.changeSettings()},changeSettings:function(){var t=this,e=t.level;t.$refs.InteractiveBord.stopTimer(1),Object.assign(t.$data,t.$options.data.call(t)),t.level=e,t.MStart()}}},c=o,u=a("2877"),f=Object(u["a"])(c,r,n,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-a071299e.e784671f.js.map