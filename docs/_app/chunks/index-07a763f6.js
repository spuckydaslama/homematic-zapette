function D(){}function X(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(J)}function Y(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return D;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(tt(e,n))}function xt(t,e,n,i){if(t){const c=K(t,e,n,i);return t[0](c)}}function K(t,e,n,i){return t[1]&&i?X(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const u=[],r=Math.max(e.dirty.length,c.length);for(let l=0;l<r;l+=1)u[l]=e.dirty[l]|c[l];return u}return e.dirty|c}return e.dirty}function $t(t,e,n,i,c,u){if(c){const r=K(e,n,i,u);t.p(r,c)}}function kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let N=!1;function et(){N=!0}function nt(){N=!1}function it(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,f=(c>0&&e[n[c]].claim_order<=o?c+1:it(1,c,d=>e[n[d]].claim_order,o))-1;i[s]=n[f]+1;const _=f+1;n[_]=s,c=Math.max(_,c)}const u=[],r=[];let l=e.length-1;for(let s=n[c]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);l>=s;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);u.reverse(),r.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<r.length;s++){for(;o<u.length&&r[s].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(r[s],f)}}function rt(t,e){if(N){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){N&&!n?rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function Et(){return q(" ")}function St(){return q("")}function jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Nt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function ut(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,c=!1){ut(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,c||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,c?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function at(t,e,n,i){return Q(t,c=>c.nodeName===e,c=>{const u=[];for(let r=0;r<c.attributes.length;r++){const l=c.attributes[r];n[l.name]||u.push(l.name)}u.forEach(r=>c.removeAttribute(r))},()=>i(e))}function At(t,e,n){return at(t,e,n,lt)}function ft(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Ct(t){return ft(t," ")}function Mt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e){t.value=e==null?"":e}function Pt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Tt(t,e,n){t.classList[n?"add":"remove"](e)}function dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,i,e),c}let w;function x(t){w=t}function A(){if(!w)throw new Error("Function called outside component initialization");return w}function Bt(t){A().$$.on_mount.push(t)}function Ot(t){A().$$.after_update.push(t)}function Dt(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const u=dt(e,n,{cancelable:i});return c.slice().forEach(r=>{r.call(t,u)}),!u.defaultPrevented}return!0}}function qt(t,e){return A().$$.context.set(t,e),e}function zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],I=[],S=[],G=[],R=Promise.resolve();let B=!1;function U(){B||(B=!0,R.then(W))}function Ft(){return U(),R}function O(t){S.push(t)}const T=new Set;let E=0;function W(){const t=w;do{for(;E<b.length;){const e=b[E];E++,x(e),_t(e.$$)}for(x(null),b.length=0,E=0;I.length;)I.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];T.has(n)||(T.add(n),n())}S.length=0}while(b.length);for(;G.length;)G.pop()();B=!1,T.clear(),x(t)}function _t(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const j=new Set;let g;function Ht(){g={r:0,c:[],p:g}}function It(){g.r||$(g.c),g=g.p}function V(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ht(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Gt(t,e){ht(t,1,1,()=>{e.delete(t.key)})}function Jt(t,e,n,i,c,u,r,l,s,o,f,_){let d=t.length,m=u.length,h=d;const C={};for(;h--;)C[t[h].key]=h;const k=[],M=new Map,L=new Map;for(h=m;h--;){const a=_(c,u,h),p=n(a);let y=r.get(p);y?i&&y.p(a,e):(y=o(p,a),y.c()),M.set(p,k[h]=y),p in C&&L.set(p,Math.abs(h-C[p]))}const z=new Set,F=new Set;function P(a){V(a,1),a.m(l,f),r.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=k[m-1],p=t[d-1],y=a.key,v=p.key;a===p?(f=a.first,d--,m--):M.has(v)?!r.has(y)||z.has(y)?P(a):F.has(v)?d--:L.get(y)>L.get(v)?(F.add(y),P(a)):(z.add(v),d--):(s(p,r),d--)}for(;d--;){const a=t[d];M.has(a.key)||s(a,r)}for(;m;)P(k[m-1]);return k}function Kt(t,e){const n={},i={},c={$$scope:1};let u=t.length;for(;u--;){const r=t[u],l=e[u];if(l){for(const s in r)s in l||(i[s]=1);for(const s in l)c[s]||(n[s]=l[s],c[s]=1);t[u]=l}else for(const s in r)c[s]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Qt(t){return typeof t=="object"&&t!==null?t:{}}function Rt(t){t&&t.c()}function Ut(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:c,on_mount:u,on_destroy:r,after_update:l}=t.$$;c&&c.m(e,n),i||O(()=>{const s=u.map(J).filter(Y);r?r.push(...s):$(s),t.$$.on_mount=[]}),l.forEach(O)}function pt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(b.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,c,u,r,l=[-1]){const s=w;x(t);const o=t.$$={fragment:null,ctx:null,props:u,update:D,not_equal:c,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};r&&r(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return o.ctx&&c(o.ctx[_],o.ctx[_]=h)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](h),f&&yt(t,_)),d}):[],o.update(),f=!0,$(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){et();const _=ot(e.target);o.fragment&&o.fragment.l(_),_.forEach(st)}else o.fragment&&o.fragment.c();e.intro&&V(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),nt(),W()}x(s)}class Vt{$destroy(){pt(this,1),this.$destroy=D}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Qt as A,pt as B,X as C,Ft as D,D as E,xt as F,$t as G,kt as H,wt as I,rt as J,Tt as K,jt as L,$ as M,zt as N,Jt as O,Dt as P,Gt as Q,Y as R,Vt as S,bt as T,Lt as U,ot as a,Nt as b,At as c,st as d,lt as e,Pt as f,vt as g,ft as h,Wt as i,Mt as j,Et as k,St as l,Ct as m,Ht as n,ht as o,It as p,V as q,qt as r,gt as s,q as t,Ot as u,Bt as v,Rt as w,Ut as x,mt as y,Kt as z};