(function(De,k){typeof exports=="object"&&typeof module<"u"?k(exports):typeof define=="function"&&define.amd?define(["exports"],k):(De=typeof globalThis<"u"?globalThis:De||self,k(De.mcsNavbar={}))})(this,function(De){"use strict";function k(){}function P(n,e){for(const t in e)n[t]=e[t];return n}function At(n){return n()}function an(){return Object.create(null)}function ve(n){n.forEach(At)}function it(n){return typeof n=="function"}function ee(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let st;function ot(n,e){return st||(st=document.createElement("a")),st.href=e,n===st.href}function cn(n){return Object.keys(n).length===0}function G(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function c(n,e){n.appendChild(e)}function H(n,e,t){n.insertBefore(e,t||null)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function N(n){return document.createElement(n)}function u(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Rt(n){return document.createTextNode(n)}function te(){return Rt(" ")}function Lr(){return Rt("")}function Pe(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function ln(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function a(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Z(n,e){for(const t in e)a(n,t,e[t])}function Ur(n){return Array.from(n.childNodes)}function xr(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function C(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function at(n,e,t){n.classList[t?"add":"remove"](e)}function Ot(n){const e={};for(const t of n)e[t.name]=t.value;return e}let Ge;function Ze(n){Ge=n}function Br(){if(!Ge)throw new Error("Function called outside component initialization");return Ge}function $r(n){Br().$$.on_mount.push(n)}const Ne=[],un=[],ct=[],dn=[],Vr=Promise.resolve();let Mt=!1;function Fr(){Mt||(Mt=!0,Vr.then(lt))}function Dt(n){ct.push(n)}const Pt=new Set;let Le=0;function lt(){if(Le!==0)return;const n=Ge;do{try{for(;Le<Ne.length;){const e=Ne[Le];Le++,Ze(e),Hr(e.$$)}}catch(e){throw Ne.length=0,Le=0,e}for(Ze(null),Ne.length=0,Le=0;un.length;)un.pop()();for(let e=0;e<ct.length;e+=1){const t=ct[e];Pt.has(t)||(Pt.add(t),t())}ct.length=0}while(Ne.length);for(;dn.length;)dn.pop()();Mt=!1,Pt.clear(),Ze(n)}function Hr(n){if(n.fragment!==null){n.update(),ve(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Dt)}}const ut=new Set;let Se;function Nt(){Se={r:0,c:[],p:Se}}function Lt(){Se.r||ve(Se.c),Se=Se.p}function W(n,e){n&&n.i&&(ut.delete(n),n.i(e))}function z(n,e,t,r){if(n&&n.o){if(ut.has(n))return;ut.add(n),Se.c.push(()=>{ut.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function de(n,e){const t={},r={},i={$$scope:1};let s=n.length;for(;s--;){const o=n[s],l=e[s];if(l){for(const d in o)d in l||(r[d]=1);for(const d in l)i[d]||(t[d]=l[d],i[d]=1);n[s]=l}else for(const d in o)i[d]=1}for(const o in r)o in t||(t[o]=void 0);return t}function ae(n){n&&n.c()}function ie(n,e,t,r){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),r||Dt(()=>{const o=n.$$.on_mount.map(At).filter(it);n.$$.on_destroy?n.$$.on_destroy.push(...o):ve(o),n.$$.on_mount=[]}),s.forEach(Dt)}function ne(n,e){const t=n.$$;t.fragment!==null&&(ve(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function jr(n,e){n.$$.dirty[0]===-1&&(Ne.push(n),Fr(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function re(n,e,t,r,i,s,o,l=[-1]){const d=Ge;Ze(n);const h=n.$$={fragment:null,ctx:[],props:s,update:k,not_equal:i,bound:an(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:an(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};o&&o(h.root);let m=!1;if(h.ctx=t?t(n,e.props||{},(f,g,...b)=>{const w=b.length?b[0]:g;return h.ctx&&i(h.ctx[f],h.ctx[f]=w)&&(!h.skip_bound&&h.bound[f]&&h.bound[f](w),m&&jr(n,f)),g}):[],h.update(),m=!0,ve(h.before_update),h.fragment=r?r(h.ctx):!1,e.target){if(e.hydrate){const f=Ur(e.target);h.fragment&&h.fragment.l(f),f.forEach(j)}else h.fragment&&h.fragment.c();e.intro&&W(n.$$.fragment),ie(n,e.target,e.anchor,e.customElement),lt()}Ze(d)}let dt;typeof HTMLElement=="function"&&(dt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:n}=this.$$;this.$$.on_disconnect=n.map(At).filter(it);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(n,e,t){this[n]=t}disconnectedCallback(){ve(this.$$.on_disconnect)}$destroy(){ne(this,1),this.$destroy=k}$on(n,e){if(!it(e))return k;const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(e),()=>{const r=t.indexOf(e);r!==-1&&t.splice(r,1)}}$set(n){this.$$set&&!cn(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}});class he{$destroy(){ne(this,1),this.$destroy=k}$on(e,t){if(!it(t))return k;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!cn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Gr(n){let e,t,r,i,s,o=[{"stroke-miterlimit":"10"},{style:"fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"},{viewBox:"0 0 267.426 268.163"},{"xml:space":"preserve"},{xmlns:"http://www.w3.org/2000/svg"},n[0]],l={};for(let d=0;d<o.length;d+=1)l=P(l,o[d]);return{c(){e=u("svg"),t=u("clipPath"),r=u("path"),i=u("g"),s=u("path"),a(r,"d","M0 0h267.426v268.163H0z"),a(t,"id","a"),a(s,"d","M10.604 0h41.213C57.673 0 62.42 4.747 62.42 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603H10.604C4.747 62.42 0 57.673 0 51.817V10.604C0 4.747 4.747 0 10.604 0ZM113.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C103 4.747 107.747 0 113.604 0ZM215.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C205 4.747 209.747 0 215.604 0ZM10.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 165.154 0 160.406 0 154.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM10.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 268.154 0 263.406 0 257.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604Z"),a(i,"clip-path","url(#a)"),a(i,"fill","#fff"),Z(e,l)},m(d,h){H(d,e,h),c(e,t),c(t,r),c(e,i),c(i,s)},p(d,[h]){Z(e,l=de(o,[{"stroke-miterlimit":"10"},{style:"fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"},{viewBox:"0 0 267.426 268.163"},{"xml:space":"preserve"},{xmlns:"http://www.w3.org/2000/svg"},h&1&&d[0]]))},i:k,o:k,d(d){d&&j(e)}}}function Zr(n,e,t){return n.$$set=r=>{t(0,e=P(P({},e),G(r)))},e=G(e),[e]}class Wr extends he{constructor(e){super(),re(this,e,Zr,Gr,ee,{})}}function zr(n){let e,t,r,i,s,o,l,d,h,m,f,g,b,w,p,v,_,y,S,M,T,U,I,R,O,$,x,F=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1488.35 398.49"},n[0]],B={};for(let A=0;A<F.length;A+=1)B=P(B,F[A]);return{c(){e=u("svg"),t=u("defs"),r=u("filter"),i=u("feOffset"),s=u("feGaussianBlur"),o=u("feFlood"),l=u("feComposite"),d=u("feComposite"),h=u("filter"),m=u("feOffset"),f=u("feGaussianBlur"),g=u("feFlood"),b=u("feComposite"),w=u("feComposite"),p=u("filter"),v=u("feOffset"),_=u("feGaussianBlur"),y=u("feFlood"),S=u("feComposite"),M=u("feComposite"),T=u("g"),U=u("path"),I=u("g"),R=u("path"),O=u("g"),$=u("path"),x=u("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(l,"in2","blur"),a(l,"operator","in"),a(d,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(f,"result","blur-2"),a(f,"stdDeviation","19.31"),a(g,"flood-color","#34c4e7"),a(g,"flood-opacity",".75"),a(b,"in2","blur-2"),a(b,"operator","in"),a(w,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(_,"result","blur-3"),a(_,"stdDeviation","19.31"),a(y,"flood-color","#34c4e7"),a(y,"flood-opacity",".75"),a(S,"in2","blur-3"),a(S,"operator","in"),a(M,"in","SourceGraphic"),a(p,"id","c"),a(p,"filterUnits","userSpaceOnUse"),a(U,"d","M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM633.87 324.48c0 7.29-1.93 13.24-5.77 17.85-3.85 4.61-8.81 6.92-14.89 6.92h-67.77c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85v-88.6h25.88v85.92H608V0h25.88v324.48ZM781.13 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM923.18 349.25h-26.99L846.3 238.56v110.69h-24.76V0h24.76v221.83l46.54-89.71h26.62v.89l-52.69 95.96 56.41 120.29ZM1050.52 324.03c0 16.81-6.95 25.22-20.85 25.22H970.1c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1195.55 302.61c0 13.39-3.66 24.51-10.98 33.36-7.33 8.85-16.51 13.28-27.55 13.28h-65.53V0h24.76v138.14c9.8-1.49 19.61-2.97 29.41-4.46 12.41-1.93 22.15-2.9 29.23-2.9 13.78 0 20.66 8.11 20.66 24.33v147.51Zm-24.76-4.46V158.67l-54.55 1.79v162.69h34.25c13.53 0 20.29-8.33 20.29-24.99ZM1340.02 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1478.71 349.25h-25.13l-30.53-85.92-30.9 85.92h-24.39v-.89l42.26-110.69-39.65-105.56h25.13l27.93 79.67 28.67-79.67h24.02v.89l-39.65 103.77 42.26 112.47Z"),C(U,"fill","#fff"),C(T,"filter","url(#a)"),a(R,"d","M1478.7 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1478.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(R,"fill","#2bc0d3"),C(I,"filter","url(#b)"),a($,"d","M1419.87 62.05h-263.59c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h263.59c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM782.86 62.05h-52.78c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h52.78c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C($,"fill","#2bc0d3"),a(x,"d","M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1449.28 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1049.92 62.05H878.63c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h171.29c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(x,"fill","#2bc0d3"),C(O,"filter","url(#c)"),Z(e,B)},m(A,V){H(A,e,V),c(e,t),c(t,r),c(r,i),c(r,s),c(r,o),c(r,l),c(r,d),c(t,h),c(h,m),c(h,f),c(h,g),c(h,b),c(h,w),c(t,p),c(p,v),c(p,_),c(p,y),c(p,S),c(p,M),c(e,T),c(T,U),c(e,I),c(I,R),c(e,O),c(O,$),c(O,x)},p(A,[V]){Z(e,B=de(F,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1488.35 398.49"},V&1&&A[0]]))},i:k,o:k,d(A){A&&j(e)}}}function qr(n,e,t){return n.$$set=r=>{t(0,e=P(P({},e),G(r)))},e=G(e),[e]}class Kr extends he{constructor(e){super(),re(this,e,qr,zr,ee,{})}}function Jr(n){let e,t,r,i,s,o,l,d,h,m,f,g,b,w,p,v,_,y,S,M,T,U,I,R,O,$,x,F=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1205.07 398.49"},n[0]],B={};for(let A=0;A<F.length;A+=1)B=P(B,F[A]);return{c(){e=u("svg"),t=u("defs"),r=u("filter"),i=u("feOffset"),s=u("feGaussianBlur"),o=u("feFlood"),l=u("feComposite"),d=u("feComposite"),h=u("filter"),m=u("feOffset"),f=u("feGaussianBlur"),g=u("feFlood"),b=u("feComposite"),w=u("feComposite"),p=u("filter"),v=u("feOffset"),_=u("feGaussianBlur"),y=u("feFlood"),S=u("feComposite"),M=u("feComposite"),T=u("g"),U=u("path"),I=u("g"),R=u("path"),O=u("g"),$=u("path"),x=u("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(l,"in2","blur"),a(l,"operator","in"),a(d,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(f,"result","blur-2"),a(f,"stdDeviation","19.31"),a(g,"flood-color","#34c4e7"),a(g,"flood-opacity",".75"),a(b,"in2","blur-2"),a(b,"operator","in"),a(w,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(_,"result","blur-3"),a(_,"stdDeviation","19.31"),a(y,"flood-color","#34c4e7"),a(y,"flood-opacity",".75"),a(S,"in2","blur-3"),a(S,"operator","in"),a(M,"in","SourceGraphic"),a(p,"id","c"),a(p,"filterUnits","userSpaceOnUse"),a(U,"d","M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM631.64 27.45h-45.05v321.8h-25.88V27.45h-45.43V0h116.36v27.45ZM762.7 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM897.86 203.53h-24.39v-44.86l-45.61 1.79v188.8H803.1V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM994.48 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM1052.01 349.25h-24.39V0h24.39v349.25ZM1195.36 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z"),C(U,"fill","#fff"),C(T,"filter","url(#a)"),a(R,"d","M1195.41 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h1185.76c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(R,"fill","#2bc0d3"),C(I,"filter","url(#b)"),a($,"d","M1136.59 62.05h-43.62c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h43.62c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM899.91 62.05H730.08c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h169.83c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C($,"fill","#2bc0d3"),a(x,"d","M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1166 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"),C(x,"fill","#2bc0d3"),C(O,"filter","url(#c)"),Z(e,B)},m(A,V){H(A,e,V),c(e,t),c(t,r),c(r,i),c(r,s),c(r,o),c(r,l),c(r,d),c(t,h),c(h,m),c(h,f),c(h,g),c(h,b),c(h,w),c(t,p),c(p,v),c(p,_),c(p,y),c(p,S),c(p,M),c(e,T),c(T,U),c(e,I),c(I,R),c(e,O),c(O,$),c(O,x)},p(A,[V]){Z(e,B=de(F,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1205.07 398.49"},V&1&&A[0]]))},i:k,o:k,d(A){A&&j(e)}}}function Yr(n,e,t){return n.$$set=r=>{t(0,e=P(P({},e),G(r)))},e=G(e),[e]}class Xr extends he{constructor(e){super(),re(this,e,Yr,Jr,ee,{})}}function Qr(n){let e,t,r,i,s,o,l,d,h,m,f,g,b,w,p,v,_,y,S,M,T,U,I,R,O,$,x,F,B,A,V,J,K,Y,X,se=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1551.75 432.49"},n[0]],Q={};for(let D=0;D<se.length;D+=1)Q=P(Q,se[D]);return{c(){e=u("svg"),t=u("defs"),r=u("filter"),i=u("feOffset"),s=u("feGaussianBlur"),o=u("feFlood"),l=u("feComposite"),d=u("feComposite"),h=u("filter"),m=u("feOffset"),f=u("feGaussianBlur"),g=u("feFlood"),b=u("feComposite"),w=u("feComposite"),p=u("filter"),v=u("feOffset"),_=u("feGaussianBlur"),y=u("feFlood"),S=u("feComposite"),M=u("feComposite"),T=u("filter"),U=u("feOffset"),I=u("feGaussianBlur"),R=u("feFlood"),O=u("feComposite"),$=u("feComposite"),x=u("g"),F=u("path"),B=u("g"),A=u("path"),V=u("g"),J=u("path"),K=u("g"),Y=u("path"),X=u("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(l,"in2","blur"),a(l,"operator","in"),a(d,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(f,"result","blur-2"),a(f,"stdDeviation","19.31"),a(g,"flood-color","#34c4e7"),a(g,"flood-opacity",".75"),a(b,"in2","blur-2"),a(b,"operator","in"),a(w,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(_,"result","blur-3"),a(_,"stdDeviation","19.31"),a(y,"flood-color","#34c4e7"),a(y,"flood-opacity",".75"),a(S,"in2","blur-3"),a(S,"operator","in"),a(M,"in","SourceGraphic"),a(p,"id","c"),a(p,"filterUnits","userSpaceOnUse"),a(I,"result","blur-4"),a(I,"stdDeviation","19.31"),a(R,"flood-color","#34c4e7"),a(R,"flood-opacity",".75"),a(O,"in2","blur-4"),a(O,"operator","in"),a($,"in","SourceGraphic"),a(T,"id","d"),a(T,"filterUnits","userSpaceOnUse"),a(F,"d","M163.42 350.14h-24.39V128.99c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V.89h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4.89h24.02v349.25ZM326.69 325.37c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V25.66c0-7.29 1.92-13.24 5.77-17.85 3.84-4.61 8.81-6.92 14.89-6.92h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85v81.24h-26.06V28.34h-64.79V322.7h64.79v-85.92h26.06v88.6ZM485.49 325.37c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V25.66c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85v81.24h-25.88V28.34h-62.93v73.65l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM648.77 350.14h-25.69l-10.24-77.66h-57.9l-10.24 77.66h-24.95v-.89L571.69 0h25.51l51.57 350.14Zm-39.28-105.11L583.98 55.79l-25.69 189.24h51.2ZM784.86 350.14H760.1V159.56l-54.55 1.79v188.8h-24.76V133.01h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM927.28 350.14h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04H826v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM993.74 350.14h-24.39V.89h24.39v349.25ZM1137.83 133.01l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM1265.73 324.93c0 16.81-7.01 25.22-21.04 25.22h-56.78c-14.03 0-21.04-8.4-21.04-25.22v-49.32h24.39v48.87h50.08v-43.29l-64.79-63.6c-6.21-5.95-9.31-13.69-9.31-23.21v-36.15c0-16.81 7.01-25.22 21.04-25.22h56.04c14.02 0 21.04 8.41 21.04 25.22v43.29h-24.02v-42.85h-50.08v37.94l65.35 63.6c6.08 5.8 9.12 13.69 9.12 23.66v41.06ZM1406.29 324.93c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22V158.22c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1542.01 204.42h-24.39v-44.86l-45.61 1.79v188.8h-24.76V133.01h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43Z"),C(F,"fill","#fff"),C(x,"filter","url(#a)"),a(A,"d","M1017.4 399.39H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1017.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(A,"fill","#2bc0d3"),C(B,"filter","url(#b)"),a(J,"d","M1542.1 399.39h-416.69c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h416.69c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(J,"fill","#2bc0d3"),C(V,"filter","url(#c)"),a(Y,"d","M1483.27 62.95h-455.28c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h455.28c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM928.46 62.95H730.07c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h198.39c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(Y,"fill","#2bc0d3"),a(X,"d","M700.66 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1512.68 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"),C(X,"fill","#2bc0d3"),C(K,"filter","url(#d)"),Z(e,Q)},m(D,oe){H(D,e,oe),c(e,t),c(t,r),c(r,i),c(r,s),c(r,o),c(r,l),c(r,d),c(t,h),c(h,m),c(h,f),c(h,g),c(h,b),c(h,w),c(t,p),c(p,v),c(p,_),c(p,y),c(p,S),c(p,M),c(t,T),c(T,U),c(T,I),c(T,R),c(T,O),c(T,$),c(e,x),c(x,F),c(e,B),c(B,A),c(e,V),c(V,J),c(e,K),c(K,Y),c(K,X)},p(D,[oe]){Z(e,Q=de(se,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1551.75 432.49"},oe&1&&D[0]]))},i:k,o:k,d(D){D&&j(e)}}}function ei(n,e,t){return n.$$set=r=>{t(0,e=P(P({},e),G(r)))},e=G(e),[e]}class ti extends he{constructor(e){super(),re(this,e,ei,Qr,ee,{})}}function ni(n){let e,t,r,i,s,o,l,d,h,m,f,g,b,w,p,v,_,y,S,M,T,U,I,R,O,$,x,F,B,A,V,J,K,Y,X,se=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1452.86 431.6"},n[0]],Q={};for(let D=0;D<se.length;D+=1)Q=P(Q,se[D]);return{c(){e=u("svg"),t=u("defs"),r=u("filter"),i=u("feOffset"),s=u("feGaussianBlur"),o=u("feFlood"),l=u("feComposite"),d=u("feComposite"),h=u("filter"),m=u("feOffset"),f=u("feGaussianBlur"),g=u("feFlood"),b=u("feComposite"),w=u("feComposite"),p=u("filter"),v=u("feOffset"),_=u("feGaussianBlur"),y=u("feFlood"),S=u("feComposite"),M=u("feComposite"),T=u("filter"),U=u("feOffset"),I=u("feGaussianBlur"),R=u("feFlood"),O=u("feComposite"),$=u("feComposite"),x=u("g"),F=u("path"),B=u("g"),A=u("path"),V=u("g"),J=u("path"),K=u("g"),Y=u("path"),X=u("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(l,"in2","blur"),a(l,"operator","in"),a(d,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(f,"result","blur-2"),a(f,"stdDeviation","19.31"),a(g,"flood-color","#34c4e7"),a(g,"flood-opacity",".75"),a(b,"in2","blur-2"),a(b,"operator","in"),a(w,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(_,"result","blur-3"),a(_,"stdDeviation","19.31"),a(y,"flood-color","#34c4e7"),a(y,"flood-opacity",".75"),a(S,"in2","blur-3"),a(S,"operator","in"),a(M,"in","SourceGraphic"),a(p,"id","c"),a(p,"filterUnits","userSpaceOnUse"),a(I,"result","blur-4"),a(I,"stdDeviation","19.31"),a(R,"flood-color","#34c4e7"),a(R,"flood-opacity",".75"),a(O,"in2","blur-4"),a(O,"operator","in"),a($,"in","SourceGraphic"),a(T,"id","d"),a(T,"filterUnits","userSpaceOnUse"),a(F,"d","M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM644.86 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM752.83 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM888.55 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1023.71 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1157.57 349.25h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04h-24.02v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM1301.11 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1443.15 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z"),C(F,"fill","#fff"),C(x,"filter","url(#a)"),a(A,"d","M1161.4 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1161.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(A,"fill","#2bc0d3"),C(B,"filter","url(#b)"),a(J,"d","M1443.21 398.49h-103.92c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h103.92c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(J,"fill","#2bc0d3"),C(V,"filter","url(#c)"),a(Y,"d","M1384.38 62.05H824.22c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h560.16c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(Y,"fill","#2bc0d3"),a(X,"d","M794.81 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1413.79 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"),C(X,"fill","#2bc0d3"),C(K,"filter","url(#d)"),Z(e,Q)},m(D,oe){H(D,e,oe),c(e,t),c(t,r),c(r,i),c(r,s),c(r,o),c(r,l),c(r,d),c(t,h),c(h,m),c(h,f),c(h,g),c(h,b),c(h,w),c(t,p),c(p,v),c(p,_),c(p,y),c(p,S),c(p,M),c(t,T),c(T,U),c(T,I),c(T,R),c(T,O),c(T,$),c(e,x),c(x,F),c(e,B),c(B,A),c(e,V),c(V,J),c(e,K),c(K,Y),c(K,X)},p(D,[oe]){Z(e,Q=de(se,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1452.86 431.6"},oe&1&&D[0]]))},i:k,o:k,d(D){D&&j(e)}}}function ri(n,e,t){return n.$$set=r=>{t(0,e=P(P({},e),G(r)))},e=G(e),[e]}class ii extends he{constructor(e){super(),re(this,e,ri,ni,ee,{})}}function si(n){let e,t,r,i,s,o,l,d,h,m,f,g,b,w,p,v,_,y,S,M,T,U,I,R,O,$,x,F,B,A,V,J,K,Y,X,se=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1324.74 431.6"},n[0]],Q={};for(let D=0;D<se.length;D+=1)Q=P(Q,se[D]);return{c(){e=u("svg"),t=u("defs"),r=u("filter"),i=u("feOffset"),s=u("feGaussianBlur"),o=u("feFlood"),l=u("feComposite"),d=u("feComposite"),h=u("filter"),m=u("feOffset"),f=u("feGaussianBlur"),g=u("feFlood"),b=u("feComposite"),w=u("feComposite"),p=u("filter"),v=u("feOffset"),_=u("feGaussianBlur"),y=u("feFlood"),S=u("feComposite"),M=u("feComposite"),T=u("filter"),U=u("feOffset"),I=u("feGaussianBlur"),R=u("feFlood"),O=u("feComposite"),$=u("feComposite"),x=u("g"),F=u("path"),B=u("g"),A=u("path"),V=u("g"),J=u("path"),K=u("path"),Y=u("g"),X=u("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(l,"in2","blur"),a(l,"operator","in"),a(d,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(f,"result","blur-2"),a(f,"stdDeviation","19.31"),a(g,"flood-color","#34c4e7"),a(g,"flood-opacity",".75"),a(b,"in2","blur-2"),a(b,"operator","in"),a(w,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(_,"result","blur-3"),a(_,"stdDeviation","19.31"),a(y,"flood-color","#34c4e7"),a(y,"flood-opacity",".75"),a(S,"in2","blur-3"),a(S,"operator","in"),a(M,"in","SourceGraphic"),a(p,"id","c"),a(p,"filterUnits","userSpaceOnUse"),a(I,"result","blur-4"),a(I,"stdDeviation","19.31"),a(R,"flood-color","#34c4e7"),a(R,"flood-opacity",".75"),a(O,"in2","blur-4"),a(O,"operator","in"),a($,"in","SourceGraphic"),a(T,"id","d"),a(T,"filterUnits","userSpaceOnUse"),a(F,"d","M509.35 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h499.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(F,"fill","#2bc0d3"),C(x,"filter","url(#a)"),a(A,"d","M1029.94 398.49H627.91c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h402.03c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(A,"fill","#2bc0d3"),C(B,"filter","url(#b)"),a(J,"d","M1256.26 62.05H606.1c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h650.15c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),C(J,"fill","#2bc0d3"),a(K,"d","M576.69 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1285.67 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"),C(K,"fill","#2bc0d3"),C(V,"filter","url(#c)"),a(X,"d","M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM630.33 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM764.75 349.25h-24.76V158.67l-54.55 1.79v188.8h-24.76V132.11h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM906.05 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1041.77 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1176.19 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1318.98 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76Z"),C(X,"fill","#fff"),C(Y,"filter","url(#d)"),Z(e,Q)},m(D,oe){H(D,e,oe),c(e,t),c(t,r),c(r,i),c(r,s),c(r,o),c(r,l),c(r,d),c(t,h),c(h,m),c(h,f),c(h,g),c(h,b),c(h,w),c(t,p),c(p,v),c(p,_),c(p,y),c(p,S),c(p,M),c(t,T),c(T,U),c(T,I),c(T,R),c(T,O),c(T,$),c(e,x),c(x,F),c(e,B),c(B,A),c(e,V),c(V,J),c(V,K),c(e,Y),c(Y,X)},p(D,[oe]){Z(e,Q=de(se,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1324.74 431.6"},oe&1&&D[0]]))},i:k,o:k,d(D){D&&j(e)}}}function oi(n,e,t){return n.$$set=r=>{t(0,e=P(P({},e),G(r)))},e=G(e),[e]}class ai extends he{constructor(e){super(),re(this,e,oi,si,ee,{})}}function ci(n){let e,t,r,i,s,o,l,d,h,m,f,g,b,w,p,v,_,y,S,M,T,U;return r=new Wr({props:{style:"width: max-content; height: max-content"}}),l=new Kr({props:{style:"height: 2rem"}}),m=new Xr({props:{style:"height: 2rem"}}),b=new ti({props:{style:"height: 2rem"}}),v=new ii({props:{style:"height: 2rem"}}),S=new ai({props:{style:"height: 2rem"}}),{c(){e=N("div"),t=N("div"),ae(r.$$.fragment),i=te(),s=N("section"),o=N("a"),ae(l.$$.fragment),d=te(),h=N("a"),ae(m.$$.fragment),f=te(),g=N("a"),ae(b.$$.fragment),w=te(),p=N("a"),ae(v.$$.fragment),_=te(),y=N("a"),ae(S.$$.fragment),this.c=k,a(t,"class","portal-button"),at(t,"rotate-180",n[0]),a(o,"href","/jukebox"),a(o,"class","page-icon"),a(h,"href","/turtle"),a(h,"class","page-icon"),a(g,"href","/analyser"),a(g,"class","page-icon"),a(p,"href","/storage"),a(p,"class","page-icon"),a(y,"href","/home"),a(y,"class","page-icon"),a(s,"class","popover"),at(s,"slidein",n[0])},m(I,R){H(I,e,R),c(e,t),ie(r,t,null),c(e,i),c(e,s),c(s,o),ie(l,o,null),c(s,d),c(s,h),ie(m,h,null),c(s,f),c(s,g),ie(b,g,null),c(s,w),c(s,p),ie(v,p,null),c(s,_),c(s,y),ie(S,y,null),M=!0,T||(U=[Pe(t,"mousedown",n[1]),Pe(s,"mouseleave",n[2])],T=!0)},p(I,[R]){(!M||R&1)&&at(t,"rotate-180",I[0]),(!M||R&1)&&at(s,"slidein",I[0])},i(I){M||(W(r.$$.fragment,I),W(l.$$.fragment,I),W(m.$$.fragment,I),W(b.$$.fragment,I),W(v.$$.fragment,I),W(S.$$.fragment,I),M=!0)},o(I){z(r.$$.fragment,I),z(l.$$.fragment,I),z(m.$$.fragment,I),z(b.$$.fragment,I),z(v.$$.fragment,I),z(S.$$.fragment,I),M=!1},d(I){I&&j(e),ne(r),ne(l),ne(m),ne(b),ne(v),ne(S),T=!1,ve(U)}}}function li(n,e,t){let r=!1;return[r,()=>t(0,r=!r),()=>t(0,r=!1)]}class ui extends dt{constructor(e){super(),this.shadowRoot.innerHTML="<style>.portal-button{margin-left:1rem;margin-right:0.5rem;transition:300ms;width:1.75rem;height:1.75rem}.rotate-180{transform:rotate(180deg)}.popover{background-color:rgb(13 29 48 / var(--tw-bg-opacity));position:absolute;height:100vh;width:13rem;margin-top:0.75rem;transition:700ms;left:-15rem}.slidein{transform:translateX(15rem)}.page-icon{height:2rem;width:auto;margin-top:1rem;margin-left:0.5rem;margin-right:0.5rem;display:flex;justify-content:center}</style>",re(this,{target:this.shadowRoot,props:Ot(this.attributes),customElement:!0},li,ci,ee,{},null),e&&e.target&&H(e.target,this,e.anchor)}}customElements.define("mcs-portal",ui);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},di=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],d=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,d=i+2<n.length,h=d?n[i+2]:0,m=s>>2,f=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,b=h&63;d||(b=64,o||(g=64)),r.push(t[m],t[f],t[g],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hn(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):di(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||f==null)throw new hi;const g=s<<2|l>>4;if(r.push(g),h!==64){const b=l<<4&240|h>>2;if(r.push(b),f!==64){const w=h<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fi=function(n){const e=hn(n);return fn.encodeByteArray(e,!0)},pn=function(n){return fi(n).replace(/\./g,"")},gn=function(n){try{return fn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=()=>pi().__FIREBASE_DEFAULTS__,mi=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gn(n[1]);return e&&JSON.parse(e)},Ut=()=>{try{return gi()||mi()||vi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_i=n=>{var e,t;return(t=(e=Ut())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},mn=()=>{var n;return(n=Ut())===null||n===void 0?void 0:n.config},vn=n=>{var e;return(e=Ut())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function yi(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ii(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ei(){const n=q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ti(){try{return typeof indexedDB=="object"}catch{return!1}}function Ci(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="FirebaseError";class _e extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Si,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,We.prototype.create)}}class We{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ki(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new _e(i,l,r)}}function ki(n,e){return n.replace(Ai,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ai=/\{\$([^}]+)}/g;function Ri(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ht(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(_n(s)&&_n(o)){if(!ht(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function _n(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oi(n,e){const t=new Mi(n,e);return t.subscribe.bind(t)}class Mi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Di(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=xt),i.error===void 0&&(i.error=xt),i.complete===void 0&&(i.complete=xt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Di(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Li(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ae){return this.instances.has(e)}getOptions(e=Ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ni(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ae){return this.component?this.component.multipleInstances?e:Ae:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ni(n){return n===Ae?void 0:n}function Li(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const xi={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Bi=L.INFO,$i={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Vi=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=$i[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bn{constructor(e){this.name=e,this._logLevel=Bi,this._logHandler=Vi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const Fi=(n,e)=>e.some(t=>n instanceof t);let wn,yn;function Hi(){return wn||(wn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ji(){return yn||(yn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const In=new WeakMap,Bt=new WeakMap,En=new WeakMap,$t=new WeakMap,Vt=new WeakMap;function Gi(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(be(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&In.set(t,n)}).catch(()=>{}),Vt.set(e,n),e}function Zi(n){if(Bt.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Bt.set(n,e)}let Ft={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||En.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return be(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wi(n){Ft=n(Ft)}function zi(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ht(this),e,...t);return En.set(r,e.sort?e.sort():[e]),be(r)}:ji().includes(n)?function(...e){return n.apply(Ht(this),e),be(In.get(this))}:function(...e){return be(n.apply(Ht(this),e))}}function qi(n){return typeof n=="function"?zi(n):(n instanceof IDBTransaction&&Zi(n),Fi(n,Hi())?new Proxy(n,Ft):n)}function be(n){if(n instanceof IDBRequest)return Gi(n);if($t.has(n))return $t.get(n);const e=qi(n);return e!==n&&($t.set(n,e),Vt.set(e,n)),e}const Ht=n=>Vt.get(n);function Ki(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=be(o);return r&&o.addEventListener("upgradeneeded",d=>{r(be(o.result),d.oldVersion,d.newVersion,be(o.transaction),d)}),t&&o.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),l.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Ji=["get","getKey","getAll","getAllKeys","count"],Yi=["put","add","delete","clear"],jt=new Map;function Tn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jt.get(e))return jt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Yi.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ji.includes(t)))return;const s=async function(o,...l){const d=this.transaction(o,i?"readwrite":"readonly");let h=d.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&d.done]))[0]};return jt.set(e,s),s}Wi(n=>({...n,get:(e,t,r)=>Tn(e,t)||n.get(e,t,r),has:(e,t)=>!!Tn(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qi(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qi(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gt="@firebase/app",Cn="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new bn("@firebase/app"),es="@firebase/app-compat",ts="@firebase/analytics-compat",ns="@firebase/analytics",rs="@firebase/app-check-compat",is="@firebase/app-check",ss="@firebase/auth",os="@firebase/auth-compat",as="@firebase/database",cs="@firebase/database-compat",ls="@firebase/functions",us="@firebase/functions-compat",ds="@firebase/installations",hs="@firebase/installations-compat",fs="@firebase/messaging",ps="@firebase/messaging-compat",gs="@firebase/performance",ms="@firebase/performance-compat",vs="@firebase/remote-config",_s="@firebase/remote-config-compat",bs="@firebase/storage",ws="@firebase/storage-compat",ys="@firebase/firestore",Is="@firebase/firestore-compat",Es="firebase",Ts="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]",Cs={[Gt]:"fire-core",[es]:"fire-core-compat",[ns]:"fire-analytics",[ts]:"fire-analytics-compat",[is]:"fire-app-check",[rs]:"fire-app-check-compat",[ss]:"fire-auth",[os]:"fire-auth-compat",[as]:"fire-rtdb",[cs]:"fire-rtdb-compat",[ls]:"fire-fn",[us]:"fire-fn-compat",[ds]:"fire-iid",[hs]:"fire-iid-compat",[fs]:"fire-fcm",[ps]:"fire-fcm-compat",[gs]:"fire-perf",[ms]:"fire-perf-compat",[vs]:"fire-rc",[_s]:"fire-rc-compat",[bs]:"fire-gcs",[ws]:"fire-gcs-compat",[ys]:"fire-fst",[Is]:"fire-fst-compat","fire-js":"fire-js",[Es]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new Map,Wt=new Map;function Ss(n,e){try{n.container.addComponent(e)}catch(t){Re.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qe(n){const e=n.name;if(Wt.has(e))return Re.debug(`There were multiple attempts to register component ${e}.`),!1;Wt.set(e,n);for(const t of ft.values())Ss(t,n);return!0}function Sn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},we=new We("app","Firebase",ks);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=Ts;function kn(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw we.create("bad-app-name",{appName:String(i)});if(t||(t=mn()),!t)throw we.create("no-options");const s=ft.get(i);if(s){if(ht(t,s.options)&&ht(r,s.config))return s;throw we.create("duplicate-app",{appName:i})}const o=new Ui(i);for(const d of Wt.values())o.addComponent(d);const l=new As(t,r,o);return ft.set(i,l),l}function Rs(n=Zt){const e=ft.get(n);if(!e&&n===Zt&&mn())return kn();if(!e)throw we.create("no-app",{appName:n});return e}function xe(n,e,t){var r;let i=(r=Cs[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Re.warn(l.join(" "));return}qe(new Ue(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="firebase-heartbeat-database",Ms=1,Je="firebase-heartbeat-store";let zt=null;function An(){return zt||(zt=Ki(Os,Ms,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Je)}}}).catch(n=>{throw we.create("idb-open",{originalErrorMessage:n.message})})),zt}async function Ds(n){try{return await(await An()).transaction(Je).objectStore(Je).get(On(n))}catch(e){if(e instanceof _e)Re.warn(e.message);else{const t=we.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Re.warn(t.message)}}}async function Rn(n,e){try{const r=(await An()).transaction(Je,"readwrite");await r.objectStore(Je).put(e,On(n)),await r.done}catch(t){if(t instanceof _e)Re.warn(t.message);else{const r=we.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Re.warn(r.message)}}}function On(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=1024,Ns=30*24*60*60*1e3;class Ls{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xs(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ns}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mn(),{heartbeatsToSend:t,unsentEntries:r}=Us(this._heartbeatsCache.heartbeats),i=pn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mn(){return new Date().toISOString().substring(0,10)}function Us(n,e=Ps){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Dn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class xs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ti()?Ci().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ds(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dn(n){return pn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n){qe(new Ue("platform-logger",e=>new Xi(e),"PRIVATE")),qe(new Ue("heartbeat",e=>new Ls(e),"PRIVATE")),xe(Gt,Cn,n),xe(Gt,Cn,"esm2017"),xe("fire-js","")}Bs("");var $s="firebase",Vs="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe($s,Vs,"app");function qt(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Pn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fs=Pn,Nn=new We("auth","Firebase",Pn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new bn("@firebase/auth");function Hs(n,...e){pt.logLevel<=L.WARN&&pt.warn(`Auth (${Ke}): ${n}`,...e)}function gt(n,...e){pt.logLevel<=L.ERROR&&pt.error(`Auth (${Ke}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n,...e){throw Kt(n,...e)}function le(n,...e){return Kt(n,...e)}function Ln(n,e,t){const r=Object.assign(Object.assign({},Fs()),{[e]:t});return new We("auth","Firebase",r).create(e,{appName:n.name})}function js(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ce(n,"argument-error"),Ln(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kt(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nn.create(n,...e)}function E(n,e,...t){if(!n)throw Kt(e,...t)}function fe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gt(e),new Error(e)}function pe(n,e){n||fe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gs(){return Un()==="http:"||Un()==="https:"}function Un(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gs()||yi()||"connection"in navigator)?navigator.onLine:!0}function Ws(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.shortDelay=e,this.longDelay=t,pe(t>e,"Short delay should be less than long delay!"),this.isMobile=wi()||Ii()}get(){return Zs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,e){pe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Ye(3e4,6e4);function Bn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Xe(n,e,t,r,i={}){return $n(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ze(Object.assign({key:n.config.apiKey},o)).slice(1),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode),xn.fetch()(Vn(n,n.config.apiHost,t,l),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},s))})}async function $n(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},zs),e);try{const i=new Js(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[d,h]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw mt(n,"credential-already-in-use",o);if(d==="EMAIL_EXISTS")throw mt(n,"email-already-in-use",o);if(d==="USER_DISABLED")throw mt(n,"user-disabled",o);const m=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ln(n,m,h);ce(n,m)}}catch(i){if(i instanceof _e)throw i;ce(n,"network-request-failed",{message:String(i)})}}async function Ks(n,e,t,r,i={}){const s=await Xe(n,e,t,r,i);return"mfaPendingCredential"in s&&ce(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Vn(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Yt(n.config,i):`${n.config.apiScheme}://${i}`}class Js{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(le(this.auth,"network-request-failed")),qs.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mt(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=le(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(n,e){return Xe(n,"POST","/v1/accounts:delete",e)}async function Xs(n,e){return Xe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qs(n,e=!1){const t=ke(n),r=await t.getIdToken(e),i=vt(r);E(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qe(Xt(i.auth_time)),issuedAtTime:Qe(Xt(i.iat)),expirationTime:Qe(Xt(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xt(n){return Number(n)*1e3}function vt(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return gt("JWT malformed, contained fewer than 3 sections"),null;try{const i=gn(t);return i?JSON.parse(i):(gt("Failed to decode base64 JWT payload"),null)}catch(i){return gt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function eo(n){const e=vt(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof _e&&to(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function to({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qe(this.lastLoginAt),this.creationTime=Qe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(n){var e;const t=n.auth,r=await n.getIdToken(),i=await et(n,Xs(t,{idToken:r}));E(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?so(s.providerUserInfo):[],l=io(n.providerData,o),d=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),m=d?h:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Fn(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(n,f)}async function ro(n){const e=ke(n);await _t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function io(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function so(n){return n.map(e=>{var{providerId:t}=e,r=qt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(n,e){const t=await $n(n,{},async()=>{const r=ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Vn(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",xn.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await oo(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new tt;return r&&(E(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(E(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return fe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Oe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=qt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new no(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await et(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qs(this,e)}reload(){return ro(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _t(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await et(this,Ys(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,l,d,h,m;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(l=t.tenantId)!==null&&l!==void 0?l:void 0,v=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,_=(h=t.createdAt)!==null&&h!==void 0?h:void 0,y=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:S,emailVerified:M,isAnonymous:T,providerData:U,stsTokenManager:I}=t;E(S&&I,e,"internal-error");const R=tt.fromJSON(this.name,I);E(typeof S=="string",e,"internal-error"),ye(f,e.name),ye(g,e.name),E(typeof M=="boolean",e,"internal-error"),E(typeof T=="boolean",e,"internal-error"),ye(b,e.name),ye(w,e.name),ye(p,e.name),ye(v,e.name),ye(_,e.name),ye(y,e.name);const O=new Oe({uid:S,auth:e,email:g,emailVerified:M,displayName:f,isAnonymous:T,photoURL:w,phoneNumber:b,tenantId:p,stsTokenManager:R,createdAt:_,lastLoginAt:y});return U&&Array.isArray(U)&&(O.providerData=U.map($=>Object.assign({},$))),v&&(O._redirectEventId=v),O}static async _fromIdTokenResponse(e,t,r=!1){const i=new tt;i.updateFromServerResponse(t);const s=new Oe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _t(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Map;function ge(n){pe(n instanceof Function,"Expected a class definition");let e=Hn.get(n);return e?(pe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hn.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jn.type="NONE";const Gn=jn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n,e,t){return`firebase:${n}:${e}:${t}`}class Be{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bt(this.userKey,i.apiKey,s),this.fullPersistenceKey=bt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Be(ge(Gn),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||ge(Gn);const o=bt(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const m=await h._get(o);if(m){const f=Oe._fromJSON(e,m);h!==s&&(l=f),s=h;break}}catch{}const d=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new Be(s,e,r):(s=d[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Be(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jn(e))return"Blackberry";if(Yn(e))return"Webos";if(Qt(e))return"Safari";if((e.includes("chrome/")||zn(e))&&!e.includes("edge/"))return"Chrome";if(Kn(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wn(n=q()){return/firefox\//i.test(n)}function Qt(n=q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zn(n=q()){return/crios\//i.test(n)}function qn(n=q()){return/iemobile/i.test(n)}function Kn(n=q()){return/android/i.test(n)}function Jn(n=q()){return/blackberry/i.test(n)}function Yn(n=q()){return/webos/i.test(n)}function wt(n=q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ao(n=q()){var e;return wt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function co(){return Ei()&&document.documentMode===10}function Xn(n=q()){return wt(n)||Kn(n)||Yn(n)||Jn(n)||/windows phone/i.test(n)||qn(n)}function lo(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n,e=[]){let t;switch(n){case"Browser":t=Zn(q());break;case"Worker":t=`${Zn(q())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ke}/${r}`}async function er(n,e){return Xe(n,"GET","/v2/recaptchaConfig",Bn(n,e))}function tr(n){return n!==void 0&&n.enterprise!==void 0}class nr{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function rr(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=le("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",uo().appendChild(r)})}function ho(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const fo="https://www.google.com/recaptcha/enterprise.js?render=",po="recaptcha-enterprise",go="NO_RECAPTCHA";class mo{constructor(e){this.type=po,this.auth=nt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{er(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new nr(d);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(d=>{l(d)})})}function i(s,o,l){const d=window.grecaptcha;tr(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(go)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!t&&tr(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}rr(fo+l).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const d=e(s);o(d)}catch(d){l(d)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ir(this),this.idTokenSubscription=new ir(this),this.beforeStateQueue=new vo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ge(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Be.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!o||o===l)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _t(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ws()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ke(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(e))})}async initializeRecaptchaConfig(){const e=await er(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new nr(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new mo(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new We("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ge(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await Be.create(this,[ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Hs(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function nt(n){return ke(n)}class ir{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oi(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n,e){const t=Sn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ht(s,e??{}))return i;ce(i,"already-initialized")}return t.initialize({options:e})}function wo(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yo(n,e,t){const r=nt(n);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=sr(e),{host:o,port:l}=Io(e),d=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Eo()}function sr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Io(n){const e=sr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:or(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:or(o)}}}function or(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Eo(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fe("not implemented")}_getIdTokenResponse(e){return fe("not implemented")}_linkToIdToken(e,t){return fe("not implemented")}_getReauthenticationResolver(e){return fe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(n,e){return Ks(n,"POST","/v1/accounts:signInWithIdp",Bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="http://localhost";class me extends ar{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ce("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=qt(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new me(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return $e(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,$e(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$e(e,t)}buildRequest(){const e={requestUri:To,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ze(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends en{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fe extends Ve{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return E("providerId"in t&&"signInMethod"in t,"argument-error"),me._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),me._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Fe.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fe.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!t&&!s||!l)return null;try{return new Fe(l)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Ve{constructor(){super("facebook.com")}static credential(e){return me._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ie.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends Ve{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return me._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ee.credential(t,r)}catch{return null}}}Ee.GOOGLE_SIGN_IN_METHOD="google.com",Ee.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Ve{constructor(){super("github.com")}static credential(e){return me._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.GITHUB_SIGN_IN_METHOD="github.com",Te.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Ve{constructor(){super("twitter.com")}static credential(e,t){return me._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ce.credential(t,r)}catch{return null}}}Ce.TWITTER_SIGN_IN_METHOD="twitter.com",Ce.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Oe._fromIdTokenResponse(e,r,i),o=cr(r);return new He({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=cr(r);return new He({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function cr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends _e{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new yt(e,t,r,i)}}function lr(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yt._fromErrorAndOperation(n,s,e,r):s})}async function Co(n,e,t=!1){const r=await et(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return He._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await et(n,lr(r,i,e,n),t);E(s.idToken,r,"internal-error");const o=vt(s.idToken);E(o,r,"internal-error");const{sub:l}=o;return E(n.uid===l,r,"user-mismatch"),He._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ce(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n,e,t=!1){const r="signIn",i=await lr(n,r,e),s=await He._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=vt(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new je(s,l)}}if(!r)return null;switch(r){case"facebook.com":return new Ro(s,i);case"github.com":return new Oo(s,i);case"google.com":return new Mo(s,i);case"twitter.com":return new Do(s,i,n.screenName||null);case"custom":case"anonymous":return new je(s,null);default:return new je(s,r,i)}}class je{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class ur extends je{constructor(e,t,r,i){super(e,t,r),this.username=i}}class Ro extends je{constructor(e,t){super(e,"facebook.com",t)}}class Oo extends ur{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Mo extends je{constructor(e,t){super(e,"google.com",t)}}class Do extends ur{constructor(e,t,r){super(e,"twitter.com",t,r)}}function Po(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Ao(t)}function No(n,e,t,r){return ke(n).onIdTokenChanged(e,t,r)}function Lo(n,e,t){return ke(n).beforeAuthStateChanged(e,t)}function Uo(n){return ke(n).signOut()}const It="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(It,"1"),this.storage.removeItem(It),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(){const n=q();return Qt(n)||wt(n)}const Bo=1e3,$o=10;class hr extends dr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xo()&&lo(),this.fallbackToPolling=Xn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,d)=>{this.notifyListeners(o,d)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);co()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$o):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Bo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hr.type="LOCAL";const fr=hr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends dr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pr.type="SESSION";const gr=pr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Et(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(t.origin,s)),d=await Vo(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Et.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,d)=>{const h=tn("",20);i.port1.start();const m=setTimeout(()=>{d(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(m),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return window}function Ho(n){ue().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function jo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Go(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Zo(){return mr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="firebaseLocalStorageDb",Wo=1,Tt="firebaseLocalStorage",_r="fbase_key";class rt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ct(n,e){return n.transaction([Tt],e?"readwrite":"readonly").objectStore(Tt)}function zo(){const n=indexedDB.deleteDatabase(vr);return new rt(n).toPromise()}function nn(){const n=indexedDB.open(vr,Wo);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Tt,{keyPath:_r})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Tt)?e(r):(r.close(),await zo(),e(await nn()))})})}async function br(n,e,t){const r=Ct(n,!0).put({[_r]:e,value:t});return new rt(r).toPromise()}async function qo(n,e){const t=Ct(n,!1).get(e),r=await new rt(t).toPromise();return r===void 0?null:r.value}function wr(n,e){const t=Ct(n,!0).delete(e);return new rt(t).toPromise()}const Ko=800,Jo=3;class yr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Jo)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Et._getInstance(Zo()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jo(),!this.activeServiceWorker)return;this.sender=new Fo(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Go()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nn();return await br(e,It,"1"),await wr(e,It),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>br(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qo(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ct(i,!1).getAll();return new rt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ko)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yr.type="LOCAL";const Yo=yr;new Ye(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n,e){return e?ge(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ar{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $e(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xo(n){return ko(n.auth,new rn(n),n.bypassAuthState)}function Qo(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),So(t,new rn(n),n.bypassAuthState)}async function ea(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Co(t,new rn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xo;case"linkViaPopup":case"linkViaRedirect":return ea;case"reauthViaPopup":case"reauthViaRedirect":return Qo;default:ce(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Ye(2e3,1e4);async function na(n,e,t){const r=nt(n);js(n,e,en);const i=Ir(r,t);return new Me(r,"signInViaPopup",e,i).executeNotNull()}class Me extends Er{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Me.currentPopupAction&&Me.currentPopupAction.cancel(),Me.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const e=tn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Me.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ta.get())};e()}}Me.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="pendingRedirect",St=new Map;class ia extends Er{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=St.get(this.auth._key());if(!e){try{const r=await sa(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}St.set(this.auth._key(),e)}return this.bypassAuthState||St.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sa(n,e){const t=ca(e),r=aa(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function oa(n,e){St.set(n._key(),e)}function aa(n){return ge(n._redirectPersistence)}function ca(n){return bt(ra,n.config.apiKey,n.name)}async function la(n,e,t=!1){const r=nt(n),i=Ir(r,e),o=await new ia(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=10*60*1e3;class da{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ha(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Cr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(le(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ua&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tr(e))}saveEventToCache(e){this.cachedEventUids.add(Tr(e)),this.lastProcessedEventTime=Date.now()}}function Tr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ha(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(n,e={}){return Xe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ga=/^https?/;async function ma(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fa(n);for(const t of e)try{if(va(t))return}catch{}ce(n,"unauthorized-domain")}function va(n){const e=Jt(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!ga.test(t))return!1;if(pa.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Ye(3e4,6e4);function Sr(){const n=ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ba(n){return new Promise((e,t)=>{var r,i,s;function o(){Sr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sr(),t(le(n,"network-request-failed"))},timeout:_a.get()})}if(!((i=(r=ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ue().gapi)===null||s===void 0)&&s.load)o();else{const l=ho("iframefcb");return ue()[l]=()=>{gapi.load?o():t(le(n,"network-request-failed"))},rr(`https://apis.google.com/js/api.js?onload=${l}`).catch(d=>t(d))}}).catch(e=>{throw kt=null,e})}let kt=null;function wa(n){return kt=kt||ba(n),kt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Ye(5e3,15e3),Ia="__/auth/iframe",Ea="emulator/auth/iframe",Ta={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ca=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sa(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yt(e,Ea):`https://${n.config.authDomain}/${Ia}`,r={apiKey:e.apiKey,appName:n.name,v:Ke},i=Ca.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ze(r).slice(1)}`}async function ka(n){const e=await wa(n),t=ue().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:Sa(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ta,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=le(n,"network-request-failed"),l=ue().setTimeout(()=>{s(o)},ya.get());function d(){ue().clearTimeout(l),i(r)}r.ping(d).then(d,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ra=500,Oa=600,Ma="_blank",Da="http://localhost";class kr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pa(n,e,t,r=Ra,i=Oa){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const d=Object.assign(Object.assign({},Aa),{width:r.toString(),height:i.toString(),top:s,left:o}),h=q().toLowerCase();t&&(l=zn(h)?Ma:t),Wn(h)&&(e=e||Da,d.scrollbars="yes");const m=Object.entries(d).reduce((g,[b,w])=>`${g}${b}=${w},`,"");if(ao(h)&&l!=="_self")return Na(e||"",l),new kr(null);const f=window.open(e||"",l,m);E(f,n,"popup-blocked");try{f.focus()}catch{}return new kr(f)}function Na(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="__/auth/handler",Ua="emulator/auth/handler",xa=encodeURIComponent("fac");async function Ar(n,e,t,r,i,s){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ke,eventId:i};if(e instanceof en){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ri(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,f]of Object.entries(s||{}))o[m]=f}if(e instanceof Ve){const m=e.getScopes().filter(f=>f!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const d=await n._getAppCheckToken(),h=d?`#${xa}=${encodeURIComponent(d)}`:"";return`${Ba(n)}?${ze(l).slice(1)}${h}`}function Ba({config:n}){return n.emulator?Yt(n,Ua):`https://${n.authDomain}/${La}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="webStorageSupport";class $a{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gr,this._completeRedirectFn=la,this._overrideRedirectResult=oa}async _openPopup(e,t,r,i){var s;pe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ar(e,t,r,Jt(),i);return Pa(e,o,tn())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ar(e,t,r,Jt(),i);return Ho(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(pe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ka(e),r=new da(e);return t.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sn,{type:sn},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sn];o!==void 0&&t(!!o),ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ma(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xn()||Qt()||wt()}}const Va=$a;var Rr="@firebase/auth",Or="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ja(n){qe(new Ue("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qn(n)},h=new _o(r,i,s,d);return wo(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qe(new Ue("auth-internal",e=>{const t=nt(e.getProvider("auth").getImmediate());return(r=>new Fa(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(Rr,Or,Ha(n)),xe(Rr,Or,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=5*60,Za=vn("authIdTokenMaxAge")||Ga;let Mr=null;const Wa=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Za)return;const i=t==null?void 0:t.token;Mr!==i&&(Mr=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function on(n=Rs()){const e=Sn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=bo(n,{popupRedirectResolver:Va,persistence:[Yo,fr,gr]}),r=vn("authTokenSyncURL");if(r){const s=Wa(r);Lo(t,s,()=>s(t.currentUser)),No(t,o=>s(o))}const i=_i("auth");return i&&yo(t,`http://${i}`),t}ja("Browser");function za(n){let e,t,r=[{xmlns:"http://www.w3.org/2000/svg"},{height:"48"},{viewBox:"0 96 960 960"},{width:"48"},n[0]],i={};for(let s=0;s<r.length;s+=1)i=P(i,r[s]);return{c(){e=u("svg"),t=u("path"),a(t,"d","M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"),Z(e,i)},m(s,o){H(s,e,o),c(e,t)},p(s,[o]){Z(e,i=de(r,[{xmlns:"http://www.w3.org/2000/svg"},{height:"48"},{viewBox:"0 96 960 960"},{width:"48"},o&1&&s[0]]))},i:k,o:k,d(s){s&&j(e)}}}function qa(n,e,t){return n.$$set=r=>{t(0,e=P(P({},e),G(r)))},e=G(e),[e]}class Dr extends he{constructor(e){super(),re(this,e,qa,za,ee,{})}}function Ka(n){let e,t,r,i=[{width:"800"},{height:"800"},{viewBox:"0 0 24 24"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},n[0]],s={};for(let o=0;o<i.length;o+=1)s=P(s,i[o]);return{c(){e=u("svg"),t=u("path"),r=u("path"),a(t,"d","M11 3h2a1 1 0 0 1 1 1v.569c0 .428.287.8.682.963.396.164.856.102 1.158-.2l.403-.403a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 0 1.414l-.402.403c-.303.302-.365.762-.201 1.158.164.395.535.682.963.682H20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.569c-.428 0-.8.287-.963.682-.164.396-.102.856.2 1.158l.403.403a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414 0l-.403-.402c-.302-.303-.762-.365-1.158-.201-.395.164-.682.535-.682.963V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-.569c0-.428-.287-.8-.682-.963-.396-.164-.856-.102-1.158.2l-.403.403a1 1 0 0 1-1.414 0L4.93 17.657a1 1 0 0 1 0-1.414l.402-.403c.303-.302.365-.762.201-1.158-.164-.395-.535-.682-.963-.682H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.569c.428 0 .8-.287.963-.682.164-.396.102-.856-.2-1.158l-.403-.403a1 1 0 0 1 0-1.414L6.343 4.93a1 1 0 0 1 1.414 0l.403.402c.302.303.762.365 1.158.201.395-.164.682-.535.682-.963V4a1 1 0 0 1 1-1Z"),a(t,"stroke","#000"),a(t,"stroke-width","1.5"),a(r,"d","M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"),a(r,"stroke","#000"),a(r,"stroke-width","1.5"),Z(e,s)},m(o,l){H(o,e,l),c(e,t),c(e,r)},p(o,[l]){Z(e,s=de(i,[{width:"800"},{height:"800"},{viewBox:"0 0 24 24"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},l&1&&o[0]]))},i:k,o:k,d(o){o&&j(e)}}}function Ja(n,e,t){return n.$$set=r=>{t(0,e=P(P({},e),G(r)))},e=G(e),[e]}class Ya extends he{constructor(e){super(),re(this,e,Ja,Ka,ee,{})}}function Xa(n){let e,t,r=[{width:"800"},{height:"800"},{viewBox:"0 0 24 24"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},n[0]],i={};for(let s=0;s<r.length;s+=1)i=P(i,r[s]);return{c(){e=u("svg"),t=u("path"),a(t,"d","m12 15 3-3m0 0-3-3m3 3H4m5-4.751V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C10.52 4 11.08 4 12.2 4h4.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2.002 2.002 0 0 1-.875.874c-.427.218-.986.218-2.104.218h-4.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C9 18.48 9 17.92 9 16.8v-.05"),a(t,"stroke","#000"),a(t,"stroke-width","2"),a(t,"stroke-linecap","round"),a(t,"stroke-linejoin","round"),Z(e,i)},m(s,o){H(s,e,o),c(e,t)},p(s,[o]){Z(e,i=de(r,[{width:"800"},{height:"800"},{viewBox:"0 0 24 24"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},o&1&&s[0]]))},i:k,o:k,d(s){s&&j(e)}}}function Qa(n,e,t){return n.$$set=r=>{t(0,e=P(P({},e),G(r)))},e=G(e),[e]}class ec extends he{constructor(e){super(),re(this,e,Qa,Xa,ee,{})}}function tc(n){let e,t,r,i;return{c(){e=N("a"),t=N("button"),t.textContent="Log in",a(e,"href","/login")},m(s,o){H(s,e,o),c(e,t),r||(i=Pe(t,"click",n[5]),r=!0)},p:k,d(s){s&&j(e),r=!1,i()}}}function nc(n){let e,t;return{c(){e=N("p"),t=Rt(n[1])},m(r,i){H(r,e,i),c(e,t)},p(r,i){i&2&&xr(t,r[1])},d(r){r&&j(e)}}}function rc(n){let e,t,r;return t=new Dr({props:{fill:"#2bc0d3"}}),{c(){e=N("a"),ae(t.$$.fragment),a(e,"href","/login")},m(i,s){H(i,e,s),ie(t,e,null),r=!0},p:k,i(i){r||(W(t.$$.fragment,i),r=!0)},o(i){z(t.$$.fragment,i),r=!1},d(i){i&&j(e),ne(t)}}}function ic(n){let e,t,r,i;const s=[oc,sc],o=[];function l(d,h){return d[0]!=null?0:1}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),r=Lr()},m(d,h){o[e].m(d,h),H(d,r,h),i=!0},p(d,h){let m=e;e=l(d),e===m?o[e].p(d,h):(Nt(),z(o[m],1,1,()=>{o[m]=null}),Lt(),t=o[e],t?t.p(d,h):(t=o[e]=s[e](d),t.c()),W(t,1),t.m(r.parentNode,r))},i(d){i||(W(t),i=!0)},o(d){z(t),i=!1},d(d){o[e].d(d),d&&j(r)}}}function sc(n){let e,t;return e=new Dr({props:{fill:"#2bc0d3"}}),{c(){ae(e.$$.fragment)},m(r,i){ie(e,r,i),t=!0},p:k,i(r){t||(W(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){ne(e,r)}}}function oc(n){let e,t;return{c(){e=N("img"),ot(e.src,t=n[0])||a(e,"src",t),C(e,"border-radius","50%"),C(e,"width","3rem"),a(e,"alt","profile-picture")},m(r,i){H(r,e,i)},p(r,i){i&1&&!ot(e.src,t=r[0])&&a(e,"src",t)},i:k,o:k,d(r){r&&j(e)}}}function Pr(n){let e,t,r,i,s,o,l,d,h,m,f,g,b,w;return r=new Ya({props:{height:"40",width:"40",viewBox:"-2.5 0 25 24"}}),d=new ec({props:{height:"40",width:"40"}}),{c(){e=N("div"),t=N("a"),ae(r.$$.fragment),i=te(),s=N("span"),s.textContent="Settings",o=te(),l=N("div"),ae(d.$$.fragment),h=te(),m=N("span"),m.textContent="Log out",a(s,"class","dropdown-button-text"),a(t,"class","dropdown-button"),a(t,"href","/settings"),a(m,"class","dropdown-button-text"),a(l,"class","dropdown-button"),a(e,"style",f=`opacity: ${n[3]?1:0};`),a(e,"class","dropdown")},m(p,v){H(p,e,v),c(e,t),ie(r,t,null),c(t,i),c(t,s),c(e,o),c(e,l),ie(d,l,null),c(l,h),c(l,m),g=!0,b||(w=[Pe(l,"click",n[6]),Pe(e,"click",ln(cc))],b=!0)},p(p,v){(!g||v&8&&f!==(f=`opacity: ${p[3]?1:0};`))&&a(e,"style",f)},i(p){g||(W(r.$$.fragment,p),W(d.$$.fragment,p),g=!0)},o(p){z(r.$$.fragment,p),z(d.$$.fragment,p),g=!1},d(p){p&&j(e),ne(r),ne(d),b=!1,ve(w)}}}function ac(n){let e,t,r,i,s,o,l,d,h;function m(_,y){return _[1]!=""?nc:tc}let f=m(n),g=f(n);const b=[ic,rc],w=[];function p(_,y){return _[2]?0:1}i=p(n),s=w[i]=b[i](n);let v=n[2]&&Pr(n);return{c(){e=N("div"),g.c(),t=te(),r=N("div"),s.c(),o=te(),v&&v.c(),this.c=k,a(r,"class","profile-picture"),a(e,"class","user-info")},m(_,y){H(_,e,y),g.m(e,null),c(e,t),c(e,r),w[i].m(r,null),c(e,o),v&&v.m(e,null),l=!0,d||(h=Pe(r,"click",ln(n[4])),d=!0)},p(_,[y]){f===(f=m(_))&&g?g.p(_,y):(g.d(1),g=f(_),g&&(g.c(),g.m(e,t)));let S=i;i=p(_),i===S?w[i].p(_,y):(Nt(),z(w[S],1,1,()=>{w[S]=null}),Lt(),s=w[i],s?s.p(_,y):(s=w[i]=b[i](_),s.c()),W(s,1),s.m(r,null)),_[2]?v?(v.p(_,y),y&4&&W(v,1)):(v=Pr(_),v.c(),W(v,1),v.m(e,null)):v&&(Nt(),z(v,1,1,()=>{v=null}),Lt())},i(_){l||(W(s),W(v),l=!0)},o(_){z(s),z(v),l=!1},d(_){_&&j(e),g.d(),w[i].d(),v&&v.d(),d=!1,h()}}}const cc=()=>{};function lc(n,e,t){let r,i="",s=!1,o=!1;function l(){t(3,o=!0),document.addEventListener("click",d)}function d(){t(3,o=!1),document.removeEventListener("click",d)}$r(()=>{const g=kn({apiKey:"AIzaSyBlfZjJyhjcgyPfxaqkZHSR5SciFBWC5IY",authDomain:"mcsynergy-55878.firebaseapp.com",projectId:"mcsynergy-55878",storageBucket:"mcsynergy-55878.appspot.com",messagingSenderId:"822930182678",appId:"1:822930182678:web:23e8f0b3e044ae06cb9b37",measurementId:"G-3BK4KLMGTJ"});on(g).onAuthStateChanged(async w=>{if(w){t(2,s=!0),t(1,i=w.displayName);const p=localStorage.getItem("accessToken");try{const _=await(await fetch("https://graph.microsoft.com/v1.0/me/photo/$value",{headers:{Authorization:`Bearer ${p}`}})).blob(),y=new FileReader;y.readAsDataURL(_),y.onload=S=>t(0,r=S.target.result)}catch(v){console.log(v)}}else t(2,s=!1),t(0,r=void 0),t(1,i="")})});async function h(){var w,p;const f=on(),g=async v=>{var _;await fetch("http://localhost:8000/api/auth/check-user-roles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idtoken:v})}),await((_=f.currentUser)==null?void 0:_.getIdToken(!0))},b=new Fe("microsoft.com");b.setCustomParameters({prompt:"select_account"}),await f.setPersistence(fr);try{const v=await na(f,b),_=(w=Fe.credentialFromResult(v))==null?void 0:w.accessToken;if(_&&localStorage.setItem("accessToken",_),(p=Po(v))!=null&&p.isNewUser){const y=await v.user.getIdToken();await g(y)}}catch(v){alert("Something went wrong. Please try again. (Error: "+v.code+")")}}return[r,i,s,o,l,h,()=>Uo(on())]}class uc extends dt{constructor(e){super(),this.shadowRoot.innerHTML="<style>.user-info{display:flex;align-items:center}.profile-picture{margin-left:1rem;margin-right:0.5rem}button{background-color:transparent;color:white;border-radius:12px;height:2rem;width:6rem;font-size:1rem;border:2px solid #206191;text-align:center;text-decoration:none;display:inline-block;cursor:pointer}button:hover{background-color:#206191}p{color:white;font-size:1.5rem;font-family:Calibri}.dropdown{position:absolute;top:3.5rem;right:4px;width:15rem;height:6.5rem;background-color:#206191;border-radius:16px;transition:200ms}.dropdown-button{width:max-content;height:3rem;display:flex;align-items:center;margin-left:0.25rem;text-decoration:none;font-size:1.5rem;font-family:Calibri;transition:100ms;cursor:pointer;color:white}.dropdown-button:hover{transform:scale(1.05)}.dropdown-button-text{margin-left:12px}</style>",re(this,{target:this.shadowRoot,props:Ot(this.attributes),customElement:!0},lc,ac,ee,{},null),e&&e.target&&H(e.target,this,e.anchor)}}customElements.define("mcs-userinfo",uc);function dc(n){let e,t,r,i,s,o,l,d,h,m;return{c(){e=N("header"),t=N("div"),r=N("div"),i=N("mcs-portal"),s=te(),o=N("a"),l=N("img"),h=te(),m=N("div"),m.innerHTML="<mcs-userinfo></mcs-userinfo>",this.c=k,ot(l.src,d=n[0])||a(l,"src",d),a(l,"alt","Logo"),a(l,"class","logo"),a(o,"href","/"),a(o,"class","h-max ml-1"),a(r,"class","flex items-center w-80 h-full"),a(m,"class","flex items-center w-80 justify-end h-full"),a(t,"class","bg-MCS-DarkerBlue h-14 flex items-center justify-between")},m(f,g){H(f,e,g),c(e,t),c(t,r),c(r,i),c(r,s),c(r,o),c(o,l),c(t,h),c(t,m)},p(f,[g]){g&1&&!ot(l.src,d=f[0])&&a(l,"src",d)},i:k,o:k,d(f){f&&j(e)}}}function hc(n,e,t){let{logosrc:r}=e;return n.$$set=i=>{"logosrc"in i&&t(0,r=i.logosrc)},[r]}class Nr extends dt{constructor(e){super(),this.shadowRoot.innerHTML="<style>.bg-MCS-DarkerBlue{--tw-bg-opacity:1;background-color:rgb(13 29 48 / var(--tw-bg-opacity))}.h-14{height:3.5rem}.flex{display:flex}.items-center{align-items:center}.justify-between{justify-content:space-between}.w-80{width:20rem}.h-full{height:100%}.h-max{height:-moz-max-content;height:max-content}.ml-1{margin-left:0.25rem}.logo{height:2rem;margin-top:0.25rem}.justify-end{justify-content:flex-end}</style>",re(this,{target:this.shadowRoot,props:Ot(this.attributes),customElement:!0},hc,dc,ee,{logosrc:0},null),e&&(e.target&&H(e.target,this,e.anchor),e.props&&(this.$set(e.props),lt()))}static get observedAttributes(){return["logosrc"]}get logosrc(){return this.$$.ctx[0]}set logosrc(e){this.$$set({logosrc:e}),lt()}}customElements.define("mcs-navbar",Nr),De.Navbar=Nr,Object.defineProperty(De,Symbol.toStringTag,{value:"Module"})});
