webpackJsonp([134],{lLoy:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),e=a("UlOv");i.default.component("dashboard2-chart1",{extends:e.a.Bar,mounted:function(){this.renderChart({datasets:[{data:[24,92,77,90,91,78,28,49,23,81,15,97,94,16,99,61,38,34,48,3,5,21,27,4,33,40,46,47,48,18],borderWidth:0,backgroundColor:"rgba(87, 181, 255, 1)"}],labels:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1},responsive:!1,maintainAspectRatio:!1})}}),i.default.component("dashboard2-chart2",{extends:e.a.Line,mounted:function(){this.renderChart({datasets:[{data:[24,92,77,90,91,78,28,49,23,81,15,97,94,16,99,61,38,34,48,3,5,21,27,4,33,40,46,47,48,18],borderWidth:1,backgroundColor:"rgba(0,0,0,0)",borderColor:"#009688",pointBorderColor:"rgba(0,0,0,0)",pointRadius:1,lineTension:0}],labels:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1},responsive:!1,maintainAspectRatio:!1})}}),i.default.component("dashboard2-chart3",{extends:e.a.Doughnut,mounted:function(){this.renderChart({datasets:[{data:[54,46],backgroundColor:["#673AB7","#f9f9f9"],hoverBackgroundColor:["#673AB7","#f9f9f9"],borderWidth:0}]},{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1},tooltips:{enabled:!1},cutoutPercentage:94,responsive:!1,maintainAspectRatio:!1})}});var l=a("XyMi"),d=Object(l.a)({name:"dashboard-2",metaInfo:{title:"Dashboard 2 - Dashboards"},mounted:function(){var t=this.$children.filter(function(t){return/-chart\d+$/.test(t.$options._componentTag)}),s=function(){return t.forEach(function(t){return t._data._chart.resize()})};s(),this.layoutHelpers.on("resize.dashboard-2",s)},beforeDestroy:function(){this.layoutHelpers.off("resize.dashboard-2")}},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),t._v(" "),a("hr",{staticClass:"container-m--x mt-0 mb-4"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"d-flex col-xl-6 align-items-stretch"},[a("b-card",{staticClass:"d-flex w-100 mb-4",attrs:{"no-body":""}},[a("div",{staticClass:"row no-gutters row-bordered row-border-light h-100"},[a("div",{staticClass:"d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"},[a("a",{staticClass:"card-body media align-items-center text-dark",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"lnr lnr-chart-bars display-4 d-block text-primary"}),t._v(" "),a("span",{staticClass:"media-body d-block ml-3"},[a("span",{staticClass:"text-big font-weight-bolder"},[t._v("$1,342.11")]),a("br"),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("Earned this month")])])])]),t._v(" "),a("div",{staticClass:"d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"},[a("a",{staticClass:"card-body media align-items-center text-dark",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"lnr lnr-hourglass display-4 d-block text-primary"}),t._v(" "),a("span",{staticClass:"media-body d-block ml-3"},[a("span",{staticClass:"text-big"},[a("span",{staticClass:"font-weight-bolder"},[t._v("152")]),t._v(" Working Hours")]),a("br"),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("Spent this month")])])])]),t._v(" "),a("div",{staticClass:"d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"},[a("a",{staticClass:"card-body media align-items-center text-dark",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"lnr lnr-checkmark-circle display-4 d-block text-primary"}),t._v(" "),a("span",{staticClass:"media-body d-block ml-3"},[a("span",{staticClass:"text-big"},[a("span",{staticClass:"font-weight-bolder"},[t._v("54")]),t._v(" Tasks")]),a("br"),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("Completed this month")])])])]),t._v(" "),a("div",{staticClass:"d-flex col-sm-6 col-md-4 col-lg-6 align-items-center"},[a("a",{staticClass:"card-body media align-items-center text-dark",attrs:{href:"javascript:void(0)"}},[a("i",{staticClass:"lnr lnr-license display-4 d-block text-primary"}),t._v(" "),a("span",{staticClass:"media-body d-block ml-3"},[a("span",{staticClass:"text-big"},[a("span",{staticClass:"font-weight-bolder"},[t._v("6")]),t._v(" Projects")]),a("br"),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("Done this month")])])])])])])],1),t._v(" "),a("div",{staticClass:"d-flex col-xl-6 align-items-stretch"},[a("b-card",{staticClass:"w-100 mb-4",attrs:{"no-body":""}},[a("b-card-body",[a("b-btn",{staticClass:"icon-btn float-right",attrs:{variant:"outline-primary",size:"sm"}},[a("i",{staticClass:"ion ion-md-sync"})]),t._v(" "),a("div",{staticClass:"text-muted small"},[t._v("Working hours")]),t._v(" "),a("div",{staticClass:"text-big"},[t._v("Daily Progress")])],1),t._v(" "),a("div",{staticClass:"px-2 mt-4"},[a("dashboard2-chart1",{staticClass:"w-100",attrs:{height:120}})],1)],1)],1),t._v(" "),a("div",{staticClass:"col-xl-5"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"with-elements",attrs:{"header-tag":"h6"}},[a("div",{staticClass:"card-header-title"},[t._v("Tasks")]),t._v(" "),a("div",{staticClass:"card-header-elements ml-auto"},[a("b-btn",{staticClass:"btn-xs md-btn-flat",attrs:{variant:"default"}},[t._v("Show more")])],1)]),t._v(" "),a("b-card-body",[a("p",{staticClass:"text-muted small"},[t._v("Today")]),t._v(" "),a("div",{staticClass:"custom-controls-stacked"},[a("b-check",{staticClass:"ui-todo-item"},[t._v("\n              Buy products\n              "),a("span",{staticClass:"ui-todo-badge badge badge-outline-default font-weight-normal ml-2"},[t._v("58 mins left")])]),t._v(" "),a("b-check",{staticClass:"ui-todo-item"},[t._v("Reply to emails")]),t._v(" "),a("b-check",{staticClass:"ui-todo-item"},[t._v("\n              Write blog post\n              "),a("span",{staticClass:"ui-todo-badge badge badge-outline-default font-weight-normal ml-2"},[t._v("20 hours left")])]),t._v(" "),a("b-check",{staticClass:"ui-todo-item",attrs:{checked:!0}},[t._v("Wash my car")])],1)]),t._v(" "),a("hr",{staticClass:"m-0"}),t._v(" "),a("b-card-body",[a("p",{staticClass:"text-muted small"},[t._v("Tomorrow")]),t._v(" "),a("div",{staticClass:"custom-controls-stacked"},[a("b-check",{staticClass:"ui-todo-item"},[t._v("Buy antivirus")]),t._v(" "),a("b-check",{staticClass:"ui-todo-item"},[t._v("Jane's Happy Birthday")])],1)]),t._v(" "),a("b-card-footer",[a("b-input-group",[a("b-input",{attrs:{placeholder:"Type your task"}}),t._v(" "),a("b-btn",{attrs:{slot:"append",variant:"primary"},slot:"append"},[t._v("Add")])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"col-xl-7"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"with-elements border-0 pr-0 pb-0",attrs:{"header-tag":"h6"}},[a("div",{staticClass:"card-header-title"},[t._v("Revenue")]),t._v(" "),a("div",{staticClass:"card-header-elements ml-auto"},[a("b-dd",{staticClass:"dropdown-toggle-hide-arrow mr-3",attrs:{variant:"default icon-btn borderless btn-round md-btn-flat",size:"sm",text:"Primary",right:!t.isRTL}},[a("template",{slot:"button-content"},[a("i",{staticClass:"ion ion-ios-more"})]),t._v(" "),a("b-dd-item",[t._v("Action 1")]),t._v(" "),a("b-dd-item",[t._v("Action 2")])],2)],1)]),t._v(" "),a("div",{staticClass:"mt-5"},[a("dashboard2-chart2",{attrs:{height:120}})],1),t._v(" "),a("b-card-footer",{staticClass:"text-center py-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"text-muted small"},[t._v("Target")]),t._v(" "),a("strong",{staticClass:"text-big"},[t._v("$2,000.00")])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"text-muted small"},[t._v("Last month")]),t._v(" "),a("strong",{staticClass:"text-big"},[t._v("$2,835.22")])])])])],1)],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("b-card",{staticClass:"pt-2 mb-4",attrs:{"no-body":""}},[a("div",{staticClass:"d-flex align-items-center position-relative mt-4",staticStyle:{height:"110px"}},[a("dashboard2-chart3",{staticClass:"w-100 position-absolute",staticStyle:{top:"0"},attrs:{height:110}}),t._v(" "),a("div",{staticClass:"w-100 text-center text-large"},[t._v("54")])],1),t._v(" "),a("div",{staticClass:"text-center pb-2 my-3"},[t._v("\n              Tasks completed\n            ")]),t._v(" "),a("b-card-footer",{staticClass:"text-center py-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"text-muted small"},[t._v("Target")]),t._v(" "),a("strong",{staticClass:"text-big"},[t._v("100")])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"text-muted small"},[t._v("Last month")]),t._v(" "),a("strong",{staticClass:"text-big"},[t._v("85")])])])])],1)],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"with-elements",attrs:{"header-tag":"h6"}},[a("div",{staticClass:"card-header-title"},[t._v("Task to Do")]),t._v(" "),a("div",{staticClass:"card-header-elements ml-auto"},[a("b-btn",{staticClass:"btn-xs icon-btn borderless",attrs:{variant:"outline-secondary"}},[t._v("→")])],1)]),t._v(" "),a("b-card-body",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"text-large"},[t._v("14")]),t._v(" "),a("div",{staticClass:"text-right small"},[t._v("\n                10%"),a("br"),t._v("Last week: 12\n              ")])])],1)],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"with-elements",attrs:{"header-tag":"h6"}},[a("div",{staticClass:"card-header-title"},[t._v("Overdue tasks")]),t._v(" "),a("div",{staticClass:"card-header-elements ml-auto"},[a("b-btn",{staticClass:"btn-xs icon-btn borderless",attrs:{variant:"outline-secondary"}},[t._v("→")])],1)]),t._v(" "),a("b-card-body",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"text-large"},[t._v("5")]),t._v(" "),a("div",{staticClass:"text-right small"},[t._v("\n                10%"),a("br"),t._v("Last week: 12\n              ")])])],1)],1)])])]),t._v(" "),a("hr",{staticClass:"container-m--x mt-0 mb-4"}),t._v(" "),a("h6",{staticClass:"font-weight-semibold mb-4"},[t._v("Current Progress")]),t._v(" "),a("b-card",{staticClass:"pb-4 mb-2",attrs:{"no-body":""}},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col-12 col-md-5 px-4 pt-4"},[a("a",{staticClass:"text-dark font-weight-semibold",attrs:{href:"javascript:void(0)"}},[t._v("Project Title")]),a("br"),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("Create the new product design")])]),t._v(" "),a("div",{staticClass:"col-4 col-md-2 text-muted small px-4 pt-4"},[a("strong",[t._v("In Progress")]),t._v(" "),a("br"),t._v(" 3D modeling\n      ")]),t._v(" "),a("div",{staticClass:"col-4 col-md-2 text-muted small px-4 pt-4"},[t._v("\n        12 Jan 2018 "),a("br"),t._v(" 4:45\n      ")]),t._v(" "),a("div",{staticClass:"col-4 col-md-3 px-4 pt-4"},[a("div",{staticClass:"text-right text-muted small"},[t._v("60%")]),t._v(" "),a("b-progress",{attrs:{value:60,height:"6px"}})],1)])]),t._v(" "),a("b-card",{staticClass:"pb-4 mb-2",attrs:{"no-body":""}},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col-12 col-md-5 px-4 pt-4"},[a("a",{staticClass:"text-dark font-weight-semibold",attrs:{href:"javascript:void(0)"}},[t._v("Project Title")]),a("br"),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("Design and development")])]),t._v(" "),a("div",{staticClass:"col-4 col-md-2 text-muted small px-4 pt-4"},[a("strong",[t._v("In Progress")]),t._v(" "),a("br"),t._v(" Coding\n      ")]),t._v(" "),a("div",{staticClass:"col-4 col-md-2 text-muted small px-4 pt-4"},[t._v("\n        19 Jan 2018 "),a("br"),t._v(" 8:44\n      ")]),t._v(" "),a("div",{staticClass:"col-4 col-md-3 px-4 pt-4"},[a("div",{staticClass:"text-right text-muted small"},[t._v("84%")]),t._v(" "),a("b-progress",{attrs:{value:84,height:"6px"}})],1)])]),t._v(" "),a("b-card",{staticClass:"pb-4 mb-2",attrs:{"no-body":""}},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col-12 col-md-5 px-4 pt-4"},[a("a",{staticClass:"text-dark font-weight-semibold",attrs:{href:"javascript:void(0)"}},[t._v("Project Title")]),a("br"),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("Create the concept")])]),t._v(" "),a("div",{staticClass:"col-4 col-md-2 text-muted small px-4 pt-4"},[a("strong",[t._v("Done")])]),t._v(" "),a("div",{staticClass:"col-4 col-md-2 text-muted small px-4 pt-4"},[t._v("\n        1 Feb 2018\n      ")]),t._v(" "),a("div",{staticClass:"col-4 col-md-3 px-4 pt-4"},[a("div",{staticClass:"text-right text-muted small"},[t._v("100%")]),t._v(" "),a("b-progress",{attrs:{value:100,height:"6px"}})],1)])]),t._v(" "),a("b-card",{staticClass:"pb-4 mb-4",attrs:{"no-body":""}},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col-12 col-md-5 px-4 pt-4"},[a("a",{staticClass:"text-dark font-weight-semibold",attrs:{href:"javascript:void(0)"}},[t._v("Project Title")]),a("br"),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("SEO enchantsment")])]),t._v(" "),a("div",{staticClass:"col-4 col-md-2 text-muted small px-4 pt-4"},[a("strong",[t._v("In Progress")]),t._v(" "),a("br"),t._v(" Optimizing markup\n      ")]),t._v(" "),a("div",{staticClass:"col-4 col-md-2 text-muted small px-4 pt-4"},[t._v("\n        12 Jan 2018 "),a("br"),t._v(" 10:21\n      ")]),t._v(" "),a("div",{staticClass:"col-4 col-md-3 px-4 pt-4"},[a("div",{staticClass:"text-right text-muted small"},[t._v("23%")]),t._v(" "),a("b-progress",{attrs:{value:23,height:"6px"}})],1)])]),t._v(" "),a("hr",{staticClass:"container-m--x mt-0 mb-4"}),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{attrs:{"header-tag":"h6"}},[t._v("Messages")]),t._v(" "),a("b-card-body",[a("div",{staticClass:"media pb-1 mb-3"},[a("img",{staticClass:"d-block ui-w-40 rounded-circle",attrs:{src:"/static/img/avatars/6-small.png",alt:""}}),t._v(" "),a("div",{staticClass:"media-body ml-3"},[a("div",{staticClass:"mb-1"},[a("strong",{staticClass:"font-weight-semibold"},[t._v("Mae Gibson")]),t._v("  \n                "),a("small",{staticClass:"text-muted"},[t._v("58m ago")])]),t._v(" "),a("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)"}},[t._v("Sit meis deleniti eu, pri vidit meliore docendi ut.")])])]),t._v(" "),a("div",{staticClass:"media pb-1 mb-3"},[a("img",{staticClass:"d-block ui-w-40 rounded-circle",attrs:{src:"/static/img/avatars/4-small.png",alt:""}}),t._v(" "),a("div",{staticClass:"media-body ml-3"},[a("div",{staticClass:"mb-1"},[a("strong",{staticClass:"font-weight-semibold"},[t._v("Kenneth Frazier")]),t._v("  \n                "),a("small",{staticClass:"text-muted"},[t._v("1h ago")])]),t._v(" "),a("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)"}},[t._v("Mea et legere fuisset, ius amet purto luptatum te.")])])]),t._v(" "),a("div",{staticClass:"media pb-1 mb-3"},[a("img",{staticClass:"d-block ui-w-40 rounded-circle",attrs:{src:"/static/img/avatars/5-small.png",alt:""}}),t._v(" "),a("div",{staticClass:"media-body ml-3"},[a("div",{staticClass:"mb-1"},[a("strong",{staticClass:"font-weight-semibold"},[t._v("Nelle Maxwell")]),t._v("  \n                "),a("small",{staticClass:"text-muted"},[t._v("2h ago")])]),t._v(" "),a("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)"}},[t._v("Sit meis deleniti eu, pri vidit meliore docendi ut.")])])]),t._v(" "),a("div",{staticClass:"media"},[a("img",{staticClass:"d-block ui-w-40 rounded-circle",attrs:{src:"/static/img/avatars/1-small.png",alt:""}}),t._v(" "),a("div",{staticClass:"media-body ml-3"},[a("div",{staticClass:"mb-1"},[a("strong",{staticClass:"font-weight-semibold"},[t._v("Mike Greene")]),t._v("  \n                "),a("small",{staticClass:"text-muted"},[t._v("1d ago")])]),t._v(" "),a("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)"}},[t._v("Lorem ipsum dolor sit amet, vis erat denique in.")])])])]),t._v(" "),a("a",{staticClass:"card-footer d-block text-center text-dark small font-weight-semibold",attrs:{href:"javascript:void(0)"}},[t._v("SHOW MORE")])],1)],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{attrs:{"header-tag":"h6"}},[t._v("Feed")]),t._v(" "),a("b-card-body",[a("div",{staticClass:"media pb-1 mb-3"},[a("div",{staticClass:"ui-feed-icon-container"},[a("span",{staticClass:"ui-icon ui-feed-icon ion ion-ios-thumbs-up bg-success text-white"}),t._v(" "),a("img",{staticClass:"ui-w-40 rounded-circle",attrs:{src:"/static/img/avatars/7-small.png",alt:""}})]),t._v(" "),a("div",{staticClass:"media-body align-self-center ml-3"},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v("Alice Hampton")]),t._v(" liked\n              "),a("a",{attrs:{href:"javascript:void(0)"}},[t._v("Article Name")]),t._v(" "),a("div",{staticClass:"text-muted small"},[t._v("2 hours ago")])])]),t._v(" "),a("div",{staticClass:"media pb-1 mb-3"},[a("div",{staticClass:"ui-feed-icon-container"},[a("span",{staticClass:"ui-icon ui-feed-icon ion ion-ios-text bg-secondary text-white"}),t._v(" "),a("img",{staticClass:"ui-w-40 rounded-circle",attrs:{src:"/static/img/avatars/8-small.png",alt:""}})]),t._v(" "),a("div",{staticClass:"media-body align-self-center ml-3"},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v("Hallie Lewis")]),t._v(" commented on\n              "),a("a",{attrs:{href:"javascript:void(0)"}},[t._v("Article Name")]),t._v(" "),a("div",{staticClass:"my-1"},[t._v("\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.\n              ")]),t._v(" "),a("div",{staticClass:"text-muted small"},[t._v("2 hours ago")])])]),t._v(" "),a("div",{staticClass:"media pb-1 mb-3"},[a("div",{staticClass:"ui-feed-icon-container"},[a("span",{staticClass:"ui-icon ui-feed-icon ion ion-ios-thumbs-down bg-danger text-white"}),t._v(" "),a("img",{staticClass:"ui-w-40 rounded-circle",attrs:{src:"/static/img/avatars/9-small.png",alt:""}})]),t._v(" "),a("div",{staticClass:"media-body align-self-center ml-3"},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v("Amanda Warner")]),t._v(" disliked\n              "),a("a",{attrs:{href:"javascript:void(0)"}},[t._v("Article Name")]),t._v(" "),a("div",{staticClass:"text-muted small"},[t._v("2 hours ago")])])]),t._v(" "),a("div",{staticClass:"media"},[a("div",{staticClass:"ui-feed-icon-container"},[a("span",{staticClass:"ui-icon ui-feed-icon ion ion-md-checkmark bg-primary text-white"}),t._v(" "),a("img",{staticClass:"ui-w-40 rounded-circle",attrs:{src:"/static/img/avatars/11-small.png",alt:""}})]),t._v(" "),a("div",{staticClass:"media-body align-self-center ml-3"},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v("Belle Ross")]),t._v(" followed\n              "),a("a",{attrs:{href:"javascript:void(0)"}},[t._v("Nelle Maxwell")]),t._v(" "),a("div",{staticClass:"text-muted small"},[t._v("2 hours ago")])])])]),t._v(" "),a("a",{staticClass:"card-footer d-block text-center text-dark small font-weight-semibold",attrs:{href:"javascript:void(0)"}},[t._v("SHOW MORE")])],1)],1)])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{staticClass:"media align-items-center font-weight-bold py-3 mb-4"},[s("img",{staticClass:"ui-w-50 rounded-circle",attrs:{src:"/static/img/avatars/1.png",alt:""}}),this._v(" "),s("div",{staticClass:"media-body ml-3"},[this._v("\n      Welcome back, Mike!\n      "),s("div",{staticClass:"text-muted text-tiny mt-1"},[s("small",{staticClass:"font-weight-normal"},[this._v("Today is Tuesday, 8 February 2018")])])])])}],!1,null,null,null);s.default=d.exports}});