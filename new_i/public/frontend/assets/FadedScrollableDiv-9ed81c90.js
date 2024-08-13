import{_ as W,aE as j,b as u,c as v,e as p,L as y,M as f,N as g,n as B,g as M,d as C,w as b,S as F,T as z,aF as H,O as N,aG as I,k as T,h as D,i as V,r as E,t as w,F as x,f as O,p as R,H as A,a as G,G as q}from"./index-29a91f62.js";import{q as _}from"./index-12263c08.js";const K={name:"Popover",inheritAttrs:!1,props:{show:{default:void 0},trigger:{type:String,default:"click"},hoverDelay:{type:Number,default:0},leaveDelay:{type:Number,default:0},placement:{type:String,default:"bottom-start"},popoverClass:[String,Object,Array],transition:{default:null},hideOnBlur:{default:!0}},emits:["open","close","update:show"],expose:["open","close"],data(){return{popoverContainerClass:"body-container",showPopup:!1,targetWidth:null,pointerOverTargetOrPopup:!1}},watch:{show(e){e?this.open():this.close()}},created(){if(!(typeof window>"u")&&!document.getElementById("frappeui-popper-root")){const e=document.createElement("div");e.id="frappeui-popper-root",document.body.appendChild(e)}},mounted(){this.listener=e=>{const o=e.target,s=this.$refs.reference,a=this.$refs.popover;if(o===s||o===a||(s==null?void 0:s.contains(o))||(a==null?void 0:a.contains(o)))return;if(!document.getElementById("frappeui-popper-root").contains(o))return this.close();const d=`.${this.popoverContainerClass}`,m=o==null?void 0:o.closest(d),n=s==null?void 0:s.closest(d);m&&n&&m===n&&this.close()},this.hideOnBlur&&(document.addEventListener("click",this.listener),document.addEventListener("mousedown",this.listener)),this.$nextTick(()=>{this.targetWidth=this.$refs.target.clientWidth})},beforeDestroy(){this.popper&&this.popper.destroy(),document.removeEventListener("click",this.listener),document.removeEventListener("mousedown",this.listener)},computed:{showPropPassed(){return this.show!=null},isOpen:{get(){return this.showPropPassed?this.show:this.showPopup},set(e){e=!!e,this.showPropPassed?this.$emit("update:show",e):this.showPopup=e,e===!1?this.$emit("close"):e===!0&&this.$emit("open")}},popupTransition(){let e={default:{enterActiveClass:"transition duration-150 ease-out",enterFromClass:"translate-y-1 opacity-0",enterToClass:"translate-y-0 opacity-100",leaveActiveClass:"transition duration-150 ease-in",leaveFromClass:"translate-y-0 opacity-100",leaveToClass:"translate-y-1 opacity-0"}};return typeof this.transition=="string"?e[this.transition]:this.transition}},methods:{setupPopper(){this.popper?this.updatePosition():this.popper=j(this.$refs.reference,this.$refs.popover,{placement:this.placement})},updatePosition(){this.popper&&this.popper.update()},togglePopover(e){e instanceof Event&&(e=null),e==null&&(e=!this.isOpen),e=!!e,e?this.open():this.close()},open(){this.isOpen=!0,this.$nextTick(()=>this.setupPopper())},close(){this.isOpen=!1},onMouseover(){this.pointerOverTargetOrPopup=!0,this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.trigger==="hover"&&(this.hoverDelay?this.hoverTimer=setTimeout(()=>{this.pointerOverTargetOrPopup&&this.open()},Number(this.hoverDelay)*1e3):this.open())},onMouseleave(e){this.pointerOverTargetOrPopup=!1,this.hoverTimer&&(clearTimeout(this.hoverTimer),this.hoverTimer=null),this.trigger==="hover"&&(this.leaveTimer&&clearTimeout(this.leaveTimer),this.leaveDelay?this.leaveTimer=setTimeout(()=>{this.pointerOverTargetOrPopup||this.close()},Number(this.leaveDelay)*1e3):this.pointerOverTargetOrPopup||this.close())}}},U={ref:"reference"},J={class:"rounded-lg border border-gray-100 bg-white shadow-xl"};function Q(e,o,s,a,i,t){return u(),v("div",U,[p("div",{ref:"target",class:B(["flex",e.$attrs.class]),onClick:o[0]||(o[0]=(...r)=>t.updatePosition&&t.updatePosition(...r)),onFocusin:o[1]||(o[1]=(...r)=>t.updatePosition&&t.updatePosition(...r)),onKeydown:o[2]||(o[2]=(...r)=>t.updatePosition&&t.updatePosition(...r)),onMouseover:o[3]||(o[3]=(...r)=>t.onMouseover&&t.onMouseover(...r)),onMouseleave:o[4]||(o[4]=(...r)=>t.onMouseleave&&t.onMouseleave(...r))},[y(e.$slots,"target",f(g({togglePopover:t.togglePopover,updatePosition:t.updatePosition,open:t.open,close:t.close,isOpen:t.isOpen})))],34),(u(),M(I,{to:"#frappeui-popper-root"},[p("div",{ref:"popover",class:B(["relative z-[100]",[i.popoverContainerClass,s.popoverClass]]),style:N({minWidth:i.targetWidth?i.targetWidth+"px":null}),onMouseover:o[5]||(o[5]=r=>i.pointerOverTargetOrPopup=!0),onMouseleave:o[6]||(o[6]=(...r)=>t.onMouseleave&&t.onMouseleave(...r))},[C(H,f(g(t.popupTransition)),{default:b(()=>[F(p("div",null,[y(e.$slots,"body",f(g({togglePopover:t.togglePopover,updatePosition:t.updatePosition,open:t.open,close:t.close,isOpen:t.isOpen})),()=>[p("div",J,[y(e.$slots,"body-main",f(g({togglePopover:t.togglePopover,updatePosition:t.updatePosition,open:t.open,close:t.close,isOpen:t.isOpen})))])])],512),[[z,t.isOpen]])]),_:3},16)],38)]))],512)}const X=W(K,[["render",Q]]),Y={class:"text-base"},Z={key:0,class:"flex items-center justify-center gap-2 rounded-full bg-white px-2 py-1 shadow-sm"},$=["onClick"],ee={key:1,class:"my-3 max-w-max transform bg-white px-4 sm:px-0"},te={class:"relative max-h-96 overflow-y-auto rounded-lg pb-3 shadow-2xl ring-1 ring-black ring-opacity-5"},oe={class:"flex gap-2 px-3 pb-1 pt-3"},se={class:"flex-1"},ie=p("div",{class:"w-96"},null,-1),re={class:"sticky top-0 bg-white pb-2 pt-3 text-sm text-gray-700"},ne={class:"grid w-96 grid-cols-12 place-items-center"},le=["onClick","title"],pe={__name:"IconPicker",props:{modelValue:{},modelModifiers:{},reaction:{},reactionModifiers:{}},emits:["update:modelValue","update:reaction"],setup(e,{expose:o}){const s=T(""),a=D(e,"modelValue"),i=D(e,"reaction"),t=T(["👍","❤️","😂","😮","😢","🙏"]),r=V(()=>{let n={};for(let l of _){if(s.value&&![l.description,...l.names,...l.tags].join(" ").toLowerCase().includes(s.value.toLowerCase()))continue;let c=n[l.category];c||(n[l.category]=[],c=n[l.category]),c.push(l)}return Object.keys(n).length||(n["No results"]=[]),n});function d(){let n=_.length,l=m(0,n-1);a.value=_[l].emoji}function m(n,l){return Math.floor(Math.random()*(l-n+1)+n)}return o({setRandom:d}),(n,l)=>{const c=E("Button"),S=E("FormControl");return u(),M(X,{transition:"default"},{target:b(({togglePopover:P,isOpen:h})=>[y(n.$slots,"default",f(g({isOpen:h,togglePopover:P})),()=>[p("span",Y,w(e.modelValue||""),1)])]),body:b(({togglePopover:P})=>[i.value?(u(),v("div",Z,[(u(!0),v(x,null,O(t.value,h=>(u(),v("div",{class:"size-5 cursor-pointer rounded-full bg-white text-xl",key:h,onClick:()=>(a.value=h)&&P()},[p("button",null,w(h),1)],8,$))),128)),C(c,{class:"rounded-full",icon:"plus",onClick:l[0]||(l[0]=R(()=>i.value=!1,["stop"]))})])):(u(),v("div",ee,[p("div",te,[p("div",oe,[p("div",se,[C(S,{type:"text",placeholder:"Search by keyword",modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=h=>s.value=h),debounce:300},null,8,["modelValue"])]),C(c,{onClick:d},{default:b(()=>[A("Random")]),_:1})]),ie,(u(!0),v(x,null,O(r.value,(h,L)=>(u(),v("div",{class:"px-3",key:L},[p("div",re,w(L),1),p("div",ne,[(u(!0),v(x,null,O(h,k=>(u(),v("button",{class:"h-8 w-8 rounded-md p-1 text-2xl hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-200",key:k.description,onClick:()=>(a.value=k.emoji)&&P(),title:k.description},w(k.emoji),9,le))),128))])]))),128))])]))]),_:3})}}},de={__name:"FadedScrollableDiv",props:{as:{type:String,default:"div"},maskLength:{type:Number,default:30},orientation:{type:String,default:"vertical"}},setup(e){const o=e,s=T(null),a=T("none"),i=V(()=>o.orientation=="horizontal"?"right":"bottom");function t(){if(!s.value)return;let r=s.value.scrollWidth,d=s.value.clientWidth,m=s.value.scrollHeight,n=s.value.clientHeight,l=s.value.scrollTop,c=s.value.scrollLeft;a.value="none",(i.value=="right"&&r>d||i.value=="bottom"&&m>n)&&(a.value=`linear-gradient(to ${i.value}, transparent, black ${o.maskLength}px, black calc(100% - ${o.maskLength}px), transparent);`),(i.value=="right"&&c-20>d||i.value=="bottom"&&l+n>=m)&&(a.value=`linear-gradient(to ${i.value}, transparent, black ${o.maskLength}px, black 100%, transparent);`),(i.value=="right"&&c==0||i.value=="bottom"&&l==0)&&(a.value=`linear-gradient(to ${i.value}, black calc(100% - ${o.maskLength}px), transparent 100%);`),(i.value=="right"&&d==r||i.value=="bottom"&&n==m)&&(a.value="none")}return G(()=>setTimeout(()=>t(),300)),(r,d)=>(u(),M(q(o.as||"div"),{ref_key:"scrollableDiv",ref:s,style:N(`maskImage: ${a.value}`),onScroll:t},{default:b(()=>[y(r.$slots,"default")]),_:3},40,["style"]))}};export{X as P,de as _,pe as a};
//# sourceMappingURL=FadedScrollableDiv-9ed81c90.js.map