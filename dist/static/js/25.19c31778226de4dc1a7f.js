webpackJsonp([25],{"0U9e":function(t,a){},"2HsU":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={name:"miscellaneous-ladda",metaInfo:{title:"Ladda - Miscellaneous"},components:{LaddaBtn:s("qaB4").a},data:function(){return{loading:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],progress:[!1,!1]}},methods:{startLoading:function(t){var a=this;this.loading[t]||(this.updateLoadingValue(t,!0),setTimeout(function(){a.updateLoadingValue(t,!1)},2e3))},startProgress:function(t){var a=this;if(!1===this.progress[t]){this.updateProgressValue(t,0);var s=setInterval(function(){a.updateProgressValue(t,Math.min(a.progress[t]+.1*Math.random(),1)),1===a.progress[t]&&(clearInterval(s),a.updateProgressValue(t,!1))},200)}},updateLoadingValue:function(t,a){this.loading[t]=a,this.loading=this.loading.slice(0)},updateProgressValue:function(t,a){this.progress[t]=a,this.progress=this.progress.slice(0)}}},i=s("XyMi"),n=Object(i.a)(e,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),t._v(" "),s("hr",{staticClass:"border-light container-m--x mt-0 mb-4"}),t._v(" "),s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"demo-vertical-spacing"},[s("div",{staticClass:"row button-demo"},[s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("expand-left")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-primary",attrs:{loading:t.loading[0],"data-style":"expand-left"},nativeOn:{click:function(a){t.startLoading(0)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("expand-right")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-primary",attrs:{loading:t.loading[1],"data-style":"expand-right"},nativeOn:{click:function(a){t.startLoading(1)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("expand-up")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-primary",attrs:{loading:t.loading[2],"data-style":"expand-up"},nativeOn:{click:function(a){t.startLoading(2)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("expand-down")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-primary",attrs:{loading:t.loading[3],"data-style":"expand-down"},nativeOn:{click:function(a){t.startLoading(3)}}},[t._v("Submit")])],1)]),t._v(" "),s("div",{staticClass:"row button-demo"},[s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("contract")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-success",attrs:{loading:t.loading[4],"data-style":"contract"},nativeOn:{click:function(a){t.startLoading(4)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("contract-overlay")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-success",staticStyle:{"z-index":"10"},attrs:{loading:t.loading[5],"data-style":"contract-overlay"},nativeOn:{click:function(a){t.startLoading(5)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("zoom-in")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-success",attrs:{loading:t.loading[6],"data-style":"zoom-in"},nativeOn:{click:function(a){t.startLoading(6)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("zoom-out")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-success",attrs:{loading:t.loading[7],"data-style":"zoom-out"},nativeOn:{click:function(a){t.startLoading(7)}}},[t._v("Submit")])],1)]),t._v(" "),s("div",{staticClass:"row button-demo"},[s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("slide-left")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-info",attrs:{loading:t.loading[8],"data-style":"slide-left"},nativeOn:{click:function(a){t.startLoading(8)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("slide-right")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-info",attrs:{loading:t.loading[9],"data-style":"slide-right"},nativeOn:{click:function(a){t.startLoading(9)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("slide-up")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-info",attrs:{loading:t.loading[10],"data-style":"slide-up"},nativeOn:{click:function(a){t.startLoading(10)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("slide-down")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-info",attrs:{loading:t.loading[11],"data-style":"slide-down"},nativeOn:{click:function(a){t.startLoading(11)}}},[t._v("Submit")])],1)])]),t._v(" "),s("hr",{staticClass:"m-0"}),t._v(" "),s("b-card-body",{staticClass:"demo-vertical-spacing"},[s("h6",[t._v("Built-in progress bar")]),t._v(" "),s("div",{staticClass:"row progress-demo"},[s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("expand-right")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-danger",attrs:{loading:t.progress[0],"data-style":"expand-right"},nativeOn:{click:function(a){t.startProgress(0)}}},[t._v("Submit")])],1),t._v(" "),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted small font-weight-bold"},[t._v("contract")]),t._v(" "),s("ladda-btn",{staticClass:"btn btn-danger",attrs:{loading:t.progress[1],"data-style":"contract"},nativeOn:{click:function(a){t.startProgress(1)}}},[t._v("Submit")])],1)])])],1)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{staticClass:"font-weight-bold py-3 mb-4"},[a("span",{staticClass:"text-muted font-weight-light"},[this._v("Miscellaneous /")]),this._v(" Ladda\n  ")])}],!1,null,null,null);a.default=n.exports},qaB4:function(t,a,s){"use strict";var e=this&&this.__assign||Object.assign||function(t){for(var a,s=1,e=arguments.length;s<e;s++)for(var i in a=arguments[s])Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);return t},i={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},n=function(){function t(t){void 0===t&&(t={}),this.opts=e({},i,t)}return t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),o(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),function(t,a){var s=Math.round(a.corners*a.width*500)/1e3+"px",e="none";!0===a.shadow?e="0 2px 4px #000":"string"==typeof a.shadow&&(e=a.shadow);for(var i=function(t){for(var a=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,s=[],e=0,i=t.split(",");e<i.length;e++){var n=i[e],o=n.match(a);if(null!==o){var l=+o[2],d=+o[5],r=o[4],c=o[7];0!==l||r||(r=c),0!==d||c||(c=r),r===c&&s.push({prefix:o[1]||"",x:l,y:d,xUnits:r,yUnits:c,end:o[8]})}}return s}(e),n=0;n<a.lines;n++){var r=~~(360/a.lines*n+a.rotate),c=o(document.createElement("div"),{position:"absolute",top:-a.width/2+"px",width:a.length+a.width+"px",height:a.width+"px",background:l(a.fadeColor,n),borderRadius:s,transformOrigin:"left",transform:"rotate("+r+"deg) translateX("+a.radius+"px)"}),u=n*a.direction/a.lines/a.speed;u-=1/a.speed;var h=o(document.createElement("div"),{width:"100%",height:"100%",background:l(a.color,n),borderRadius:s,boxShadow:d(i,r),animation:1/a.speed+"s linear "+u+"s infinite "+a.animation});c.appendChild(h),t.appendChild(c)}}(this.el,this.opts),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function o(t,a){for(var s in a)t.style[s]=a[s];return t}function l(t,a){return"string"==typeof t?t:t[a%t.length]}function d(t,a){for(var s=[],e=0,i=t;e<i.length;e++){var n=i[e],o=r(n.x,n.y,a);s.push(n.prefix+o[0]+n.xUnits+" "+o[1]+n.yUnits+n.end)}return s.join(", ")}function r(t,a,s){var e=s*Math.PI/180,i=Math.sin(e),n=Math.cos(e);return[Math.round(1e3*(t*n+a*i))/1e3,Math.round(1e3*(-t*i+a*n))/1e3]}var c=[];function u(t){if(void 0!==t){if(t.classList.contains("ladda-button")||t.classList.add("ladda-button"),t.hasAttribute("data-style")||t.setAttribute("data-style","expand-right"),!t.querySelector(".ladda-label")){var a=document.createElement("span");a.className="ladda-label",s=t,e=a,(i=document.createRange()).selectNodeContents(s),i.surroundContents(e),s.appendChild(e)}var s,e,i,o,l,d=t.querySelector(".ladda-spinner");d||((d=document.createElement("span")).className="ladda-spinner"),t.appendChild(d);var r={start:function(){return o||(o=function(t){var a,s,e=t.offsetHeight;0===e&&(e=parseFloat(window.getComputedStyle(t).height));e>32&&(e*=.8);t.hasAttribute("data-spinner-size")&&(e=parseInt(t.getAttribute("data-spinner-size"),10));t.hasAttribute("data-spinner-color")&&(a=t.getAttribute("data-spinner-color"));t.hasAttribute("data-spinner-lines")&&(s=parseInt(t.getAttribute("data-spinner-lines"),10));var i=.2*e;return new n({color:a||"#fff",lines:s||12,radius:i,length:.6*i,width:i<7?2:3,animation:"ladda-spinner-line-fade",zIndex:"auto",top:"auto",left:"auto",className:""})}(t)),t.disabled=!0,t.setAttribute("data-loading",""),clearTimeout(l),o.spin(d),this.setProgress(0),this},startAfter:function(t){return clearTimeout(l),l=setTimeout(function(){r.start()},t),this},stop:function(){return r.isLoading()&&(t.disabled=!1,t.removeAttribute("data-loading")),clearTimeout(l),o&&(l=setTimeout(function(){o.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(a){a=Math.max(Math.min(a,1),0);var s=t.querySelector(".ladda-progress");0===a&&s&&s.parentNode?s.parentNode.removeChild(s):(s||((s=document.createElement("div")).className="ladda-progress",t.appendChild(s)),s.style.width=(a||0)*t.offsetWidth+"px")},isLoading:function(){return t.hasAttribute("data-loading")},remove:function(){clearTimeout(l),t.disabled=!1,t.removeAttribute("data-loading"),o&&(o.stop(),o=null),c.splice(c.indexOf(r),1)}};return c.push(r),r}console.warn("Ladda button target must be defined.")}var h={name:"ladda-btn",props:{loading:{default:!1},tag:{type:String,default:"button"}},render:function(t){var a="button"===this.tag?{type:"button"}:{};return t(this.tag,{attrs:a},this.$slots.default)},beforeDestroy:function(){this.ladda&&(this.ladda.remove(),this.ladda=null)},mounted:function(){this.ladda=u(this.$el)},watch:{loading:function(t){this.ladda&&("boolean"==typeof t?this.ladda[t?"start":"stop"]():"number"==typeof t&&(this.ladda.isLoading()||this.ladda.start(),this.ladda.setProgress(t)))}}},v=s("XyMi");var p=function(t){s("0U9e")},g=Object(v.a)(h,void 0,void 0,!1,p,null,null);a.a=g.exports}});