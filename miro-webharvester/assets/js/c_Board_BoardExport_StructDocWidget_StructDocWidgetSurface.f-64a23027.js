(self.webpackChunk=self.webpackChunk||[]).push([["42282"],{204227(e,a,t){"use strict";t.d(a,{I:()=>o});var r=t(311392);let o=(e,a)=>({message:e,metadata:a?.metadata,variant:a?.variant||r.t7.Mandatory,channel:r.Ub.Speech})},438220(e,a,t){"use strict";t.d(a,{L:()=>o,n:()=>r});let r=(0,t(182931).R$)("structDocLayoutDimensionsComponent"),o=e=>"immersive-mobile"===e.mode||"immersive-tablet"===e.mode},56618(e,a,t){"use strict";t.d(a,{m:()=>r});let r=(0,t(182931).R$)("structDocWidgetBlocksComponent")},18988(e,a,t){"use strict";t.d(a,{J:()=>r});let r=(0,t(182931).R$)("structDocWidgetCommentComponentKey")},583470(e,a,t){"use strict";t.d(a,{gU:()=>d,jg:()=>p,qZ:()=>c,zb:()=>n});let r=t(23288).Ay.import("parchment"),{Attributor:o}=r,c="bid",n="data-bid",d=e=>`[${n}="${e}"]`,p=new o("bid",n,{scope:r.Scope.BLOCK})},13142(e,a,t){"use strict";t.d(a,{v:()=>n});var r=t(185117),o=t(673276),c=t.n(o);class n extends r.A{static #e=this.blotName="threadIds";static #a=this.tagName="span";static #t=this.className="structDoc__thread-ids";static #r=this.TEMPORARY_ID="temp-new-thread";static #o=this.TO_BE_DELETED="DELETED";static #c=this.DELETED="DELETED-";static isThreadBlot(e){return e instanceof n}static formats(e){return n.getThreadIds(e)}static getThreadIds(e){let a=e.getAttribute("data-thread-ids");return a?a.split(" "):[]}static create(e){let a=super.create(e);return this.setBaseProperties(e,a),a}static #n=this.setBaseProperties=(e,a)=>{let[t,r,o]=n.getThreadDetails(e);0===t.size||(a.setAttribute("data-thread-ids",Array.from(t).join(" ")),o?a.setAttribute("data-temporary-thread","true"):a.removeAttribute("data-temporary-thread"),a.classList.remove(c()["comment__unresolved--overlap"]),a.classList.remove(c().comment__unresolved),n.getAreCommentsVisibleSetting?.()&&(1===r?a.classList.add(c().comment__unresolved):r>1&&a.classList.add(c()["comment__unresolved--overlap"])))};static #d=this.getThreadDetails=e=>{let a=new Set,t=0,r=!1;for(let o of e){if(o.startsWith(n.TO_BE_DELETED))continue;a.add(o),o===n.TEMPORARY_ID&&(r=!0);let e=n?.getIsCommentResolved;if(!e)throw Error("ThreadIds.getIsCommentResolved is not set");!1===e(o)&&t++}return[a,t,r]};getThreadIds(){return n.getThreadIds(this.domNode)}hasThreadId(e){return n.getThreadIds(this.domNode).some(a=>a===e)}getFirstUnresolvedComment(){let e=n?.getIsCommentResolved;if(!e)throw Error("ThreadIds.getIsCommentResolved is not set");return this.getThreadIds().find(a=>!1===e(a))}removeThreadId(e){let a=this.getThreadIds().filter(a=>a!==e);return this.format("threadIds",a),a}activate(e){e?(this.domNode.classList.remove(c()["comment__unresolved--active"]),this.domNode.classList.add(c()["comment__resolved--active"])):(this.domNode.classList.remove(c()["comment__resolved--active"]),this.domNode.classList.add(c()["comment__unresolved--active"]))}changeResolvedStatus(e,a){n.setBaseProperties(this.getThreadIds(),this.domNode),a&&this.activate(e)}commentVisibilityChanged(){n.setBaseProperties(this.getThreadIds(),this.domNode)}deactivate(){this.domNode.classList.remove(c()["comment__unresolved--active"]),this.domNode.classList.remove(c()["comment__resolved--active"])}hover(){this.hovered||n.getAreCommentsVisibleSetting?.()&&(this.hovered=!0,this.domNode.classList.add(c()["comment__unresolved--hovered"]))}static isDeletedThread(e){return e===n.TO_BE_DELETED||e.startsWith(n.DELETED)}unhover(){this.hovered&&(this.hovered=!1,this.domNode.classList.remove(c()["comment__unresolved--hovered"]))}constructor(...e){super(...e),this.hovered=!1}}},574250(e,a,t){"use strict";t.d(a,{$x:()=>n,S$:()=>A,hp:()=>c,mb:()=>p,oC:()=>s,py:()=>l,s:()=>d});let{Attributor:r,Scope:o}=t(433526).xz,c="callout-color",n="callout-icon",d=`data-${c}`,p=`data-${n}`,s=new class extends r{add(e,a){let t=super.add(e,a);return t&&e.setAttribute("role","note"),t}remove(e){super.remove(e),e.removeAttribute("role")}}(c,d,{scope:o.BLOCK}),A=new r(n,p,{scope:o.BLOCK}),l={[c]:null,[n]:null}},341158(e,a,t){"use strict";t.d(a,{ED:()=>n,HI:()=>p,rF:()=>c,sx:()=>d});var r=t(23288),o=t(13142);let c=e=>document.querySelector(`[data-thread-ids*="${e}"]`)?.getBoundingClientRect(),n=(e,a)=>{if(null==a)return null;let t=r.Ay.find(a);for(;t&&!o.v.isThreadBlot(t)&&t!==e.scroll;)t=t.parent;return o.v.isThreadBlot(t)?t:null},d=(e,a)=>e.scroll.descendants(e=>!!(e instanceof o.v&&e.getThreadIds().some(e=>a.has(e)))),p=(e,a,t,r)=>e.scroll.descendants(e=>e instanceof o.v&&e.getThreadIds().includes(a),t,r)},906303(e,a,t){"use strict";t.d(a,{o:()=>r});let r=(0,t(182931).R$)("StructDocWidgetTextProcessingComponent")},335535(e,a,t){"use strict";t.r(a),t.d(a,{default:()=>d});var r=t(334942),o=t.n(r),c=t(260278),n=t.n(c)()(o());n.push([e.id,`.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(32px - 2px), #9c9c9ce6 calc(32px - 2px), #9c9c9ce6 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(26px - 2px), #9c9c9ce6 calc(26px - 2px), #9c9c9ce6 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 246, 182)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #fff6b6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(32px - 2px), #9c9c9ce6 calc(32px - 2px), #9c9c9ce6 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(26px - 2px), #9c9c9ce6 calc(26px - 2px), #9c9c9ce6 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(248, 211, 175)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #f8d3af;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(32px - 2px), #9c9c9ce6 calc(32px - 2px), #9c9c9ce6 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(26px - 2px), #9c9c9ce6 calc(26px - 2px), #9c9c9ce6 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(255, 198, 198)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #ffc6c6;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(32px - 2px), #9c9c9ce6 calc(32px - 2px), #9c9c9ce6 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(26px - 2px), #9c9c9ce6 calc(26px - 2px), #9c9c9ce6 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(173, 240, 199)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #adf0c7;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(32px - 2px), #9c9c9ce6 calc(32px - 2px), #9c9c9ce6 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(26px - 2px), #9c9c9ce6 calc(26px - 2px), #9c9c9ce6 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(198, 220, 255)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #c6dcff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h1 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(32px - 2px), #9c9c9ce6 calc(32px - 2px), #9c9c9ce6 32px, transparent 32px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(26px - 2px), #97a8fea0 calc(26px - 2px), #97a8fea0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(26px - 2px), #3859ffa0 calc(26px - 2px), #3859ffa0 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h2 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(26px - 2px), #9c9c9ce6 calc(26px - 2px), #9c9c9ce6 26px, transparent 26px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 2px, #e8ecfca0 2px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 2px, #d9dffca0 2px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 2px, #c7d0fda0 2px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor h3 :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 2px, #9c9c9c6e 2px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor p :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor li :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'] {
  padding-bottom: 2px;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(21px - 2px), #97a8fea0 calc(21px - 2px), #97a8fea0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(21px - 2px), #3859ffa0 calc(21px - 2px), #3859ffa0 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(21px - 2px), #9c9c9ce6 calc(21px - 2px), #9c9c9ce6 21px, transparent 21px);
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment--overlap-eO6o7 {
  box-shadow: 0 -2px 0 #d9dffca0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment--hovered-lve9B {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment--active-e5AzW {
  box-shadow: 0 -2px 0 #c7d0fda0, 0 -2px 0 #dedaff;
}
.structuredDocument__editorRoot.ql-container.commentsWrapper-fBapo .ql-editor blockquote :not(code) span[data-thread-ids][style*='background-color: rgb(222, 218, 255)'].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e, 0 -2px 0 #dedaff;
}
.commentsWrapper-fBapo {
  --idle-color: var(--colors-blue-150, #e8ecfc);
  --overlap-color: var(--colors-blue-200, #d9dffc);
  --idle-border-color: var(--colors-blue-350, #97a8fe);
  --hover-color: var(--colors-blue-250, #c7d0fd);
  --hover-border-color: var(--colors-blue-500, #3859ff);
  --active-color: var(--colors-blue-250, #c7d0fd);
  --active-border-color: var(--colors-blue-500, #3859ff);
  --resolved-active-color: #9c9c9c6e;
  --resolved-active-border-color: #9c9c9ce6;
  --idle-color-alpha: #e8ecfca0;
  --overlap-color-alpha: #d9dffca0;
  --idle-border-color-alpha: #97a8fea0;
  --hover-color-alpha: #c7d0fda0;
  --hover-border-color-alpha: #3859ffa0;
  --active-color-alpha: #c7d0fda0;
  --active-border-color-alpha: #3859ffa0;
  --top-offset: 0px;
  --bg-top-offset: 0px;
  --code-underline-offset: 1.7px;
  --height: 21px;
}
.commentsWrapper-fBapo [data-thread-ids].comment__unresolved-hj8mD,
.commentsWrapper-fBapo [data-thread-ids].comment__unresolved--overlap-qMEIt {
  cursor: pointer;
}
.commentsWrapper-fBapo h1:first-child {
  --height: 41px;
}
.commentsWrapper-fBapo h1 {
  --top-offset: -1px;
  --bg-top-offset: -1px;
  --code-underline-offset: 3px;
  --height: 32px;
}
.commentsWrapper-fBapo h2 {
  --top-offset: -1px;
  --bg-top-offset: -1px;
  --code-underline-offset: 2px;
  --height: 26px;
}
.commentsWrapper-fBapo h3 {
  --top-offset: 0px;
  --bg-top-offset: 0px;
  --code-underline-offset: 1px;
  --height: 21px;
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) [data-thread-ids].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), var(--idle-color) var(--bg-top-offset), var(--idle-color) calc(var(--height) - 2px), var(--idle-border-color) calc(var(--height) - 2px), var(--idle-border-color) var(--height), transparent var(--height));
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) [data-thread-ids].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), var(--overlap-color) var(--bg-top-offset), var(--overlap-color) calc(var(--height) - 2px), var(--idle-border-color) calc(var(--height) - 2px), var(--idle-border-color) var(--height), transparent var(--height));
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) [data-thread-ids].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), var(--hover-color) var(--bg-top-offset), var(--hover-color) calc(var(--height) - 2px), var(--hover-border-color) calc(var(--height) - 2px), var(--hover-border-color) var(--height), transparent var(--height));
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) [data-thread-ids].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), var(--active-color) var(--bg-top-offset), var(--active-color) calc(var(--height) - 2px), var(--active-border-color) calc(var(--height) - 2px), var(--active-border-color) var(--height), transparent var(--height));
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) [data-thread-ids].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), var(--resolved-active-color) var(--bg-top-offset), var(--resolved-active-color) calc(var(--height) - 2px), var(--resolved-active-border-color) calc(var(--height) - 2px), var(--resolved-active-border-color) var(--height), transparent var(--height));
}
.commentsWrapper-fBapo h1 [style*='background-color:'] [data-thread-ids].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent 0px, #e8ecfca0 0px, #e8ecfca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.commentsWrapper-fBapo h1 [style*='background-color:'] [data-thread-ids].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent 0px, #d9dffca0 0px, #d9dffca0 calc(32px - 2px), #97a8fea0 calc(32px - 2px), #97a8fea0 32px, transparent 32px);
}
.commentsWrapper-fBapo h1 [style*='background-color:'] [data-thread-ids].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.commentsWrapper-fBapo h1 [style*='background-color:'] [data-thread-ids].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent 0px, #c7d0fda0 0px, #c7d0fda0 calc(32px - 2px), #3859ffa0 calc(32px - 2px), #3859ffa0 32px, transparent 32px);
}
.commentsWrapper-fBapo h1 [style*='background-color:'] [data-thread-ids].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent 0px, #9c9c9c6e 0px, #9c9c9c6e calc(32px - 2px), #9c9c9ce6 calc(32px - 2px), #9c9c9ce6 32px, transparent 32px);
}
.commentsWrapper-fBapo h1 [style*='background-color:'] [data-thread-ids].comment--overlap-eO6o7 {
  box-shadow: inset 0 2px 0 var(--overlap-color-alpha);
}
.commentsWrapper-fBapo h1 [style*='background-color:'] [data-thread-ids].comment--hovered-lve9B {
  box-shadow: inset 0 2px 0 var(--hover-color-alpha);
}
.commentsWrapper-fBapo h1 [style*='background-color:'] [data-thread-ids].comment--active-e5AzW {
  box-shadow: inset 0 2px 0 var(--active-color-alpha);
}
.commentsWrapper-fBapo :is(h2, h3, p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #e8ecfca0 var(--bg-top-offset), #e8ecfca0 calc(var(--height) - 2px), #97a8fea0 calc(var(--height) - 2px), #97a8fea0 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo :is(h2, h3, p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #d9dffca0 var(--bg-top-offset), #d9dffca0 calc(var(--height) - 2px), #97a8fea0 calc(var(--height) - 2px), #97a8fea0 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo :is(h2, h3, p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #c7d0fda0 var(--bg-top-offset), #c7d0fda0 calc(var(--height) - 2px), #3859ffa0 calc(var(--height) - 2px), #3859ffa0 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo :is(h2, h3, p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #c7d0fda0 var(--bg-top-offset), #c7d0fda0 calc(var(--height) - 2px), #3859ffa0 calc(var(--height) - 2px), #3859ffa0 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo :is(h2, h3, p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #9c9c9c6e var(--bg-top-offset), #9c9c9c6e calc(var(--height) - 2px), #9c9c9ce6 calc(var(--height) - 2px), #9c9c9ce6 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo h3 [style*='background-color:'] [data-thread-ids].comment__unresolved-hj8mD {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #e8ecfca0 var(--bg-top-offset), #e8ecfca0 calc(var(--height) - 2px), #97a8fea0 calc(var(--height) - 2px), #97a8fea0 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo h3 [style*='background-color:'] [data-thread-ids].comment__unresolved--overlap-qMEIt {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #d9dffca0 var(--bg-top-offset), #d9dffca0 calc(var(--height) - 2px), #97a8fea0 calc(var(--height) - 2px), #97a8fea0 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo h3 [style*='background-color:'] [data-thread-ids].comment__unresolved--hovered-yEvwQ {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #c7d0fda0 var(--bg-top-offset), #c7d0fda0 calc(var(--height) - 2px), #3859ffa0 calc(var(--height) - 2px), #3859ffa0 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo h3 [style*='background-color:'] [data-thread-ids].comment__unresolved--active-RsOKG {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #c7d0fda0 var(--bg-top-offset), #c7d0fda0 calc(var(--height) - 2px), #3859ffa0 calc(var(--height) - 2px), #3859ffa0 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo h3 [style*='background-color:'] [data-thread-ids].comment__resolved--active-tHTIs {
  background: linear-gradient(transparent, transparent var(--bg-top-offset), #9c9c9c6e var(--bg-top-offset), #9c9c9c6e calc(var(--height) - 2px), #9c9c9ce6 calc(var(--height) - 2px), #9c9c9ce6 var(--height), transparent var(--height));
}
.commentsWrapper-fBapo :is(p, li, blockquote) [data-thread-ids] {
  padding-bottom: 2px;
}
.commentsWrapper-fBapo :is(p, li, blockquote) [data-thread-ids].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 var(--colors-blue-150, #e8ecfc);
}
.commentsWrapper-fBapo :is(p, li, blockquote) [data-thread-ids].comment__unresolved--overlap-qMEIt {
  box-shadow: 0 -2px 0 var(--colors-blue-200, #d9dffc);
}
.commentsWrapper-fBapo :is(p, li, blockquote) [data-thread-ids].comment__unresolved--hovered-yEvwQ {
  box-shadow: 0 -2px 0 var(--colors-blue-250, #c7d0fd);
}
.commentsWrapper-fBapo :is(p, li, blockquote) [data-thread-ids].comment__unresolved--active-RsOKG {
  box-shadow: 0 -2px 0 var(--colors-blue-250, #c7d0fd);
}
.commentsWrapper-fBapo :is(p, li, blockquote) [data-thread-ids].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e;
}
.commentsWrapper-fBapo :is(p, li, blockquote) [style*='background-color:'] [data-thread-ids] {
  padding-bottom: 2px;
}
.commentsWrapper-fBapo :is(p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__unresolved-hj8mD {
  box-shadow: 0 -2px 0 #e8ecfca0;
}
.commentsWrapper-fBapo :is(p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__unresolved--overlap-qMEIt {
  box-shadow: 0 -2px 0 #d9dffca0;
}
.commentsWrapper-fBapo :is(p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__unresolved--hovered-yEvwQ {
  box-shadow: 0 -2px 0 #c7d0fda0;
}
.commentsWrapper-fBapo :is(p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__unresolved--active-RsOKG {
  box-shadow: 0 -2px 0 #c7d0fda0;
}
.commentsWrapper-fBapo :is(p, li, blockquote) [style*='background-color:'] [data-thread-ids].comment__resolved--active-tHTIs {
  box-shadow: 0 -2px 0 #9c9c9c6e;
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) code :is(.comment__unresolved-hj8mD, .comment__resolved--active-tHTIs) {
  position: relative;
  display: inline-flex;
  line-height: 1.2em;
  top: var(--top-offset);
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) code :is(.comment__unresolved-hj8mD, .comment__resolved--active-tHTIs)::after {
  content: '';
  position: absolute;
  bottom: calc(0px - var(--code-underline-offset));
  left: 0;
  right: 0;
  display: inline-block;
  width: 100%;
  border-bottom: 2px solid var(--idle-border-color) !important;
  line-height: 0;
  height: 0;
  padding-bottom: 0 !important;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) code :is(.comment__resolved--active-tHTIs)::after {
  border-color: var(--resolved-active-border-color) !important;
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) code :is([data-thread-ids].comment__unresolved--hovered-yEvwQ, [data-thread-ids].comment__unresolved--active-RsOKG) {
  background-color: var(--hover-color);
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) code :is([data-thread-ids].comment__unresolved--hovered-yEvwQ, [data-thread-ids].comment__unresolved--active-RsOKG)::after {
  border-bottom: 2px solid var(--hover-border-color) !important;
}
.commentsWrapper-fBapo :is(h1, h2, h3, p, li, blockquote) code [data-thread-ids] {
  box-shadow: unset !important;
  background: unset !important;
}
`,"",{version:3,sources:["webpack://./../packages/widget-structdoc/src/editor/formats/threadIds/Comment.module.less"],names:[],mappings:"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",sourcesContent:["@import '../colors/BackgroundColorConstants.less';\n\n@idleColor: var(--colors-blue-150, #e8ecfc);\n@overlapColor: var(--colors-blue-200, #d9dffc);\n@idleBorderColor: var(--colors-blue-350, #97a8fe);\n@hoverColor: var(--colors-blue-250, #c7d0fd);\n@hoverBorderColor: var(--colors-blue-500, #3859ff);\n@activeColor: var(--colors-blue-250, #c7d0fd);\n@activeBorderColor: var(--colors-blue-500, #3859ff);\n\n@resolvedActiveColor: #9c9c9c6e;\n@resolvedActiveBorderColor: #9c9c9ce6;\n\n// Unfortunately there are no design system tokens for these colors, so we need to use alpha values.\n@idleColorAlpha: #e8ecfca0;\n@overlapColorAlpha: #d9dffca0;\n@idleBorderColorAlpha: #97a8fea0;\n@hoverColorAlpha: #c7d0fda0;\n@hoverBorderColorAlpha: #3859ffa0;\n@activeColorAlpha: #c7d0fda0;\n@activeBorderColorAlpha: #3859ffa0;\n\n// So, very fun stuff: our combinations of line height and font size causes issues\n// that don't allow normal backgrounds with borders to work.\n// We could fix this by using inline-block for the thread spans, but that breaks multi line text.\n// So, we're using a linear gradient to create a background with 3 different segments,\n// to simulate proper spacing.\n.backgroundWithBorder(@backgroundColor, @borderColor, @topOffset, @height, @bottomOffset) {\n	background: linear-gradient(\n		transparent,\n		transparent @topOffset,\n		@backgroundColor @topOffset,\n		@backgroundColor calc(@height - @bottomOffset),\n		@borderColor calc(@height - @bottomOffset),\n		@borderColor @height,\n		transparent @height\n	);\n}\n\n.threadBackgroundStylesAlpha(@topOffset, @height, @bottomOffset) {\n	&.comment__unresolved {\n		.backgroundWithBorder(@idleColorAlpha, @idleBorderColorAlpha, @topOffset, @height, @bottomOffset);\n	}\n\n	&.comment__unresolved--overlap {\n		.backgroundWithBorder(@overlapColorAlpha, @idleBorderColorAlpha, @topOffset, @height, @bottomOffset);\n	}\n\n	&.comment__unresolved--hovered {\n		.backgroundWithBorder(@hoverColorAlpha, @hoverBorderColorAlpha, @topOffset, @height, @bottomOffset);\n	}\n\n	&.comment__unresolved--active {\n		.backgroundWithBorder(@activeColorAlpha, @activeBorderColorAlpha, @topOffset, @height, @bottomOffset);\n	}\n\n	&.comment__resolved--active {\n		.backgroundWithBorder(@resolvedActiveColor, @resolvedActiveBorderColor, @topOffset, @height, @bottomOffset);\n	}\n}\n\n.boxShadowAugmentedBackground(@topOffset) {\n	&.comment__unresolved {\n		box-shadow: 0 (-@topOffset) 0 @idleColor;\n	}\n\n	&.comment__unresolved--overlap {\n		box-shadow: 0 (-@topOffset) 0 @overlapColor;\n	}\n\n	&.comment__unresolved--hovered {\n		box-shadow: 0 (-@topOffset) 0 @hoverColor;\n	}\n\n	&.comment__unresolved--active {\n		box-shadow: 0 (-@topOffset) 0 @activeColor;\n	}\n\n	&.comment__resolved--active {\n		box-shadow: 0 (-@topOffset) 0 @resolvedActiveColor;\n	}\n}\n\n.boxShadowAugmentedBackgroundAlpha(@topOffset) {\n	&.comment__unresolved {\n		box-shadow: 0 (-@topOffset) 0 @idleColorAlpha;\n	}\n\n	&.comment__unresolved--overlap {\n		box-shadow: 0 (-@topOffset) 0 @overlapColorAlpha;\n	}\n\n	&.comment__unresolved--hovered {\n		box-shadow: 0 (-@topOffset) 0 @hoverColorAlpha;\n	}\n\n	&.comment__unresolved--active {\n		box-shadow: 0 (-@topOffset) 0 @activeColorAlpha;\n	}\n\n	&.comment__resolved--active {\n		box-shadow: 0 (-@topOffset) 0 @resolvedActiveColor;\n	}\n}\n\n.boxShadowAugmentedBackgroundAlphaWithColor(@color,@topOffset) {\n	&.comment__unresolved {\n		box-shadow:\n			0 (-@topOffset) 0 @idleColorAlpha,\n			0 (-@topOffset) 0 @color;\n	}\n\n	&.comment--overlap {\n		box-shadow:\n			0 (-@topOffset) 0 @overlapColorAlpha,\n			0 (-@topOffset) 0 @color;\n	}\n\n	&.comment--hovered {\n		box-shadow:\n			0 (-@topOffset) 0 @hoverColorAlpha,\n			0 (-@topOffset) 0 @color;\n	}\n\n	&.comment--active {\n		box-shadow:\n			0 (-@topOffset) 0 @activeColorAlpha,\n			0 (-@topOffset) 0 @color;\n	}\n\n	&.comment__resolved--active {\n		box-shadow:\n			0 (-@topOffset) 0 @resolvedActiveColor,\n			0 (-@topOffset) 0 @color;\n	}\n}\n\n.generateHighlightBackgroundRule(@label, @color-hex, @color-rgb) {\n	:global(.structuredDocument__editorRoot.ql-container).commentsWrapper :global(.ql-editor) {\n		h1 :not(code) span[data-thread-ids][style*='background-color: @{color-rgb}'] {\n			.threadBackgroundStylesAlpha(0px, 32px, 2px);\n		}\n\n		h2 :not(code) span[data-thread-ids][style*='background-color: @{color-rgb}'] {\n			.threadBackgroundStylesAlpha(2px, 26px, 2px);\n		}\n\n		h3 :not(code) span[data-thread-ids][style*='background-color: @{color-rgb}'] {\n			.threadBackgroundStylesAlpha(2px, 21px, 2px);\n		}\n\n		p :not(code) span[data-thread-ids][style*='background-color: @{color-rgb}'] {\n			padding-bottom: 2px;\n			.threadBackgroundStylesAlpha(0px, 21px, 2px);\n			.boxShadowAugmentedBackgroundAlphaWithColor(@color-hex, 2px);\n		}\n\n		li :not(code) span[data-thread-ids][style*='background-color: @{color-rgb}'] {\n			.threadBackgroundStylesAlpha(0px, 21px, 2px);\n			.boxShadowAugmentedBackgroundAlphaWithColor(@color-hex, 2px);\n		}\n\n		blockquote :not(code) span[data-thread-ids][style*='background-color: @{color-rgb}'] {\n			padding-bottom: 2px;\n			.threadBackgroundStylesAlpha(0px, 21px, 2px);\n			.boxShadowAugmentedBackgroundAlphaWithColor(@color-hex, 2px);\n		}\n	}\n}\n\neach(@highlightBackgroundColors, {\n    .generateHighlightBackgroundRule(@value...);\n  });\n\n.commentsWrapper {\n	--idle-color: var(--colors-blue-150, #e8ecfc);\n	--overlap-color: var(--colors-blue-200, #d9dffc);\n	--idle-border-color: var(--colors-blue-350, #97a8fe);\n	--hover-color: var(--colors-blue-250, #c7d0fd);\n	--hover-border-color: var(--colors-blue-500, #3859ff);\n	--active-color: var(--colors-blue-250, #c7d0fd);\n	--active-border-color: var(--colors-blue-500, #3859ff);\n\n	--resolved-active-color: #9c9c9c6e;\n	--resolved-active-border-color: #9c9c9ce6;\n\n	// Unfortunately there are no design system tokens for these colors, so we need to use alpha values.\n	--idle-color-alpha: #e8ecfca0;\n	--overlap-color-alpha: #d9dffca0;\n	--idle-border-color-alpha: #97a8fea0;\n	--hover-color-alpha: #c7d0fda0;\n	--hover-border-color-alpha: #3859ffa0;\n	--active-color-alpha: #c7d0fda0;\n	--active-border-color-alpha: #3859ffa0;\n\n	[data-thread-ids] {\n		&.comment__unresolved,\n		&.comment__unresolved--overlap {\n			cursor: pointer;\n		}\n	}\n	--top-offset: 0px;\n	--bg-top-offset: 0px;\n	--code-underline-offset: 1.7px;\n	--height: 21px;\n\n	h1:first-child {\n		--height: 41px;\n	}\n\n	h1 {\n		--top-offset: -1px;\n		--bg-top-offset: -1px;\n		--code-underline-offset: 3px;\n		--height: 32px;\n	}\n\n	h2 {\n		--top-offset: -1px;\n		--bg-top-offset: -1px;\n		--code-underline-offset: 2px;\n		--height: 26px;\n	}\n\n	h3 {\n		--top-offset: 0px;\n		--bg-top-offset: 0px;\n		--code-underline-offset: 1px;\n		--height: 21px;\n	}\n\n	:is(h1, h2, h3, p, li, blockquote) [data-thread-ids] {\n		&.comment__unresolved {\n			.backgroundWithBorder(var(--idle-color), var(--idle-border-color), var(--bg-top-offset), var(--height), 2px);\n		}\n\n		&.comment__unresolved--overlap {\n			.backgroundWithBorder(var(--overlap-color), var(--idle-border-color), var(--bg-top-offset), var(--height), 2px);\n		}\n\n		&.comment__unresolved--hovered {\n			.backgroundWithBorder(var(--hover-color), var(--hover-border-color), var(--bg-top-offset), var(--height), 2px);\n		}\n\n		&.comment__unresolved--active {\n			.backgroundWithBorder(var(--active-color), var(--active-border-color), var(--bg-top-offset), var(--height), 2px);\n		}\n\n		&.comment__resolved--active {\n			.backgroundWithBorder(var(--resolved-active-color), var(--resolved-active-border-color), var(--bg-top-offset), var(--height), 2px);\n		}\n	}\n\n	h1 [style*='background-color:'] [data-thread-ids] {\n		.threadBackgroundStylesAlpha(0px, 32px, 2px);\n\n		&.comment--overlap {\n			box-shadow: inset 0 2px 0 var(--overlap-color-alpha);\n		}\n\n		&.comment--hovered {\n			box-shadow: inset 0 2px 0 var(--hover-color-alpha);\n		}\n\n		&.comment--active {\n			box-shadow: inset 0 2px 0 var(--active-color-alpha);\n		}\n	}\n\n	:is(h2, h3, p, li, blockquote) [style*='background-color:'] [data-thread-ids] {\n		.threadBackgroundStylesAlpha(var(--bg-top-offset), var(--height), 2px);\n	}\n\n	h3 [style*='background-color:'] [data-thread-ids] {\n		.threadBackgroundStylesAlpha(var(--bg-top-offset), var(--height), 2px);\n	}\n\n	:is(p, li, blockquote) [data-thread-ids] {\n		padding-bottom: 2px;\n		.boxShadowAugmentedBackground(2px);\n	}\n\n	:is(p, li, blockquote) [style*='background-color:'] [data-thread-ids] {\n		padding-bottom: 2px;\n		.boxShadowAugmentedBackgroundAlpha(2px);\n	}\n\n	:is(h1, h2, h3, p, li, blockquote) {\n		code :is(.comment__unresolved, .comment__resolved--active) {\n			position: relative;\n			display: inline-flex;\n			line-height: 1.2em;\n			top: var(--top-offset);\n\n			&::after {\n				content: '';\n				position: absolute;\n				bottom: calc(0px - var(--code-underline-offset));\n				left: 0;\n				right: 0;\n				display: inline-block;\n				width: 100%;\n				border-bottom: 2px solid var(--idle-border-color) !important;\n				line-height: 0;\n				height: 0;\n				padding-bottom: 0 !important;\n				border-bottom-left-radius: 0;\n				border-bottom-right-radius: 0;\n			}\n		}\n\n		code :is(.comment__resolved--active)::after {\n			border-color: var(--resolved-active-border-color) !important;\n		}\n\n		code :is([data-thread-ids].comment__unresolved--hovered, [data-thread-ids].comment__unresolved--active) {\n			background-color: var(--hover-color);\n\n			&::after {\n				border-bottom: 2px solid var(--hover-border-color) !important;\n			}\n		}\n\n		code [data-thread-ids] {\n			box-shadow: unset !important;\n			background: unset !important;\n		}\n	}\n}\n"],sourceRoot:""}]),n.locals={structuredDocument__editorRoot:"structuredDocument__editorRoot","ql-container":"ql-container",commentsWrapper:"commentsWrapper-fBapo","ql-editor":"ql-editor",comment__unresolved:"comment__unresolved-hj8mD","comment__unresolved--overlap":"comment__unresolved--overlap-qMEIt","comment__unresolved--hovered":"comment__unresolved--hovered-yEvwQ","comment__unresolved--active":"comment__unresolved--active-RsOKG","comment__resolved--active":"comment__resolved--active-tHTIs","comment--overlap":"comment--overlap-eO6o7","comment--hovered":"comment--hovered-lve9B","comment--active":"comment--active-e5AzW"};let d=n},673276(e,a,t){var r=t(95292),o=t(449893),c=t(309383),n=t(556884),d=t(899088),p=t(727997),s=t(335535);s=s.__esModule?s.default:s;var A={};A.styleTagTransform=p,A.setAttributes=n,A.insert=c.bind(null,"head"),A.domAPI=o,A.insertStyleElement=d,r(s,A),e.exports=s&&s.locals||{}}}]);
//# sourceMappingURL=https://miro.com/app/static/c~Board~BoardExport~StructDocWidget~StructDocWidgetSurface.fea5e2e3d671d118.js.map