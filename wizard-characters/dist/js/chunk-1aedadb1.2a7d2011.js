(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aedadb1"],{"6e14":function(i,t,a){"use strict";var s=a("9e1e"),r=a.n(s);r.a},"7db0":function(i,t,a){"use strict";var s=a("23e7"),r=a("b727").find,e=a("44d2"),n=a("ae40"),d="find",c=!0,o=n(d);d in[]&&Array(1)[d]((function(){c=!1})),s({target:"Array",proto:!0,forced:c||!o},{find:function(i){return r(this,i,arguments.length>1?arguments[1]:void 0)}}),e(d)},"9e1e":function(i,t,a){},e711:function(i,t,a){"use strict";a.r(t);var s=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"wizard"},[a("img",{attrs:{src:i.wizard.image}}),a("h2",{staticClass:"wizard__title"},[i._v(i._s(i.wizard.name))]),a("h3",{staticClass:"wizard__subtitle"},[i._v("Actor: "+i._s(i.wizard.actor))]),a("p",{staticClass:"wizard__description"},[i._v("Species: "+i._s(i.wizard.species))]),a("p",{staticClass:"wizard__description"},[i._v("Gender: "+i._s(i.wizard.gender))]),a("p",{staticClass:"wizard__description"},[i._v("House: "+i._s(i.wizard.house))]),a("p",{staticClass:"wizard__description"},[i._v("Date of birth: "+i._s(i.wizard.dateOfBirth))]),a("p",{staticClass:"wizard__description"},[i._v("Ancestry: "+i._s(i.wizard.ancestry))]),a("p",{staticClass:"wizard__description"},[i._v("Wand: "+i._s(i.wizard.wand.core))]),a("p",{staticClass:"wizard__description"},[i._v("Patronus: "+i._s(i.wizard.patronus))])])},r=[],e=(a("7db0"),a("b0c0"),{name:"Wizard",data:function(){return{wizard:{}}},created:function(){this.getWizard()},methods:{getWizard:function(){var i=this,t=JSON.parse(localStorage.getItem("wizards"))||[];this.wizard=t.find((function(t){return t.name===i.$route.params.id}))}}}),n=e,d=(a("6e14"),a("2877")),c=Object(d["a"])(n,s,r,!1,null,"0cec954e",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-1aedadb1.2a7d2011.js.map