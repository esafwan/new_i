import{_ as D}from"./Section-b30b2258.js";import{E as F}from"./Email2Icon-90bca55a.js";import{v as E,P as M}from"./views-f9b9afbd.js";import{_ as j,a as g,C as A}from"./CallUI-d7d325b8.js";import{L as y}from"./LeadsIcon-aaabb1a8.js";import{D as C}from"./DealsIcon-c7294f54.js";import{C as w}from"./ContactsIcon-11a1459a.js";import{O as I}from"./OrganizationsIcon-b4d9134c.js";import{N as L}from"./NoteModal-2036878e.js";import{T as q}from"./TaskIcon-c007a147.js";import{P as N}from"./PhoneIcon-df7b879a.js";import{N as H,n as $}from"./notifications-69d74baf.js";import{m as p}from"./settings-01f42b9c.js";import{i as U,B as W,r as d,b as n,g as h,w as l,d as e,u as s,cu as Y,cv as k,e as o,l as z,c,F as v,f as B,n as G,t as J,cw as K,cx as Q,L as R}from"./index-29a91f62.js";import"./WhatsAppIcon-60b0eaf1.js";import"./FileUploader-ae370410.js";import"./global-7d1669ca.js";import"./Fields-4d667b5d.js";import"./NestedPopover-620c36ca.js";import"./EditIcon-94a66fee.js";import"./IndicatorIcon-2e26ac17.js";import"./Link-00b86c9a.js";import"./Dropdown-a48e38bc.js";import"./CRMLogo-507877c8.js";import"./contacts-d5d98e1c.js";import"./ArrowUpRightIcon-b156aad4.js";const X={class:"relative z-10 flex h-full w-[260px] flex-col justify-between border-r bg-gray-50 transition-all duration-300 ease-in-out"},Z={class:"flex-1 overflow-y-auto"},ee={class:"mb-3 flex flex-col"},te=["onClick"],ae={class:"flex flex-col"},oe={__name:"MobileSidebar",setup(x){const{getPinnedViews:m,getPublicViews:r}=E(),f=[{label:"Leads",icon:y,to:"Leads"},{label:"Deals",icon:C,to:"Deals"},{label:"Contacts",icon:w,to:"Contacts"},{label:"Organizations",icon:I,to:"Organizations"},{label:"Notes",icon:L,to:"Notes"},{label:"Tasks",icon:q,to:"Tasks"},{label:"Call Logs",icon:N,to:"Call Logs"},{label:"Email Templates",icon:F,to:"Email Templates"}],_=U(()=>{let a=[{name:"All Views",hideLabel:!0,opened:!0,views:f}];return r().length&&a.push({name:"Public views",opened:!0,views:b(r())}),m().length&&a.push({name:"Pinned views",opened:!0,views:b(m())}),a});function b(a){return a.map(t=>({label:t.label,icon:O(t.route_name,t.icon),to:{name:t.route_name,params:{viewType:t.type||"list"},query:{view:t.name}}}))}function O(a,t){if(t)return W("div",{class:"size-auto"},t);switch(a){case"Leads":return y;case"Deals":return C;case"Contacts":return w;case"Organizations":return I;case"Notes":return L;case"Call Logs":return N;default:return M}}return(a,t)=>{const P=d("Badge"),V=d("FeatherIcon");return n(),h(s(Q),{show:s(p)},{default:l(()=>[e(s(Y),{as:"div",onClose:t[0]||(t[0]=i=>p.value=!1),class:"fixed inset-0 z-40"},{default:l(()=>[e(s(k),{as:"template",enter:"transition ease-in-out duration-200 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-200 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:l(()=>[o("div",X,[o("div",null,[e(j,{class:"p-2"})]),o("div",Z,[o("div",ee,[e(g,{id:"notifications-btn",label:a.__("Notifications"),icon:H,to:{name:"Notifications"},class:"relative mx-2 my-0.5"},{right:l(()=>[s($)().unreadNotificationsCount?(n(),h(P,{key:0,label:s($)().unreadNotificationsCount,variant:"subtle"},null,8,["label"])):z("",!0)]),_:1},8,["label"])]),(n(!0),c(v,null,B(_.value,i=>(n(),c("div",{key:i.label},[e(D,{label:i.name,hideLabel:i.hideLabel,isOpened:i.opened},{header:l(({opened:u,hide:S,toggle:T})=>[S?z("",!0):(n(),c("div",{key:0,class:"ml-2 mt-4 flex h-7 w-auto cursor-pointer gap-1.5 px-1 text-base font-medium text-gray-600 opacity-100 transition-all duration-300 ease-in-out",onClick:me=>T()},[e(V,{name:"chevron-right",class:G(["h-4 text-gray-900 transition-all duration-300 ease-in-out",{"rotate-90":u}])},null,8,["class"]),o("span",null,J(a.__(i.name)),1)],8,te))]),default:l(()=>[o("nav",ae,[(n(!0),c(v,null,B(i.views,u=>(n(),h(g,{icon:u.icon,label:a.__(u.label),to:u.to,class:"mx-2 my-0.5"},null,8,["icon","label","to"]))),256))])]),_:2},1032,["label","hideLabel","isOpened"])]))),128))])])]),_:1}),e(s(k),{as:"template",enter:"transition-opacity ease-linear duration-200","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[e(s(K),{class:"fixed inset-0 bg-gray-600 bg-opacity-50"})]),_:1})]),_:1})]),_:1},8,["show"])}}},se={class:"flex border-b pr-3"},ne={class:"z-20 -mr-4 ml-1 flex items-center justify-center"},le=o("div",{id:"app-header",class:"flex-1"},null,-1),ie={__name:"MobileAppHeader",setup(x){return(m,r)=>{const f=d("FeatherIcon"),_=d("Button");return n(),c(v,null,[o("div",se,[o("div",ne,[e(_,{variant:"ghosted",onClick:r[0]||(r[0]=b=>p.value=!s(p))},{default:l(()=>[e(f,{name:"menu",class:"size-4"})]),_:1})]),le]),e(A,{class:"mr-3 mt-2"})],64)}}},re={class:"flex h-screen w-screen"},ce={class:"flex h-full flex-1 flex-col overflow-auto"},Fe={__name:"MobileLayout",setup(x){return(m,r)=>(n(),c("div",re,[e(oe),o("div",ce,[e(ie),R(m.$slots,"default")])]))}};export{Fe as default};
//# sourceMappingURL=MobileLayout-c39c97b9.js.map