(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e34ad352"],{a55b:function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"login"},[a("label",{staticClass:"login__label",attrs:{for:"username"}},[s._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],staticClass:"login__input",attrs:{type:"text",name:"username",id:"username"},domProps:{value:s.username},on:{input:function(e){e.target.composing||(s.username=e.target.value)}}}),a("label",{staticClass:"login__label",attrs:{for:"password"}},[s._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"login__input",attrs:{type:"password",name:"password",id:"password"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}}),a("button",{staticClass:"login__button",on:{click:s.handleLogin}},[s._v("Send")])])},n=[],o={name:"Login",data:function(){return{username:"",password:""}},methods:{handleLogin:function(){this.username&&this.password&&(localStorage.setItem("user",JSON.stringify({username:this.username,password:this.password})),this.$router.push("/"))}}},r=o,i=(a("cabf"),a("2877")),u=Object(i["a"])(r,t,n,!1,null,"44c5101d",null);e["default"]=u.exports},c653:function(s,e,a){},cabf:function(s,e,a){"use strict";var t=a("c653"),n=a.n(t);n.a}}]);
//# sourceMappingURL=chunk-e34ad352.8181fc3d.js.map