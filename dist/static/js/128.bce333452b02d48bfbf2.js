webpackJsonp([128],{Aqa9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("XyMi"),p=Object(a.a)({name:"forms-input-groups",metaInfo:{title:"Input groups - Forms"},data:function(){return{options:[{text:"Orange",value:"orange"},{text:"Apple",value:"apple"},{text:"Pineapple",value:"pineapple"},{text:"Grape",value:"grape",disabled:!0}],selected:"apple"}}},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"demo-vertical-spacing-sm bg-white rounded p-4 mb-4 clearfix"},[s("b-input-group",{attrs:{prepend:"@"}},[s("b-input")],1),t._v(" "),s("b-input-group",{attrs:{append:"@example.com"}},[s("b-input",{attrs:{placeholder:"Recipient's username"}})],1),t._v(" "),s("b-input-group",{attrs:{prepend:"https://example.com/users/"}},[s("b-input")],1),t._v(" "),s("b-input-group",{attrs:{prepend:"$",append:".00"}},[s("b-input")],1),t._v(" "),s("b-input-group",[s("b-input-group-text",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("$")]),t._v(" "),s("b-input-group-text",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("0.00")]),t._v(" "),s("b-input")],1)],1),t._v(" "),s("b-card",{staticClass:"mb-4",attrs:{header:"Sizing","header-tag":"h6"}},[s("div",{staticClass:"demo-vertical-spacing-sm"},[s("b-input-group",{attrs:{size:"sm",prepend:"@"}},[s("b-input",{attrs:{placeholder:"Username"}})],1),t._v(" "),s("b-input-group",{attrs:{prepend:"@"}},[s("b-input",{attrs:{placeholder:"Username"}})],1),t._v(" "),s("b-input-group",{attrs:{size:"lg",prepend:"@"}},[s("b-input",{attrs:{placeholder:"Username"}})],1)],1)]),t._v(" "),s("b-card",{staticClass:"mb-4",attrs:{header:"Checkbox and radio addons","header-tag":"h6"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md mb-3"},[s("b-input-group",[s("b-input-group-text",{attrs:{slot:"prepend"},slot:"prepend"},[s("b-check",{staticClass:"px-2 m-0"})],1),t._v(" "),s("b-input",{attrs:{placeholder:"Username"}})],1)],1),t._v(" "),s("div",{staticClass:"col-md mb-3"},[s("b-input-group",[s("b-input-group-text",{attrs:{slot:"prepend"},slot:"prepend"},[s("b-radio",{staticClass:"px-2 m-0"})],1),t._v(" "),s("b-input",{attrs:{placeholder:"Username"}})],1)],1),t._v(" "),s("div",{staticClass:"w-100"}),t._v(" "),s("div",{staticClass:"col-md mb-3"},[s("b-input-group",[s("b-input-group-text",{attrs:{slot:"prepend"},slot:"prepend"},[s("input",{attrs:{type:"checkbox"}})]),t._v(" "),s("b-input",{attrs:{placeholder:"Username"}})],1)],1),t._v(" "),s("div",{staticClass:"col-md mb-3"},[s("b-input-group",[s("b-input-group-text",{attrs:{slot:"prepend"},slot:"prepend"},[s("input",{attrs:{type:"radio"}})]),t._v(" "),s("b-input",{attrs:{placeholder:"Username"}})],1)],1)])]),t._v(" "),s("b-card",{staticClass:"mb-4",attrs:{header:"Custom select","header-tag":"h6"}},[s("div",{staticClass:"demo-vertical-spacing-sm"},[s("b-input-group",[s("b-select",{staticClass:"flex-grow-1",attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),s("b-btn",{attrs:{slot:"append"},slot:"append"},[t._v("Go!")])],1),t._v(" "),s("b-input-group",[s("b-input",{attrs:{placeholder:"Search for..."}}),t._v(" "),s("b-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),s("b-btn",{attrs:{slot:"append"},slot:"append"},[t._v("Go!")])],1),t._v(" "),s("b-input-group",[s("b-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),s("b-input",{attrs:{placeholder:"Search for..."}}),t._v(" "),s("b-btn",{attrs:{slot:"append"},slot:"append"},[t._v("Go!")])],1),t._v(" "),s("b-input-group",[s("b-btn",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("Go!")]),t._v(" "),s("b-input",{attrs:{placeholder:"Search for..."}}),t._v(" "),s("b-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)]),t._v(" "),s("b-card",{staticClass:"mb-4",attrs:{header:"Button addons","header-tag":"h6"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md"},[s("b-form-group",[s("b-input-group",[s("b-btn",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("Go!")]),t._v(" "),s("b-input",{attrs:{placeholder:"Search for..."}})],1)],1)],1),t._v(" "),s("div",{staticClass:"col-md"},[s("b-form-group",[s("b-input-group",[s("b-input",{attrs:{placeholder:"Search for..."}}),t._v(" "),s("b-btn",{attrs:{slot:"append"},slot:"append"},[t._v("Go!")])],1)],1)],1),t._v(" "),s("div",{staticClass:"w-100"}),t._v(" "),s("div",{staticClass:"col-md"},[s("b-form-group",[s("b-input-group",[s("b-btn",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("Hate it")]),t._v(" "),s("b-input",{attrs:{placeholder:"Search for..."}}),t._v(" "),s("b-btn",{attrs:{slot:"append"},slot:"append"},[t._v("Love it")])],1)],1)],1)])]),t._v(" "),s("b-card",{staticClass:"mb-4",attrs:{header:"Buttons with dropdowns","header-tag":"h6"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md"},[s("b-form-group",[s("b-input-group",[s("b-dd",{attrs:{slot:"prepend",text:"Action",right:t.isRTL},slot:"prepend"},[s("b-dd-item",[t._v("Action 1")]),t._v(" "),s("b-dd-item",[t._v("Action 2")])],1),t._v(" "),s("b-input",{attrs:{placeholder:"Search for..."}})],1)],1)],1),t._v(" "),s("div",{staticClass:"col-md"},[s("b-form-group",[s("b-input-group",[s("b-input",{attrs:{placeholder:"Search for..."}}),t._v(" "),s("b-dd",{attrs:{slot:"append",text:"Action",right:!t.isRTL},slot:"append"},[s("b-dd-item",[t._v("Action 1")]),t._v(" "),s("b-dd-item",[t._v("Action 2")])],1)],1)],1)],1)])]),t._v(" "),s("b-card",{staticClass:"mb-4",attrs:{header:"Segmented buttons","header-tag":"h6"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md"},[s("b-form-group",[s("b-input-group",[s("b-dd",{attrs:{slot:"prepend",split:"",text:"Action",right:t.isRTL},slot:"prepend"},[s("b-dd-item",[t._v("Action 1")]),t._v(" "),s("b-dd-item",[t._v("Action 2")])],1),t._v(" "),s("b-input",{attrs:{placeholder:"Search for..."}})],1)],1)],1),t._v(" "),s("div",{staticClass:"col-md"},[s("b-form-group",[s("b-input-group",[s("b-input",{attrs:{placeholder:"Search for..."}}),t._v(" "),s("b-dd",{attrs:{slot:"append",split:"",text:"Action",right:!t.isRTL},slot:"append"},[s("b-dd-item",[t._v("Action 1")]),t._v(" "),s("b-dd-item",[t._v("Action 2")])],1)],1)],1)],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"font-weight-bold py-3 mb-4"},[e("span",{staticClass:"text-muted font-weight-light"},[this._v("Forms /")]),this._v(" Input groups\n  ")])}],!1,null,null,null);e.default=p.exports}});