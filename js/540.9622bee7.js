"use strict";(self["webpackChunkvuex001"]=self["webpackChunkvuex001"]||[]).push([[540],{4075:function(e,t,l){l.d(t,{J:function(){return d}});var n=l(3396),a=l(7041),r=l(2370),i=l(4870),o=l(320),s=l(131),u=l(9888);const d=(0,o.a)({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...(0,a.x$)()},setup(e,t){let{attrs:l}=t;const{themeClasses:o}=(0,a.ER)(e),{backgroundColorClasses:d,backgroundColorStyles:c}=(0,r.Y5)((0,i.Vh)(e,"color")),v=(0,n.Fl)((()=>{const t={};return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=(0,s.kb)(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=(0,s.kb)(e.thickness)),t}));return(0,u.L)((()=>(0,n.Wm)("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,d.value],style:[v.value,c.value],"aria-orientation":l.role&&"separator"!==l.role?void 0:e.vertical?"vertical":"horizontal",role:`${l.role||"separator"}`},null))),{}}})},9234:function(e,t,l){l.d(t,{C:function(){return a}});var n=l(1114);const a=(0,n.J)("flex-grow-1","div","VSpacer")},4647:function(e,t,l){l.d(t,{i:function(){return P}});var n=l(3396),a=l(4075),r=l(9242),i=l(836),o=l(8952),s=l(3867),u=l(4960),d=l(1138),c=l(6479),v=l(4870),p=l(320),m=l(3766),f=l(9888),g=l(131);const h=(0,p.a)({name:"VListGroupActivator",setup(e,t){let{slots:l}=t;return(0,c._$)(),()=>{var e;return null==(e=l.default)?void 0:e.call(l)}}}),y=(0,m.U)({activeColor:String,color:String,collapseIcon:{type:u.lE,default:"$collapse"},expandIcon:{type:u.lE,default:"$expand"},prependIcon:u.lE,appendIcon:u.lE,fluid:Boolean,subgroup:Boolean,value:null,...(0,d.Q)()}),b=(0,p.e)()({name:"VListGroup",props:{title:String,...y()},setup(e,t){let{slots:l}=t;const{isOpen:a,open:u}=(0,c.Io)((0,v.Vh)(e,"value"),!0),d=(0,s.sm)(),p=e=>{u(!a.value,e)},m=(0,n.Fl)((()=>({onClick:p,class:"v-list-group__header"}))),g=(0,n.Fl)((()=>a.value?e.collapseIcon:e.expandIcon));return(0,f.L)((()=>{var t;return(0,n.Wm)(e.tag,{class:["v-list-group",{"v-list-group--prepend":null==d?void 0:d.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup}]},{default:()=>[l.activator&&(0,n.Wm)(i.z,{defaults:{VListItem:{active:a.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&g.value,appendIcon:e.appendIcon||!e.subgroup&&g.value,title:e.title,value:e.value}}},{default:()=>[(0,n.Wm)(h,null,{default:()=>[l.activator({props:m.value,isOpen:a})]})]}),(0,n.Wm)(o.Fx,null,{default:()=>[(0,n.wy)((0,n.Wm)("div",{class:"v-list-group__items"},[null==(t=l.default)?void 0:t.call(l)]),[[r.F8,a.value]])]})]})})),{}}});function S(e){return(0,g.ei)(e,Object.keys(b.props))}var C=l(8777),k=l(2370);const x=(0,p.a)({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...(0,d.Q)()},setup(e,t){let{slots:l}=t;const{textColorClasses:a,textColorStyles:r}=(0,k.rY)((0,v.Vh)(e,"color"));return(0,f.L)((()=>{var t;const i=!(!l.default&&!e.title);return(0,n.Wm)(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value],style:{textColorStyles:r}},{default:()=>[i&&(0,n.Wm)("div",{class:"v-list-subheader__text"},[(null==(t=l.default)?void 0:t.call(l))??e.title])]})})),{}}}),W=(0,p.e)()({name:"VListChildren",props:{items:Array},setup(e,t){let{slots:l}=t;return(0,s.$l)(),()=>{var t,r;return(null==(t=l.default)?void 0:t.call(l))??(null==(r=e.items)?void 0:r.map((e=>{let{children:t,props:r,type:i,raw:o}=e;var s,u;if("divider"===i)return(null==(s=l.divider)?void 0:s.call(l,{props:r}))??(0,n.Wm)(a.J,r,null);if("subheader"===i)return(null==(u=l.subheader)?void 0:u.call(l,{props:r}))??(0,n.Wm)(x,r,{default:l.subheader});const d={subtitle:l.subtitle?e=>{var t;return null==(t=l.subtitle)?void 0:t.call(l,{...e,item:o})}:void 0,prepend:l.prepend?e=>{var t;return null==(t=l.prepend)?void 0:t.call(l,{...e,item:o})}:void 0,append:l.append?e=>{var t;return null==(t=l.append)?void 0:t.call(l,{...e,item:o})}:void 0,default:l.default?e=>{var t;return null==(t=l.default)?void 0:t.call(l,{...e,item:o})}:void 0,title:l.title?e=>{var t;return null==(t=l.title)?void 0:t.call(l,{...e,item:o})}:void 0},[c,v]=S(r);return t?(0,n.Wm)(b,(0,n.dG)({value:null==r?void 0:r.value},c),{activator:e=>{let{props:t}=e;return l.header?l.header({...r,...t}):(0,n.Wm)(C.l,(0,n.dG)(r,t),d)},default:()=>(0,n.Wm)(W,{items:t},l)}):l.item?l.item(r):(0,n.Wm)(C.l,r,d)})))}}});var F=l(9793),V=l(9694),I=l(4544),w=l(2465);const A=(0,m.U)({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");var B=l(4231),_=l(7041),H=l(5221),L=l(8434);function $(e,t){const l=(0,g.qF)(t,e.itemType,"item"),n="string"===typeof t?t:(0,g.qF)(t,e.itemTitle),a=(0,g.qF)(t,e.itemValue,void 0),r=(0,g.qF)(t,e.itemChildren),i=!0===e.itemProps?(0,g.ei)(t,["children"])[1]:(0,g.qF)(t,e.itemProps),o={title:n,value:a,...i};return{type:l,title:o.title,value:o.value,props:o,children:"item"===l&&r?J(e,r):void 0,raw:t}}function J(e,t){const l=[];for(const n of t)l.push($(e,n));return l}function M(e){const t=(0,n.Fl)((()=>J(e,e.items)));return{items:t}}const P=(0,p.e)()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...(0,c.Gp)({selectStrategy:"single-leaf",openStrategy:"list"}),...(0,F.m)(),...(0,V.f)(),...(0,I.x)(),...(0,w.c)(),itemType:{type:String,default:"type"},...A(),...(0,B.I)(),...(0,d.Q)(),...(0,_.x$)(),...(0,H.bk)({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,t){let{slots:l}=t;const{items:a}=M(e),{themeClasses:r}=(0,_.ER)(e),{backgroundColorClasses:i,backgroundColorStyles:o}=(0,k.Y5)((0,v.Vh)(e,"bgColor")),{borderClasses:u}=(0,F.P)(e),{densityClasses:d}=(0,V.t)(e),{dimensionStyles:p}=(0,I.$)(e),{elevationClasses:m}=(0,w.Y)(e),{roundedClasses:g}=(0,B.b)(e),{open:h,select:y}=(0,c.Ek)(e),b=(0,n.Fl)((()=>e.lines?`v-list--${e.lines}-line`:void 0)),S=(0,v.Vh)(e,"activeColor"),C=(0,v.Vh)(e,"color");return(0,s.$l)(),(0,L.AF)({VListGroup:{activeColor:S,color:C},VListItem:{activeClass:(0,v.Vh)(e,"activeClass"),activeColor:S,color:C,density:(0,v.Vh)(e,"density"),disabled:(0,v.Vh)(e,"disabled"),lines:(0,v.Vh)(e,"lines"),nav:(0,v.Vh)(e,"nav"),variant:(0,v.Vh)(e,"variant")}}),(0,f.L)((()=>(0,n.Wm)(e.tag,{class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},r.value,i.value,u.value,d.value,m.value,b.value,g.value],style:[o.value,p.value]},{default:()=>[(0,n.Wm)(W,{items:a.value},l)]}))),{open:h,select:y}}})},8777:function(e,t,l){l.d(t,{l:function(){return F}});var n=l(3396),a=l(652),r=l(836),i=l(3289),o=l(1114);const s=(0,o.J)("v-list-item-subtitle"),u=(0,o.J)("v-list-item-title");var d=l(3824),c=l(5221),v=l(4960),p=l(9793),m=l(9694),f=l(4544),g=l(2465),h=l(4231),y=l(6183),b=l(1138),S=l(7041),C=l(3867),k=l(6479),x=l(320),W=l(9888);const F=(0,x.e)()({name:"VListItem",directives:{Ripple:d.H},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:v.lE,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:v.lE,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,...(0,p.m)(),...(0,m.f)(),...(0,f.x)(),...(0,g.c)(),...(0,h.I)(),...(0,y.GN)(),...(0,b.Q)(),...(0,S.x$)(),...(0,c.bk)({variant:"text"})},setup(e,t){let{attrs:l,slots:o}=t;const d=(0,y.nB)(e,l),v=(0,n.Fl)((()=>e.value??d.href.value)),{select:b,isSelected:x,isIndeterminate:F,isGroupActivator:V,root:I,parent:w,openOnSelect:A}=(0,k.Io)(v,!1),B=(0,C.sm)(),_=(0,n.Fl)((()=>{var t;return!1!==e.active&&(e.active||(null==(t=d.isExactActive)?void 0:t.value)||x.value)})),H=(0,n.Fl)((()=>!1!==e.link&&d.isLink.value)),L=(0,n.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||d.isClickable.value||null!=e.value&&!!B))),$=(0,n.Fl)((()=>e.rounded||e.nav)),J=(0,n.Fl)((()=>({color:_.value?e.activeColor??e.color:e.color,variant:e.variant})));(0,n.YP)((()=>{var e;return null==(e=d.isExactActive)?void 0:e.value}),(e=>{e&&null!=w.value&&I.open(w.value,!0),e&&A(e)}),{immediate:!0});const{themeClasses:M}=(0,S.ER)(e),{borderClasses:P}=(0,p.P)(e),{colorClasses:E,colorStyles:G,variantClasses:N}=(0,c.c1)(J),{densityClasses:O}=(0,m.t)(e),{dimensionStyles:q}=(0,f.$)(e),{elevationClasses:T}=(0,g.Y)(e),{roundedClasses:Y}=(0,h.b)($),z=(0,n.Fl)((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),Q=(0,n.Fl)((()=>({isActive:_.value,select:b,isSelected:x.value,isIndeterminate:F.value})));return(0,W.L)((()=>{var t,l,v,p,m;const f=H.value?"a":e.tag,g=!B||x.value||_.value,h=o.title||e.title,y=o.subtitle||e.subtitle,S=!!(o.append||e.appendAvatar||e.appendIcon),C=!!(o.prepend||e.prependAvatar||e.prependIcon);return null==B||B.updateHasPrepend(C),(0,n.wy)((0,n.Wm)(f,{class:["v-list-item",{"v-list-item--active":_.value,"v-list-item--disabled":e.disabled,"v-list-item--link":L.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!C&&(null==B?void 0:B.hasPrepend.value),[`${e.activeClass}`]:_.value},M.value,P.value,g?E.value:void 0,O.value,T.value,z.value,Y.value,N.value],style:[g?G.value:void 0,q.value],href:d.href.value,tabindex:L.value?0:void 0,onClick:L.value&&(t=>{var l;V||(null==(l=d.navigate)||l.call(d,t),null!=e.value&&b(!x.value,t))})},{default:()=>[(0,c.Ux)(L.value||_.value,"v-list-item"),C&&(0,n.Wm)(r.z,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[(0,n.Wm)("div",{class:"v-list-item__prepend"},[e.prependAvatar&&(0,n.Wm)(a.V,{key:"prepend-avatar"},null),e.prependIcon&&(0,n.Wm)(i.t,{key:"prepend-icon"},null),null==(t=o.prepend)?void 0:t.call(o,Q.value)])]}),(0,n.Wm)("div",{class:"v-list-item__content"},[h&&(0,n.Wm)(u,{key:"title"},{default:()=>[(null==(l=o.title)?void 0:l.call(o,{title:e.title}))??e.title]}),y&&(0,n.Wm)(s,{key:"subtitle"},{default:()=>[(null==(v=o.subtitle)?void 0:v.call(o,{subtitle:e.subtitle}))??e.subtitle]}),null==(p=o.default)?void 0:p.call(o,Q.value)]),S&&(0,n.Wm)(r.z,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[(0,n.Wm)("div",{class:"v-list-item__append"},[null==(m=o.append)?void 0:m.call(o,Q.value),e.appendIcon&&(0,n.Wm)(i.t,{key:"append-icon"},null),e.appendAvatar&&(0,n.Wm)(a.V,{key:"append-avatar"},null)])]})]}),[[(0,n.Q2)("ripple"),L.value]])})),{}}})},3867:function(e,t,l){l.d(t,{$l:function(){return i},sm:function(){return o}});var n=l(3396),a=l(4870);Symbol.for("vuetify:depth");const r=Symbol.for("vuetify:list");function i(){const e=(0,n.f3)(r,{hasPrepend:(0,a.iH)(!1),updateHasPrepend:()=>null}),t={hasPrepend:(0,a.iH)(!1),updateHasPrepend:e=>{e&&(t.hasPrepend.value=e)}};return(0,n.JJ)(r,t),e}function o(){return(0,n.f3)(r,null)}},7471:function(e,t,l){l.d(t,{iv:function(){return k},$d:function(){return x},xL:function(){return C}});l(6699);var n=l(3396),a=l(836),r=l(8952),i=l(2718),o=l(5030),s=l(9793),u=l(2465),d=l(4231),c=l(1138),v=l(7041),p=l(8434),m=l(2370),f=l(4870),g=l(3766),h=l(320),y=l(9888),b=l(131);const S=[null,"prominent","default","comfortable","compact"],C=(0,g.U)({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>S.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...(0,s.m)(),...(0,u.c)(),...(0,d.I)(),...(0,c.Q)({tag:"header"}),...(0,v.x$)()},"v-toolbar"),k=(0,h.e)()({name:"VToolbar",props:C(),setup(e,t){var l;let{slots:c}=t;const{backgroundColorClasses:g,backgroundColorStyles:h}=(0,m.Y5)((0,f.Vh)(e,"color")),{borderClasses:S}=(0,s.P)(e),{elevationClasses:C}=(0,u.Y)(e),{roundedClasses:k}=(0,d.b)(e),{themeClasses:x}=(0,v.ER)(e),W=(0,f.iH)(!!(e.extended||null!=(l=c.extension)&&l.call(c))),F=(0,n.Fl)((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),V=(0,n.Fl)((()=>W.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0));return(0,p.AF)({VBtn:{variant:"text"}}),(0,y.L)((()=>{var t,l,s,u,d;const v=!(!e.title&&!c.title),p=!(!c.image&&!e.image),m=null==(t=c.extension)?void 0:t.call(c);return W.value=!(!e.extended&&!m),(0,n.Wm)(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},g.value,S.value,C.value,k.value,x.value],style:[h.value]},{default:()=>[p&&(0,n.Wm)("div",{key:"image",class:"v-toolbar__image"},[(0,n.Wm)(a.z,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[c.image?null==(l=c.image)?void 0:l.call(c):(0,n.Wm)(i.f,null,null)]})]),(0,n.Wm)("div",{class:"v-toolbar__content",style:{height:(0,b.kb)(F.value)}},[c.prepend&&(0,n.Wm)("div",{class:"v-toolbar__prepend"},[null==(s=c.prepend)?void 0:s.call(c)]),v&&(0,n.Wm)(o.q,{key:"title",text:e.title},{text:c.title}),null==(u=c.default)?void 0:u.call(c),c.append&&(0,n.Wm)("div",{class:"v-toolbar__append"},[null==(d=c.append)?void 0:d.call(c)])]),(0,n.Wm)(r.Fx,null,{default:()=>[W.value&&(0,n.Wm)("div",{class:"v-toolbar__extension",style:{height:(0,b.kb)(V.value)}},[m])]})]})})),{contentHeight:F,extensionHeight:V}}});function x(e){return(0,b.ei)(e,Object.keys((null==k?void 0:k.props)??{}))}},5030:function(e,t,l){l.d(t,{q:function(){return o}});var n=l(3396),a=l(1138),r=l(320),i=l(9888);const o=(0,r.e)()({name:"VToolbarTitle",props:{text:String,...(0,a.Q)()},setup(e,t){let{slots:l}=t;return(0,i.L)((()=>{var t;const a=!!(l.default||l.text||e.text);return(0,n.Wm)(e.tag,{class:"v-toolbar-title"},{default:()=>[a&&(0,n.Wm)("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,null==(t=l.default)?void 0:t.call(l)])]})})),{}}})},6479:function(e,t,l){l.d(t,{Gp:function(){return y},Ek:function(){return b},_$:function(){return C},Io:function(){return S}});var n=l(8717),a=l(3766),r=l(7514),i=l(4870),o=l(3396);const s={open:e=>{let{id:t,value:l,opened:n,parents:a}=e;if(l){const e=new Set;e.add(t);let l=a.get(t);while(null!=l)e.add(l),l=a.get(l);return e}return n.delete(t),n},select:()=>null},u={open:e=>{let{id:t,value:l,opened:n,parents:a}=e;if(l){let e=a.get(t);n.add(t);while(null!=e&&e!==t)n.add(e),e=a.get(e);return n}return n.delete(t),n},select:()=>null},d={open:u.open,select:e=>{let{id:t,value:l,opened:n,parents:a}=e;if(!l)return n;const r=[];let i=a.get(t);while(null!=i)r.push(i),i=a.get(i);return new Set(r)}},c=e=>{const t={select:t=>{let{id:l,value:n,selected:a}=t;if(e&&!n){const e=Array.from(a.entries()).reduce(((e,t)=>{let[l,n]=t;return"on"===n?[...e,l]:e}),[]);if(1===e.length&&e[0]===l)return a}return a.set(l,n?"on":"off"),a},in:(e,l,n)=>{let a=new Map;for(const r of e||[])a=t.select({id:r,value:!0,selected:new Map(a),children:l,parents:n});return a},out:e=>{const t=[];for(const[l,n]of e.entries())"on"===n&&t.push(l);return t}};return t},v=e=>{const t=c(e),l={select:e=>{let{selected:l,id:n,...a}=e;const r=l.has(n)?new Map([[n,l.get(n)]]):new Map;return t.select({...a,id:n,selected:r})},in:(e,l,n)=>{let a=new Map;return null!=e&&e.length&&(a=t.in(e.slice(0,1),l,n)),a},out:(e,l,n)=>t.out(e,l,n)};return l},p=e=>{const t=c(e),l={select:e=>{let{id:l,selected:n,children:a,...r}=e;return a.has(l)?n:t.select({id:l,selected:n,children:a,...r})},in:t.in,out:t.out};return l},m=e=>{const t=v(e),l={select:e=>{let{id:l,selected:n,children:a,...r}=e;return a.has(l)?n:t.select({id:l,selected:n,children:a,...r})},in:t.in,out:t.out};return l},f=e=>{const t={select:t=>{let{id:l,value:n,selected:a,children:r,parents:i}=t;const o=new Map(a),s=[l];while(s.length){const e=s.shift();a.set(e,n?"on":"off"),r.has(e)&&s.push(...r.get(e))}let u=i.get(l);while(u){const e=r.get(u),t=e.every((e=>"on"===a.get(e))),l=e.every((e=>!a.has(e)||"off"===a.get(e)));a.set(u,t?"on":l?"off":"indeterminate"),u=i.get(u)}if(e&&!n){const e=Array.from(a.entries()).reduce(((e,t)=>{let[l,n]=t;return"on"===n?[...e,l]:e}),[]);if(0===e.length)return o}return a},in:(e,l,n)=>{let a=new Map;for(const r of e||[])a=t.select({id:r,value:!0,selected:new Map(a),children:l,parents:n});return a},out:(e,t)=>{const l=[];for(const[n,a]of e.entries())"on"!==a||t.has(n)||l.push(n);return l}};return t},g=Symbol.for("vuetify:nested"),h={id:(0,i.iH)(),root:{register:()=>null,unregister:()=>null,parents:(0,i.iH)(new Map),children:(0,i.iH)(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:(0,i.iH)(new Set),selected:(0,i.iH)(new Map),selectedValues:(0,i.iH)([])}},y=(0,a.U)({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),b=e=>{let t=!1;const l=(0,i.iH)(new Map),a=(0,i.iH)(new Map),h=(0,n.z)(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),y=(0,o.Fl)((()=>{if("object"===typeof e.selectStrategy)return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return m(e.mandatory);case"leaf":return p(e.mandatory);case"independent":return c(e.mandatory);case"single-independent":return v(e.mandatory);case"classic":default:return f(e.mandatory)}})),b=(0,o.Fl)((()=>{if("function"===typeof e.openStrategy)return e.openStrategy;switch(e.openStrategy){case"list":return d;case"single":return s;case"multiple":default:return u}})),S=(0,n.z)(e,"selected",e.selected,(e=>y.value.in(e,l.value,a.value)),(e=>y.value.out(e,l.value,a.value)));function C(e){const t=[];let l=e;while(null!=l)t.unshift(l),l=a.value.get(l);return t}(0,o.Jd)((()=>{t=!0}));const k=(0,r.FN)("nested"),x={id:(0,i.iH)(),root:{opened:h,selected:S,selectedValues:(0,o.Fl)((()=>{const e=[];for(const[t,l]of S.value.entries())"on"===l&&e.push(t);return e})),register:(e,t,n)=>{t&&e!==t&&a.value.set(e,t),n&&l.value.set(e,[]),null!=t&&l.value.set(t,[...l.value.get(t)||[],e])},unregister:e=>{if(t)return;l.value.delete(e);const n=a.value.get(e);if(n){const t=l.value.get(n)??[];l.value.set(n,t.filter((t=>t!==e)))}a.value.delete(e),h.value.delete(e)},open:(e,t,n)=>{k.emit("click:open",{id:e,value:t,path:C(e),event:n});const r=b.value.open({id:e,value:t,opened:new Set(h.value),children:l.value,parents:a.value,event:n});r&&(h.value=r)},openOnSelect:(e,t,n)=>{const r=b.value.select({id:e,value:t,selected:new Map(S.value),opened:new Set(h.value),children:l.value,parents:a.value,event:n});r&&(h.value=r)},select:(e,t,n)=>{k.emit("click:select",{id:e,value:t,path:C(e),event:n});const r=y.value.select({id:e,value:t,selected:new Map(S.value),children:l.value,parents:a.value,event:n});r&&(S.value=r),x.root.openOnSelect(e,t,n)},children:l,parents:a}};return(0,o.JJ)(g,x),x.root},S=(e,t)=>{const l=(0,o.f3)(g,h),n=(0,o.Fl)((()=>e.value??(0,r.sq)().toString())),a={...l,id:n,open:(e,t)=>l.root.open(n.value,e,t),openOnSelect:(e,t)=>l.root.openOnSelect(n.value,e,t),isOpen:(0,o.Fl)((()=>l.root.opened.value.has(n.value))),parent:(0,o.Fl)((()=>l.root.parents.value.get(n.value))),select:(e,t)=>l.root.select(n.value,e,t),isSelected:(0,o.Fl)((()=>"on"===l.root.selected.value.get(n.value))),isIndeterminate:(0,o.Fl)((()=>"indeterminate"===l.root.selected.value.get(n.value))),isLeaf:(0,o.Fl)((()=>!l.root.children.value.get(n.value))),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(n.value,l.id.value,t),(0,o.Jd)((()=>{!l.isGroupActivator&&l.root.unregister(n.value)})),t&&(0,o.JJ)(g,a),a},C=()=>{const e=(0,o.f3)(g,h);(0,o.JJ)(g,{...e,isGroupActivator:!0})}}}]);
//# sourceMappingURL=540.9622bee7.js.map