webpackJsonp([52],{aaoh:function(t,e){},yeTL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"pages-messages-v3-compose",metaInfo:{title:"Compose message v3 - Pages"},components:{quillEditor:function(){return a.e(140).then(a.bind(null,"G0J2")).then(function(t){return t.quillEditor}).catch(function(){})}},data:function(){return{currentMailBox:null,mailBoxes:{inbox:{title:"Inbox",icon:"ion ion-ios-filing",count:15},sent:{title:"Sent",icon:"ion ion ion-ios-mail"},drafts:{title:"Drafts",icon:"ion ion ion-md-create"},spam:{title:"Spam",icon:"ion ion ion-md-folder-open"},trash:{title:"Trash",icon:"ion ion ion-md-trash"}},labels:{clients:{title:"Clients",color:"success"},important:{title:"Important",color:"danger"},social:{title:"Social",color:"info"},other:{title:"Other",color:"warning"}},messageData:{to:"",subject:"",content:""},editorOptions:{modules:{toolbar:[[{header:[1,2,3,4,5,6,!1]},{font:[]},{size:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],[{direction:"rtl"},{align:[]}],["link","image","video"],["clean"]]}}}},mounted:function(){this.layoutHelpers.setCollapsed(!0,!1)}},i=a("XyMi");var o=function(t){a("Mf2/"),a("JBzj"),a("6+Gh"),a("aaoh")},n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"messages-sidebox col mb-4"},[a("b-btn",{attrs:{variant:"primary mt-md-4",block:!0}},[t._v("Compose")]),t._v(" "),a("hr",{staticClass:"border-light my-4"}),t._v(" "),t._l(t.mailBoxes,function(e,s){return a("a",{staticClass:"d-flex justify-content-between align-items-center py-2",class:{"font-weight-bold text-dark":t.currentMailBox===s,"text-muted":t.currentMailBox!==s},attrs:{href:"javascript:void(0)"}},[a("div",[a("i",{class:e.icon}),t._v("   "+t._s(e.title))]),t._v(" "),e.count?a("div",{staticClass:"badge badge-primary"},[t._v(t._s(e.count))]):t._e()])}),t._v(" "),a("hr",{staticClass:"border-light my-4"}),t._v(" "),a("h6",{staticClass:"text-tiny font-weight-bold"},[t._v("LABELS")]),t._v(" "),t._l(t.labels,function(e){return a("a",{staticClass:"d-block text-muted py-1",attrs:{href:"javascript:void(0)"}},[a("span",{staticClass:"badge badge-dot",class:"badge-"+e.color}),t._v("   "+t._s(e.title)+"\n      ")])})],2),t._v(" "),a("div",{staticClass:"col"},[a("b-card",{attrs:{header:"New message","header-tag":"h4","header-class":"py-4"}},[a("b-form-group",{attrs:{label:"To:"}},[a("b-input",{model:{value:t.messageData.to,callback:function(e){t.$set(t.messageData,"to",e)},expression:"messageData.to"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"Subject:"}},[a("b-input",{model:{value:t.messageData.subject,callback:function(e){t.$set(t.messageData,"subject",e)},expression:"messageData.subject"}})],1),t._v(" "),a("b-form-group",{staticClass:"mt-4"},[t.isIE10?t._e():a("quill-editor",{attrs:{options:t.editorOptions},model:{value:t.messageData.content,callback:function(e){t.$set(t.messageData,"content",e)},expression:"messageData.content"}}),t._v(" "),t.isIE10?a("b-textarea",{staticStyle:{height:"400px"},model:{value:t.messageData.content,callback:function(e){t.$set(t.messageData,"content",e)},expression:"messageData.content"}}):t._e()],1),t._v(" "),a("div",{staticClass:"text-right mt-4"},[a("b-btn",{attrs:{variant:"primary ml-2"}},[a("i",{staticClass:"ion ion-ios-paper-plane"}),t._v("  Send")]),t._v(" "),a("b-btn",{attrs:{variant:"default ml-2"}},[a("i",{staticClass:"ion ion-md-save"}),t._v("  Save")]),t._v(" "),a("b-btn",{attrs:{variant:"default ml-2"}},[t._v("Cancel")])],1)],1)],1)])])},[],!1,o,null,null);e.default=n.exports}});