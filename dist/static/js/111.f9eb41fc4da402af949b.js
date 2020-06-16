webpackJsonp([111],{OI2J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("fZjL"),i=a.n(s),r={name:"pages-articles-list",metaInfo:{title:"Articles list - Pages"},data:function(){return{dataUrl:"/static/json/pages_articles_list.json",searchKeys:["id","title"],sortBy:"id",sortDesc:!1,perPage:10,fields:[{key:"id",sortable:!0},{key:"title",sortable:!0,thStyle:"min-width: 18rem"},{key:"likes",sortable:!0},{key:"comments",sortable:!0},{key:"created_at",sortable:!0,thClass:"text-nowrap"},{key:"status",sortable:!0},{key:"actions",label:" ",tdClass:"text-center text-nowrap"}],articlesData:[],originalArticlesData:[],currentPage:1}},computed:{totalItems:function(){return this.articlesData.length},totalPages:function(){return Math.ceil(this.totalItems/this.perPage)}},methods:{filter:function(t){var e=this,a=t.toLowerCase(),s=this.originalArticlesData.filter(function(t){return-1!==i()(t).filter(function(t){return e.searchKeys.includes(t)}).map(function(e){return String(t[e])}).join("|").toLowerCase().indexOf(a)||!a});this.articlesData=s}},created:function(){var t=this,e=new XMLHttpRequest;e.open("GET",this.dataUrl),e.onload=function(){var a=JSON.parse(e.response);t.articlesData=a,t.originalArticlesData=a.slice(0)},e.send()}},n=a("XyMi"),o=Object(n.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4"},[a("div",[t._v("Articles")]),t._v(" "),a("b-btn",{staticClass:"d-block",attrs:{variant:"primary btn-round"}},[a("span",{staticClass:"ion ion-md-add"}),t._v("  Create article")])],1),t._v(" "),a("b-card",{attrs:{"no-body":""}},[a("b-card-body",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t._v("\n          Per page:  \n          "),a("b-select",{staticClass:"d-inline-block w-auto",attrs:{size:"sm",options:[10,20,30,40,50]},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),t._v(" "),a("div",{staticClass:"col"},[a("b-input",{staticClass:"d-inline-block w-auto float-sm-right",attrs:{size:"sm",placeholder:"Search..."},on:{input:function(e){t.filter(e)}}})],1)])]),t._v(" "),a("hr",{staticClass:"border-light m-0"}),t._v(" "),a("div",{staticClass:"table-responsive"},[a("b-table",{staticClass:"card-table",attrs:{items:t.articlesData,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,striped:!0,bordered:!0,"current-page":t.currentPage,"per-page":t.perPage},on:{"update:sortBy":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"title",fn:function(e){return[a("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e.item.title))])]}},{key:"status",fn:function(e){return[1===e.item.status?a("b-badge",{attrs:{variant:"outline-success"}},[t._v("Published")]):t._e(),t._v(" "),2===e.item.status?a("b-badge",{attrs:{variant:"outline-info"}},[t._v("Draft")]):t._e(),t._v(" "),3===e.item.status?a("b-badge",{attrs:{variant:"outline-default"}},[t._v("Deleted")]):t._e()]}},{key:"actions",fn:function(e){return[a("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"default btn-xs icon-btn md-btn-flat",title:"Edit"}},[a("i",{staticClass:"ion ion-md-create"})]),t._v(" "),a("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"default btn-xs icon-btn md-btn-flat",title:"Remove"}},[a("i",{staticClass:"ion ion-md-close"})])]}}])})],1),t._v(" "),a("b-card-body",{staticClass:"pt-0 pb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm text-sm-left text-center pt-3"},[t.totalItems?a("span",{staticClass:"text-muted"},[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]):t._e()]),t._v(" "),a("div",{staticClass:"col-sm pt-3"},[t.totalItems?a("b-pagination",{staticClass:"justify-content-center justify-content-sm-end m-0",attrs:{"total-rows":t.totalItems,"per-page":t.perPage,size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],1)])])],1)],1)},[],!1,null,null,null);e.default=o.exports}});