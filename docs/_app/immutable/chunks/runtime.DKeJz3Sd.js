var Rt=Array.isArray,At=Array.from,St=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,Dt=Object.prototype,kt=Array.prototype,Ot=Object.getPrototypeOf;const It=()=>{};function Gn(n){for(var t=0;t<n.length;t++)n[t]()}const w=2,hn=4,$=8,en=16,m=32,Z=64,nn=128,k=256,B=512,E=1024,S=2048,W=4096,N=8192,C=16384,Kn=32768,pn=65536,Nt=1<<17,$n=1<<19,dn=1<<20,Pt=Symbol("$state"),Ct=Symbol("legacy props");function En(n){return n===this.v}function Zn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function wn(n){return!Zn(n,this.v)}function Wn(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function zn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Jn(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Qn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ft(){throw new Error("https://svelte.dev/e/hydration_failed")}function qt(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function bt(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Lt(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function nt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let z=!1;function Yt(){z=!0}const Mt=1,Ut=2,Ht=4,Bt=8,jt=16,Vt=1,Gt=2,tt="[",rt="[!",et="]",yn={},Kt=Symbol();function ln(n,t){var r={f:0,v:n,reactions:null,equals:En,version:0};return r}function $t(n){return lt(ln(n))}function Zt(n,t=!1){var e;const r=ln(n);return t||(r.equals=wn),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function lt(n){return o!==null&&o.f&w&&(y===null?dt([n]):y.push(n)),n}function Wt(n,t){return o!==null&&an()&&o.f&(w|en)&&(y===null||!y.includes(n))&&nt(),st(n,t)}function st(n,t){return n.equals(t)||(n.v,n.v=t,n.version=Mn(),mn(n,S),an()&&a!==null&&a.f&E&&!(a.f&m)&&(p!==null&&p.includes(n)?(g(a,S),X(a)):x===null?Et([n]):x.push(n))),t}function mn(n,t){var r=n.reactions;if(r!==null)for(var e=an(),l=r.length,u=0;u<l;u++){var s=r[u],i=s.f;i&S||!e&&s===a||(g(s,t),i&(E|k)&&(i&w?mn(s,W):X(s)))}}function Tn(n){console.warn("https://svelte.dev/e/hydration_mismatch")}let P=!1;function zt(n){P=n}let T;function j(n){if(n===null)throw Tn(),yn;return T=n}function Jt(){return j(F(T))}function Qt(n){if(P){if(F(T)!==null)throw Tn(),yn;T=n}}function Xt(){for(var n=0,t=T;;){if(t.nodeType===8){var r=t.data;if(r===et){if(n===0)return t;n-=1}else(r===tt||r===rt)&&(n+=1)}var e=F(t);t.remove(),t=e}}var _n,gn,xn;function nr(){if(_n===void 0){_n=window;var n=Element.prototype,t=Node.prototype;gn=fn(t,"firstChild").get,xn=fn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Rn(n=""){return document.createTextNode(n)}function tn(n){return gn.call(n)}function F(n){return xn.call(n)}function tr(n,t){if(!P)return tn(n);var r=tn(T);return r===null&&(r=T.appendChild(Rn())),j(r),r}function rr(n,t){if(!P){var r=tn(n);return r instanceof Comment&&r.data===""?F(r):r}return T}function er(n,t=1,r=!1){let e=P?T:n;for(var l;t--;)l=e,e=F(e);if(!P)return e;var u=e==null?void 0:e.nodeType;if(r&&u!==3){var s=Rn();return e===null?l==null||l.after(s):e.before(s),j(s),s}return j(e),e}function lr(n){n.textContent=""}function ut(n){var t=w|S;a===null?t|=k:a.f|=dn;var r=o!==null&&o.f&w?o:null;const e={children:null,ctx:f,deps:null,equals:En,f:t,fn:n,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function sr(n){const t=ut(n);return t.equals=wn,t}function An(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&w?sn(e):D(e)}}}function at(n){for(var t=n.parent;t!==null;){if(!(t.f&w))return t;t=t.parent}return null}function Sn(n){var t,r=a;K(at(n));try{An(n),t=Un(n)}finally{K(r)}return t}function Dn(n){var t=Sn(n),r=(A||n.f&k)&&n.deps!==null?W:E;g(n,r),n.equals(t)||(n.v=t,n.version=Mn())}function sn(n){An(n),L(n,0),g(n,C),n.v=n.children=n.deps=n.ctx=n.reactions=null}function kn(n){a===null&&o===null&&Jn(),o!==null&&o.f&k&&zn(),un&&Wn()}function ot(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function Y(n,t,r,e=!0){var l=(n&Z)!==0,u=a,s={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|S,first:null,fn:t,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{cn(!0),Q(s),s.f|=Kn}catch(c){throw D(s),c}finally{cn(i)}}else t!==null&&X(s);var _=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&dn)===0;if(!_&&!l&&e&&(u!==null&&ot(s,u),o!==null&&o.f&w)){var h=o;(h.children??(h.children=[])).push(s)}return s}function ur(n){kn();var t=a!==null&&(a.f&m)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:a,reaction:o})}else{var e=On(n);return e}}function ar(n){return kn(),it(n)}function or(n){const t=Y(Z,n,!0);return(r={})=>new Promise(e=>{r.outro?ct(t,()=>{D(t),e(void 0)}):(D(t),e(void 0))})}function On(n){return Y(hn,n,!1)}function it(n){return Y($,n,!0)}function ir(n){return ft(n)}function ft(n,t=0){return Y($|en|t,n,!0)}function fr(n,t=!0){return Y($|m,n,!0,t)}function In(n){var t=n.teardown;if(t!==null){const r=un,e=o;vn(!0),G(null);try{t.call(null)}finally{vn(r),G(e)}}}function Nn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function Pn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;D(r,t),r=e}}function _t(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||D(t),t=r}}function D(n,t=!0){var r=!1;if((t||n.f&$n)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var u=e===l?null:F(e);e.remove(),e=u}r=!0}Pn(n,t&&!r),Nn(n),L(n,0),g(n,C);var s=n.transitions;if(s!==null)for(const _ of s)_.stop();In(n);var i=n.parent;i!==null&&i.first!==null&&Cn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Cn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function ct(n,t){var r=[];Fn(n,r,!0),vt(r,()=>{D(n),t&&t()})}function vt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function Fn(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var e=n.first;e!==null;){var l=e.next,u=(e.f&pn)!==0||(e.f&m)!==0;Fn(e,t,u?r:!1),e=l}}}function _r(n){qn(n,!0)}function qn(n,t){if(n.f&N){M(n)&&Q(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&pn)!==0||(r.f&m)!==0;qn(r,l?t:!1),r=e}if(n.transitions!==null)for(const u of n.transitions)(u.is_global||t)&&u.in()}}let V=!1,rn=[];function bn(){V=!1;const n=rn.slice();rn=[],Gn(n)}function cr(n){V||(V=!0,queueMicrotask(bn)),rn.push(n)}function ht(){V&&bn()}const Ln=0,pt=1;let U=!1,H=Ln,q=!1,b=null,O=!1,un=!1;function cn(n){O=n}function vn(n){un=n}let R=[],I=0;let o=null;function G(n){o=n}let a=null;function K(n){a=n}let y=null;function dt(n){y=n}let p=null,d=0,x=null;function Et(n){x=n}let Yn=1,A=!1,f=null;function Mn(){return++Yn}function an(){return!z||f!==null&&f.l===null}function M(n){var h;var t=n.f;if(t&S)return!0;if(t&W){var r=n.deps,e=(t&k)!==0;if(r!==null){var l,u,s=(t&B)!==0,i=e&&a!==null&&!A,_=r.length;if(s||i){for(l=0;l<_;l++)u=r[l],(s||!((h=u==null?void 0:u.reactions)!=null&&h.includes(n)))&&(u.reactions??(u.reactions=[])).push(n);s&&(n.f^=B)}for(l=0;l<_;l++)if(u=r[l],M(u)&&Dn(u),u.version>n.version)return!0}(!e||a!==null&&!A)&&g(n,E)}return!1}function wt(n,t){for(var r=t;r!==null;){if(r.f&nn)try{r.fn(n);return}catch{r.f^=nn}r=r.parent}throw U=!1,n}function yt(n){return(n.f&C)===0&&(n.parent===null||(n.parent.f&nn)===0)}function J(n,t,r,e){if(U){if(r===null&&(U=!1),yt(t))throw n;return}r!==null&&(U=!0);{wt(n,t);return}}function Un(n){var on;var t=p,r=d,e=x,l=o,u=A,s=y,i=f,_=n.f;p=null,d=0,x=null,o=_&(m|Z)?null:n,A=!O&&(_&k)!==0,y=null,f=n.ctx;try{var h=(0,n.fn)(),c=n.deps;if(p!==null){var v;if(L(n,d),c!==null&&d>0)for(c.length=d+p.length,v=0;v<p.length;v++)c[d+v]=p[v];else n.deps=c=p;if(!A)for(v=d;v<c.length;v++)((on=c[v]).reactions??(on.reactions=[])).push(n)}else c!==null&&d<c.length&&(L(n,d),c.length=d);return h}finally{p=t,d=r,x=e,o=l,A=u,y=s,f=i}}function mt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&w&&(p===null||!p.includes(t))&&(g(t,W),t.f&(k|B)||(t.f^=B),L(t,0))}function L(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)mt(n,r[e])}function Q(n){var t=n.f;if(!(t&C)){g(n,E);var r=a,e=f;a=n;try{t&en?_t(n):Pn(n),Nn(n),In(n);var l=Un(n);n.teardown=typeof l=="function"?l:null,n.version=Yn;var u=n.deps,s}catch(i){J(i,n,r,e||n.ctx)}finally{a=r}}}function Hn(){if(I>1e3){I=0;try{Qn()}catch(n){if(b!==null)J(n,b,null);else throw n}}I++}function Bn(n){var t=n.length;if(t!==0){Hn();var r=O;O=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&E||(l.f^=E);var u=[];jn(l,u),Tt(u)}}finally{O=r}}}function Tt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(C|N)))try{M(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Cn(e):e.fn=null))}catch(l){J(l,e,null,e.ctx)}}}function gt(){if(q=!1,I>1001)return;const n=R;R=[],Bn(n),q||(I=0,b=null)}function X(n){H===Ln&&(q||(q=!0,queueMicrotask(gt))),b=n;for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|m)){if(!(r&E))return;t.f^=E}}R.push(t)}function jn(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,u=(l&m)!==0,s=u&&(l&E)!==0,i=r.next;if(!s&&!(l&N))if(l&$){if(u)r.f^=E;else try{M(r)&&Q(r)}catch(v){J(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&hn&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],t.push(_),jn(_,t)}function Vn(n){var t=H,r=R;try{Hn();const l=[];H=pt,R=l,q=!1,Bn(r);var e=n==null?void 0:n();return ht(),(R.length>0||l.length>0)&&Vn(),I=0,b=null,e}finally{H=t,R=r}}async function vr(){await Promise.resolve(),Vn()}function hr(n){var c;var t=n.f,r=(t&w)!==0;if(r&&t&C){var e=Sn(n);return sn(n),e}if(o!==null){y!==null&&y.includes(n)&&Xn();var l=o.deps;p===null&&l!==null&&l[d]===n?d++:p===null?p=[n]:p.push(n),x!==null&&a!==null&&a.f&E&&!(a.f&m)&&x.includes(n)&&(g(a,S),X(a))}else if(r&&n.deps===null)for(var u=n,s=u.parent,i=u;s!==null;)if(s.f&w){var _=s;i=_,s=_.parent}else{var h=s;(c=h.deriveds)!=null&&c.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(u=n,M(u)&&Dn(u)),n.v}function pr(n){const t=o;try{return o=null,n()}finally{o=t}}const xt=-7169;function g(n,t){n.f=n.f&xt|t}function dr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(f.l={s:null,u:null,r1:[],r2:ln(!1)})}function Er(n){const t=f;if(t!==null){const s=t.e;if(s!==null){var r=a,e=o;t.e=null;try{for(var l=0;l<s.length;l++){var u=s[l];K(u.effect),G(u.reaction),On(u.fn)}}finally{K(r),G(e)}}f=t.p,t.m=!0}return{}}export{Nt as $,T as A,et as B,Tn as C,Ft as D,lr as E,At as F,or as G,tt as H,Rn as I,fr as J,dr as K,P as L,Er as M,f as N,ft as O,pn as P,rt as Q,Xt as R,Pt as S,_r as T,Kt as U,ct as V,On as W,it as X,pr as Y,cr as Z,qt as _,$t as a,Ht as a0,wn as a1,m as a2,Z as a3,Mt as a4,z as a5,Ut as a6,Bt as a7,Ct as a8,ut as a9,sr as aa,jt as ab,Zt as ac,Vn as ad,ar as ae,ur as af,rr as ag,er as ah,tr as ai,Qt as aj,ir as ak,D as al,Yt as am,$n as an,Vt as ao,Gt as ap,Wt as b,kt as c,ln as d,bt as e,fn as f,hr as g,a as h,Lt as i,Ot as j,Rt as k,St as l,G as m,It as n,Dt as o,K as p,o as q,nr as r,Zn as s,vr as t,tn as u,F as v,yn as w,zt as x,j as y,Jt as z};
