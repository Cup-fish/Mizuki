import{o as ii,a as ri}from"./index-client.D1ydn2p8.js";import{i as ni}from"./lifecycle.DDL_SHqP.js";import{aq as li,ah as si,aT as oi,aU as ci,aV as He,u as Xe,aW as ui,aX as di,S as Ke,aY as wt,al as Ge,aZ as Ze,$ as ce,a_ as vi,a2 as Be,t as kt,g as t,a as lt,p as fi,b as mi,a$ as We,f as st,s,m as E,d as u,b0 as Pt,c as l,r as n,a7 as pi}from"./template.CmHo6nw-.js";import{a as hi,s as H}from"./render.CyR_f8DE.js";import{i as X}from"./if.CN_wbk-S.js";import{e as bi,i as gi}from"./each.BloWTZO9.js";import{s as S,a as $,d as Oe}from"./props.BAXUL5JE.js";import{e as c}from"./utils.BTR4ewxE.js";import{s as Ye}from"./event-modifiers.gvea_hMH.js";import{I as m}from"./Icon.DUIqMlmW.js";import{m as Vt}from"./config.HqlAeFNK.js";import{I as M}from"./zh_TW.B395Vq90.js";import{i as C}from"./translation.BK4-uZPo.js";const yi=()=>performance.now(),K={tick:r=>requestAnimationFrame(r),now:()=>yi(),tasks:new Set};function Je(){const r=K.now();K.tasks.forEach(i=>{i.c(r)||(K.tasks.delete(i),i.f())}),K.tasks.size!==0&&K.tick(Je)}function xi(r){let i;return K.tasks.size===0&&K.tick(Je),{promise:new Promise(p=>{K.tasks.add(i={c:r,f:p})}),abort(){K.tasks.delete(i)}}}function Bt(r,i){Ge(()=>{r.dispatchEvent(new CustomEvent(i))})}function _i(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const i=r.split("-");return i.length===1?i[0]:i[0]+i.slice(1).map(p=>p[0].toUpperCase()+p.slice(1)).join("")}function qe(r){const i={},p=r.split(";");for(const b of p){const[v,d]=b.split(":");if(!v||d===void 0)break;const f=_i(v.trim());i[f]=d.trim()}return i}const wi=r=>r;function ki(r,i,p,b){var v=(r&ui)!==0,d="both",f,k=i.inert,A=i.style.overflow,g,_;function F(){return Ge(()=>f??=p()(i,b?.()??{},{direction:d}))}var Y={is_global:v,in(){i.inert=k,g=oe(i,F(),_,1,()=>{Bt(i,"introend"),g?.abort(),g=f=void 0,i.style.overflow=A})},out(T){i.inert=!0,_=oe(i,F(),g,0,()=>{Bt(i,"outroend"),T?.()})},stop:()=>{g?.abort(),_?.abort()}},I=li;if((I.nodes.t??=[]).push(Y),hi){var j=v;if(!j){for(var o=I.parent;o&&(o.f&si)!==0;)for(;(o=o.parent)&&(o.f&oi)===0;);j=!o||(o.f&ci)!==0}j&&He(()=>{Xe(()=>Y.in())})}}function oe(r,i,p,b,v){var d=b===1;if(di(i)){var f,k=!1;return Ke(()=>{if(!k){var T=i({direction:d?"in":"out"});f=oe(r,T,p,b,v)}}),{abort:()=>{k=!0,f?.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(p?.deactivate(),!i?.duration&&!i?.delay)return Bt(r,d?"introstart":"outrostart"),v(),{abort:wt,deactivate:wt,reset:wt,t:()=>b};const{delay:A=0,css:g,tick:_,easing:F=wi}=i;var Y=[];if(d&&p===void 0&&(_&&_(0,1),g)){var I=qe(g(0,1));Y.push(I,I)}var j=()=>1-b,o=r.animate(Y,{duration:A,fill:"forwards"});return o.onfinish=()=>{o.cancel(),Bt(r,d?"introstart":"outrostart");var T=p?.t()??1-b;p?.abort();var h=b-T,Q=i.duration*Math.abs(h),tt=[];if(Q>0){var D=!1;if(g)for(var w=Math.ceil(Q/16.666666666666668),P=0;P<=w;P+=1){var y=T+h*F(P/w),et=qe(g(y,1-y));tt.push(et),D||=et.overflow==="hidden"}D&&(r.style.overflow="hidden"),j=()=>{var R=o.currentTime;return T+h*F(R/Q)},_&&xi(()=>{if(o.playState!=="running")return!1;var R=j();return _(R,1-R),!0})}o=r.animate(tt,{duration:Q,fill:"forwards"}),o.onfinish=()=>{j=()=>b,_?.(b,1-b),v()}},{abort:()=>{o&&(o.cancel(),o.effect=null,o.onfinish=wt)},deactivate:()=>{v=wt},reset:()=>{b===0&&_?.(1,0)},t:()=>j()}}function Pi(r,i,p=i){var b=()=>{p(r.volume)};i()==null&&b(),Ze(r,["volumechange"],b,!1),ce(()=>{var v=Number(i());v!==r.volume&&!isNaN(v)&&(r.volume=v)})}function Ei(r,i,p=i){var b=()=>{p(r.muted)};i()==null&&b(),Ze(r,["volumechange"],b,!1),ce(()=>{var v=!!i();r.muted!==v&&(r.muted=v)})}function Ue(r,i){return r===i||r?.[vi]===i}function se(r={},i,p,b){return He(()=>{var v,d;return ce(()=>{v=d,d=[],Xe(()=>{r!==p(...d)&&(i(r,...d),v&&Ue(p(...v),r)&&i(null,...v))})}),()=>{Ke(()=>{d&&Ue(p(...d),r)&&i(null,...d)})}}),r}function Si(r){const i=r-1;return i*i*i+1}function Fi(r,{delay:i=0,duration:p=400,easing:b=Si,axis:v="y"}={}){const d=getComputedStyle(r),f=+d.opacity,k=v==="y"?"height":"width",A=parseFloat(d[k]),g=v==="y"?["top","bottom"]:["left","right"],_=g.map(h=>`${h[0].toUpperCase()}${h.slice(1)}`),F=parseFloat(d[`padding${_[0]}`]),Y=parseFloat(d[`padding${_[1]}`]),I=parseFloat(d[`margin${_[0]}`]),j=parseFloat(d[`margin${_[1]}`]),o=parseFloat(d[`border${_[0]}Width`]),T=parseFloat(d[`border${_[1]}Width`]);return{delay:i,duration:p,easing:b,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*f};${k}: ${h*A}px;padding-${g[0]}: ${h*F}px;padding-${g[1]}: ${h*Y}px;margin-${g[0]}: ${h*I}px;margin-${g[1]}: ${h*j}px;border-${g[0]}-width: ${h*o}px;border-${g[1]}-width: ${h*T}px;min-${k}: 0`}}var Ti=st('<div class="fixed bottom-20 right-4 z-60 max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Mi=st('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),Ci=st('<span class="text-sm text-(--content-meta)"></span>'),Ai=st('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-(--btn-regular-bg) shrink-0"><img loading="lazy" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),Ii=st('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-(--line-divider)"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar"></div></div>'),ji=st(`<!> <div><div role="button" tabindex="0"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden shrink-0"><img/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-(--primary) rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -0.125rem;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 3rem;
	height: 3rem;
}
.music-player {
    max-width: 20rem;
    user-select: none;
}
.mini-player {
    width: 17.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 20rem;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
	}
    50% {
        opacity: 0.5;
	}
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px !important;
        /*left: 0.5rem !important;*/
        bottom: 0.5rem !important;
        right: 0.5rem !important;
	}
    .mini-player {
        width: 280px;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
	}
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
        max-width: none;
	}
    .controls {
        gap: 8px;
	}
    .controls button {
        width: 36px;
        height: 36px;
	}
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
	}
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
	}
    .song-title {
        font-size: 14px;
	}
    .song-artist {
        font-size: 12px;
	}
    .controls {
        gap: 6px;
        margin-bottom: 12px;
	}
    .controls button {
        width: 32px;
        height: 32px;
	}
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
	}
    .playlist-item {
        padding: 8px 12px;
	}
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
	}
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
	}
    to {
        transform: translateY(0);
        opacity: 1;
	}
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
	}
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
	}
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
	}
    to {
        transform: rotate(360deg);
	}
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
	border: none;
}</style>`,1),Di=st('<audio preload="auto"></audio> <!>',1);function Xi(r,i){mi(i,!1);let p=Vt.meting_api,b=Vt.id,v=Vt.server,d=Vt.type,f=E(!1),k=E(!1),A=E(!1),g=E(!1),_=E(0),F=E(0);const Y="music-player-volume";let I=E(.7),j=E(!1),o=E(!1),T=E(!1),h=E(0),Q=E(""),tt=E(!1),D=E({title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0}),w=E([]),P=E(0),y=E(),et=E(),R=E();function Qe(){try{if(typeof localStorage<"u"){const a=localStorage.getItem(Y);a!==null&&!isNaN(parseFloat(a))&&s(I,parseFloat(a))}}catch(a){console.warn("Failed to load volume settings from localStorage:",a)}}function ta(){try{typeof localStorage<"u"&&localStorage.setItem(Y,t(I).toString())}catch(a){console.warn("Failed to save volume settings to localStorage:",a)}}async function ea(){s(o,!0);const a=p.replace(":server",v).replace(":type",d).replace(":id",b).replace(":auth","").replace(":r",Date.now().toString());try{const x=await fetch(a);if(!x.ok)throw new Error("meting api error");const q=await x.json();s(w,q.map(z=>{let mt=z.name??z.title??C(M.unknownSong),At=z.artist??z.author??C(M.unknownArtist),N=z.duration??0;return N>1e4&&(N=Math.floor(N/1e3)),(!Number.isFinite(N)||N<=0)&&(N=0),{id:z.id,title:mt,artist:At,cover:z.pic??"",url:z.url??"",duration:N}})),t(w).length>0&&de(t(w)[0]),s(o,!1)}catch{Ut(C(M.musicPlayerErrorPlaylist)),s(o,!1)}}function Wt(){!t(y)||!t(D).url||(t(f)?t(y).pause():t(y).play().catch(()=>{}))}function Et(){s(k,!t(k)),t(k)&&(s(g,!1),s(A,!1))}function St(){s(A,!t(A)),t(A)&&(s(k,!1),s(g,!1))}function ue(){s(g,!t(g))}function aa(){s(T,!t(T)),t(T)&&s(h,0)}function ia(){s(h,(t(h)+1)%3),t(h)!==0&&s(T,!1)}function ra(){if(t(w).length<=1)return;const a=t(P)>0?t(P)-1:t(w).length-1;Ft(a)}function Ot(a=!0){if(t(w).length<=1)return;let x;if(t(T))do x=Math.floor(Math.random()*t(w).length);while(x===t(P)&&t(w).length>1);else x=t(P)<t(w).length-1?t(P)+1:0;Ft(x,a)}let Yt=!1;function Ft(a,x=!0){a<0||a>=t(w).length||(Yt=x,s(P,a),de(t(w)[t(P)]))}function Tt(a){return a.startsWith("http://")||a.startsWith("https://")||a.startsWith("/")?a:`/${a}`}function de(a){a&&a.url!==t(D).url&&(s(D,{...a}),a.url?s(o,!0):s(o,!1))}let qt=!1;function na(){if(s(o,!1),t(y)?.duration&&t(y).duration>1&&(s(F,Math.floor(t(y).duration)),t(w)[t(P)]&&Pt(w,t(w)[t(P)].duration=t(F)),Pt(D,t(D).duration=t(F))),Yt||t(f)){const a=t(y).play();a!==void 0&&a.catch(x=>{console.warn("自动播放被拦截，等待用户交互:",x),qt=!0,s(f,!1)})}}function ve(){if(qt&&t(y)){const a=t(y).play();a!==void 0&&a.then(()=>{qt=!1}).catch(()=>{})}}function la(a){if(!t(D).url)return;s(o,!1),Ut(C(M.musicPlayerErrorSong));const x=t(f)||Yt;t(w).length>1?setTimeout(()=>Ot(x),1e3):Ut(C(M.musicPlayerErrorEmpty))}function sa(){}function oa(){t(h)===1?(Pt(y,t(y).currentTime=0),t(y).play().catch(()=>{})):t(h)===2||t(T)?Ot(!0):s(f,!1)}function Ut(a){s(Q,a),s(tt,!0),setTimeout(()=>{s(tt,!1)},3e3)}function ca(){s(tt,!1)}function ua(a){if(!t(y)||!t(et))return;const x=t(et).getBoundingClientRect(),z=(a.clientX-x.left)/x.width*t(F);Pt(y,t(y).currentTime=z),s(_,z)}let Mt=E(!1),Ct=!1,Ht=null,ot=null;function da(a){t(R)&&(a.preventDefault(),Ct=!0,t(R).setPointerCapture(a.pointerId),Ht=t(R).getBoundingClientRect(),fe(a.clientX))}function va(a){Ct&&(a.preventDefault(),s(Mt,!0),!ot&&(ot=requestAnimationFrame(()=>{fe(a.clientX),ot=null})))}function fa(a){Ct&&(Ct=!1,s(Mt,!1),Ht=null,t(R)&&t(R).releasePointerCapture(a.pointerId),ot&&(cancelAnimationFrame(ot),ot=null),ta())}function fe(a){if(!t(y)||!t(R))return;const x=Ht||t(R).getBoundingClientRect(),q=Math.max(0,Math.min(1,(a-x.left)/x.width));s(I,q)}function me(){s(j,!t(j))}function pe(a){if(!Number.isFinite(a)||a<0)return"0:00";const x=Math.floor(a/60),q=Math.floor(a%60);return`${x}:${q.toString().padStart(2,"0")}`}const he=["click","keydown","touchstart"];ii(()=>{Qe(),he.forEach(a=>{document.addEventListener(a,ve,{capture:!0})}),ea()}),ri(()=>{typeof document<"u"&&he.forEach(a=>{document.removeEventListener(a,ve,{capture:!0})})}),ni();var be=Di();c("pointermove",We,va),c("pointerup",We,fa);var B=Be(be);se(B,a=>s(y,a),()=>t(y));var ma=u(B,2);{var pa=a=>{var x=ji(),q=Be(x);{var z=e=>{var V=Ti(),O=l(V),Z=l(O);m(Z,{icon:"material-symbols:error",class:"text-xl shrink-0"});var it=u(Z,2),rt=l(it,!0);n(it);var nt=u(it,2),ft=l(nt);m(ft,{icon:"material-symbols:close",class:"text-lg"}),n(nt),n(O),n(V),kt(()=>H(rt,t(Q))),c("click",nt,ca),lt(e,V)};X(q,e=>{t(tt)&&e(z)})}var mt=u(q,2);let At;var N=l(mt);let ge;var ha=l(N);{var ba=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},ga=e=>{var V=Mi();lt(e,V)},ya=e=>{m(e,{icon:"material-symbols:music-note",class:"text-white text-lg"})};X(ha,e=>{t(o)?e(ba):t(f)?e(ga,1):e(ya,-1)})}n(N);var It=u(N,2);let ye;var xe=l(It),ct=l(xe),jt=l(ct);let _e;var we=u(jt,2),xa=l(we);{var _a=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},wa=e=>{m(e,{icon:"material-symbols:pause",class:"text-white text-xl"})},ka=e=>{m(e,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};X(xa,e=>{t(o)?e(_a):t(f)?e(wa,1):e(ka,-1)})}n(we),n(ct);var ut=u(ct,2),Xt=l(ut),Pa=l(Xt,!0);n(Xt);var ke=u(Xt,2),Ea=l(ke,!0);n(ke),n(ut);var Pe=u(ut,2),pt=l(Pe),Sa=l(pt);m(Sa,{icon:"material-symbols:visibility-off",class:"text-lg"}),n(pt);var Kt=u(pt,2),Fa=l(Kt);m(Fa,{icon:"material-symbols:expand-less",class:"text-lg"}),n(Kt),n(Pe),n(xe),n(It);var Dt=u(It,2);let Ee;var Gt=l(Dt),Zt=l(Gt),Jt=l(Zt);let Se;n(Zt);var Qt=u(Zt,2),te=l(Qt),Ta=l(te,!0);n(te);var ee=u(te,2),Ma=l(ee,!0);n(ee);var Fe=u(ee,2),Ca=l(Fe);n(Fe),n(Qt);var Te=u(Qt,2),ht=l(Te),Aa=l(ht);m(Aa,{icon:"material-symbols:visibility-off",class:"text-lg"}),n(ht);var bt=u(ht,2);let Me;var Ia=l(bt);m(Ia,{icon:"material-symbols:queue-music",class:"text-lg"}),n(bt),n(Te),n(Gt);var ae=u(Gt,2),at=l(ae),ja=l(at);n(at),se(at,e=>s(et,e),()=>t(et)),n(ae);var ie=u(ae,2),dt=l(ie);let Ce;var Da=l(dt);m(Da,{icon:"material-symbols:shuffle",class:"text-lg"}),n(dt);var gt=u(dt,2),Na=l(gt);m(Na,{icon:"material-symbols:skip-previous",class:"text-xl"}),n(gt);var vt=u(gt,2);let Ae;var La=l(vt);{var Ra=e=>{m(e,{icon:"eos-icons:loading",class:"text-xl"})},$a=e=>{m(e,{icon:"material-symbols:pause",class:"text-xl"})},za=e=>{m(e,{icon:"material-symbols:play-arrow",class:"text-xl"})};X(La,e=>{t(o)?e(Ra):t(f)?e($a,1):e(za,-1)})}n(vt);var yt=u(vt,2),Va=l(yt);m(Va,{icon:"material-symbols:skip-next",class:"text-xl"}),n(yt);var Nt=u(yt,2);let Ie;var Ba=l(Nt);{var Wa=e=>{m(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},Oa=e=>{m(e,{icon:"material-symbols:repeat",class:"text-lg"})},Ya=e=>{m(e,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};X(Ba,e=>{t(h)===1?e(Wa):t(h)===2?e(Oa,1):e(Ya,-1)})}n(Nt),n(ie);var je=u(ie,2),Lt=l(je),qa=l(Lt);{var Ua=e=>{m(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ha=e=>{m(e,{icon:"material-symbols:volume-down",class:"text-lg"})},Xa=e=>{m(e,{icon:"material-symbols:volume-up",class:"text-lg"})};X(qa,e=>{t(j)||t(I)===0?e(Ua):t(I)<.5?e(Ha,1):e(Xa,-1)})}n(Lt);var G=u(Lt,2),De=l(G);let Ne;n(G),se(G,e=>s(R,e),()=>t(R));var Rt=u(G,2),Ka=l(Rt);m(Ka,{icon:"material-symbols:expand-more",class:"text-lg"}),n(Rt),n(je),n(Dt);var Ga=u(Dt,2);{var Za=e=>{var V=Ii(),O=l(V),Z=l(O),it=l(Z,!0);n(Z);var rt=u(Z,2),nt=l(rt);m(nt,{icon:"material-symbols:close",class:"text-lg"}),n(rt),n(O);var ft=u(O,2);bi(ft,5,()=>t(w),gi,(xt,J,W)=>{var U=Ai();let $t;var _t=l(U),re=l(_t);{var Ja=L=>{m(L,{icon:"material-symbols:graphic-eq",class:"text-(--primary) animate-pulse"})},Qa=L=>{m(L,{icon:"material-symbols:pause",class:"text-(--primary)"})},ti=L=>{var Ve=Ci();Ve.textContent=W+1,lt(L,Ve)};X(re,L=>{W===t(P)&&t(f)?L(Ja):W===t(P)?L(Qa,1):L(ti,-1)})}n(_t);var ne=u(_t,2),Le=l(ne);n(ne);var Re=u(ne,2),zt=l(Re);let $e;var ei=l(zt,!0);n(zt);var le=u(zt,2);let ze;var ai=l(le,!0);n(le),n(Re),n(U),kt(L=>{$t=$(U,1,"playlist-item flex items-center gap-3 p-3 hover:bg-(--btn-plain-bg-hover) cursor-pointer transition-colors",null,$t,{"bg-[var(--btn-plain-bg)]":W===t(P),"text-[var(--primary)]":W===t(P)}),S(U,"aria-label",`播放 ${t(J).title??""} - ${t(J).artist??""}`),S(Le,"src",L),S(Le,"alt",t(J).title),$e=$(zt,1,"font-medium truncate",null,$e,{"text-[var(--primary)]":W===t(P),"text-90":W!==t(P)}),H(ei,t(J).title),ze=$(le,1,"text-sm text-(--content-meta) truncate",null,ze,{"text-[var(--primary)]":W===t(P)}),H(ai,t(J).artist)},[()=>Tt(t(J).cover)]),c("click",U,()=>Ft(W)),c("keydown",U,L=>{(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),Ft(W))}),lt(xt,U)}),n(ft),n(V),kt(xt=>H(it,xt),[()=>C(M.musicPlayerPlaylist)]),c("click",rt,ue),ki(3,V,()=>Fi,()=>({duration:300,axis:"y"})),lt(e,V)};X(Ga,e=>{t(g)&&e(Za)})}n(mt),pi(2),kt((e,V,O,Z,it,rt,nt,ft,xt,J,W,U,$t,_t,re)=>{At=$(mt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,At,{expanded:t(k),"hidden-mode":t(A)}),ge=$(N,1,"orb-player w-12 h-12 bg-(--primary) rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ge,{"opacity-0":!t(A),"scale-0":!t(A),"pointer-events-none":!t(A)}),S(N,"aria-label",e),ye=$(It,1,"mini-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,ye,{"opacity-0":t(k)||t(A),"scale-95":t(k)||t(A),"pointer-events-none":t(k)||t(A)}),S(ct,"aria-label",V),S(jt,"src",O),S(jt,"alt",Z),_e=$(jt,1,"w-full h-full object-cover transition-transform duration-300",null,_e,{spinning:t(f)&&!t(o),"animate-pulse":t(o)}),S(ut,"aria-label",it),H(Pa,t(D).title),H(Ea,t(D).artist),S(pt,"title",rt),Ee=$(Dt,1,"expanded-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,Ee,{"opacity-0":!t(k),"scale-95":!t(k),"pointer-events-none":!t(k)}),S(Jt,"src",nt),S(Jt,"alt",ft),Se=$(Jt,1,"w-full h-full object-cover transition-transform duration-300",null,Se,{spinning:t(f)&&!t(o),"animate-pulse":t(o)}),H(Ta,t(D).title),H(Ma,t(D).artist),H(Ca,`${xt??""} / ${J??""}`),S(ht,"title",W),Me=$(bt,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,Me,{"text-[var(--primary)]":t(g)}),S(bt,"title",U),S(at,"aria-label",$t),S(at,"aria-valuenow",t(F)>0?t(_)/t(F)*100:0),Oe(ja,`width: ${t(F)>0?t(_)/t(F)*100:0}%`),Ce=$(dt,1,"w-10 h-10 rounded-lg",null,Ce,{"btn-regular":t(T),"btn-plain":!t(T)}),dt.disabled=t(w).length<=1,gt.disabled=t(w).length<=1,Ae=$(vt,1,"btn-regular w-12 h-12 rounded-full",null,Ae,{"opacity-50":t(o)}),vt.disabled=t(o),yt.disabled=t(w).length<=1,Ie=$(Nt,1,"w-10 h-10 rounded-lg",null,Ie,{"btn-regular":t(h)>0,"btn-plain":t(h)===0}),S(G,"aria-label",_t),S(G,"aria-valuenow",t(I)*100),Ne=$(De,1,"h-full bg-(--primary) rounded-full transition-all",null,Ne,{"duration-100":!t(Mt),"duration-0":t(Mt)}),Oe(De,`width: ${t(I)*100}%`),S(Rt,"title",re)},[()=>C(M.musicPlayerShow),()=>t(f)?C(M.musicPlayerPause):C(M.musicPlayerPlay),()=>Tt(t(D).cover),()=>C(M.musicPlayerCover),()=>C(M.musicPlayerExpand),()=>C(M.musicPlayerHide),()=>Tt(t(D).cover),()=>C(M.musicPlayerCover),()=>pe(t(_)),()=>pe(t(F)),()=>C(M.musicPlayerHide),()=>C(M.musicPlayerPlaylist),()=>C(M.musicPlayerProgress),()=>C(M.musicPlayerVolume),()=>C(M.musicPlayerCollapse)]),c("click",N,St),c("keydown",N,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),St())}),c("click",ct,Wt),c("keydown",ct,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Wt())}),c("click",ut,Et),c("keydown",ut,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Et())}),c("click",pt,Ye(St)),c("click",Kt,Ye(Et)),c("click",ht,St),c("click",bt,ue),c("click",at,ua),c("keydown",at,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();const O=.5*t(F);t(y)&&(Pt(y,t(y).currentTime=O),s(_,O))}}),c("click",dt,aa),c("click",gt,ra),c("click",vt,Wt),c("click",yt,()=>Ot()),c("click",Nt,ia),c("click",Lt,me),c("pointerdown",G,da),c("keydown",G,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&me())}),c("click",Rt,Et),lt(a,x)};X(ma,a=>{a(pa)})}kt(a=>S(B,"src",a),[()=>Tt(t(D).url)]),Pi(B,()=>t(I),a=>s(I,a)),Ei(B,()=>t(j),a=>s(j,a)),c("play",B,()=>s(f,!0)),c("pause",B,()=>s(f,!1)),c("timeupdate",B,()=>s(_,t(y).currentTime)),c("ended",B,oa),c("error",B,la),c("loadeddata",B,na),c("loadstart",B,sa),lt(r,be),fi()}export{Xi as default};
