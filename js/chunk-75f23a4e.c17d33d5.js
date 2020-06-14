(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75f23a4e"],{"0b02":function(t,e,l){"use strict";l.r(e);var s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mb-16",attrs:{id:"FindTheNumber"}},[l("div",{directives:[{name:"show",rawName:"v-show",value:t.alert.status,expression:"alert.status"}],staticClass:"fixed z-50 w-full flex justify-center alertFade",class:t.alert.class,staticStyle:{top:"10%"}},[l("span",{staticClass:"px-10 py-2 rounded-lg font-bold text-black text-3xl",class:t.alert.color,domProps:{textContent:t._s(t.alert.msg)}})]),l("div",{staticClass:"w-full flex flex-col items-center mt-16 font-bold text-sm lg:text-xl"},[l("div",{staticClass:"w-full flex flex-wrap justify-center max-w-5xl items-center"},[l("div",{},[l("button",{staticClass:"bg-purple-500 uppercase rounded-lg py-2 px-4 leading-tight focus:outline-none cursor-pointer",on:{click:function(e){return t.changeSettings()}}},[t._v("restart")])])]),l("div",{staticClass:"w-full flex flex-wrap justify-between max-w-5xl mt-5 items-center"},[l("div",{staticClass:"ml-10"},[t._v("Score : "),l("span",{domProps:{textContent:t._s(t.score)}})]),l("div",{staticClass:"mr-10"},[t._v("Time Left : "),l("span",{class:t.getTimeColor(),domProps:{textContent:t._s(t.timer)}}),t._v(" s")])])]),l("div",{staticClass:"w-full flex flex-col items-center font-bold"},[l("div",{staticClass:"w-full flex flex-wrap max-w-5xl mt-3"},t._l(t.colors,(function(e,s){return l("div",{key:s,staticClass:"md:p-1 w-1/6 h-12 sm:h-16 md:h-20"},[l("div",{staticClass:"h-full w-full rounded-lg overflow-hidden cursor-pointer border",style:"background-color:"+t.color[e],on:{click:function(l){return t.clickcolor(e)}}})])})),0)]),l("div",{staticClass:"w-full flex mt-10 justify-center"},[l("div",{staticClass:"w-full flex flex-wrap justify-center max-w-5xl"},[l("div",{staticClass:"w-1/3 px-3 mb-6"},[l("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"},[t._v("Levels:")]),l("div",{staticClass:"relative"},[l("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"block appearance-none w-full bg-purple-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none",on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.level=e.target.multiple?l:l[0]}}},t._l(t.levels,(function(e,s){return l("option",{key:e,domProps:{value:s}},[t._v(t._s(e))])})),0),l("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[l("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[l("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])])])])},a=[],r={name:"FindTheNumber",components:{},data:function(){return{color:{},colors:{},score:0,timeLimit:60,timePassed:0,timerInterval:null,stopGame:!1,levels:["Easy","Medium","Hard"],level:0,alert:{status:!1,class:"opacity-0",color:null,msg:null},alerttimeout1:null,alerttimeout2:null,colorsEasy:[{0:"#ff2c2c",1:"#ff2c4c"},{0:"#e91e63",1:"#F44336"},{0:"#3f51b5",1:"#3F518E"},{0:"#8bc34a",1:"#8BC385"},{0:"#9E9E9E",1:"#9EA0AE"},{0:"#ff5722",1:"#FF5764"},{0:"#673ab7",1:"#673A93"},{0:"#03a9f4",1:"#2196f3"},{0:"#2196f3",1:"#03a9f4"},{0:"#009688",1:"#00966A"},{0:"#b53f3f",1:"#B53F5B"},{0:"#b0d420",1:"#B0D476"},{0:"#20d4aa",1:"#32f5c7"},{0:"#d420c6",1:"#ec2dde"},{0:"#2026d4",1:"#262df1"}],colorsMedium:[{0:"#ff0303",1:"#e80000"},{0:"#673ab7",1:"#7642d2"},{0:"#ff5722",1:"#FF574A"},{0:"#cddc39",1:"#c2d036"},{0:"#009688",1:"#0096A3"},{0:"#9e9e9e",1:"#9E9E97"},{0:"#607d8b",1:"#607D6F"},{0:"#009688",1:"#009672"},{0:"#795548",1:"#67473b"},{0:"#bf6748",1:"#BF676D"},{0:"#3f51b5",1:"#3F5198"},{0:"#03a9f4",1:"#03A9C8"},{0:"#435e6b",1:"#435E54"},{0:"#717171",1:"#71715F"},{0:"#ff9800",1:"#FF984F"}],colorsHard:[{0:"#f44336",1:"#ec3c2f"},{0:"#e91e63",1:"#e63772"},{0:"#9c27b0",1:"#ab2bc1"},{0:"#673ab7",1:"#673ab7"},{0:"#3f51b5",1:"#3c4ca7"},{0:"#2196f3",1:"#38a0f3"},{0:"#00bcd4",1:"#06c4dc"},{0:"#4caf50",1:"#4aa54d"},{0:"#8bc34a",1:"#94d050"},{0:"#cddc39",1:"#d2e04a"},{0:"#ffeb3b",1:"#f7e43d"},{0:"#ffc107",1:"#f7ba04"},{0:"#ff5722",1:"#f96537"},{0:"#795548",1:"#6b4e44"},{0:"#607d8b",1:"#677f8a"}]}},created:function(){this.MStart()},methods:{MStart:function(){this.callAddColor()},clickcolor:function(t){var e=this;e.stopGame||(e.timerInterval||e.startTimer(),1==t?(e.score+=2,e.alertShow("+2"),console.log("+2")):(e.score>0&&(e.score-=1),e.score>0?e.alertShow("-1","bg-red-500"):e.alertShow("0","bg-red-500"),console.log("-1")),this.callAddColor())},callAddColor:function(){this.addRandomColor()},addColor:function(){this.colors={};for(var t=[],e=0;e<36;e++)t[e]=0;t[0]=1;for(var l=0;l<t.length;l++)this.colors[l]=t[l];this.color=this.getColor()},addRandomColor:function(){this.colors={};for(var t=[],e=0;e<36;e++)t[e]=0;t[Math.floor(Math.random()*t.length)]=1;for(var l=0;l<t.length;l++)this.colors[l]=t[l];this.color=this.getColor()},getColor:function(){var t=this.colorsEasy;0==this.level?t=this.colorsEasy:1==this.level?t=this.colorsMedium:2==this.level&&(t=this.colorsHard);var e=t[Math.floor(Math.random()*this.colorsEasy.length)];return e},getTimeColor:function(){var t=this;return t.timePassed==t.timeLimit?"text-red-500":t.timePassed>=t.timeLimit/2?"text-yellow-500":"text-green-500"},startTimer:function(){var t=this;this.timerInterval=setInterval((function(){return t.timePassed+=1}),1e3)},stopTimer:function(){clearInterval(this.timerInterval)},TimeOver:function(){0==this.stopGame&&(this.stopGame=!0,this.stopTimer(),this.alertTimeOver(),console.log("Time Over"))},alertShow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-green-500",l=this;l.alert.status=!0,l.alert.class="opacity-1",l.alert.color=e,l.alert.msg=t,l.alertFadeOut(500)},alertTimeOver:function(){var t=this;t.alert.status=!0,t.alert.class="opacity-1",t.alert.color="bg-red-500",t.alert.msg="Time Over :(",t.alertFadeOut(7e3)},alertFadeOut:function(t){clearTimeout(this.alerttimeout1),clearTimeout(this.alerttimeout2);var e=this;e.alerttimeout1=setTimeout((function(){e.alert.class="opacity-0",e.alerttimeout2=setTimeout((function(){e.alert.status=!1}),500)}),t)},changeSettings:function(){var t=this,e=t.level;t.stopTimer(),Object.assign(t.$data,t.$options.data.call(t)),t.level=e,t.MStart()}},computed:{timer:function(){var t=this.timeLimit-this.timePassed;return t||this.TimeOver(),t}},watch:{level:function(){this.changeSettings()}}},o=r,i=(l("aaf9"),l("2877")),c=Object(i["a"])(o,s,a,!1,null,null,null);e["default"]=c.exports},"8b79":function(t,e,l){},aaf9:function(t,e,l){"use strict";var s=l("8b79"),a=l.n(s);a.a}}]);
//# sourceMappingURL=chunk-75f23a4e.c17d33d5.js.map