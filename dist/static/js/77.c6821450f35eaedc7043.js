webpackJsonp([77],{"1O32":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={name:"pages-projects-list",metaInfo:{title:"Project list - Pages"},data:function(){return{statuses:{1:{title:"Active",color:"success"},2:{title:"Pending",color:"warning"}},projectsData:[{status:1,title:"Frontend Development",tasks:15,completedTasks:5,shortDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac malesuada nisl. Maecenas quis ultrices tellus.",created:"02/01/2018",deadline:"03/12/2018",team:[{avatar:"2-small.png"},{avatar:"3-small.png"},{avatar:"4-small.png"},{avatar:"5-small.png"},{avatar:"6-small.png"}]},{status:1,title:"Website",tasks:44,completedTasks:29,shortDescription:"Aliquam sem elit, semper sed ante ut, aliquam molestie risus.",created:"02/01/2018",deadline:"03/12/2018",team:[{avatar:"7-small.png"},{avatar:"8-small.png"},{avatar:"9-small.png"}]},{status:1,title:"UI update",tasks:54,completedTasks:48,shortDescription:"Etiam venenatis varius lectus sed fermentum. Nullam hendrerit, massa sed tincidunt sagittis, leo nibh semper sapien, vitae interdum nisl erat ut sapien.",created:"02/01/2018",deadline:"03/12/2018",team:[{avatar:"10-small.png"},{avatar:"11-small.png"},{avatar:"12-small.png"}]},{status:2,title:"SEO",tasks:70,completedTasks:45,shortDescription:"Suspendisse scelerisque nisi ac semper ornare.",created:"02/01/2018",deadline:"03/12/2018",team:[{avatar:"2-small.png"},{avatar:"3-small.png"},{avatar:"4-small.png"}]},{status:1,title:"example.com design",tasks:84,completedTasks:28,shortDescription:"Pellentesque imperdiet nunc quis fringilla euismod. Nunc iaculis eu augue sit amet faucibus.",created:"02/01/2018",deadline:"03/12/2018",team:[{avatar:"5-small.png"},{avatar:"6-small.png"},{avatar:"7-small.png"},{avatar:"8-small.png"}]}]}},methods:{completedPercent:function(t,a){return Math.round(a/t*100)}}},i=s("XyMi"),l=Object(i.a)(e,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h4",{staticClass:"d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4"},[s("div",[t._v("Projects")]),t._v(" "),s("b-btn",{staticClass:"d-block",attrs:{variant:"primary btn-round"}},[s("span",{staticClass:"ion ion-md-add"}),t._v("  Create project")])],1),t._v(" "),s("div",{staticClass:"row"},t._l(t.projectsData,function(a){return s("div",{staticClass:"col-sm-6 col-xl-4"},[s("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[s("b-card-body",{staticClass:"d-flex justify-content-between align-items-start pb-3"},[s("div",[s("a",{staticClass:"text-dark text-big font-weight-semibold",attrs:{href:"javascript:void(0)"}},[t._v(t._s(a.title))]),t._v(" "),s("b-badge",{staticClass:"align-text-bottom ml-1",attrs:{variant:t.statuses[a.status].color}},[t._v(t._s(t.statuses[a.status].title))]),t._v(" "),s("div",{staticClass:"text-muted small mt-1"},[t._v(t._s(a.tasks-a.completedTasks)+" opened tasks, "+t._s(a.completedTasks)+" tasks completed")])],1),t._v(" "),s("b-dropdown",{attrs:{variant:"default icon-btn borderless btn-round md-btn-flat hide-arrow",size:"sm",right:!t.isRTL}},[s("template",{slot:"button-content"},[s("i",{staticClass:"ion ion-ios-more"})]),t._v(" "),s("b-dropdown-item",{attrs:{href:"javascript:void(0)"}},[t._v("View")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"javascript:void(0)"}},[t._v("Edit")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"javascript:void(0)"}},[t._v("Remove")])],2)],1),t._v(" "),s("b-progress",{staticClass:"rounded-0",attrs:{value:t.completedPercent(a.tasks,a.completedTasks),height:"3px"}}),t._v(" "),s("div",{staticClass:"card-body small pt-2 pb-0"},[s("strong",[t._v(t._s(t.completedPercent(a.tasks,a.completedTasks))+"%")]),t._v(" completed\n        ")]),t._v(" "),s("b-card-body",{staticClass:"pb-3"},[t._v("\n          "+t._s(a.shortDescription)+"\n        ")]),t._v(" "),s("b-card-body",{staticClass:"pt-0"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-muted small"},[t._v("Created")]),t._v(" "),s("div",{staticClass:"font-weight-bold"},[t._v(t._s(a.created))])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"text-muted small"},[t._v("Deadline")]),t._v(" "),s("div",{staticClass:"font-weight-bold"},[t._v(t._s(a.deadline))])])])]),t._v(" "),s("hr",{staticClass:"m-0"}),t._v(" "),s("b-card-body",{staticClass:"py-3"},[s("div",{staticClass:"text-muted small mb-2"},[t._v("Team")]),t._v(" "),s("div",{staticClass:"d-flex flex-wrap"},t._l(a.team,function(t){return s("a",{staticClass:"d-block mr-1 mb-1",attrs:{href:"javascript:void(0)"}},[s("img",{staticClass:"ui-w-30 rounded-circle",attrs:{src:"/static/img/avatars/"+t.avatar,alt:""}})])}))])],1)],1)}))])},[],!1,null,null,null);a.default=l.exports}});