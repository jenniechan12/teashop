(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/teashop/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1cc9":function(t,e,a){},"2c05":function(t,e,a){"use strict";a("3737")},3737:function(t,e,a){},"48de":function(t,e,a){},"50fc":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("2f62"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"whiteSmoke"},[a("NavBar"),a("Alert"),a("v-main",[a("v-container",{attrs:{fluid:""}},["Home"===t.currentPage?a("Home"):"Menu"===t.currentPage?a("Menu"):"Order History"===t.currentPage?a("OrderHistory"):"Payment"==t.currentPage?a("Payment"):t._e()],1)],1)],1)},i=[],o=a("5530"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{staticClass:"salmon borderRight",attrs:{app:"","expand-on-hover":"",dark:""}},[a("v-list",{attrs:{nav:"",dense:""}},t._l(t.links,(function(e){return a("v-list-item",{key:e.text,attrs:{link:""},on:{click:function(a){return t.UpdatePage(e.text)}}},[a("v-list-item-icon",[a("v-icon",{staticClass:"material-icons"},[t._v(t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.text))])],1)})),1)],1)},l=[],d={data:function(){return{links:[{icon:"home",text:"Home"},{icon:"menu_book",text:"Menu"},{icon:"event",text:"Order History"},{icon:"credit_card",text:"Payment"},{icon:"favorite",text:"Favorites"}]}},methods:{UpdatePage:function(t){this.$store.commit("updateCurrentPage",t)}}},u=d,v=(a("2c05"),a("2877")),m=a("6544"),p=a.n(m),f=a("132d"),h=a("8860"),C=a("da13"),b=a("34c3"),y=a("5d23"),x=a("f774"),_=Object(v["a"])(u,c,l,!1,null,"42abe800",null),g=_.exports;p()(_,{VIcon:f["a"],VList:h["a"],VListItem:C["a"],VListItemIcon:b["a"],VListItemTitle:y["c"],VNavigationDrawer:x["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-alert",{staticClass:"text-center",attrs:{border:"top",color:"#f9777875",dark:"",dismissible:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v(t._s(t.alertMessage))])],1)},w=[],M={data:function(){return{alert:!0,alertMessage:"Welcome to TeaShop! This website is only a template for my personal project."}}},k=M,T=a("0798"),A=Object(v["a"])(k,V,w,!1,null,null,null),P=A.exports;p()(A,{VAlert:T["a"]});var O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-row",{staticClass:"fullPage",attrs:{align:"center",justify:"center","no-gutters":""}},[s("v-col",{attrs:{cols:"12",sm:"3","offset-sm":"1"}},[s("div",{staticClass:"font-weight-black my-4",attrs:{id:"teashopFont"}},[t._v("TeaShop")]),s("h3",{staticClass:"mb-4"},[t._v("Simply made fresh daily. Blah blah blah blah blah filler")]),s("v-btn",{attrs:{depressed:"",dark:"","x-large":""},on:{click:function(e){return t.OpenMenu()}}},[t._v("Order Online")])],1),s("v-col",{attrs:{cols:"12",sm:"7","offset-sm":"1",order:"first","order-sm":"last"}},[s("v-img",{attrs:{src:a("9ac3")}})],1)],1),s("AboutUs"),s("Contact")],1)},S=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{height:"60vh","background-color":"#feddde","margin-left":"-28px"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"mx-7",attrs:{cols:"7"}},[s("v-img",{staticStyle:{"margin-top":"-24px"},attrs:{"aspect-ratio":"0",src:a("e63b")}})],1),s("v-col",{attrs:{cols:"4"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",{staticClass:"text-h5"},[t._v("About Us")]),s("v-card-subtitle",[t._v("We are a local tea shop that specialized in the finest herbal tea.")])],1)],1)],1)],1)},j=[],D=a("b0af"),F=a("99d9"),L=a("62ad"),R=a("adda"),$=a("0fd9"),E={},B=Object(v["a"])(E,I,j,!1,null,null,null),N=B.exports;p()(B,{VCard:D["a"],VCardSubtitle:F["b"],VCardTitle:F["d"],VCol:L["a"],VImg:R["a"],VRow:$["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"mt-15",attrs:{align:"center",justify:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"10"}},[a("h1",[t._v("Location & Hours")]),a("v-row",{staticClass:"ma-6",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("div",[a("v-icon",{staticClass:"material-icons mr-2",staticStyle:{float:"left"},attrs:{color:"#f97778"}},[t._v("place")]),a("h3",[t._v("Address")])],1),a("div",{staticClass:"subtitle-2"},[t._v(t._s(t.location.address))]),a("div",{staticClass:"subtitle-2"},[t._v(t._s(t.location.city+", "+t.location.state+", "+t.location.zipcode))])]),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-icon",{staticClass:"material-icons mr-2",staticStyle:{float:"left"},attrs:{color:"#f97778"}},[t._v("schedule")]),a("h3",[t._v("Hours")]),a("div",{staticClass:"subtitle-2"},[t._v("Mon - Thurs 11:00AM - 10:00PM")]),a("div",{staticClass:"subtitle-2"},[t._v("Fri - Sun 12:00PM - 9:00PM")])],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-icon",{staticClass:"material-icons mr-2",staticStyle:{float:"left"},attrs:{color:"#f97778"}},[t._v("import_contacts")]),a("h3",[t._v("Contact")]),a("div",{staticClass:"subtitle-2"},[t._v("Phone "+t._s(t.phone))]),a("div",{staticClass:"subtitle-2"},[t._v("Email teashop@leaf.net")])],1)],1)],1)],1)],1)},z=[],H=(a("99af"),{data:function(){return{location:{place:"TeaShop",address:"123 Earl Tea St.",city:"Leafville",state:"Tea Village",zipcode:"96385"},phone:"(123) 456 - 7890",hours:[{day:"Monday",hours:"11:00AM - 9:00PM"},{day:"Tuesday",hours:"11:00AM - 9:00PM"},{day:"Wednesday",hours:"11:00AM - 9:00PM"},{day:"Thursday",hours:"11:00AM - 9:00PM"},{day:"Friday",hours:"11:00AM - 9:00PM"},{day:"Saturday",hours:"11:00AM - 9:00PM"},{day:"Sunday",hours:"11:00AM - 9:00PM"}]}},methods:{HoursFormat:function(t){return"".concat(t.day," - ").concat(t.hours)}}}),U=H,Q=Object(v["a"])(U,q,z,!1,null,null,null),J=Q.exports;p()(Q,{VCol:L["a"],VIcon:f["a"],VRow:$["a"]});var G={name:"HomePage",components:{AboutUs:N,Contact:J},data:function(){return{}},methods:{OpenMenu:function(){this.$store.commit("updateCurrentPage","Menu")}}},Y=G,W=(a("f395"),a("8336")),X=Object(v["a"])(Y,O,S,!1,null,"6a62379b",null),K=X.exports;p()(X,{VBtn:W["a"],VCol:L["a"],VImg:R["a"],VRow:$["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{absolute:"",permanent:"",right:"",width:"20%"}},[a("v-list",{staticClass:"ma-4",attrs:{nav:"",dense:""}},[a("v-list-item",[a("v-row",{attrs:{"no-gutters":"",align:"center",justify:"start"}},[a("v-col",{attrs:{cols:"6"}},[a("v-icon",{staticClass:"material-icons",attrs:{color:"#f97778"}},[t._v("person")]),a("v-text",{staticClass:"ml-2"},[t._v("Jenny")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-icon",{staticClass:"material-icons",attrs:{color:"#f97778"}},[t._v("place")]),a("v-text",{staticClass:"ml-2"},[t._v("12345 ABC St, New York")])],1)],1)],1)],1),a("v-divider",{staticClass:"mx-8"}),a("v-list",{staticClass:"ma-4",attrs:{nav:"",dense:""}},[a("h3",{staticClass:"pa-4"},[t._v("My Order")])]),a("v-divider",{staticClass:"mx-8"}),a("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[a("v-col",{staticClass:"pa-8"},[a("v-btn",{attrs:{color:"#f97778",dark:"",rounded:"",block:""}},[t._v("Submit Order")])],1)],1)],1)},tt=[],et=(a("7604"),a("ce7e")),at={},st=Object(v["a"])(at,Z,tt,!1,null,"3bc38bf7",null),rt=st.exports;p()(st,{VBtn:W["a"],VCol:L["a"],VDivider:et["a"],VIcon:f["a"],VList:h["a"],VListItem:C["a"],VNavigationDrawer:x["a"],VRow:$["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{transition:"dialog-bottom-transition",width:"60%",persistent:""},model:{value:t.openAddMenu,callback:function(e){t.openAddMenu=e},expression:"openAddMenu"}},[a("v-card",{attrs:{flat:""}},[a("v-toolbar",{staticClass:"salmon",attrs:{flat:"",dark:""}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.CloseAddMenu()}}},[a("v-icon",{staticClass:"material-icons"},[t._v("close")])],1),a("v-toolbar-title",[t._v("Add Menu")])],1),a("v-card-text",[a("v-card-subtitle",[a("b",[t._v("Item")]),a("v-text-field",{staticClass:"rounded-md my-4",attrs:{outlined:"",flat:"",dense:"","hide-details":"",label:"Item",color:"#f9777875"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-card-subtitle",[a("b",[t._v("Description")]),a("v-textarea",{staticClass:"rounded-md my-4",attrs:{outlined:"",flat:"",dense:"","hide-details":"",rows:"2","row-height":"20",placeholder:"Description",color:"#f9777875"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),a("v-card-subtitle",[a("b",[t._v("Price")]),a("v-text-field",{staticClass:"rounded-md my-4",attrs:{prefix:"$",outlined:"",flat:"",dense:"","hide-details":"",placeholder:"Price",color:"#f9777875"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),a("v-card-subtitle",[a("b",[t._v("Tags/Categories")]),t.tags.length>0?a("v-row",[a("v-col",{attrs:{cols:"12"}},t._l(t.selectedTags,(function(e){return a("v-chip",{key:e,staticClass:"ma-2",attrs:{color:"#f0f4f7f5"}},[t._v(t._s(e))])})),1)],1):t._e(),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{directives:[{name:"show",rawName:"v-show",value:t.showTags,expression:"showTags"}],attrs:{cols:"12",sm:"8"}},[a("v-combobox",{staticClass:"rounded-md my-4",attrs:{items:t.tags,outlined:"",flat:"",dense:"","hide-details":"",multiple:"",placeholder:"Tag/Category",color:"#f9777875"},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}})],1),a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"2"}},[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.ShowTagsToggle()}}},[t._v(t._s(t.ShowTagsText()))])],1)],1)],1)],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-actions",[a("v-row",{staticClass:"ma-4",attrs:{align:"center",justify:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-8",attrs:{depressed:"",dark:"",color:"#f97778"},on:{click:function(e){return t.ResetForm()}}},[t._v("Clear")]),a("v-btn",{attrs:{depressed:"",dark:"",color:"#f97778"},on:{click:function(e){return t.AddMenu()}}},[t._v("Add Menu")])],1)],1)],1)],1)],1)},it=[],ot=(a("b680"),a("b0c0"),a("a4d3"),a("e01a"),a("6cce")),ct={props:{openAddMenu:{type:Boolean,default:!1}},data:function(){return{name:"",description:"",price:0,selectedTags:[],tags:["Milk Tea","Fruit Tea"],showTags:!1}},methods:{ShowTagsToggle:function(){this.showTags=!this.showTags},ShowTagsText:function(){return this.showTags?"- Hide":"+ Tags"},CloseAddMenu:function(){this.$emit("update:openAddMenu",!1)},AddMenu:function(){var t=(Math.random()+4).toFixed(1),e=40,a=250,s=Math.floor(Math.random()*(a-e+1)+e),r=parseFloat(this.price).toFixed(2),n=new ot.Item(this.name,this.description,r,this.selectedTags,t,s);this.$socket.client.emit("AddMenuItem",n)},ResetForm:function(){this.name="",this.description="",this.price=0,this.selectedTags=[]}}},lt=ct,dt=a("cc20"),ut=a("2b5d"),vt=a("169a"),mt=a("2fa4"),pt=a("8654"),ft=a("a844"),ht=a("71d9"),Ct=a("2a7f"),bt=Object(v["a"])(lt,nt,it,!1,null,null,null),yt=bt.exports;p()(bt,{VBtn:W["a"],VCard:D["a"],VCardActions:F["a"],VCardSubtitle:F["b"],VCardText:F["c"],VChip:dt["a"],VCol:L["a"],VCombobox:ut["a"],VDialog:vt["a"],VDivider:et["a"],VIcon:f["a"],VRow:$["a"],VSpacer:mt["a"],VTextField:pt["a"],VTextarea:ft["a"],VToolbar:ht["a"],VToolbarTitle:Ct["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-spacer"),t.isEditMode?a("v-btn",{attrs:{icon:""},on:{click:t.OpenAddMenu}},[a("v-icon",{staticClass:"material-icons"},[t._v("add")])],1):a("v-btn",{attrs:{icon:""},on:{click:function(e){t.isEditMode=!0}}},[a("v-icon",{staticClass:"material-icons"},[t._v("edit")])],1)],1)],1),a("SearchBar"),a("Promotion"),a("v-row",{staticClass:"ma-0"},[a("v-col",{attrs:{cols:"12",sm:"10",md:"8"}},[a("v-row",{staticClass:"mr-4"},t._l(t.items,(function(e,s){return a("v-col",{key:s,staticClass:"d-flex flex-column",attrs:{cols:"4"}},[a("v-card",{staticClass:"d-flex flex-column flex rounded-xl",attrs:{flat:""},on:{click:function(a){return t.OpenAddCart(e)}}},[a("v-card-text",{staticClass:"flex"},[a("v-row",{attrs:{align:"start",justify:"center","no-gutters":""}},[a("v-col",{staticClass:"mt-4",attrs:{cols:"12"}},[a("v-icon",{staticClass:"material-icons pl-4 pr-2",attrs:{small:"",color:"#f97778"}},[t._v("star ")]),a("span",{staticClass:"body-2"},[t._v(t._s(t.FormatReviews(e)))])],1)],1),a("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"8"}},[a("v-card-title",[t._v(t._s(e.name))]),a("v-card-subtitle",[t._v(t._s(e.description))])],1),a("v-col",{attrs:{cols:"4"}},[a("v-avatar",{attrs:{size:"48",color:"#f97778"}},[a("v-card-subtitle",{staticClass:"white--text"},[t._v(t._s(t.InUSD(e.price)))])],1)],1)],1)],1)],1)],1)})),1)],1)],1),a("MenuCartDialog",{attrs:{openMenuCart:t.openMenuCart,item:t.selectedItem},on:{"update:openMenuCart":function(e){t.openMenuCart=e},"update:open-menu-cart":function(e){t.openMenuCart=e},"update:item":function(e){t.selectedItem=e}}}),a("AddMenu",{attrs:{openAddMenu:t.openAddMenu},on:{"update:openAddMenu":function(e){t.openAddMenu=e},"update:open-add-menu":function(e){t.openAddMenu=e}}})],1)},_t=[],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"start"}},[a("v-col",{attrs:{cols:"10",sm:"6"}},[a("v-text-field",{staticClass:"rounded-xl",attrs:{solo:"",flat:"",dense:"","hide-details":"",placeholder:"Search"},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[a("v-icon",{staticClass:"material-icons"},[t._v("search")])]},proxy:!0}])})],1),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{depressed:"",rounded:"",color:"white"}},[a("v-icon",{staticClass:"material-icons",attrs:{left:"",color:"rgba(0, 0, 0, 0.54)"}},[t._v("tune")]),a("div",{staticClass:"text-decoration-none",attrs:{color:"rgba(0, 0, 0, 0.54)"}},[t._v("Filters ")])],1)],1)],1)},Vt=[],wt={},Mt=Object(v["a"])(wt,gt,Vt,!1,null,"c9a02e02",null),kt=Mt.exports;p()(Mt,{VBtn:W["a"],VCol:L["a"],VIcon:f["a"],VRow:$["a"],VTextField:pt["a"]});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"start"}},[a("v-col",{attrs:{cols:"12",sm:"10"}},[a("v-card",{attrs:{flat:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{staticClass:"material-icons",attrs:{size:"64"}},[t._v("coffee")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Get milk tea FOR FREE")]),a("v-list-item-subtitle",[t._v("Buy one milk tea, get one free for you or a friend.")])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""}},[a("div",{staticClass:"text-decoration-none"},[t._v("Learn more")]),a("v-icon",{staticClass:"material-icons",attrs:{right:"",small:""}},[t._v("arrow_right_alt")])],1)],1)],1)],1),a("v-col",{staticClass:"pl-8",attrs:{cols:"12"}},[a("h2",[t._v("Tea Shop")]),a("div",{staticClass:"subtitle-2"},[t._v("Select category you'd like to drink from")])]),a("v-col",{staticClass:"my-2 pl-6"},t._l(t.categories,(function(e){return a("v-chip",{key:e,staticClass:"ma-2",attrs:{color:"white"}},[t._v(t._s(e))])})),1)],1)},At=[],Pt={data:function(){return{categories:["Milk Tea","Fruit Tea","Coffee","Misc"]}}},Ot=Pt,St=a("8270"),It=Object(v["a"])(Ot,Tt,At,!1,null,null,null),jt=It.exports;p()(It,{VBtn:W["a"],VCard:D["a"],VCardActions:F["a"],VChip:dt["a"],VCol:L["a"],VIcon:f["a"],VListItem:C["a"],VListItemAvatar:St["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VRow:$["a"],VSpacer:mt["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.openMenuCart,callback:function(e){t.openMenuCart=e},expression:"openMenuCart"}},[a("v-card",[a("v-card-title",[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.CloseMenuCart()}}},[a("v-icon",{staticClass:"material-icons"},[t._v("close")])],1)],1),a("v-card-text",[a("h4",[t._v(t._s(t.item.name))]),a("div",{staticClass:"subtitle-2"},[t._v(t._s(t.item.description))]),a("v-img",{attrs:{src:"https://www.thespruceeats.com/thmb/c52UHmU21owd5YrxR3v_DtGS3AI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/types-of-bubble-tea-766451-hero-01-a6dca4dd096a4d8abdde1a754766f851.jpg",stretch:"","aspect-ratio":"3","max-height":"250"}})],1),a("v-card-text",{staticClass:"scrollable"},[a("div",{staticClass:"subtitle-2"},[t._v("Size")]),a("v-radio-group",{staticClass:"ml-3",attrs:{mandatory:""},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[t._l(t.sizes,(function(e){return[a("v-radio",{key:e.item,attrs:{value:e.item,color:"#f97778"},on:{change:function(a){return t.UpdateSize(e)}},scopedSlots:t._u([{key:"label",fn:function(){return[a("span",[t._v(t._s(e.item))]),a("v-spacer"),a("span",[t._v(t._s(t.USDFormat(e.price)))])]},proxy:!0}],null,!0)})]}))],2),a("div",{staticClass:"subtitle-2"},[t._v("Add Ons ")]),t._l(t.addOns,(function(e){return a("v-checkbox",{key:e.item,staticClass:"ml-3",attrs:{value:e,color:"#f97778","hide-details":""},on:{change:function(a){return t.UpdateAddOns(e)}},scopedSlots:t._u([{key:"label",fn:function(){return[a("span",[t._v(t._s(e.item))]),a("v-spacer"),a("span",[t._v(t._s(t.USDFormat(e.price)))])]},proxy:!0}],null,!0),model:{value:t.selectedAddOns,callback:function(e){t.selectedAddOns=e},expression:"selectedAddOns"}})})),a("div",{staticClass:"subtitle-2 mt-4"},[t._v("Ice Level")]),a("v-radio-group",{staticClass:"ml-3",attrs:{mandatory:""},model:{value:t.iceLevel,callback:function(e){t.iceLevel=e},expression:"iceLevel"}},[t._l(t.iceLevels,(function(t){return[a("v-radio",{key:t,attrs:{value:t,label:t,color:"#f97778"}})]}))],2),a("div",{staticClass:"subtitle-2"},[t._v("Sweetness Level")]),a("v-radio-group",{staticClass:"ml-3",attrs:{mandatory:""},model:{value:t.sweetnessLevel,callback:function(e){t.sweetnessLevel=e},expression:"sweetnessLevel"}},[t._l(t.sweetnessLevels,(function(t){return[a("v-radio",{key:t,attrs:{value:t,label:t,color:"#f97778"}})]}))],2)],2),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:"",small:"",disabled:t.quantity<=t.minQuantity},on:{click:function(e){return t.DecreaseQuantity()}}},[a("v-icon",{staticClass:"material-icons"},[t._v("remove_circle_outline")])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"},{name:"mask",rawName:"v-mask",value:"###",expression:'"###"'}],staticClass:"text-center",attrs:{id:"quantityInput",min:"1",max:"999",maxlength:t.maxLength},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),a("v-btn",{attrs:{icon:"",small:"",disabled:t.quantity>=t.maxQuantity},on:{click:function(e){return t.IncreaseQuantity()}}},[a("v-icon",{staticClass:"material-icons"},[t._v("add_circle_outline")])],1),a("v-btn",{staticClass:"rounded-xl",attrs:{color:"#f97778",dark:""}},[t._v(t._s(t.updateCheckoutText))])],1)],1)],1)},Ft=[],Lt=(a("7db0"),a("caad"),a("2532"),{props:{openMenuCart:{type:Boolean,default:!1},item:{type:Object,default:function(){return{name:"",description:"",price:0,addOns:[],tags:[]}}}},computed:{updateCheckoutText:function(){return this.item.price?"Add to cart - $".concat((this.quantity*(this.item.price+this.total)).toFixed(2)):""}},data:function(){return{maxLength:3,maxQuantity:999,minQuantity:1,quantity:1,previousSelectedSize:"Regular",total:0,size:"Regular",iceLevel:"Regular Ice",sweetnessLevel:"100%",sizes:[{item:"Regular",price:0},{item:"Large",price:1},{item:"X-Large",price:1.5}],addOns:[{item:"Aloe Jelly",price:.75},{item:"Tapioca Boba",price:.5},{item:"Crystal Boba",price:.75},{item:"Herbal Jelly",price:.5},{item:"Mango Jelly",price:.5},{item:"Milk Cap",price:1},{item:"Nata Jelly",price:.5},{item:"Oreo",price:.5},{item:"Popping Coffee Boba",price:.75},{item:"Popping Grape Boba",price:.75},{item:"Popping Mango Boba",price:.75},{item:"Red Bean",price:.5}],iceLevels:["Less Ice","No Ice","Regular Ice"],sweetnessLevels:["0%","25%","50%","75%","100%"],selectedAddOns:[]}},methods:{CloseMenuCart:function(){this.total=0,this.quantity=1,this.$emit("update:openMenuCart",!1)},USDFormat:function(t){return 0===t?"":"+$".concat(t.toFixed(2))},AddToTotal:function(t){this.total+=t},RemoveFromTotal:function(t){this.total-=t},IncreaseQuantity:function(){this.quantity>=999?this.quantity=999:this.quantity++},DecreaseQuantity:function(){this.quantity<=1?this.quantity=1:this.quantity--},UpdateSize:function(t){var e=this;if(this.previousSelectedSize!=t){var a=this.sizes.find((function(t){return t===e.previousSelectedSize}));a&&this.RemoveFromTotal(a.price),this.AddToTotal(t.price),this.previousSelectedSize=t}},UpdateAddOns:function(t){this.selectedAddOns.includes(t)?this.AddToTotal(t.price):this.RemoveFromTotal(t.price)}}}),Rt=Lt,$t=(a("5fc7"),a("ac7c")),Et=a("67b6"),Bt=a("43a6"),Nt=Object(v["a"])(Rt,Dt,Ft,!1,null,"5563a972",null),qt=Nt.exports;p()(Nt,{VBtn:W["a"],VCard:D["a"],VCardActions:F["a"],VCardText:F["c"],VCardTitle:F["d"],VCheckbox:$t["a"],VDialog:vt["a"],VDivider:et["a"],VIcon:f["a"],VImg:R["a"],VRadio:Et["a"],VRadioGroup:Bt["a"],VSpacer:mt["a"]});var zt={components:{SearchBar:kt,Promotion:jt,MenuCartDialog:qt,AddMenu:yt},data:function(){return{isEditMode:!1,openAddMenu:!1,openMenuCart:!1,selectedItem:{}}},computed:Object(o["a"])({},Object(r["b"])({items:"getMenuItems"})),beforeMount:function(){console.log("before mounted - menu"),this.RetrieveMenuItems()},methods:{InUSD:function(t){return"$".concat(t.toFixed(2))},FormatReviews:function(t){return"".concat(t.reviews.toFixed(1),"(").concat(t.numberOfReviews,")")},OpenAddMenu:function(){this.openAddMenu=!0},OpenAddCart:function(t){this.selectedItem=t,this.openMenuCart=!0},RetrieveMenuItems:function(){this.$socket.client.emit("RetrieveMenuItems")}},sockets:{RETRIEVE_MENU_ITEMS:function(t){console.log(t),this.$store.commit("updateMenuItems",t.items)}}},Ht=zt,Ut=a("8212"),Qt=Object(v["a"])(Ht,xt,_t,!1,null,null,null),Jt=Qt.exports;p()(Qt,{VAvatar:Ut["a"],VBtn:W["a"],VCard:D["a"],VCardSubtitle:F["b"],VCardText:F["c"],VCardTitle:F["d"],VCol:L["a"],VIcon:f["a"],VRow:$["a"],VSpacer:mt["a"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-card",{staticClass:"my-6 rounded-xl",attrs:{flat:""}},[a("v-card-title",[t._v("Payment Methods")]),a("v-card-text",[a("span",[t._v("Saved Payment methods")]),a("v-list",{attrs:{"two-lines":""}},[t._l(t.paymentOptions,(function(e,s){return[a("v-list-item",{key:e.card},[a("v-list-item-avatar",[a("v-icon",{staticClass:"material-icons"},[t._v("credit_card ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.CardFormatText(e)))]),a("v-list-item-subtitle",[t._v(t._s(t.CardExpirationText(e.expire)))])],1),a("v-list-item-action",[t.selectedPayment.card===e.card?a("v-chip",{attrs:{label:"",small:"",color:"#f97778",dark:""}},[a("v-icon",{staticClass:"material-icons",attrs:{left:""}},[t._v("check ")]),a("span",[t._v("Default")])],1):t._e()],1),a("v-list-item-action",[a("v-menu",{attrs:{"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{icon:""}},s),[a("v-icon",{staticClass:"material-icons"},[t._v("more_horiz ")])],1)]}}],null,!0)},[a("v-list",[a("v-list-item",{on:{click:function(e){return t.SetDefaultPayment(s)}}},[a("v-list-item-title",[t._v("Set Default")])],1),a("v-list-item",{on:{click:function(e){return t.DeleteCard(s)}}},[a("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1)],1),a("v-divider")]}))],2)],1)],1),a("v-card",{staticClass:"rounded-xl",attrs:{flat:""}},[a("v-card-title",[t._v("Add New Payment Method ")]),a("v-card-text",[a("v-list",t._l(t.addNewPaymentOptions,(function(e){return a("v-list-item",{key:e.text,on:{click:e.action}},[a("v-list-item-avatar",[a("v-icon",{staticClass:"material-icons"},[t._v(t._s(e.logo))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1),a("v-list-item-action",[a("v-icon",{staticClass:"material-icons"},[t._v("navigate_next")])],1)],1)})),1)],1)],1)],1),a("AddCard",{attrs:{openAddCard:t.openAddCard},on:{"update:openAddCard":function(e){t.openAddCard=e},"update:open-add-card":function(e){t.openAddCard=e}}})],1)},Yt=[],Wt=(a("fb6a"),a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"",fullscreen:t.$vuetify.breakpoint.smAndDown,"max-width":"600px"},model:{value:t.openAddCard,callback:function(e){t.openAddCard=e},expression:"openAddCard"}},[a("v-card",{attrs:{flat:""}},[a("v-toolbar",{staticClass:"salmon",attrs:{flat:"",dark:""}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.CloseAddCard()}}},[a("v-icon",{staticClass:"material-icons"},[t._v("close")])],1),a("v-toolbar-title",[t._v("Add New Payment")])],1),a("v-card-text",{staticClass:"py-5"},[a("v-form",{ref:"paymentForm",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#### #### #### ####",expression:'"#### #### #### ####"'}],staticClass:"rounded-md",attrs:{outlined:"",flat:"",dense:"",required:"",label:"Card Number",placeholder:"xxxx xxxx xxxx xxxx",color:"#f9777875",rules:t.cardRules},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[a("v-icon",{staticClass:"material-icons"},[t._v("credit_card")])]},proxy:!0}]),model:{value:t.card,callback:function(e){t.card=e},expression:"card"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"##/####",expression:'"##/####"'}],staticClass:"rounded-md",attrs:{outlined:"",flat:"",dense:"",required:"",label:"Expiration Date",placeholder:"xx/xx",color:"#f9777875",rules:t.expireRules},model:{value:t.expire,callback:function(e){t.expire=e},expression:"expire"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"###",expression:'"###"'}],staticClass:"rounded-md",attrs:{outlined:"",flat:"",dense:"",required:"",label:"CVV",placeholder:"xxx",color:"#f9777875",rules:t.cvvRules},model:{value:t.cvv,callback:function(e){t.cvv=e},expression:"cvv"}})],1)],1)],1)],1)],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-actions",[a("v-row",{staticClass:"ma-4",attrs:{align:"center",justify:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-8",attrs:{depressed:"",dark:"",color:"#f97778"},on:{click:function(e){return t.Clear()}}},[t._v("Clear")]),a("v-btn",{attrs:{depressed:"",dark:t.validForm,color:"#f97778",disabled:!t.validForm},on:{click:function(e){return t.AddNewPayment()}}},[t._v("Submit ")])],1)],1)],1)],1)],1)}),Xt=[],Kt={props:{openAddCard:{type:Boolean,default:!1}},computed:Object(o["a"])({},Object(r["b"])({currentPayments:"getCurrentPayments"})),data:function(){return{type:"Visa",card:"",expire:"",cvv:"",validForm:!1,cardRules:[function(t){return t&&""!=t||"Required."},function(t){return t&&19===t.length||"Invalid card."}],expireRules:[function(t){return t&&""!=t||"Required"},function(t){return t&&parseInt(t.substring(0,2))>=1&&parseInt(t.substring(0,2))<=12||"Invalid date."},function(t){return t&&(parseInt(t.substring(0,2))>=(new Date).getMonth()+1&&parseInt(t.substring(3,7))==(new Date).getFullYear()||parseInt(t.substring(3,7))>(new Date).getFullYear())||"Card is expired."}],cvvRules:[function(t){return t&&""!=t||"Required"},function(t){return t&&3===t.length||"Invalid CVV."}]}},methods:{Clear:function(){this.$refs.paymentForm.reset(),this.type="Visa",this.card="",this.expire="",this.cvv=""},CloseAddCard:function(){this.Clear(),this.$emit("update:openAddCard",!1)},AddNewPayment:function(){if(this.$refs.paymentForm.validate(),this.validForm){var t={type:this.type,card:this.card,expire:this.expire,cvv:this.cvv};console.log(t),this.currentPayments.push(t),this.$store.commit("updateCurrentPayments",this.currentPayments),this.CloseAddCard()}}}},Zt=Kt,te=a("a523"),ee=a("4bd4"),ae=Object(v["a"])(Zt,Wt,Xt,!1,null,null,null),se=ae.exports;p()(ae,{VBtn:W["a"],VCard:D["a"],VCardActions:F["a"],VCardText:F["c"],VCol:L["a"],VContainer:te["a"],VDialog:vt["a"],VDivider:et["a"],VForm:ee["a"],VIcon:f["a"],VRow:$["a"],VTextField:pt["a"],VToolbar:ht["a"],VToolbarTitle:Ct["a"]});var re={components:{AddCard:se},props:{openPaymentView:{type:Boolean,default:!1}},computed:Object(o["a"])({},Object(r["b"])({paymentOptions:"getCurrentPayments",selectedPayment:"getSelectedPayment"})),data:function(){return{addNewPaymentOptions:[{logo:"credit_card",text:"Credit/Debit Card",action:this.OpenAddCard},{logo:"paypal",text:"Paypal",action:this.DoNothing}],openAddCard:!1}},methods:{CardFormatText:function(t){var e=t.card,a=e.length,s=t.card.slice(a-4);return"".concat(t.type,"...").concat(s)},CardExpirationText:function(t){return"Exp. ".concat(t)},OpenAddCard:function(){this.openAddCard=!0},SetDefaultPayment:function(t){this.$store.commit("updateSelectedPayment",this.paymentOptions[t])},DeleteCard:function(t){this.paymentOptions.splice(t,1),this.$store.commit("updateCurrentPayments",this.paymentOptions)},DoNothing:function(){}}},ne=re,ie=a("1800"),oe=a("e449"),ce=Object(v["a"])(ne,Gt,Yt,!1,null,null,null),le=ce.exports;p()(ce,{VBtn:W["a"],VCard:D["a"],VCardText:F["c"],VCardTitle:F["d"],VChip:dt["a"],VCol:L["a"],VDivider:et["a"],VIcon:f["a"],VList:h["a"],VListItem:C["a"],VListItemAction:ie["a"],VListItemAvatar:St["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VMenu:oe["a"],VRow:$["a"]});var de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto my-6 rounded-xl",attrs:{width:"60%",flat:""}},[a("v-card-title",[t._v("Orders ")]),a("v-divider"),t.currentOrders.length>0?a("v-card-text",[a("span",[a("b",[t._v("Current Orders")])])]):t._e(),t.currentOrders.length>0?a("v-divider"):t._e(),a("v-card-text",[a("span",[a("b",[t._v("Previous Orders")])]),a("v-list",{staticClass:"px-6",attrs:{"three-list":""}},[t._l(t.previousOrders,(function(e,s){return[a("v-list-item",{key:s},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.restaurant))]),a("v-list-item-subtitle",[t._v(t._s(t.DeliveryDateFormat(e.deliveredDate)))]),a("v-list-item-subtitle",[t._v(t._s(t.ItemsFormat(e.items)))])],1),a("v-list-item-action",[a("v-btn",{staticClass:"rounded-xl",attrs:{depressed:"",dark:"",color:"blue-grey lighten-4"}},[t._v("View Order")])],1)],1),a("v-divider")]}))],2)],1)],1)],1)],1)},ue=[],ve=(a("a15b"),{data:function(){return{currentOrders:[],previousOrders:[{restaurant:"TeaShop",deliveredDate:"08/01/2019, 12:29PM",total:4.5,items:["Almond Milk Tea"]},{restaurant:"TeaShop",deliveredDate:"08/01/2019, 12:29PM",total:4.5,items:["Almond Milk Tea"]},{restaurant:"TeaShop",deliveredDate:"08/01/2019, 12:29PM",total:4.5,items:["Almond Milk Tea"]},{restaurant:"TeaShop",deliveredDate:"08/01/2019, 12:29PM",total:4.5,items:["Almond Milk Tea"]},{restaurant:"TeaShop",deliveredDate:"08/01/2019, 12:29PM",total:4.5,items:["Almond Milk Tea"]},{restaurant:"TeaShop",deliveredDate:"08/01/2019, 12:29PM",total:4.5,items:["Almond Milk Tea"]},{restaurant:"TeaShop",deliveredDate:"08/01/2019, 12:29PM",total:4.5,items:["Almond Milk Tea"]}]}},methods:{DeliveryDateFormat:function(t){return"Delivered: ".concat(t)},ItemsFormat:function(t){return t.join(", ")}}}),me=ve,pe=Object(v["a"])(me,de,ue,!1,null,null,null),fe=pe.exports;p()(pe,{VBtn:W["a"],VCard:D["a"],VCardText:F["c"],VCardTitle:F["d"],VCol:L["a"],VDivider:et["a"],VList:h["a"],VListItem:C["a"],VListItemAction:ie["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VRow:$["a"]});var he={name:"App",components:{NavBar:g,Alert:P,Home:K,CheckOutNav:rt,AddMenu:yt,Menu:Jt,Payment:le,OrderHistory:fe},computed:Object(o["a"])({},Object(r["b"])({currentPage:"getCurrentPage"})),data:function(){return{}}},Ce=he,be=(a("034f"),a("7496")),ye=a("f6c4"),xe=Object(v["a"])(Ce,n,i,!1,null,null,null),_e=xe.exports;p()(xe,{VApp:be["a"],VContainer:te["a"],VMain:ye["a"]});var ge=a("f309");s["a"].use(ge["a"]);var Ve=new ge["a"]({}),we=a("b6d0"),Me=a("7f34"),ke=a.n(Me),Te=a("eb92"),Ae=a.n(Te),Pe=a("f87c"),Oe=a("8e27");s["a"].use(r["a"]);var Se=new r["a"].Store({modules:{user:ke.a,items:Ae.a}});s["a"].config.productionTip=!1,s["a"].directive("mask",we["a"]);var Ie=Object(Oe["io"])("http://".concat(window.location.hostname,":80"));s["a"].use(Pe["a"],Ie,{store:Se}),new s["a"]({vuetify:Ve,store:Se,render:function(t){return t(_e)}}).$mount("#app")},"5fc7":function(t,e,a){"use strict";a("48de")},"6cce":function(t,e,a){var s=a("970b").default,r=a("5bc3").default;a("b0c0"),a("a4d3"),a("e01a");var n=function(){"use strict";function t(e,a,r,n,i,o){s(this,t),this.name=e,this.description=a,this.price=r,this.tags=n,this.reviews=i,this.numberOfReviews=o}return r(t,[{key:"item",get:function(){return this}}]),t}();t.exports.Item=n},7604:function(t,e,a){"use strict";a("1cc9")},"7f34":function(t,e){var a={state:{currentPage:"Home",selectedPayment:{type:"Discover",card:"0123456789012345",expire:"01/23"},currentPayments:[{type:"Discover",card:"0123456789012345",expire:"01/23"},{type:"American Express",card:"9876543210987654",expire:"12/34"},{type:"Visa",card:"0147852369014725",expire:"02/25"}],orderHistory:[]},getters:{getCurrentPage:function(t){return t.currentPage},getSelectedPayment:function(t){return t.selectedPayment},getCurrentPayments:function(t){return t.currentPayments},getOrderHistory:function(t){return t.orderHistory}},mutations:{updateCurrentPage:function(t,e){t.currentPage=e},updateSelectedPayment:function(t,e){t.selectedPayment=e},updateCurrentPayments:function(t,e){t.currentPayments=e},updateOrderHistory:function(t,e){t.orderHistory=e}},actions:{}};t.exports=a},"85ec":function(t,e,a){},"9ac3":function(t,e,a){t.exports=a.p+"img/boba_background.b03db0c4.png"},e63b:function(t,e,a){t.exports=a.p+"img/cafe_test.0fe589fe.png"},eb92:function(t,e){var a={state:{menuItems:[],tags:[]},getters:{getMenuItems:function(t){return t.menuItems},getTags:function(t){return t.tags}},mutations:{updateMenuItems:function(t,e){t.menuItems=e},updateTags:function(t,e){t.tags=e}},actions:{}};t.exports=a},f395:function(t,e,a){"use strict";a("50fc")}});
//# sourceMappingURL=app.9fd29f66.js.map