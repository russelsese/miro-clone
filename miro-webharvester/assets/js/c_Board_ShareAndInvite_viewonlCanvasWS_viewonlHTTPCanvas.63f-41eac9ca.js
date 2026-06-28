(self.webpackChunk=self.webpackChunk||[]).push([["548"],{748670(e,o,n){"use strict";n.d(o,{A:()=>s});var A=n(718264),r=n.n(A);function s(){let e=()=>void 0;return o=>(r()(o,e)||(e=o),e)}},757600(e,o,n){"use strict";n.d(o,{M:()=>i});var A=n(562540),r=n(576341),s=n(773016);let t=(0,r.I4)(s.IconArrowUpCircle,{variants:{withHover:{true:{"&:hover":{color:"$icon-primary-hover",cursor:"pointer"}}}}}),i=e=>{let{width:o=16,height:n=16,color:r="gray-300",withHover:s}=e;return(0,A.jsx)(t,{"data-testid":"upgrade-icon","data-icon-component":!0,color:r,withHover:s,css:{width:`${o}px`,height:`${n}px`}})}},706207(e,o,n){"use strict";n.d(o,{F:()=>A});let A={layout:{header:56,footer:64},topPadding:8,bottomPadding:8,button:44,toolRow:44,separator:11,input:52,tabs:49,signUpBlock:175,gap:8,permanentMessage:45}},143410(e,o,n){"use strict";n.d(o,{n:()=>s});var A=n(432858),r=n.n(A);function s(e,o){return function(n,A,s){s.value=r()(s.value,e,o)}}},240398(e,o,n){"use strict";n.d(o,{S9:()=>u,Cc:()=>m,Ko:()=>B});var A=n(568164),r=n.n(A),s=n(562540),t=n(63696),i=n(471633),a=n.n(i),l=n(829443),c=n.n(l);let{pulse:p}=c(),u=t.memo(e=>{let{width:o=35,height:n=35,className:A,outerSize:r=12,borderRadius:t="circle",animationDuration:i,animationScaleChange:l,innerOpacity:u=.2,outerOpacity:C=.09,top:E,left:d}=e,B=null!=i?`${i}s`:void 0;return(0,s.jsxs)("div",{className:a()(p,c()[`pulse--radius-${t}`],A,{[c()["pulse--animation-scale-change-small"]]:"small"===l}),style:{width:o,height:n,animationDuration:B,top:E,left:d,bottom:E?"auto":void 0,right:d?"auto":void 0},children:[(0,s.jsx)("div",{className:c().pulse__inner,style:{opacity:u}}),(0,s.jsx)("div",{className:c().pulse__outer,style:{fontSize:r,opacity:C,animationDuration:B}})]})});var C=n(723527),E=n.n(C);let d={extraSmall:24,small:36,medium:40,large:44},B=e=>{let{size:o="large",outerSize:n=6}=e,A=d[o];return(0,s.jsx)(u,{width:A,height:A,outerSize:n,className:E().cursorPulse,...e})},{buttonPulseAnimation:m}=r()},291969(e,o,n){"use strict";n.d(o,{L:()=>r});var A=n(63696);class r extends A.Component{shouldComponentUpdate(e){let{onTapOut:o,children:n}=this.props;return e.onTapOut,n!==e.children}attachListeners(){window.addEventListener("touchend",this.onInput,!0),window.addEventListener("click",this.onInput,!0),window.addEventListener("keyup",this.onInput,!0)}detachListeners(){window.removeEventListener("touchend",this.onInput,!0),window.removeEventListener("click",this.onInput,!0),window.addEventListener("keyup",this.onInput,!0)}render(){let{children:e}=this.props;return A.cloneElement(A.Children.only(e),{ref:this.onElementRef})}constructor(...e){super(...e),this.element=null,this.onInput=e=>{let{onTapOut:o}=this.props;null===this.element||null===e.target||this.element.contains(e.target)||o(e)},this.onElementRef=e=>{this.element=e,null!==e?this.attachListeners():this.detachListeners();let{children:o}=this.props,n=(A.Children.only(o)??{}).ref??{};n instanceof Function?n(e):"current"in n&&(n.current=e)}}}},676854(e,o,n){"use strict";n.d(o,{K:()=>r});var A=n(506061);let r={isLocked:function(e){return!!e&&(e.lockedByAccountExpired||e.lockedByUsersPerBoardLimitExceeded||e.lockedByUsersPerAccountLimitExceeded||e.lockedByBoardsPerAccountLimitExceeded||e.lockedByActiveBoardsPerAccountLimitExceeded)},getLockedReason:function(e){return e?e.lockedByAccountExpired?A.b.ACCOUNT_EXPIRED:e.lockedByUsersPerBoardLimitExceeded||e.lockedByUsersPerAccountLimitExceeded||e.lockedByBoardsPerAccountLimitExceeded?A.b.ACCOUNT_LIMITS_EXCEEDED:e.lockedByActiveBoardsPerAccountLimitExceeded?A.b.ACCOUNT_ACTIVE_BOARD_LIMIT_EXCEEDED:null:null}}},506061(e,o,n){"use strict";n.d(o,{b:()=>r});var A,r=((A={})[A.ACCOUNT_EXPIRED=0]="ACCOUNT_EXPIRED",A[A.ACCOUNT_LIMITS_EXCEEDED=1]="ACCOUNT_LIMITS_EXCEEDED",A[A.ACCOUNT_ACTIVE_BOARD_LIMIT_EXCEEDED=2]="ACCOUNT_ACTIVE_BOARD_LIMIT_EXCEEDED",A)},865116(e,o,n){"use strict";n.d(o,{P:()=>l.P,v:()=>p});var A=n(562540),r=n(63696),s=n(471633),t=n.n(s),i=n(550829),a=n.n(i),l=n(644992);let{tag:c}=a(),p=r.forwardRef((e,o)=>{let{type:n=l.P.YELLOW,className:r,children:s,...i}=e;return(0,A.jsx)("span",{className:t()(c,function(e){switch(e){case l.P.YELLOW:return"tag_yellow";case l.P.LIGHT_YELLOW:return"tag_lightYellow";case l.P.BLUE:return"tag_blue";case l.P.LIGHT_BLUE:return"tag_lightBlue";case l.P.GRAY:return"tag_gray";case l.P.LIGHT_GRAY:return"tag_lightGray";case l.P.INDIGO:return"tag_indigo";default:throw Error(`expected TagType, received ${e}`)}}(n),r),ref:o,...i,children:s})})},644992(e,o,n){"use strict";n.d(o,{P:()=>r});var A,r=((A={}).YELLOW="yellow",A.LIGHT_YELLOW="lightYellow",A.BLUE="blue",A.LIGHT_BLUE="lightBlue",A.GRAY="gray",A.LIGHT_GRAY="lightGray",A.INDIGO="indigo",A)},331276(e,o,n){"use strict";n.d(o,{$3:()=>c,EG:()=>i,HN:()=>l,Jx:()=>p,SM:()=>t,UR:()=>r,lj:()=>s,n1:()=>a,sJ:()=>A});let A=246,r=200,s="ui-tip",t="ui-tip__close",i=4,a=44,l=8,c=48,p=8},608764(e,o,n){"use strict";n.d(o,{D:()=>r});var A,r=((A={})[A.BUTTON=0]="BUTTON",A[A.CROSS=1]="CROSS",A[A.OUTSIDE=2]="OUTSIDE",A[A.CUSTOM=3]="CUSTOM",A[A.EXTERNAL_PRIMARY_ACTION=4]="EXTERNAL_PRIMARY_ACTION",A)},156173(e,o,n){"use strict";n.d(o,{i:()=>A});let A="[UI_TIP]"},649667(e,o,n){"use strict";n.d(o,{Ck:()=>C,G7:()=>p,I:()=>r,PA:()=>i,UD:()=>a,X:()=>t,iV:()=>c,os:()=>l,te:()=>u,y7:()=>s});var A=n(156173);let r={UPDATE_QUEUE:`${A.i} UPDATE QUEUE`,CONTENT_INIT:`${A.i} CONTENT INIT`,CONTENT_DESTROY:`${A.i} CONTENT DESTROY`,CLEAR_AND_SHOW_NEXT:`${A.i} CLEAR AND SHOW NEXT`,CLEAR_ACTIVE_TIP_REF:`${A.i} CLEAR_ACTIVE_TIP_REF`,SET_HIDE_TIMEOUT_ID:`${A.i} SET HIDE TIMEOUT`,CLICK:`${A.i} CLICK`,ON_RERENDER:`${A.i} ON RERENDER`,PRIORITIZE:`${A.i} PRIORITIZE`},s=e=>({type:r.UPDATE_QUEUE,payload:e}),t=e=>({type:r.CONTENT_INIT,payload:e}),i=e=>({type:r.CONTENT_DESTROY,payload:e}),a=e=>({type:r.PRIORITIZE,payload:e}),l=()=>({type:r.CLEAR_AND_SHOW_NEXT}),c=()=>({type:r.CLEAR_ACTIVE_TIP_REF}),p=e=>({type:r.SET_HIDE_TIMEOUT_ID,payload:e}),u=e=>({type:r.CLICK,payload:e}),C=e=>({type:r.ON_RERENDER,payload:e})},304986(e,o,n){"use strict";n.d(o,{Iy:()=>i,QA:()=>l,XU:()=>r,bi:()=>t,o0:()=>c,tb:()=>s,xI:()=>a});var A=n(156173);let r={ADD_TO_QUEUE_UI_TIP:`${A.i} ADD TO QUEUE`,CLOSE_UI_TIP:`${A.i} CLOSE`,CANCEL_SHOWING_UI_TIP:`${A.i} CANCEL SHOWING`,RECALCULATE_POSITION_UI_TIP:`${A.i} RECALCULATE POSITION`,CANCEL_ALL_UI_TIPS:`${A.i} CANCEL ALL UI TIPS`,FORCE_SHOW_UI_TIP:`${A.i} FORCE SHOW UI TIP`},s=e=>({type:r.ADD_TO_QUEUE_UI_TIP,payload:e}),t=e=>({type:r.FORCE_SHOW_UI_TIP,payload:e}),i=e=>({type:r.CLOSE_UI_TIP,payload:e}),a=e=>({type:r.CANCEL_SHOWING_UI_TIP,payload:e}),l=()=>({type:r.CANCEL_ALL_UI_TIPS}),c=()=>({type:r.RECALCULATE_POSITION_UI_TIP})},623111(e,o,n){"use strict";n.d(o,{j:()=>l});var A=n(562540),r=n(63696),s=n(178325),t=n(515351),i=n(526931),a=n(945649);let l=e=>{let{children:o,content:n,id:l,options:c,shouldShow:p=!0}=e,[u,C]=(0,a.N)(l,n,p),E=(0,t.zv)(o)||Array.isArray(o)||"string"==typeof o||"number"==typeof o||"boolean"==typeof o||null==o?(0,A.jsx)("div",{children:o}):o,d=(0,i.useElementRefCallback)(E,C);return(0,A.jsxs)(A.Fragment,{children:[r.cloneElement(E,{ref:d}),c?.toContainer?(0,s.createPortal)(u,c.toContainer):u]})}},945649(e,o,n){"use strict";n.d(o,{N:()=>L});var A=n(63696),r=n(156569),s=n(377735),t=n(562540),i=n(701079),a=n(471633),l=n.n(a),c=n(331276),p=n(240398),u=n(714528);let{tipPointer:C}=n.n(u)(),E={primary:"tipPointer_primary",secondary:"tipPointer_secondary"},d=e=>{let{direction:o,appearance:n,radius:r,stickLength:s,offset:i,isPulsing:a}=e,c=0,u=0,d="",B=0,m=0,h=r+1,x=2*r+1+s,g=2*h;switch(o){case"top":c=g,u=x,d=`M ${h} ${u} V ${2*r}`,B=h,m=h;break;case"right":c=x,u=g,d=`M 0 ${h} H ${s}`,B=s+r,m=h;break;case"bottom":c=g,u=x,d=`M ${h} ${s} V 0`,B=h,m=s+r;break;default:c=x,u=g,d=`M ${h} ${h} H ${c}`,B=h,m=h}let[f,F]=(0,A.useState)(),y=(0,A.useRef)(null);(0,A.useEffect)(()=>{let e=y.current?.querySelector("[data-id=pointer-circle]");if(!y.current||!e)return;let{x:o,y:n}=y.current.getBoundingClientRect(),{x:A,y:r}=e.getBoundingClientRect();F({x:o-A-h,y:n-r-h})},[h,o]);let v=i?`translate(${i.x}px, ${i.y}px)`:void 0,z="secondary"===n?"var(--colors-gray-550)":"currentColor";return(0,t.jsxs)("div",{className:l()(C,E[n]),style:{width:c,height:u,transform:v},ref:y,"aria-hidden":!0,children:[(0,t.jsxs)("svg",{width:c,height:u,children:[(0,t.jsx)("path",{d:d,stroke:z,fill:"none",strokeWidth:3}),(0,t.jsx)("circle",{r:r,cx:B,cy:m,fill:"currentColor",stroke:z,strokeWidth:"2",paintOrder:"stroke","data-id":"pointer-circle"}),(0,t.jsx)("path",{d:d,stroke:"currentColor",fill:"none"})]}),a&&f&&(0,t.jsx)("div",{className:"pulseContainer",style:{transform:`translate(calc(-50% - ${f.x}px), calc(-50% - ${f.y}px))`},children:(0,t.jsx)(p.S9,{height:24,width:24,outerSize:8})})]})};var B=n(291969),m=n(965045),h=n(576341),x=n(252578),g=n(773016),f=n(387651),F=n(682175),y=n.n(F);let v=e=>{let{text:o,onClick:n,dataTestid:r,eventHandler:s,className:i="rtb-btn--primary"}=e;return(0,t.jsx)("div",{className:"uiTipContent__buttons",children:(0,t.jsx)(m.M,{hmTap:(0,A.useCallback)(()=>{s("buttonClick"),n?.()},[n,s]),children:(0,t.jsx)("button",{type:"button",className:l()("rtb-btn","rtb-btn--small",i),"data-testid":r,children:o})})})};var z=n(865116),b=n(319408);let k=e=>{let{title:o,icon:n,tag:A}=e;return o||n||A?(0,t.jsxs)(t.Fragment,{children:[!!A&&(0,t.jsx)(z.v,{className:"uiTipContent__tag",type:A.type,children:A.text}),(0,t.jsxs)("div",{className:"uiTipContent__header",children:[!!n&&(0,t.jsx)("div",{className:"uiTipContent__headerIcon","aria-hidden":"true",style:{width:n.width,height:n.height},children:(0,t.jsx)(b.A,{href:n.icon})}),!!o&&(0,t.jsx)("div",{className:"uiTipContent__title",id:"uiTip-title",children:o})]})]}):null},_=e=>{let{body:o,dynamicContent:n}=e,A=o?.icon,r=o?.content;return(0,t.jsxs)("div",{className:"uiTipContent__body",children:[!!A&&(0,t.jsx)("div",{className:"uiTipContent__bodyIcon","aria-hidden":"true",style:{width:A.width,height:A.height},children:(0,t.jsx)(b.A,{style:{width:A.width,height:A.height},href:A.icon})}),r&&(0,t.jsx)("div",{className:"uiTipContent__bodyContent",children:r}),n&&(0,t.jsx)("div",{className:"uiTipContent__bodyContent",children:n})]})},D=e=>{let{total:o,current:n}=e;return(0,t.jsxs)("div",{className:"uiTipContent__steps",children:[n,"/",o]})},T=(0,h.I4)(x.K,{"&&":{position:"absolute",top:"$100",right:"$100",zIndex:1},variants:{theme:{dark:{"&&":{color:"$gray-50","&:hover, &[data-hovered]":{backgroundColor:"$gray-700"},"&:active, &:focus":{backgroundColor:"$gray-650"}}},white:{}}}}),{uiTipContent:w}=y(),I=e=>e.stopPropagation(),P=e=>{let{eventHandler:o,theme:n,onClose:r,header:s,body:i,button:a,width:p,hideCloseButton:u,closeByClickOut:C,customContent:E,dynamicContent:d,steps:h,a11y:x}=e,F=(0,A.useCallback)(()=>{o("closeClick"),r?.()},[r,o]),y=(0,A.useCallback)(()=>{!0===C&&(o("outsideClick"),r?.())},[r,o,C]),z=!0!==u;return(0,t.jsx)(B.L,{onTapOut:y,children:(0,t.jsxs)("div",{"data-testid":c.lj,className:l()(w,{uiTipContentWithClose:z&&!E},{uiTipContent_dark:"dark"===n},{uiTipContent_customContent:E}),style:{width:p},role:"dialog","aria-labelledby":"uiTip-title","aria-hidden":"true",onClick:I,children:[z&&(0,t.jsx)(m.M,{hmTap:F,children:(0,t.jsx)(T,{variant:"ghost",theme:n,size:"medium","data-testid":c.SM,"aria-label":"",...x?.closeButton,children:(0,t.jsx)(g.IconCross,{})})}),!!s&&(0,t.jsx)(k,{title:s.title,tag:s.tag,icon:s.icon}),(0,t.jsx)(_,{body:i,dynamicContent:d}),(0,t.jsxs)(f.s,{align:"center",justify:"between",children:[!!a&&(0,t.jsx)(v,{text:a.text,onClick:a.onClick,eventHandler:o,dataTestid:a.dataTestid,className:a.className}),!!h&&(0,t.jsx)(D,{current:h.current,total:h.total})]})]})})},O={top:"uiTipPopupContainer_animationTop",right:"uiTipPopupContainer_animationRight",bottom:"uiTipPopupContainer_animationBottom",left:"uiTipPopupContainer_animationLeft","bottom-start":"uiTipPopupContainer_animationBottom","bottom-end":"uiTipPopupContainer_animationBottom",auto:"uiTipPopupContainer_animationAuto"};var R=n(608764),S=n(649667);function L(e,o){let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],{elementIntersectionVisibility:{delay:a,threshold:p}={}}=o,u=(0,r.wA)(),C=(0,r.d4)(o=>(0,s.ip)(o,e)),E=(0,r.d4)(e=>(0,s.Ss)(e)),B=(0,r.d4)(e=>(0,s.CB)(e)),[m,h]=(0,A.useState)(null),[x,g]=(0,A.useState)(()=>!a),f=(0,A.useCallback)(o=>{switch(o){case"buttonClick":u((0,S.te)({id:e,source:R.D.BUTTON}));break;case"closeClick":u((0,S.te)({id:e,source:R.D.CROSS}));break;case"outsideClick":u((0,S.te)({id:e,source:R.D.OUTSIDE}))}},[u,e]);(0,A.useLayoutEffect)(()=>{let e;if(!m||!C||!p)return;let o=new IntersectionObserver(o=>{let n=o[0];n?.isIntersecting?e=setTimeout(()=>{g(!0)},a):g(!1)},{threshold:p});return o.observe(m),()=>{o.disconnect(),clearTimeout(e)}},[C,m,a,p]);let[F,v]=function(e){let{isVisible:o=!0,toBody:n=!0,referenceElement:r,placement:s,withoutAnimation:a,theme:p="white",onClose:u,header:C,body:E,button:B,steps:m,eventHandler:h,width:x=c.sJ,distance:g=0,hideCloseButton:f,closeByClickOut:F=!1,arrowOffset:v,zIndexLayer:z,customContent:b=!1,dynamicContent:k,isPulsing:_,a11y:D,isPositionFixed:T=!0,hideArrow:w=!1}=e,I=(0,A.useCallback)(e=>(0,t.jsx)(d,{direction:function(e){switch(e){case"top":return"bottom";case"left":return"right";case"bottom":case"bottom-start":case"bottom-end":return"top";default:return"left"}}(e),appearance:"dark"===p?"secondary":"primary",radius:c.EG,stickLength:c.n1,offset:v,isPulsing:_}),[p,v,_]),R=(0,t.jsx)(P,{width:x,theme:p,onClose:u,header:C,body:E,dynamicContent:k,button:B,steps:m,eventHandler:h,hideCloseButton:f,closeByClickOut:F,customContent:b,a11y:D});return(0,i.O)({isVisible:o,referenceElement:r,placement:s,className:l()(y().uiTipPopupContainer,{[y().uiTipPopupContainerWhenInsideModal]:"modal"===z,[y().uiTipPopupContainerUnderToolbarUILayer]:"underToolbar"===z||"underToolbarV2"===z,[y().uiTipPopupContainerSettingsNavigationUILayer]:"settingsNavigation"===z,[y().uiTipPopupContainerUnderBottomToolbar]:"underBottomToolbar"===z}),arrow:{isEnabled:!w,content:I,className:y().uiTipPointerContainer,padding:8},animation:{isEnabled:!a,classNames:O[s],timeout:c.UR},modifiers:{distance:c.n1+c.EG+g,preventOverflowPadding:"underToolbar"===z?c.HN+c.$3+c.Jx:c.HN},toBody:n,isPositionFixed:T,children:R})}({referenceElement:m,placement:o.placement,withoutAnimation:o.withoutAnimation,width:o.width,theme:o.theme,onClose:o.onClose,header:o.header,body:o.body,dynamicContent:E,button:o.button,steps:o.steps,distance:o.distance,toBody:o.toBody,isVisible:C&&x&&n,eventHandler:f,hideCloseButton:o.hideCloseButton,closeByClickOut:o.closeByClickOut,arrowOffset:o.arrowOffset,zIndexLayer:o.zIndexLayer,customContent:o.customContent,isPulsing:o.isPulsing,...B});return(0,A.useLayoutEffect)(()=>{C&&null!=v&&u((0,S.Ck)({id:e,updateFunc:v}))},[u,v,C,e]),(0,A.useEffect)(()=>null!=m?(u((0,S.X)(e)),()=>{u((0,S.PA)(e))}):()=>{},[u,e,m]),[F,h,m,C]}},377735(e,o,n){"use strict";n.d(o,{CB:()=>t,Ss:()=>s,UO:()=>r,ip:()=>A});let A=(e,o)=>e.app.uiTip.activeTipId===o,r=(e,o)=>!!e.app.uiTip.tipsQueue.find(e=>e.id===o),s=e=>e.app.uiTip.activeTip?.bodyContent,t=e=>e.app.uiTip.activeTip?.dynamicParams},453167(e,o,n){"use strict";let A;function r(e,o){return o&&"0"!==o?`${e}@${o}`:e}function s(e){return null!=e&&(""===e.trim()||["null","undefined"].includes(e.trim().toLowerCase()))}n.d(o,{li:()=>O,iE:()=>I,n6:()=>P,es:()=>D,u4:()=>w,J4:()=>R,gV:()=>T});var t=n(767135),i=n(960798),a=n(379636);let l=1;function c(e){return{library:{group:"client",name:e.library,version:e.version},page:e.app.getStatContextPage(e),userAgent:e.app.getUserAgent()}}function p(e,o){return{anonymousId:o?(A||(A=(0,i.A)()),A):e.anonymousId,userId:o?void 0:e.userId}}function u(e){let o=a.U.None;return e&a.U.OnlyForWorker&&(o|=a.U.OnlyForWorker),o}function C(e,o,n,A,r,s){let t=s||{};A&a.U.NoCommonParams||(t=e.app.addCommonStatParams(t,n));let i=p(e,!!(A&a.U.Anonymous));return{context:c(e),timestamp:r,event:n,properties:t,anonymousId:i.anonymousId,userId:i.userId}}function E(e,o,n){if(e.worker)e.worker.postMessage(n);else if(o&a.U.OnlyForWorker)e.app.sendError(Error("Should send only via worker, but no worker found"),{statHandler:e,params:n});else switch(n.event){case"track":t.u4(n.payload,e.app.sendError);break;case"trackBatch":t.iE(n.payload,!1,e.app.sendError);break;default:e.app.sendError(Error("Unknown event"),n)}}function d(e,o,n,A){if(o.tracks.length){let r={apiKey:n,sentAt:new Date,apiHost:e.apiHost,tracks:[...o.tracks]};E(e,o.flags,{event:"trackBatch",payload:r}),A?.(r.tracks,e),o.tracks.length=0}}function B(e,o,n,A,t){!o||s(n)?e.app.sendError(Error(`Invalid userId: ${n}, anonymousId: ${o}`),{anonymousId:o,userId:n,source:A}):(e.anonymousId=o,e.userId=n?r(n,t):n)}function m(e,o,n,A,r,s=a.U.None,t){if(!function(e,o,n){if(!(n&a.U.OnlyFirstSession)||e.isFirstSession){let A=!0;if(n&a.U.OnceInSession&&(A=!e.onceInSessionSentEvents.has(o))&&e.onceInSessionSentEvents.add(o),A)return!0}return!1}(e,n,s))return;let i=!!(s&a.U.SendInBatch)||"batch"===e.defaultMode,l=!!(s&a.U.SendImmediately),B=i&&!l;if(B&&!e.batches,e.batches&&B){let i=C(e,o,n,s,A,r),a=e.batches.buckets.get(o);a||(a=new Map,e.batches.buckets.set(o,a));let l=u(s),c=a.get(l);c||(c={tracks:[],flags:l,flushAt:e.batches.flushAt},a.set(l,c)),c.tracks.length>=c.flushAt&&d(e,c,o,t),c.tracks.push(i)}else{let i,l,u=(i=r||{},s&a.U.NoCommonParams||(i=e.app.addCommonStatParams(i,n)),l=p(e,!!(s&a.U.Anonymous)),{apiKey:o,apiHost:e.apiHost,context:c(e),timestamp:A,event:n,properties:i,anonymousId:l.anonymousId,userId:l.userId,sentAt:new Date});E(e,s,{event:"track",payload:u}),t?.([u],e)}}function h(e,o,n,A){if(o.tracks.length){let r={apiKey:n,apiHost:e.apiHost,sentAt:new Date,tracks:[...o.tracks]};t.wV(r,e.app.sendError),A?.(o.tracks,e),o.tracks.length=0}}function x(){return navigator.userAgent}function g(){return{referrer:document.referrer,inIframe:function(){try{return window.self!==window.top}catch(e){return!0}}()}}var f=n(322137);let F="ajs_anonymous_id",y="ajs_user_id",v={expires:365,path:"/",secure:!0,sameSite:"None"};function z(e){if("localhost"!==e&&!/^(?!-)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/.test(e))throw Error(`Invalid domain: ${e}`);let o=e.split(".");if(o.length<=2)return`.${e}`;let n=o.slice(-2).join(".");return`.${n}`}function b(e){e?f.A.set(y,`"${e}"`,{...v,domain:z(window.location.hostname)}):f.A.remove(y)}let k={handlers:[],sinks:new Set,workerCreationIsInProgress:!1,worker:void 0,workerDiedTimes:0};function _(e,o){for(let n of k.sinks)n(e,o)}function D(e){return k.sinks.add(e),function(){k.sinks.delete(e)}}function T(e,o,n,A){!function(e,o,n,A){if(!n)return e.app.sendError(Error("Invalid setUser: userId is required"));let{workspaceId:r,userId:s,anonymousId:t}=e.app.getStoredUserIds(),a=t||(0,i.A)();(s!==n||r!==A)&&(s&&(a=(0,i.A)()),e.app.storeUserIds({userId:n,anonymousId:a},A),(a!==e.anonymousId&&e.anonymousId||n!==e.userId&&e.userId)&&m(e,o,"user_identifiers_changed",new Date,{previous_anonymous_id:e.anonymousId,previous_user_id:e.userId,new_anonymous_id:a,new_user_id:n})),B(e,a,n,"setUser",A)}(e,o,n,A)}function w(e,o,n,A,r,s){m(e,o,n,A,r,s,_)}function I(e,o,n,A){!function(e,o,n,A=a.U.None,r){let s=[];n.forEach(n=>{let r=C(e,o,n.event,A,n.timestamp||new Date,n.properties);r&&s.push(r)}),d(e,{tracks:s,flags:u(A),flushAt:s.length},o,r)}(e,o,n,A,_)}function P(e,o=!1){!function(e,o=!1,n){let A=o?h:d;e.batches&&e.batches.buckets.forEach((o,r)=>{o.forEach(o=>{A(e,o,r,n)})})}(e,o,_)}function O(e){var o,A;let t,a,c,p,u,C=(o={apiHost:e.apiHost,library:e.library,version:e.version,batches:e.batches,defaultMode:e.defaultMode,app:{getStoredUserIds:()=>{let o=function(){let e,o,n,A=((o=f.A.get(F))&&(o=o.replace(/"/g,"")),o),r=((n=f.A.get(y))&&(n=n.replace(/"/g,"")),n);if(r){let o=r.split("@");r=o[0],e=o[1]||void 0}return"null"===r&&(r=void 0),"undefined"===r&&(r=void 0),{userId:r,anonymousId:A,workspaceId:e}}();return s(o.userId)&&e.sendError(Error(`Trying to get userId as ${o.userId} string`),{}),o},storeUserIds:(o,n)=>{var A;return s(o.userId)&&e.sendError(Error(`Trying to set userId as ${o.userId} string`),{userId:o.userId}),void(A=o.anonymousId,f.A.set(F,A?`"${A}"`:A,{...v,domain:z(window.location.hostname)}),o.userId?b(r(o.userId,n)):b(o.userId))},addCommonStatParams:(o,n)=>e.addCommonStatParams(o,n),getStatContextPage:g,getUserAgent:x,sendError:e.sendError}},t={__statId:l+=1,apiHost:o.apiHost,library:o.library,version:o.version,anonymousId:"",userId:void 0,app:o.app,isFirstSession:!1,onceInSessionSentEvents:new Set,worker:void 0,defaultMode:o.defaultMode||"immediate",batches:void 0,flushBatchesIntervalId:void 0},o.batches&&(t.batches={buckets:new Map,flushAt:o.batches.flushAt}),(a=t.app.getStoredUserIds()).anonymousId&&""!==a.anonymousId||(a.anonymousId=(0,i.A)(),t.app.storeUserIds(a)),B(t,a.anonymousId,a.userId,"initialization",void 0),t);return A=e.sendError,p=window.location.hostname,(u=document.cookie.split(";").map(e=>e.trim()).filter(e=>e.startsWith(`${F}=`))).forEach(e=>{let o=e.split("=")[1];if(o){let e=decodeURIComponent(o).replace(/"/g,"");(null==e||/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(e))&&null!=e&&(c=e)}}),c||(c=(0,i.A)()),u.length>1&&A(Error(`Found more than 1 ${F} cookie, ${u.length}`),{matchingAnonCookies:u}),f.A.remove(F),f.A.remove(F,{domain:`.${p}`}),f.A.set(F,`"${c}"`,{...v,domain:z(p)}),e.worker&&window.Worker&&function e(o,A){if(!o.worker&&!o.workerCreationIsInProgress&&A.worker){if(o.workerCreationIsInProgress=!0,o.workerDiedTimes>5&&(A.sendError(Error("Worker dies too often"),{count:o.workerDiedTimes,state:o,options:A}),o.workerDiedTimes>10))return;let r=(n,r)=>{if(o.workerDiedTimes+=1,n){let e="string"==typeof(r=r||"Unknown")?r:function(e){let o;try{o=`Message: ${e.message}. Filename: ${e.filename}. Colno: ${e.colno}. Rowno: ${e.lineno}. Error: ${String(e.error)}`}catch(e){o=`Failed to create message: ${e?.message}`}return o}(r),o=Error(n);A.sendError(o,e)}e(o,A)},s=()=>new Promise((e,s)=>{let t=A.getWorker?A.getWorker():new Worker(new URL("/app/static/"+n.u("96612"),n.b)),i=setTimeout(()=>s(Error("timeout")),1e4),a=e=>{t.terminate(),s(e)};t.addEventListener("message",n=>{if(n.data?.type==="error"&&A.sendError(n.data?.error,n.data?.extra),"ready"===n.data){var s;clearTimeout(i),t.removeEventListener("error",a),t.addEventListener("error",e=>{t.terminate(),o.handlers.forEach(e=>{e.worker=void 0}),o.worker=void 0,r("Worker died",e)});let n=(s=A.sendError,{postMessage:e=>{switch(e.event){case"track":{let o=e.payload.properties?.bufferData;o?.transferables?t.postMessage(e,o.transferables):t.postMessage(e)}break;case"trackBatch":{let o=[];e.payload.tracks.forEach(e=>{let n=e.properties?.bufferData;n?.transferables&&(o=o.concat(n.transferables))});try{t.postMessage(e,o)}catch(n){s(Error(`DataCloneError for eventType: ${e.event} `),{events:e.payload.tracks.map(e=>e.event),properties:e.payload.tracks.map(e=>e.properties),transferables:o})}}break;default:t.postMessage(e)}}});o.handlers.forEach(e=>{e.worker=n}),o.worker=t,o.workerCreationIsInProgress=!1,e()}}),t.addEventListener("error",a);let l=()=>{t.postMessage({event:"networkStatus",isOnline:navigator.onLine})};window.addEventListener("online",l),window.addEventListener("offline",l),l()});(A.retryPromise?A.retryPromise(s,{maxTries:5,retryTimeout:3e3,increaseTimeoutFactor:1,maxRetryTimeout:5e3,logErrorsToConsole:!0,waitUntilOnline:!0}):s()).catch(()=>{r()})}}(k,e),e.batches?.flushInterval&&(C.flushBatchesIntervalId=window.setInterval(()=>{P(C)},e.batches.flushInterval)),k.handlers.push(C),C}function R(e){clearInterval(e.flushBatchesIntervalId),e.flushBatchesIntervalId=void 0}},916137(e,o,n){"use strict";n.d(o,{J:()=>t,f:()=>s});var A=n(162172);async function r(e,o,n,r){let s=n,t=e=>new Promise(o=>setTimeout(o,e));for(let n=1;n<=o;n++)try{return await (0,A.qu)(),await e()}catch(e){if(n===o)return Promise.reject(e);await t(s),s*=r}}class s extends Error{constructor(e,o){super(e),this.name="FetchError",this.response=o}}async function t(e,o,n={maxRetries:1,retryTimeout:1e3,increaseTimeoutFactor:1.5}){if(n.maxRetries<1)throw Error("maxRetries must be greater than 0");if(n?.retryTimeout<100)throw Error("retryTimeout must be greater than 100");return r(async()=>{let n=await fetch(e,o);if(!n.ok)throw new s(`Fetch failed with status: ${n.status}`,n);return n},n.maxRetries,n.retryTimeout,n.increaseTimeoutFactor)}},466731(e,o,n){"use strict";n.d(o,{Z:()=>r});let A={Uint32Array,Int32Array,Float32Array};function r(e){if(!e||!e.bufferData)return e||{};let{bufferData:o,...n}=e;return o.items.forEach(e=>{let o=function(e){let o=A[e.type];if(o)return Array.from(new o(e.buffer))}(e);o&&(n[e.name]=o)}),n}},767135(e,o,n){"use strict";n.d(o,{iE:()=>E,u4:()=>u,wV:()=>d});var A=n(960798),r=n(466731),s=n(916137);let t="u">typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;function i(e,o,n){if(t)postMessage({type:"error",error:e,extra:o});else if(n)n(e,o);else{let o=Error(`Stats lib, not from worker: ${e.message}`);throw o.stack=e.stack,o}}async function a(e,o,n,A){let r;if(e.name=`${o} ${e.name}`,r=e.message.toLowerCase(),["cancelled","отменено","annul\xe9","abgebrochen","annullato","cancelado","скасовано","đ\xe3 hủy","已取消","キャンセルしました","anulowane","dibatalkan","geannuleerd"].some(e=>r.includes(e.toLowerCase())))console.error(e);else if(e.message.includes("NetworkError"))console.error(e);else if(e.name.includes("AbortError"))console.error(e);else if(e.name.includes("blocked by content blocker"))console.error(e);else if(e instanceof s.f){let o=e.response.statusText,r=await e.response.text();if(r.toLowerCase().includes("blocked by")||o.toLowerCase().includes("blocked by"))return void console.error(e);let s={message:e.message,name:e.name,stack:e.stack,tags:{fetchStatusText:o,fetchStatus:e.response.status},...n,...e.response&&{status:e.response.status,statusText:e.response.statusText,responseText:r,responseUrl:e.response.url}};i(e,s,A)}else i(e,n,A)}function l(e){let o=(0,A.A)();return{anonymousId:e.anonymousId,context:{library:{group:"client",name:e.context.library.name,version:e.context.library.version},page:{inIframe:e.context.page.inIframe,referrer:e.context.page.referrer},userAgent:e.context.userAgent},messageId:`ajs-${o.replace(/-/g,"")}`,timestamp:e.timestamp,userId:e.userId||void 0}}function c(e){return null!==e&&"object"==typeof e&&"batch"in e}let p=async(e,o,n=!1,A="track",r)=>{let{method:t="POST",headers:i={},body:l}=o,p=l?JSON.stringify(l):void 0,u=c(l)?l.batch.length:void 0,C=!(void 0!==u&&u>10);try{await (0,s.J)(e,{method:t,headers:i,keepalive:C,body:p},{maxRetries:2,retryTimeout:1e3,increaseTimeoutFactor:1.5})}catch(d){let s,E=d instanceof Error?d:Error(JSON.stringify(d));s=c(o.body)?o.body.batch[0]?.context.library.name:o.body.context.library.name,await a(E,A,{url:e,method:t,headers:i,batchLength:u,payload:p,params:o,tags:{fallbackFromBeacon:n,keepalive:C,payloadSizeInBytes:new TextEncoder().encode(JSON.stringify(l)).length,libraryName:s}},r)}};async function u(e,o){return p(`${e.apiHost}/t`,{headers:{"Content-Type":"text/plain"},body:function(e,o,n){let A={...l(e),event:e.event,properties:e.properties,type:"track",sentAt:e.sentAt,writeKey:o};try{A.properties=(0,r.Z)(e.properties)}catch(e){i(e instanceof Error?e:Error(JSON.stringify(e)),{},n)}return e.timestamp>e.sentAt&&(A.sentAt=e.timestamp),A}(e,e.apiKey,o)},!1,"track",o)}function C(e,o){let n=`${e.apiHost}/import`,{sentAt:A}=e,{batch:s,maxTimestamp:t}=e.tracks.reduce((e,n)=>{let A=function(e,o){let n={...l(e),event:e.event,properties:e.properties,type:"track"};try{n.properties=(0,r.Z)(e.properties)}catch(e){i(e instanceof Error?e:Error(JSON.stringify(e)),{},o)}return n}(n,o);return e.batch.push(A),e.maxTimestamp=Math.max(e.maxTimestamp,n.timestamp.getTime()),e},{batch:[],maxTimestamp:-1/0}),a=new Date(t);return a>e.sentAt&&(A=a),{url:n,body:{batch:s,sentAt:A,writeKey:e.apiKey}}}async function E(e,o=!1,n){let{url:A,body:r}=C(e,n);await p(A,{headers:{"Content-Type":"application/json"},body:r},o,"trackBatch",n)}function d(e,o){try{let n="u">typeof window?window:"u">typeof self?self:null,{url:A,body:r}=C(e,o);if(!n)return i(Error("No globalObject"),{params:e},o),E(e,!0,o);if(!n.navigator)return i(Error("No navigator"),{params:e},o),E(e,!0,o);if(!n.navigator.sendBeacon||!n.navigator.sendBeacon(A,JSON.stringify(r)))return E(e,!0,o);return Promise.resolve()}catch(n){return i(n instanceof Error?n:Error(JSON.stringify(n)),{params:e},o),E(e,!0,o)}}},162172(e,o,n){"use strict";let A;n.d(o,{qu:()=>i});let r="u">typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,{getState:s,setState:t}=(A={isOnline:!0},{getState:()=>A,setState:e=>{A={...A,...e}}});r?self.addEventListener("message",e=>{e.data&&"networkStatus"===e.data.event&&t({isOnline:e.data.isOnline})}):(window.addEventListener("online",()=>{t({isOnline:!0})}),window.addEventListener("offline",()=>{t({isOnline:!1})}));let i=()=>new Promise(e=>{if(s().isOnline)e(!0);else{let o=setInterval(()=>{s().isOnline&&(clearInterval(o),e(!0))},1e3)}})},734952(e,o,n){"use strict";n.d(o,{A:()=>i});var A=n(334942),r=n.n(A),s=n(260278),t=n.n(s)()(r());t.push([e.id,`/**
 * DO NOT MODIFY THIS FILE: This file was generated by Style Dictionary
 */
:root {
  --colors-alpha-black-100: #0000001A;
  --colors-alpha-black-200: #00000033;
  --colors-alpha-black-300: #0000004D;
  --colors-alpha-black-400: #00000066;
  --colors-alpha-black-50: #0000000D;
  --colors-alpha-black-500: #00000080;
  --colors-alpha-black-600: #00000099;
  --colors-alpha-black-700: #000000B3;
  --colors-alpha-black-800: #000000CC;
  --colors-alpha-black-900: #000000E6;
  --colors-alpha-gray-100: #656B811A;
  --colors-alpha-gray-200: #656B8133;
  --colors-alpha-gray-300: #656B814D;
  --colors-alpha-gray-400: #656B8166;
  --colors-alpha-gray-50: #656B810D;
  --colors-alpha-gray-500: #656B8180;
  --colors-alpha-gray-600: #656B8199;
  --colors-alpha-gray-700: #656B81B3;
  --colors-alpha-gray-800: #656B81CC;
  --colors-alpha-gray-900: #656B81E6;
  --colors-alpha-white-100: #FFFFFF1A;
  --colors-alpha-white-200: #FFFFFF33;
  --colors-alpha-white-300: #FFFFFF4D;
  --colors-alpha-white-400: #FFFFFF66;
  --colors-alpha-white-50: #FFFFFF0D;
  --colors-alpha-white-500: #FFFFFF80;
  --colors-alpha-white-600: #FFFFFF99;
  --colors-alpha-white-700: #FFFFFFB3;
  --colors-alpha-white-800: #FFFFFFCC;
  --colors-alpha-white-90: #FFFFFFE6;
  --colors-black: #1C1C1E;
  --colors-miro-yellow: #FFDD33;
  --colors-transparent: #FFFFFF00;
  --colors-white: #FFFFFF;
  --colors-blue-100: #F2F4FC;
  --colors-blue-150: #E8ECFC;
  --colors-blue-200: #D9DFFC;
  --colors-blue-250: #C7D0FD;
  --colors-blue-300: #B1BDFD;
  --colors-blue-350: #97A8FE;
  --colors-blue-400: #7A90FE;
  --colors-blue-450: #5B76FE;
  --colors-blue-50: #F7F8FC;
  --colors-blue-500: #3859FF;
  --colors-blue-550: #314CD9;
  --colors-blue-600: #2A41B6;
  --colors-blue-650: #243797;
  --colors-blue-700: #1E2D7B;
  --colors-blue-750: #192563;
  --colors-blue-800: #151F4E;
  --colors-blue-850: #12193E;
  --colors-blue-900: #101633;
  --colors-blue-950: #0F142E;
  --colors-cloud-100: #F4F4F1;
  --colors-cloud-1000: #050402;
  --colors-cloud-150: #EEEEEB;
  --colors-cloud-200: #E7E7E5;
  --colors-cloud-250: #DEDEDC;
  --colors-cloud-300: #D5D5D2;
  --colors-cloud-350: #BDBCB8;
  --colors-cloud-400: #A4A39E;
  --colors-cloud-425: #969590;
  --colors-cloud-450: #8C8B85;
  --colors-cloud-475: #807F79;
  --colors-cloud-50: #FBFAF7;
  --colors-cloud-500: #73726C;
  --colors-cloud-550: #64635D;
  --colors-cloud-600: #55544E;
  --colors-cloud-650: #4C4B44;
  --colors-cloud-700: #42413A;
  --colors-cloud-750: #36352F;
  --colors-cloud-800: #2A2923;
  --colors-cloud-850: #22211B;
  --colors-cloud-900: #191812;
  --colors-cloud-950: #0D0C07;
  --colors-coal-100: #F7F7F7;
  --colors-coal-150: #EDEDED;
  --colors-coal-200: #E7E7E7;
  --colors-coal-250: #E0E0E0;
  --colors-coal-300: #DAD8D8;
  --colors-coal-350: #D6D6D6;
  --colors-coal-400: #CFCFCF;
  --colors-coal-450: #C2C2C2;
  --colors-coal-500: #B0B0B0;
  --colors-coal-550: #9E9E9E;
  --colors-coal-600: #908E8E;
  --colors-coal-650: #888888;
  --colors-coal-700: #595959;
  --colors-coal-750: #545454;
  --colors-coal-800: #4B4B4B;
  --colors-coal-850: #414141;
  --colors-coal-900: #333333;
  --colors-coral-100: #FCE2E2;
  --colors-coral-150: #FFD7D7;
  --colors-coral-200: #FFC6C6;
  --colors-coral-250: #FFBDBD;
  --colors-coral-300: #FFB4B4;
  --colors-coral-350: #FFADAD;
  --colors-coral-400: #FF9E9E;
  --colors-coral-450: #FD9090;
  --colors-coral-500: #FF6464;
  --colors-coral-550: #EF5959;
  --colors-coral-600: #DB4F4F;
  --colors-coral-650: #C52C2C;
  --colors-coral-700: #BD0A0A;
  --colors-coral-750: #AA0606;
  --colors-coral-800: #8D0101;
  --colors-coral-850: #710101;
  --colors-coral-900: #600000;
  --colors-cyan-100: #E4F9FF;
  --colors-cyan-150: #DAF7FF;
  --colors-cyan-200: #CCF4FF;
  --colors-cyan-250: #C0F1FF;
  --colors-cyan-300: #B5ECFF;
  --colors-cyan-350: #A8E9FF;
  --colors-cyan-400: #9CE6FF;
  --colors-cyan-450: #8ADFFC;
  --colors-cyan-500: #68D3F8;
  --colors-cyan-550: #59C4E9;
  --colors-cyan-600: #0E9DCD;
  --colors-cyan-650: #049BCD;
  --colors-cyan-700: #0F8AB3;
  --colors-cyan-750: #0A789D;
  --colors-cyan-800: #005875;
  --colors-cyan-850: #024B63;
  --colors-cyan-900: #003E57;
  --colors-gray-100: #F1F2F5;
  --colors-gray-150: #E9EAEF;
  --colors-gray-200: #E0E2E8;
  --colors-gray-250: #D8DAE2;
  --colors-gray-300: #C7CAD5;
  --colors-gray-350: #AEB2C0;
  --colors-gray-400: #959AAC;
  --colors-gray-450: #7D8297;
  --colors-gray-475: #6F7489;
  --colors-gray-50: #FAFAFC;
  --colors-gray-500: #646B81;
  --colors-gray-550: #5D6376;
  --colors-gray-600: #555A6A;
  --colors-gray-650: #4D515F;
  --colors-gray-700: #454854;
  --colors-gray-750: #3C3F49;
  --colors-gray-800: #34363E;
  --colors-gray-850: #2B2D33;
  --colors-gray-900: #222428;
  --colors-gray-950: #1A1B1E;
  --colors-green-100: #EAF6E6;
  --colors-green-150: #DFF1DA;
  --colors-green-200: #CEE9C8;
  --colors-green-250: #BADEB1;
  --colors-green-300: #A1D295;
  --colors-green-350: #85C476;
  --colors-green-400: #65B452;
  --colors-green-450: #42A22B;
  --colors-green-50: #EFF9EC;
  --colors-green-500: #1C8F00;
  --colors-green-550: #1A7B02;
  --colors-green-600: #186904;
  --colors-green-650: #175906;
  --colors-green-700: #154B08;
  --colors-green-750: #143E09;
  --colors-green-800: #13340A;
  --colors-green-850: #122B0B;
  --colors-green-900: #11260C;
  --colors-green-950: #11230C;
  --colors-ink-250: #D6D6D4;
  --colors-ink-100: #F1F1EF;
  --colors-ink-1000: #070705;
  --colors-ink-150: #E9E9E7;
  --colors-ink-200: #E0E0DE;
  --colors-ink-300: #CBCBC9;
  --colors-ink-350: #B8B8B6;
  --colors-ink-400: #A1A19F;
  --colors-ink-425: #959593;
  --colors-ink-450: #888886;
  --colors-ink-475: #7C7C7A;
  --colors-ink-50: #F9F9F7;
  --colors-ink-500: #6F6F6D;
  --colors-ink-550: #5E5E5C;
  --colors-ink-600: #4E4E4C;
  --colors-ink-650: #424240;
  --colors-ink-700: #373735;
  --colors-ink-750: #2D2D2B;
  --colors-ink-800: #232321;
  --colors-ink-850: #1B1B19;
  --colors-ink-900: #141412;
  --colors-ink-950: #0D0D0B;
  --colors-lilac-100: #EFEDFD;
  --colors-lilac-150: #EAE7FF;
  --colors-lilac-200: #DEDAFF;
  --colors-lilac-250: #CBC6FF;
  --colors-lilac-300: #BBB4FF;
  --colors-lilac-350: #B5A9FF;
  --colors-lilac-400: #B8ACFB;
  --colors-lilac-450: #9288EF;
  --colors-lilac-500: #8F7FEE;
  --colors-lilac-550: #8A72EB;
  --colors-lilac-600: #8167E5;
  --colors-lilac-650: #7C59DF;
  --colors-lilac-700: #6631D7;
  --colors-lilac-750: #5526B7;
  --colors-lilac-800: #461F98;
  --colors-lilac-850: #361777;
  --colors-lilac-900: #20084F;
  --colors-lime-100: #F1FECF;
  --colors-lime-150: #E2FBBD;
  --colors-lime-200: #DBFAAD;
  --colors-lime-250: #D1F09F;
  --colors-lime-300: #C6EF88;
  --colors-lime-350: #C2EB7F;
  --colors-lime-400: #B3E65F;
  --colors-lime-450: #A7DB5D;
  --colors-lime-500: #9ED452;
  --colors-lime-550: #97CD4B;
  --colors-lime-600: #89BA42;
  --colors-lime-650: #759F38;
  --colors-lime-700: #608521;
  --colors-lime-750: #486614;
  --colors-lime-800: #365318;
  --colors-lime-850: #2D4713;
  --colors-lime-900: #21370B;
  --colors-moss-100: #E3F7EA;
  --colors-moss-150: #C4FFD9;
  --colors-moss-200: #ADF0C7;
  --colors-moss-250: #9FF1BD;
  --colors-moss-300: #8AE9A8;
  --colors-moss-350: #79E49B;
  --colors-moss-400: #6AE08D;
  --colors-moss-450: #5DD581;
  --colors-moss-500: #2DC75C;
  --colors-moss-550: #24BC51;
  --colors-moss-600: #0FA83C;
  --colors-moss-650: #069330;
  --colors-moss-700: #067429;
  --colors-moss-750: #066625;
  --colors-moss-800: #0A5B23;
  --colors-moss-850: #0A491E;
  --colors-moss-900: #02400F;
  --colors-ocean-100: #E5F0FF;
  --colors-ocean-150: #D8E9FF;
  --colors-ocean-200: #C6DCFF;
  --colors-ocean-250: #B2D0FE;
  --colors-ocean-300: #A7C9FC;
  --colors-ocean-350: #A0C4FB;
  --colors-ocean-400: #86B4F9;
  --colors-ocean-450: #6DA4F6;
  --colors-ocean-500: #659DF2;
  --colors-ocean-550: #6297E6;
  --colors-ocean-600: #5688D3;
  --colors-ocean-650: #4978C0;
  --colors-ocean-700: #305BAB;
  --colors-ocean-750: #2C56A2;
  --colors-ocean-800: #1D4792;
  --colors-ocean-850: #113B87;
  --colors-ocean-900: #001D66;
  --colors-orange-100: #FFEEDE;
  --colors-orange-150: #FFE5CB;
  --colors-orange-200: #F8D3AF;
  --colors-orange-250: #FBCB9B;
  --colors-orange-300: #FFC795;
  --colors-orange-350: #FFBD83;
  --colors-orange-400: #FFB575;
  --colors-orange-450: #FFA95E;
  --colors-orange-500: #FE9F4D;
  --colors-orange-550: #FE953A;
  --colors-orange-600: #DA792B;
  --colors-orange-650: #D76F1A;
  --colors-orange-700: #9B4A08;
  --colors-orange-750: #9B4A08;
  --colors-orange-800: #843D03;
  --colors-orange-850: #6C3100;
  --colors-orange-900: #5C2000;
  --colors-pink-100: #FEF2FF;
  --colors-pink-150: #FFE3FC;
  --colors-pink-200: #FFD8F4;
  --colors-pink-250: #FFD2F2;
  --colors-pink-300: #FBBEEA;
  --colors-pink-350: #FFABEC;
  --colors-pink-400: #FD9AE7;
  --colors-pink-450: #F985DE;
  --colors-pink-500: #F17DE5;
  --colors-pink-550: #ED72E0;
  --colors-pink-600: #D55AC8;
  --colors-pink-650: #C851C3;
  --colors-pink-700: #AF3FB9;
  --colors-pink-750: #A334AC;
  --colors-pink-800: #8B1796;
  --colors-pink-850: #72157A;
  --colors-pink-900: #55055C;
  --colors-red-100: #FDF2F3;
  --colors-red-150: #FBE6E8;
  --colors-red-200: #F8D5D8;
  --colors-red-250: #F4BFC5;
  --colors-red-300: #F0A5AD;
  --colors-red-350: #EB8792;
  --colors-red-400: #E56673;
  --colors-red-450: #DF4051;
  --colors-red-50: #FEF7F8;
  --colors-red-500: #D8182C;
  --colors-red-550: #B91829;
  --colors-red-600: #9C1825;
  --colors-red-650: #821823;
  --colors-red-700: #6B1720;
  --colors-red-750: #57171E;
  --colors-red-800: #46171C;
  --colors-red-850: #38171A;
  --colors-red-900: #2F1719;
  --colors-red-950: #2B1719;
  --colors-sunshine-100: #FFFDE5;
  --colors-sunshine-150: #FFF7CA;
  --colors-sunshine-200: #FFF6B6;
  --colors-sunshine-250: #FFF79E;
  --colors-sunshine-300: #FFF09A;
  --colors-sunshine-350: #FFED7B;
  --colors-sunshine-400: #FFE86D;
  --colors-sunshine-450: #F9E05C;
  --colors-sunshine-500: #FFDC4A;
  --colors-sunshine-550: #F9D53D;
  --colors-sunshine-600: #E8C120;
  --colors-sunshine-650: #BA8A12;
  --colors-sunshine-700: #AF7E04;
  --colors-sunshine-750: #8E6A12;
  --colors-sunshine-800: #6E4F02;
  --colors-sunshine-850: #604400;
  --colors-sunshine-900: #503A03;
  --colors-teal-100: #E1FBF9;
  --colors-teal-150: #D7FFFC;
  --colors-teal-200: #C3FAF5;
  --colors-teal-250: #B6FAF4;
  --colors-teal-300: #A8F7F0;
  --colors-teal-350: #96F0E8;
  --colors-teal-400: #81E7DE;
  --colors-teal-450: #55D6CA;
  --colors-teal-500: #39C9BC;
  --colors-teal-550: #25B6A9;
  --colors-teal-600: #11A293;
  --colors-teal-650: #0A9285;
  --colors-teal-700: #187574;
  --colors-teal-750: #146A69;
  --colors-teal-800: #105A59;
  --colors-teal-850: #0A4949;
  --colors-teal-900: #0E4343;
  --colors-yellow-100: #FFF9E3;
  --colors-yellow-150: #FFF7D9;
  --colors-yellow-200: #FFF4CB;
  --colors-yellow-250: #FFEFB9;
  --colors-yellow-300: #FFEBA3;
  --colors-yellow-350: #FFE58B;
  --colors-yellow-400: #FFDF6F;
  --colors-yellow-450: #FFD850;
  --colors-yellow-50: #FFFAE7;
  --colors-yellow-500: #FFD02F;
  --colors-yellow-550: #D7B029;
  --colors-yellow-600: #B39223;
  --colors-yellow-650: #91771E;
  --colors-yellow-700: #746019;
  --colors-yellow-750: #5A4B15;
  --colors-yellow-800: #453911;
  --colors-yellow-850: #342C0F;
  --colors-yellow-900: #28220D;
  --colors-yellow-950: #231E0C;
  --radii-0: 0px;
  --radii-25: 2px;
  --radii-50: 4px;
  --radii-75: 6px;
  --radii-100: 8px;
  --radii-150: 12px;
  --radii-200: 16px;
  --radii-250: 20px;
  --radii-300: 24px;
  --radii-400: 32px;
  --radii-500: 40px;
  --radii-600: 48px;
  --radii-round: 999px;
  --space-0: 0px;
  --space-25: 2px;
  --space-50: 4px;
  --space-100: 8px;
  --space-150: 12px;
  --space-200: 16px;
  --space-300: 24px;
  --space-350: 28px;
  --space-400: 32px;
  --space-500: 40px;
  --space-600: 48px;
  --space-700: 56px;
  --space-800: 64px;
  --space-1200: 96px;
  --space-1600: 128px;
  --space-2000: 192px;
  --fonts-body: Noto Sans, OpenSans, Noto Sans KR, Noto Sans JP, sans-serif;
  --fonts-heading: Roobert PRO, Roobert, Noto Sans KR, Noto Sans JP, sans-serif;
  --font-size-125: 0.625rem;
  --font-size-150: 0.75rem;
  --font-size-175: 0.875rem;
  --font-size-200: 1rem;
  --font-size-250: 1.25rem;
  --font-size-300: 1.5rem;
  --font-size-350: 1.75rem;
  --font-size-400: 2rem;
  --font-size-500: 2.5rem;
  --font-size-600: 3rem;
  --font-size-700: 3.5rem;
  --font-size-800: 4rem;
  --font-size-900: 4.5rem;
  --font-size-1000: 5rem;
  --font-size-1100: 5.5rem;
  --font-size-1200: 6rem;
  --font-size-1300: 6.5rem;
  --font-size-1400: 7rem;
  --font-size-1500: 7.5rem;
  --font-size-1600: 8.5rem;
  --line-height-100: 1;
  --line-height-200: 1.2;
  --line-height-300: 1.35;
  --line-height-400: 1.4;
  --line-height-500: 1.5;
  --border-widths-none: 0;
  --border-widths-sm: 1px;
  --border-widths-md: 2px;
  --border-widths-lg: 4px;
  --font-weights-regular: 400;
  --font-weights-semibold: 600;
  --sizes-1: 4px;
  --sizes-2: 8px;
  --sizes-3: 12px;
  --sizes-4: 16px;
  --sizes-5: 20px;
  --sizes-6: 24px;
  --sizes-7: 28px;
  --sizes-8: 32px;
  --sizes-9: 36px;
  --sizes-10: 40px;
  --sizes-11: 44px;
  --sizes-12: 48px;
  --sizes-13: 52px;
  --sizes-14: 56px;
  --sizes-15: 60px;
  --sizes-16: 64px;
  --sizes-17: 68px;
  --sizes-18: 72px;
  --sizes-19: 76px;
  --sizes-20: 80px;
  --sizes-21: 84px;
  --sizes-22: 88px;
  --sizes-23: 92px;
  --sizes-24: 96px;
  --sizes-25: 100px;
  --sizes-26: 104px;
  --sizes-27: 108px;
  --sizes-28: 112px;
  --sizes-29: 116px;
  --sizes-30: 120px;
  --sizes-31: 124px;
  --sizes-32: 128px;
  --sizes-33: 132px;
  --sizes-34: 136px;
  --sizes-35: 140px;
  --sizes-36: 144px;
  --sizes-37: 148px;
  --sizes-38: 152px;
  --sizes-39: 156px;
  --sizes-40: 160px;
  --sizes-41: 164px;
  --sizes-42: 168px;
  --sizes-43: 172px;
  --sizes-44: 176px;
  --sizes-45: 180px;
  --sizes-46: 184px;
  --sizes-47: 188px;
  --sizes-48: 192px;
  --sizes-49: 196px;
  --sizes-50: 200px;
  --sizes-51: 204px;
  --sizes-52: 208px;
  --sizes-53: 212px;
  --sizes-54: 216px;
  --sizes-55: 220px;
  --sizes-56: 224px;
  --sizes-57: 228px;
  --sizes-58: 232px;
  --sizes-59: 236px;
  --sizes-60: 240px;
  --sizes-61: 244px;
  --sizes-62: 248px;
  --sizes-63: 252px;
  --sizes-64: 256px;
  --sizes-65: 260px;
  --sizes-66: 264px;
  --sizes-67: 268px;
  --sizes-68: 272px;
  --sizes-69: 276px;
  --sizes-70: 280px;
  --sizes-71: 284px;
  --sizes-72: 288px;
  --sizes-73: 292px;
  --sizes-74: 296px;
  --sizes-75: 300px;
  --sizes-76: 304px;
  --sizes-77: 308px;
  --sizes-78: 312px;
  --sizes-79: 316px;
  --sizes-80: 320px;
  --sizes-81: 324px;
  --sizes-82: 328px;
  --sizes-83: 332px;
  --sizes-84: 336px;
  --sizes-85: 340px;
  --sizes-86: 344px;
  --sizes-87: 348px;
  --sizes-88: 352px;
  --sizes-89: 356px;
  --sizes-90: 360px;
  --sizes-91: 364px;
  --sizes-92: 368px;
  --sizes-93: 372px;
  --sizes-94: 376px;
  --sizes-95: 380px;
  --sizes-96: 384px;
  --sizes-97: 388px;
  --sizes-98: 392px;
  --sizes-99: 396px;
  --sizes-100: 400px;
  --sizes-101: 404px;
  --sizes-102: 408px;
  --sizes-103: 412px;
  --sizes-104: 416px;
  --sizes-105: 420px;
  --sizes-106: 424px;
  --sizes-107: 428px;
  --sizes-108: 432px;
  --sizes-109: 436px;
  --sizes-110: 440px;
  --sizes-111: 444px;
  --sizes-112: 448px;
  --sizes-113: 452px;
  --sizes-114: 456px;
  --sizes-115: 460px;
  --sizes-116: 464px;
  --sizes-117: 468px;
  --sizes-118: 472px;
  --sizes-119: 476px;
  --sizes-120: 480px;
  --sizes-121: 484px;
  --sizes-122: 488px;
  --sizes-123: 492px;
  --sizes-124: 496px;
  --sizes-125: 500px;
  --sizes-126: 504px;
  --sizes-127: 508px;
  --sizes-128: 512px;
  --sizes-129: 516px;
  --sizes-130: 520px;
  --sizes-131: 524px;
  --sizes-132: 528px;
  --sizes-133: 532px;
  --sizes-134: 536px;
  --sizes-135: 540px;
  --sizes-136: 544px;
  --sizes-137: 548px;
  --sizes-138: 552px;
  --sizes-139: 556px;
  --sizes-140: 560px;
  --sizes-141: 564px;
  --sizes-142: 568px;
  --sizes-143: 572px;
  --sizes-144: 576px;
  --sizes-145: 580px;
  --sizes-146: 584px;
  --sizes-147: 588px;
  --sizes-148: 592px;
  --sizes-149: 596px;
  --sizes-150: 600px;
  --sizes-151: 604px;
  --sizes-152: 608px;
  --sizes-153: 612px;
  --sizes-154: 616px;
  --sizes-155: 620px;
  --sizes-156: 624px;
  --sizes-157: 628px;
  --sizes-158: 632px;
  --sizes-159: 636px;
  --sizes-160: 640px;
  --sizes-161: 644px;
  --sizes-162: 648px;
  --sizes-163: 652px;
  --sizes-164: 656px;
  --sizes-165: 660px;
  --sizes-166: 664px;
  --sizes-167: 668px;
  --sizes-168: 672px;
  --sizes-169: 676px;
  --sizes-170: 680px;
  --sizes-171: 684px;
  --sizes-172: 688px;
  --sizes-173: 692px;
  --sizes-174: 696px;
  --sizes-175: 700px;
  --sizes-176: 704px;
  --sizes-177: 708px;
  --sizes-178: 712px;
  --sizes-179: 716px;
  --sizes-180: 720px;
  --sizes-181: 724px;
  --sizes-182: 728px;
  --sizes-183: 732px;
  --sizes-184: 736px;
  --sizes-185: 740px;
  --sizes-186: 744px;
  --sizes-187: 748px;
  --sizes-188: 752px;
  --sizes-189: 756px;
  --sizes-190: 760px;
  --sizes-191: 764px;
  --sizes-192: 768px;
  --sizes-193: 772px;
  --sizes-194: 776px;
  --sizes-195: 780px;
  --sizes-196: 784px;
  --sizes-197: 788px;
  --sizes-198: 792px;
  --sizes-199: 796px;
  --sizes-200: 800px;
  --sizes-icon-200: 16px;
  --sizes-icon-300: 24px;
  --sizes-icon-400: 32px;
  --stroke-widths-thin: 1.5px;
  --stroke-widths-normal: 2px;
  --stroke-widths-bold: 4px;
  --z-indices-dropdown-menu: 100;
  --z-indices-select: 200;
  --z-indices-calendar: 200;
  --z-indices-popover: 300;
  --z-indices-tooltip: 400;
}
`,"",{version:3,sources:["webpack://./../node_modules/@mirohq/design-tokens/tokens.css"],names:[],mappings:"AAAA;;EAEE;AAEF;EACE,mCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EACA,kCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kCAAA;EACA,kCAAA;EACA,kCAAA;EACA,iCAAA;EACA,kCAAA;EACA,kCAAA;EACA,kCAAA;EACA,kCAAA;EACA,kCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EACA,kCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EACA,mCAAA;EACA,kCAAA;EACA,uBAAA;EACA,6BAAA;EACA,+BAAA;EACA,uBAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,yBAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,2BAAA;EACA,4BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,0BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,yBAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,0BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,yBAAA;EACA,yBAAA;EACA,0BAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,wBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,2BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,wBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,yBAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,8BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,0BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,2BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,4BAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;EACA,yEAAA;EACA,6EAAA;EACA,yBAAA;EACA,wBAAA;EACA,yBAAA;EACA,qBAAA;EACA,wBAAA;EACA,uBAAA;EACA,wBAAA;EACA,qBAAA;EACA,uBAAA;EACA,qBAAA;EACA,uBAAA;EACA,qBAAA;EACA,uBAAA;EACA,sBAAA;EACA,wBAAA;EACA,sBAAA;EACA,wBAAA;EACA,sBAAA;EACA,wBAAA;EACA,wBAAA;EACA,oBAAA;EACA,sBAAA;EACA,uBAAA;EACA,sBAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,uBAAA;EACA,uBAAA;EACA,2BAAA;EACA,4BAAA;EACA,cAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,sBAAA;EACA,2BAAA;EACA,2BAAA;EACA,yBAAA;EACA,8BAAA;EACA,uBAAA;EACA,yBAAA;EACA,wBAAA;EACA,wBAAA;AAAF",sourcesContent:["/**\n * DO NOT MODIFY THIS FILE: This file was generated by Style Dictionary\n */\n\n:root {\n  --colors-alpha-black-100: #0000001A;\n  --colors-alpha-black-200: #00000033;\n  --colors-alpha-black-300: #0000004D;\n  --colors-alpha-black-400: #00000066;\n  --colors-alpha-black-50: #0000000D;\n  --colors-alpha-black-500: #00000080;\n  --colors-alpha-black-600: #00000099;\n  --colors-alpha-black-700: #000000B3;\n  --colors-alpha-black-800: #000000CC;\n  --colors-alpha-black-900: #000000E6;\n  --colors-alpha-gray-100: #656B811A;\n  --colors-alpha-gray-200: #656B8133;\n  --colors-alpha-gray-300: #656B814D;\n  --colors-alpha-gray-400: #656B8166;\n  --colors-alpha-gray-50: #656B810D;\n  --colors-alpha-gray-500: #656B8180;\n  --colors-alpha-gray-600: #656B8199;\n  --colors-alpha-gray-700: #656B81B3;\n  --colors-alpha-gray-800: #656B81CC;\n  --colors-alpha-gray-900: #656B81E6;\n  --colors-alpha-white-100: #FFFFFF1A;\n  --colors-alpha-white-200: #FFFFFF33;\n  --colors-alpha-white-300: #FFFFFF4D;\n  --colors-alpha-white-400: #FFFFFF66;\n  --colors-alpha-white-50: #FFFFFF0D;\n  --colors-alpha-white-500: #FFFFFF80;\n  --colors-alpha-white-600: #FFFFFF99;\n  --colors-alpha-white-700: #FFFFFFB3;\n  --colors-alpha-white-800: #FFFFFFCC;\n  --colors-alpha-white-90: #FFFFFFE6;\n  --colors-black: #1C1C1E;\n  --colors-miro-yellow: #FFDD33;\n  --colors-transparent: #FFFFFF00;\n  --colors-white: #FFFFFF;\n  --colors-blue-100: #F2F4FC;\n  --colors-blue-150: #E8ECFC;\n  --colors-blue-200: #D9DFFC;\n  --colors-blue-250: #C7D0FD;\n  --colors-blue-300: #B1BDFD;\n  --colors-blue-350: #97A8FE;\n  --colors-blue-400: #7A90FE;\n  --colors-blue-450: #5B76FE;\n  --colors-blue-50: #F7F8FC;\n  --colors-blue-500: #3859FF;\n  --colors-blue-550: #314CD9;\n  --colors-blue-600: #2A41B6;\n  --colors-blue-650: #243797;\n  --colors-blue-700: #1E2D7B;\n  --colors-blue-750: #192563;\n  --colors-blue-800: #151F4E;\n  --colors-blue-850: #12193E;\n  --colors-blue-900: #101633;\n  --colors-blue-950: #0F142E;\n  --colors-cloud-100: #F4F4F1;\n  --colors-cloud-1000: #050402;\n  --colors-cloud-150: #EEEEEB;\n  --colors-cloud-200: #E7E7E5;\n  --colors-cloud-250: #DEDEDC;\n  --colors-cloud-300: #D5D5D2;\n  --colors-cloud-350: #BDBCB8;\n  --colors-cloud-400: #A4A39E;\n  --colors-cloud-425: #969590;\n  --colors-cloud-450: #8C8B85;\n  --colors-cloud-475: #807F79;\n  --colors-cloud-50: #FBFAF7;\n  --colors-cloud-500: #73726C;\n  --colors-cloud-550: #64635D;\n  --colors-cloud-600: #55544E;\n  --colors-cloud-650: #4C4B44;\n  --colors-cloud-700: #42413A;\n  --colors-cloud-750: #36352F;\n  --colors-cloud-800: #2A2923;\n  --colors-cloud-850: #22211B;\n  --colors-cloud-900: #191812;\n  --colors-cloud-950: #0D0C07;\n  --colors-coal-100: #F7F7F7;\n  --colors-coal-150: #EDEDED;\n  --colors-coal-200: #E7E7E7;\n  --colors-coal-250: #E0E0E0;\n  --colors-coal-300: #DAD8D8;\n  --colors-coal-350: #D6D6D6;\n  --colors-coal-400: #CFCFCF;\n  --colors-coal-450: #C2C2C2;\n  --colors-coal-500: #B0B0B0;\n  --colors-coal-550: #9E9E9E;\n  --colors-coal-600: #908E8E;\n  --colors-coal-650: #888888;\n  --colors-coal-700: #595959;\n  --colors-coal-750: #545454;\n  --colors-coal-800: #4B4B4B;\n  --colors-coal-850: #414141;\n  --colors-coal-900: #333333;\n  --colors-coral-100: #FCE2E2;\n  --colors-coral-150: #FFD7D7;\n  --colors-coral-200: #FFC6C6;\n  --colors-coral-250: #FFBDBD;\n  --colors-coral-300: #FFB4B4;\n  --colors-coral-350: #FFADAD;\n  --colors-coral-400: #FF9E9E;\n  --colors-coral-450: #FD9090;\n  --colors-coral-500: #FF6464;\n  --colors-coral-550: #EF5959;\n  --colors-coral-600: #DB4F4F;\n  --colors-coral-650: #C52C2C;\n  --colors-coral-700: #BD0A0A;\n  --colors-coral-750: #AA0606;\n  --colors-coral-800: #8D0101;\n  --colors-coral-850: #710101;\n  --colors-coral-900: #600000;\n  --colors-cyan-100: #E4F9FF;\n  --colors-cyan-150: #DAF7FF;\n  --colors-cyan-200: #CCF4FF;\n  --colors-cyan-250: #C0F1FF;\n  --colors-cyan-300: #B5ECFF;\n  --colors-cyan-350: #A8E9FF;\n  --colors-cyan-400: #9CE6FF;\n  --colors-cyan-450: #8ADFFC;\n  --colors-cyan-500: #68D3F8;\n  --colors-cyan-550: #59C4E9;\n  --colors-cyan-600: #0E9DCD;\n  --colors-cyan-650: #049BCD;\n  --colors-cyan-700: #0F8AB3;\n  --colors-cyan-750: #0A789D;\n  --colors-cyan-800: #005875;\n  --colors-cyan-850: #024B63;\n  --colors-cyan-900: #003E57;\n  --colors-gray-100: #F1F2F5;\n  --colors-gray-150: #E9EAEF;\n  --colors-gray-200: #E0E2E8;\n  --colors-gray-250: #D8DAE2;\n  --colors-gray-300: #C7CAD5;\n  --colors-gray-350: #AEB2C0;\n  --colors-gray-400: #959AAC;\n  --colors-gray-450: #7D8297;\n  --colors-gray-475: #6F7489;\n  --colors-gray-50: #FAFAFC;\n  --colors-gray-500: #646B81;\n  --colors-gray-550: #5D6376;\n  --colors-gray-600: #555A6A;\n  --colors-gray-650: #4D515F;\n  --colors-gray-700: #454854;\n  --colors-gray-750: #3C3F49;\n  --colors-gray-800: #34363E;\n  --colors-gray-850: #2B2D33;\n  --colors-gray-900: #222428;\n  --colors-gray-950: #1A1B1E;\n  --colors-green-100: #EAF6E6;\n  --colors-green-150: #DFF1DA;\n  --colors-green-200: #CEE9C8;\n  --colors-green-250: #BADEB1;\n  --colors-green-300: #A1D295;\n  --colors-green-350: #85C476;\n  --colors-green-400: #65B452;\n  --colors-green-450: #42A22B;\n  --colors-green-50: #EFF9EC;\n  --colors-green-500: #1C8F00;\n  --colors-green-550: #1A7B02;\n  --colors-green-600: #186904;\n  --colors-green-650: #175906;\n  --colors-green-700: #154B08;\n  --colors-green-750: #143E09;\n  --colors-green-800: #13340A;\n  --colors-green-850: #122B0B;\n  --colors-green-900: #11260C;\n  --colors-green-950: #11230C;\n  --colors-ink-250: #D6D6D4;\n  --colors-ink-100: #F1F1EF;\n  --colors-ink-1000: #070705;\n  --colors-ink-150: #E9E9E7;\n  --colors-ink-200: #E0E0DE;\n  --colors-ink-300: #CBCBC9;\n  --colors-ink-350: #B8B8B6;\n  --colors-ink-400: #A1A19F;\n  --colors-ink-425: #959593;\n  --colors-ink-450: #888886;\n  --colors-ink-475: #7C7C7A;\n  --colors-ink-50: #F9F9F7;\n  --colors-ink-500: #6F6F6D;\n  --colors-ink-550: #5E5E5C;\n  --colors-ink-600: #4E4E4C;\n  --colors-ink-650: #424240;\n  --colors-ink-700: #373735;\n  --colors-ink-750: #2D2D2B;\n  --colors-ink-800: #232321;\n  --colors-ink-850: #1B1B19;\n  --colors-ink-900: #141412;\n  --colors-ink-950: #0D0D0B;\n  --colors-lilac-100: #EFEDFD;\n  --colors-lilac-150: #EAE7FF;\n  --colors-lilac-200: #DEDAFF;\n  --colors-lilac-250: #CBC6FF;\n  --colors-lilac-300: #BBB4FF;\n  --colors-lilac-350: #B5A9FF;\n  --colors-lilac-400: #B8ACFB;\n  --colors-lilac-450: #9288EF;\n  --colors-lilac-500: #8F7FEE;\n  --colors-lilac-550: #8A72EB;\n  --colors-lilac-600: #8167E5;\n  --colors-lilac-650: #7C59DF;\n  --colors-lilac-700: #6631D7;\n  --colors-lilac-750: #5526B7;\n  --colors-lilac-800: #461F98;\n  --colors-lilac-850: #361777;\n  --colors-lilac-900: #20084F;\n  --colors-lime-100: #F1FECF;\n  --colors-lime-150: #E2FBBD;\n  --colors-lime-200: #DBFAAD;\n  --colors-lime-250: #D1F09F;\n  --colors-lime-300: #C6EF88;\n  --colors-lime-350: #C2EB7F;\n  --colors-lime-400: #B3E65F;\n  --colors-lime-450: #A7DB5D;\n  --colors-lime-500: #9ED452;\n  --colors-lime-550: #97CD4B;\n  --colors-lime-600: #89BA42;\n  --colors-lime-650: #759F38;\n  --colors-lime-700: #608521;\n  --colors-lime-750: #486614;\n  --colors-lime-800: #365318;\n  --colors-lime-850: #2D4713;\n  --colors-lime-900: #21370B;\n  --colors-moss-100: #E3F7EA;\n  --colors-moss-150: #C4FFD9;\n  --colors-moss-200: #ADF0C7;\n  --colors-moss-250: #9FF1BD;\n  --colors-moss-300: #8AE9A8;\n  --colors-moss-350: #79E49B;\n  --colors-moss-400: #6AE08D;\n  --colors-moss-450: #5DD581;\n  --colors-moss-500: #2DC75C;\n  --colors-moss-550: #24BC51;\n  --colors-moss-600: #0FA83C;\n  --colors-moss-650: #069330;\n  --colors-moss-700: #067429;\n  --colors-moss-750: #066625;\n  --colors-moss-800: #0A5B23;\n  --colors-moss-850: #0A491E;\n  --colors-moss-900: #02400F;\n  --colors-ocean-100: #E5F0FF;\n  --colors-ocean-150: #D8E9FF;\n  --colors-ocean-200: #C6DCFF;\n  --colors-ocean-250: #B2D0FE;\n  --colors-ocean-300: #A7C9FC;\n  --colors-ocean-350: #A0C4FB;\n  --colors-ocean-400: #86B4F9;\n  --colors-ocean-450: #6DA4F6;\n  --colors-ocean-500: #659DF2;\n  --colors-ocean-550: #6297E6;\n  --colors-ocean-600: #5688D3;\n  --colors-ocean-650: #4978C0;\n  --colors-ocean-700: #305BAB;\n  --colors-ocean-750: #2C56A2;\n  --colors-ocean-800: #1D4792;\n  --colors-ocean-850: #113B87;\n  --colors-ocean-900: #001D66;\n  --colors-orange-100: #FFEEDE;\n  --colors-orange-150: #FFE5CB;\n  --colors-orange-200: #F8D3AF;\n  --colors-orange-250: #FBCB9B;\n  --colors-orange-300: #FFC795;\n  --colors-orange-350: #FFBD83;\n  --colors-orange-400: #FFB575;\n  --colors-orange-450: #FFA95E;\n  --colors-orange-500: #FE9F4D;\n  --colors-orange-550: #FE953A;\n  --colors-orange-600: #DA792B;\n  --colors-orange-650: #D76F1A;\n  --colors-orange-700: #9B4A08;\n  --colors-orange-750: #9B4A08;\n  --colors-orange-800: #843D03;\n  --colors-orange-850: #6C3100;\n  --colors-orange-900: #5C2000;\n  --colors-pink-100: #FEF2FF;\n  --colors-pink-150: #FFE3FC;\n  --colors-pink-200: #FFD8F4;\n  --colors-pink-250: #FFD2F2;\n  --colors-pink-300: #FBBEEA;\n  --colors-pink-350: #FFABEC;\n  --colors-pink-400: #FD9AE7;\n  --colors-pink-450: #F985DE;\n  --colors-pink-500: #F17DE5;\n  --colors-pink-550: #ED72E0;\n  --colors-pink-600: #D55AC8;\n  --colors-pink-650: #C851C3;\n  --colors-pink-700: #AF3FB9;\n  --colors-pink-750: #A334AC;\n  --colors-pink-800: #8B1796;\n  --colors-pink-850: #72157A;\n  --colors-pink-900: #55055C;\n  --colors-red-100: #FDF2F3;\n  --colors-red-150: #FBE6E8;\n  --colors-red-200: #F8D5D8;\n  --colors-red-250: #F4BFC5;\n  --colors-red-300: #F0A5AD;\n  --colors-red-350: #EB8792;\n  --colors-red-400: #E56673;\n  --colors-red-450: #DF4051;\n  --colors-red-50: #FEF7F8;\n  --colors-red-500: #D8182C;\n  --colors-red-550: #B91829;\n  --colors-red-600: #9C1825;\n  --colors-red-650: #821823;\n  --colors-red-700: #6B1720;\n  --colors-red-750: #57171E;\n  --colors-red-800: #46171C;\n  --colors-red-850: #38171A;\n  --colors-red-900: #2F1719;\n  --colors-red-950: #2B1719;\n  --colors-sunshine-100: #FFFDE5;\n  --colors-sunshine-150: #FFF7CA;\n  --colors-sunshine-200: #FFF6B6;\n  --colors-sunshine-250: #FFF79E;\n  --colors-sunshine-300: #FFF09A;\n  --colors-sunshine-350: #FFED7B;\n  --colors-sunshine-400: #FFE86D;\n  --colors-sunshine-450: #F9E05C;\n  --colors-sunshine-500: #FFDC4A;\n  --colors-sunshine-550: #F9D53D;\n  --colors-sunshine-600: #E8C120;\n  --colors-sunshine-650: #BA8A12;\n  --colors-sunshine-700: #AF7E04;\n  --colors-sunshine-750: #8E6A12;\n  --colors-sunshine-800: #6E4F02;\n  --colors-sunshine-850: #604400;\n  --colors-sunshine-900: #503A03;\n  --colors-teal-100: #E1FBF9;\n  --colors-teal-150: #D7FFFC;\n  --colors-teal-200: #C3FAF5;\n  --colors-teal-250: #B6FAF4;\n  --colors-teal-300: #A8F7F0;\n  --colors-teal-350: #96F0E8;\n  --colors-teal-400: #81E7DE;\n  --colors-teal-450: #55D6CA;\n  --colors-teal-500: #39C9BC;\n  --colors-teal-550: #25B6A9;\n  --colors-teal-600: #11A293;\n  --colors-teal-650: #0A9285;\n  --colors-teal-700: #187574;\n  --colors-teal-750: #146A69;\n  --colors-teal-800: #105A59;\n  --colors-teal-850: #0A4949;\n  --colors-teal-900: #0E4343;\n  --colors-yellow-100: #FFF9E3;\n  --colors-yellow-150: #FFF7D9;\n  --colors-yellow-200: #FFF4CB;\n  --colors-yellow-250: #FFEFB9;\n  --colors-yellow-300: #FFEBA3;\n  --colors-yellow-350: #FFE58B;\n  --colors-yellow-400: #FFDF6F;\n  --colors-yellow-450: #FFD850;\n  --colors-yellow-50: #FFFAE7;\n  --colors-yellow-500: #FFD02F;\n  --colors-yellow-550: #D7B029;\n  --colors-yellow-600: #B39223;\n  --colors-yellow-650: #91771E;\n  --colors-yellow-700: #746019;\n  --colors-yellow-750: #5A4B15;\n  --colors-yellow-800: #453911;\n  --colors-yellow-850: #342C0F;\n  --colors-yellow-900: #28220D;\n  --colors-yellow-950: #231E0C;\n  --radii-0: 0px;\n  --radii-25: 2px;\n  --radii-50: 4px;\n  --radii-75: 6px;\n  --radii-100: 8px;\n  --radii-150: 12px;\n  --radii-200: 16px;\n  --radii-250: 20px;\n  --radii-300: 24px;\n  --radii-400: 32px;\n  --radii-500: 40px;\n  --radii-600: 48px;\n  --radii-round: 999px;\n  --space-0: 0px;\n  --space-25: 2px;\n  --space-50: 4px;\n  --space-100: 8px;\n  --space-150: 12px;\n  --space-200: 16px;\n  --space-300: 24px;\n  --space-350: 28px;\n  --space-400: 32px;\n  --space-500: 40px;\n  --space-600: 48px;\n  --space-700: 56px;\n  --space-800: 64px;\n  --space-1200: 96px;\n  --space-1600: 128px;\n  --space-2000: 192px;\n  --fonts-body: Noto Sans, OpenSans, Noto Sans KR, Noto Sans JP, sans-serif;\n  --fonts-heading: Roobert PRO, Roobert, Noto Sans KR, Noto Sans JP, sans-serif;\n  --font-size-125: 0.625rem;\n  --font-size-150: 0.75rem;\n  --font-size-175: 0.875rem;\n  --font-size-200: 1rem;\n  --font-size-250: 1.25rem;\n  --font-size-300: 1.5rem;\n  --font-size-350: 1.75rem;\n  --font-size-400: 2rem;\n  --font-size-500: 2.5rem;\n  --font-size-600: 3rem;\n  --font-size-700: 3.5rem;\n  --font-size-800: 4rem;\n  --font-size-900: 4.5rem;\n  --font-size-1000: 5rem;\n  --font-size-1100: 5.5rem;\n  --font-size-1200: 6rem;\n  --font-size-1300: 6.5rem;\n  --font-size-1400: 7rem;\n  --font-size-1500: 7.5rem;\n  --font-size-1600: 8.5rem;\n  --line-height-100: 1;\n  --line-height-200: 1.2;\n  --line-height-300: 1.35;\n  --line-height-400: 1.4;\n  --line-height-500: 1.5;\n  --border-widths-none: 0;\n  --border-widths-sm: 1px;\n  --border-widths-md: 2px;\n  --border-widths-lg: 4px;\n  --font-weights-regular: 400;\n  --font-weights-semibold: 600;\n  --sizes-1: 4px;\n  --sizes-2: 8px;\n  --sizes-3: 12px;\n  --sizes-4: 16px;\n  --sizes-5: 20px;\n  --sizes-6: 24px;\n  --sizes-7: 28px;\n  --sizes-8: 32px;\n  --sizes-9: 36px;\n  --sizes-10: 40px;\n  --sizes-11: 44px;\n  --sizes-12: 48px;\n  --sizes-13: 52px;\n  --sizes-14: 56px;\n  --sizes-15: 60px;\n  --sizes-16: 64px;\n  --sizes-17: 68px;\n  --sizes-18: 72px;\n  --sizes-19: 76px;\n  --sizes-20: 80px;\n  --sizes-21: 84px;\n  --sizes-22: 88px;\n  --sizes-23: 92px;\n  --sizes-24: 96px;\n  --sizes-25: 100px;\n  --sizes-26: 104px;\n  --sizes-27: 108px;\n  --sizes-28: 112px;\n  --sizes-29: 116px;\n  --sizes-30: 120px;\n  --sizes-31: 124px;\n  --sizes-32: 128px;\n  --sizes-33: 132px;\n  --sizes-34: 136px;\n  --sizes-35: 140px;\n  --sizes-36: 144px;\n  --sizes-37: 148px;\n  --sizes-38: 152px;\n  --sizes-39: 156px;\n  --sizes-40: 160px;\n  --sizes-41: 164px;\n  --sizes-42: 168px;\n  --sizes-43: 172px;\n  --sizes-44: 176px;\n  --sizes-45: 180px;\n  --sizes-46: 184px;\n  --sizes-47: 188px;\n  --sizes-48: 192px;\n  --sizes-49: 196px;\n  --sizes-50: 200px;\n  --sizes-51: 204px;\n  --sizes-52: 208px;\n  --sizes-53: 212px;\n  --sizes-54: 216px;\n  --sizes-55: 220px;\n  --sizes-56: 224px;\n  --sizes-57: 228px;\n  --sizes-58: 232px;\n  --sizes-59: 236px;\n  --sizes-60: 240px;\n  --sizes-61: 244px;\n  --sizes-62: 248px;\n  --sizes-63: 252px;\n  --sizes-64: 256px;\n  --sizes-65: 260px;\n  --sizes-66: 264px;\n  --sizes-67: 268px;\n  --sizes-68: 272px;\n  --sizes-69: 276px;\n  --sizes-70: 280px;\n  --sizes-71: 284px;\n  --sizes-72: 288px;\n  --sizes-73: 292px;\n  --sizes-74: 296px;\n  --sizes-75: 300px;\n  --sizes-76: 304px;\n  --sizes-77: 308px;\n  --sizes-78: 312px;\n  --sizes-79: 316px;\n  --sizes-80: 320px;\n  --sizes-81: 324px;\n  --sizes-82: 328px;\n  --sizes-83: 332px;\n  --sizes-84: 336px;\n  --sizes-85: 340px;\n  --sizes-86: 344px;\n  --sizes-87: 348px;\n  --sizes-88: 352px;\n  --sizes-89: 356px;\n  --sizes-90: 360px;\n  --sizes-91: 364px;\n  --sizes-92: 368px;\n  --sizes-93: 372px;\n  --sizes-94: 376px;\n  --sizes-95: 380px;\n  --sizes-96: 384px;\n  --sizes-97: 388px;\n  --sizes-98: 392px;\n  --sizes-99: 396px;\n  --sizes-100: 400px;\n  --sizes-101: 404px;\n  --sizes-102: 408px;\n  --sizes-103: 412px;\n  --sizes-104: 416px;\n  --sizes-105: 420px;\n  --sizes-106: 424px;\n  --sizes-107: 428px;\n  --sizes-108: 432px;\n  --sizes-109: 436px;\n  --sizes-110: 440px;\n  --sizes-111: 444px;\n  --sizes-112: 448px;\n  --sizes-113: 452px;\n  --sizes-114: 456px;\n  --sizes-115: 460px;\n  --sizes-116: 464px;\n  --sizes-117: 468px;\n  --sizes-118: 472px;\n  --sizes-119: 476px;\n  --sizes-120: 480px;\n  --sizes-121: 484px;\n  --sizes-122: 488px;\n  --sizes-123: 492px;\n  --sizes-124: 496px;\n  --sizes-125: 500px;\n  --sizes-126: 504px;\n  --sizes-127: 508px;\n  --sizes-128: 512px;\n  --sizes-129: 516px;\n  --sizes-130: 520px;\n  --sizes-131: 524px;\n  --sizes-132: 528px;\n  --sizes-133: 532px;\n  --sizes-134: 536px;\n  --sizes-135: 540px;\n  --sizes-136: 544px;\n  --sizes-137: 548px;\n  --sizes-138: 552px;\n  --sizes-139: 556px;\n  --sizes-140: 560px;\n  --sizes-141: 564px;\n  --sizes-142: 568px;\n  --sizes-143: 572px;\n  --sizes-144: 576px;\n  --sizes-145: 580px;\n  --sizes-146: 584px;\n  --sizes-147: 588px;\n  --sizes-148: 592px;\n  --sizes-149: 596px;\n  --sizes-150: 600px;\n  --sizes-151: 604px;\n  --sizes-152: 608px;\n  --sizes-153: 612px;\n  --sizes-154: 616px;\n  --sizes-155: 620px;\n  --sizes-156: 624px;\n  --sizes-157: 628px;\n  --sizes-158: 632px;\n  --sizes-159: 636px;\n  --sizes-160: 640px;\n  --sizes-161: 644px;\n  --sizes-162: 648px;\n  --sizes-163: 652px;\n  --sizes-164: 656px;\n  --sizes-165: 660px;\n  --sizes-166: 664px;\n  --sizes-167: 668px;\n  --sizes-168: 672px;\n  --sizes-169: 676px;\n  --sizes-170: 680px;\n  --sizes-171: 684px;\n  --sizes-172: 688px;\n  --sizes-173: 692px;\n  --sizes-174: 696px;\n  --sizes-175: 700px;\n  --sizes-176: 704px;\n  --sizes-177: 708px;\n  --sizes-178: 712px;\n  --sizes-179: 716px;\n  --sizes-180: 720px;\n  --sizes-181: 724px;\n  --sizes-182: 728px;\n  --sizes-183: 732px;\n  --sizes-184: 736px;\n  --sizes-185: 740px;\n  --sizes-186: 744px;\n  --sizes-187: 748px;\n  --sizes-188: 752px;\n  --sizes-189: 756px;\n  --sizes-190: 760px;\n  --sizes-191: 764px;\n  --sizes-192: 768px;\n  --sizes-193: 772px;\n  --sizes-194: 776px;\n  --sizes-195: 780px;\n  --sizes-196: 784px;\n  --sizes-197: 788px;\n  --sizes-198: 792px;\n  --sizes-199: 796px;\n  --sizes-200: 800px;\n  --sizes-icon-200: 16px;\n  --sizes-icon-300: 24px;\n  --sizes-icon-400: 32px;\n  --stroke-widths-thin: 1.5px;\n  --stroke-widths-normal: 2px;\n  --stroke-widths-bold: 4px;\n  --z-indices-dropdown-menu: 100;\n  --z-indices-select: 200;\n  --z-indices-calendar: 200;\n  --z-indices-popover: 300;\n  --z-indices-tooltip: 400;\n}\n"],sourceRoot:""}]),t.locals={};let i=t},231440(e,o,n){"use strict";n.r(o),n.d(o,{default:()=>i});var A=n(334942),r=n.n(A),s=n(260278),t=n.n(s)()(r());t.push([e.id,`.cursorPulse-Y46ac {
  position: absolute;
  top: 0;
  right: -50%;
  bottom: 0;
  left: -50%;
  margin: auto;
  z-index: 900;
  pointer-events: none;
}
`,"",{version:3,sources:["webpack://./../packages/pulse/src/cursor-pulse/styles.module.less"],names:[],mappings:"AAEA;EACC,kBAAA;EACA,MAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;AADD",sourcesContent:["@import (reference) '@mirohq-internal/styles/variables.less';\n\n.cursorPulse {\n	position: absolute;\n	top: 0;\n	right: -50%;\n	bottom: 0;\n	left: -50%;\n	margin: auto;\n	z-index: @z-tips-layer;\n	pointer-events: none;\n}\n"],sourceRoot:""}]),t.locals={cursorPulse:"cursorPulse-Y46ac"};let i=t},159916(e,o,n){"use strict";n.r(o),n.d(o,{default:()=>i});var A=n(334942),r=n.n(A),s=n(260278),t=n.n(s)()(r());t.push([e.id,`.pulse-W4_6v {
  position: relative;
  animation-name: pulse-animation-scale-change-large-km7eO;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
.pulse-W4_6v.pulse--animation-scale-change-small-um3pN {
  animation-name: pulse-animation-scale-change-small-ceHPO;
}
.pulse-W4_6v .pulse__inner-r9o3r,
.pulse-W4_6v .pulse__outer-pssGZ {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 125px;
}
.pulse-W4_6v .pulse__inner-r9o3r {
  background-color: var(--colors-blue-500);
}
.pulse-W4_6v .pulse__outer-pssGZ {
  position: absolute;
  animation-name: pulse-outer-animation-qF4hU;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  background-color: transparent;
}
.pulse-W4_6v.pulse--radius-s-nT74u .pulse__inner-r9o3r,
.pulse-W4_6v.pulse--radius-s-nT74u .pulse__outer-pssGZ {
  border-radius: 2px;
}
.pulse-W4_6v.pulse--radius-m-fSRwy .pulse__inner-r9o3r,
.pulse-W4_6v.pulse--radius-m-fSRwy .pulse__outer-pssGZ {
  border-radius: 4px;
}
.pulse-W4_6v.pulse--radius-l-rBoAn .pulse__inner-r9o3r,
.pulse-W4_6v.pulse--radius-l-rBoAn .pulse__outer-pssGZ {
  border-radius: 8px;
}
.pulse-W4_6v.pulse--radius-circle-R7EOh .pulse__inner-r9o3r,
.pulse-W4_6v.pulse--radius-circle-R7EOh .pulse__outer-pssGZ {
  border-radius: 125px;
}
@keyframes pulse-animation-scale-change-large-km7eO {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes pulse-animation-scale-change-small-ceHPO {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}
@keyframes pulse-outer-animation-qF4hU {
  0% {
    box-shadow: 0 0 0 0 var(--colors-blue-500);
  }
  50% {
    box-shadow: 0 0 0 1em var(--colors-blue-500);
  }
  100% {
    box-shadow: 0 0 0 0 var(--colors-blue-500);
  }
}
`,"",{version:3,sources:["webpack://./../packages/pulse/src/pulse.module.less"],names:[],mappings:"AAIA;EACC,kBAAA;EACA,wDAAA;EACA,sBAAA;EACA,mCAAA;AAHD;AAKC;EACC,wDAAA;AAHF;AAJA;;EAYE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;AAJF;AAXA;EAmBE,wCAAA;AALF;AAdA;EAuBE,kBAAA;EACA,2CAAA;EACA,sBAAA;EACA,mCAAA;EACA,6BAAA;AANF;AASC;;EAGE,kBAAA;AARH;AAYC;;EAGE,kBAAA;AAXH;AAeC;;EAGE,kBAAA;AAdH;AAkBC;;EAGE,oBAAA;AAjBH;AAqBC;EACC;IACC,mBAAA;EAnBD;EAqBA;IACC,qBAAA;EAnBD;EAqBA;IACC,mBAAA;EAnBD;AACF;AAsBC;EACC;IACC,qBAAA;EApBD;EAsBA;IACC,mBAAA;EApBD;EAsBA;IACC,qBAAA;EApBD;AACF;AAuBC;EACC;IACC,0CAAA;EArBD;EAuBA;IACC,4CAAA;EArBD;EAuBA;IACC,0CAAA;EArBD;AACF",sourcesContent:["@import (reference) '@mirohq-internal/styles/variables.less';\n\n@pulse-color: var(--colors-blue-500);\n\n.pulse {\n	position: relative;\n	animation-name: pulse-animation-scale-change-large;\n	animation-duration: 1s;\n	animation-iteration-count: infinite;\n\n	&.pulse--animation-scale-change-small {\n		animation-name: pulse-animation-scale-change-small;\n	}\n\n	.pulse__inner,\n	.pulse__outer {\n		position: absolute;\n		width: 100%;\n		height: 100%;\n		border-radius: @radius-circle;\n	}\n\n	.pulse__inner {\n		background-color: @pulse-color;\n	}\n\n	.pulse__outer {\n		position: absolute;\n		animation-name: pulse-outer-animation;\n		animation-duration: 1s;\n		animation-iteration-count: infinite;\n		background-color: transparent;\n	}\n\n	&.pulse--radius-s {\n		.pulse__inner,\n		.pulse__outer {\n			border-radius: @radius-s;\n		}\n	}\n\n	&.pulse--radius-m {\n		.pulse__inner,\n		.pulse__outer {\n			border-radius: @radius-m;\n		}\n	}\n\n	&.pulse--radius-l {\n		.pulse__inner,\n		.pulse__outer {\n			border-radius: @radius-l;\n		}\n	}\n\n	&.pulse--radius-circle {\n		.pulse__inner,\n		.pulse__outer {\n			border-radius: @radius-circle;\n		}\n	}\n\n	@keyframes pulse-animation-scale-change-large {\n		0% {\n			transform: scale(1);\n		}\n		50% {\n			transform: scale(1.4);\n		}\n		100% {\n			transform: scale(1);\n		}\n	}\n\n	@keyframes pulse-animation-scale-change-small {\n		0% {\n			transform: scale(0.9);\n		}\n		50% {\n			transform: scale(1);\n		}\n		100% {\n			transform: scale(0.9);\n		}\n	}\n\n	@keyframes pulse-outer-animation {\n		0% {\n			box-shadow: 0 0 0 0 @pulse-color;\n		}\n		50% {\n			box-shadow: 0 0 0 1em @pulse-color;\n		}\n		100% {\n			box-shadow: 0 0 0 0 @pulse-color;\n		}\n	}\n}\n"],sourceRoot:""}]),t.locals={pulse:"pulse-W4_6v","pulse-animation-scale-change-large":"pulse-animation-scale-change-large-km7eO","pulse--animation-scale-change-small":"pulse--animation-scale-change-small-um3pN","pulse-animation-scale-change-small":"pulse-animation-scale-change-small-ceHPO",pulse__inner:"pulse__inner-r9o3r",pulse__outer:"pulse__outer-pssGZ","pulse-outer-animation":"pulse-outer-animation-qF4hU","pulse--radius-s":"pulse--radius-s-nT74u","pulse--radius-m":"pulse--radius-m-fSRwy","pulse--radius-l":"pulse--radius-l-rBoAn","pulse--radius-circle":"pulse--radius-circle-R7EOh"};let i=t},399987(e,o,n){"use strict";n.r(o),n.d(o,{default:()=>i});var A=n(334942),r=n.n(A),s=n(260278),t=n.n(s)()(r());t.push([e.id,`.buttonPulseAnimation-SGWv1 {
  animation: button-pulse-k8JEh 1s infinite;
}
@keyframes button-pulse-k8JEh {
  0% {
    box-shadow: 0 0 0 0 rgba(66, 98, 255, 0.32);
  }
  50% {
    box-shadow: 0 0 0 14px rgba(66, 98, 255, 0.32);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(66, 98, 255, 0.32);
  }
}
`,"",{version:3,sources:["webpack://./../packages/pulse/src/styles/ButtonPulse/ButtonPulseAnimation.module.less"],names:[],mappings:"AAEA;EAIC,yCAAA;AAJD;AAMC;EACC;IACC,2CAAA;EAJD;EAOA;IACC,8CAAA;EALD;EAQA;IACC,2CAAA;EAND;AACF",sourcesContent:["@import (reference) '@mirohq-internal/styles/variables.less';\n\n.buttonPulseAnimation {\n	// We don't have color primary alpha in variables yet\n	@shadow-color: rgba(66, 98, 255, 0.32);\n\n	animation: button-pulse 1s infinite;\n\n	@keyframes button-pulse {\n		0% {\n			box-shadow: 0 0 0 0 @shadow-color;\n		}\n\n		50% {\n			box-shadow: 0 0 0 14px @shadow-color;\n		}\n\n		100% {\n			box-shadow: 0 0 0 0 @shadow-color;\n		}\n	}\n}\n"],sourceRoot:""}]),t.locals={buttonPulseAnimation:"buttonPulseAnimation-SGWv1","button-pulse":"button-pulse-k8JEh"};let i=t},86532(e,o,n){"use strict";n.r(o),n.d(o,{default:()=>l});var A=n(334942),r=n.n(A),s=n(260278),t=n.n(s),i=n(734952),a=t()(r());a.i(i.A),a.push([e.id,`.tag-ozOsg {
  display: inline-block;
  height: 16px;
  padding: 0 4px;
  font-size: 11px;
  line-height: 16px;
  font-weight: bold;
  color: var(--colors-text-neutrals-inverted);
  background-color: var(--colors-background-primary-prominent);
  border-radius: 2px;
  text-transform: uppercase;
}
.tag-ozOsg.tag_blue {
  color: var(--colors-text-primary-inverted);
  background-color: var(--colors-background-primary-prominent);
}
.tag-ozOsg.tag_lightBlue {
  color: var(--colors-text-primary);
  background-color: var(--colors-background-primary-subtle);
}
.tag-ozOsg.tag_yellow {
  color: var(--colors-text-warning);
  background-color: var(--colors-background-warning-prominent);
}
.tag-ozOsg.tag_lightYellow {
  color: var(--colors-text-warning-subtle);
  background-color: var(--colors-background-warning-subtle);
}
.tag-ozOsg.tag_gray {
  color: var(--colors-text-neutrals-inverted);
  background-color: var(--colors-gray-550);
}
.tag-ozOsg.tag_lightGray {
  color: var(--colors-text-neutrals-subtle);
  background-color: var(--colors-background-neutrals-subtle);
}
.tag-ozOsg.tag_indigo {
  color: var(--colors-text-primary-inverted);
  background-color: var(--colors-background-neutrals-inverted-subtle);
}
`,"",{version:3,sources:["webpack://./../packages/tag/src/tag.less"],names:[],mappings:"AAGA;EACC,qBAAA;EACA,YAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,2CAAA;EACA,4DAAA;EACA,kBAAA;EACA,yBAAA;AADD;AAGC;EACC,0CAAA;EACA,4DAAA;AADF;AAIC;EACC,iCAAA;EACA,yDAAA;AAFF;AAKC;EACC,iCAAA;EACA,4DAAA;AAHF;AAMC;EACC,wCAAA;EACA,yDAAA;AAJF;AAOC;EACC,2CAAA;EACA,wCAAA;AALF;AAQC;EACC,yCAAA;EACA,0DAAA;AANF;AASC;EACC,0CAAA;EACA,mEAAA;AAPF",sourcesContent:["@import (reference) '@mirohq-internal/styles/variables.less';\n@import '@mirohq/design-tokens/tokens.css';\n\n:local(.tag) {\n	display: inline-block;\n	height: 16px;\n	padding: 0 4px;\n	font-size: 11px;\n	line-height: 16px;\n	font-weight: bold;\n	color: var(--colors-text-neutrals-inverted);\n	background-color: var(--colors-background-primary-prominent);\n	border-radius: @radius-s;\n	text-transform: uppercase;\n\n	&.tag_blue {\n		color: var(--colors-text-primary-inverted);\n		background-color: var(--colors-background-primary-prominent);\n	}\n\n	&.tag_lightBlue {\n		color: var(--colors-text-primary);\n		background-color: var(--colors-background-primary-subtle);\n	}\n\n	&.tag_yellow {\n		color: var(--colors-text-warning);\n		background-color: var(--colors-background-warning-prominent);\n	}\n\n	&.tag_lightYellow {\n		color: var(--colors-text-warning-subtle);\n		background-color: var(--colors-background-warning-subtle);\n	}\n\n	&.tag_gray {\n		color: var(--colors-text-neutrals-inverted);\n		background-color: var(--colors-gray-550);\n	}\n\n	&.tag_lightGray {\n		color: var(--colors-text-neutrals-subtle);\n		background-color: var(--colors-background-neutrals-subtle);\n	}\n\n	&.tag_indigo {\n		color: var(--colors-text-primary-inverted);\n		background-color: var(--colors-background-neutrals-inverted-subtle);\n	}\n}\n"],sourceRoot:""}]),a.locals={tag:"tag-ozOsg",tag_blue:"tag_blue",tag_lightBlue:"tag_lightBlue",tag_yellow:"tag_yellow",tag_lightYellow:"tag_lightYellow",tag_gray:"tag_gray",tag_lightGray:"tag_lightGray",tag_indigo:"tag_indigo"};let l=a},532150(e,o,n){"use strict";n.r(o),n.d(o,{default:()=>i});var A=n(334942),r=n.n(A),s=n(260278),t=n.n(s)()(r());t.push([e.id,`.uiTipContent-e75Nj {
  width: 100%;
  background-color: var(--colors-background-neutrals);
  box-shadow: 0px 4px 16px rgba(5, 0, 56, 0.12);
  padding: 16px;
  border-radius: 8px;
  position: relative;
  pointer-events: all;
}
.uiTipContent-e75Nj.uiTipContent_dark {
  background-color: var(--colors-black);
  color: var(--colors-text-neutrals-inverted);
  outline: var(--border-widths-sm) solid var(--colors-gray-550);
}
.uiTipContent-e75Nj.uiTipContent_customContent {
  padding: 0;
}
.uiTipContent-e75Nj .uiTipContent__header {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
}
.uiTipContent-e75Nj .uiTipContent__title {
  font-family: var(--fonts-heading);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.uiTipContent-e75Nj .uiTipContent__headerIcon {
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
}
.uiTipContent-e75Nj .uiTipContent__headerIcon svg {
  width: 100%;
  height: 100%;
}
.uiTipContent-e75Nj .uiTipContent__bodyIcon {
  display: flex;
  align-items: center;
  margin-right: 12px;
}
.uiTipContent-e75Nj .uiTipContent__tag {
  margin-bottom: 4px;
}
.uiTipContent-e75Nj .uiTipContent__body {
  display: flex;
  align-items: flex-start;
  padding-right: 20px;
}
.uiTipContent-e75Nj .uiTipContent__bodyContent {
  line-height: 20px;
}
.uiTipContent-e75Nj .uiTipContent__buttons {
  margin-top: 12px;
}
.uiTipContent-e75Nj .uiTipContent__steps {
  margin-top: 12px;
  color: var(--colors-gray-250);
}
.uiTipContent-e75Nj.uiTipContentWithClose {
  padding-right: 32px;
}
.uiTipPopupContainer-llYjb {
  z-index: 900;
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationTop-enter {
  opacity: 0;
  transform: translateX(0) translateY(20px);
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationTop-enter-active {
  opacity: 1;
  transform: translateY(0) translateY(0);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationTop-exit {
  opacity: 1;
  transform: translateY(0) translateY(0);
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationTop-exit-active {
  opacity: 0;
  transform: translateX(0) translateY(20px);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationBottom-enter {
  opacity: 0;
  transform: translateX(0) translateY(-20px);
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationBottom-enter-active {
  opacity: 1;
  transform: translateY(0) translateY(0);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationBottom-exit {
  opacity: 1;
  transform: translateY(0) translateY(0);
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationBottom-exit-active {
  opacity: 0;
  transform: translateX(0) translateY(-20px);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationRight-enter {
  opacity: 0;
  transform: translateX(-20px) translateY(0);
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationRight-enter-active {
  opacity: 1;
  transform: translateY(0) translateY(0);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationRight-exit {
  opacity: 1;
  transform: translateY(0) translateY(0);
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationRight-exit-active {
  opacity: 0;
  transform: translateX(-20px) translateY(0);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationLeft-enter {
  opacity: 0;
  transform: translateX(20px) translateY(0);
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationLeft-enter-active {
  opacity: 1;
  transform: translateY(0) translateY(0);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationLeft-exit {
  opacity: 1;
  transform: translateY(0) translateY(0);
}
.uiTipPopupContainer-llYjb .uiTipPopupContainer_animationLeft-exit-active {
  opacity: 0;
  transform: translateX(20px) translateY(0);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}
.uiTipPopupContainer-llYjb[data-popper-placement*='bottom'] .uiTipPointerContainer-FKU7h {
  bottom: 100%;
}
.uiTipPopupContainer-llYjb[data-popper-placement*='right'] .uiTipPointerContainer-FKU7h {
  right: 100%;
}
.uiTipPopupContainer-llYjb[data-popper-placement*='left'] .uiTipPointerContainer-FKU7h {
  left: 100%;
}
.uiTipPopupContainerWhenInsideModal-oAQrN {
  z-index: 3100;
}
.uiTipPopupContainerUnderToolbarUILayer-vaVqa {
  z-index: 88;
}
.uiTipPopupContainerSettingsNavigationUILayer-CgpNk {
  z-index: 2002;
}
.uiTipPopupContainerUnderBottomToolbar-z7gpO {
  z-index: 88;
}
.uiTipPointerContainer-FKU7h {
  position: absolute;
  pointer-events: none;
}
`,"",{version:3,sources:["webpack://./../packages/ui-tip/src/content/ui-tip.less","webpack://./../packages/styles/typography.less"],names:[],mappings:"AAiCA;EACC,WAAA;EACA,mDAAA;EACA,6CAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AAhCD;AAkCC;EACC,qCAAA;EACA,2CAAA;EACA,6DAAA;AAhCF;AAmCC;EACC,UAAA;AAjCF;AAiBA;EAoBE,kBAAA;EACA,aAAA;EACA,mBAAA;AAlCF;AAYA;ECuDC,iCAAA;EAqBA,eAAA;EACA,gBAAA;EDlDC,iBAAA;AAjCF;AAMA;EA+BE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AAlCF;AAAA;EAqCG,WAAA;EACA,YAAA;AAlCH;AAJA;EA2CE,aAAA;EACA,mBAAA;EACA,kBAAA;AApCF;AATA;EAiDE,kBAAA;AArCF;AAZA;EAqDE,aAAA;EACA,uBAAA;EACA,mBAAA;AAtCF;AAjBA;EA2DE,iBAAA;AAvCF;AApBA;EA+DE,gBAAA;AAxCF;AAvBA;EAmEE,gBAAA;EACA,6BAAA;AAzCF;AA4CC;EACC,mBAAA;AA1CF;AA8CA;EACC,YAAA;AA5CD;AAxDC;EACC,UAAA;EACA,yCAAA;AA0DF;AAvDC;EACC,UAAA;EACA,sCAAA;EACA,4DAAA;AAyDF;AAtDC;EACC,UAAA;EACA,sCAAA;AAwDF;AArDC;EACC,UAAA;EACA,yCAAA;EACA,4DAAA;AAuDF;AA1EC;EACC,UAAA;EACA,0CAAA;AA4EF;AAzEC;EACC,UAAA;EACA,sCAAA;EACA,4DAAA;AA2EF;AAxEC;EACC,UAAA;EACA,sCAAA;AA0EF;AAvEC;EACC,UAAA;EACA,0CAAA;EACA,4DAAA;AAyEF;AA5FC;EACC,UAAA;EACA,0CAAA;AA8FF;AA3FC;EACC,UAAA;EACA,sCAAA;EACA,4DAAA;AA6FF;AA1FC;EACC,UAAA;EACA,sCAAA;AA4FF;AAzFC;EACC,UAAA;EACA,0CAAA;EACA,4DAAA;AA2FF;AA9GC;EACC,UAAA;EACA,yCAAA;AAgHF;AA7GC;EACC,UAAA;EACA,sCAAA;EACA,4DAAA;AA+GF;AA5GC;EACC,UAAA;EACA,sCAAA;AA8GF;AA3GC;EACC,UAAA;EACA,yCAAA;EACA,4DAAA;AA6GF;AAVC;EACC,YAAA;AAYF;AATC;EACC,WAAA;AAWF;AARC;EACC,UAAA;AAUF;AANA;EACC,aAAA;AAQD;AALA;EACC,WAAA;AAOD;AAJA;EACC,aAAA;AAMD;AAHA;EACC,WAAA;AAKD;AAFA;EACC,kBAAA;EACA,oBAAA;AAID",sourcesContent:["@import (reference) '@mirohq-internal/styles/variables.less';\n\n@duration: 200ms;\n@function: ease-out;\n@settings-navigation-zindex: 2002;\n@transition:\n	opacity @duration @function,\n	transform @duration @function;\n\n.animation(@xOffset, @yOffset) {\n	&-enter {\n		opacity: 0;\n		transform: translateX(@xOffset) translateY(@yOffset);\n	}\n\n	&-enter-active {\n		opacity: 1;\n		transform: translateY(0) translateY(0);\n		transition: @transition;\n	}\n\n	&-exit {\n		opacity: 1;\n		transform: translateY(0) translateY(0);\n	}\n\n	&-exit-active {\n		opacity: 0;\n		transform: translateX(@xOffset) translateY(@yOffset);\n		transition: @transition;\n	}\n}\n\n:local(.uiTipContent) {\n	width: 100%;\n	background-color: var(--colors-background-neutrals);\n	box-shadow: @shadow-level-1;\n	padding: 16px;\n	border-radius: @radius-l;\n	position: relative;\n	pointer-events: all;\n\n	&.uiTipContent_dark {\n		background-color: var(--colors-black);\n		color: var(--colors-text-neutrals-inverted);\n		outline: var(--border-widths-sm) solid var(--colors-gray-550);\n	}\n\n	&.uiTipContent_customContent {\n		padding: 0;\n	}\n\n	.uiTipContent__header {\n		margin-bottom: 4px;\n		display: flex;\n		align-items: center;\n	}\n\n	.uiTipContent__title {\n		@typo-roobert-16-bold();\n		line-height: 24px;\n	}\n\n	.uiTipContent__headerIcon {\n		display: flex;\n		align-items: center;\n		width: 24px;\n		height: 24px;\n\n		svg {\n			width: 100%;\n			height: 100%;\n		}\n	}\n\n	.uiTipContent__bodyIcon {\n		display: flex;\n		align-items: center;\n		margin-right: 12px;\n	}\n\n	.uiTipContent__tag {\n		margin-bottom: 4px;\n	}\n\n	.uiTipContent__body {\n		display: flex;\n		align-items: flex-start;\n		padding-right: 20px;\n	}\n\n	.uiTipContent__bodyContent {\n		line-height: 20px;\n	}\n\n	.uiTipContent__buttons {\n		margin-top: 12px;\n	}\n\n	.uiTipContent__steps {\n		margin-top: 12px;\n		color: var(--colors-gray-250);\n	}\n\n	&.uiTipContentWithClose {\n		padding-right: 32px;\n	}\n}\n\n:local(.uiTipPopupContainer) {\n	z-index: @z-tips-layer;\n\n	.uiTipPopupContainer_animationTop {\n		.animation(0, 20px);\n	}\n\n	.uiTipPopupContainer_animationBottom {\n		.animation(0, -20px);\n	}\n\n	.uiTipPopupContainer_animationRight {\n		.animation(-20px, 0);\n	}\n\n	.uiTipPopupContainer_animationLeft {\n		.animation(20px, 0);\n	}\n\n	&[data-popper-placement*='bottom'] :local(.uiTipPointerContainer) {\n		bottom: 100%;\n	}\n\n	&[data-popper-placement*='right'] :local(.uiTipPointerContainer) {\n		right: 100%;\n	}\n\n	&[data-popper-placement*='left'] :local(.uiTipPointerContainer) {\n		left: 100%;\n	}\n}\n\n:local(.uiTipPopupContainerWhenInsideModal) {\n	z-index: @z-modals-layer;\n}\n\n:local(.uiTipPopupContainerUnderToolbarUILayer) {\n	z-index: (@z-canvas-ui-layer - 2); // it's two because we have both 90 and 89 values right now for left sidebar panels\n}\n\n:local(.uiTipPopupContainerSettingsNavigationUILayer) {\n	z-index: @settings-navigation-zindex;\n}\n\n:local(.uiTipPopupContainerUnderBottomToolbar) {\n	z-index: (@z-canvas-ui-layer - 2);\n}\n\n:local(.uiTipPointerContainer) {\n	position: absolute;\n	pointer-events: none;\n}\n","@typo-common: {\n	font-style: normal;\n	font-stretch: normal;\n	letter-spacing: normal;\n};\n\n@typo-h1: {\n	@typo-common();\n	@typo-roobert();\n\n	font-size: 28px;\n	line-height: 36px;\n	font-weight: 500;\n};\n\n@typo-h2: {\n	@typo-common();\n	@typo-roobert-title();\n\n	line-height: 32px;\n};\n\n@typo-h3: {\n	@typo-common();\n	@typo-roobert();\n\n	font-size: 20px;\n	line-height: 26px;\n	font-weight: 500;\n};\n\n@typo-h4: {\n	@typo-common();\n\n	font-size: 16px;\n	line-height: 24px;\n	font-weight: 600;\n};\n\n@typo-h5: {\n	@typo-common();\n\n	font-size: 14px;\n	line-height: 20px;\n	font-weight: 600;\n};\n\n@typo-p-large: {\n	@typo-common();\n\n	font-size: 16px;\n	line-height: 24px;\n	font-weight: normal;\n};\n\n@typo-p-medium: {\n	@typo-common();\n\n	font-size: 14px;\n	line-height: 20px;\n	font-weight: normal;\n};\n\n@typo-p-small: {\n	@typo-common();\n\n	font-size: 12px;\n	line-height: 18px;\n	font-weight: normal;\n};\n\n@typo-p-xsmall: {\n	@typo-common();\n\n	font-size: 10px;\n	line-height: 16px;\n	font-weight: normal;\n};\n\n@typo-opensans: {\n	font-family:\n		var(--fonts-body),\n		Noto Sans KR,\n		Noto Sans JP,\n		sans-serif;\n};\n\n@typo-roobert: {\n	font-family: var(--fonts-heading);\n};\n\n@typo-roobert-title: {\n	.typo-roobert();\n	font-size: 24px;\n	font-weight: 500;\n};\n\n@typo-subtitle: {\n	font-size: 18px;\n	font-weight: normal;\n};\n\n@typo-roobert-subtitle: {\n	@typo-subtitle();\n	@typo-roobert();\n};\n\n@typo-roobert-16-bold: {\n	@typo-roobert();\n	font-size: 16px;\n	font-weight: 500;\n};\n\n@typo-roobert-16: {\n	@typo-roobert();\n	font-size: 16px;\n	font-weight: normal;\n};\n\n@typo-roobert-32-bold: {\n	@typo-roobert();\n	font-size: 32px;\n	line-height: 40px;\n	font-weight: 500;\n};\n\n@typo-roobert-40-bold: {\n	@typo-roobert();\n	font-size: 40px;\n	line-height: 48px;\n	font-weight: 500;\n};\n\n@typo-p-bold: {\n	@typo-common();\n\n	font-weight: 600;\n};\n\n.rtb-h1 {\n	@typo-h1();\n}\n\n.rtb-h2 {\n	@typo-h2();\n}\n\n.rtb-h3 {\n	@typo-h3();\n}\n\n.rtb-h4 {\n	@typo-h4();\n}\n\n.rtb-h5 {\n	@typo-h5();\n}\n\n.rtb-p-large {\n	@typo-p-large();\n}\n\n.rtb-p-medium {\n	@typo-p-medium();\n}\n\n.rtb-p-small {\n	@typo-p-small();\n}\n\n.rtb-p-bold {\n	@typo-p-bold();\n}\n\n.typo-opensans {\n	@typo-opensans();\n}\n\n.typo-roobert {\n	@typo-roobert();\n}\n\n.typo-subtitle {\n	@typo-subtitle();\n}\n\n.rtb-h4 + .typo-subtitle {\n	@typo-p-medium();\n	margin-top: -16px;\n}\n\n.rtb-h3 + .typo-subtitle {\n	@typo-p-medium();\n	margin-top: -16px;\n}\n"],sourceRoot:""}]),t.locals={uiTipContent:"uiTipContent-e75Nj",uiTipContent_dark:"uiTipContent_dark",uiTipContent_customContent:"uiTipContent_customContent",uiTipContent__header:"uiTipContent__header",uiTipContent__title:"uiTipContent__title",uiTipContent__headerIcon:"uiTipContent__headerIcon",uiTipContent__bodyIcon:"uiTipContent__bodyIcon",uiTipContent__tag:"uiTipContent__tag",uiTipContent__body:"uiTipContent__body",uiTipContent__bodyContent:"uiTipContent__bodyContent",uiTipContent__buttons:"uiTipContent__buttons",uiTipContent__steps:"uiTipContent__steps",uiTipContentWithClose:"uiTipContentWithClose",uiTipPopupContainer:"uiTipPopupContainer-llYjb","uiTipPopupContainer_animationTop-enter":"uiTipPopupContainer_animationTop-enter","uiTipPopupContainer_animationTop-enter-active":"uiTipPopupContainer_animationTop-enter-active","uiTipPopupContainer_animationTop-exit":"uiTipPopupContainer_animationTop-exit","uiTipPopupContainer_animationTop-exit-active":"uiTipPopupContainer_animationTop-exit-active","uiTipPopupContainer_animationBottom-enter":"uiTipPopupContainer_animationBottom-enter","uiTipPopupContainer_animationBottom-enter-active":"uiTipPopupContainer_animationBottom-enter-active","uiTipPopupContainer_animationBottom-exit":"uiTipPopupContainer_animationBottom-exit","uiTipPopupContainer_animationBottom-exit-active":"uiTipPopupContainer_animationBottom-exit-active","uiTipPopupContainer_animationRight-enter":"uiTipPopupContainer_animationRight-enter","uiTipPopupContainer_animationRight-enter-active":"uiTipPopupContainer_animationRight-enter-active","uiTipPopupContainer_animationRight-exit":"uiTipPopupContainer_animationRight-exit","uiTipPopupContainer_animationRight-exit-active":"uiTipPopupContainer_animationRight-exit-active","uiTipPopupContainer_animationLeft-enter":"uiTipPopupContainer_animationLeft-enter","uiTipPopupContainer_animationLeft-enter-active":"uiTipPopupContainer_animationLeft-enter-active","uiTipPopupContainer_animationLeft-exit":"uiTipPopupContainer_animationLeft-exit","uiTipPopupContainer_animationLeft-exit-active":"uiTipPopupContainer_animationLeft-exit-active",uiTipPointerContainer:"uiTipPointerContainer-FKU7h",uiTipPopupContainerWhenInsideModal:"uiTipPopupContainerWhenInsideModal-oAQrN",uiTipPopupContainerUnderToolbarUILayer:"uiTipPopupContainerUnderToolbarUILayer-vaVqa",uiTipPopupContainerSettingsNavigationUILayer:"uiTipPopupContainerSettingsNavigationUILayer-CgpNk",uiTipPopupContainerUnderBottomToolbar:"uiTipPopupContainerUnderBottomToolbar-z7gpO"};let i=t},164795(e,o,n){"use strict";n.r(o),n.d(o,{default:()=>i});var A=n(334942),r=n.n(A),s=n(260278),t=n.n(s)()(r());t.push([e.id,`.tipPointer-vg_Wj {
  display: flex;
  position: relative;
}
.tipPointer-vg_Wj.tipPointer_primary {
  color: var(--colors-text-primary);
}
.tipPointer-vg_Wj.tipPointer_secondary {
  color: var(--colors-text-neutrals-pressed);
}
.tipPointer-vg_Wj .pulseContainer {
  position: absolute;
}
`,"",{version:3,sources:["webpack://./../packages/ui-tip/src/pointer/tip-pointer.less"],names:[],mappings:"AAEA;EACC,aAAA;EACA,kBAAA;AADD;AAGC;EACC,iCAAA;AADF;AAIC;EACC,0CAAA;AAFF;AAPA;EAaE,kBAAA;AAHF",sourcesContent:["@import (reference) '@mirohq-internal/styles/variables.less';\n\n:local(.tipPointer) {\n	display: flex;\n	position: relative;\n\n	&.tipPointer_primary {\n		color: var(--colors-text-primary);\n	}\n\n	&.tipPointer_secondary {\n		color: var(--colors-text-neutrals-pressed);\n	}\n\n	.pulseContainer {\n		position: absolute;\n	}\n}\n"],sourceRoot:""}]),t.locals={tipPointer:"tipPointer-vg_Wj",tipPointer_primary:"tipPointer_primary",tipPointer_secondary:"tipPointer_secondary",pulseContainer:"pulseContainer"};let i=t},585432(e,o,n){function A(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=0xffffffff,this.__views__=[]}A.prototype=n(523508)(n(557701).prototype),A.prototype.constructor=A,e.exports=A},19381(e,o,n){function A(e,o){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=void 0}A.prototype=n(523508)(n(557701).prototype),A.prototype.constructor=A,e.exports=A},849174(e){e.exports=function(e){return e.split("")}},557701(e){e.exports=function(){}},789526(e,o,n){var A=n(474796),r=n(213044);e.exports=r?function(e,o){return r.set(e,o),e}:A},249772(e){e.exports=function(e,o,n){var A=-1,r=e.length;o<0&&(o=-o>r?0:r+o),(n=n>r?r:n)<0&&(n+=r),r=o>n?0:n-o>>>0,o>>>=0;for(var s=Array(r);++A<r;)s[A]=e[A+o];return s}},309270(e,o,n){var A=n(249772);e.exports=function(e,o,n){var r=e.length;return n=void 0===n?r:n,!o&&n>=r?e:A(e,o,n)}},269376(e){var o=Math.max;e.exports=function(e,n,A,r){for(var s=-1,t=e.length,i=A.length,a=-1,l=n.length,c=o(t-i,0),p=Array(l+c),u=!r;++a<l;)p[a]=n[a];for(;++s<i;)(u||s<t)&&(p[A[s]]=e[s]);for(;c--;)p[a++]=e[s++];return p}},297716(e){var o=Math.max;e.exports=function(e,n,A,r){for(var s=-1,t=e.length,i=-1,a=A.length,l=-1,c=n.length,p=o(t-a,0),u=Array(p+c),C=!r;++s<p;)u[s]=e[s];for(var E=s;++l<c;)u[E+l]=n[l];for(;++i<a;)(C||s<t)&&(u[E+A[i]]=e[s++]);return u}},728543(e){e.exports=function(e,o){for(var n=e.length,A=0;n--;)e[n]===o&&++A;return A}},212926(e,o,n){var A=n(734591),r=n(841433);e.exports=function(e,o,n){var s=1&o,t=A(e);return function o(){return(this&&this!==r&&this instanceof o?t:e).apply(s?n:this,arguments)}}},734591(e,o,n){var A=n(523508),r=n(258953);e.exports=function(e){return function(){var o=arguments;switch(o.length){case 0:return new e;case 1:return new e(o[0]);case 2:return new e(o[0],o[1]);case 3:return new e(o[0],o[1],o[2]);case 4:return new e(o[0],o[1],o[2],o[3]);case 5:return new e(o[0],o[1],o[2],o[3],o[4]);case 6:return new e(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new e(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var n=A(e.prototype),s=e.apply(n,o);return r(s)?s:n}}},57890(e,o,n){var A=n(396701),r=n(734591),s=n(967859),t=n(951709),i=n(251627),a=n(244894),l=n(841433);e.exports=function(e,o,n){var c=r(e);function p(){for(var r=arguments.length,u=Array(r),C=r,E=i(p);C--;)u[C]=arguments[C];var d=r<3&&u[0]!==E&&u[r-1]!==E?[]:a(u,E);return(r-=d.length)<n?t(e,o,s,p.placeholder,void 0,u,d,void 0,void 0,n-r):A(this&&this!==l&&this instanceof p?c:e,this,u)}return p}},967859(e,o,n){var A=n(269376),r=n(297716),s=n(728543),t=n(734591),i=n(951709),a=n(251627),l=n(418786),c=n(244894),p=n(841433);e.exports=function e(o,n,u,C,E,d,B,m,h,x){var g=128&n,f=1&n,F=2&n,y=24&n,v=512&n,z=F?void 0:t(o);function b(){for(var k=arguments.length,_=Array(k),D=k;D--;)_[D]=arguments[D];if(y)var T=a(b),w=s(_,T);if(C&&(_=A(_,C,E,y)),d&&(_=r(_,d,B,y)),k-=w,y&&k<x){var I=c(_,T);return i(o,n,e,b.placeholder,u,_,I,m,h,x-k)}var P=f?u:this,O=F?P[o]:o;return k=_.length,m?_=l(_,m):v&&k>1&&_.reverse(),g&&h<k&&(_.length=h),this&&this!==p&&this instanceof b&&(O=z||t(O)),O.apply(P,_)}return b}},914812(e,o,n){var A=n(396701),r=n(734591),s=n(841433);e.exports=function(e,o,n,t){var i=1&o,a=r(e);return function o(){for(var r=-1,l=arguments.length,c=-1,p=t.length,u=Array(p+l);++c<p;)u[c]=t[c];for(;l--;)u[c++]=arguments[++r];return A(this&&this!==s&&this instanceof o?a:e,i?n:this,u)}}},951709(e,o,n){var A=n(819595),r=n(158621),s=n(234353);e.exports=function(e,o,n,t,i,a,l,c,p,u){var C=8&o;o|=C?32:64,4&(o&=~(C?64:32))||(o&=-4);var E=[e,o,i,C?a:void 0,C?l:void 0,C?void 0:a,C?void 0:l,c,p,u],d=n.apply(void 0,E);return A(e)&&r(d,E),d.placeholder=t,s(d,e,o)}},277557(e,o,n){var A=n(789526),r=n(212926),s=n(57890),t=n(967859),i=n(914812),a=n(922217),l=n(872133),c=n(158621),p=n(234353),u=n(879445),C=Math.max;e.exports=function(e,o,n,E,d,B,m,h){var x=2&o;if(!x&&"function"!=typeof e)throw TypeError("Expected a function");var g=E?E.length:0;if(g||(o&=-97,E=d=void 0),m=void 0===m?m:C(u(m),0),h=void 0===h?h:u(h),g-=d?d.length:0,64&o){var f=E,F=d;E=d=void 0}var y=x?void 0:a(e),v=[e,o,n,E,d,f,F,B,m,h];if(y&&l(v,y),e=v[0],o=v[1],n=v[2],E=v[3],d=v[4],(h=v[9]=void 0===v[9]?x?0:e.length:C(v[9]-g,0))||!(24&o)||(o&=-25),o&&1!=o)z=8==o||16==o?s(e,o,h):32!=o&&33!=o||d.length?t.apply(void 0,v):i(e,o,n,E);else var z=r(e,o,n);return p((y?A:c)(z,v),e,o)}},859820(e,o,n){var A=n(673406),r=n(225265),s=n(926805);e.exports=function(e){return s(r(e,void 0,A),e+"")}},922217(e,o,n){var A=n(213044),r=n(175114);e.exports=A?function(e){return A.get(e)}:r},858112(e,o,n){var A=n(865769),r=Object.prototype.hasOwnProperty;e.exports=function(e){for(var o=e.name+"",n=A[o],s=r.call(A,o)?n.length:0;s--;){var t=n[s],i=t.func;if(null==i||i==e)return t.name}return o}},251627(e){e.exports=function(e){return e.placeholder}},457063(e){var o=/\{\n\/\* \[wrapped with (.+)\] \*/,n=/,? & /;e.exports=function(e){var A=e.match(o);return A?A[1].split(n):[]}},920654(e){var o=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return o.test(e)}},139976(e){var o=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;e.exports=function(e,n){var A=n.length;if(!A)return e;var r=A-1;return n[r]=(A>1?"& ":"")+n[r],n=n.join(A>2?", ":" "),e.replace(o,"{\n/* [wrapped with "+n+"] */\n")}},819595(e,o,n){var A=n(585432),r=n(922217),s=n(858112),t=n(387810);e.exports=function(e){var o=s(e),n=t[o];if("function"!=typeof n||!(o in A.prototype))return!1;if(e===n)return!0;var i=r(n);return!!i&&e===i[0]}},872133(e,o,n){var A=n(269376),r=n(297716),s=n(244894),t="__lodash_placeholder__",i=Math.min;e.exports=function(e,o){var n=e[1],a=o[1],l=n|a,c=l<131,p=128==a&&8==n||128==a&&256==n&&e[7].length<=o[8]||384==a&&o[7].length<=o[8]&&8==n;if(!(c||p))return e;1&a&&(e[2]=o[2],l|=1&n?0:4);var u=o[3];if(u){var C=e[3];e[3]=C?A(C,u,o[4]):u,e[4]=C?s(e[3],t):o[4]}return(u=o[5])&&(C=e[5],e[5]=C?r(C,u,o[6]):u,e[6]=C?s(e[5],t):o[6]),(u=o[7])&&(e[7]=u),128&a&&(e[8]=null==e[8]?o[8]:i(e[8],o[8])),null==e[9]&&(e[9]=o[9]),e[0]=o[0],e[1]=l,e}},213044(e,o,n){var A=n(878499);e.exports=A&&new A},865769(e){e.exports={}},418786(e,o,n){var A=n(268835),r=n(442845),s=Math.min;e.exports=function(e,o){for(var n=e.length,t=s(o.length,n),i=A(e);t--;){var a=o[t];e[t]=r(a,n)?i[a]:void 0}return e}},244894(e){var o="__lodash_placeholder__";e.exports=function(e,n){for(var A=-1,r=e.length,s=0,t=[];++A<r;){var i=e[A];(i===n||i===o)&&(e[A]=o,t[s++]=A)}return t}},158621(e,o,n){var A=n(789526);e.exports=n(723983)(A)},234353(e,o,n){var A=n(457063),r=n(139976),s=n(926805),t=n(143664);e.exports=function(e,o,n){var i=o+"";return s(e,r(i,t(A(i),n)))}},994092(e,o,n){var A=n(849174),r=n(920654),s=n(274082);e.exports=function(e){return r(e)?s(e):A(e)}},274082(e){var o="\\ud800-\\udfff",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",A="\\ud83c[\\udffb-\\udfff]",r="[^"+o+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",t="[\\ud800-\\udbff][\\udc00-\\udfff]",i="(?:"+n+"|"+A+")?",a="[\\ufe0e\\ufe0f]?",l="(?:\\u200d(?:"+[r,s,t].join("|")+")"+a+i+")*",c=RegExp(A+"(?="+A+")|"+("(?:"+[r+n+"?",n,s,t,"["+o+"]"].join("|"))+")"+(a+i+l),"g");e.exports=function(e){return e.match(c)||[]}},143664(e,o,n){var A=n(810149),r=n(312769),s=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];e.exports=function(e,o){return A(s,function(n){var A="_."+n[0];o&n[1]&&!r(e,A)&&e.push(A)}),e.sort()}},474517(e,o,n){var A=n(585432),r=n(19381),s=n(268835);e.exports=function(e){if(e instanceof A)return e.clone();var o=new r(e.__wrapped__,e.__chain__);return o.__actions__=s(e.__actions__),o.__index__=e.__index__,o.__values__=e.__values__,o}},214190(e,o,n){var A=n(277557);e.exports=function(e,o,n){return o=n?void 0:o,o=e&&null==o?e.length:o,A(e,128,void 0,void 0,void 0,void 0,o)}},701419(e,o,n){var A=n(702931);e.exports=function(e){return A(e,5)}},826231(e,o,n){var A=n(277557);function r(e,o,n){var s=A(e,8,void 0,void 0,void 0,void 0,void 0,o=n?void 0:o);return s.placeholder=r.placeholder,s}r.placeholder={},e.exports=r},673406(e,o,n){var A=n(261044);e.exports=function(e){return(null==e?0:e.length)?A(e,1):[]}},351972(e,o,n){var A=n(143166),r=n(248286),s=Array.prototype.push;function t(e,o){return 2==o?function(o,n){return e(o,n)}:function(o){return e(o)}}function i(e){for(var o=e?e.length:0,n=Array(o);o--;)n[o]=e[o];return n}function a(e,o){return function(){var n=arguments.length;if(n){for(var A=Array(n);n--;)A[n]=arguments[n];var r=A[0]=o.apply(void 0,A);return e.apply(void 0,A),r}}}e.exports=function e(o,n,l,c){var p="function"==typeof n,u=n===Object(n);if(u&&(c=l,l=n,n=void 0),null==l)throw TypeError();c||(c={});var C={cap:!("cap"in c)||c.cap,curry:!("curry"in c)||c.curry,fixed:!("fixed"in c)||c.fixed,immutable:!("immutable"in c)||c.immutable,rearg:!("rearg"in c)||c.rearg},E=p?l:r,d="curry"in c&&c.curry,B="fixed"in c&&c.fixed,m="rearg"in c&&c.rearg,h=p?l.runInContext():void 0,x=p?l:{ary:o.ary,assign:o.assign,clone:o.clone,curry:o.curry,forEach:o.forEach,isArray:o.isArray,isError:o.isError,isFunction:o.isFunction,isWeakMap:o.isWeakMap,iteratee:o.iteratee,keys:o.keys,rearg:o.rearg,toInteger:o.toInteger,toPath:o.toPath},g=x.ary,f=x.assign,F=x.clone,y=x.curry,v=x.forEach,z=x.isArray,b=x.isError,k=x.isFunction,_=x.isWeakMap,D=x.keys,T=x.rearg,w=x.toInteger,I=x.toPath,P=D(A.aryMethod),O={castArray:function(e){return function(){var o=arguments[0];return z(o)?e(i(o)):e.apply(void 0,arguments)}},iteratee:function(e){return function(){var o=arguments[0],n=arguments[1],A=e(o,n),r=A.length;return C.cap&&"number"==typeof n?(n=n>2?n-2:1,r&&r<=n?A:t(A,n)):A}},mixin:function(e){return function(o){var n=this;if(!k(n))return e(n,Object(o));var A=[];return v(D(o),function(e){k(o[e])&&A.push([e,n.prototype[e]])}),e(n,Object(o)),v(A,function(e){var o=e[1];k(o)?n.prototype[e[0]]=o:delete n.prototype[e[0]]}),n}},nthArg:function(e){return function(o){var n=o<0?1:w(o)+1;return y(e(o),n)}},rearg:function(e){return function(o,n){var A=n?n.length:0;return y(e(o,n),A)}},runInContext:function(n){return function(A){return e(o,n(A),c)}}};function R(e,o,n){if(C.fixed&&(B||!A.skipFixed[e])){var r=A.methodSpread[e],t=r&&r.start;return void 0===t?g(o,n):function(){for(var e=arguments.length,n=e-1,A=Array(e);e--;)A[e]=arguments[e];var r=A[t],i=A.slice(0,t);return r&&s.apply(i,r),t!=n&&s.apply(i,A.slice(t+1)),o.apply(this,i)}}return o}function S(e,o,n){return C.rearg&&n>1&&(m||!A.skipRearg[e])?T(o,A.methodRearg[e]||A.aryRearg[n]):o}function L(e,o){o=I(o);for(var n=-1,A=o.length,r=A-1,s=F(Object(e)),t=s;null!=t&&++n<A;){var i=o[n],a=t[i];null==a||k(a)||b(a)||_(a)||(t[i]=F(n==r?a:Object(a))),t=t[i]}return s}function W(o,n){var r=A.aliasToReal[o]||o,s=A.remap[r]||r,t=c;return function(o){return e(p?h:x,r,p?h[s]:n,f(f({},t),o))}}function N(e,o){return function(){var n=arguments.length;if(!n)return e();for(var A=Array(n);n--;)A[n]=arguments[n];var r=C.rearg?0:n-1;return A[r]=o(A[r]),e.apply(void 0,A)}}function U(e,o,n){var r,s=A.aliasToReal[e]||e,l=o,c=O[s];return c?l=c(o):C.immutable&&(A.mutate.array[s]?l=a(o,i):A.mutate.object[s]?l=a(o,function(e){return o({},e)}):A.mutate.set[s]&&(l=a(o,L))),v(P,function(e){return v(A.aryMethod[e],function(o){if(s==o){var n,i=A.methodSpread[s];return r=i&&i.afterRearg?R(s,S(s,l,e),e):S(s,R(s,l,e),e),n=r=function(e,o){if(C.cap){var n,r,s,i,a=A.iterateeRearg[e];if(a){return n=o,r=a,N(n,function(e){var o,n=r.length;return o=T(t(e,n),r),2==n?function(e,n){return o.apply(void 0,arguments)}:function(e){return o.apply(void 0,arguments)}})}var l=!p&&A.iterateeAry[e];if(l){return s=o,i=l,N(s,function(e){return"function"==typeof e?t(e,i):e})}}return o}(s,r),r=d||C.curry&&e>1?y(n,e):n,!1}}),!r}),r||(r=l),r==o&&(r=d?y(r,1):function(){return o.apply(this,arguments)}),r.convert=W(s,o),r.placeholder=o.placeholder=n,r}if(!u)return U(n,l,E);var j=l,M=[];return v(P,function(e){v(A.aryMethod[e],function(e){var o=j[A.remap[e]||e];o&&M.push([e,U(e,o,j)])})}),v(D(j),function(e){var o=j[e];if("function"==typeof o){for(var n=M.length;n--;)if(M[n][0]==e)return;o.convert=W(e,o),M.push([e,o])}}),v(M,function(e){j[e[0]]=e[1]}),j.convert=function(e){return j.runInContext.convert(e)(void 0)},j.placeholder=j,v(D(j),function(e){v(A.realToAlias[e]||[],function(o){j[o]=j[e]})}),j}},586929(e){e.exports={cap:!1,curry:!1,fixed:!1,immutable:!1,rearg:!1}},143166(e,o){o.aliasToReal={each:"forEach",eachRight:"forEachRight",entries:"toPairs",entriesIn:"toPairsIn",extend:"assignIn",extendAll:"assignInAll",extendAllWith:"assignInAllWith",extendWith:"assignInWith",first:"head",conforms:"conformsTo",matches:"isMatch",property:"get",__:"placeholder",F:"stubFalse",T:"stubTrue",all:"every",allPass:"overEvery",always:"constant",any:"some",anyPass:"overSome",apply:"spread",assoc:"set",assocPath:"set",complement:"negate",compose:"flowRight",contains:"includes",dissoc:"unset",dissocPath:"unset",dropLast:"dropRight",dropLastWhile:"dropRightWhile",equals:"isEqual",identical:"eq",indexBy:"keyBy",init:"initial",invertObj:"invert",juxt:"over",omitAll:"omit",nAry:"ary",path:"get",pathEq:"matchesProperty",pathOr:"getOr",paths:"at",pickAll:"pick",pipe:"flow",pluck:"map",prop:"get",propEq:"matchesProperty",propOr:"getOr",props:"at",symmetricDifference:"xor",symmetricDifferenceBy:"xorBy",symmetricDifferenceWith:"xorWith",takeLast:"takeRight",takeLastWhile:"takeRightWhile",unapply:"rest",unnest:"flatten",useWith:"overArgs",where:"conformsTo",whereEq:"isMatch",zipObj:"zipObject"},o.aryMethod={1:["assignAll","assignInAll","attempt","castArray","ceil","create","curry","curryRight","defaultsAll","defaultsDeepAll","floor","flow","flowRight","fromPairs","invert","iteratee","memoize","method","mergeAll","methodOf","mixin","nthArg","over","overEvery","overSome","rest","reverse","round","runInContext","spread","template","trim","trimEnd","trimStart","uniqueId","words","zipAll"],2:["add","after","ary","assign","assignAllWith","assignIn","assignInAllWith","at","before","bind","bindAll","bindKey","chunk","cloneDeepWith","cloneWith","concat","conformsTo","countBy","curryN","curryRightN","debounce","defaults","defaultsDeep","defaultTo","delay","difference","divide","drop","dropRight","dropRightWhile","dropWhile","endsWith","eq","every","filter","find","findIndex","findKey","findLast","findLastIndex","findLastKey","flatMap","flatMapDeep","flattenDepth","forEach","forEachRight","forIn","forInRight","forOwn","forOwnRight","get","groupBy","gt","gte","has","hasIn","includes","indexOf","intersection","invertBy","invoke","invokeMap","isEqual","isMatch","join","keyBy","lastIndexOf","lt","lte","map","mapKeys","mapValues","matchesProperty","maxBy","meanBy","merge","mergeAllWith","minBy","multiply","nth","omit","omitBy","overArgs","pad","padEnd","padStart","parseInt","partial","partialRight","partition","pick","pickBy","propertyOf","pull","pullAll","pullAt","random","range","rangeRight","rearg","reject","remove","repeat","restFrom","result","sampleSize","some","sortBy","sortedIndex","sortedIndexOf","sortedLastIndex","sortedLastIndexOf","sortedUniqBy","split","spreadFrom","startsWith","subtract","sumBy","take","takeRight","takeRightWhile","takeWhile","tap","throttle","thru","times","trimChars","trimCharsEnd","trimCharsStart","truncate","union","uniqBy","uniqWith","unset","unzipWith","without","wrap","xor","zip","zipObject","zipObjectDeep"],3:["assignInWith","assignWith","clamp","differenceBy","differenceWith","findFrom","findIndexFrom","findLastFrom","findLastIndexFrom","getOr","includesFrom","indexOfFrom","inRange","intersectionBy","intersectionWith","invokeArgs","invokeArgsMap","isEqualWith","isMatchWith","flatMapDepth","lastIndexOfFrom","mergeWith","orderBy","padChars","padCharsEnd","padCharsStart","pullAllBy","pullAllWith","rangeStep","rangeStepRight","reduce","reduceRight","replace","set","slice","sortedIndexBy","sortedLastIndexBy","transform","unionBy","unionWith","update","xorBy","xorWith","zipWith"],4:["fill","setWith","updateWith"]},o.aryRearg={2:[1,0],3:[2,0,1],4:[3,2,0,1]},o.iterateeAry={dropRightWhile:1,dropWhile:1,every:1,filter:1,find:1,findFrom:1,findIndex:1,findIndexFrom:1,findKey:1,findLast:1,findLastFrom:1,findLastIndex:1,findLastIndexFrom:1,findLastKey:1,flatMap:1,flatMapDeep:1,flatMapDepth:1,forEach:1,forEachRight:1,forIn:1,forInRight:1,forOwn:1,forOwnRight:1,map:1,mapKeys:1,mapValues:1,partition:1,reduce:2,reduceRight:2,reject:1,remove:1,some:1,takeRightWhile:1,takeWhile:1,times:1,transform:2},o.iterateeRearg={mapKeys:[1],reduceRight:[1,0]},o.methodRearg={assignInAllWith:[1,0],assignInWith:[1,2,0],assignAllWith:[1,0],assignWith:[1,2,0],differenceBy:[1,2,0],differenceWith:[1,2,0],getOr:[2,1,0],intersectionBy:[1,2,0],intersectionWith:[1,2,0],isEqualWith:[1,2,0],isMatchWith:[2,1,0],mergeAllWith:[1,0],mergeWith:[1,2,0],padChars:[2,1,0],padCharsEnd:[2,1,0],padCharsStart:[2,1,0],pullAllBy:[2,1,0],pullAllWith:[2,1,0],rangeStep:[1,2,0],rangeStepRight:[1,2,0],setWith:[3,1,2,0],sortedIndexBy:[2,1,0],sortedLastIndexBy:[2,1,0],unionBy:[1,2,0],unionWith:[1,2,0],updateWith:[3,1,2,0],xorBy:[1,2,0],xorWith:[1,2,0],zipWith:[1,2,0]},o.methodSpread={assignAll:{start:0},assignAllWith:{start:0},assignInAll:{start:0},assignInAllWith:{start:0},defaultsAll:{start:0},defaultsDeepAll:{start:0},invokeArgs:{start:2},invokeArgsMap:{start:2},mergeAll:{start:0},mergeAllWith:{start:0},partial:{start:1},partialRight:{start:1},without:{start:1},zipAll:{start:0}},o.mutate={array:{fill:!0,pull:!0,pullAll:!0,pullAllBy:!0,pullAllWith:!0,pullAt:!0,remove:!0,reverse:!0},object:{assign:!0,assignAll:!0,assignAllWith:!0,assignIn:!0,assignInAll:!0,assignInAllWith:!0,assignInWith:!0,assignWith:!0,defaults:!0,defaultsAll:!0,defaultsDeep:!0,defaultsDeepAll:!0,merge:!0,mergeAll:!0,mergeAllWith:!0,mergeWith:!0},set:{set:!0,setWith:!0,unset:!0,update:!0,updateWith:!0}},o.realToAlias=function(){var e=Object.prototype.hasOwnProperty,n=o.aliasToReal,A={};for(var r in n){var s=n[r];e.call(A,s)?A[s].push(r):A[s]=[r]}return A}(),o.remap={assignAll:"assign",assignAllWith:"assignWith",assignInAll:"assignIn",assignInAllWith:"assignInWith",curryN:"curry",curryRightN:"curryRight",defaultsAll:"defaults",defaultsDeepAll:"defaultsDeep",findFrom:"find",findIndexFrom:"findIndex",findLastFrom:"findLast",findLastIndexFrom:"findLastIndex",getOr:"get",includesFrom:"includes",indexOfFrom:"indexOf",invokeArgs:"invoke",invokeArgsMap:"invokeMap",lastIndexOfFrom:"lastIndexOf",mergeAll:"merge",mergeAllWith:"mergeWith",padChars:"pad",padCharsEnd:"padEnd",padCharsStart:"padStart",propertyOf:"get",rangeStep:"range",rangeStepRight:"rangeRight",restFrom:"rest",spreadFrom:"spread",trimChars:"trim",trimCharsEnd:"trimEnd",trimCharsStart:"trimStart",zipAll:"zip"},o.skipFixed={castArray:!0,flow:!0,flowRight:!0,iteratee:!0,mixin:!0,rearg:!0,runInContext:!0},o.skipRearg={add:!0,assign:!0,assignIn:!0,bind:!0,bindKey:!0,concat:!0,difference:!0,divide:!0,eq:!0,gt:!0,gte:!0,isEqual:!0,lt:!0,lte:!0,matchesProperty:!0,merge:!0,multiply:!0,overArgs:!0,partial:!0,partialRight:!0,propertyOf:!0,random:!0,range:!0,rangeRight:!0,subtract:!0,zip:!0,zipObject:!0,zipObjectDeep:!0}},836866(e,o,n){e.exports={ary:n(214190),assign:n(361145),clone:n(835841),curry:n(826231),forEach:n(810149),isArray:n(606397),isError:n(712246),isFunction:n(718446),isWeakMap:n(120978),iteratee:n(164667),keys:n(181452),rearg:n(950767),toInteger:n(879445),toPath:n(998916)}},289132(e,o,n){var A=n(351972),r=n(836866);e.exports=function(e,o,n){return A(r,e,o,n)}},248286(e){e.exports={}},120978(e,o,n){var A=n(531201),r=n(522934);e.exports=function(e){return r(e)&&"[object WeakMap]"==A(e)}},164667(e,o,n){var A=n(702931),r=n(809073);e.exports=function(e){return r("function"==typeof e?e:A(e,1))}},950767(e,o,n){var A=n(277557);e.exports=n(859820)(function(e,o){return A(e,256,void 0,void 0,void 0,o)})},998916(e,o,n){var A=n(44272),r=n(268835),s=n(606397),t=n(375414),i=n(543614),a=n(886729),l=n(953506);e.exports=function(e){return s(e)?A(e,a):t(e)?[e]:r(i(l(e)))}},387810(e,o,n){var A=n(585432),r=n(19381),s=n(557701),t=n(606397),i=n(522934),a=n(474517),l=Object.prototype.hasOwnProperty;function c(e){if(i(e)&&!t(e)&&!(e instanceof A)){if(e instanceof r)return e;if(l.call(e,"__wrapped__"))return a(e)}return new r(e)}c.prototype=s.prototype,c.prototype.constructor=c,e.exports=c},723527(e,o,n){var A=n(95292),r=n(449893),s=n(309383),t=n(556884),i=n(899088),a=n(727997),l=n(231440);l=l.__esModule?l.default:l;var c={};c.styleTagTransform=a,c.setAttributes=t,c.insert=s.bind(null,"head"),c.domAPI=r,c.insertStyleElement=i,A(l,c),e.exports=l&&l.locals||{}},829443(e,o,n){var A=n(95292),r=n(449893),s=n(309383),t=n(556884),i=n(899088),a=n(727997),l=n(159916);l=l.__esModule?l.default:l;var c={};c.styleTagTransform=a,c.setAttributes=t,c.insert=s.bind(null,"head"),c.domAPI=r,c.insertStyleElement=i,A(l,c),e.exports=l&&l.locals||{}},568164(e,o,n){var A=n(95292),r=n(449893),s=n(309383),t=n(556884),i=n(899088),a=n(727997),l=n(399987);l=l.__esModule?l.default:l;var c={};c.styleTagTransform=a,c.setAttributes=t,c.insert=s.bind(null,"head"),c.domAPI=r,c.insertStyleElement=i,A(l,c),e.exports=l&&l.locals||{}},550829(e,o,n){var A=n(95292),r=n(449893),s=n(309383),t=n(556884),i=n(899088),a=n(727997),l=n(86532);l=l.__esModule?l.default:l;var c={};c.styleTagTransform=a,c.setAttributes=t,c.insert=s.bind(null,"head"),c.domAPI=r,c.insertStyleElement=i,A(l,c),e.exports=l&&l.locals||{}},682175(e,o,n){var A=n(95292),r=n(449893),s=n(309383),t=n(556884),i=n(899088),a=n(727997),l=n(532150);l=l.__esModule?l.default:l;var c={};c.styleTagTransform=a,c.setAttributes=t,c.insert=s.bind(null,"head"),c.domAPI=r,c.insertStyleElement=i,A(l,c),e.exports=l&&l.locals||{}},714528(e,o,n){var A=n(95292),r=n(449893),s=n(309383),t=n(556884),i=n(899088),a=n(727997),l=n(164795);l=l.__esModule?l.default:l;var c={};c.styleTagTransform=a,c.setAttributes=t,c.insert=s.bind(null,"head"),c.domAPI=r,c.insertStyleElement=i,A(l,c),e.exports=l&&l.locals||{}}}]);
//# sourceMappingURL=https://miro.com/app/static/c~Board~ShareAndInvite~viewonlCanvasWS~viewonlHTTPCanvas.63f23ebd42d8d059.js.map