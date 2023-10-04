(function(Ge,S){typeof exports=="object"&&typeof module<"u"?S(exports):typeof define=="function"&&define.amd?define(["exports"],S):(Ge=typeof globalThis<"u"?globalThis:Ge||self,S(Ge.mcsNavbar={}))})(this,function(Ge){"use strict";function S(){}function U(t,e){for(const n in e)t[n]=e[n];return t}function Zt(t){return t()}function Nn(){return Object.create(null)}function ve(t){t.forEach(Zt)}function mt(t){return typeof t=="function"}function re(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let _t;function vt(t,e){return _t||(_t=document.createElement("a")),_t.href=e,t===_t.href}function Dn(t){return Object.keys(t).length===0}function Z(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function u(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function P(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function zt(t){return document.createTextNode(t)}function oe(){return zt(" ")}function Mn(){return zt("")}function be(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function bt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function z(t,e){for(const n in e)a(t,n,e[n])}function wt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:a(t,e,n)}function Ai(t){return Array.from(t.childNodes)}function Oi(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function R(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function yt(t,e,n){t.classList[n?"add":"remove"](e)}function It(t){const e={};for(const n of t)e[n.name]=n.value;return e}let tt;function nt(t){tt=t}function Pi(){if(!tt)throw new Error("Function called outside component initialization");return tt}function Ni(t){Pi().$$.on_mount.push(t)}const We=[],Un=[],Et=[],Ln=[],Di=Promise.resolve();let qt=!1;function Mi(){qt||(qt=!0,Di.then(de))}function Kt(t){Et.push(t)}const Jt=new Set;let Ze=0;function de(){if(Ze!==0)return;const t=tt;do{try{for(;Ze<We.length;){const e=We[Ze];Ze++,nt(e),Ui(e.$$)}}catch(e){throw We.length=0,Ze=0,e}for(nt(null),We.length=0,Ze=0;Un.length;)Un.pop()();for(let e=0;e<Et.length;e+=1){const n=Et[e];Jt.has(n)||(Jt.add(n),n())}Et.length=0}while(We.length);for(;Ln.length;)Ln.pop()();qt=!1,Jt.clear(),nt(t)}function Ui(t){if(t.fragment!==null){t.update(),ve(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Kt)}}const Tt=new Set;let Le;function Xt(){Le={r:0,c:[],p:Le}}function Yt(){Le.r||ve(Le.c),Le=Le.p}function q(t,e){t&&t.i&&(Tt.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(Tt.has(t))return;Tt.add(t),Le.c.push(()=>{Tt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function we(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],c=e[s];if(c){for(const l in o)l in c||(r[l]=1);for(const l in c)i[l]||(n[l]=c[l],i[l]=1);t[s]=c}else for(const l in o)i[l]=1}for(const o in r)o in n||(n[o]=void 0);return n}function fe(t){t&&t.c()}function ce(t,e,n,r){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),r||Kt(()=>{const o=t.$$.on_mount.map(Zt).filter(mt);t.$$.on_destroy?t.$$.on_destroy.push(...o):ve(o),t.$$.on_mount=[]}),s.forEach(Kt)}function ae(t,e){const n=t.$$;n.fragment!==null&&(ve(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Li(t,e){t.$$.dirty[0]===-1&&(We.push(t),Mi(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ie(t,e,n,r,i,s,o,c=[-1]){const l=tt;nt(t);const h=t.$$={fragment:null,ctx:[],props:s,update:S,not_equal:i,bound:Nn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Nn(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};o&&o(h.root);let f=!1;if(h.ctx=n?n(t,e.props||{},(g,p,..._)=>{const y=_.length?_[0]:p;return h.ctx&&i(h.ctx[g],h.ctx[g]=y)&&(!h.skip_bound&&h.bound[g]&&h.bound[g](y),f&&Li(t,g)),p}):[],h.update(),f=!0,ve(h.before_update),h.fragment=r?r(h.ctx):!1,e.target){if(e.hydrate){const g=Ai(e.target);h.fragment&&h.fragment.l(g),g.forEach(H)}else h.fragment&&h.fragment.c();e.intro&&q(t.$$.fragment),ce(t,e.target,e.anchor,e.customElement),de()}nt(l)}let rt;typeof HTMLElement=="function"&&(rt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(Zt).filter(mt);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){ve(this.$$.on_disconnect)}$destroy(){ae(this,1),this.$destroy=S}$on(t,e){if(!mt(e))return S;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!Dn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class ye{$destroy(){ae(this,1),this.$destroy=S}$on(e,n){if(!mt(n))return S;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Dn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function xi(t){let e,n,r,i,s,o=[{"stroke-miterlimit":"10"},{style:"fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"},{viewBox:"0 0 267.426 268.163"},{"xml:space":"preserve"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],c={};for(let l=0;l<o.length;l+=1)c=U(c,o[l]);return{c(){e=d("svg"),n=d("clipPath"),r=d("path"),i=d("g"),s=d("path"),a(r,"d","M0 0h267.426v268.163H0z"),a(n,"id","a"),a(s,"d","M10.604 0h41.213C57.673 0 62.42 4.747 62.42 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603H10.604C4.747 62.42 0 57.673 0 51.817V10.604C0 4.747 4.747 0 10.604 0ZM113.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C103 4.747 107.747 0 113.604 0ZM215.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C205 4.747 209.747 0 215.604 0ZM10.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 165.154 0 160.406 0 154.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM10.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 268.154 0 263.406 0 257.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604Z"),a(i,"clip-path","url(#a)"),a(i,"fill","#fff"),z(e,c)},m(l,h){x(l,e,h),u(e,n),u(n,r),u(e,i),u(i,s)},p(l,[h]){z(e,c=we(o,[{"stroke-miterlimit":"10"},{style:"fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round"},{viewBox:"0 0 267.426 268.163"},{"xml:space":"preserve"},{xmlns:"http://www.w3.org/2000/svg"},h&1&&l[0]]))},i:S,o:S,d(l){l&&H(e)}}}function Bi(t,e,n){return t.$$set=r=>{n(0,e=U(U({},e),Z(r)))},e=Z(e),[e]}class $i extends ye{constructor(e){super(),ie(this,e,Bi,xi,re,{})}}function Fi(t){let e,n,r,i,s,o,c,l,h,f,g,p,_,y,m,v,w,b,I,C,E,D,T,A,N,F,B,W=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1488.35 398.49"},t[0]],$={};for(let O=0;O<W.length;O+=1)$=U($,W[O]);return{c(){e=d("svg"),n=d("defs"),r=d("filter"),i=d("feOffset"),s=d("feGaussianBlur"),o=d("feFlood"),c=d("feComposite"),l=d("feComposite"),h=d("filter"),f=d("feOffset"),g=d("feGaussianBlur"),p=d("feFlood"),_=d("feComposite"),y=d("feComposite"),m=d("filter"),v=d("feOffset"),w=d("feGaussianBlur"),b=d("feFlood"),I=d("feComposite"),C=d("feComposite"),E=d("g"),D=d("path"),T=d("g"),A=d("path"),N=d("g"),F=d("path"),B=d("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(c,"in2","blur"),a(c,"operator","in"),a(l,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(g,"result","blur-2"),a(g,"stdDeviation","19.31"),a(p,"flood-color","#34c4e7"),a(p,"flood-opacity",".75"),a(_,"in2","blur-2"),a(_,"operator","in"),a(y,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(w,"result","blur-3"),a(w,"stdDeviation","19.31"),a(b,"flood-color","#34c4e7"),a(b,"flood-opacity",".75"),a(I,"in2","blur-3"),a(I,"operator","in"),a(C,"in","SourceGraphic"),a(m,"id","c"),a(m,"filterUnits","userSpaceOnUse"),a(D,"d","M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM633.87 324.48c0 7.29-1.93 13.24-5.77 17.85-3.85 4.61-8.81 6.92-14.89 6.92h-67.77c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85v-88.6h25.88v85.92H608V0h25.88v324.48ZM781.13 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM923.18 349.25h-26.99L846.3 238.56v110.69h-24.76V0h24.76v221.83l46.54-89.71h26.62v.89l-52.69 95.96 56.41 120.29ZM1050.52 324.03c0 16.81-6.95 25.22-20.85 25.22H970.1c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1195.55 302.61c0 13.39-3.66 24.51-10.98 33.36-7.33 8.85-16.51 13.28-27.55 13.28h-65.53V0h24.76v138.14c9.8-1.49 19.61-2.97 29.41-4.46 12.41-1.93 22.15-2.9 29.23-2.9 13.78 0 20.66 8.11 20.66 24.33v147.51Zm-24.76-4.46V158.67l-54.55 1.79v162.69h34.25c13.53 0 20.29-8.33 20.29-24.99ZM1340.02 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1478.71 349.25h-25.13l-30.53-85.92-30.9 85.92h-24.39v-.89l42.26-110.69-39.65-105.56h25.13l27.93 79.67 28.67-79.67h24.02v.89l-39.65 103.77 42.26 112.47Z"),R(D,"fill","#fff"),R(E,"filter","url(#a)"),a(A,"d","M1478.7 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1478.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(A,"fill","#2bc0d3"),R(T,"filter","url(#b)"),a(F,"d","M1419.87 62.05h-263.59c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h263.59c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM782.86 62.05h-52.78c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h52.78c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(F,"fill","#2bc0d3"),a(B,"d","M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1449.28 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1049.92 62.05H878.63c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h171.29c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(B,"fill","#2bc0d3"),R(N,"filter","url(#c)"),z(e,$)},m(O,V){x(O,e,V),u(e,n),u(n,r),u(r,i),u(r,s),u(r,o),u(r,c),u(r,l),u(n,h),u(h,f),u(h,g),u(h,p),u(h,_),u(h,y),u(n,m),u(m,v),u(m,w),u(m,b),u(m,I),u(m,C),u(e,E),u(E,D),u(e,T),u(T,A),u(e,N),u(N,F),u(N,B)},p(O,[V]){z(e,$=we(W,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1488.35 398.49"},V&1&&O[0]]))},i:S,o:S,d(O){O&&H(e)}}}function Vi(t,e,n){return t.$$set=r=>{n(0,e=U(U({},e),Z(r)))},e=Z(e),[e]}class Hi extends ye{constructor(e){super(),ie(this,e,Vi,Fi,re,{})}}function ji(t){let e,n,r,i,s,o,c,l,h,f,g,p,_,y,m,v,w,b,I,C,E,D,T,A,N,F,B,W=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1205.07 398.49"},t[0]],$={};for(let O=0;O<W.length;O+=1)$=U($,W[O]);return{c(){e=d("svg"),n=d("defs"),r=d("filter"),i=d("feOffset"),s=d("feGaussianBlur"),o=d("feFlood"),c=d("feComposite"),l=d("feComposite"),h=d("filter"),f=d("feOffset"),g=d("feGaussianBlur"),p=d("feFlood"),_=d("feComposite"),y=d("feComposite"),m=d("filter"),v=d("feOffset"),w=d("feGaussianBlur"),b=d("feFlood"),I=d("feComposite"),C=d("feComposite"),E=d("g"),D=d("path"),T=d("g"),A=d("path"),N=d("g"),F=d("path"),B=d("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(c,"in2","blur"),a(c,"operator","in"),a(l,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(g,"result","blur-2"),a(g,"stdDeviation","19.31"),a(p,"flood-color","#34c4e7"),a(p,"flood-opacity",".75"),a(_,"in2","blur-2"),a(_,"operator","in"),a(y,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(w,"result","blur-3"),a(w,"stdDeviation","19.31"),a(b,"flood-color","#34c4e7"),a(b,"flood-opacity",".75"),a(I,"in2","blur-3"),a(I,"operator","in"),a(C,"in","SourceGraphic"),a(m,"id","c"),a(m,"filterUnits","userSpaceOnUse"),a(D,"d","M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM631.64 27.45h-45.05v321.8h-25.88V27.45h-45.43V0h116.36v27.45ZM762.7 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM897.86 203.53h-24.39v-44.86l-45.61 1.79v188.8H803.1V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM994.48 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM1052.01 349.25h-24.39V0h24.39v349.25ZM1195.36 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z"),R(D,"fill","#fff"),R(E,"filter","url(#a)"),a(A,"d","M1195.41 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h1185.76c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(A,"fill","#2bc0d3"),R(T,"filter","url(#b)"),a(F,"d","M1136.59 62.05h-43.62c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h43.62c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM899.91 62.05H730.08c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h169.83c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(F,"fill","#2bc0d3"),a(B,"d","M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1166 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"),R(B,"fill","#2bc0d3"),R(N,"filter","url(#c)"),z(e,$)},m(O,V){x(O,e,V),u(e,n),u(n,r),u(r,i),u(r,s),u(r,o),u(r,c),u(r,l),u(n,h),u(h,f),u(h,g),u(h,p),u(h,_),u(h,y),u(n,m),u(m,v),u(m,w),u(m,b),u(m,I),u(m,C),u(e,E),u(E,D),u(e,T),u(T,A),u(e,N),u(N,F),u(N,B)},p(O,[V]){z(e,$=we(W,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1205.07 398.49"},V&1&&O[0]]))},i:S,o:S,d(O){O&&H(e)}}}function Gi(t,e,n){return t.$$set=r=>{n(0,e=U(U({},e),Z(r)))},e=Z(e),[e]}class Wi extends ye{constructor(e){super(),ie(this,e,Gi,ji,re,{})}}function Zi(t){let e,n,r,i,s,o,c,l,h,f,g,p,_,y,m,v,w,b,I,C,E,D,T,A,N,F,B,W,$,O,V,Q,X,ee,te,ue=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1551.75 432.49"},t[0]],ne={};for(let M=0;M<ue.length;M+=1)ne=U(ne,ue[M]);return{c(){e=d("svg"),n=d("defs"),r=d("filter"),i=d("feOffset"),s=d("feGaussianBlur"),o=d("feFlood"),c=d("feComposite"),l=d("feComposite"),h=d("filter"),f=d("feOffset"),g=d("feGaussianBlur"),p=d("feFlood"),_=d("feComposite"),y=d("feComposite"),m=d("filter"),v=d("feOffset"),w=d("feGaussianBlur"),b=d("feFlood"),I=d("feComposite"),C=d("feComposite"),E=d("filter"),D=d("feOffset"),T=d("feGaussianBlur"),A=d("feFlood"),N=d("feComposite"),F=d("feComposite"),B=d("g"),W=d("path"),$=d("g"),O=d("path"),V=d("g"),Q=d("path"),X=d("g"),ee=d("path"),te=d("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(c,"in2","blur"),a(c,"operator","in"),a(l,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(g,"result","blur-2"),a(g,"stdDeviation","19.31"),a(p,"flood-color","#34c4e7"),a(p,"flood-opacity",".75"),a(_,"in2","blur-2"),a(_,"operator","in"),a(y,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(w,"result","blur-3"),a(w,"stdDeviation","19.31"),a(b,"flood-color","#34c4e7"),a(b,"flood-opacity",".75"),a(I,"in2","blur-3"),a(I,"operator","in"),a(C,"in","SourceGraphic"),a(m,"id","c"),a(m,"filterUnits","userSpaceOnUse"),a(T,"result","blur-4"),a(T,"stdDeviation","19.31"),a(A,"flood-color","#34c4e7"),a(A,"flood-opacity",".75"),a(N,"in2","blur-4"),a(N,"operator","in"),a(F,"in","SourceGraphic"),a(E,"id","d"),a(E,"filterUnits","userSpaceOnUse"),a(W,"d","M163.42 350.14h-24.39V128.99c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V.89h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4.89h24.02v349.25ZM326.69 325.37c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V25.66c0-7.29 1.92-13.24 5.77-17.85 3.84-4.61 8.81-6.92 14.89-6.92h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85v81.24h-26.06V28.34h-64.79V322.7h64.79v-85.92h26.06v88.6ZM485.49 325.37c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V25.66c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85v81.24h-25.88V28.34h-62.93v73.65l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM648.77 350.14h-25.69l-10.24-77.66h-57.9l-10.24 77.66h-24.95v-.89L571.69 0h25.51l51.57 350.14Zm-39.28-105.11L583.98 55.79l-25.69 189.24h51.2ZM784.86 350.14H760.1V159.56l-54.55 1.79v188.8h-24.76V133.01h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM927.28 350.14h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04H826v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM993.74 350.14h-24.39V.89h24.39v349.25ZM1137.83 133.01l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM1265.73 324.93c0 16.81-7.01 25.22-21.04 25.22h-56.78c-14.03 0-21.04-8.4-21.04-25.22v-49.32h24.39v48.87h50.08v-43.29l-64.79-63.6c-6.21-5.95-9.31-13.69-9.31-23.21v-36.15c0-16.81 7.01-25.22 21.04-25.22h56.04c14.02 0 21.04 8.41 21.04 25.22v43.29h-24.02v-42.85h-50.08v37.94l65.35 63.6c6.08 5.8 9.12 13.69 9.12 23.66v41.06ZM1406.29 324.93c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22V158.22c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1542.01 204.42h-24.39v-44.86l-45.61 1.79v188.8h-24.76V133.01h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43Z"),R(W,"fill","#fff"),R(B,"filter","url(#a)"),a(O,"d","M1017.4 399.39H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1017.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(O,"fill","#2bc0d3"),R($,"filter","url(#b)"),a(Q,"d","M1542.1 399.39h-416.69c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h416.69c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(Q,"fill","#2bc0d3"),R(V,"filter","url(#c)"),a(ee,"d","M1483.27 62.95h-455.28c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h455.28c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM928.46 62.95H730.07c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h198.39c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(ee,"fill","#2bc0d3"),a(te,"d","M700.66 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1512.68 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"),R(te,"fill","#2bc0d3"),R(X,"filter","url(#d)"),z(e,ne)},m(M,he){x(M,e,he),u(e,n),u(n,r),u(r,i),u(r,s),u(r,o),u(r,c),u(r,l),u(n,h),u(h,f),u(h,g),u(h,p),u(h,_),u(h,y),u(n,m),u(m,v),u(m,w),u(m,b),u(m,I),u(m,C),u(n,E),u(E,D),u(E,T),u(E,A),u(E,N),u(E,F),u(e,B),u(B,W),u(e,$),u($,O),u(e,V),u(V,Q),u(e,X),u(X,ee),u(X,te)},p(M,[he]){z(e,ne=we(ue,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1551.75 432.49"},he&1&&M[0]]))},i:S,o:S,d(M){M&&H(e)}}}function zi(t,e,n){return t.$$set=r=>{n(0,e=U(U({},e),Z(r)))},e=Z(e),[e]}class qi extends ye{constructor(e){super(),ie(this,e,zi,Zi,re,{})}}function Ki(t){let e,n,r,i,s,o,c,l,h,f,g,p,_,y,m,v,w,b,I,C,E,D,T,A,N,F,B,W,$,O,V,Q,X,ee,te,ue=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1452.86 431.6"},t[0]],ne={};for(let M=0;M<ue.length;M+=1)ne=U(ne,ue[M]);return{c(){e=d("svg"),n=d("defs"),r=d("filter"),i=d("feOffset"),s=d("feGaussianBlur"),o=d("feFlood"),c=d("feComposite"),l=d("feComposite"),h=d("filter"),f=d("feOffset"),g=d("feGaussianBlur"),p=d("feFlood"),_=d("feComposite"),y=d("feComposite"),m=d("filter"),v=d("feOffset"),w=d("feGaussianBlur"),b=d("feFlood"),I=d("feComposite"),C=d("feComposite"),E=d("filter"),D=d("feOffset"),T=d("feGaussianBlur"),A=d("feFlood"),N=d("feComposite"),F=d("feComposite"),B=d("g"),W=d("path"),$=d("g"),O=d("path"),V=d("g"),Q=d("path"),X=d("g"),ee=d("path"),te=d("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(c,"in2","blur"),a(c,"operator","in"),a(l,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(g,"result","blur-2"),a(g,"stdDeviation","19.31"),a(p,"flood-color","#34c4e7"),a(p,"flood-opacity",".75"),a(_,"in2","blur-2"),a(_,"operator","in"),a(y,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(w,"result","blur-3"),a(w,"stdDeviation","19.31"),a(b,"flood-color","#34c4e7"),a(b,"flood-opacity",".75"),a(I,"in2","blur-3"),a(I,"operator","in"),a(C,"in","SourceGraphic"),a(m,"id","c"),a(m,"filterUnits","userSpaceOnUse"),a(T,"result","blur-4"),a(T,"stdDeviation","19.31"),a(A,"flood-color","#34c4e7"),a(A,"flood-opacity",".75"),a(N,"in2","blur-4"),a(N,"operator","in"),a(F,"in","SourceGraphic"),a(E,"id","d"),a(E,"filterUnits","userSpaceOnUse"),a(W,"d","M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM644.86 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM752.83 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM888.55 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1023.71 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1157.57 349.25h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04h-24.02v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM1301.11 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1443.15 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z"),R(W,"fill","#fff"),R(B,"filter","url(#a)"),a(O,"d","M1161.4 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1161.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(O,"fill","#2bc0d3"),R($,"filter","url(#b)"),a(Q,"d","M1443.21 398.49h-103.92c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h103.92c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(Q,"fill","#2bc0d3"),R(V,"filter","url(#c)"),a(ee,"d","M1384.38 62.05H824.22c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h560.16c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(ee,"fill","#2bc0d3"),a(te,"d","M794.81 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1413.79 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"),R(te,"fill","#2bc0d3"),R(X,"filter","url(#d)"),z(e,ne)},m(M,he){x(M,e,he),u(e,n),u(n,r),u(r,i),u(r,s),u(r,o),u(r,c),u(r,l),u(n,h),u(h,f),u(h,g),u(h,p),u(h,_),u(h,y),u(n,m),u(m,v),u(m,w),u(m,b),u(m,I),u(m,C),u(n,E),u(E,D),u(E,T),u(E,A),u(E,N),u(E,F),u(e,B),u(B,W),u(e,$),u($,O),u(e,V),u(V,Q),u(e,X),u(X,ee),u(X,te)},p(M,[he]){z(e,ne=we(ue,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1452.86 431.6"},he&1&&M[0]]))},i:S,o:S,d(M){M&&H(e)}}}function Ji(t,e,n){return t.$$set=r=>{n(0,e=U(U({},e),Z(r)))},e=Z(e),[e]}class Xi extends ye{constructor(e){super(),ie(this,e,Ji,Ki,re,{})}}function Yi(t){let e,n,r,i,s,o,c,l,h,f,g,p,_,y,m,v,w,b,I,C,E,D,T,A,N,F,B,W,$,O,V,Q,X,ee,te,ue=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1324.74 431.6"},t[0]],ne={};for(let M=0;M<ue.length;M+=1)ne=U(ne,ue[M]);return{c(){e=d("svg"),n=d("defs"),r=d("filter"),i=d("feOffset"),s=d("feGaussianBlur"),o=d("feFlood"),c=d("feComposite"),l=d("feComposite"),h=d("filter"),f=d("feOffset"),g=d("feGaussianBlur"),p=d("feFlood"),_=d("feComposite"),y=d("feComposite"),m=d("filter"),v=d("feOffset"),w=d("feGaussianBlur"),b=d("feFlood"),I=d("feComposite"),C=d("feComposite"),E=d("filter"),D=d("feOffset"),T=d("feGaussianBlur"),A=d("feFlood"),N=d("feComposite"),F=d("feComposite"),B=d("g"),W=d("path"),$=d("g"),O=d("path"),V=d("g"),Q=d("path"),X=d("path"),ee=d("g"),te=d("path"),a(s,"result","blur"),a(s,"stdDeviation","19.31"),a(o,"flood-color","#34c4e7"),a(o,"flood-opacity",".75"),a(c,"in2","blur"),a(c,"operator","in"),a(l,"in","SourceGraphic"),a(r,"id","a"),a(r,"filterUnits","userSpaceOnUse"),a(g,"result","blur-2"),a(g,"stdDeviation","19.31"),a(p,"flood-color","#34c4e7"),a(p,"flood-opacity",".75"),a(_,"in2","blur-2"),a(_,"operator","in"),a(y,"in","SourceGraphic"),a(h,"id","b"),a(h,"filterUnits","userSpaceOnUse"),a(w,"result","blur-3"),a(w,"stdDeviation","19.31"),a(b,"flood-color","#34c4e7"),a(b,"flood-opacity",".75"),a(I,"in2","blur-3"),a(I,"operator","in"),a(C,"in","SourceGraphic"),a(m,"id","c"),a(m,"filterUnits","userSpaceOnUse"),a(T,"result","blur-4"),a(T,"stdDeviation","19.31"),a(A,"flood-color","#34c4e7"),a(A,"flood-opacity",".75"),a(N,"in2","blur-4"),a(N,"operator","in"),a(F,"in","SourceGraphic"),a(E,"id","d"),a(E,"filterUnits","userSpaceOnUse"),a(W,"d","M509.35 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h499.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(W,"fill","#2bc0d3"),R(B,"filter","url(#a)"),a(O,"d","M1029.94 398.49H627.91c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h402.03c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(O,"fill","#2bc0d3"),R($,"filter","url(#b)"),a(Q,"d","M1256.26 62.05H606.1c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h650.15c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z"),R(Q,"fill","#2bc0d3"),a(X,"d","M576.69 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1285.67 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z"),R(X,"fill","#2bc0d3"),R(V,"filter","url(#c)"),a(te,"d","M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM630.33 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM764.75 349.25h-24.76V158.67l-54.55 1.79v188.8h-24.76V132.11h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM906.05 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1041.77 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1176.19 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1318.98 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76Z"),R(te,"fill","#fff"),R(ee,"filter","url(#d)"),z(e,ne)},m(M,he){x(M,e,he),u(e,n),u(n,r),u(r,i),u(r,s),u(r,o),u(r,c),u(r,l),u(n,h),u(h,f),u(h,g),u(h,p),u(h,_),u(h,y),u(n,m),u(m,v),u(m,w),u(m,b),u(m,I),u(m,C),u(n,E),u(E,D),u(E,T),u(E,A),u(E,N),u(E,F),u(e,B),u(B,W),u(e,$),u($,O),u(e,V),u(V,Q),u(V,X),u(e,ee),u(ee,te)},p(M,[he]){z(e,ne=we(ue,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 1324.74 431.6"},he&1&&M[0]]))},i:S,o:S,d(M){M&&H(e)}}}function Qi(t,e,n){return t.$$set=r=>{n(0,e=U(U({},e),Z(r)))},e=Z(e),[e]}class es extends ye{constructor(e){super(),ie(this,e,Qi,Yi,re,{})}}function ts(t){let e,n,r,i,s,o,c,l,h,f,g,p,_,y,m,v,w,b,I,C,E,D;return i=new Hi({props:{style:"height: 2rem"}}),c=new Wi({props:{style:"height: 2rem"}}),f=new qi({props:{style:"height: 2rem"}}),_=new Xi({props:{style:"height: 2rem"}}),v=new es({props:{style:"height: 2rem"}}),I=new $i({props:{style:"width: max-content; height: max-content"}}),{c(){e=P("div"),n=P("section"),r=P("a"),fe(i.$$.fragment),s=oe(),o=P("a"),fe(c.$$.fragment),l=oe(),h=P("a"),fe(f.$$.fragment),g=oe(),p=P("a"),fe(_.$$.fragment),y=oe(),m=P("a"),fe(v.$$.fragment),w=oe(),b=P("div"),fe(I.$$.fragment),this.c=S,a(r,"href","/jukebox"),a(r,"class","page-icon"),a(o,"href","/turtle"),a(o,"class","page-icon"),a(h,"href","/analyser"),a(h,"class","page-icon"),a(p,"href","/storage"),a(p,"class","page-icon"),a(m,"href","/home"),a(m,"class","page-icon"),a(n,"class","popover"),yt(n,"slidein",t[0]),a(b,"class","portal-button"),yt(b,"rotate-180",t[0])},m(T,A){x(T,e,A),u(e,n),u(n,r),ce(i,r,null),u(n,s),u(n,o),ce(c,o,null),u(n,l),u(n,h),ce(f,h,null),u(n,g),u(n,p),ce(_,p,null),u(n,y),u(n,m),ce(v,m,null),u(e,w),u(e,b),ce(I,b,null),C=!0,E||(D=[be(n,"mouseleave",t[1]),be(b,"mousedown",t[2])],E=!0)},p(T,[A]){(!C||A&1)&&yt(n,"slidein",T[0]),(!C||A&1)&&yt(b,"rotate-180",T[0])},i(T){C||(q(i.$$.fragment,T),q(c.$$.fragment,T),q(f.$$.fragment,T),q(_.$$.fragment,T),q(v.$$.fragment,T),q(I.$$.fragment,T),C=!0)},o(T){K(i.$$.fragment,T),K(c.$$.fragment,T),K(f.$$.fragment,T),K(_.$$.fragment,T),K(v.$$.fragment,T),K(I.$$.fragment,T),C=!1},d(T){T&&H(e),ae(i),ae(c),ae(f),ae(_),ae(v),ae(I),E=!1,ve(D)}}}function ns(t,e,n){let r=!1;return[r,()=>n(0,r=!1),()=>n(0,r=!r)]}class rs extends rt{constructor(e){super(),this.shadowRoot.innerHTML="<style>.portal-button{margin-left:1rem;margin-right:0.5rem;transition:300ms;width:1.75rem;height:1.75rem}.rotate-180{transform:rotate(180deg)}.popover{background-color:rgb(13 29 48 / var(--tw-bg-opacity));position:absolute;height:calc(100vh - 3.5rem);width:13rem;transition-duration:200ms;transition-property:transform;top:3.5rem;left:-15rem;transform-origin:top left;transform:scale(0.9);overflow:hidden}.slidein{left:0;transform:scale(1)}.page-icon{height:2rem;width:auto;margin-top:1rem;margin-left:0.5rem;margin-right:0.5rem;display:flex;justify-content:center}</style>",ie(this,{target:this.shadowRoot,props:It(this.attributes),customElement:!0},ns,ts,re,{},null),e&&e.target&&x(e.target,this,e.anchor)}}customElements.define("mcs-portal",rs);/**
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
 */const xn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},is=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],c=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,c=o?t[i+1]:0,l=i+2<t.length,h=l?t[i+2]:0,f=s>>2,g=(s&3)<<4|c>>4;let p=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(p=64)),r.push(n[f],n[g],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):is(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||h==null||g==null)throw new ss;const p=s<<2|c>>4;if(r.push(p),h!==64){const _=c<<4&240|h>>2;if(r.push(_),g!==64){const y=h<<6&192|g;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ss extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const os=function(t){const e=xn(t);return Bn.encodeByteArray(e,!0)},kt=function(t){return os(t).replace(/\./g,"")},$n=function(t){try{return Bn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function as(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cs=()=>as().__FIREBASE_DEFAULTS__,ls=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},us=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$n(t[1]);return e&&JSON.parse(e)},Ct=()=>{try{return cs()||ls()||us()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fn=t=>{var e,n;return(n=(e=Ct())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hs=t=>{const e=Fn(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vn=()=>{var t;return(t=Ct())===null||t===void 0?void 0:t.config},Hn=t=>{var e;return(e=Ct())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ds{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fs(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[kt(JSON.stringify(n)),kt(JSON.stringify(o)),c].join(".")}/**
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
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ps(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function gs(){var t;const e=(t=Ct())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ms(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _s(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vs(){const t=J();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bs(){try{return typeof indexedDB=="object"}catch{return!1}}function ws(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ys="FirebaseError";class Ie extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ys,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,it.prototype.create)}}class it{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Is(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Ie(i,c,r)}}function Is(t,e){return t.replace(Es,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Es=/\{\$([^}]+)}/g;function Ts(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(jn(s)&&jn(o)){if(!Rt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jn(t){return t!==null&&typeof t=="object"}/**
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
 */function st(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(t,e){const n=new Cs(t,e);return n.subscribe.bind(n)}class Cs{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rs(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qt),i.error===void 0&&(i.error=Qt),i.complete===void 0&&(i.complete=Qt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rs(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qt(){}/**
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
 */function le(t){return t&&t._delegate?t._delegate:t}class xe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Be="[DEFAULT]";/**
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
 */class Ss{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ds;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Os(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Be){return this.instances.has(e)}getOptions(e=Be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:As(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Be){return this.component?this.component.multipleInstances?e:Be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function As(t){return t===Be?void 0:t}function Os(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ps{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ss(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(L||(L={}));const Ns={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Ds=L.INFO,Ms={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Us=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ms[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gn{constructor(e){this.name=e,this._logLevel=Ds,this._logHandler=Us,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ns[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const Ls=(t,e)=>e.some(n=>t instanceof n);let Wn,Zn;function xs(){return Wn||(Wn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bs(){return Zn||(Zn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zn=new WeakMap,en=new WeakMap,qn=new WeakMap,tn=new WeakMap,nn=new WeakMap;function $s(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Re(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zn.set(n,t)}).catch(()=>{}),nn.set(e,t),e}function Fs(t){if(en.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});en.set(t,e)}let rn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return en.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Re(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vs(t){rn=t(rn)}function Hs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sn(this),e,...n);return qn.set(r,e.sort?e.sort():[e]),Re(r)}:Bs().includes(t)?function(...e){return t.apply(sn(this),e),Re(zn.get(this))}:function(...e){return Re(t.apply(sn(this),e))}}function js(t){return typeof t=="function"?Hs(t):(t instanceof IDBTransaction&&Fs(t),Ls(t,xs())?new Proxy(t,rn):t)}function Re(t){if(t instanceof IDBRequest)return $s(t);if(tn.has(t))return tn.get(t);const e=js(t);return e!==t&&(tn.set(t,e),nn.set(e,t)),e}const sn=t=>nn.get(t);function Gs(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=Re(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Re(o.result),l.oldVersion,l.newVersion,Re(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Ws=["get","getKey","getAll","getAllKeys","count"],Zs=["put","add","delete","clear"],on=new Map;function Kn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(on.get(e))return on.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Zs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ws.includes(n)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&l.done]))[0]};return on.set(e,s),s}Vs(t=>({...t,get:(e,n,r)=>Kn(e,n)||t.get(e,n,r),has:(e,n)=>!!Kn(e,n)||t.has(e,n)}));/**
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
 */class zs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qs(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qs(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const an="@firebase/app",Jn="0.9.11";/**
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
 */const $e=new Gn("@firebase/app"),Ks="@firebase/app-compat",Js="@firebase/analytics-compat",Xs="@firebase/analytics",Ys="@firebase/app-check-compat",Qs="@firebase/app-check",eo="@firebase/auth",to="@firebase/auth-compat",no="@firebase/database",ro="@firebase/database-compat",io="@firebase/functions",so="@firebase/functions-compat",oo="@firebase/installations",ao="@firebase/installations-compat",co="@firebase/messaging",lo="@firebase/messaging-compat",uo="@firebase/performance",ho="@firebase/performance-compat",fo="@firebase/remote-config",po="@firebase/remote-config-compat",go="@firebase/storage",mo="@firebase/storage-compat",_o="@firebase/firestore",vo="@firebase/firestore-compat",bo="firebase",wo="9.22.1";/**
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
 */const cn="[DEFAULT]",yo={[an]:"fire-core",[Ks]:"fire-core-compat",[Xs]:"fire-analytics",[Js]:"fire-analytics-compat",[Qs]:"fire-app-check",[Ys]:"fire-app-check-compat",[eo]:"fire-auth",[to]:"fire-auth-compat",[no]:"fire-rtdb",[ro]:"fire-rtdb-compat",[io]:"fire-fn",[so]:"fire-fn-compat",[oo]:"fire-iid",[ao]:"fire-iid-compat",[co]:"fire-fcm",[lo]:"fire-fcm-compat",[uo]:"fire-perf",[ho]:"fire-perf-compat",[fo]:"fire-rc",[po]:"fire-rc-compat",[go]:"fire-gcs",[mo]:"fire-gcs-compat",[_o]:"fire-fst",[vo]:"fire-fst-compat","fire-js":"fire-js",[bo]:"fire-js-all"};/**
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
 */const St=new Map,ln=new Map;function Io(t,e){try{t.container.addComponent(e)}catch(n){$e.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ze(t){const e=t.name;if(ln.has(e))return $e.debug(`There were multiple attempts to register component ${e}.`),!1;ln.set(e,t);for(const n of St.values())Io(n,t);return!0}function un(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Eo={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Se=new it("app","Firebase",Eo);/**
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
 */class To{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Se.create("app-deleted",{appName:this._name})}}/**
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
 */const qe=wo;function Xn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Se.create("bad-app-name",{appName:String(i)});if(n||(n=Vn()),!n)throw Se.create("no-options");const s=St.get(i);if(s){if(Rt(n,s.options)&&Rt(r,s.config))return s;throw Se.create("duplicate-app",{appName:i})}const o=new Ps(i);for(const l of ln.values())o.addComponent(l);const c=new To(n,r,o);return St.set(i,c),c}function hn(t=cn){const e=St.get(t);if(!e&&t===cn&&Vn())return Xn();if(!e)throw Se.create("no-app",{appName:t});return e}function Ae(t,e,n){var r;let i=(r=yo[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$e.warn(c.join(" "));return}ze(new xe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ko="firebase-heartbeat-database",Co=1,ot="firebase-heartbeat-store";let dn=null;function Yn(){return dn||(dn=Gs(ko,Co,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ot)}}}).catch(t=>{throw Se.create("idb-open",{originalErrorMessage:t.message})})),dn}async function Ro(t){try{return await(await Yn()).transaction(ot).objectStore(ot).get(er(t))}catch(e){if(e instanceof Ie)$e.warn(e.message);else{const n=Se.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$e.warn(n.message)}}}async function Qn(t,e){try{const r=(await Yn()).transaction(ot,"readwrite");await r.objectStore(ot).put(e,er(t)),await r.done}catch(n){if(n instanceof Ie)$e.warn(n.message);else{const r=Se.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$e.warn(r.message)}}}function er(t){return`${t.name}!${t.options.appId}`}/**
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
 */const So=1024,Ao=30*24*60*60*1e3;class Oo{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new No(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ao}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tr(),{heartbeatsToSend:n,unsentEntries:r}=Po(this._heartbeatsCache.heartbeats),i=kt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tr(){return new Date().toISOString().substring(0,10)}function Po(t,e=So){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nr(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class No{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bs()?ws().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ro(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nr(t){return kt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Do(t){ze(new xe("platform-logger",e=>new zs(e),"PRIVATE")),ze(new xe("heartbeat",e=>new Oo(e),"PRIVATE")),Ae(an,Jn,t),Ae(an,Jn,"esm2017"),Ae("fire-js","")}Do("");var Mo="firebase",Uo="9.22.1";/**
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
 */Ae(Mo,Uo,"app");function fn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lo=rr,ir=new it("auth","Firebase",rr());/**
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
 */const At=new Gn("@firebase/auth");function xo(t,...e){At.logLevel<=L.WARN&&At.warn(`Auth (${qe}): ${t}`,...e)}function Ot(t,...e){At.logLevel<=L.ERROR&&At.error(`Auth (${qe}): ${t}`,...e)}/**
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
 */function pe(t,...e){throw pn(t,...e)}function ge(t,...e){return pn(t,...e)}function sr(t,e,n){const r=Object.assign(Object.assign({},Lo()),{[e]:n});return new it("auth","Firebase",r).create(e,{appName:t.name})}function Bo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pe(t,"argument-error"),sr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ir.create(t,...e)}function k(t,e,...n){if(!t)throw pn(e,...n)}function Ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ot(e),new Error(e)}function Te(t,e){t||Ee(e)}/**
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
 */function gn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $o(){return or()==="http:"||or()==="https:"}function or(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Fo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($o()||ms()||"connection"in navigator)?navigator.onLine:!0}function Vo(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class at{constructor(e,n){this.shortDelay=e,this.longDelay=n,Te(n>e,"Short delay should be less than long delay!"),this.isMobile=ps()||_s()}get(){return Fo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mn(t,e){Te(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ar{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ho={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jo=new at(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ct(t,e,n,r,i={}){return lr(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=st(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ar.fetch()(ur(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function lr(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ho),e);try{const i=new Wo(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pt(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pt(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pt(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sr(t,f,h);pe(t,f)}}catch(i){if(i instanceof Ie)throw i;pe(t,"network-request-failed",{message:String(i)})}}async function Go(t,e,n,r,i={}){const s=await ct(t,e,n,r,i);return"mfaPendingCredential"in s&&pe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ur(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mn(t.config,i):`${t.config.apiScheme}://${i}`}class Wo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ge(this.auth,"network-request-failed")),jo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pt(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ge(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Zo(t,e){return ct(t,"POST","/v1/accounts:delete",e)}async function zo(t,e){return ct(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function lt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qo(t,e=!1){const n=le(t),r=await n.getIdToken(e),i=Nt(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lt(_n(i.auth_time)),issuedAtTime:lt(_n(i.iat)),expirationTime:lt(_n(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _n(t){return Number(t)*1e3}function Nt(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ot("JWT malformed, contained fewer than 3 sections"),null;try{const i=$n(n);return i?JSON.parse(i):(Ot("Failed to decode base64 JWT payload"),null)}catch(i){return Ot("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ko(t){const e=Nt(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ut(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ie&&Jo(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Xo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lt(this.lastLoginAt),this.creationTime=lt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ut(t,zo(n,{idToken:r}));k(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ea(s.providerUserInfo):[],c=Qo(t.providerData,o),l=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new hr(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function Yo(t){const e=le(t);await Dt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qo(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ea(t){return t.map(e=>{var{providerId:n}=e,r=fn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ta(t,e){const n=await lr(t,{},async()=>{const r=st({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ur(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ar.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ht{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ko(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ta(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ht;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ht,this.toJSON())}_performRefresh(){return Ee("not implemented")}}/**
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
 */function Oe(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fe{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ut(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qo(this,e)}reload(){return Yo(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ut(this,Zo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,c,l,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(c=n.tenantId)!==null&&c!==void 0?c:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,b=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:C,isAnonymous:E,providerData:D,stsTokenManager:T}=n;k(I&&T,e,"internal-error");const A=ht.fromJSON(this.name,T);k(typeof I=="string",e,"internal-error"),Oe(g,e.name),Oe(p,e.name),k(typeof C=="boolean",e,"internal-error"),k(typeof E=="boolean",e,"internal-error"),Oe(_,e.name),Oe(y,e.name),Oe(m,e.name),Oe(v,e.name),Oe(w,e.name),Oe(b,e.name);const N=new Fe({uid:I,auth:e,email:p,emailVerified:C,displayName:g,isAnonymous:E,photoURL:y,phoneNumber:_,tenantId:m,stsTokenManager:A,createdAt:w,lastLoginAt:b});return D&&Array.isArray(D)&&(N.providerData=D.map(F=>Object.assign({},F))),v&&(N._redirectEventId=v),N}static async _fromIdTokenResponse(e,n,r=!1){const i=new ht;i.updateFromServerResponse(n);const s=new Fe({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dt(s),s}}/**
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
 */const dr=new Map;function ke(t){Te(t instanceof Function,"Expected a class definition");let e=dr.get(t);return e?(Te(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dr.set(t,e),e)}/**
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
 */class fr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fr.type="NONE";const pr=fr;/**
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
 */function Mt(t,e,n){return`firebase:${t}:${e}:${n}`}class Ke{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mt(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ke(ke(pr),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||ke(pr);const o=Mt(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const g=Fe._fromJSON(e,f);h!==s&&(c=g),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ke(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ke(s,e,r))}}/**
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
 */function gr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wr(e))return"Blackberry";if(yr(e))return"Webos";if(vn(e))return"Safari";if((e.includes("chrome/")||_r(e))&&!e.includes("edge/"))return"Chrome";if(br(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mr(t=J()){return/firefox\//i.test(t)}function vn(t=J()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _r(t=J()){return/crios\//i.test(t)}function vr(t=J()){return/iemobile/i.test(t)}function br(t=J()){return/android/i.test(t)}function wr(t=J()){return/blackberry/i.test(t)}function yr(t=J()){return/webos/i.test(t)}function Ut(t=J()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function na(t=J()){var e;return Ut(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ra(){return vs()&&document.documentMode===10}function Ir(t=J()){return Ut(t)||br(t)||yr(t)||wr(t)||/windows phone/i.test(t)||vr(t)}function ia(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Er(t,e=[]){let n;switch(t){case"Browser":n=gr(J());break;case"Worker":n=`${gr(J())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qe}/${r}`}async function Tr(t,e){return ct(t,"GET","/v2/recaptchaConfig",cr(t,e))}function kr(t){return t!==void 0&&t.enterprise!==void 0}class Cr{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function sa(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rr(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ge("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sa().appendChild(r)})}function oa(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aa="https://www.google.com/recaptcha/enterprise.js?render=",ca="recaptcha-enterprise",la="NO_RECAPTCHA";class ua{constructor(e){this.type=ca,this.auth=dt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Tr(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Cr(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){const l=window.grecaptcha;kr(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(la)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!n&&kr(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rr(aa+c).then(()=>{i(c,s,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}/**
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
 */class ha{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class da{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sr(this),this.idTokenSubscription=new Sr(this),this.beforeStateQueue=new ha(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ir,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ke(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ke.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?le(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ke(e))})}async initializeRecaptchaConfig(){const e=await Tr(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Cr(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ua(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new it("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ke(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Ke.create(this,[ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Er(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xo(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dt(t){return le(t)}class Sr{constructor(e){this.auth=e,this.observer=null,this.addObserver=ks(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function fa(t,e){const n=un(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Rt(s,e??{}))return i;pe(i,"already-initialized")}return n.initialize({options:e})}function pa(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ga(t,e,n){const r=dt(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ar(e),{host:o,port:c}=ma(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_a()}function Ar(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ma(t){const e=Ar(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Or(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Or(o)}}}function Or(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _a(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Pr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ee("not implemented")}_getIdTokenResponse(e){return Ee("not implemented")}_linkToIdToken(e,n){return Ee("not implemented")}_getReauthenticationResolver(e){return Ee("not implemented")}}/**
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
 */async function Je(t,e){return Go(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
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
 */const va="http://localhost";class Ce extends Pr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fn(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ce(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Je(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Je(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Je(e,n)}buildRequest(){const e={requestUri:va,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=st(n)}return e}}/**
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
 */class bn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xe extends bn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ye extends Xe{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),Ce._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),Ce._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ye.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ye.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!r&&!i&&!n&&!s||!c)return null;try{return new Ye(c)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Pe extends Xe{constructor(){super("facebook.com")}static credential(e){return Ce._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Pe.PROVIDER_ID="facebook.com";/**
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
 */class Ne extends Xe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ce._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ne.credential(n,r)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com",Ne.PROVIDER_ID="google.com";/**
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
 */class De extends Xe{constructor(){super("github.com")}static credential(e){return Ce._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com",De.PROVIDER_ID="github.com";/**
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
 */class Me extends Xe{constructor(){super("twitter.com")}static credential(e,n){return Ce._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Me.credential(n,r)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com",Me.PROVIDER_ID="twitter.com";/**
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
 */class Qe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fe._fromIdTokenResponse(e,r,i),o=Nr(r);return new Qe({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nr(r);return new Qe({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Lt extends Ie{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lt(e,n,r,i)}}function Dr(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lt._fromErrorAndOperation(t,s,e,r):s})}async function ba(t,e,n=!1){const r=await ut(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qe._forOperation(t,"link",r)}/**
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
 */async function wa(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ut(t,Dr(r,i,e,t),n);k(s.idToken,r,"internal-error");const o=Nt(s.idToken);k(o,r,"internal-error");const{sub:c}=o;return k(t.uid===c,r,"user-mismatch"),Qe._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pe(r,"user-mismatch"),s}}/**
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
 */async function ya(t,e,n=!1){const r="signIn",i=await Dr(t,r,e),s=await Qe._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */function Ia(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Nt(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new et(s,c)}}if(!r)return null;switch(r){case"facebook.com":return new Ea(s,i);case"github.com":return new Ta(s,i);case"google.com":return new ka(s,i);case"twitter.com":return new Ca(s,i,t.screenName||null);case"custom":case"anonymous":return new et(s,null);default:return new et(s,r,i)}}class et{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Mr extends et{constructor(e,n,r,i){super(e,n,r),this.username=i}}class Ea extends et{constructor(e,n){super(e,"facebook.com",n)}}class Ta extends Mr{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class ka extends et{constructor(e,n){super(e,"google.com",n)}}class Ca extends Mr{constructor(e,n,r){super(e,"twitter.com",n,r)}}function Ra(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Ia(n)}function Sa(t,e,n,r){return le(t).onIdTokenChanged(e,n,r)}function Aa(t,e,n){return le(t).beforeAuthStateChanged(e,n)}function Ur(t){return le(t).signOut()}const xt="__sak";/**
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
 */class Lr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xt,"1"),this.storage.removeItem(xt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Oa(){const t=J();return vn(t)||Ut(t)}const Pa=1e3,Na=10;class xr extends Lr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Oa()&&ia(),this.fallbackToPolling=Ir(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ra()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Na):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xr.type="LOCAL";const Br=xr;/**
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
 */class $r extends Lr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$r.type="SESSION";const Fr=$r;/**
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
 */function Da(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async h=>h(n.origin,s)),l=await Da(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bt.receivers=[];/**
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
 */function wn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ma{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const h=wn("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const p=g;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(p.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function me(){return window}function Ua(t){me().location.href=t}/**
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
 */function Vr(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function La(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xa(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ba(){return Vr()?self:null}/**
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
 */const Hr="firebaseLocalStorageDb",$a=1,$t="firebaseLocalStorage",jr="fbase_key";class ft{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ft(t,e){return t.transaction([$t],e?"readwrite":"readonly").objectStore($t)}function Fa(){const t=indexedDB.deleteDatabase(Hr);return new ft(t).toPromise()}function yn(){const t=indexedDB.open(Hr,$a);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($t,{keyPath:jr})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($t)?e(r):(r.close(),await Fa(),e(await yn()))})})}async function Gr(t,e,n){const r=Ft(t,!0).put({[jr]:e,value:n});return new ft(r).toPromise()}async function Va(t,e){const n=Ft(t,!1).get(e),r=await new ft(n).toPromise();return r===void 0?null:r.value}function Wr(t,e){const n=Ft(t,!0).delete(e);return new ft(n).toPromise()}const Ha=800,ja=3;class Zr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ja)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bt._getInstance(Ba()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await La(),!this.activeServiceWorker)return;this.sender=new Ma(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xa()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yn();return await Gr(e,xt,"1"),await Wr(e,xt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Va(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ft(i,!1).getAll();return new ft(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ha)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zr.type="LOCAL";const Ga=Zr;new at(3e4,6e4);/**
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
 */function zr(t,e){return e?ke(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class In extends Pr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Je(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Je(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Je(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wa(t){return ya(t.auth,new In(t),t.bypassAuthState)}function Za(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),wa(n,new In(t),t.bypassAuthState)}async function za(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),ba(n,new In(t),t.bypassAuthState)}/**
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
 */class qr{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wa;case"linkViaPopup":case"linkViaRedirect":return za;case"reauthViaPopup":case"reauthViaRedirect":return Za;default:pe(this.auth,"internal-error")}}resolve(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qa=new at(2e3,1e4);async function Ka(t,e,n){const r=dt(t);Bo(t,e,bn);const i=zr(r,n);return new Ve(r,"signInViaPopup",e,i).executeNotNull()}class Ve extends qr{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ve.currentPopupAction&&Ve.currentPopupAction.cancel(),Ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Te(this.filter.length===1,"Popup operations only handle one event");const e=wn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qa.get())};e()}}Ve.currentPopupAction=null;/**
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
 */const Ja="pendingRedirect",Vt=new Map;class Xa extends qr{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vt.get(this.auth._key());if(!e){try{const r=await Ya(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vt.set(this.auth._key(),e)}return this.bypassAuthState||Vt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ya(t,e){const n=tc(e),r=ec(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qa(t,e){Vt.set(t._key(),e)}function ec(t){return ke(t._redirectPersistence)}function tc(t){return Mt(Ja,t.config.apiKey,t.name)}async function nc(t,e,n=!1){const r=dt(t),i=zr(r,e),o=await new Xa(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const rc=10*60*1e3;class ic{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Jr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ge(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kr(e))}saveEventToCache(e){this.cachedEventUids.add(Kr(e)),this.lastProcessedEventTime=Date.now()}}function Kr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jr({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jr(t);default:return!1}}/**
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
 */async function oc(t,e={}){return ct(t,"GET","/v1/projects",e)}/**
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
 */const ac=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cc=/^https?/;async function lc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oc(t);for(const n of e)try{if(uc(n))return}catch{}pe(t,"unauthorized-domain")}function uc(t){const e=gn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cc.test(n))return!1;if(ac.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hc=new at(3e4,6e4);function Xr(){const t=me().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dc(t){return new Promise((e,n)=>{var r,i,s;function o(){Xr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xr(),n(ge(t,"network-request-failed"))},timeout:hc.get()})}if(!((i=(r=me().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=me().gapi)===null||s===void 0)&&s.load)o();else{const c=oa("iframefcb");return me()[c]=()=>{gapi.load?o():n(ge(t,"network-request-failed"))},Rr(`https://apis.google.com/js/api.js?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ht=null,e})}let Ht=null;function fc(t){return Ht=Ht||dc(t),Ht}/**
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
 */const pc=new at(5e3,15e3),gc="__/auth/iframe",mc="emulator/auth/iframe",_c={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bc(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mn(e,mc):`https://${t.config.authDomain}/${gc}`,r={apiKey:e.apiKey,appName:t.name,v:qe},i=vc.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${st(r).slice(1)}`}async function wc(t){const e=await fc(t),n=me().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:bc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_c,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ge(t,"network-request-failed"),c=me().setTimeout(()=>{s(o)},pc.get());function l(){me().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const yc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ic=500,Ec=600,Tc="_blank",kc="http://localhost";class Yr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cc(t,e,n,r=Ic,i=Ec){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},yc),{width:r.toString(),height:i.toString(),top:s,left:o}),h=J().toLowerCase();n&&(c=_r(h)?Tc:n),mr(h)&&(e=e||kc,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[_,y])=>`${p}${_}=${y},`,"");if(na(h)&&c!=="_self")return Rc(e||"",c),new Yr(null);const g=window.open(e||"",c,f);k(g,t,"popup-blocked");try{g.focus()}catch{}return new Yr(g)}function Rc(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Sc="__/auth/handler",Ac="emulator/auth/handler",Oc=encodeURIComponent("fac");async function Qr(t,e,n,r,i,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qe,eventId:i};if(e instanceof bn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ts(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries(s||{}))o[f]=g}if(e instanceof Xe){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${Oc}=${encodeURIComponent(l)}`:"";return`${Pc(t)}?${st(c).slice(1)}${h}`}function Pc({config:t}){return t.emulator?mn(t,Ac):`https://${t.authDomain}/${Sc}`}/**
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
 */const En="webStorageSupport";class Nc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fr,this._completeRedirectFn=nc,this._overrideRedirectResult=Qa}async _openPopup(e,n,r,i){var s;Te((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qr(e,n,r,gn(),i);return Cc(e,o,wn())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qr(e,n,r,gn(),i);return Ua(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Te(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wc(e),r=new ic(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(En,{type:En},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[En];o!==void 0&&n(!!o),pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ir()||vn()||Ut()}}const Dc=Nc;var ei="@firebase/auth",ti="0.23.2";/**
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
 */class Mc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Uc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Lc(t){ze(new xe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Er(t)},h=new da(r,i,s,l);return pa(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ze(new xe("auth-internal",e=>{const n=dt(e.getProvider("auth").getImmediate());return(r=>new Mc(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(ei,ti,Uc(t)),Ae(ei,ti,"esm2017")}/**
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
 */const xc=5*60,Bc=Hn("authIdTokenMaxAge")||xc;let ni=null;const $c=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bc)return;const i=n==null?void 0:n.token;ni!==i&&(ni=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jt(t=hn()){const e=un(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fa(t,{popupRedirectResolver:Dc,persistence:[Ga,Br,Fr]}),r=Hn("authTokenSyncURL");if(r){const s=$c(r);Aa(n,s,()=>s(n.currentUser)),Sa(n,o=>s(o))}const i=Fn("auth");return i&&ga(n,`http://${i}`),n}Lc("Browser");/**
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
 */const ri="firebasestorage.googleapis.com",ii="storageBucket",Fc=2*60*1e3,Vc=10*60*1e3;/**
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
 */class j extends Ie{constructor(e,n,r=0){super(Tn(e),`Firebase Storage: ${n} (${Tn(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,j.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var G;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(G||(G={}));function Tn(t){return"storage/"+t}function kn(){const t="An unknown error occurred, please check the error payload for server response.";return new j(G.UNKNOWN,t)}function Hc(t){return new j(G.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function jc(t){return new j(G.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Gc(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new j(G.UNAUTHENTICATED,t)}function Wc(){return new j(G.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Zc(t){return new j(G.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function zc(){return new j(G.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qc(){return new j(G.CANCELED,"User canceled the upload/download.")}function Kc(t){return new j(G.INVALID_URL,"Invalid URL '"+t+"'.")}function Jc(t){return new j(G.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Xc(){return new j(G.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ii+"' property when initializing the app?")}function Yc(){return new j(G.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Qc(){return new j(G.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function el(t){return new j(G.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cn(t){return new j(G.INVALID_ARGUMENT,t)}function si(){return new j(G.APP_DELETED,"The Firebase app was deleted.")}function tl(t){return new j(G.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function pt(t,e){return new j(G.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function gt(t){throw new j(G.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class se{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=se.makeFromUrl(e,n)}catch{return new se(e,"")}if(r.path==="")return r;throw Jc(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function h(C){C.path_=decodeURIComponent(C.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${g}/${f}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},m=n===ri?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",w=new RegExp(`^https?://${m}/${i}/${v}`,"i"),I=[{regex:c,indices:l,postModify:s},{regex:_,indices:y,postModify:h},{regex:w,indices:{bucket:1,path:2},postModify:h}];for(let C=0;C<I.length;C++){const E=I[C],D=E.regex.exec(e);if(D){const T=D[E.indices.bucket];let A=D[E.indices.path];A||(A=""),r=new se(T,A),E.postModify(r);break}}if(r==null)throw Kc(e);return r}}class nl{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function rl(t,e,n){let r=1,i=null,s=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...v){h||(h=!0,e.apply(null,v))}function g(v){i=setTimeout(()=>{i=null,t(_,l())},v)}function p(){s&&clearTimeout(s)}function _(v,...w){if(h){p();return}if(v){p(),f.call(null,v,...w);return}if(l()||o){p(),f.call(null,v,...w);return}r<64&&(r*=2);let I;c===1?(c=2,I=0):I=(r+Math.random())*1e3,g(I)}let y=!1;function m(v){y||(y=!0,p(),!h&&(i!==null?(v||(c=2),clearTimeout(i),g(0)):v||(c=1)))}return g(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function il(t){t(!1)}/**
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
 */function sl(t){return t!==void 0}function ol(t){return typeof t=="object"&&!Array.isArray(t)}function Rn(t){return typeof t=="string"||t instanceof String}function oi(t){return Sn()&&t instanceof Blob}function Sn(){return typeof Blob<"u"&&!gs()}function ai(t,e,n,r){if(r<e)throw Cn(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Cn(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function An(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ci(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var He;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(He||(He={}));/**
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
 */function al(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class cl{constructor(e,n,r,i,s,o,c,l,h,f,g,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,y)=>{this.resolve_=_,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Gt(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===He.NO_ERROR,l=s.getStatus();if(!c||al(l,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===He.ABORT;r(!1,new Gt(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new Gt(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());sl(l)?s(l):s()}catch(l){o(l)}else if(c!==null){const l=kn();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(i.canceled){const l=this.appDelete_?si():qc();o(l)}else{const l=zc();o(l)}};this.canceled_?n(!1,new Gt(!1,null,!0)):this.backoffId_=rl(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&il(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gt{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ll(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ul(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hl(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dl(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fl(t,e,n,r,i,s,o=!0){const c=ci(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return hl(h,e),ll(h,n),ul(h,s),dl(h,r),new cl(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function pl(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gl(...t){const e=pl();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sn())return new Blob(t);throw new j(G.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ml(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _l(t){if(typeof atob>"u")throw el("base-64");return atob(t)}/**
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
 */const _e={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class On{constructor(e,n){this.data=e,this.contentType=n||null}}function vl(t,e){switch(t){case _e.RAW:return new On(li(e));case _e.BASE64:case _e.BASE64URL:return new On(ui(t,e));case _e.DATA_URL:return new On(wl(e),yl(e))}throw kn()}function li(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bl(t){let e;try{e=decodeURIComponent(t)}catch{throw pt(_e.DATA_URL,"Malformed data URL.")}return li(e)}function ui(t,e){switch(t){case _e.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw pt(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case _e.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw pt(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_l(e)}catch(i){throw i.message.includes("polyfill")?i:pt(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class hi{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw pt(_e.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Il(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function wl(t){const e=new hi(t);return e.base64?ui(_e.BASE64,e.rest):bl(e.rest)}function yl(t){return new hi(t).contentType}function Il(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ue{constructor(e,n){let r=0,i="";oi(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(oi(this.data_)){const r=this.data_,i=ml(r,e,n);return i===null?null:new Ue(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ue(r,!0)}}static getBlob(...e){if(Sn()){const n=e.map(r=>r instanceof Ue?r.data_:r);return new Ue(gl.apply(null,n))}else{const n=e.map(o=>Rn(o)?vl(_e.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)i[s++]=o[c]}),new Ue(i,!0)}}uploadData(){return this.data_}}/**
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
 */function di(t){let e;try{e=JSON.parse(t)}catch{return null}return ol(e)?e:null}/**
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
 */function El(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Tl(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function fi(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function kl(t,e){return e}class Y{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||kl}}let Wt=null;function Cl(t){return!Rn(t)||t.length<2?t:fi(t)}function pi(){if(Wt)return Wt;const t=[];t.push(new Y("bucket")),t.push(new Y("generation")),t.push(new Y("metageneration")),t.push(new Y("name","fullPath",!0));function e(s,o){return Cl(o)}const n=new Y("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Y("size");return i.xform=r,t.push(i),t.push(new Y("timeCreated")),t.push(new Y("updated")),t.push(new Y("md5Hash",null,!0)),t.push(new Y("cacheControl",null,!0)),t.push(new Y("contentDisposition",null,!0)),t.push(new Y("contentEncoding",null,!0)),t.push(new Y("contentLanguage",null,!0)),t.push(new Y("contentType",null,!0)),t.push(new Y("metadata","customMetadata",!0)),Wt=t,Wt}function Rl(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new se(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Sl(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Rl(r,t),r}function gi(t,e,n){const r=di(e);return r===null?null:Sl(t,r,n)}function Al(t,e,n,r){const i=di(e);if(i===null||!Rn(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=t.bucket,g=t.fullPath,p="/b/"+o(f)+"/o/"+o(g),_=An(p,n,r),y=ci({alt:"media",token:h});return _+y})[0]}function Ol(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class mi{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _i(t){if(!t)throw kn()}function Pl(t,e){function n(r,i){const s=gi(t,i,e);return _i(s!==null),s}return n}function Nl(t,e){function n(r,i){const s=gi(t,i,e);return _i(s!==null),Al(s,i,t.host,t._protocol)}return n}function vi(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Wc():i=Gc():n.getStatus()===402?i=jc(t.bucket):n.getStatus()===403?i=Zc(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Dl(t){const e=vi(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Hc(t.path)),s.serverResponse=i.serverResponse,s}return n}function Ml(t,e,n){const r=e.fullServerUrl(),i=An(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,c=new mi(i,s,Nl(t,n),o);return c.errorHandler=Dl(e),c}function Ul(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ll(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Ul(null,e)),r}function xl(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let I="";for(let C=0;C<2;C++)I=I+Math.random().toString().slice(2);return I}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=Ll(e,r,i),f=Ol(h,n),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,p=`\r
--`+l+"--",_=Ue.getBlob(g,r,p);if(_===null)throw Yc();const y={name:h.fullPath},m=An(s,t.host,t._protocol),v="POST",w=t.maxUploadRetryTime,b=new mi(m,v,Pl(t,n),w);return b.urlParams=y,b.headers=o,b.body=_.uploadData(),b.errorHandler=vi(e),b}class Bl{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=He.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=He.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=He.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw gt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $l extends Bl{initXhr(){this.xhr_.responseType="text"}}function bi(){return new $l}/**
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
 */class je{constructor(e,n){this._service=e,n instanceof se?this._location=n:this._location=se.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new je(e,n)}get root(){const e=new se(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fi(this._location.path)}get storage(){return this._service}get parent(){const e=El(this._location.path);if(e===null)return null;const n=new se(this._location.bucket,e);return new je(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tl(e)}}function Fl(t,e,n){t._throwIfRoot("uploadBytes");const r=xl(t.storage,t._location,pi(),new Ue(e,!0),n);return t.storage.makeRequestWithTokens(r,bi).then(i=>({metadata:i,ref:t}))}function Vl(t){t._throwIfRoot("getDownloadURL");const e=Ml(t.storage,t._location,pi());return t.storage.makeRequestWithTokens(e,bi).then(n=>{if(n===null)throw Qc();return n})}function Hl(t,e){const n=Tl(t._location.path,e),r=new se(t._location.bucket,n);return new je(t.storage,r)}/**
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
 */function jl(t){return/^[A-Za-z]+:\/\//.test(t)}function Gl(t,e){return new je(t,e)}function wi(t,e){if(t instanceof Pn){const n=t;if(n._bucket==null)throw Xc();const r=new je(n,n._bucket);return e!=null?wi(r,e):r}else return e!==void 0?Hl(t,e):t}function Wl(t,e){if(e&&jl(e)){if(t instanceof Pn)return Gl(t,e);throw Cn("To use ref(service, url), the first argument must be a Storage instance.")}else return wi(t,e)}function yi(t,e){const n=e==null?void 0:e[ii];return n==null?null:se.makeFromBucketSpec(n,t)}function Zl(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:fs(i,t.app.options.projectId))}class Pn{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ri,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Fc,this._maxUploadRetryTime=Vc,this._requests=new Set,i!=null?this._bucket=se.makeFromBucketSpec(i,this._host):this._bucket=yi(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=se.makeFromBucketSpec(this._url,e):this._bucket=yi(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ai("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ai("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new je(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new nl(si());{const o=fl(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ii="@firebase/storage",Ei="0.11.2";/**
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
 */const Ti="storage";function zl(t,e,n){return t=le(t),Fl(t,e,n)}function ki(t){return t=le(t),Vl(t)}function ql(t,e){return t=le(t),Wl(t,e)}function Kl(t=hn(),e){t=le(t);const r=un(t,Ti).getImmediate({identifier:e}),i=hs("storage");return i&&Jl(r,...i),r}function Jl(t,e,n,r={}){Zl(t,e,n,r)}function Xl(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Pn(n,r,i,e,qe)}function Yl(){ze(new xe(Ti,Xl,"PUBLIC").setMultipleInstances(!0)),Ae(Ii,Ei,""),Ae(Ii,Ei,"esm2017")}Yl();function Ql(t){let e,n,r=[{xmlns:"http://www.w3.org/2000/svg"},{height:"48"},{viewBox:"0 96 960 960"},{width:"48"},t[0]],i={};for(let s=0;s<r.length;s+=1)i=U(i,r[s]);return{c(){e=d("svg"),n=d("path"),a(n,"d","M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"),z(e,i)},m(s,o){x(s,e,o),u(e,n)},p(s,[o]){z(e,i=we(r,[{xmlns:"http://www.w3.org/2000/svg"},{height:"48"},{viewBox:"0 96 960 960"},{width:"48"},o&1&&s[0]]))},i:S,o:S,d(s){s&&H(e)}}}function eu(t,e,n){return t.$$set=r=>{n(0,e=U(U({},e),Z(r)))},e=Z(e),[e]}class Ci extends ye{constructor(e){super(),ie(this,e,eu,Ql,re,{})}}function tu(t){let e,n,r,i=[{width:"800"},{height:"800"},{viewBox:"0 0 24 24"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],s={};for(let o=0;o<i.length;o+=1)s=U(s,i[o]);return{c(){e=d("svg"),n=d("path"),r=d("path"),a(n,"d","M11 3h2a1 1 0 0 1 1 1v.569c0 .428.287.8.682.963.396.164.856.102 1.158-.2l.403-.403a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 0 1.414l-.402.403c-.303.302-.365.762-.201 1.158.164.395.535.682.963.682H20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.569c-.428 0-.8.287-.963.682-.164.396-.102.856.2 1.158l.403.403a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414 0l-.403-.402c-.302-.303-.762-.365-1.158-.201-.395.164-.682.535-.682.963V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-.569c0-.428-.287-.8-.682-.963-.396-.164-.856-.102-1.158.2l-.403.403a1 1 0 0 1-1.414 0L4.93 17.657a1 1 0 0 1 0-1.414l.402-.403c.303-.302.365-.762.201-1.158-.164-.395-.535-.682-.963-.682H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.569c.428 0 .8-.287.963-.682.164-.396.102-.856-.2-1.158l-.403-.403a1 1 0 0 1 0-1.414L6.343 4.93a1 1 0 0 1 1.414 0l.403.402c.302.303.762.365 1.158.201.395-.164.682-.535.682-.963V4a1 1 0 0 1 1-1Z"),a(n,"stroke","#000"),a(n,"stroke-width","1.5"),a(r,"d","M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"),a(r,"stroke","#000"),a(r,"stroke-width","1.5"),z(e,s)},m(o,c){x(o,e,c),u(e,n),u(e,r)},p(o,[c]){z(e,s=we(i,[{width:"800"},{height:"800"},{viewBox:"0 0 24 24"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},c&1&&o[0]]))},i:S,o:S,d(o){o&&H(e)}}}function nu(t,e,n){return t.$$set=r=>{n(0,e=U(U({},e),Z(r)))},e=Z(e),[e]}class ru extends ye{constructor(e){super(),ie(this,e,nu,tu,re,{})}}function iu(t){let e,n,r=[{width:"800"},{height:"800"},{viewBox:"0 0 24 24"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],i={};for(let s=0;s<r.length;s+=1)i=U(i,r[s]);return{c(){e=d("svg"),n=d("path"),a(n,"d","m12 15 3-3m0 0-3-3m3 3H4m5-4.751V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C10.52 4 11.08 4 12.2 4h4.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2.002 2.002 0 0 1-.875.874c-.427.218-.986.218-2.104.218h-4.606c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C9 18.48 9 17.92 9 16.8v-.05"),a(n,"stroke","#000"),a(n,"stroke-width","2"),a(n,"stroke-linecap","round"),a(n,"stroke-linejoin","round"),z(e,i)},m(s,o){x(s,e,o),u(e,n)},p(s,[o]){z(e,i=we(r,[{width:"800"},{height:"800"},{viewBox:"0 0 24 24"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},o&1&&s[0]]))},i:S,o:S,d(s){s&&H(e)}}}function su(t,e,n){return t.$$set=r=>{n(0,e=U(U({},e),Z(r)))},e=Z(e),[e]}class ou extends ye{constructor(e){super(),ie(this,e,su,iu,re,{})}}function au(t){let e,n;return{c(){e=P("a"),n=P("button"),n.textContent="Log in",a(e,"href",`/login?redirect=${window.location.href}`)},m(r,i){x(r,e,i),u(e,n)},p:S,d(r){r&&H(e)}}}function cu(t){let e,n,r;return{c(){e=P("button"),e.textContent="Log in"},m(i,s){x(i,e,s),n||(r=be(e,"click",t[1]),n=!0)},p:S,d(i){i&&H(e),n=!1,r()}}}function lu(t){let e;function n(s,o){return s[0]==="true"?cu:au}let r=n(t),i=r(t);return{c(){i.c(),e=Mn(),this.c=S},m(s,o){i.m(s,o),x(s,e,o)},p(s,[o]){r===(r=n(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:S,o:S,d(s){i.d(s),s&&H(e)}}}function uu(t,e,n){let{debug:r}=e;const i=c=>{c&&localStorage.setItem("accessToken",c)},s=async c=>{const l=await fetch("https://api.mcsynergy.nl/auth/check-new-user",{method:"POST",headers:{authorization:c}});l.ok||alert("Something went wrong. Please try again. (Error: "+await l.text()+")"),console.log("Response OK from auth server")},o=()=>{const c=new Ye("microsoft.com");c.setCustomParameters({prompt:"select_account"});const l=hn(),h=jt(l);h.setPersistence(Br),Ka(h,c).then(f=>{var g,p;if(i((g=Ye.credentialFromResult(f))==null?void 0:g.accessToken),(p=Ra(f))!=null&&p.isNewUser)return f.user.getIdToken()}).then(async f=>{f&&await s(f)}).catch(f=>{alert("Something went wrong. Please try again. (Error: "+f.code+")")})};return t.$$set=c=>{"debug"in c&&n(0,r=c.debug)},[r,o]}class hu extends rt{constructor(e){super(),this.shadowRoot.innerHTML="<style>button{background-color:transparent;color:white;border-radius:12px;height:2rem;width:6rem;font-size:1rem;border:2px solid #206191;text-align:center;text-decoration:none;display:inline-block;cursor:pointer}button:hover{background-color:#206191}</style>",ie(this,{target:this.shadowRoot,props:It(this.attributes),customElement:!0},uu,lu,re,{debug:0},null),e&&(e.target&&x(e.target,this,e.anchor),e.props&&(this.$set(e.props),de()))}static get observedAttributes(){return["debug"]}get debug(){return this.$$.ctx[0]}set debug(e){this.$$set({debug:e}),de()}}customElements.define("mcs-loginbutton",hu);function du(t){let e;return{c(){e=P("mcs-loginbutton"),wt(e,"debug",t[0])},m(n,r){x(n,e,r)},p(n,r){r&1&&wt(e,"debug",n[0])},d(n){n&&H(e)}}}function fu(t){let e,n;return{c(){e=P("p"),n=zt(t[2])},m(r,i){x(r,e,i),u(e,n)},p(r,i){i&4&&Oi(n,r[2])},d(r){r&&H(e)}}}function pu(t){let e,n,r;return n=new Ci({props:{fill:"#2bc0d3"}}),{c(){e=P("a"),fe(n.$$.fragment),a(e,"href","/login")},m(i,s){x(i,e,s),ce(n,e,null),r=!0},p:S,i(i){r||(q(n.$$.fragment,i),r=!0)},o(i){K(n.$$.fragment,i),r=!1},d(i){i&&H(e),ae(n)}}}function gu(t){let e,n,r,i;const s=[_u,mu],o=[];function c(l,h){return l[1]!=null?0:1}return e=c(t),n=o[e]=s[e](t),{c(){n.c(),r=Mn()},m(l,h){o[e].m(l,h),x(l,r,h),i=!0},p(l,h){let f=e;e=c(l),e===f?o[e].p(l,h):(Xt(),K(o[f],1,1,()=>{o[f]=null}),Yt(),n=o[e],n?n.p(l,h):(n=o[e]=s[e](l),n.c()),q(n,1),n.m(r.parentNode,r))},i(l){i||(q(n),i=!0)},o(l){K(n),i=!1},d(l){o[e].d(l),l&&H(r)}}}function mu(t){let e,n;return e=new Ci({props:{fill:"#2bc0d3"}}),{c(){fe(e.$$.fragment)},m(r,i){ce(e,r,i),n=!0},p:S,i(r){n||(q(e.$$.fragment,r),n=!0)},o(r){K(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function _u(t){let e,n;return{c(){e=P("img"),vt(e.src,n=t[1])||a(e,"src",n),R(e,"border-radius","50%"),R(e,"width","3rem"),a(e,"alt","profile-picture")},m(r,i){x(r,e,i)},p(r,i){i&2&&!vt(e.src,n=r[1])&&a(e,"src",n)},i:S,o:S,d(r){r&&H(e)}}}function Ri(t){let e,n,r,i,s,o,c,l,h,f,g,p,_,y;return r=new ru({props:{height:"40",width:"40",viewBox:"-2.5 0 25 24"}}),l=new ou({props:{height:"40",width:"40"}}),{c(){e=P("div"),n=P("a"),fe(r.$$.fragment),i=oe(),s=P("span"),s.textContent="Settings",o=oe(),c=P("div"),fe(l.$$.fragment),h=oe(),f=P("span"),f.textContent="Log out",a(s,"class","dropdown-button-text"),a(n,"class","dropdown-button"),a(n,"href","/settings"),a(f,"class","dropdown-button-text"),a(c,"class","dropdown-button"),a(e,"style",g=`display: ${t[4]?void 0:"none"};`),a(e,"class","dropdown")},m(m,v){x(m,e,v),u(e,n),ce(r,n,null),u(n,i),u(n,s),u(e,o),u(e,c),ce(l,c,null),u(c,h),u(c,f),p=!0,_||(y=[be(c,"click",t[6]),be(c,"keydown",t[7]),be(e,"click",bt(bu)),be(e,"keydown",bt(wu))],_=!0)},p(m,v){(!p||v&16&&g!==(g=`display: ${m[4]?void 0:"none"};`))&&a(e,"style",g)},i(m){p||(q(r.$$.fragment,m),q(l.$$.fragment,m),p=!0)},o(m){K(r.$$.fragment,m),K(l.$$.fragment,m),p=!1},d(m){m&&H(e),ae(r),ae(l),_=!1,ve(y)}}}function vu(t){let e,n,r,i,s,o,c,l,h;function f(w,b){return w[2]!=""?fu:du}let g=f(t),p=g(t);const _=[gu,pu],y=[];function m(w,b){return w[3]?0:1}i=m(t),s=y[i]=_[i](t);let v=t[3]&&Ri(t);return{c(){e=P("div"),p.c(),n=oe(),r=P("div"),s.c(),o=oe(),v&&v.c(),this.c=S,a(r,"class","profile-picture"),a(e,"class","user-info")},m(w,b){x(w,e,b),p.m(e,null),u(e,n),u(e,r),y[i].m(r,null),u(e,o),v&&v.m(e,null),c=!0,l||(h=[be(r,"click",bt(t[5])),be(r,"keydown",bt(t[5]))],l=!0)},p(w,[b]){g===(g=f(w))&&p?p.p(w,b):(p.d(1),p=g(w),p&&(p.c(),p.m(e,n)));let I=i;i=m(w),i===I?y[i].p(w,b):(Xt(),K(y[I],1,1,()=>{y[I]=null}),Yt(),s=y[i],s?s.p(w,b):(s=y[i]=_[i](w),s.c()),q(s,1),s.m(r,null)),w[3]?v?(v.p(w,b),b&8&&q(v,1)):(v=Ri(w),v.c(),q(v,1),v.m(e,null)):v&&(Xt(),K(v,1,1,()=>{v=null}),Yt())},i(w){c||(q(s),q(v),c=!0)},o(w){K(s),K(v),c=!1},d(w){w&&H(e),p.d(),y[i].d(),v&&v.d(),l=!1,ve(h)}}}const bu=()=>{},wu=()=>{};function yu(t,e,n){let{debug:r}=e,i,s="",o=!1,c=!1;function l(){n(4,c=!0),document.addEventListener("click",h)}function h(){n(4,c=!1),document.removeEventListener("click",h)}Ni(()=>{const _=Xn({apiKey:"AIzaSyBlfZjJyhjcgyPfxaqkZHSR5SciFBWC5IY",authDomain:"mcsynergy-55878.firebaseapp.com",projectId:"mcsynergy-55878",storageBucket:"mcsynergy-55878.appspot.com",messagingSenderId:"822930182678",appId:"1:822930182678:web:23e8f0b3e044ae06cb9b37",measurementId:"G-3BK4KLMGTJ"}),y=jt(_),m=async v=>{const w=localStorage.getItem("accessToken");try{const b=await fetch("https://graph.microsoft.com/v1.0/me/photo/$value",{headers:{Authorization:`Bearer ${w}`}});if(b.status!==200)throw b.statusText;const I=await b.blob();await zl(v,I)}catch(b){console.error(b)}};y.onAuthStateChanged(async v=>{if(v){n(3,o=!0),n(2,s=v.displayName);const w=Kl(_),b=ql(w,`user/${v.uid}/profile.png`);try{n(1,i=await ki(b))}catch(I){I.code==="storage/object-not-found"&&await m(b),n(1,i=await ki(b))}}else n(3,o=!1),n(1,i=void 0),n(2,s="")})});const f=()=>Ur(jt()),g=()=>Ur(jt());return t.$$set=p=>{"debug"in p&&n(0,r=p.debug)},[r,i,s,o,c,l,f,g]}class Iu extends rt{constructor(e){super(),this.shadowRoot.innerHTML="<style>.user-info{display:flex;align-items:center}.profile-picture{margin-left:1rem;margin-right:0.5rem}p{color:white;font-size:1.5rem;font-family:Calibri}.dropdown{position:absolute;top:3.5rem;right:4px;width:15rem;height:6.5rem;background-color:#206191;border-radius:16px;transition:200ms}.dropdown-button{width:max-content;height:3rem;display:flex;align-items:center;margin-left:0.25rem;text-decoration:none;font-size:1.5rem;font-family:Calibri;transition:100ms;cursor:pointer;color:white}.dropdown-button:hover{transform:scale(1.05)}.dropdown-button-text{margin-left:12px}</style>",ie(this,{target:this.shadowRoot,props:It(this.attributes),customElement:!0},yu,vu,re,{debug:0},null),e&&(e.target&&x(e.target,this,e.anchor),e.props&&(this.$set(e.props),de()))}static get observedAttributes(){return["debug"]}get debug(){return this.$$.ctx[0]}set debug(e){this.$$set({debug:e}),de()}}customElements.define("mcs-userinfo",Iu);function Eu(t){let e,n,r,i,s,o,c,l,h,f,g;return{c(){e=P("header"),n=P("div"),r=P("div"),i=P("mcs-portal"),s=oe(),o=P("a"),c=P("img"),h=oe(),f=P("div"),g=P("mcs-userinfo"),this.c=S,vt(c.src,l=t[0])||a(c,"src",l),a(c,"alt","Logo"),a(c,"class","logo"),a(o,"href",t[2]),a(o,"class","h-max ml-1"),a(r,"class","flex items-center w-80 h-full"),wt(g,"debug",t[1]),a(f,"class","flex items-center w-80 justify-end h-full"),a(n,"class","bg-MCS-DarkerBlue h-14 flex items-center justify-between")},m(p,_){x(p,e,_),u(e,n),u(n,r),u(r,i),u(r,s),u(r,o),u(o,c),u(n,h),u(n,f),u(f,g)},p(p,[_]){_&1&&!vt(c.src,l=p[0])&&a(c,"src",l),_&4&&a(o,"href",p[2]),_&2&&wt(g,"debug",p[1])},i:S,o:S,d(p){p&&H(e)}}}function Tu(t,e,n){let{logosrc:r}=e,{debug:i}=e,{redirect:s="/"}=e;return t.$$set=o=>{"logosrc"in o&&n(0,r=o.logosrc),"debug"in o&&n(1,i=o.debug),"redirect"in o&&n(2,s=o.redirect)},[r,i,s]}class Si extends rt{constructor(e){super(),this.shadowRoot.innerHTML="<style>.bg-MCS-DarkerBlue{--tw-bg-opacity:1;background-color:rgb(13 29 48 / var(--tw-bg-opacity))}.h-14{height:3.5rem}.flex{display:flex}.items-center{align-items:center}.justify-between{justify-content:space-between}.w-80{width:20rem}.h-full{height:100%}.h-max{height:-moz-max-content;height:max-content}.ml-1{margin-left:0.25rem}.logo{height:2rem;margin-top:0.25rem;z-index:1001}.justify-end{justify-content:flex-end}</style>",ie(this,{target:this.shadowRoot,props:It(this.attributes),customElement:!0},Tu,Eu,re,{logosrc:0,debug:1,redirect:2},null),e&&(e.target&&x(e.target,this,e.anchor),e.props&&(this.$set(e.props),de()))}static get observedAttributes(){return["logosrc","debug","redirect"]}get logosrc(){return this.$$.ctx[0]}set logosrc(e){this.$$set({logosrc:e}),de()}get debug(){return this.$$.ctx[1]}set debug(e){this.$$set({debug:e}),de()}get redirect(){return this.$$.ctx[2]}set redirect(e){this.$$set({redirect:e}),de()}}customElements.define("mcs-navbar",Si),Ge.Navbar=Si,Object.defineProperty(Ge,Symbol.toStringTag,{value:"Module"})});
