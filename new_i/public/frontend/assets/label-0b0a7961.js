import{k as g,Y as h,i as j,W as k,$ as L,a as S,as as y,u as C,Z as E,a0 as O}from"./index-29a91f62.js";let i=Symbol("LabelContext");function p(){let t=O(i,null);if(t===null){let a=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,p),a}return t}function w({slot:t={},name:a="Label",props:o={}}={}){let e=g([]);function r(l){return e.value.push(l),()=>{let n=e.value.indexOf(l);n!==-1&&e.value.splice(n,1)}}return h(i,{register:r,slot:t,name:a,props:o}),j(()=>e.value.length>0?e.value.join(" "):void 0)}let P=k({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{slots:a,attrs:o}){var e;let r=(e=t.id)!=null?e:`headlessui-label-${L()}`,l=p();return S(()=>y(l.register(r))),()=>{let{name:n="Label",slot:d={},props:c={}}=l,{passive:f,...u}=t,s={...Object.entries(c).reduce((m,[b,v])=>Object.assign(m,{[b]:C(v)}),{}),id:r};return f&&(delete s.onClick,delete s.htmlFor,delete u.onClick),E({ourProps:s,theirProps:u,slot:d,attrs:o,slots:a,name:n})}}});export{w as E,P as K};
//# sourceMappingURL=label-0b0a7961.js.map