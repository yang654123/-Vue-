(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-142373b4"],{"1b80":function(t,a,n){"use strict";a["a"]={data:function(){return{pagination:{page:1,pageSize:10,total:0,showTotal:function(t,a){return"共 ".concat(t," 条")}}}},computed:{requestData:function(){return{page:this.pagination.page,pageSize:this.pagination.pageSize}}},methods:{init:function(){},pageChange:function(t){this.pagination.page=t,this.requestData.page=t.current,this.init()}}}},dbff:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"house-index"},[e("wrapper-content",[e("a-table",{attrs:{columns:a.columns,dataSource:a.dataSource,loading:a.loading,rowKey:"id",pagination:a.pagination},on:{change:a.pageChange},scopedSlots:a._u([{key:"action",fn:function(t,n,o){return[n.owner_code==a.userInfo.code?e("a",{on:{click:function(t){return a.rowClick(n,"edit")}}},[a._v("编辑")]):a._e(),n.owner_code!=a.userInfo.code?e("a",{on:{click:function(t){return a.rowClick(n,"quit")}}},[a._v("退出")]):a._e()]}}])})],1),e("a-modal",{attrs:{width:800,title:a.actionInfo.modalTitle,bodyStyle:{paddingBottom:"1px"},footer:null},model:{value:a.actionInfo.modalStatus,callback:function(t){a.$set(a.actionInfo,"modalStatus",t)},expression:"actionInfo.modalStatus"}},[e("a-form",{attrs:{autoFormCreate:function(a){t.form=a}},on:{submit:function(t){return t.preventDefault(),a.handleSubmit(t)}}},[e("a-form-item",{attrs:{form:a.form,label:"组织名称",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"name",fieldDecoratorOptions:{rules:[{required:!0,message:"组织名称"}]},help:"必填，请填写组织名称"}},[e("a-input",{attrs:{placeholder:"组织名称"}})],1),e("a-form-item",{attrs:{label:"详细地址",labelCol:{span:3},wrapperCol:{span:21},fieldDecoratorId:"address",help:"详细地址"}},[e("a-input")],1),e("a-form-item",{attrs:{wrapperCol:{span:21,offset:3}}},[e("div",{staticClass:"action-btn"},[e("a-button",{staticClass:"middle-btn",attrs:{type:"primary",htmlType:"submit",loading:a.actionInfo.confirmLoading}},[a._v("保存")]),e("a-button",{staticClass:"middle-btn",on:{click:function(t){a.actionInfo.modalStatus=!1}}},[a._v("取消")])],1)])],1)],1)],1)},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("6b54"),n("7f7f"),n("bd86")),r=n("5880"),c=n("22b6");n("4360");function s(t){return c["a"].post("project/organization",t)}function d(t){var a="project/organization/save";return t.organizationCode&&(a="project/organization/edit"),c["a"].post(a,t)}function u(t){return c["a"].post("project/organization/_quitOrganization",t)}var l=n("2f14"),f=n("1b80");function p(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function m(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){Object(i["a"])(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}var g=[{title:"组织名称",dataIndex:"name",width:"30%"},{title:"操作",scopedSlots:{customRender:"action"}}],b={mixins:[f["a"]],data:function(){return{columns:g,dataSource:[],loading:!0,newData:{code:0},form:{},searchForm:{},actionInfo:{modalStatus:!1,confirmLoading:!1,modalTitle:"编辑组织",okText:"保存",cancelText:"放弃"},showMap:!1,options:[]}},computed:m({},Object(r["mapState"])({userInfo:function(t){return t.userInfo}})),created:function(){this.init()},methods:{moment:moment,init:function(t){var a=this;a.loading=!0,s(a.requestData).then((function(n){a.dataSource=n.data.list,a.pagination.total=n.data.total,a.loading=!1,t&&a.$store.dispatch("setCurrentOrganization",n.data.list[0]),a.$store.dispatch("setOrganizationList",n.data.list)}))},rowClick:function(t,a){var n=this;n.newData={code:""},"add"==a||"edit"==a||"new"==a?(setTimeout((function(){n.form&&n.form.resetFields()}),0),n.actionInfo.modalStatus=!0,n.actionInfo.modalTitle="添加组织","edit"==a&&setTimeout((function(){n.actionInfo.modalTitle="编辑组织",n.form.setFieldsValue({name:t.name,areas:[t.province.toString(),t.city.toString(),t.area.toString()],address:t.address}),n.newData=t}),0)):"quit"==a&&this.$confirm({title:"确定要退出此组织?",okText:"退出",okType:"danger",cancelText:"再想想",onOk:function(){return u({organizationCode:t.code}).then((function(t){Object(l["a"])(t)&&n.init(!0)})),Promise.resolve()}})},handleSubmit:function(){var t=this;t.form.validateFields((function(a,n){a||t.handleOk()}))},handleOk:function(){var t=this;t.actionInfo.confirmLoading=!0;var a=t.form.getFieldsValue();a.areas=JSON.stringify(a.areas),console.log(t.newData),t.newData.code?(t.newData.organizationCode=t.newData.code,a.organizationCode=t.newData.code):Object.assign(a,t.newData),d(a).then((function(n){t.actionInfo.confirmLoading=!1,Object(l["a"])(n)&&(t.newData.code?(t.newData.name=a.name,t.newData.address=a.address):t.dataSource.push(n.data),t.form.resetFields(),t.newData={code:0},t.actionInfo.modalStatus=!1,t.init())}))}}},h=b,w=n("2877"),O=Object(w["a"])(h,e,o,!1,null,null,null);a["default"]=O.exports}}]);