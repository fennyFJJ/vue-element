webpackJsonp([8],{145:function(t,e,a){var l,o;l=a(162);var r=a(176);o=l=l||{},"object"!=typeof l.default&&"function"!=typeof l.default||(o=l=l.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=l},162:function(t,e,a){"use strict";function l(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{list:{table:[]},post:{table:{fromnum:"",tonum:"",type:"",createTime:"",page:1}},currentRow:null}},methods:{query:function(){var t=this;this.$http.get("statistics/consume/list",this.post.table).then(function(e){e.success&&(t.list.table=[].concat(l(e.data.data)))})},queryMore:function(){this.post.table.page+=1,this.query()},changeDate:function(t){this.post.table.createTime=t}},mounted:function(){this.query()}}},176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-right-section"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{staticClass:"demo-form-inline",attrs:{"label-width":"100px",inline:!0}},[a("el-form-item",{attrs:{label:"主叫"}},[a("el-input",{directives:[{name:"model",rawName:"v-model",value:t.post.table.fromnum,expression:"post.table.fromnum"}],attrs:{placeholder:""},domProps:{value:t.post.table.fromnum},on:{input:function(e){t.post.table.fromnum=e}}})],1),t._v(" "),a("el-form-item",{attrs:{label:"被叫"}},[a("el-input",{directives:[{name:"model",rawName:"v-model",value:t.post.table.tonum,expression:"post.table.tonum"}],attrs:{placeholder:""},domProps:{value:t.post.table.tonum},on:{input:function(e){t.post.table.tonum=e}}})],1),t._v(" "),a("el-form-item",{attrs:{label:"呼叫类型"}},[a("el-select",{directives:[{name:"model",rawName:"v-model",value:t.post.table.type,expression:"post.table.type"}],domProps:{value:t.post.table.type},on:{input:function(e){t.post.table.type=e}}},[a("el-option",{attrs:{label:"全部",value:""}}),t._v(" "),a("el-option",{attrs:{label:"呼入",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"呼出",value:"2"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"日期"}},[a("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:t.post.table.createTime,expression:"post.table.createTime"}],attrs:{type:"date",placeholder:"选择日期"},domProps:{value:t.post.table.createTime},on:{change:t.changeDate,input:function(e){t.post.table.createTime=e}}})],1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.query}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list.table,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index"}}),t._v(" "),a("el-table-column",{attrs:{property:"fromnum",label:"主叫"}}),t._v(" "),a("el-table-column",{attrs:{property:"tonum",label:"被叫"}}),t._v(" "),a("el-table-column",{attrs:{label:"呼叫类型"},scopedSlots:{default:function(e){return[a("span",[t._v(t._s("1"===e.row.type?"呼入":"呼出"))])]}}}),t._v(" "),a("el-table-column",{attrs:{property:"confirmtime",label:"起始时间"}}),t._v(" "),a("el-table-column",{attrs:{property:"endtime",label:"结束时间"}}),t._v(" "),a("el-table-column",{attrs:{property:"talktime",label:"通话时长(s)"}}),t._v(" "),a("el-table-column",{attrs:{property:"money",label:"消费金额"}})],1)],1)},staticRenderFns:[]}}});