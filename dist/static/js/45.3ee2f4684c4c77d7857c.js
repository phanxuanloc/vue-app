webpackJsonp([45],{"6Inw":function(e,t){},A8FZ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("XyMi");var s=function(e){i("6Inw")},n=Object(a.a)({name:"pages-file-manager",metaInfo:{title:"File Manager - Pages"},data:function(){return{path:[{text:"home",href:"#"},{text:"projects",href:"#"},{text:"site",active:!0}],viewMode:"col",selected:[],focused:null,dropdownOpened:null,list:[{type:"dir",name:"Images",changed:"02/13/2018"},{type:"dir",name:"Scripts",changed:"02/14/2018"},{type:"dir",name:"Utils",changed:"02/15/2018"},{type:"file",name:"Archive.zip",changed:"02/16/2018"},{type:"file",name:"Build.js",changed:"02/17/2018"},{type:"file",name:"Checklist.doc",changed:"02/18/2018"},{type:"file",name:"Index.html",changed:"02/19/2018"},{type:"file",name:"Image-1.jpg",changed:"02/20/2018",path:"/static/img/bg/5.jpg"},{type:"file",name:"Image-2.png",changed:"02/21/2018",path:"/static/img/bg/6.jpg"},{type:"file",name:"Image-3.gif",changed:"02/22/2018",path:"/static/img/bg/7.jpg"},{type:"file",name:"Main.js",changed:"02/23/2018"},{type:"file",name:"MAKEFILE",changed:"02/24/2018"},{type:"file",name:"Presentation.pdf",changed:"02/25/2018"},{type:"file",name:"README.txt",changed:"02/26/2018"},{type:"file",name:"Style.css",changed:"02/27/2018"},{type:"file",name:"Test.mp3",changed:"02/28/2018"},{type:"file",name:"Tutorial.avi",changed:"03/01/2018"}],icons:{folder:"far fa-folder",archive:"far fa-file-archive",audio:"far fa-file-audio",video:"far fa-file-video",js:"fab fa-js",doc:"far fa-file-word",html:"fab fa-html5",pdf:"far fa-file-pdf",txt:"far fa-file-alt",css:"fab fa-css3",unknown:"far fa-file"}}},methods:{isFolder:function(e){return"dir"===e.type},isImage:function(e){return"file"===e.type&&/\.jpg$|\.png$|\.gif$/i.test(e.name)},isFile:function(e){return"file"===e.type&&!/\.jpg$|\.png$|\.gif$/i.test(e.name)},fileIcon:function(e){var t=this.icons.unknown;return/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(e.name)&&(t=this.icons.archive),/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(e.name)&&(t=this.icons.audio),/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(e.name)&&(t=this.icons.video),/\.js$|\.es6$|\.ts$/i.test(e.name)&&(t=this.icons.js),/\.doc$|\.docx$/i.test(e.name)&&(t=this.icons.doc),/\.htm$|\.html$/i.test(e.name)&&(t=this.icons.html),/\.pdf$/i.test(e.name)&&(t=this.icons.pdf),/\.txt$/i.test(e.name)&&(t=this.icons.txt),/\.css$/i.test(e.name)&&(t=this.icons.css),t},toggleSelect:function(e,t){e?this.selected.push(t):this.selected.splice(this.selected.indexOf(t),1)},focusIn:function(e){this.focused=e},focusOut:function(){this.focused=null},dropdownShown:function(e){this.dropdownOpened=e},dropdownHidden:function(){this.dropdownOpened=null}}},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"bg-lightest container-m--x container-m--y mb-3"},[i("b-breadcrumb",{staticClass:"text-big container-p-x py-3 m-0",attrs:{items:e.path}}),e._v(" "),i("hr",{staticClass:"m-0"}),e._v(" "),i("div",{staticClass:"file-manager-actions container-p-x py-2"},[i("div",[i("b-btn",{staticClass:"mr-2",attrs:{variant:"primary"}},[i("i",{staticClass:"ion ion-md-cloud-upload"}),e._v("  Upload")]),e._v(" "),i("b-btn",{staticClass:"mr-2",attrs:{variant:"secondary icon-btn",disabled:!e.selected.length}},[i("i",{staticClass:"ion ion-md-cloud-download"})]),e._v(" "),i("b-dropdown",{staticClass:"mr-2",attrs:{variant:"default md-btn-flat px-2",right:e.isRTL}},[i("template",{slot:"button-content"},[i("i",{staticClass:"ion ion-ios-settings"})]),e._v(" "),i("b-dropdown-item",{attrs:{href:"javascript:void(0)",disabled:!e.selected.length}},[e._v("Move")]),e._v(" "),i("b-dropdown-item",{attrs:{href:"javascript:void(0)",disabled:!e.selected.length}},[e._v("Copy")]),e._v(" "),i("b-dropdown-item",{attrs:{href:"javascript:void(0)",disabled:!e.selected.length}},[e._v("Remove")])],2)],1),e._v(" "),i("div",[i("b-button-group",[i("b-btn",{attrs:{variant:"default icon-btn md-btn-flat",pressed:"col"===e.viewMode},on:{click:function(t){e.viewMode="col"}}},[i("i",{staticClass:"ion ion-md-apps"})]),e._v(" "),i("b-btn",{attrs:{variant:"default icon-btn md-btn-flat",pressed:"row"===e.viewMode},on:{click:function(t){e.viewMode="row"}}},[i("i",{staticClass:"ion ion-md-menu"})])],1)],1)]),e._v(" "),i("hr",{staticClass:"m-0"})],1),e._v(" "),i("div",{staticClass:"file-manager-container",class:"file-manager-"+e.viewMode+"-view"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._l(e.list,function(t){return i("div",{staticClass:"file-item",class:{"selected border-primary":e.selected.includes(t),focused:e.focused===t||e.dropdownOpened===t},on:{focusin:function(i){e.focusIn(t)},focusout:function(t){e.focusOut()}}},[i("div",{staticClass:"file-item-select-bg bg-primary"}),e._v(" "),i("b-check",{staticClass:"file-item-checkbox",attrs:{checked:e.selected.includes(t)},on:{change:function(i){e.toggleSelect(i,t)}}}),e._v(" "),e.isFolder(t)?i("div",{staticClass:"file-item-icon text-secondary",class:e.icons.folder}):e._e(),e._v(" "),e.isImage(t)?i("div",{staticClass:"file-item-img",style:{"background-image":"url("+t.path+")"}}):e._e(),e._v(" "),e.isFile(t)?i("div",{staticClass:"file-item-icon text-secondary",class:e.fileIcon(t)}):e._e(),e._v(" "),i("a",{staticClass:"file-item-name",attrs:{href:"javascript:void(0)"}},[e._v("\n        "+e._s(t.name)+"\n      ")]),e._v(" "),i("div",{staticClass:"file-item-changed"},[e._v(e._s(t.changed))]),e._v(" "),i("b-dropdown",{staticClass:"file-item-actions",attrs:{variant:"default btn-round icon-btn borderless md-btn-flat hide-arrow",size:"sm",right:!e.isRTL},on:{shown:function(i){e.dropdownShown(t)},hidden:function(t){e.dropdownHidden()}}},[i("template",{slot:"button-content"},[i("i",{staticClass:"ion ion-ios-more"})]),e._v(" "),i("b-dropdown-item",{attrs:{href:"javascript:void(0)"}},[e._v("Rename")]),e._v(" "),i("b-dropdown-item",{attrs:{href:"javascript:void(0)"}},[e._v("Move")]),e._v(" "),i("b-dropdown-item",{attrs:{href:"javascript:void(0)"}},[e._v("Copy")]),e._v(" "),i("b-dropdown-item",{attrs:{href:"javascript:void(0)"}},[e._v("Remove")])],2)],1)})],2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"file-manager-row-header"},[t("div",{staticClass:"file-item-name pb-2"},[this._v("Filename")]),this._v(" "),t("div",{staticClass:"file-item-changed pb-2"},[this._v("Changed")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"file-item"},[t("div",{staticClass:"file-item-icon file-item-level-up fas fa-level-up-alt text-secondary"}),this._v(" "),t("a",{staticClass:"file-item-name",attrs:{href:"javascript:void(0)"}},[this._v("..")])])}],!1,s,null,null);t.default=n.exports}});