(()=>{
if(window.__lhpBoard){window.__lhpBoard.close();}
const DEFAULT=['Amy Brooks','Jan Cable','Jason Good','Nia Zacharia','Savannah Kirkland','Cathy Suto'];
const MAX=6,POLL=5000;const GRP='matt-thomas-23f72475-8daa-4783-9322-0624397c1e30';const gdet={};let gi=0,gDay='',gN=1,gslide=0,gWinCur=null;const gc=(()=>{try{const o=JSON.parse(localStorage.getItem('lhp_gclk')||'null');if(o&&o.day===new Date().toDateString())return {acc:o.acc||0,t0:o.t0||0,run:!!o.run,day:o.day};}catch(e){}return {acc:0,t0:0,run:false,day:new Date().toDateString()};})();
const gEl=()=>Math.floor((gc.acc+(gc.run?Date.now()-gc.t0:0))/1000);const gSave=()=>{try{localStorage.setItem('lhp_gclk',JSON.stringify(gc));}catch(e){}};
function gWin(e){if(!gWinCur)return '';const r=gWinCur.e-e;if(e<gWinCur.s)return 'starts in '+mmss(gWinCur.s-e);if(r>=0)return mmss(r)+' left in block';return 'block over by '+mmss(-r);}
let tok=localStorage.getItem('token');
if(!tok){alert('Open the CoachRx dashboard and sign in first.');return;}
const H={get headers(){tok=localStorage.getItem('token')||tok;return {Authorization:'Bearer '+tok,Accept:'application/json'};}};let authBad=false,wl=null;
async function wake(){try{if(navigator.wakeLock&&!wl){wl=await navigator.wakeLock.request('screen');wl.addEventListener('release',()=>{wl=null;});}}catch(e){}}
const vis=()=>{if(document.visibilityState==='visible'){wake();if(typeof load==='function'){try{load();}catch(e){}}}};document.addEventListener('visibilitychange',vis);
const scHold={},scTop={},scProg={};let zoomFrom=null,zAnim=false,zBack=null,zsTop=0,zSel=null,zSwap=false,zlTop=0,lastView='',animUntil=0,lastTouch=Date.now(),tvOn=false,wakeTap=0;function wkLbl(w){const t=String((w&&w.title)||'');const a=/week\s*(\d+)/i.exec(t),b=/day\s*(\d+)/i.exec(t);return a?('WEEK '+a[1]+(b?' · DAY '+b[1]:'')):'';}
function tmGo(sl){if(fmt(day)!==todayS)return;tmLoad();if(tm[sl]&&tm[sl].t0)return;const w=data[sl];const st=w&&!w.rest_day?steps(w):[];const nw=Date.now();tm[sl]={t0:nw,b0:nw,idx:Math.max(0,st.findIndex(x=>!done(x)))};tmSave();}
const rsKey=sl=>'lhp_rs_'+sl+fmt(day);const isRs=sl=>{try{return localStorage.getItem(rsKey(sl))==='1';}catch(e){return false;}};const rstArm={},goAnim={};
let bub=null;
function fullDesc(i){const L=[];for(const x of String(i.description||'').split('\n')){const t=x.trim();if(/^coach notes/i.test(t))break;if(t)L.push(t);}return L.join('\n');}
function bubRows(i){const out=[];const kc=l=>/^(prep |warm[\s-]*up )?rest/i.test(l)?' rt':/warm|prep/i.test(l)?' wu':/tempo|cue|note|tip|rir|rpe|focus|setup/i.test(l)?' nt':' wk';for(const x of String(i.description||'').split('\n')){const t=x.trim();if(/^coach notes/i.test(x.trim()))break;if(!t)continue;const m=/^([A-Za-z][A-Za-z \/-]{0,20}):\s*(.+)$/.exec(t);out.push(m?`<div class="br${kc(m[1])}"><small>${esc(m[1])}</small><span>${esc(m[2])}</span></div>`:/^rest\b/i.test(t)?`<div class="br rt"><small>Rest</small><span>${esc(t.replace(/^rest\s*[:\-]?\s*/i,''))}</span></div>`:`<div class="br${/warm|prep/i.test(t)?' wu':' wk'}"><span>${esc(t)}</span></div>`);}return out.join('');}
function bubHtml(){if(!bub)return '';const w=data[bub.slug];const c=clients.find(x=>x.slug===bub.slug);if(!w||!c)return '';let it=null;steps(w).forEach(x=>x.forEach(i=>{if(String(i.id)===String(bub.id))it=i;}));if(!it)return '';const last=hist[c.slug]&&hist[c.slug][bare(it.name)];const p=pr[c.slug]&&pr[c.slug][bare(it.name)];const k=c.slug+'|'+it._wid+'|'+it.id;return `<div class="bub"><b>${esc(it.name)}</b><div class="brs">${bubRows(it)}</div>${last?`<div class="br lt"><small>Last time</small><span>${esc(String(last).replace(/\s+/g,' ').slice(0,90))}</span></div>`:''}${p?`<div class="br lt"><small>PR</small><span>${esc(prTxt(p))}</span></div>`:''}${it.result?`<div class="br lt"><small>Logged</small><span>${esc(it.result)}</span></div>`:''}<div class="bres"><input class="ri" data-ri="${esc(k)}" value="${esc(it.result||'')}" placeholder="Add result" autocomplete="off"><button data-sv="${esc(k)}">Save</button><button class="cmpb" data-cm="${esc(k)}|pending">Complete</button></div></div>`;}
let bubT=null;function bubArm(){clearTimeout(bubT);if(!bub)return;bubT=setTimeout(()=>{const a=document.activeElement;if(bub&&a&&a.classList&&a.classList.contains('ri')&&root.contains(a)){bubArm();return;}const o=root.querySelector('.bub');bub=null;if(o){if(motionOn()){o.classList.add('out');setTimeout(()=>o.remove(),320);}else o.remove();}},5000);}
let bubKey='';function bubOpen(){clearTimeout(bubT);const o=root.querySelector('.bub');if(o)o.remove();if(!bub)bubKey='';if(bub){const kk=bub.slug+'|'+bub.id;bub._fresh=kk!==bubKey;bubKey=kk;{const h=bubHtml();if(root.insertAdjacentHTML)root.insertAdjacentHTML('beforeend',h);else root.innerHTML+=h;}bubPlace();bubArm();}}
function bubPlace(){const b=root.querySelector('.bub');if(!b||!bub)return;const el=root.querySelector('.sci[data-iid="'+bub.slug+'|'+bub.id+'"]');if(!el){bub=null;b.remove();return;}const r=el.getBoundingClientRect(),W=window.innerWidth,Hh=window.innerHeight,bw=b.offsetWidth,bh=b.offsetHeight;let left=r.right+10,side='r';if(left+bw>W-8){left=r.left-bw-10;side='l';}if(left<8){left=Math.max(8,Math.min(r.left,W-bw-8));side='';}let top=r.top+r.height/2-bh/2;top=Math.max(8,Math.min(top,Hh-bh-8));b.style.left=left+'px';b.style.top=top+'px';b.className='bub '+side+(bub._fresh&&motionOn()?' fresh':'');}
const lastSnap={},snapPos={};let tm={};const tmKey=()=>'lhp_tm_'+fmt(day);const tmLoad=()=>{try{tm=JSON.parse(localStorage.getItem(tmKey())||'{}');}catch(e){tm={};}};const tmSave=()=>{try{localStorage.setItem(tmKey(),JSON.stringify(tm));}catch(e){}};const tmf=ms=>{const t=Math.max(0,Math.floor(ms/1000));const h=Math.floor(t/3600),m=Math.floor(t%3600/60),sec=t%60;return h?h+':'+pad(m)+':'+pad(sec):m+':'+pad(sec);};
function fullRx(i){const L=String(i.description||'').split('\n').map(x=>x.trim()).filter(x=>x&&!/^(coach notes|focus:)/i.test(x));const k=L.findIndex(x=>/^coach notes/i.test(x));return L.slice(0,4).join('\n');}
const motionOn=()=>{try{return localStorage.getItem('lhp_motion')==='1';}catch(e){return false;}};let lastDayS='';
const pad=n=>String(n).padStart(2,'0');
const fmt=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const norm=s=>(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().trim();
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const rx=i=>{if(i._adm)return rxA(i);const L=String(i.description||'').split(/\n/).map(x=>x.trim()).filter(l=>l&&!/^rest\b/i.test(l));const W=L.filter(l=>!/^(prep|warm)/i.test(l));const P=W.length?W:L;return (P.find(l=>/^(first\s+)?([2-9]|\d{2,})\s*sets?\b/i.test(l))||P.find(l=>/\bsets?\b.*(reps?|x)\b|\d+\s*[x×]\s*\d+/i.test(l))||P.find(l=>/\d/.test(l))||P[0]||'').replace(/\s*\(\s*\)/g,'').replace(/^work(?:ing)?(?:\s*sets?)?\s*:\s*/i,'');};
const cleanLine=l=>{let t=String(l||'').trim();if(/^\s*rest\b/i.test(t)||/^\s*(warm[\s-]*ups?|prep)\b/i.test(t))return '';t=t.replace(/\bwarm[\s-]*ups?\b\s*(sets?)?\s*[:\-–]?\s*/gi,'');t=t.replace(/[,;(\[]?\s*\brest(?:\s*periods?)?\s*[:\-–]?\s*\d+(?:\s*[-–]\s*\d+)?\s*(?:seconds?|secs?|s|minutes?|mins?|m)\b(?:\s*between\s*sets)?\s*[)\]]?/gi,'');return t.replace(/^[\s:;,\-–]+|[\s:;,\-–]+$/g,'').replace(/\s{2,}/g,' ');};
const fxK=(l,lb)=>{if(!lb){return /^(prep |warm[\s-]*up )?rest/i.test(l)?' rt':/^(warm|prep)/i.test(l)?' wu':' wk';}return /^(prep |warm[\s-]*up )?rest/i.test(lb)?' rt':/warm|prep/i.test(lb)?' wu':/tempo|cue|note|tip|rir|rpe|focus|setup|goal/i.test(lb)?' nt':' wk';};
const fxH=t=>String(t).split('\n').map(l=>{const m=/^([A-Za-z][A-Za-z \/-]{0,18}):\s*(.+)$/.exec(l);const u=!m&&/^((?:warm[\s-]*ups?|prep)(?:\s*sets?)?)\s*[-–]?\s*(.*)$/i.exec(l);return `<span class="fl${fxK(l,m&&m[1])}">${m?`<i class="fk">${esc(m[1])}</i>${esc(m[2])}`:u&&u[2]?`<i class="fk">${esc(u[1])}</i>${esc(u[2])}`:esc(l)}</span>`;}).join('');
const fxP=t=>{const L=String(t).split('\n').map(x=>x.replace(/\s*\(\s*\)/g,'').trim()).filter(Boolean);const fw=L.findIndex(l=>/^(first\s+)?([2-9]|\d{2,})\s*sets?\b/i.test(l));const prep=[],work=[],nt=[],mx=[],rst=[];let hdr=false,inP=false;const seen={};const key=l=>l.toLowerCase().replace(/[\s.]+/g,'');
const isRest=l=>/^(prep |warm[\s-]*up )?rest\b/i.test(l)||/^\d+\s*(?:-\s*\d+)?\s*(?:min|sec|s)\b/i.test(l)||/\bcluster\b/i.test(l)||/^rest\b/i.test(l.replace(/^[A-Za-z \/-]{0,18}:\s*/,''));
for(let li=0;li<L.length;li++){const l=L[li];
if(/^(warm[\s-]*ups?|prep)(\s*sets?)?\s*:?$/i.test(l)){hdr=true;inP=true;continue;}
if(fw>li&&/^1\s*sets?\b/i.test(l)&&!isRest(l)){hdr=true;prep.push(`<span class="fl wu pl">${esc(l)}</span>`);continue;}
const m=/^([A-Za-z][A-Za-z \/-]{0,18}):\s*(.+)$/.exec(l);
if(isRest(l)){const pr=/^(prep|warm)/i.test(l);const mm=/^([A-Za-z][A-Za-z \/-]{0,18}):\s*(.+)$/.exec(l);const h=`<span class="fl rt">${mm?`<i class="fk">${esc(mm[1])}</i>${esc(mm[2])}`:esc(l)}</span>`;(pr?prep:rst).push(h);if(pr)hdr=true;continue;}
if(/\bmax\b/i.test(l)&&!/\bsets?\b/i.test(l)){const q=/^(.*?\bmax\b)\s*[:\-]?\s*(.*)$/i.exec(l);mx.push(q?`<span class="fl mx"><i class="fk">${esc(q[1])}</i>${esc(q[2])}</span>`:`<span class="fl mx">${esc(l)}</span>`);continue;}
if(m&&/^(warm|prep)/i.test(m[1])){hdr=true;prep.push(`<span class="fl wu pl">${esc(m[2])}</span>`);continue;}
{const u=/^(?:warm[\s-]*ups?|prep)(?:\s*sets?)?\s*[-–]\s*(\S.*)$/i.exec(l);if(u){hdr=true;prep.push(`<span class="fl wu pl">${esc(u[1])}</span>`);continue;}}
if(m&&/tempo|cue|note|tip|rir|rpe|focus|setup|goal/i.test(m[1])){nt.push(`<span class="fl nt"><i class="fk">${esc(m[1])}</i>${esc(m[2])}</span>`);continue;}
if(inP&&/^1\s*sets?\b/i.test(l)){prep.push(`<span class="fl wu pl">${esc(l)}</span>`);continue;}
if(!/\d/.test(l)){nt.push(`<span class="fl nt">${esc(l)}</span>`);continue;}
inP=false;
if(seen[key(l)])continue;seen[key(l)]=1;
work.push(m?`<span class="fl wk"><i class="fk">${esc(m[1])}</i>${esc(m[2])}</span>`:`<span class="fl wk">${esc(l)}</span>`);
}
return (hdr&&prep.length?'<span class="fl wu"><i class="fk">Prep</i></span>':'')+prep.join('')+work.join('')+rst.join('')+nt.join('')+mx.join('');};
const fullTxt=i=>{const o=[];for(const x of String(i.description||'').split(/\n/)){const t=x.trim();if(/^coach notes/i.test(t))break;if(t)o.push(t);}return o.join('\n');};
const rxA=i=>{const raw=String(i.description||'').split(/\n/).map(x=>x.trim()).filter(l=>l&&!/^rest\b/i.test(l));const W=raw.filter(l=>!/warm[\s-]*up|^prep/i.test(l));const P=W.length?W:raw;const hit=P.find(l=>/^(first\s+)?([2-9]|\d{2,})\s*sets?\b/i.test(l))||P.find(l=>/\bsets?\b.*(reps?|x)\b|\d+\s*[x×]\s*\d+/i.test(l))||P.find(l=>/\d/.test(l))||P[0]||'';return cleanLine(hit).replace(/\s*\(\s*\)/g,'').replace(/^work(?:ing)?(?:\s*sets?)?\s*:\s*/i,'');};
const dsc=i=>String(i.description||'').split(/\n/).filter(l=>l.trim()&&!/^\s*rest\b/i.test(l)).join('\n').trim();
function itemRest(i){const t=String(i.description||'');const m=[...t.matchAll(/rest\s*(\d+)(?:\s*[-–]\s*(\d+))?\s*(seconds|secs|sec|s|minutes|mins|min|m)\b/gi)];if(!m.length)return 0;const x=m[m.length-1];const v=+(x[2]||x[1]);return /^m/i.test(x[3])?v*60:v;}
function restSecs(items){const t=items.map(i=>i.description||'').join('\n');const m=[...t.matchAll(/rest\s*(\d+)(?:\s*[-–]\s*(\d+))?\s*(seconds|secs|sec|s|minutes|mins|min|m)\b/gi)];if(!m.length)return 60;const x=m[m.length-1];const v=+(x[2]||x[1]);return /^m/i.test(x[3])?v*60:v;}
function restHtml(slug,dur){const now=Date.now(),C=2*Math.PI*19,e=restEnd[slug]||0;let t,f=1,go=false;
if(e>now){f=(e-now)/(dur*1000);t=Math.ceil((e-now)/1000);}
else if(e&&now<e+6000){go=true;f=0;t='GO';}
else{t=dur;}
if(!dur){f=1;}
return `<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="19" fill="none" stroke="#3a3416" stroke-width="3.6"/><circle cx="22" cy="22" r="19" fill="none" stroke="${go?'#000':'#ffd23f'}" stroke-width="3.8" stroke-linecap="round" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C*(1-f)).toFixed(1)}" transform="rotate(-90 22 22)"/></svg><span>${t}</span>`;}
function restTick(){root.querySelectorAll('.rb').forEach(b=>{const s=b.dataset.rs,d=+b.dataset.rd||0;b.innerHTML=restHtml(s,d);const e=restEnd[s]||0,g=e&&Date.now()>=e&&Date.now()<e+6000;if(b.classList)b.classList.toggle('go',!!g);b.classList.toggle('run',e>Date.now());b.classList.toggle('low',e>Date.now()&&e-Date.now()<=10000);});}
const mmss=s=>Math.floor(s/60)+':'+pad(s%60);
let day=new Date();day.setHours(12,0,0,0);
let all=[],sel=[],clients=[],data={},hist={},comm={},sig='',timer=null,tk=null;
let focus=null,pick=false,pickTag=null,lastLoad=null,tab='custom',cc=(()=>{try{return localStorage.getItem('lhp_cc')||'';}catch(e){return '';}})(),edit=(()=>{try{return localStorage.getItem('lhp_edit')!=='0';}catch(e){return true;}})(),busy=false,summary=false;
const LOGO='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAAoBAMAAAChsh0EAAABPWlDQ1BJQ0MgUHJvZmlsZQAAeJx9kM9KAmEUxX+fGYIaFLQJCgZqUWARk9TajCxwMdg/FVqMo2mg9jEzFr1BDxCtWrdu56aFi96gKGjRA7QNXFQy8Wk1VtTdnB/nHi6XAwFMKatBoFZ37UxqWcvm8lroiQhhhhgjYFqOTBhGGuBTv0/7DqH0Zlbd+r3/d8LFkmMBb8C0JW0XxBRgHLlSsQuM2tlcHsSJ4nKPzxUXenzZzWxmkiCugWGrYhZB3AKxQp9f7uNatWF9/KC+j5bqWxtKgXHSpNBYZY2VP3Lxbi7JAZJjbPYpU8FFI4FEUqWExjp1LOaIoaEzj86i6vdnb77XeIGlQxATvrd7CldxGNF9bzIF0W1oPUrTNr/aFO2gs7eg9zjShMEzz3vegdAMdO4977XpeZ0LGHiAVvsdaJxZcPKJxRwAAAAwUExURRYUE/f392hnZp6enWGpUTQyMEZFQzs8NzdVLkJvOkE+PUFAPoB/f4GAf8C/v8DAv5PO/gsAAAAQdFJOUwD/+v//XLSJ+v+bnf/////x+BhqAAACHElEQVR42u2WT4oTQRTGf11tHBFMuheuZlMDrkQkiksXHkBj5gDCeIOcwQOIFxD0BjLgfvaC9gWEIuBKsEsZwZmQaheVpKurqmt6p4u8Rbpf/fneV9979Tqwt739W8sAKMl+tGNiQqPtbNHo3SMrgO3M8RkThZhw5xPcPKDRMLqn7P5n7+wzEq8JYrsDpez4X4E/9nVmoTGn9GIv0kf91SXSrv7skYthn7l0i/BYC391z9IYtiIliosGsOw9YAT7OsCU9re1uq61F5ts7qDVdV0XCex1l3sRJLq7x1SOM7+Ct+mO51eV8W/Pf3X03L5cC9dKLcbaylwVm1AkUuAveLEtmAjvgkZh5n2iVME55fBcKnIRgdjaNBjRg7EFHDY7to2OVaFjR3DL9R+UZVn2YWegDXxLMXUsl5w77kileBtQSFuJU0QGyyk5ICGmrIZHrbeSKWyJgFYJIzu9K7Sl7VeDeBc0oDAnLS+Vwl53qjDJe6QwIOCkp1+okIxrXxJ3fg0S8rbTrgPNQlEG1qB5X1Zw+fJ2Fecl8PUXfdjhnZ8B8NrhNU733FWhB9/LZPjR/bB7ORn4ENvYlIB4O7/xeDf1dKP4xd3d5p8lCg6/e+lvBS3dFtDhbRbukT/2dacnnn8ph2ni5GnVI3H2xgep4j1LhPcm+IZ4TXTc19Afer7wlLuItU5XFDHpXp6VDS6B0w0HMdv/p9zb/2F/AfIhjkM9tR4rAAAAAElFTkSuQmCC';
const ICON='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAABABAMAAACjEJkyAAABPWlDQ1BJQ0MgUHJvZmlsZQAAeJx9kM9KAmEUxX+fGYIaFLQJCgZqUWARk9TajCxwMdg/FVqMo2mg9jEzFr1BDxCtWrdu56aFi96gKGjRA7QNXFQy8Wk1VtTdnB/nHi6XAwFMKatBoFZ37UxqWcvm8lroiQhhhhgjYFqOTBhGGuBTv0/7DqH0Zlbd+r3/d8LFkmMBb8C0JW0XxBRgHLlSsQuM2tlcHsSJ4nKPzxUXenzZzWxmkiCugWGrYhZB3AKxQp9f7uNatWF9/KC+j5bqWxtKgXHSpNBYZY2VP3Lxbi7JAZJjbPYpU8FFI4FEUqWExjp1LOaIoaEzj86i6vdnb77XeIGlQxATvrd7CldxGNF9bzIF0W1oPUrTNr/aFO2gs7eg9zjShMEzz3vegdAMdO4977XpeZ0LGHiAVvsdaJxZcPKJxRwAAAAkUExURQAAAP39/WuzWPL28X//f7CvsOzs7eDg4Wtra3vBaJ7Nj4zHe2rqaU4AAAAMdFJOUwD7/hECDKBeCexms0fIV4IAAAJPSURBVHjafZM/axRRFMV/897OZldTxNJCGAWJEDYMhhRWyVrYSHARLAOWViJW0caUKf0I21oIkW0t9gsERkQNasKEgFnJGqbQiO6+GYv3Z2Z2nZ1iuO8ezuXcc++V2C+89b3ZbDY332U2IxzGAgBv8oRnAynmdbAWR5M8YaMgmKqZ3jPBr3iqZufI5ESiJnnxuglqTNVsdE3wd9vJs9DxnE19e9Qv80YyN2F3suZdh/XkBNYKcj+mek/IHZroz5/Pebdfl3h+wXOudEpYmhWwJC7VDK/2c6x2pkpaCjJdTpRkPgAgKzkr3x8BcEl7tKHHq3nCmP+2NF5RlOnvdYo+aO9enCUAtRuLEcCXT+McS9oRQHbwJwHwf2YFnbrKxsqHotBaUeaCsWLUInI8IzNmrIP1XGf4XMvs7bWMUOkYatd6K/Xi95Jci66RguoX3QL48VHLzAanwzqAOrc8mZpDChB2ZqHrQSf6kNo9TCKdvrkaA/jxCdlyex/gwDvRNZXeASWAQC9g6noPdaspEAe5RAlyeAjA5u8BnH6tA6R39jVPOCmAOb4g1HljeycC8PPBeBB6MUB9qADCdtfuoXCOjXXpoO9mINxg7y9pm6+78UonczUeANQ++1poYyCsMI5N18vuCgUsPQSom0tWI/3smVvZAbZCc65S7QBbhr3ifuWnB8gQUJG76fLz/58n21XQkO1KWsOTYRWmvFfPqnkiqCwqqmWmYrcSuzijZkN0Z/TevFwFPRaV7SE9rlVhhzN6QFx4UoHMdcX5YgX29OU/V0+n3UdIE5YAAAAASUVORK5CYII=';
let cnv=false,clv=false,rmArm=null;const cn={};let ov={};try{ov=JSON.parse(localStorage.getItem('lhp_ov')||'{}');}catch(e){}
let undoT=null;const ovKey=()=>tab+'|'+fmt(day);const ovGet=()=>ov[ovKey()]||(ov[ovKey()]={rm:[],add:[]});
function ovSave(){const t=fmt(new Date());Object.keys(ov).forEach(k=>{if(k.split('|').pop()<t)delete ov[k];});try{localStorage.setItem('lhp_ov',JSON.stringify(ov));}catch(e){}}
const baseGroup=()=>tab==='custom'?sel.map(x=>all.find(c=>c.slug===x)).filter(Boolean):all.filter(c=>(c.tags||[]).some(t=>t.name===tab));
function groupSlugs(){const o=ov[ovKey()]||{rm:[],add:[]};return baseGroup().map(c=>c.slug).filter(x=>!o.rm.includes(x)).concat(o.add.filter(x=>all.some(c=>c.slug===x)));}
const hidN=()=>{const o=ov[ovKey()];return o&&o.rm?o.rm.length:0;};
function toggleMember(slug){{const o=ovGet(),inBase=baseGroup().some(c=>c.slug===slug),cur=groupSlugs().includes(slug);if(cur){if(inBase)o.rm.push(slug);else o.add=o.add.filter(x=>x!==slug);}else{if(inBase)o.rm=o.rm.filter(x=>x!==slug);else o.add.push(slug);}ovSave();}}
const reload=()=>{setClients();reset();render();load();histLoad();prLoad();};let pr={};let pg=0,tabAll=[];let snap=false;let exp=false;let arr=null;const ARR_MS=15000;const autoSum={};
const todayS=fmt(new Date());
function parsePR(s){
s=String(s||'');let best=null;
const add=(w,r)=>{w=+w;r=r?Math.round(+r):0;if(!(w>=10&&w<=1000))return;if(r>50)r=0;if(!best||w>best.w||(w===best.w&&r>best.r))best={w,r};};
let m;
const re1=/(\d{2,4}(?:\.\d+)?)\s*(?:lbs?|#)?\s*(?:x|×)\s*(\d{1,2})\b/gi;while((m=re1.exec(s)))add(m[1],m[2]);
const re2=/\b(\d{1,2})\s*(?:x|×|reps?)\s*(?:@|at)?\s*(\d{2,4}(?:\.\d+)?)\b/gi;while((m=re2.exec(s)))add(m[2],m[1]);
const re3=/([\d./]+)\s*@\s*([\d/]+)/g;
while((m=re3.exec(s))){const R=m[1].includes('.')?[m[1].split('.')[0]]:m[1].split('/');const W=m[2].split('/');W.forEach((w,k)=>add(w,R[k]!==undefined?R[k]:(R.length===1?R[0]:0)));}
if(!best){const n=(s.replace(/\d+(?:\.\d+)?\s*(?:reps?|sec|secs|s|min|mins|cal|cals|meters?|m|sets?|rounds?|yds?|ft)\b/gi,'').match(/\d+(?:\.\d+)?/g)||[]).map(Number).filter(x=>x>=10&&x<=1000);if(n.length)best={w:Math.max(...n),r:0};}
return best;
}
const prTxt=p=>p.w+' lbs'+(p.r?' × '+p.r+' reps':'');
async function prLoad(){
const need=clients.filter(c=>!pr[c.slug]);
for(let k=0;k<need.length;k+=2){
await Promise.all(need.slice(k,k+2).map(async c=>{
try{
let cached=null;try{cached=JSON.parse(localStorage.getItem('lhp_pr2_'+c.slug)||'null');}catch(e){}
if(cached&&cached.d===todayS){pr[c.slug]=cached.m;return;}
const r=await fetch(`/api/v1/clients/${c.slug}/workouts.json?start_date=2020-01-01&end_date=${fmt(new Date(Date.now()+864e5))}&shape=lean`,H);const j=await r.json();const a=Array.isArray(j)?j:(j.workouts||[]);
const m={};
a.filter(w=>w.due_date&&w.due_date.replace(/\//g,'-')<todayS).forEach(w=>(w.workout_items||[]).forEach(i=>{
if(i.status!=='completed'||!i.result)return;const p=parsePR(i.result);if(!p)return;const key=bare(i.name);
if(!m[key]||p.w>m[key].w||(p.w===m[key].w&&p.r>m[key].r))m[key]=p;}));
pr[c.slug]=m;try{localStorage.setItem('lhp_pr2_'+c.slug,JSON.stringify({d:todayS,m}));}catch(e){}
}catch(e){}
}));
if(!pick&&window.__lhpBoard){sig='';render();}
}
}
const lastIdx={},lastChange={},restEnd={},flashUntil={},active={},tmStart={},tmEst={};
const hasTime=c=>(c.tags||[]).some(t=>/\d{1,2}:\d{2}/.test(t.name));
const coachOf=c=>{const t=(c.tags||[]).find(t=>/^coach\b/i.test(t.name));return t?t.name.replace(/^coach\s*/i,''):(c._coach||'Other');};
function estSecs(items){
const t=items.map(i=>i.description||'').join('\n');
const em=t.match(/(\d+)\s*-?\s*min(?:ute)?s?\s*(?:emom|amrap)/i);
if(em)return +em[1]*60;
let sets=0;[...t.matchAll(/(\d+)(?:\s*[-–]\s*(\d+))?\s*sets?\b/gi)].forEach(x=>{sets=Math.max(sets,+(x[2]||x[1]));});
if(!sets)return 0;
const rs=[...t.matchAll(/rest\s*(\d+)(?:\s*[-–]\s*(\d+))?\s*(seconds|secs|sec|s|minutes|mins|min|m)\b/gi)];
let rest=60;if(rs.length){const x=rs[rs.length-1];const v=+(x[2]||x[1]);rest=/^m/i.test(x[3])?v*60:v;}
let tot=sets*(items.length*40+rest);if(/prep/i.test(t))tot+=130;
return Math.max(120,Math.min(1500,tot));
}
const css=`
#lhp{position:fixed;inset:0;z-index:2147483647;background:#0a0a0a;color:#fff;font-family:-apple-system,Helvetica,Arial,sans-serif;display:flex;flex-direction:column;padding:1.2vmin;box-sizing:border-box;overflow:hidden}
#lhp *{box-sizing:border-box}
#lhp .hd{display:flex;align-items:center;gap:1.2vmin;height:5vmin;flex:none;margin-bottom:1vmin}
#lhp .brand{font-weight:800;letter-spacing:.2em;font-size:2vmin;color:#2ecc71}
#lhp .day{font-size:2.2vmin;font-weight:700;margin:0 1vmin}
#lhp .sp{flex:1}
#lhp .ts{font-size:1.6vmin;color:#777}
#lhp button{background:#1b1b1b;color:#fff;border:1px solid #333;border-radius:1vmin;font-size:2vmin;padding:.6vmin 1.6vmin;cursor:pointer}
#lhp button:active,#lhp button.on{background:#2ecc71;color:#000;border-color:#2ecc71}
#lhp .grid{flex:1;min-height:0;display:grid;gap:1.2vmin;grid-template-columns:repeat(var(--c),1fr);grid-template-rows:repeat(var(--r),1fr)}
@media (orientation:portrait){#lhp .grid{grid-template-columns:repeat(var(--pc),1fr);grid-template-rows:repeat(var(--pr),1fr)}}
#lhp.dense .it h3{font-size:calc(2.3vmin*var(--z,1))}#lhp.dense .it p{font-size:calc(1.8vmin*var(--z,1))}#lhp.dense .nm{font-size:1.9vmin}#lhp.dense .tile{padding:1.2vmin 1.4vmin}#lhp.dense .big{font-size:3.2vmin}
#lhp .lg{background:none;border:0;padding:0;height:4.4vmin;display:flex;align-items:center}
#lhp .lg img{height:100%;display:block}
#lhp .tabs{display:flex;gap:.8vmin;flex:none;margin-bottom:1vmin;overflow-x:auto;white-space:nowrap}
#lhp .tabs button{font-size:1.8vmin;padding:.4vmin 1.4vmin;color:#aaa}
#lhp .it{position:relative}
#lhp .ck{position:absolute;top:1vmin;right:1vmin;width:4vmin;height:4vmin;border-radius:50%;padding:0;font-size:2.2vmin;line-height:1;background:transparent;border:.25vmin solid #444;color:#555;display:flex;align-items:center;justify-content:center}
#lhp .ck img{height:68%;opacity:.35}
#lhp .ck.dn{background:#12281b;border-color:#2ecc71}
#lhp .ck.dn img{opacity:1}
#lhp .it .pr{margin-top:.6vmin;font-size:calc(1.7vmin*var(--z,1));color:#7d7d7d;font-weight:600}
#lhp .it.hasck h3{padding-right:9vmin}
#lhp .toast{position:fixed;left:50%;bottom:3vmin;transform:translateX(-50%);background:#f5a623;color:#000;font-size:2.2vmin;font-weight:700;padding:1vmin 2.4vmin;border-radius:2vmin;z-index:2}
#lhp .grid.n5 .tile{grid-column:span 2}#lhp .grid.n5 .tile:nth-child(4){grid-column:2/span 2}#lhp .grid.n5 .tile:nth-child(5){grid-column:4/span 2}@media (orientation:portrait){#lhp .grid.n5 .tile:nth-child(4){grid-column:span 2}#lhp .grid.n5 .tile:nth-child(5){grid-column:2/span 2}}
#lhp .tile .rmx{position:absolute;top:.5vmin;left:.7vmin;z-index:3;font-size:1.7vmin;line-height:1;padding:.4vmin .8vmin;background:transparent;border:0;color:#fff;opacity:.28;border-radius:1vmin}#lhp .tile .rmx.arm{opacity:1;background:#c0392b;color:#fff;font-weight:800}#lhp .nm.t .l{margin-left:2.6vmin}
#lhp .tile{background:#141414;border:.3vmin solid #262626;border-radius:1.6vmin;padding:1.6vmin 2vmin;display:flex;flex-direction:column;min-height:0;overflow:hidden;cursor:pointer;position:relative;transition:border-color .5s,background .5s}
#lhp .tile.fin{border-color:#2ecc71;background:#0e1a13}
#lhp .tile.late{border-color:#f5a623;background:#1d1608}
#lhp .tile.flash{border-color:#2ecc71;box-shadow:0 0 3vmin #2ecc7188}
#lhp .nm{font-size:2.3vmin;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#2ecc71;display:flex;gap:1vmin;align-items:center;flex:none}
#lhp .nm .n{flex:1}#lhp .nm.t{display:grid;grid-template-columns:1fr auto 1fr;gap:1vmin}#lhp .nm.t .n{text-align:center;font-size:2.6vmin}#lhp.dense .nm.t .n{font-size:2vmin}#lhp .nm.t .l{justify-self:start}#lhp .nm.t .r{justify-self:end}
#lhp .nm span{font-size:1.7vmin;color:#888;font-weight:600;letter-spacing:0}
#lhp .nm .rest{font-size:2.2vmin;font-weight:800;background:#2ecc71;color:#000;border-radius:2vmin;padding:.2vmin 1.2vmin;letter-spacing:0}
#lhp .nm .rest.low{background:#f5a623}
#lhp .nm .rest.go{background:#fff;animation:lhpb .5s infinite alternate}
@keyframes lhpb{to{opacity:.35}}
#lhp .bar{height:.7vmin;background:#262626;border-radius:1vmin;margin:1vmin 0 1.2vmin;flex:none;overflow:hidden}
#lhp .bar i{display:block;height:100%;background:#2ecc71;transition:width .6s}
#lhp .cur{flex:1;min-height:0;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-start;gap:calc(1.2vmin*var(--z,1))}
#lhp .cur.slide{animation:lhpslide .5s ease-out}
@keyframes lhpslide{from{transform:translateX(100%);opacity:0}to{transform:none;opacity:1}}
#lhp .it{background:#1c1c1c;border-radius:1.2vmin;padding:1.2vmin 1.6vmin;flex:0 0 auto}
#lhp .it.dn{opacity:.45;border-left:.6vmin solid #2ecc71}#lhp .it.cp{padding:.8vmin 1.6vmin}#lhp .it.cp h3{margin:0;font-size:calc(2.2vmin*var(--z,1))}#lhp .it.cp .rs{margin-top:.2vmin;font-size:calc(1.7vmin*var(--z,1))}
#lhp .it h3{margin:0 0 .6vmin;font-size:calc(3.1vmin*var(--z,1));line-height:1.15;font-weight:800}
#lhp .it h3 b{color:#2ecc71;margin-right:.8vmin}
#lhp .it p{margin:0;font-size:calc(2.3vmin*var(--z,1));line-height:1.25;color:#cfcfcf;white-space:pre-line}
#lhp .it .rs{margin-top:.6vmin;font-size:calc(2vmin*var(--z,1));color:#2ecc71;font-weight:700}
#lhp .it .lw{margin-top:.6vmin;font-size:calc(1.9vmin*var(--z,1));color:#f5c518;font-weight:700}
#lhp .it .np{margin-top:.6vmin;font-size:calc(2vmin*var(--z,1));color:#f5c518;font-weight:800;letter-spacing:.05em}
#lhp .tile.gold{border-color:#f5c518;box-shadow:0 0 2.5vmin #f5c51877}
#lhp .nm small{font-size:1.5vmin;color:#777;font-weight:600;letter-spacing:.04em;text-transform:none;margin-left:.8vmin}
#lhp .nm .tm{font-size:2vmin;font-weight:800;color:#2ecc71;letter-spacing:0;text-transform:none}
#lhp .nm .tm i{font-style:normal;font-size:1.5vmin;color:#6b6b6b;font-weight:600;margin-left:.6vmin}
#lhp .pv{flex:1;min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:calc(.9vmin*var(--z,1))}
#lhp .pvh{display:flex;justify-content:space-between;font-size:1.8vmin;color:#2ecc71;font-weight:800;letter-spacing:.16em;margin-bottom:.3vmin}#lhp .pvh span{color:#777;letter-spacing:.04em}#lhp .pvc{background:#1c1c1c;border-radius:1.2vmin;border-left:.5vmin solid #2ecc71;padding:calc(1.1vmin*var(--z,1)) 1.6vmin;flex:none;font-size:calc(2.6vmin*var(--z,1));font-weight:700;line-height:1.2;color:#f2f2f2}#lhp.dense .pvc{font-size:calc(1.9vmin*var(--z,1))}#lhp .pvi+.pvi{margin-top:calc(.8vmin*var(--z,1))}#lhp .pvi b{display:block;font-size:calc(2.5vmin*var(--z,1));line-height:1.15;font-weight:800;color:#fff}#lhp .pvi em{display:block;font-style:normal;font-size:calc(1.9vmin*var(--z,1));line-height:1.2;color:#b5b5b5;margin-top:.3vmin}#lhp.dense .pvi b{font-size:calc(1.9vmin*var(--z,1))}#lhp.dense .pvi em{font-size:calc(1.5vmin*var(--z,1))}
#lhp .pv{justify-content:center}
#lhp .go{flex:none;margin-top:1vmin;background:transparent;border:.3vmin solid #2ecc71;color:#2ecc71;font-size:2.4vmin;font-weight:800;padding:1vmin}
#lhp .it .rb{position:absolute;top:1.3vmin;right:1.2vmin;opacity:.75}#lhp .it .rb.ed{right:6vmin}#lhp .rb{position:relative;width:3.6vmin;height:3.6vmin;padding:0;border:0;border-radius:50%;background:transparent;flex:none}#lhp .rb:active{background:transparent;color:#fff}#lhp .rb svg{position:absolute;inset:0;width:100%;height:100%}#lhp .rb span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:1.25vmin;font-weight:700;color:#d9b23a;letter-spacing:0}#lhp .rb.go span{color:#000}#lhp .rb.go{background:#f5c518;animation:lhpb .5s infinite alternate}#lhp .rs2{background:transparent;border:0;color:#666;padding:0 .4vmin;font-size:2.2vmin}#lhp .rs2:active{background:transparent;color:#f5c518}#lhp .av{flex:1;min-height:0;display:flex;flex-direction:column;animation:lhpz .5s ease-out}@keyframes lhpz{from{transform:scale(.94);opacity:0}to{transform:none;opacity:1}}#lhp .avh{position:relative;text-align:center;flex:none;padding:1vmin 0 2vmin}#lhp .avk{font-size:1.8vmin;color:#2ecc71;font-weight:800;letter-spacing:.4em}#lhp .avn{font-size:8vmin;font-weight:800;line-height:1.05;letter-spacing:.06em;text-transform:uppercase;margin:.4vmin 0}#lhp .avs{font-size:1.8vmin;color:#777;font-weight:700;letter-spacing:.2em}#lhp .avr{position:absolute;right:1vmin;top:1vmin;width:7vmin;height:7vmin}#lhp .avr svg{position:absolute;inset:0;width:100%;height:100%}#lhp .avr span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:2.6vmin;font-weight:800;color:#2ecc71}#lhp .avg{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(46vmin,1fr));gap:1.4vmin;align-content:start}#lhp .avc{background:#151515;border:.2vmin solid #242424;border-left:.5vmin solid #2ecc71;border-radius:1.4vmin;padding:1.6vmin 2vmin}#lhp .avi+.avi{margin-top:1.4vmin;padding-top:1.4vmin;border-top:.15vmin solid #262626}#lhp .avt{display:flex;justify-content:space-between;align-items:baseline;gap:1vmin}#lhp .avi b{font-size:2.9vmin;line-height:1.15;font-weight:800}#lhp .avi s{text-decoration:none;font-size:1.6vmin;color:#d9b23a;font-weight:700;white-space:nowrap;opacity:.8}#lhp .avi em{display:block;font-style:normal;font-size:2.1vmin;line-height:1.25;color:#bdbdbd;margin-top:.5vmin}#lhp .avi u{display:block;text-decoration:none;font-size:1.7vmin;color:#7d7d7d;font-weight:600;margin-top:.4vmin}#lhp .skip{flex:none;align-self:center;margin-top:1.4vmin;display:flex;align-items:center;gap:1vmin;background:transparent;border:.25vmin solid #333;color:#888;font-size:2vmin;border-radius:3vmin;padding:.6vmin 2vmin .6vmin 1vmin}#lhp .skip img{height:3.6vmin}#lhp .blk{position:absolute;right:1.4vmin;bottom:1.4vmin;width:6vmin;height:6vmin;border-radius:50%;padding:0;background:#161616;border:.3vmin solid #3c5a46;display:flex;align-items:center;justify-content:center}#lhp .blk img{height:66%;opacity:.85}#lhp .blk:active{background:#12281b;border-color:#2ecc71}#lhp .nx{padding-right:8vmin}#lhp .snap{flex:1;min-height:0;display:grid;grid-template-columns:repeat(var(--n),1fr);gap:1.2vmin}#lhp .scc{background:#141414;border:.3vmin solid #262626;border-radius:1.6vmin;padding:1.2vmin;display:flex;flex-direction:column;min-height:0;overflow:auto}#lhp .sch{display:flex;justify-content:space-between;align-items:baseline;color:#2ecc71;font-weight:800;font-size:calc(2.3vmin*var(--s,1));text-transform:uppercase;letter-spacing:.06em;margin-bottom:1vmin;flex:none}#lhp .sch small{color:#777;font-size:calc(1.6vmin*var(--s,1));letter-spacing:0}#lhp .scb{background:#1c1c1c;border-radius:1vmin;border-left:.45vmin solid #333;padding:calc(.9vmin*var(--z,1)) 1.1vmin;margin-bottom:calc(.9vmin*var(--z,1));flex:none}#lhp .scb.cu{border-left-color:#2ecc71;background:#1d2a22}#lhp .scb.dn{opacity:.4}#lhp .sci+.sci{margin-top:.7vmin}#lhp .sci b{display:block;font-size:calc(2vmin*var(--s,1)*var(--z,1));line-height:1.15;font-weight:800}#lhp .sci em{display:block;font-style:normal;font-size:calc(1.55vmin*var(--s,1)*var(--z,1));line-height:1.2;color:#aaa;margin-top:.2vmin}#lhp .sci u{display:block;text-decoration:none;font-size:calc(1.45vmin*var(--s,1)*var(--z,1));color:#2ecc71;font-weight:700;margin-top:.2vmin}#lhp .pgl{margin-left:auto;display:flex;align-items:center;gap:.8vmin;color:#888;font-size:1.8vmin;font-weight:700;flex:none}#lhp .pgl button{padding:.2vmin 1.4vmin}#lhp .sm{flex:1;min-height:0;overflow:auto}
#lhp .sm{overflow:auto;flex:1;min-height:0}#lhp .cnc .tw{color:#f5c518;font-weight:800}#lhp .cnc .wt{color:#ffb8a8}#lhp .cnc .fbk{color:#9cc4e8}#lhp .cnc .fbk.hot{color:#ff9a6b}#lhp .cnc .pg{color:#8a8a8a;font-size:1.8vmin}#lhp .cnc .ok{color:#6a8a6a}
#lhp .cnc .pf{color:#2ecc71;font-weight:800}#lhp .cnc .pg2{color:#cfcfcf}#lhp .cnc .im{color:#bdbdbd;font-size:1.9vmin}#lhp .cnc b{color:#fff;font-weight:700;margin-right:.6vmin}
#lhp .cng{grid-template-columns:repeat(auto-fill,minmax(44vmin,1fr))}#lhp .cnc .cr{margin-top:1.2vmin;padding-left:1.2vmin;border-left:.5vmin solid #444}#lhp .cnc .ct{font-size:2.3vmin;line-height:1.25;color:#e8e8e8}#lhp .cnc .ct b{font-size:1.8vmin;letter-spacing:.1vmin;margin-right:1vmin;color:#fff}#lhp .cnc .cdt{font-size:1.8vmin;color:#888;white-space:nowrap}#lhp .cnc .cd{font-size:2vmin;color:#2ecc71;margin-top:.3vmin}#lhp .cr.k-alert{border-color:#e74c3c}#lhp .cr.k-pain{border-color:#ff7043}#lhp .cr.k-skip{border-color:#f5c518}#lhp .cr.k-hard{border-color:#ff9a3c}#lhp .cr.k-easy{border-color:#4aa8ff}#lhp .cr.k-bday{border-color:#f5c518}#lhp .cr.k-alert b{color:#ff6b5b}#lhp .cr.k-pain b{color:#ff8a65}#lhp .cr.k-skip b{color:#f5c518}#lhp .cr.k-hard b{color:#ffb074}#lhp .cr.k-easy b{color:#7cc0ff}
#lhp .smh{display:flex;gap:3vmin;font-size:2.6vmin;font-weight:800;color:#2ecc71;margin:1vmin 0 1.6vmin}
#lhp .smh span{color:#fff}
#lhp .smg{display:grid;grid-template-columns:repeat(auto-fill,minmax(36vmin,1fr));gap:1.2vmin}
#lhp .smc{background:#141414;border:.3vmin solid #262626;border-radius:1.6vmin;padding:1.6vmin 2vmin;font-size:2.1vmin;color:#cfcfcf}
#lhp .smc.gold{border-color:#f5c518}
#lhp .smc .nm{margin-bottom:1vmin}
#lhp .smc div{margin-top:.6vmin}
#lhp .smc .pp{color:#f5c518;font-weight:700}
#lhp .msg{margin:auto;font-size:3vmin;color:#777;text-align:center}
#lhp .big{margin:auto;font-size:4.4vmin;font-weight:800;color:#2ecc71;text-align:center}
#lhp .sum{text-align:center;font-size:2.4vmin;color:#cfcfcf;margin-top:1vmin}
#lhp .cm{margin-top:1.4vmin;font-size:2.2vmin;color:#fff;background:#1c1c1c;border-radius:1.2vmin;padding:1vmin 1.4vmin;text-align:center}
#lhp .nx{font-size:1.7vmin;color:#888;margin-top:.8vmin;flex:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#lhp .focus{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(38vmin,1fr));gap:1.2vmin;align-content:start}
#lhp .st{background:#141414;border:1px solid #262626;border-radius:1.4vmin;padding:1.4vmin}
#lhp .st.cu{border-color:#2ecc71;box-shadow:0 0 0 .3vmin #2ecc7155}
#lhp .st.dn{opacity:.5}
#lhp .st .it{margin-bottom:1vmin;flex:none}
#lhp .pk{flex:1;min-height:0;overflow:auto}
#lhp .pk .row{display:flex;flex-wrap:wrap;gap:1vmin;margin:0 0 1.6vmin}
#lhp .pk .row button{font-size:2.2vmin}
#lhp .pk h4{margin:1vmin 0;font-size:2.2vmin;color:#2ecc71}
#lhp .nm .n{text-align:center}
#lhp .sc{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;gap:1vmin;padding-bottom:7vmin;scrollbar-width:none}
#lhp .sc::-webkit-scrollbar{display:none}
#lhp .blkc{flex:none;position:relative}
#lhp .blkc.cu{display:flex;flex-direction:column;gap:1vmin}
#lhp .blkc.dn,#lhp .blkc.fu{background:#181818;border-radius:1.1vmin;padding:.9vmin 1.4vmin;border-left:.5vmin solid #2a2a2a}
#lhp .blkc.dn{opacity:.4;border-left-color:#2ecc71}
#lhp .blkc.fu{opacity:.8}
#lhp .blkc .cl+.cl{margin-top:.6vmin}
#lhp .blkc .cl b{display:block;font-size:2.2vmin;line-height:1.15;font-weight:800}
#lhp .blkc .cl em{display:block;font-style:normal;font-size:1.8vmin;color:#aaa;margin-top:.1vmin}
#lhp .blkc .ck2{position:absolute;right:1.2vmin;top:.8vmin;color:#2ecc71;font-weight:800;font-size:2vmin}
#lhp .it p{font-size:calc(3vmin*var(--z,1));color:#e6e6e6;font-weight:600}
#lhp .blk{width:4.6vmin;height:4.6vmin;right:1.2vmin;bottom:1.2vmin;background:#141414;border-color:#2c3a31;opacity:.55}
#lhp .bk{position:absolute;left:1.2vmin;bottom:1.2vmin;width:4.6vmin;height:4.6vmin;border-radius:50%;padding:0;background:#141414;border:.25vmin solid #2a2a2a;color:#777;font-size:2vmin;line-height:1;display:flex;align-items:center;justify-content:center;opacity:.5}
#lhp .bk:active{opacity:1;color:#fff}
#lhp .blk:active{opacity:1}
#lhp .it .rb{top:.9vmin;right:1vmin;opacity:1}
#lhp .rb{width:7vmin;height:7vmin}
#lhp .rb span{font-size:2.7vmin;font-weight:800;color:#ffd23f}
#lhp .rb.run{filter:drop-shadow(0 0 1.2vmin #ffd23fcc)}
#lhp .rb.run span{color:#fff}
#lhp .rb.low{animation:lhpb .5s infinite alternate}
#lhp .it.hasck h3{padding-right:8vmin}
#lhp .sch{display:grid;grid-template-columns:1fr auto 1fr;justify-content:initial}
#lhp .sch span{text-align:center}#lhp .sch small{justify-self:end}
#lhp .scc{overflow:hidden}
#lhp .scbody{flex:1;min-height:0;overflow:auto}
#lhp .scb{opacity:.3}#lhp .scb.cu{opacity:1}
#lhp .scf{flex:none;display:flex;gap:1vmin;margin-top:1vmin}
#lhp .sb{flex:1;font-size:2.1vmin;font-weight:800;padding:1vmin;border-radius:1.2vmin;background:#1a1a1a;border:.25vmin solid #333;color:#aaa}
#lhp .sb.go2{border-color:#2ecc71;color:#2ecc71}
#lhp .sb:disabled{opacity:.25}
#lhp .sm .smh{justify-content:center;flex-wrap:wrap}
#lhp .smc{text-align:center}
#lhp .smc .nm{justify-content:center}
#lhp .smc .chip{display:inline-flex;gap:1vmin;align-items:center;font-size:1.7vmin;font-weight:800;letter-spacing:.12em;color:#888;margin:.4vmin 0 .8vmin}
#lhp .smc .chip span{color:#fff;letter-spacing:0;font-size:2vmin}
#lhp .smc .chip.done{color:#2ecc71}#lhp .smc .chip.prog{color:#f5c518}
#lhp .smc .bar{margin:.4vmin 0 1vmin}
#lhp .smc .ln{font-size:2.1vmin;color:#e0e0e0}
#lhp .smc .sk{color:#ff9a6b;font-size:1.9vmin}
#lhp .smc .cmt{font-size:1.9vmin;color:#9cc4e8}
#lhp .smc.done{border-color:#2ecc7188}#lhp .smc.prog{border-color:#f5c51877}
#lhp .zv{flex:1;min-height:0;display:flex;flex-direction:column;transform-origin:top left;background:#0b0b0b}
#lhp .zh{display:grid;grid-template-columns:auto 1fr auto;gap:1.4vmin;align-items:center;margin-bottom:1vmin;flex:none}
#lhp .zn{text-align:center;font-size:4vmin;font-weight:800;color:#2ecc71;letter-spacing:.06em;text-transform:uppercase}
#lhp .zm{font-size:2vmin;color:#aaa;font-weight:700}
#lhp .zs{flex:1;min-height:0;overflow:auto}
#lhp .zg{display:grid;grid-template-columns:repeat(auto-fill,minmax(52vmin,1fr));gap:1.2vmin;align-content:start}
#lhp .zb{background:#141414;border:.25vmin solid #262626;border-radius:1.4vmin;padding:1.2vmin}
#lhp .zb.cu{border-color:#2ecc71;box-shadow:0 0 0 .3vmin #2ecc7155}#lhp .zb.dn{opacity:.6}
#lhp .zk{font-size:1.7vmin;font-weight:800;letter-spacing:.2em;color:#2ecc71;margin-bottom:.8vmin}
#lhp .zr{background:#1c1c1c;border-radius:1.1vmin;padding:1.1vmin 1.4vmin;margin-bottom:1vmin}
#lhp .zr h3{margin:0;font-size:2.8vmin;line-height:1.15;font-weight:800}
#lhp .zr p{margin:.4vmin 0 0;font-size:2.2vmin;color:#d8d8d8;white-space:pre-line;line-height:1.25}
#lhp .zc{display:grid;grid-template-columns:1fr 1fr;gap:1vmin;margin-top:.8vmin}
#lhp .zl{background:#121212;border-radius:.9vmin;padding:.6vmin 1vmin;font-size:2vmin;color:#f5c518;font-weight:700}
#lhp .zl.p{color:#fff}#lhp .zl small{display:block;font-size:1.4vmin;letter-spacing:.14em;color:#777;font-weight:800}
#lhp .zi{display:flex;gap:1vmin;margin-top:.9vmin;align-items:center}
#lhp .zi .ri{flex:1;min-width:0;font-size:2.4vmin;padding:.9vmin 1.2vmin;background:#0f0f0f;border:.25vmin solid #333;border-radius:1vmin;color:#fff}
#lhp .zi button:not(.ck){font-size:2.1vmin;font-weight:800;padding:.9vmin 1.8vmin;color:#2ecc71;border-color:#2ecc71}
#lhp .zi .ck{position:static;flex:none}
#lhp .sc{flex-direction:row;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;gap:1.2vmin;padding-bottom:0;position:relative;overscroll-behavior-x:contain}
#lhp .blkc{flex:0 0 100%;min-width:0;scroll-snap-align:start;overflow-y:auto;padding-bottom:6vmin;box-sizing:border-box}
#lhp .blkc.cu{padding-bottom:6vmin}
#lhp .bl{font-size:1.5vmin;letter-spacing:.18em;color:#777;font-weight:800;margin-bottom:.6vmin;flex:none}
#lhp .blkc.cu .bl{color:#2ecc71}
#lhp .blkc.dn,#lhp .blkc.fu{opacity:.55}
#lhp .blkc .cl b{font-size:2.6vmin}#lhp .blkc .cl em{font-size:2.1vmin}
#lhp .it .rb{top:1vmin;right:1vmin}
#lhp .rb{width:4.6vmin;height:4.6vmin}
#lhp .rb span{font-size:1.6vmin}
#lhp .rb.run{filter:drop-shadow(0 0 .6vmin #ffd23f99)}
#lhp .it.hasck h3{padding-right:6vmin}
#lhp .zn2{background:transparent;border:0;padding:.2vmin 1.2vmin;color:#2ecc71;font:inherit;font-weight:800;letter-spacing:inherit;text-transform:uppercase;text-decoration:underline;text-decoration-color:#2ecc7155;text-underline-offset:.5vmin}
#lhp .scf{justify-content:space-between}
#lhp .sb{flex:none;width:4.4vmin;height:4.4vmin;padding:0;border-radius:50%;font-size:1.9vmin;line-height:1;background:#141414;border:.25vmin solid #2a2a2a;color:#888;opacity:.55;display:flex;align-items:center;justify-content:center}
#lhp .sb.go2{border-color:#2c3a31;color:#2ecc71}
#lhp .sb:disabled{opacity:.15}
#lhp .zs{overflow-x:hidden}
#lhp .znotes{display:grid;grid-template-columns:repeat(auto-fit,minmax(40vmin,1fr));gap:1vmin;margin-bottom:1.6vmin}
#lhp .zn3{background:#141414;border:.25vmin solid #2a2a2a;border-left:.5vmin solid #f5c518;border-radius:1.1vmin;padding:1vmin 1.4vmin;font-size:2vmin;line-height:1.25;color:#e0e0e0}
#lhp .zn3 small{display:block;font-size:1.4vmin;letter-spacing:.14em;color:#f5c518;font-weight:800;text-transform:uppercase;margin-bottom:.3vmin}
#lhp .zcol{will-change:transform}
#lhp .zbk{margin-bottom:1.4vmin}
#lhp .zrow{display:grid;grid-template-columns:30% 7vmin 1fr;align-items:start;margin-bottom:1.4vmin}
#lhp .zchip{background:#141414;border:.3vmin solid #2ecc71;border-radius:1.4vmin;padding:1.2vmin 1.6vmin;text-align:center}
#lhp .zchip b{display:block;font-size:2.6vmin;line-height:1.15;font-weight:800}
#lhp .zchip em{display:block;font-style:normal;font-size:2.1vmin;color:#cfcfcf;margin-top:.4vmin}
#lhp .zchip.dn{opacity:.5}
#lhp .zline{align-self:start;margin-top:3.2vmin;height:.3vmin;background:#2ecc71;position:relative;transform-origin:left}
#lhp .zline::after{content:'';position:absolute;right:-.5vmin;top:-.55vmin;width:1.4vmin;height:1.4vmin;border-radius:50%;background:#2ecc71}
#lhp .zdet{background:#181818;border:.25vmin solid #2a2a2a;border-radius:1.4vmin;padding:1.2vmin 1.6vmin}
#lhp .zdet.dn{opacity:.65}
#lhp .zt{display:flex;justify-content:space-between;align-items:baseline}
#lhp .zt h3{margin:0;font-size:2.6vmin;font-weight:800}#lhp .zt span{color:#2ecc71;font-weight:800;font-size:1.7vmin;letter-spacing:.1em}
#lhp .zdet p{margin:.5vmin 0 0;font-size:2.2vmin;color:#dcdcdc;white-space:pre-line;line-height:1.3}
#lhp .zv.an .zdet,#lhp .zv.an .znotes{animation:lhpzin .6s cubic-bezier(.2,.8,.25,1) both;animation-delay:calc(.95s + var(--i,0)*.12s)}
#lhp .zv.an .znotes{animation-delay:.9s}
#lhp .zv.an .zline{animation:lhpzl .45s ease-out both;animation-delay:calc(.8s + var(--i,0)*.12s)}
#lhp .zv.an .zdet{animation-delay:calc(1s + var(--i,0)*.12s)}
@keyframes lhpzin{from{opacity:0;transform:translateX(6vmin)}to{opacity:1;transform:none}}
@keyframes lhpzl{from{transform:scaleX(0);opacity:0}to{transform:scaleX(1);opacity:1}}
#lhp .it .rb{top:.9vmin;right:.9vmin}
#lhp .rb{width:3.2vmin;height:3.2vmin}
#lhp .rb span{font-size:1.15vmin}
#lhp .rb.run{filter:none}
#lhp .it.hasck h3{padding-right:4.5vmin}
#lhp .gv{flex:1;min-height:0;display:flex;flex-direction:column}
#lhp .gh{flex:none;text-align:center;font-size:3.2vmin;font-weight:800;color:#2ecc71;margin-bottom:1.2vmin}
#lhp .gh small{display:block;font-size:1.8vmin;color:#888;font-weight:700;letter-spacing:.1em;margin-top:.2vmin}
#lhp .gg{flex:1;min-height:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(30vmin,1fr));grid-auto-rows:minmax(0,1fr);gap:1.2vmin}
#lhp .gc{background:#141414;border:.3vmin solid #262626;border-radius:1.6vmin;padding:1.4vmin 1.6vmin;display:flex;flex-direction:column;min-height:0}
#lhp .gt{flex:none;text-align:center;font-size:2.5vmin;font-weight:800;color:#2ecc71;text-transform:uppercase;letter-spacing:.06em;margin-bottom:1vmin;padding-bottom:.8vmin;border-bottom:.2vmin solid #262626}
#lhp .gb{flex:1;min-height:0;overflow:auto}
#lhp .gln{font-size:calc(2.2vmin*var(--z,1));line-height:1.25;color:#e8e8e8;margin:.3vmin 0}
#lhp .ghd{font-size:calc(2.3vmin*var(--z,1));font-weight:800;color:#2ecc71;margin:.9vmin 0 .2vmin;line-height:1.2}
#lhp .gtm{font-size:calc(2vmin*var(--z,1));color:#f5c518;font-weight:800;margin-bottom:.4vmin}
#lhp .gnote{font-size:calc(1.9vmin*var(--z,1));color:#9a9a9a;font-style:italic;margin:.3vmin 0;line-height:1.25}
#lhp .gsp{height:calc(.8vmin*var(--z,1))}
#lhp .gtmr{display:flex;align-items:center;justify-content:center;gap:1.6vmin;margin-top:.6vmin}
#lhp .gclk{font-size:5vmin;font-weight:800;color:#fff;letter-spacing:.04em;font-variant-numeric:tabular-nums;min-width:14vmin}
#lhp .gtb{width:5vmin;height:5vmin;border-radius:50%;padding:0;font-size:2vmin;line-height:1;background:#141414;border:.25vmin solid #333;color:#2ecc71;display:flex;align-items:center;justify-content:center}
#lhp .gwin{font-size:2.2vmin;color:#f5c518;font-weight:800;min-width:26vmin;text-align:left}
#lhp .gt small{display:block;font-size:1.5vmin;letter-spacing:.2em;color:#777;font-weight:800;margin-top:.2vmin}
#lhp .gg.one{grid-template-columns:1fr}
#lhp .gb.col{column-width:44vmin;column-gap:3vmin}
#lhp .gc.slide{animation:lhpslide .45s ease-out}
#lhp .gc.slideL{animation:lhpslideL .45s ease-out}
@keyframes lhpslideL{from{transform:translateX(-100%);opacity:0}to{transform:none;opacity:1}}
#lhp .gv{position:relative}
#lhp .gnv{position:absolute;bottom:1.2vmin;width:5.6vmin;height:5.6vmin;border-radius:50%;padding:0;background:#141414;border:.25vmin solid #333;color:#aaa;font-size:2.4vmin;line-height:1;display:flex;align-items:center;justify-content:center;opacity:.7}
#lhp .gnv.l{left:1.4vmin}#lhp .gnv.r{right:1.4vmin}#lhp .gnv:disabled{opacity:.15}
#lhp .gnv:active{opacity:1;color:#fff}
#lhp .gg.one .gc{padding-bottom:7vmin}
#lhp .gb.col{column-width:auto}
#lhp .gseq{display:flex;gap:1.4vmin;align-items:stretch}
#lhp .gseq.v{flex-direction:column}
#lhp .gsg{flex:1;min-width:0;background:#1a1a1a;border-radius:1.2vmin;border-left:.5vmin solid #2ecc71;padding:calc(1.1vmin*var(--z,1)) calc(1.4vmin*var(--z,1))}
#lhp .gsh{font-size:calc(2.8vmin*var(--z,1));font-weight:800;color:#2ecc71;line-height:1.1;margin-bottom:calc(.8vmin*var(--z,1))}
#lhp .gsh small{display:block;font-size:calc(2vmin*var(--z,1));color:#f5c518;font-weight:800;margin-top:.3vmin}
#lhp .grw{display:flex;justify-content:space-between;align-items:baseline;gap:1.4vmin;padding:calc(.7vmin*var(--z,1)) 0;border-top:.15vmin solid #262626}
#lhp .grw:first-of-type{border-top:0}
#lhp .grw span{font-size:calc(2.4vmin*var(--z,1));color:#f0f0f0;line-height:1.2}
#lhp .grw b{font-size:calc(2.4vmin*var(--z,1));color:#2ecc71;font-weight:800;text-align:right;white-space:nowrap}
#lhp .grw.one span{color:#e0e0e0}
#lhp .gintro{margin-bottom:calc(1vmin*var(--z,1))}
#lhp .gin{font-size:calc(2.4vmin*var(--z,1));color:#e8e8e8;font-weight:700;text-align:center}
#lhp .gtr{flex:none;display:flex;align-items:center;justify-content:center;writing-mode:vertical-rl;transform:rotate(180deg);color:#f5c518;font-weight:800;letter-spacing:.2em;font-size:calc(1.8vmin*var(--z,1));text-transform:uppercase;padding:0 .4vmin}
#lhp .gseq.v .gtr{writing-mode:horizontal-tb;transform:none;padding:.4vmin 0}
#lhp .gtm{font-size:calc(2.2vmin*var(--z,1));color:#f5c518;font-weight:800;text-align:center;margin-bottom:calc(.8vmin*var(--z,1))}
#lhp .gb{overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}
#lhp .gb::-webkit-scrollbar{display:none}
#lhp .gtrb{display:table;margin:calc(1.2vmin*var(--z,1)) auto 0;padding:calc(.5vmin*var(--z,1)) 2.6vmin;border:.25vmin solid #f5c518;border-radius:3vmin;color:#f5c518;font-weight:800;letter-spacing:.14em;font-size:calc(1.9vmin*var(--z,1));text-transform:uppercase}
#lhp .gwt{position:absolute;right:8.6vmin;bottom:2.8vmin;font-size:1.8vmin;color:#777;font-weight:700;letter-spacing:.08em}
#lhp .gsg .gnote{margin-top:calc(.7vmin*var(--z,1));padding-top:calc(.5vmin*var(--z,1));font-size:calc(2vmin*var(--z,1));color:#a8a8a8}
#lhp .gintro .gnote{text-align:center;font-size:calc(2vmin*var(--z,1))}
@media (orientation:portrait){#lhp .gseq{flex-direction:column}#lhp .gg.one .gb .grw span,#lhp .gg.one .gb .grw b{font-size:calc(2.1vmin*var(--z,1))}}
#lhp .scb{padding:calc(.7vmin*var(--z,1)) 1vmin;margin-bottom:calc(.7vmin*var(--z,1))}
#lhp .sci+.sci{margin-top:calc(.5vmin*var(--z,1))}
#lhp .sci b{font-size:calc(1.8vmin*var(--s,1)*var(--z,1));display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
#lhp .sci em{font-size:calc(1.45vmin*var(--s,1)*var(--z,1));color:#2ecc71;font-weight:700;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
#lhp .scb.cu .sci em{color:#6fe3a0}
#lhp .scb{opacity:.55}#lhp .scb.cu{opacity:1}
#lhp .scb.cu .sci b{font-size:calc(2.6vmin*var(--s,1)*var(--z,1))}
#lhp .scb.cu .sci em{font-size:calc(2vmin*var(--s,1)*var(--z,1))}
#lhp .scb.mini .sci b{font-size:calc(1.5vmin*var(--s,1)*var(--z,1))}
#lhp .scb.mini .sci em{font-size:calc(1.25vmin*var(--s,1)*var(--z,1));color:#9a9a9a}
#lhp .scb.dn .sci em{color:#6fae8a}
#lhp .scb.mini{padding:calc(.5vmin*var(--z,1)) .9vmin;margin-bottom:calc(.5vmin*var(--z,1))}
#lhp .blkc .cl b{font-size:calc(2.4vmin*var(--z,1))}
#lhp .blkc .cl em{font-size:calc(1.9vmin*var(--z,1))}
#lhp .blkc.cu{padding-bottom:6vmin}
#lhp{--ease:cubic-bezier(.32,.72,0,1)}
#lhp.fitting *{transform:none!important}
#lhp.nomo *{animation:none!important;transition:none!important}
#lhp .vw{flex:1;min-height:0;display:flex;flex-direction:column}
#lhp .vw.vin{animation:lhpvw .38s var(--ease) both}
@keyframes lhpvw{from{opacity:0;transform:translateY(1.6vmin)}to{opacity:1;transform:none}}
#lhp .hd,#lhp .tabs{transition:opacity .7s var(--ease)}
#lhp.tv .hd,#lhp.tv .tabs{opacity:.1}
#lhp .sc{perspective:900px}
#lhp .blkc.cu.roll{animation:lhproll .85s var(--ease) both;transform-origin:50% 0}
#lhp .scb.cu.roll{animation:lhproll .85s var(--ease) both;transform-origin:50% 0}
@keyframes lhproll{0%{transform:translateY(-75%) rotateX(80deg);opacity:0}55%{transform:translateY(5%) rotateX(-9deg);opacity:1}80%{transform:translateY(-1%) rotateX(3deg)}100%{transform:none;opacity:1}}
#lhp .blkc.cu{justify-content:center;gap:calc(1.6vmin*var(--z,1))}
#lhp .blkc.cu .it h3{font-size:calc(2.6vmin*var(--z,1));color:#fff}
#lhp .blkc.cu .it p{font-size:calc(2.3vmin*var(--z,1));color:#2ecc71;font-weight:700}
#lhp .blkc .cl b{color:#fff}#lhp .blkc .cl em{color:#2ecc71}#lhp .blkc.dn .cl em{color:#6fae8a}
#lhp .scbody{display:flex;flex-direction:column;gap:calc(.9vmin*var(--z,1));overflow:auto}
#lhp .scb{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;margin:0}
#lhp .scb.cu{flex:2.4 1 auto}
#lhp .sci b{display:block;-webkit-line-clamp:unset;overflow:visible;color:#fff}
#lhp .sci em{display:block;-webkit-line-clamp:unset;overflow:visible;color:#2ecc71}
#lhp .scb.mini .sci em{color:#2ecc71;opacity:.75}
#lhp .scb.dn .sci em{color:#6fae8a}
#lhp .zov{position:absolute;inset:0;z-index:6;display:flex;padding:2.4vmin;box-sizing:border-box}
#lhp .zov::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,.84)}
#lhp .zov.an::before{animation:lhpfade .5s ease-out .5s both}
@keyframes lhpfade{from{opacity:0}to{opacity:1}}
#lhp .zp{position:relative;flex:1;display:flex;flex-direction:column;min-height:0;min-width:0}
#lhp .zhd{display:grid;grid-template-columns:auto 1fr auto;gap:1.4vmin;align-items:center;margin-bottom:1.4vmin;flex:none}
#lhp .zov.an .zhd{animation:lhpfade .5s ease-out .7s both}
#lhp .zx{font-size:2vmin}
#lhp .zbody{flex:1;min-height:0;display:grid;grid-template-columns:minmax(30vmin,36%) 1fr;gap:2vmin}
#lhp .zlist{background:#141414;border:.25vmin solid #262626;border-radius:1.8vmin;padding:1.4vmin;overflow:auto;min-height:0;display:flex;flex-direction:column;gap:calc(1.2vmin*var(--z,1))}
#lhp .zdetail{background:#141414;border:.25vmin solid #262626;border-radius:1.8vmin;padding:2vmin;overflow:auto;min-height:0;display:flex;flex-direction:column;gap:calc(1.6vmin*var(--z,1))}
#lhp .zov.an .zdetail{animation:lhpzin .55s var(--ease) .75s both}
#lhp .zdetail.sw{animation:lhpswap .3s var(--ease) both}
@keyframes lhpswap{from{opacity:0;transform:translateY(1.2vmin)}to{opacity:1;transform:none}}
#lhp .zg2{display:flex;flex-direction:column;gap:calc(.6vmin*var(--z,1))}
#lhp .zgh{display:flex;justify-content:space-between;align-items:baseline;background:transparent;border:0;padding:.4vmin .6vmin;font-size:calc(1.5vmin*var(--z,1));letter-spacing:.18em;text-transform:uppercase;color:#777;font-weight:800}
#lhp .zgh i{font-style:normal;color:#2ecc71}
#lhp .zgh.on{color:#2ecc71}
#lhp .zmv{text-align:left;background:#1b1b1b;border:.25vmin solid #262626;border-radius:1.2vmin;padding:calc(1vmin*var(--z,1)) 1.4vmin;transition:background .25s var(--ease),border-color .25s var(--ease)}
#lhp .zmv b{display:block;font-size:calc(2.3vmin*var(--z,1));line-height:1.2;color:#fff;font-weight:800}
#lhp .zmv em{display:block;font-style:normal;font-size:calc(1.8vmin*var(--z,1));color:#2ecc71;font-weight:700;margin-top:.2vmin}
#lhp .zmv.on{background:#16261d;border-color:#2ecc71}
#lhp .zg2.dn .zmv{opacity:.55}
#lhp .zd{display:flex;flex-direction:column;gap:calc(1vmin*var(--z,1))}
#lhp .zd .zt h3{font-size:calc(3.4vmin*var(--z,1));line-height:1.15;color:#fff}
#lhp .zp2{margin:0;font-size:calc(2.6vmin*var(--z,1));line-height:1.35;color:#2ecc71;font-weight:700;white-space:pre-line}
#lhp .zdetail .zl{font-size:calc(2.2vmin*var(--z,1))}
#lhp .zdetail .znotes{display:flex;flex-direction:column;gap:.8vmin;margin:auto 0 0;animation:none}
#lhp .zdetail .zn3{font-size:calc(1.9vmin*var(--z,1))}
#lhp button{transition:transform .2s var(--ease),background .3s var(--ease),opacity .3s var(--ease),border-color .3s var(--ease),color .3s var(--ease)}
#lhp button:active{transform:scale(.94)}
#lhp .zov{position:fixed;z-index:60}
#lhp .zov::before{background:rgba(0,0,0,.95)}
#lhp .zov:not(.an){animation:lhpvw .3s var(--ease) both}
#lhp .zov.out{animation:lhpout .3s var(--ease) both!important;pointer-events:none}
@keyframes lhpout{to{opacity:0;transform:scale(.97)}}
#lhp .zov .zp{max-width:none}
#lhp .zmv{transition:background .3s var(--ease),border-color .3s var(--ease),transform .3s var(--ease)}
#lhp .zmv.on{transform:translateX(.8vmin)}
#lhp .zd{flex:1;justify-content:space-evenly;gap:calc(2vmin*var(--z,1))}
#lhp .zd .zt h3{font-size:calc(4.2vmin*var(--z,1))}
#lhp .zp2{font-size:calc(3.1vmin*var(--z,1));line-height:1.45}
#lhp .zc{display:grid;grid-template-columns:1fr 1fr;gap:1.6vmin}
#lhp .zdetail .zl{font-size:calc(3.4vmin*var(--z,1));padding:calc(1.4vmin*var(--z,1)) 1.8vmin;border-radius:1.4vmin}
#lhp .zdetail .zl small{font-size:calc(1.5vmin*var(--z,1))}
#lhp .zdetail .rs{font-size:calc(2.4vmin*var(--z,1))}
#lhp .zdetail{gap:calc(1.8vmin*var(--z,1))}
#lhp .zdetail.sw .zd{animation:lhpswap .45s var(--ease) both}
#lhp .zdetail.sw .zc{animation:lhpswap .45s var(--ease) .07s both}
#lhp .sch{margin-bottom:.4vmin}
#lhp .scb.cu{gap:calc(2.4vmin*var(--z,1))}
#lhp .scb.cu .sci em{font-size:calc(1.9vmin*var(--s,1)*var(--z,1))}
#lhp .scb.cu .sci em.fx{white-space:pre-line;line-height:1.3}
#lhp .scb.cu .sci u{display:block;text-decoration:none;color:#f5c518;font-size:calc(1.8vmin*var(--s,1)*var(--z,1));margin-top:.4vmin}
#lhp .sci{position:relative}
#lhp .scb.cu .sci b{padding-right:5vmin}
#lhp .sci .rb{position:absolute;top:0;right:0;width:4.2vmin;height:4.2vmin;opacity:.9}
#lhp .scf{align-items:center;gap:1vmin}
#lhp .sct{flex:1;display:flex;justify-content:center;align-items:center;gap:1vmin;position:relative;margin:0}
#lhp .sct b{font-size:calc(1.8vmin*var(--s,1));font-weight:800;font-variant-numeric:tabular-nums;color:#fff}
#lhp .sct i{font-style:normal;color:#555;font-size:2vmin}
#lhp .sct .tt{color:#f5c518}#lhp .sct.fz b{opacity:.6}
#lhp .sct .tms{background:#2ecc71;border:0;color:#000;border-radius:3vmin;padding:.9vmin 3.4vmin;font-size:2.2vmin;font-weight:900;letter-spacing:.08em}
#lhp .sct .tmr{background:transparent;border:0;color:#666;font-size:1.8vmin;padding:.3vmin .6vmin;opacity:.6}
#lhp .zhd .zm{display:flex;align-items:center;gap:1.2vmin}
#lhp .zhd .sb{width:5.6vmin;height:5.6vmin;font-size:2.4vmin;opacity:.9}
#lhp .ckp{color:#2ecc71;display:inline-block;animation:lhpck .5s var(--ease) both}
@keyframes lhpck{from{transform:scale(0) rotate(-40deg)}to{transform:none}}
#lhp .scb.cu.roll{animation:lhpglow 1.4s ease-out both}
@keyframes lhpglow{0%{box-shadow:inset .5vmin 0 0 #2ecc71,0 0 0 .5vmin #2ecc71aa}100%{box-shadow:inset .5vmin 0 0 #2ecc71,0 0 0 0 #2ecc7100}}
#lhp .scc{transition:transform .3s var(--ease)}
#lhp .scb.pre{opacity:1;background:#141414;align-items:flex-start;justify-content:center;gap:calc(.9vmin*var(--z,1));padding:calc(1.4vmin*var(--z,1)) 2vmin}
#lhp .scb.pre .sci b{font-size:calc(2.1vmin*var(--s,1)*var(--z,1));color:#e8e8e8;font-weight:700}
#lhp .scf.pg{justify-content:center}
#lhp .scf.pg .sct{flex:none}
#lhp .spb{flex:none;height:.7vmin;border-radius:1vmin;background:#1d1d1d;margin:.3vmin 0 1vmin;overflow:hidden}
#lhp .spb i{display:block;height:100%;background:linear-gradient(90deg,#2ecc71,#7dffb0);border-radius:1vmin;transition:width .9s var(--ease)}
#lhp .scs{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:1.2vmin;animation:lhpvw .6s var(--ease) both;min-height:0}
#lhp .scs .sk{color:#2ecc71;font-weight:800;letter-spacing:.2em;font-size:1.8vmin}
#lhp .scs .sbig{color:#f5c518;font-weight:900;font-size:calc(7vmin*var(--s,1));font-variant-numeric:tabular-nums;line-height:1}
#lhp .scs .sl{color:#777;letter-spacing:.2em;font-size:1.4vmin;font-weight:800}
#lhp .scs .sm2{color:#bbb;font-size:2vmin;font-weight:700}
#lhp .scs .spr{color:#fff;font-size:2vmin;font-weight:800;line-height:1.5;margin-top:1vmin}
#lhp .pvi b{display:block;color:#fff}
#lhp .pvi em{display:block;font-style:normal;color:#2ecc71;font-size:.82em;font-weight:700}
#lhp .pvi+.pvi{margin-top:.6vmin}
#lhp .scb.pre .sci em{color:#2ecc71;opacity:.85}
#lhp .scs.rd{justify-content:center;gap:calc(.8vmin*var(--z,1))}
#lhp .scs.rd .sbig{font-size:calc(7vmin*var(--s,1)*var(--z,1))}
#lhp .scs.rd .pl{margin-top:calc(1.6vmin*var(--z,1));display:flex;flex-direction:column;gap:calc(1.2vmin*var(--z,1));width:100%}
#lhp .scs.rd .pb b{display:block;color:#e8e8e8;font-size:calc(1.9vmin*var(--s,1)*var(--z,1));font-weight:700;line-height:1.2}
#lhp .scs.rd .pb em{display:block;font-style:normal;color:#2ecc71;opacity:.8;font-size:calc(1.5vmin*var(--s,1)*var(--z,1));font-weight:700;margin-top:.2vmin}
#lhp .rst{justify-self:start;background:transparent;border:.25vmin solid #2a2a2a;color:#777;border-radius:2vmin;padding:.3vmin 1.2vmin;font-size:1.4vmin;font-weight:800;letter-spacing:.06em}
#lhp .rst.arm{border-color:#f5c518;color:#f5c518}
#lhp .vw.vin{animation:lhpvw .55s var(--ease) both}
@keyframes lhpvw{from{opacity:0;transform:translateY(2.2vmin) scale(.985)}to{opacity:1;transform:none}}
#lhp .vw.vin.vr{animation:lhpvr .6s var(--ease) both}
#lhp .vw.vin.vl{animation:lhpvl .6s var(--ease) both}
@keyframes lhpvr{from{opacity:0;transform:translateX(7vmin)}to{opacity:1;transform:none}}
@keyframes lhpvl{from{opacity:0;transform:translateX(-7vmin)}to{opacity:1;transform:none}}
#lhp .scc{animation:lhpcard .7s var(--ease) both}
#lhp .vw:not(.vin) .scc{animation:none}
#lhp .vw.vin .scc:nth-child(2){animation-delay:.05s}#lhp .vw.vin .scc:nth-child(3){animation-delay:.1s}#lhp .vw.vin .scc:nth-child(4){animation-delay:.15s}#lhp .vw.vin .scc:nth-child(5){animation-delay:.2s}#lhp .vw.vin .scc:nth-child(6){animation-delay:.25s}
#lhp .hd button,#lhp .tabs button{transition:transform .25s var(--ease),background .35s var(--ease),color .35s var(--ease),opacity .35s var(--ease)}
#lhp .ckp{animation:none}#lhp .ckp.pop{animation:lhpck .55s var(--ease) both}
#lhp .scs{animation:none}#lhp .scs.new{animation:lhpvw .6s var(--ease) both}
#lhp .scs .wk{color:#cfcfcf;font-weight:800;letter-spacing:.22em;font-size:calc(2vmin*var(--s,1)*var(--z,1))}
#lhp .scs.rd .sk{font-size:calc(2.4vmin*var(--s,1)*var(--z,1))}
#lhp .scs.rd .sbig{font-size:calc(12vmin*var(--s,1)*var(--z,1))}
#lhp .scs.rd .sl{font-size:calc(1.8vmin*var(--s,1)*var(--z,1))}
#lhp .scs.rd .pb b{font-size:calc(2.5vmin*var(--s,1)*var(--z,1));font-weight:700}
#lhp .scs.rd .pl{gap:calc(1.8vmin*var(--z,1))}
#lhp .scbody.ganim .scb{animation:lhpcard .65s var(--ease) both}
#lhp .scbody.ganim .scb:nth-child(2){animation-delay:.07s}#lhp .scbody.ganim .scb:nth-child(3){animation-delay:.14s}#lhp .scbody.ganim .scb:nth-child(4){animation-delay:.21s}#lhp .scbody.ganim .scb:nth-child(5){animation-delay:.28s}#lhp .scbody.ganim .scb:nth-child(6){animation-delay:.35s}
#lhp .zd .zt h3{font-size:calc(3vmin*var(--z,1))}
#lhp .zp2{font-size:calc(2.2vmin*var(--z,1))}
#lhp .zdetail .zl{font-size:calc(2.4vmin*var(--z,1))}
#lhp .zmv b{font-size:calc(2vmin*var(--z,1))}
#lhp .zmv em{font-size:calc(1.6vmin*var(--z,1))}
#lhp .rb{width:3.3vmin;height:3.3vmin}
#lhp .rb span{font-size:1.9vmin;font-weight:900;letter-spacing:-.05em}
#lhp .sci .rb{width:3.7vmin;height:3.7vmin;top:.2vmin}
#lhp .sci .rb span{font-size:2.05vmin}
#lhp .it.hasck h3,#lhp .it h3{padding-right:4.6vmin}
#lhp .it .rb.ed{right:6vmin}
#lhp .it.hasck h3{padding-right:9.6vmin}
#lhp .scb.cu .sci b{padding-right:4.8vmin}
#lhp .scs.rd .sbig{font-size:calc(8vmin*var(--s,1)*var(--z,1))}
#lhp .scs.rd .pl{gap:calc(1.8vmin*var(--z,1));align-items:center}
#lhp .scs.rd .pbk{display:flex;flex-direction:column;gap:calc(.25vmin*var(--z,1));align-items:center;width:100%}
#lhp .scs.rd .pb{width:100%}
#lhp .scs.rd .pb b{font-size:calc(1.9vmin*var(--s,1)*var(--z,1));font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#e2e2e2}
#lhp .scs.rd .sk{font-size:calc(1.8vmin*var(--s,1)*var(--z,1))}
#lhp .scs.rd .sl{font-size:calc(1.4vmin*var(--s,1)*var(--z,1))}
#lhp .scs .wk{font-size:calc(1.6vmin*var(--s,1)*var(--z,1))}
#lhp .pvc{margin-bottom:1.6vmin}
#lhp .pvn{line-height:1.3}
#lhp .sc{perspective:none}
#lhp .scb .sci{cursor:pointer}
#lhp .rb{width:3.2vmin;height:3.2vmin}
#lhp .rb span{font-size:1.4vmin;letter-spacing:-.04em;font-weight:800}
#lhp .sci .rb{width:3.4vmin;height:3.4vmin;top:.1vmin}
#lhp .sci .rb span{font-size:1.45vmin}
#lhp .scf{flex:none;gap:.8vmin;flex-wrap:nowrap;overflow:hidden}
#lhp .scf .sb{flex:none;width:4.2vmin;height:4.2vmin;min-width:4.2vmin}
#lhp .sct{min-width:0;gap:.6vmin}
#lhp .sct b{font-size:calc(1.4vmin*var(--s,1))}
#lhp .sct i{font-size:1.3vmin}
#lhp .sct .tms{padding:.6vmin 2.6vmin;font-size:1.9vmin}
#lhp .sct .tmr{font-size:1.5vmin;padding:.2vmin .4vmin}
#lhp .sch{touch-action:pan-x}#lhp .undo{position:fixed;left:50%;bottom:4vmin;transform:translateX(-50%);z-index:80;background:#1c1c1e;border:.25vmin solid #3a3a3c;border-radius:2vmin;padding:1.2vmin 2vmin;display:flex;gap:2vmin;align-items:center;font-size:2vmin;color:#fff;box-shadow:0 1vmin 3vmin rgba(0,0,0,.7)}#lhp .undo button{background:#2ecc71;color:#000;border:0;border-radius:1.2vmin;padding:.8vmin 2vmin;font-weight:800;font-size:2vmin}
@keyframes lhpbub{0%{opacity:0;transform:translateY(1.6vmin) scale(.9)}60%{opacity:1}100%{opacity:1;transform:none}}
@keyframes lhpbubo{to{opacity:0;transform:translateY(-.8vmin) scale(.96)}}
#lhp .bub.fresh{animation:lhpbub .55s var(--ease) both}
#lhp .bub.out{animation:lhpbubo .3s var(--ease) both;pointer-events:none}
#lhp .sci{transition:background .35s var(--ease),transform .35s var(--ease)}#lhp .sci:active{transform:scale(.97)}
@keyframes lhpcard{from{opacity:0;transform:translateY(2.4vmin) scale(.97)}to{opacity:1;transform:none}}
#lhp .scbody.ganim .scb{animation-duration:.85s}
@keyframes lhpcol{0%{opacity:0;transform:translateY(4vmin) scale(.94)}100%{opacity:1;transform:none}}
#lhp .vw.vin .scc{animation:lhpcol 1s var(--ease) both}
#lhp .vw.vin .scc:nth-child(2){animation-delay:.08s}#lhp .vw.vin .scc:nth-child(3){animation-delay:.16s}#lhp .vw.vin .scc:nth-child(4){animation-delay:.24s}#lhp .vw.vin .scc:nth-child(5){animation-delay:.32s}#lhp .vw.vin .scc:nth-child(6){animation-delay:.4s}
@keyframes lhpvw{from{opacity:0;transform:scale(.97) translateY(1.6vmin)}to{opacity:1;transform:none}}
#lhp .vw.vin{animation-duration:.6s}
#lhp .scb{transition:opacity .7s var(--ease),transform .7s var(--ease),background .6s var(--ease),filter .7s var(--ease)}
#lhp .scb.mini{transform-origin:50% 50%}
#lhp .scb.dn:not(.cu){opacity:.55}
#lhp .scbody .scb{will-change:transform,opacity}
#lhp .hd button:active,#lhp .tabs button:active{transform:scale(.94)}
#lhp .zs{transition:none}
#lhp .bub{position:fixed;z-index:70;max-width:36vmin;min-width:24vmin;background:#1c1c1e;border:.25vmin solid #3a3a3c;border-radius:2vmin;padding:1.6vmin 1.8vmin;box-shadow:0 1.2vmin 4vmin rgba(0,0,0,.7)}
#lhp .bub b{display:block;font-size:2.2vmin;color:#fff;line-height:1.2;margin-bottom:.8vmin}
#lhp .bub p{margin:0 0 .8vmin;font-size:1.9vmin;line-height:1.4;color:#2ecc71;font-weight:700;white-space:pre-line}
#lhp .bub .bl2{font-size:1.7vmin;color:#ddd;margin-top:.4vmin}
#lhp .bub .bl2 small{display:inline-block;margin-right:.8vmin;font-size:1.2vmin;letter-spacing:.14em;color:#888;font-weight:800}
#lhp .bub .bopen{margin-top:1.2vmin;background:#16261d;border:.25vmin solid #2ecc71;color:#2ecc71;border-radius:1.4vmin;padding:.8vmin 1.6vmin;font-size:1.7vmin;font-weight:800;width:100%}
#lhp .zov,#lhp .zov *{animation:none!important}
#lhp .zdetail,#lhp .zlist{-webkit-overflow-scrolling:touch}
#lhp .zdetail .zi{display:flex;gap:1vmin;align-items:center}
#lhp .zdetail .zi .ri{flex:1;font-size:2.4vmin;padding:1.2vmin}
#lhp .scb{flex:1 1 auto;justify-content:space-evenly}
#lhp .scb.cu{flex:2.4 1 auto;justify-content:space-evenly}
#lhp .scb.cu .sci b{padding-right:4.2vmin}
#lhp .scs.rd{justify-content:space-evenly;gap:0}
#lhp .scs.rd .pl{flex:1;justify-content:space-evenly;margin-top:1.4vmin;gap:0}
#lhp .scs.rd .pb b{font-size:calc(2.1vmin*var(--s,1)*var(--z,1))}
#lhp .bub{max-width:42vmin;min-width:30vmin;padding:2vmin 2.2vmin}
#lhp .bub>b{font-size:2.5vmin;margin-bottom:1.2vmin}
#lhp .bub .brs{display:flex;flex-direction:column;gap:1.1vmin;margin-bottom:1.2vmin}
#lhp .bub .br{display:flex;flex-direction:column}
#lhp .bub .br small{font-size:1.2vmin;letter-spacing:.16em;text-transform:uppercase;color:#8a8a8e;font-weight:800;margin-bottom:.2vmin}
#lhp .bub .br span{font-size:2vmin;color:#2ecc71;font-weight:700;line-height:1.3}
#lhp .bub .br.lt span{color:#e6e6e6;font-weight:600;font-size:1.8vmin}
#lhp .bub .bres{display:flex;gap:1vmin;margin-top:1.4vmin}
#lhp .bub .bres .ri{flex:1;min-width:0;font-size:2vmin;padding:1vmin 1.2vmin;border-radius:1.2vmin;background:#111;border:.25vmin solid #333;color:#fff}
#lhp .bub .bres button{background:#2ecc71;color:#000;border:0;border-radius:1.2vmin;padding:1vmin 1.8vmin;font-weight:800;font-size:1.9vmin}
#lhp .scc.adm .scb.cu .sci em.fx{white-space:normal}#lhp .fl{display:block;margin-top:.7vmin;line-height:1.35}#lhp .fl.wk{color:#6fe3a0;font-weight:800;font-size:1.12em}#lhp .scc .scb.cu .sci em.fx .fl.wk{font-size:clamp(calc(1.55vmin*var(--s,1)),calc(1.9vmin*var(--s,1)*var(--z,1)),calc(1.9vmin*var(--s,1)));line-height:1.18}#lhp .scc .scb.cu .sci em:not(.fx){font-size:clamp(calc(1.55vmin*var(--s,1)),calc(1.9vmin*var(--s,1)*var(--z,1)),calc(1.9vmin*var(--s,1)));line-height:1.18}#lhp .scc .scb.cu .sci b{font-size:max(calc(2vmin*var(--s,1)*var(--z,1)),calc(2.4vmin*var(--s,1)))}#lhp .scc .scb.cu .sci em.fx .fl:not(.wk){font-size:max(calc(1.3vmin*var(--s,1)*var(--z,1)),calc(1.4vmin*var(--s,1)));margin-top:.4vmin}#lhp .scc .scb.cu .sci em.fx .fl.wk{margin-top:.5vmin}#lhp .fl.wk .fk{color:#6fe3a0}#lhp .fl.mx{color:#f5c518;font-weight:800}#lhp .fl.mx .fk{color:#f5c518}#lhp .fl.pl{padding-left:.4vmin}#lhp .fl.wu{color:#fff;font-weight:700}#lhp .fl.wu .fk{color:#f5c518}#lhp .fl.rt{color:#b5b5ba;font-weight:600}#lhp .fl.rt .fk{color:#8a8a8e}#lhp .fl.nt{color:#c9c9ce;font-weight:600}#lhp .fl.nt .fk{color:#9a9aa0}#lhp .fk{font-style:normal;color:#2ecc71;font-weight:800;font-size:.8em;letter-spacing:.08em;text-transform:uppercase;margin-right:.8vmin}#lhp .scc.adm .scb.cu .sci+.sci{margin-top:1.6vmin;padding-top:1.4vmin;border-top:.15vmin solid #2c2c2c}#lhp .scc.adm .scb.cu{padding:calc(1.4vmin*var(--z,1)) 1.6vmin}#lhp .bub .br{border-left:.4vmin solid #2ecc71;padding-left:1.2vmin}#lhp .bub .br.wu{border-left-color:#f5a623}#lhp .bub .br.wu span{color:#fff;font-weight:700}#lhp .bub .br.wu small{color:#f5c518}#lhp .bub .br.wu{border-left-color:#f5c518}#lhp .bub .br.rt{border-left-color:#6b6b70}#lhp .bub .br.rt span{color:#b5b5ba;font-weight:600}#lhp .bub .br.nt{border-left-color:#9a9aa0}#lhp .bub .br.nt span{color:#c9c9ce;font-weight:600}#lhp .bub .br.nt small{color:#9a9aa0}#lhp .bub .br.wk span{color:#6fe3a0;font-weight:800;font-size:2.2vmin}#lhp .bub .br.wk small{color:#6fe3a0}#lhp .bub .br.lt{border-left-color:#333}#lhp .bub .brs{gap:1.4vmin}#lhp .wdl{flex:none;width:auto;min-width:0;margin-left:1vmin;line-height:1.2;white-space:nowrap;background:transparent;border:.2vmin solid #2a4a38;color:#2ecc71;border-radius:.7vmin;font-size:1.3vmin;font-weight:800;padding:.2vmin .7vmin}#lhp .scc.adm .sci em.fx{white-space:pre-line;display:block;-webkit-line-clamp:unset;overflow:visible;line-height:1.25;font-size:calc(1.45vmin*var(--s,1)*var(--z,1));font-weight:600;margin-top:.2vmin}#lhp .scc.adm .scb.cu .sci em.fx{font-size:calc(1.3vmin*var(--s,1)*var(--z,1));line-height:1.3}#lhp .scc.adm .scb.mini .sci em.fx{font-size:calc(1.15vmin*var(--s,1)*var(--z,1))}
#lhp .scc.adm .rchw{display:none}#lhp .scc.adm .pb{text-align:center}#lhp .scc.adm .pb em.pfx{display:block;white-space:pre-line;font-style:normal;color:#2ecc71;font-weight:600;font-size:1.9vmin;line-height:1.3;margin-top:.4vmin}#lhp .it p.fx,#lhp .cl em.fx,#lhp .pvn .fx{white-space:pre-line;line-height:1.25}#lhp .pvn .fx{display:block;font-size:.8em;color:#2ecc71;font-weight:600}#lhp .bub .bres .cmpb{margin-left:.8vmin;background:transparent;color:#2ecc71;border:.3vmin solid #2ecc71;border-radius:.8vmin;font-weight:800;padding:.8vmin 1.4vmin}#lhp .rchw{text-align:right;margin-top:.3vmin}#lhp .rch{display:inline-block;font-size:1vmin;font-weight:700;letter-spacing:0;color:#f5c518;background:transparent;border:.12vmin solid rgba(245,197,24,.4);border-radius:.45vmin;padding:0 .45vmin;white-space:nowrap;line-height:1.3}
#lhp .scb.cu .sci b{padding-right:0}
#lhp .znm{color:#2ecc71;font-weight:800;letter-spacing:inherit;text-transform:uppercase}
`;
const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
const root=document.createElement('div');root.id='lhp';document.body.appendChild(root);
const L=n=>String.fromCharCode(65+n);
const bare=n=>norm(n).replace(/^[a-z]\d?\)\s*/,'');
function steps(w){
const items=(w.workout_items||[]).slice().sort((a,b)=>a.position-b.position);
const real=[];let cur=[];
for(const it of items){cur.push(it);if(!it.is_linked){real.push(cur);cur=[];}}
if(cur.length)real.push(cur);
real.forEach((s,k)=>s.forEach((i,j)=>{i._lbl=L(k)+(s.length>1?(j+1):'');i._j=j;i._rd=itemRest(i);i._wid=w.id;i._adm=exp;i._ws=w.status;}));
return real;
}
const done=s=>s.every(i=>i.status==='completed');
const wodTpl=()=>{try{return localStorage.getItem('lhp_wurl')||'https://app.wodify.com/Admin/Main?q=ClassesCalendar';}catch(e){return '';}};
function wodOpen(c){let t=wodTpl();if(!t){try{t=(prompt('Paste the Wodify page address. Use {date} for the day (2026-11-19) and {time} for the class time (5:30 PM).')||'').trim();}catch(e){t='';}if(!t)return;try{localStorage.setItem('lhp_wurl',t);}catch(e){}}
let tm2='';if(c){const tg=(c.tags||[]).find(x=>SLOT.test(x.name));if(tg){const m=/^(\d{1,2}:\d{2}\s*(?:AM|PM))/i.exec(tg.name);tm2=m?m[1].toUpperCase():'';}}else if(SLOT.test(tab)){const m=/^(\d{1,2}:\d{2}\s*(?:AM|PM))/i.exec(tab);tm2=m?m[1].toUpperCase():'';}
const u=t.replace(/\{date\}/g,fmt(day)).replace(/\{time\}/g,encodeURIComponent(tm2)).replace(/\{slug\}/g,c?c.slug:'');try{window.open(u,'_blank','noopener');}catch(e){}}
const curKey=sl=>'lhp_cur_'+sl+'_'+fmt(day);
const svN=w=>{if(!w||w.rest_day||!w.workout_items)return 0;const st=steps(w);let n=0;for(const x of st){if(x.every(i=>(i._rs!==undefined?i._rs:i.status)==='completed'))n++;else break;}return n;};
const rdCur=sl=>{try{const v=String(localStorage.getItem(curKey(sl))||'');if(!v)return null;const p=v.split('|');return{c:parseInt(p[0],10)||0,s:parseInt(p[1],10)||0};}catch(e){return null;}};
const getCur=(sl,w0)=>{const w=w0||data[sl];const sv=w?svN(w):0;const r=rdCur(sl);let n=r?r.c+Math.max(0,sv-r.s):sv;if(w&&!w.rest_day&&w.workout_items)n=Math.min(n,steps(w).length);return Math.max(0,n);};
const setCur=(sl,n)=>{try{const w=data[sl];localStorage.setItem(curKey(sl),n+'|'+(w?svN(w):0));}catch(e){}};
function applyLocal(c,w){if(!w||w.rest_day||c._grp||!w.workout_items)return w;const st=steps(w);const cu=Math.min(getCur(c.slug,w),st.length);st.forEach((x,k)=>x.forEach(i=>{if(i._rs===undefined)i._rs=i.status;i.status=k<cu?'completed':'pending';}));return w;}
function relocal(){clients.forEach(c=>applyLocal(c,data[c.slug]));}
const first=n=>(n||'').split(' ')[0];
function restSecs(items){const t=items.map(i=>i.description||'').join('\n');const re=/rest\s*(\d+)(?:\s*-\s*\d+)?\s*(seconds|secs|sec|s|minutes|mins|min|m)\b/gi;let m,l=null;while((m=re.exec(t)))l=m;if(!l)return 0;const n=+l[1];return /^m/i.test(l[2])?n*60:n;}
function itemHtml(i,c,noCk,rxo){
const last=c&&!i._v&&hist[c.slug]&&hist[c.slug][bare(i.name)];
const ck=false&&c&&!i._v&&!noCk?`<button class="ck${i.status==='completed'?' dn':''}" data-ck="${esc(c.slug)}|${i._wid}|${i.id}|${i.status}"><img src="${ICON}" alt="done"></button>`:'';
const p=c&&!i._v&&pr[c.slug]&&pr[c.slug][bare(i.name)];
const adm=!!(c&&exp);const rk=c?c.slug+'|'+i.id:'';const rg='';const rc=!adm&&c&&!i._v&&i.status!=='completed'&&i._rd>0?`<div class="rchw"><span class="rch">Rest ${i._rd}s</span></div>`:'';
if(c&&!i._v&&i.status==='completed')return `<div class="it dn cp${ck?' hasck':''}">${ck}<h3>${esc(i.name)}</h3>${i.result?`<div class="rs">Logged: ${esc(i.result)}</div>`:''}</div>`;
return `<div class="it${i.status==='completed'&&!i._v?' dn':''}${ck?' hasck':''}">${ck}<h3>${esc(i.name)}</h3>${(adm?fullTxt(i):(rxo?rx(i):dsc(i)))?`<p${adm?' class="fx"':''}>${adm?fxP(fullTxt(i)):esc(rxo?rx(i):dsc(i))}</p>`:''}${rc}${i.result?`<div class="rs">Logged: ${esc(i.result)}</div>`:''}${!rxo&&last?`<div class="lw">Last time: ${esc(String(last).replace(/\s+/g,' ').slice(0,80))}</div>`:''}${isNewPR(i,c)?`<div class="np">🏆 NEW PR</div>`:''}${!rxo&&p?`<div class="pr">PR ${esc(prTxt(p))}</div>`:''}</div>`;
}
const startedMap={};
function isStarted(c){const k=c.slug+fmt(day);if(startedMap[k])return true;try{return localStorage.getItem('lhp_st_'+k)==='1';}catch(e){return false;}}
function setStarted(slug){try{localStorage.removeItem(rsKey(slug));}catch(e){}tmGo(slug);const k=slug+fmt(day);startedMap[k]=1;try{localStorage.setItem('lhp_st_'+k,'1');}catch(e){}lastChange[slug]=Date.now();}
function previewHtml(c,st){
return `<div class="bar"><i style="width:0%"></i></div><div class="pv"><div class="pvh">TODAY'S PLAN${wkLbl(data[c.slug])?' · '+esc(wkLbl(data[c.slug])):''}</div>${st.map(s=>`<div class="pvc">${s.map(i=>`<div class="pvn">${esc(i.name)}</div>`).join('')}</div>`).join('')}</div><button class="go" data-go="${esc(c.slug)}">Go ›</button>`;
}
function finishArr(){if(!arr)return;const s=arr.slug;arr=null;setStarted(s);sig='';render();}
function arrRing(){const rem=Math.max(0,ARR_MS-(Date.now()-arr.t0)),C=2*Math.PI*19;return `<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="19" fill="none" stroke="#1f2a22" stroke-width="2.6"/><circle cx="22" cy="22" r="19" fill="none" stroke="#2ecc71" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C*(1-rem/ARR_MS)).toFixed(1)}" transform="rotate(-90 22 22)"/></svg><span>${Math.ceil(rem/1000)}</span>`;}
function arrView(){
const c=clients.find(x=>x.slug===arr.slug),w=c&&data[c.slug];if(!c||!w){arr=null;return '';}
const st=steps(w);const cs=coachOf(c);
return `<div class="av"><div class="avh"><div class="avk">WELCOME</div><div class="avn">${esc(first(c.name))}</div><div class="avs">TODAY · ${st.length} BLOCKS${cs?' · COACH '+esc(cs.toUpperCase()):''}</div><div class="avr">${arrRing()}</div></div><div class="avg">${st.map(s=>`<div class="avc">${s.map(i=>{const p=pr[c.slug]&&pr[c.slug][bare(i.name)];const rs=itemRest(i);return `<div class="avi"><div class="avt"><b>${esc(i.name)}</b><s>${rs}s rest</s></div>${dsc(i)?`<em>${esc(dsc(i).replace(/\n+/g,' · '))}</em>`:''}${p?`<u>PR ${esc(prTxt(p))}</u>`:''}</div>`;}).join('')}</div>`).join('')}</div><button class="skip" data-act="skip"><img src="${ICON}" alt="">Skip</button></div>`;
}
function pickView(){
const st={};all.forEach(c=>(c.tags||[]).forEach(t=>{if(SLOT.test(t.name))(st[t.name]=st[t.name]||[]).push(c);}));
const names=Object.keys(st).sort((a,b)=>slotDays(a)-slotDays(b)||slotMin(a)-slotMin(b)||a.localeCompare(b));
const byName=(a,b)=>a.name.localeCompare(b.name);
const members=pickTag==='__all'?all.slice().sort(byName):pickTag&&st[pickTag]?st[pickTag].slice().sort(byName):[];
const cur=groupSlugs();const gl=tab==='custom'?'My six':tab;
return `<div class="pk"><h4>${esc(gl)} · ${esc(day.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'}))}${' — changes last for this day only'}</h4><h4>Add: pick a group, then tap names</h4><div class="row">${names.map(n=>`<button data-tag="${esc(n)}" class="${n===pickTag?'on':''}">${esc(n)}</button>`).join('')}<button data-tag="__all" class="${pickTag==='__all'?'on':''}">Everyone A–Z</button></div><div class="row">${members.map(c=>`<button data-pc="${esc(c.slug)}" class="${cur.includes(c.slug)?'on':''}">${esc(c.name)}</button>`).join('')}</div><h4>In this group now (tap to remove)</h4><div class="row">${cur.map(s=>{const c=all.find(x=>x.slug===s);return c?`<button data-pc="${esc(s)}" class="on">${esc(c.name)} ✕</button>`:''}).join('')}</div><div class="row"><button data-act="pickdone">Done</button></div></div>`;
}
function blockSpec(c,w,k,st){const x=st[k];return c.slug+'|'+x[0]._wid+'|'+x.map(i=>i.id).join(',');}
const finC=c=>{const w=data[c.slug];if(w===undefined)return false;if(!w||w.rest_day||!w.workout_items)return true;const st=steps(w);return !st.length||st.every(done);};
const preC=c=>{const w=data[c.slug];if(!w||w.rest_day||!w.workout_items)return false;const st=steps(w);if(!st.length)return false;const T=tm[c.slug];const t0=T&&T.t0;return getCur(c.slug)===0&&!isStarted(c)&&!t0;};
const rankC=c=>finC(c)?2:preC(c)?1:0;
const ord=a=>{tmLoad();return a.map((c,i)=>[c,i]).sort((x,y)=>rankC(x[0])-rankC(y[0])||x[1]-y[1]).map(x=>x[0]);};
let colPos=null;
function snapView(){
tmLoad();const n=clients.length;const s=n<=4?1.15:n<=6?1:.85;
return `<div class="snap" style="--n:${Math.min(n,6)||1};--s:${s}">${ord(clients).map(c=>{
const w=data[c.slug];let head=esc(first(c.name)),meta='',body='',foot='',tmv=null,pbar='',rstOk=false;
if(w===undefined)body='<div class="msg">Can\'t load</div>';
else if(!w)body='<div class="msg">No workout</div>';
else if(w.rest_day)body='<div class="msg">Rest day</div>';
else{const st=steps(w);const idx=st.findIndex(x=>!done(x));meta=st.filter(done).length+'/'+st.length;const pvs=lastSnap[c.slug];const sCh=pvs!==undefined&&pvs!==idx;lastSnap[c.slug]=idx;if(sCh)animUntil=Date.now()+900;{const T=tm[c.slug];const nw=Date.now();if(T&&T.t0){if(idx===-1){if(!T.fz){const e=T.end||nw;T.fz=e-T.t0;T.fb=e-T.b0;tmSave();}}else if(T.idx!==idx){T.idx=idx;T.b0=nw;T.fz=0;T.fb=0;tmSave();}}tmv=tm[c.slug]||null;}
const pre=getCur(c.slug)===0&&!isStarted(c)&&!(tmv&&tmv.t0);rstOk=!pre;
if(pre){const eMin=0;body=`<div class="scs rd"><div class="sk">READY</div>${wkLbl(w)?`<div class="wk">${esc(wkLbl(w))}</div>`:''}<div class="pl">${st.map(x=>`<div class="pbk">${x.map(i=>`<div class="pb"><b>${esc(i.name)}</b></div>`).join('')}</div>`).join('')}</div></div>`;foot=`<div class="scf pg"><div class="sct"><button class="tms" data-tms="${esc(c.slug)}">Go</button></div></div>`;}
else{
const nI=st.reduce((a,x)=>a+x.length,0),dI=st.reduce((a,x)=>a+x.filter(i=>i.status==='completed').length,0);pbar=`<div class="spb"><i style="width:${nI?Math.round(dI/nI*100):0}%"></i></div>`;
body=st.map((x,k)=>`<div class="scb${done(x)?' dn':''}${k===idx?' cu'+(sCh?' roll':''):' mini'}">${x.map(i=>`<div class="sci" data-iid="${esc(c.slug)}|${i.id}" data-cu="${k===idx?1:0}"><b>${done(x)?'<span class="ckp${sCh&&k===idx-1?` pop`:``}">✓</span> ':''}${esc(i.name)}</b>${done(x)&&i.result?`<em>${esc(String(i.result).replace(/\s+/g,' ').slice(0,40))}</em>`:exp&&k===idx?(fullTxt(i)?`<em class="fx">${fxP(fullTxt(i))}</em>`:''):rx(i)?`<em>${esc(rx(i))}</em>`:''}${k===idx&&i.status==='completed'&&i.result?`<u>Logged: ${esc(String(i.result).replace(/\s+/g,' ').slice(0,40))}</u>`:''}${k===idx&&i.status!=='completed'&&i._rd>0?`<div class="rchw"><span class="rch">Rest ${i._rd}s</span></div>`:''}</div>`).join('')}</div>`).join('');
if(idx===-1){const prs=newPRs(c,w);const el=tmv&&tmv.t0?(tmv.fz||((tmv.end||Date.now())-tmv.t0)):(w.minutes_taken?w.minutes_taken*60000:0);body=`<div class="scs${sCh?' new':''}"><div class="sk">WORKOUT COMPLETE ✓</div>${el?`<div class="sbig">${tmf(el)}</div><div class="sl">TOTAL TIME</div>`:''}<div class="sm2">${st.length} blocks${w.rpe_score?' · RPE '+esc(w.rpe_score):''}</div>${prs.length?`<div class="spr">🏆 ${prs.map(esc).join('<br>🏆 ')}</div>`:''}</div>`;}
{const pk=(idx===-1?st.length:idx)-1;const pend=idx>=0?st[idx].filter(i=>i.status!=='completed').map(i=>i.id):[];
const clk=`<div class="sct${tmv&&tmv.t0?' run':''}"${tmv&&tmv.t0?` data-tm="${esc(c.slug)}"`:''}>${tmv&&tmv.t0?`<b class="tb">0:00</b><i>/</i><b class="tt">0:00</b><button class="tmr" data-tmr="${esc(c.slug)}" title="Reset timer">↺</button>`:`<button class="tms" data-tms="${esc(c.slug)}">Go</button>`}</div>`;
foot=`<div class="scf"><button class="sb" ${pk>=0?`data-lp="${esc(c.slug)}"`:'disabled'}>◀</button>${clk}<button class="sb go2" ${idx>=0?`data-ln="${esc(c.slug)}"`:'disabled'}>▶</button></div>`;}}}
const adm=exp;return `<div class="scc${adm?' adm':''}" data-s="${esc(c.slug)}" data-idx="${w&&!w.rest_day&&w.workout_items?steps(w).findIndex(x=>!done(x)):-9}"><div class="sch">${rstOk?`<button class="rst${rstArm[c.slug]?' arm':''}" data-rst="${esc(c.slug)}">${rstArm[c.slug]?'Tap again':'↺ Reset'}</button>`:'<i></i>'}<span class="znm">${head}</span><small>${meta}</small></div>${pbar}<div class="scbody${goAnim[c.slug]>Date.now()?' ganim':''}">${body}</div>${foot}</div>`;}).join('')}</div>`;
}
function isNewPR(i,c){
if(!c||i._v||!i.result||fmt(day)!==todayS)return false;
const p=pr[c.slug]&&pr[c.slug][bare(i.name)];if(!p)return false;
const n=parsePR(i.result);return !!n&&(n.w>p.w||(n.w===p.w&&n.r>p.r));
}
function newPRs(c,w){if(!w)return[];return steps(w).flat().filter(i=>isNewPR(i,c)).map(i=>i.name);}
function tile(c){
tmLoad();
const w=data[c.slug];let body='',meta='',cls='tile',rest='';
active[c.slug]=false;
if(w===undefined){body='<div class="msg">Can\'t load</div>';}
else if(!w){body='<div class="msg">No workout</div>';}
else if(w.rest_day){body='<div class="msg">Rest day</div>';}
else{
const st=steps(w);const idx=st.findIndex(s=>!done(s));const nd=st.filter(done).length;
meta=`${nd}/${st.length}`;const pct=st.length?Math.round(nd/st.length*100):0;
const prev=lastIdx[c.slug];
if(prev===undefined){lastChange[c.slug]=Date.now();}
else if(prev!==idx){lastChange[c.slug]=Date.now();flashUntil[c.slug]=Date.now()+4000;animUntil=Date.now()+800;
}
const changed=prev!==undefined&&prev!==idx;lastIdx[c.slug]=idx;
if(idx===-1){cls+=' fin';const cl=(comm[w.id+':'+w.comments_count]||'');
const _np=newPRs(c,w);const _ln=[w.rpe_score?'RPE '+esc(w.rpe_score):'',w.minutes_taken?esc(w.minutes_taken)+' min':''].filter(Boolean).join(' · ')||(st.length+' blocks complete');body=`<div class="bar"><i style="width:100%"></i></div><div class="big">DONE ✓</div><div class="sum">${_ln}</div>${_np.length?`<div class="sum" style="color:#f5c518;font-weight:800">🏆 NEW PR: ${esc(_np.join(', '))}</div>`:''}${cl?`<div class="cm">💬 ${esc(cl)}</div>`:''}${st.length?`<button class="bk" data-lp="${esc(c.slug)}">◀</button>`:''}`;}
else if(getCur(c.slug)===0&&!isStarted(c)&&!(tm[c.slug]&&tm[c.slug].t0)){body=previewHtml(c,st);}
else{active[c.slug]=true;
const _pend=st[idx].filter(i=>i.status!=='completed'&&!i._v);const _bb=`<button class="blk" data-ln="${esc(c.slug)}"><img src="${ICON}" alt="done"></button>`;
const _bk=idx>0?`<button class="bk" data-lp="${esc(c.slug)}">◀</button>`:'';
if(changed){delete scHold[c.slug];}
const sc=st.map((x,k)=>{const lb=`<div class="bl">BLOCK ${L(k)} · ${k<idx?'DONE ✓':k===idx?'NOW':'UP NEXT'}</div>`;return k===idx?`<div class="blkc cu${changed?' roll':''}" data-cur="1">${lb}${x.map(i=>itemHtml(i,c,true,true)).join('')}</div>`:`<div class="blkc ${k<idx?'dn':'fu'}">${lb}${x.map(i=>`<div class="cl"><b>${esc(i.name)}</b>${rx(i)?`<em>${esc(rx(i))}</em>`:''}</div>`).join('')}</div>`;}).join('');
body=`<div class="bar"><i style="width:${pct}%"></i></div><div class="sc" data-s="${esc(c.slug)}">${sc}</div>${_bk}${_bb}`;
const curS=st[idx];
if(!curS[0]._v){
tmStart[c.slug]=lastChange[c.slug]||Date.now();tmEst[c.slug]=estSecs(curS);
rest=`<span class="tm" data-s="${esc(c.slug)}"></span>`;
}}
}
if(Date.now()<(flashUntil[c.slug]||0))cls+=' flash';
if(newPRs(c,w).length)cls+=' gold';
return `<div class="${cls}" data-c="${esc(c.slug)}"><button class="rmx${rmArm===c.slug?' arm':''}" data-rm="${esc(c.slug)}">${rmArm===c.slug?'Remove today?':'✕'}</button><div class="nm t"><span class="l">${meta}</span><div class="n">${esc(first(c.name)+(clients.filter(x=>first(x.name)===first(c.name)).length>1?' '+((c.name.split(' ')[1]||'')[0]||'')+'.':''))}${coachOf(c)?`<small>${esc(coachOf(c))}</small>`:''}${newPRs(c,w).length?' 🏆':''}</div><div class="r">${rest}</div></div>${body}</div>`;
}
function zNotes(c,max){
const w=data[c.slug];const e=cn[c.slug]||{};const P=[];
const cl=w&&comm[w.id+':'+w.comments_count];if(cl)P.push(['Client comment',cl]);
if(e.prof&&e.prof.inj&&!/^(none|n\/a|no)\b/i.test(e.prof.inj))P.push(['Be aware of',e.prof.inj]);
(e.notes||[]).forEach(n=>P.push(['Note '+n.d,n.t]));
(e.fb||[]).slice(0,2).forEach(f=>{if(f.txt||(f.sk&&f.sk.length))P.push(['Session '+f.d.slice(5)+(f.rpe?' · RPE '+f.rpe:''),(f.txt||'')+(f.sk&&f.sk.length?' (skipped: '+f.sk.join(', ')+')':'')]);});
if(e.prof&&e.prof.imp)e.prof.imp.slice(0,3).forEach(x=>P.push([x.h,x.t]));
if(max)P.splice(max);
return P.length?P.map(p=>`<div class="zn3"><small>${esc(p[0])}</small>${esc(cut(String(p[1]),240))}</div>`).join(''):(e.loading||!e.t?'<div class="zn3"><small>Notes</small>Loading…</div>':'<div class="zn3"><small>Notes</small>Nothing flagged.</div>');
}
function closeZ(){const z=root.querySelector('.zov');const fin=()=>{focus=null;zBack=null;sig='';render();load();};if(z&&motionOn()){z.classList.add('out');setTimeout(fin,300);}else fin();}
function zDet(i,c){const last=hist[c.slug]&&hist[c.slug][bare(i.name)];const p=pr[c.slug]&&pr[c.slug][bare(i.name)];const k=c.slug+'|'+i._wid+'|'+i.id;const okd=i.status==='completed';const full=String(i.description||'').trim();
return `<div class="zd"><div class="zt"><h3>${esc(i.name)}</h3>${okd?'<span>✓ DONE</span>':''}</div>${full?`<p class="zp2">${esc(full)}</p>`:''}<div class="zc"><div class="zl"><small>LAST TIME</small>${last?esc(String(last).replace(/\s+/g,' ').slice(0,140)):'—'}</div><div class="zl p"><small>PR</small>${p?esc(prTxt(p)):'—'}${isNewPR(i,c)?' 🏆 NEW':''}</div></div>${true?`<div class="zi"><input class="ri" data-ri="${esc(k)}" value="${esc(i.result||'')}" placeholder="Result" autocomplete="off"><button data-sv="${esc(k)}">Save</button><button class="ck${okd?' dn':''}" data-ck="${esc(k+'|'+i.status)}"><img src="${ICON}" alt="done"></button></div>`:(i.result?`<div class="rs">Logged: ${esc(i.result)}</div>`:'')}</div>`;}
function focusView(c){
const w=data[c.slug];let list='',det='',meta='',nav='';
if(!w||w.rest_day)list=`<div class="msg" style="margin:auto">${w?'Rest day':'No workout'}</div>`;
else{const st=steps(w);const idx=st.findIndex(x=>!done(x));
meta=st.filter(done).length+'/'+st.length+' blocks'+(w.rpe_score?' · RPE '+esc(w.rpe_score):'')+(w.minutes_taken?' · '+esc(w.minutes_taken)+' min':'');
if(!zSel)zSel='b:'+Math.max(0,idx);
{const pk=(idx===-1?st.length:idx)-1;const pend=idx>=0?st[idx].filter(i=>i.status!=='completed').map(i=>i.id):[];nav=`<button class="sb" ${pk>=0?`data-bk="${esc(blockSpec(c,w,pk,st))}"`:'disabled'}>◀</button><button class="sb go2" ${pend.length?`data-blk="${esc(c.slug+'|'+st[idx][0]._wid+'|'+pend.join(','))}"`:'disabled'}>▶</button>`;}
list=st.map((x,k)=>`<div class="zg2${k===idx?' cu':''}${done(x)?' dn':''}"><button class="zgh${zSel==='b:'+k?' on':''}" data-zs="b:${k}"><span>Block ${L(k)}${x.length>1?' · Superset':''}</span><i>${done(x)?'✓ done':k===idx?'now':''}</i></button>${x.map(i=>`<button class="zmv${zSel==='i:'+i.id?' on':''}" data-zs="i:${i.id}"><b>${esc(i.name)}</b>${rx(i)?`<em>${esc(rx(i))}</em>`:''}</button>`).join('')}</div>`).join('');
let sel=[];if(zSel.slice(0,2)==='b:')sel=st[+zSel.slice(2)]||[];else{const id=zSel.slice(2);st.forEach(x=>x.forEach(i=>{if(String(i.id)===id)sel.push(i);}));}
if(!sel.length)sel=st[Math.max(0,idx)]||st[0]||[];
det=sel.map(i=>zDet(i,c)).join('');
const nt=zNotes(c,3);det+=`<div class="znotes">${nt}</div>`;}
const sw=zSwap;zSwap=false;
return `<div class="zov${zAnim?' an':''}"><div class="zp"><div class="zhd"><button class="zx" data-act="back">✕ Close</button><div class="zn">${esc(c.name)}</div><div class="zm">${meta}${nav}</div></div><div class="zbody"><div class="zlist">${list}</div><div class="zdetail${sw?' sw':''}">${det||'<div class="msg" style="margin:auto">—</div>'}</div></div></div></div>`;
}
const HARD=/\b(hard|tough|difficult|brutal|struggl\w*|exhaust\w*|too much|too heavy|too many|gassed|wiped|dead|crushed|rough)\b/i;
const EASY=/\b(easy|too light|too easy|light|more weight|heavier|push me|not enough|bored|breez\w*)\b/i;
const PAIN=/\b(pain\w*|hurt\w*|sore\w*|ache\w*|discomfort\w*|tweak\w*|strain\w*|injur\w*|pinch\w*|sharp|flare\w*|swollen|numb|tingl\w*|knee|back|shoulder|neck|hip|wrist|elbow|ankle|hamstring|calf|glute)\b/i;
const tagTxt=t=>PAIN.test(t)?'⚠ ':HARD.test(t)?'🔥 ':EASY.test(t)?'💪 ':'';
const FIELD=(b,l)=>{const m=b.match(new RegExp('^\\s*'+l+':\\s*(.+)$','im'));return m?m[1].trim():'';};
function cnProfile(notes){const ps=notes.filter(n=>/Primary Goal:/i.test(n.body||'')&&/Bucket:/i.test(n.body||'')).sort((x,y)=>(Date.parse(y.created_at_date)||0)-(Date.parse(x.created_at_date)||0));if(!ps.length)return null;const b=ps[0].body;
const o={age:FIELD(b,'Age'),exp:FIELD(b,'Experience Level'),bucket:FIELD(b,'Bucket'),goal:FIELD(b,'Primary Goal'),inj:FIELD(b,'Injury Considerations'),mot:FIELD(b,'Motivation Style'),imp:[]};
const L=b.split('\n');const i=L.findIndex(x=>/^\s*Programming Implications/i.test(x));
if(i>=0){let h='';for(let k=i+1;k<L.length;k++){const x=L[k].trim();if(!x)continue;if(/^[•\-]/.test(x)){const t=x.replace(/^[•\-\s]+/,'');if(h&&!o.imp.some(y=>y.h===h))o.imp.push({h,t});}else if(x.length<40)h=x.replace(/:$/,'');}}
return o;}
function cnNotes(notes){const now=Date.now();return notes.filter(n=>(n.body||'').trim()&&!(/Primary Goal:/i.test(n.body)&&/Bucket:/i.test(n.body))&&!/^C\d+\s*W\d+/i.test(n.body)&&now-(Date.parse(n.created_at_date)||0)<21*864e5).sort((x,y)=>(Date.parse(y.created_at_date)||0)-(Date.parse(x.created_at_date)||0)).slice(0,2).map(n=>({d:(n.created_at_date||'').slice(5,10),t:n.body.trim().replace(/\s+/g,' '),red:n.color==='red'}));}
async function cnLoad(c){const old=cn[c.slug];if(old&&Date.now()-old.t<300000)return;cn[c.slug]={t:Date.now(),loading:true,prof:old?old.prof:null,notes:old?old.notes:[],fb:old?old.fb:[]};
try{const d0=fmt(day),f=fmt(new Date(day.getTime()-14*864e5));
const [nj,wj]=await Promise.all([fetch(`/api/v1/clients/${c.slug}/notes`,H).then(r=>r.json()),fetch(`/api/v1/clients/${c.slug}/workouts.json?start_date=${f}&end_date=${d0}&shape=lean`,H).then(r=>r.json())]);
const a=(Array.isArray(wj)?wj:(wj.workouts||[])).filter(w=>w.due_date&&w.due_date.replace(/\//g,'-')<=d0&&(w.status==='completed'||w.rpe_score||w.comments_count)).sort((x,y)=>x.due_date<y.due_date?1:-1).slice(0,4);
const fb=[];await Promise.all(a.map(async w=>{let txt='';if(w.comments_count){try{const d=await (await fetch(`/api/v1/clients/${c.slug}/workouts/${w.id}`,H)).json();txt=((d.workout||d).comments||[]).map(x=>x.body||x.text||x.content||'').filter(Boolean).join(' / ');}catch(e){}}
const sk=w.status==='completed'?(w.workout_items||[]).filter(i=>i.status!=='completed').map(i=>(i.name||'').replace(/^[A-Za-z]\d?\)\s*/,'')):[];
fb.push({d:w.due_date.replace(/\//g,'-'),rpe:w.rpe_score,txt,sk});}));
fb.sort((x,y)=>x.d<y.d?1:-1);
const nl=nj.notes||[];cn[c.slug]={t:Date.now(),prof:cnProfile(nl),notes:cnNotes(nl),fb};
}catch(e){cn[c.slug]={t:Date.now(),prof:null,notes:[],fb:[]};}}
function cnBday(c){const b=(c.birthday||'').slice(0,10);if(!/^\d{4}-\d\d-\d\d$/.test(b))return '';const y0=day.getFullYear(),t0=new Date(y0,day.getMonth(),day.getDate()).getTime();
for(const y of [y0,y0+1]){const d=new Date(y,+b.slice(5,7)-1,+b.slice(8,10));const n=Math.round((d.getTime()-t0)/864e5);if(n>=-1&&n<=7){const age=y-(+b.slice(0,4));const w=n===0?'today':n===-1?'yesterday':n===1?'tomorrow':'on '+d.toLocaleDateString(undefined,{weekday:'short',month:'numeric',day:'numeric'});return `🎂 Birthday ${w}${age>0&&age<120?' (turns '+age+')':''}`;}}
return '';}
const cut=(t,n)=>t.length>n?t.slice(0,n-1)+'…':t;
const lodCard=c=>`<div class="smc cnc"><div class="nm"><div class="n">${esc(c.name)}</div></div><div class="ok">Loading…</div></div>`;
function clView(){
const cards=clients.map(c=>{const e=cn[c.slug];if(!e||(e.loading&&!e.prof))return lodCard(c);const p=e.prof;
if(!p)return `<div class="smc cnc"><div class="nm"><div class="n">${esc(c.name)}</div></div><div class="ok">No profile yet</div></div>`;
const who=[p.bucket,p.age?'Age '+p.age:'',p.exp].filter(Boolean).join(' · ');
const rows=[`<div class="pf">${esc(who)}</div>`,p.goal?`<div class="pg2"><b>Goal</b> ${esc(cut(p.goal,150))}</div>`:'',p.inj&&!/^(none|n\/a)/i.test(p.inj)?`<div class="wt"><b>Injury</b> ${esc(cut(p.inj,170))}</div>`:'',p.mot?`<div class="pg2"><b>Style</b> ${esc(cut(p.mot,110))}</div>`:'',...p.imp.slice(0,5).map(x=>`<div class="im"><b>${esc(x.h)}</b> ${esc(cut(x.t,120))}</div>`)];
return `<div class="smc cnc"><div class="nm"><div class="n">${esc(c.name)}</div></div>${rows.join('')}</div>`;});
return `<div class="sm"><div class="smh"><div>Clients <span>who you're working with</span></div></div><div class="smg">${cards.join('')}</div></div>`;}
const CNDO={pain:'Ask how it feels. Modify or skip anything that loads it.',skip:'Ask why. Swap or regress it.',hard:'Check load and volume. Ease back if form slips.',easy:'Add load or reps. They have room.',alert:'Heads up for this session.'};
const CNLBL={alert:'ALERT',pain:'PAIN',skip:'SKIPPED',hard:'TOO HARD',easy:'TOO EASY',said:'SAID',note:'NOTE',bday:'🎂'};
const CNORD=['alert','pain','skip','hard','easy','said','note'];
const dl2=d=>{try{return new Date(d+'T12:00:00').toLocaleDateString(undefined,{weekday:'short',month:'numeric',day:'numeric'});}catch(e){return d;}};
function cnRows(c){const e=cn[c.slug];const R=[];
e.notes.forEach(n=>R.push({k:n.red?'alert':'note',w:cut(n.t,200),d:n.d}));
e.fb.forEach(f=>{const r=+f.rpe;const q=f.txt?cut(f.txt,150):'';
if(q){const k=PAIN.test(f.txt)?'pain':HARD.test(f.txt)?'hard':EASY.test(f.txt)?'easy':'said';R.push({k,w:'“'+q+'”',d:f.d});}
if(r>=8&&!(q&&HARD.test(f.txt)))R.push({k:'hard',w:'Rated the session RPE '+r,d:f.d});
else if(r&&r<=3&&!(q&&EASY.test(f.txt)))R.push({k:'easy',w:'Rated the session RPE '+r,d:f.d});
if(f.sk.length)R.push({k:'skip',w:cut(f.sk.slice(0,3).join(', '),90),d:f.d});});
const seen={},out=[];CNORD.forEach(k=>R.filter(x=>x.k===k).forEach(x=>{const lim=k==='said'||k==='note'?2:1;seen[k]=(seen[k]||0)+1;if(seen[k]<=lim&&out.length<4)out.push(x);}));
return out;}
function cnView(){let hot=0;
const cards=clients.map(c=>{const e=cn[c.slug];if(!e||(e.loading&&!e.fb.length&&!e.notes.length))return lodCard(c);
const rows=[];const bd=cnBday(c);if(bd)rows.push(`<div class="cr k-bday"><div class="ct">${esc(bd)}</div></div>`);
cnRows(c).forEach(x=>rows.push(`<div class="cr k-${x.k}"><div class="ct"><b>${CNLBL[x.k]}</b> ${esc(x.w)} <span class="cdt">${esc(dl2(x.d.length===5?fmt(day).slice(0,4)+'-'+x.d:x.d))}</span></div>${CNDO[x.k]?`<div class="cd">→ ${esc(CNDO[x.k])}</div>`:''}</div>`));
if(rows.length)hot++;
return `<div class="smc cnc${bd||e.notes.some(n=>n.red)?' gold':''}"><div class="nm"><div class="n">${esc(c.name)}</div></div>${rows.join('')||'<div class="ok">Nothing to flag</div>'}</div>`;});
return `<div class="sm"><div class="smh"><div>Coach Notes <span>recent things to know</span></div><div>With notes <span>${hot}/${clients.length}</span></div></div><div class="smg cng">${cards.join('')}</div></div>`;}
function summaryView(){
let fin=0,prog=0,ns=0,prs=0;const rs=[];
const cards=clients.map(c=>{
const w=data[c.slug];const nm=`<div class="nm"><div class="n">${esc(c.name)}</div></div>`;
if(!w||w.rest_day)return `<div class="smc idle">${nm}<div class="chip">${w?'Rest day':'No workout'}</div></div>`;
const st=steps(w);const nd=st.filter(done).length,N=st.length;const isDone=w.status==='completed'||(N&&nd===N);
const started=nd>0||isStarted(c)||st.some(x=>x.some(i=>i.result&&String(i.result).trim()));
const state=isDone?'done':started?'prog':'ns';if(isDone)fin++;else if(started)prog++;else ns++;
if(w.rpe_score)rs.push(+w.rpe_score);
const p=newPRs(c,w);prs+=p.length;
const cl=comm[w.id+':'+w.comments_count]||'';
const idx=st.findIndex(x=>!done(x));
const skipped=isDone?st.flat().filter(i=>i.status!=='completed').map(i=>i.name):[];
const pct=N?Math.round(nd/N*100):0;
const line=state==='done'?[w.rpe_score?'RPE '+esc(w.rpe_score):'',w.minutes_taken?esc(w.minutes_taken)+' min':''].filter(Boolean).join(' · '):state==='prog'?'Block '+(idx+1)+' of '+N+' · '+esc(st[idx].map(i=>i.name).join(' + ')):'Starts with '+esc(st[0].map(i=>i.name).join(' + '));
return `<div class="smc ${state}${p.length?' gold':''}">${nm}<div class="chip ${state}">${state==='done'?'FINISHED':state==='prog'?'IN PROGRESS':'NOT STARTED'}<span>${nd}/${N}</span></div><div class="bar"><i style="width:${pct}%"></i></div><div class="ln">${line}</div>${p.length?`<div class="pp">🏆 NEW PR: ${esc(p.join(', '))}</div>`:''}${skipped.length?`<div class="sk">Skipped: ${esc(skipped.join(', '))}</div>`:''}${cl?`<div class="cmt">💬 ${esc(cl)}</div>`:''}</div>`;
});
const avg=rs.length?(rs.reduce((a,b)=>a+b,0)/rs.length).toFixed(1):'–';
return `<div class="sm"><div class="smh"><div>Finished <span>${fin}</span></div><div>In progress <span>${prog}</span></div><div>Not started <span>${ns}</span></div><div>New PRs <span>${prs}</span></div><div>Avg RPE <span>${avg}</span></div></div><div class="smg">${cards.join('')}</div></div>`;
}
function gClean(t){const out=[];let skip=0;for(const raw of String(t||'').replace(/\r/g,'').split('\n')){const l=raw.trim();
if(/^coach(ing)?\s*(notes?|cues?|tips?|points?)\b/i.test(l)){skip=2;continue;}
if(skip===2)continue;
if(/^focus\b/i.test(l)){skip=1;continue;}
if(skip===1){if(!l){skip=0;out.push('');}continue;}
out.push(l);}return out;}
const G_TIME=/^\(\d+:\d+\s*[-–]\s*\d+:\d+\)$/,G_SPL=/^(.*?)\s+[—–-]\s+(.+)$/;
function gRow(l){const m=l.match(G_SPL);return m?`<div class="grw"><span>${esc(m[1])}</span><b>${esc(m[2])}</b></div>`:`<div class="grw one"><span>${esc(l)}</span></div>`;}
function gRender(t,notes,vert){
const L=gClean(t);let intro=[],seq=[],cur=null;
const HEAD=/^(station|round|circuit|finisher|part|superset|pair|then)\b/i;
const isNote=l=>/^\*/.test(l)||(/^\(.*\)$/.test(l)&&!G_TIME.test(l))||(/[.!]$/.test(l)&&l.split(/\s+/).length>=4&&!G_SPL.test(l));
for(const l of L){if(!l)continue;
if(G_TIME.test(l))continue;
if(isNote(l)){const n=l.replace(/^\*+\s*/,'');if(cur)cur.notes.push(n);else intro.push('*'+n);continue;}
if(/transition/i.test(l)&&l.length<40){cur=null;seq.push({tr:l});continue;}
if(HEAD.test(l)||/:\s*$/.test(l)||/^[A-Z][.)]\s/.test(l)||/^[A-Z]\d?[.)]\s+[^—–]*:/.test(l)){const m=l.match(/^(.*?)(?::|\s[—–-]\s)\s*(.*)$/);const h=(m?m[1]:l).trim(),sub=m?m[2].trim():'';cur={h,sub,rows:[],notes:[]};seq.push(cur);continue;}
if(cur)cur.rows.push(l);else if(!seq.length)intro.push(l);else{cur={h:'',sub:'',rows:[l],notes:[]};seq.push(cur);}}
const grp=g=>`<div class="gsg">${g.h?`<div class="gsh">${esc(g.h)}${g.sub?`<small>${esc(g.sub)}</small>`:''}</div>`:''}${g.rows.map(gRow).join('')}${g.notes.map(n=>`<div class="gnote">${esc(n)}</div>`).join('')}</div>`;
const hasStations=seq.some(x=>x.h);
const flat=!hasStations?intro.filter(l=>l[0]!=='*'&&G_SPL.test(l)):[];
const introRows=intro.filter(l=>!flat.includes(l)).map(l=>l[0]==='*'?`<div class="gnote">${esc(l.slice(1))}</div>`:`<div class="gin">${esc(l)}</div>`).join('');
if(flat.length)seq.unshift({h:'',sub:'',rows:flat,notes:[]});
const trs=seq.filter(x=>x.tr);
return `${introRows?`<div class="gintro">${introRows}</div>`:''}<div class="gseq${vert?' v':''}">${seq.map(x=>x.tr?(vert?`<div class="gtr"><span>${esc(x.tr)}</span></div>`:''):grp(x)).join('')}</div>${!vert&&trs.length?trs.map(x=>`<div class="gtrb">${esc(x.tr)}</div>`).join(''):''}`;
}
function groupView(full){
const c=clients[0];if(!c)return '<div class="msg" style="margin:auto">Group not found</div>';
const w=data[c.slug];const dl=day.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'});
if(w===undefined)return '<div class="msg" style="margin:auto">Can\'t load</div>';
if(!w)return `<div class="msg" style="margin:auto">No group workout for ${esc(dl)}</div>`;
if(w.rest_day)return `<div class="msg" style="margin:auto">Rest day</div>`;
const o=gdet[w.id];const wk=Object.assign({},w,(o&&o.wk)||{});
const items=(wk.workout_items||[]).slice().sort((a,b)=>a.position-b.position);
if(gDay!==fmt(day)){gDay=fmt(day);gi=0;}
const cols=[];
if(String(wk.warmup||'').trim())cols.push(['Warm-up',gRender(wk.warmup,full,full),'']);else cols.push(['Warm-up','<div class="gin">No warm-up listed</div>','']);
items.forEach(i=>{const m=String(i.description||'').match(/\((\d+:\d+)\s*[-–]\s*(\d+:\d+)\)/);cols.push([i.name,gRender(i.description,full,full),m?m[1]+' – '+m[2]:'']);});
if(String(wk.cooldown||'').trim())cols.push(['Cool-down',gRender(wk.cooldown,full,full),'']);
gN=cols.length;if(gi>=gN)gi=Math.max(0,gN-1);
let shown=cols;gWinCur=null;
if(!full){shown=cols.slice(gi,gi+1);const it=items[gi];const m=it&&String(it.description||'').match(/\((\d+):(\d+)\s*[-–]\s*(\d+):(\d+)\)/);if(m)gWinCur={s:+m[1]*60+ +m[2],e:+m[3]*60+ +m[4]};}
const sl=gslide;gslide=0;
const clk=`<div class="gtmr"><button class="gtb" data-gt="reset">⟲</button><span class="gclk">${mmss(gEl())}</span><button class="gtb" data-gt="toggle">${gc.run?'❚❚':'▶'}</button><span class="gwin">${esc(gWin(gEl()))}</span></div>`;
return `<div class="gv"><div class="gh">${esc(wk.title||'Group workout')}<small>${esc(dl)}</small></div><div class="gg${full?'':' one'}">${shown.map(x=>`<div class="gc${sl>0?' slide':sl<0?' slideL':''}"><div class="gt">${esc(x[0])}${full?(x[2]?`<small>${esc(x[2])}</small>`:''):`<small>${gi+1} / ${gN}</small>`}</div><div class="gb">${x[1]}</div></div>`).join('')}</div>${full||!shown[0]||!shown[0][2]?'':`<span class="gwt">${esc(shown[0][2])}</span>`}${full?'':`<button class="gnv l" data-gn="-1" ${gi<=0?'disabled':''}>◀</button><button class="gnv r" data-gn="1" ${gi>=gN-1?'disabled':''}>▶</button>`}</div>`;
}
function render(){
const dl=day.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'});
const hd=`<div class="hd"><button class="lg" data-act="home"><img src="${LOGO}" alt="Landing"></button><button data-act="prev">◀</button><div class="day">${esc(dl)}</div><button data-act="next">▶</button><button data-act="today">Today</button><button data-act="pick">＋ Add / remove</button><button data-act="snap" class="${exp&&!summary&&!clv&&!cnv?'on':''}">${exp&&!summary&&!clv&&!cnv?'Snapshot · Full':'Snapshot'}</button><button data-act="wod">Wodify</button><button data-act="clist" class="${clv?'on':''}">Clients</button><button data-act="cnotes" class="${cnv?'on':''}">Coach Notes</button><div class="sp"></div><div class="ts">v81 ${lastLoad?'· updated '+lastLoad.toLocaleTimeString([], {hour:'numeric',minute:'2-digit',second:'2-digit'}):''}</div><button data-act="edit" class="${edit?'on':''}" title="Coach mode: tap ✓ to complete">✎</button><button data-act="motion" class="${motionOn()?'on':''}" title="Animations on/off">✦</button><button data-act="fs">⛶</button><button data-act="close">✕</button></div>`;
const cl=coachList(),slots=cc?coachSlots(cc):[];const tb=`<div class="tabs"><button data-tab="custom" class="${tab==='custom'?'on':''}">My six</button>${all.some(c=>c._grp)?`<button data-tab="group" class="${tab==='group'?'on':''}">Group</button>`:''}${cl.map(n=>`<button data-cc="${esc(n)}" class="${cc===n&&tab!=='custom'&&tab!=='group'?'on':''}">${esc(n)}</button>`).join('')}${hidN()?`<button data-act="unhide" class="unh">Show hidden (${hidN()})</button>`:''}${tabAll.length>MAX?`<span class="pgl"><button data-pg="-1">‹</button> ${pg*MAX+1}–${Math.min(tabAll.length,pg*MAX+MAX)} of ${tabAll.length} <button data-pg="1">›</button></span>`:''}</div>${tab!=='custom'&&tab!=='group'&&slots.length?`<div class="tabs sl">${slots.map(n=>`<button data-tab="${esc(n)}" class="${tab===n?'on':''}">${esc(n)}</button>`).join('')}</div>`:''}`;
const fc=focus&&clients.find(c=>c.slug===focus);
const n=clients.length;const LP={1:[1,1,1,1],2:[2,1,1,2],3:[3,1,1,3],4:[2,2,2,2],5:[6,2,4,3],6:[3,2,2,3]};const lp=LP[n]||null;const g=lp?[lp[0],lp[1]]:n<=9?[3,3]:n<=12?[4,3]:[4,4];const gp=lp?[lp[2],lp[3]]:[g[1],g[0]];
root.classList.toggle('dense',n>6);
if((cnv||clv)&&!pick&&!arr){const need=clients.filter(c=>!cn[c.slug]||Date.now()-cn[c.slug].t>300000);if(need.length)Promise.all(need.map(cnLoad)).then(()=>{if(cnv||clv){sig='';render();}});}
{const zs0=root.querySelector('.zs');if(zs0&&focus)zsTop=zs0.scrollTop;}
if(fc&&!arr&&(!cn[fc.slug]||Date.now()-cn[fc.slug].t>300000)){const sl=fc.slug;cnLoad(fc).then(()=>{if(focus===sl){const np=root.querySelector('.znotes');if(np)np.innerHTML=zNotes(clients.find(x=>x.slug===sl));}});}
root.querySelectorAll('.sc').forEach(e=>{if(Date.now()<(scHold[e.dataset.s]||0))scTop[e.dataset.s]=e.scrollLeft;});
const vk=(pick?'pick':tab==='group'&&!clv&&!cnv?'group'+snap:arr?'arr':snap?'snap':summary?'sum':clv?'cl':cnv?'cn':'grid')+'|'+tab+'|'+fmt(day)+'|'+pg;const ds=fmt(day);const dd=lastDayS&&ds!==lastDayS?(ds>lastDayS?1:-1):0;lastDayS=ds;const vin=lastView!==''&&vk!==lastView&&motionOn();lastView=vk;if(vin)animUntil=Date.now()+450;
root.classList.toggle('nomo',!motionOn());
{const zl0=root.querySelector('.zlist');if(zl0)zlTop=zl0.scrollTop;}
root.innerHTML=hd+(pick?'':tb)+`<div class="vw${vin?(dd>0?' vin vr':dd<0?' vin vl':' vin'):''}">`+(pick?pickView():tab==='group'&&!clv&&!cnv?groupView(snap):arr?arrView():snap?snapView():summary?summaryView():clv?clView():cnv?cnView():snapView())+`</div>`+(fc&&!pick&&!arr&&tab!=='group'?focusView(fc):'')+(bub&&!fc&&!pick&&!arr?bubHtml():'');
tick();fit();bubPlace();scRestore(true);setTimeout(()=>{try{fit();}catch(e){}},350);
{const zl=root.querySelector('.zlist');if(zl&&!zAnim)zl.scrollTop=zlTop;}
if(fc&&zAnim){zAnim=false;const f=zoomFrom;zoomFrom=null;zlTop=0;animUntil=Date.now()+1300;try{const zl=root.querySelector('.zlist');if(zl&&f&&motionOn()){const r=zl.getBoundingClientRect();zl.style.transformOrigin='0 0';zl.animate([{transform:`translate(${f.left-r.left}px,${f.top-r.top}px) scale(${Math.max(.2,f.width/r.width)},${Math.max(.2,f.height/r.height)})`,opacity:.2},{transform:'none',opacity:1}],{duration:620,easing:'cubic-bezier(.22,.8,.26,1)'});}}catch(e){}}
try{root.querySelectorAll('.scc[data-s]').forEach(cc=>{const sl=cc.dataset.s;const bl=[...cc.querySelectorAll('.scb')];const r=bl.map(b=>b.getBoundingClientRect().top);const pv=snapPos[sl];if(pv&&pv.idx!==cc.dataset.idx&&pv.t.length===r.length&&motionOn()){bl.forEach((b,k)=>{const d=pv.t[k]-r[k];if(Math.abs(d)>2)b.animate([{transform:`translateY(${d}px)`},{transform:'none'}],{duration:760,easing:'cubic-bezier(.22,.8,.26,1)'});});}snapPos[sl]={idx:cc.dataset.idx,t:r};});}catch(e){}
try{const cols=[...root.querySelectorAll('.scc[data-s]')];const np={};cols.forEach(cc=>{np[cc.dataset.s]=cc.getBoundingClientRect().left;});if(colPos&&!vin&&motionOn()){cols.forEach(cc=>{const o=colPos[cc.dataset.s];if(o===undefined)return;const d=o-np[cc.dataset.s];if(Math.abs(d)>4)cc.animate([{transform:`translateX(${d}px)`},{transform:'none'}],{duration:800,easing:'cubic-bezier(.32,.72,0,1)'});});}colPos=cols.length?np:null;}catch(e){}
try{localStorage.setItem('lhp_view',JSON.stringify({snap,exp,summary,cnv,clv,focus,gi}));}catch(e){}
}
function scRestore(first){root.querySelectorAll('.sc').forEach(e=>{const s=e.dataset.s,cu=e.querySelector('[data-cur]');if(Date.now()<(scHold[s]||0)){e.scrollLeft=scTop[s]||0;return;}if(cu){scProg[s]=Date.now()+(first?150:900);if(first)e.scrollLeft=cu.offsetLeft;else e.scrollTo({left:cu.offsetLeft,behavior:'smooth'});}});}
root.addEventListener('scroll',e=>{const t=e.target;if(!t.classList||!t.classList.contains('sc'))return;const s=t.dataset.s;if(Date.now()<(scProg[s]||0))return;scHold[s]=Date.now()+5000;scTop[s]=t.scrollLeft;},true);
function fit(){root.classList.add('fitting');try{fit0();}finally{root.classList.remove('fitting');}}
function fit0(){try{const gg=root.querySelector('.gg');if(gg){const ov=()=>[...gg.querySelectorAll('.gb')].some(b=>b.scrollHeight>b.clientHeight+2||b.scrollWidth>b.clientWidth+2);let z=1,n=0;gg.style.setProperty('--z',1);while(!ov()&&z<(gg.classList.contains('one')?2.4:1.5)&&n++<30){z+=.05;gg.style.setProperty('--z',z.toFixed(2));}n=0;while(ov()&&z>.8&&n++<24){z-=.05;gg.style.setProperty('--z',z.toFixed(2));}}}catch(e){}try{root.querySelectorAll('.pv,.scbody,.blkc').forEach(el=>{if(!el.clientHeight||!el.clientWidth)return;let z=1,n=0;el.style.setProperty('--z',1);const gr=el.matches('.scbody');const cap=el.matches('.zdetail')?1.1:el.matches('.zlist')?1:(el.querySelector('.scs.rd')?1.15:1.45);if(gr){while(el.scrollHeight<=el.clientHeight+3&&z<cap&&n++<24){z+=.05;el.style.setProperty('--z',z.toFixed(2));}}n=0;while(el.scrollHeight>el.clientHeight+3&&z>(gr?.5:.35)&&n++<30){z-=.05;el.style.setProperty('--z',z.toFixed(2));}});}catch(e){}}
function tick(){{try{const nw=Date.now();root.querySelectorAll('.sct.run').forEach(e=>{const T=tm[e.dataset.tm];if(!T)return;const tb=e.querySelector('.tb'),tt=e.querySelector('.tt');const fz=T.fz?true:false;if(tb)tb.textContent=tmf(fz?T.fb:nw-T.b0);if(tt)tt.textContent=tmf(fz?T.fz:nw-T.t0);e.classList.toggle('fz',fz);});}catch(e){}}{if(!tvOn&&Date.now()-lastTouch>20000&&!pick&&!focus){tvOn=true;root.classList.toggle('tv',true);}}{const ce=root.querySelector('.gclk');if(ce){const e=gEl();ce.textContent=mmss(e);const w=root.querySelector('.gwin');if(w)w.textContent=gWin(e);}}{const n=Date.now();root.querySelectorAll('.sc').forEach(e=>{const s=e.dataset.s;if(scHold[s]&&n>=scHold[s]){scHold[s]=0;scRestore(false);}});}if(arr){if(Date.now()-arr.t0>=ARR_MS){finishArr();return;}const b=root.querySelector('.avr');if(b)b.innerHTML=arrRing();}restTick();
const now=Date.now();
const ago=clients.filter(c=>active[c.slug]).map(c=>now-(lastChange[c.slug]||now));
const sorted=ago.slice().sort((a,b)=>a-b);const med=sorted.length?sorted[Math.floor(sorted.length/2)]:0;
root.querySelectorAll('.tile').forEach(el=>{
const s=el.dataset.c;
const late=active[s]&&(now-(lastChange[s]||now))>Math.max(240000,1.6*med)&&sorted.length>1;
el.classList.toggle('late',!!late);
if(now>=(flashUntil[s]||0))el.classList.remove('flash');
const r=el.querySelector('.tm');if(r&&tmStart[s]){
const el_=Math.max(0,Math.floor((now-tmStart[s])/1000));
r.innerHTML=mmss(el_)+(tmEst[s]?`<i>est ${mmss(tmEst[s])}</i>`:'');
}
});
}
async function histLoad(){
const d0=fmt(day),f=fmt(new Date(day.getTime()-21*864e5));
await Promise.all(clients.map(async c=>{if(hist[c.slug]&&hist[c.slug].__d===d0)return;try{
const r=await fetch(`/api/v1/clients/${c.slug}/workouts.json?start_date=${f}&end_date=${d0}&shape=lean`,H);const j=await r.json();const a=Array.isArray(j)?j:(j.workouts||[]);
const m={__d:d0};a.filter(w=>w.due_date&&w.due_date.replace(/\//g,'-')<d0).sort((x,y)=>x.due_date<y.due_date?-1:1).forEach(w=>(w.workout_items||[]).forEach(i=>{if(i.status==='completed'&&i.result&&String(i.result).trim())m[bare(i.name)]=i.result;}));
hist[c.slug]=m;}catch(e){}}));
}
async function load(){
const d0=fmt(day),d1=fmt(new Date(day.getTime()+864e5));
await Promise.all(clients.map(async c=>{try{const r=await fetch(`/api/v1/clients/${c.slug}/workouts.json?start_date=${d0}&end_date=${d1}&shape=lean`,H);if(r.status===401||r.status===403){authBad=true;throw new Error('auth');}const j=await r.json();authBad=false;const a=Array.isArray(j)?j:(j.workouts||[]);data[c.slug]=applyLocal(c,a.find(w=>w.due_date&&w.due_date.replace(/\//g,'-')===d0)||null);}catch(e){data[c.slug]=undefined;}}));
await Promise.all(clients.map(async c=>{const w=data[c.slug];if(!w||!w.comments_count)return;const k=w.id+':'+w.comments_count;if(k in comm)return;comm[k]='';
try{const f=await (await fetch(`/api/v1/clients/${c.slug}/workouts/${w.id}`,H)).json();const cs=((f.workout||f).comments||[]).filter(x=>x.author&&x.author.type==='Client');if(cs.length)comm[k]=cs[cs.length-1].body||'';}catch(e){delete comm[k];}}));
if(authBad){const t=root.querySelector('.ts');if(t)t.textContent='⚠ Signed out of CoachRx';if(!load.warned){load.warned=1;toast('CoachRx signed you out. Sign in, then tap the bookmark again.');}return;}load.warned=0;
if(tab==='group'){const c0=clients[0],w0=c0&&data[c0.slug];if(w0&&!w0.rest_day){const o=gdet[w0.id];if(!o||Date.now()-o.t>60000){gdet[w0.id]={t:Date.now(),wk:o?o.wk:null};try{const f=await (await fetch(`/api/v1/clients/${c0.slug}/workouts/${w0.id}`,H)).json();gdet[w0.id]={t:Date.now(),wk:f.workout||f};}catch(e){}}}}
lastLoad=new Date();{const nr=clients.filter(c=>data[c.slug]&&!data[c.slug].rest_day);if(!summary&&!cnv&&!clv&&!pick&&!focus&&nr.length&&nr.every(c=>{const w=data[c.slug],st=steps(w);return w.status==='completed'||(st.length&&st.every(done));})&&!autoSum[fmt(day)]){autoSum[fmt(day)]=1;summary=true;sig='';}}
const s=JSON.stringify(bub)+(focus?JSON.stringify(data[focus]):JSON.stringify(data))+JSON.stringify(comm)+focus+zSel+pick+snap+tab+Object.keys(gdet).map(k=>JSON.stringify(gdet[k].wk)).join('');
const typing=document.activeElement&&document.activeElement.tagName==='INPUT'&&root.contains(document.activeElement);
if(s!==sig&&!pick&&!typing&&Date.now()>=animUntil){sig=s;render();}
else{const t=root.querySelector('.ts');if(t)t.textContent='v81 · updated '+lastLoad.toLocaleTimeString([], {hour:'numeric',minute:'2-digit',second:'2-digit'});}
}
const SLOT=/^\d{1,2}:\d{2}\s*(?:AM|PM)\s+[A-Z]+(?:\s*-\s*\w+)?$/i;
const slotMin=n=>{const m=n.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)/i);let h=+m[1]%12;if(/PM/i.test(m[3]))h+=12;return h*60+ +m[2];};
const slotDays=n=>/MWF/i.test(n)?0:1;
const dayPat=()=>{const g=day.getDay();return g===1||g===3||g===5?0:g===2||g===4?1:null;};
function slotMap(){const m={};all.forEach(c=>(c.tags||[]).forEach(t=>{if(SLOT.test(t.name)){const o=m[t.name]=m[t.name]||{co:{},n:0};o.n++;o.co[c._coach||'Other']=(o.co[c._coach||'Other']||0)+1;}}));Object.values(m).forEach(o=>{o.coach=Object.entries(o.co).sort((a,b)=>b[1]-a[1])[0][0];});return m;}
function coachList(){const m=slotMap();const co={};Object.values(m).forEach(o=>{if(o.coach)co[o.coach]=1;});return Object.keys(co).sort();}
function coachSlots(cn){const m=slotMap();return Object.keys(m).filter(n=>m[n].coach===cn).sort((a,b)=>{const p=dayPat();const ka=p===null?0:(slotDays(a)===p?0:1),kb=p===null?0:(slotDays(b)===p?0:1);return ka-kb||slotDays(a)-slotDays(b)||slotMin(a)-slotMin(b)||a.localeCompare(b);});}
function followDay(){const p=dayPat();if(p===null||tab==='custom'||!SLOT.test(tab)||slotDays(tab)===p)return;const co=slotMap()[tab]&&slotMap()[tab].coach||cc;const sl=coachSlots(co).filter(n=>slotDays(n)===p);if(!sl.length)return;const m=slotMin(tab);tab=sl.find(n=>slotMin(n)===m)||sl[0];cc=co;}
function tabList(){return Object.keys(slotMap());}
function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;root.appendChild(d);setTimeout(()=>d.remove(),4000);}
async function setBlock(spec,want){
if(busy)return;busy=true;const[slug,wid,ids]=spec.split('|');const L2=ids.split(',').filter(Boolean);
try{
const hh={Authorization:'Bearer '+tok,Accept:'application/json','Content-Type':'application/json'};
const r=await fetch(`/api/v1/clients/${slug}/workouts/${wid}`,{method:'PUT',headers:hh,body:JSON.stringify({workout:{workout_items_attributes:L2.map(id=>({id:+id,status:want}))}})});
const f=await (await fetch(`/api/v1/clients/${slug}/workouts/${wid}`,H)).json();const its=((f.workout||f).workout_items||[]);
if(!r.ok||!L2.every(id=>{const it=its.find(i=>String(i.id)===id);return it&&it.status===want;}))toast('Could not save that change. Nothing was changed.');
}catch(e){toast('Could not save that change. Nothing was changed.');}
busy=false;sig='';await load();
}
const completeBlock=spec=>setBlock(spec,'completed');
async function saveResult(spec){
if(busy)return;const[slug,wid,iid]=spec.split('|');const inp=[...root.querySelectorAll('input.ri')].find(x=>x.dataset.ri===spec);if(!inp)return;const val=inp.value.trim();
if(!val){toast('Type a result first.');return;}
busy=true;let ok=false;
try{
const hh={Authorization:'Bearer '+tok,Accept:'application/json','Content-Type':'application/json'};
const r=await fetch(`/api/v1/clients/${slug}/workouts/${wid}`,{method:'PUT',headers:hh,body:JSON.stringify({workout:{workout_items_attributes:[{id:+iid,result:val,status:'completed'}]}})});
const f=await (await fetch(`/api/v1/clients/${slug}/workouts/${wid}`,H)).json();const it=((f.workout||f).workout_items||[]).find(i=>String(i.id)===iid);
ok=r.ok&&it&&it.status==='completed'&&String(it.result||'').trim()===val;
}catch(e){}
toast(ok?'Saved ✓':'Could not save that result. Nothing was changed.');
busy=false;bub=null;try{inp.blur();}catch(e){}sig='';await load();
}
async function complete(spec){
if(busy)return;busy=true;const[slug,wid,iid,st]=spec.split('|');const want=st==='completed'?'pending':'completed';
try{
const hh={Authorization:'Bearer '+tok,Accept:'application/json','Content-Type':'application/json'};
const r=await fetch(`/api/v1/clients/${slug}/workouts/${wid}`,{method:'PUT',headers:hh,body:JSON.stringify({workout:{workout_items_attributes:[{id:+iid,status:want}]}})});
const f=await (await fetch(`/api/v1/clients/${slug}/workouts/${wid}`,H)).json();const it=((f.workout||f).workout_items||[]).find(i=>String(i.id)===iid);
if(!r.ok||!it||it.status!==want)toast('Could not save that check. Nothing was changed.');else if(want==='completed')toast('Marked complete ✓');
}catch(e){toast('Could not save that check. Nothing was changed.');}
busy=false;sig='';await load();
}
function applyClients(){if(tab==='group'){const g=all.find(c=>c._grp);tabAll=g?[g]:[];clients=tabAll.slice();pg=0;return;}const byName=(x,y)=>x.name.localeCompare(y.name);{const sl=groupSlugs();const base=baseGroup().filter(c=>sl.includes(c.slug));base.sort(byName);tabAll=base.concat(sl.filter(x=>!base.some(c=>c.slug===x)).map(x=>all.find(c=>c.slug===x)).filter(Boolean)).sort(byName);}const pages=Math.max(1,Math.ceil(tabAll.length/MAX));if(pg>=pages)pg=0;clients=tabAll.slice(pg*MAX,pg*MAX+MAX);}
function reset(){data={};hist={};sig='';Object.keys(lastIdx).forEach(k=>delete lastIdx[k]);Object.keys(restEnd).forEach(k=>delete restEnd[k]);}
function setClients(){applyClients();try{localStorage.setItem('lhp_sel2',JSON.stringify(sel));localStorage.setItem('lhp_tab',tab);}catch(e){}}
function shift(n){day=new Date(day.getTime()+n*864e5);followDay();applyClients();reset();render();load();histLoad();}
root.addEventListener('click',e=>{
{const t=e.target;const hasBtn=t&&t.closest&&t.closest('button');const inB=t&&t.closest&&t.closest('.bub');const si=!hasBtn&&!inB&&t&&t.closest?t.closest('.sci[data-iid]'):null;
if(si){const pp=String(si.dataset.iid).split('|');const sl=pp[0],id=pp[1];bub=(bub&&bub.slug===sl&&String(bub.id)===id)?null:{slug:sl,id:id};bubOpen();return;}
if(bub&&!hasBtn&&!inB){bub=null;bubOpen();return;}
if(bub&&hasBtn&&!inB){bub=null;{const o=root.querySelector('.bub');if(o)o.remove();}}}
const b=e.target.closest('button');
if(b){
const a=b.dataset.act;
if(b.dataset.rm){const r=b.dataset.rm;if(rmArm===r){rmArm=null;toggleMember(r);try{localStorage.setItem('lhp_sel2',JSON.stringify(sel));}catch(e){}pg=Math.min(pg,Math.max(0,Math.ceil((tabAll.length-1)/MAX)-1));reload();}else{rmArm=r;render();setTimeout(()=>{if(rmArm===r){rmArm=null;render();}},3500);}return;}
if(b.dataset.ck){complete(b.dataset.ck);return;}
if(b.dataset.blk){completeBlock(b.dataset.blk);return;}
if(b.dataset.rst){const sl=b.dataset.rst;if(true){rstArm[sl]=0;tmLoad();delete tm[sl];tmSave();try{localStorage.setItem(rsKey(sl),'1');localStorage.removeItem('lhp_st_'+sl+fmt(day));}catch(e){}setCur(sl,0);relocal();delete startedMap[sl+fmt(day)];lastSnap[sl]=undefined;}else{rstArm[sl]=Date.now();setTimeout(()=>{if(rstArm[sl]){rstArm[sl]=0;sig='';render();}},4000);}sig='';render();return;}
if(b.dataset.tms&&motionOn()&&!b.dataset.go){const cc=b.closest('.scc');const bd=cc&&cc.querySelector('.scbody');if(bd&&bd.animate){b.dataset.go='1';bd.animate([{opacity:1,transform:'none'},{opacity:0,transform:'scale(.94) translateY(-1.5vmin)'}],{duration:320,easing:'cubic-bezier(.32,.72,0,1)',fill:'forwards'});goAnim[b.dataset.tms]=Date.now()+1300;animUntil=Date.now()+1300;setTimeout(()=>b.click(),300);return;}}
if(b.dataset.tms){try{localStorage.removeItem(rsKey(b.dataset.tms));}catch(e){}tmLoad();const sl=b.dataset.tms;const w=data[sl];const st=w&&!w.rest_day?steps(w):[];const nw=Date.now();tm[sl]={t0:nw,b0:nw,idx:st.findIndex(x=>!done(x))};tmSave();setStarted(sl);sig='';render();return;}
if(b.dataset.tmr){tmLoad();delete tm[b.dataset.tmr];tmSave();sig='';render();return;}
if(b.dataset.ln||b.dataset.lp){const sl=b.dataset.ln||b.dataset.lp;const w=data[sl];if(w&&!w.rest_day){const N=steps(w).length;setCur(sl,Math.max(0,Math.min(N,getCur(sl)+(b.dataset.ln?1:-1))));relocal();bub=null;sig='';render();}return;}
if(b.dataset.zs){zSel=b.dataset.zs;zSwap=true;sig='';render();return;}
if(b.dataset.zoom){return;try{zoomFrom=(b.closest('.scc')||b).getBoundingClientRect();}catch(e){zoomFrom=null;}zBack=null;zSel=null;zAnim=true;focus=b.dataset.zoom;sig='';render();return;}
if(b.dataset.gn){const d=+b.dataset.gn;const n=Math.max(0,Math.min(gN-1,gi+d));if(n!==gi){gi=n;gslide=d;sig='';render();}return;}
if(b.dataset.gt){if(b.dataset.gt==='reset'){gc.acc=0;gc.run=false;}else if(gc.run){gc.acc+=Date.now()-gc.t0;gc.run=false;}else{gc.t0=Date.now();gc.run=true;}gc.day=new Date().toDateString();gSave();sig='';render();return;}
if(b.dataset.bk){setBlock(b.dataset.bk,'pending');return;}
if(b.dataset.sv){saveResult(b.dataset.sv);return;}
if(b.dataset.wodc){const c=clients.find(x=>x.slug===b.dataset.wodc);wodOpen(c||null);return;}
if(b.dataset.cm){bub=null;complete(b.dataset.cm);return;}
if(b.dataset.rs){const s=b.dataset.rs;if((restEnd[s]||0)>Date.now())restEnd[s]=0;else if(+b.dataset.rd>0)restEnd[s]=Date.now()+(+b.dataset.rd)*1000;restTick();return;}
if(b.dataset.go){const _g=b.dataset.go;arr={slug:_g,t0:Date.now()};focus=null;summary=false;sig='';render();return;}
if(a==='skip'||(a==='home'&&arr)){finishArr();return;}
if(b.dataset.pg){const pages=Math.max(1,Math.ceil(tabAll.length/MAX));pg=(pg+(+b.dataset.pg)+pages)%pages;applyClients();reset();render();load();histLoad();prLoad();return;}
if(b.dataset.cc){cc=b.dataset.cc;try{localStorage.setItem('lhp_cc',cc);}catch(e){}const sl=coachSlots(cc);pg=0;tab=sl[0]||'custom';focus=null;summary=false;snap=false;setClients();reset();render();load();histLoad();prLoad();return;}
if(b.dataset.tab){pg=0;tab=b.dataset.tab;focus=null;summary=false;snap=false;setClients();reset();render();load();histLoad();prLoad();return;}
if(a==='home'){focus=null;pick=false;cnv=false;clv=false;summary=false;snap=false;sig='';render();load();return;}
if(a==='cnotes'){cnv=!cnv;clv=false;summary=false;snap=false;focus=null;sig='';render();return;}
if(a==='clist'){clv=!clv;cnv=false;summary=false;snap=false;focus=null;sig='';render();return;}
if(a==='snap'){if(summary||clv||cnv){summary=false;cnv=false;clv=false;}else exp=!exp;snap=false;focus=null;sig='';render();return;}
if(a==='wod'){wodOpen(null);return;}if(a==='unhide'){const o=ovGet();o.rm=[];ovSave();pg=0;reload();return;}
if(a==='summary'){summary=!summary;snap=false;cnv=false;clv=false;focus=null;sig='';render();return;}
if(a==='edit'){edit=!edit;try{localStorage.setItem('lhp_edit',edit?'1':'0');}catch(e){}sig='';render();return;}
if(b.dataset.tag){pickTag=b.dataset.tag;render();return;}
if(b.dataset.pc){toggleMember(b.dataset.pc);try{localStorage.setItem('lhp_sel2',JSON.stringify(sel));}catch(e){}applyClients();render();return;}
if(a==='pick'){pick=true;pickTag=pickTag||null;render();}
else if(a==='pickdone'){pick=false;pg=0;reload();}
else if(a==='back'){closeZ();}
else if(a==='motion'){try{localStorage.setItem('lhp_motion',motionOn()?'0':'1');}catch(e){}render();}
else if(a==='prev')shift(-1);else if(a==='next')shift(1);
else if(a==='today'){day=new Date();day.setHours(12,0,0,0);followDay();applyClients();reset();render();load();histLoad();}
else if(a==='fs'){const el=document.documentElement;const fe=document.fullscreenElement||document.webkitFullscreenElement;const hint=()=>toast('Fullscreen blocked. In Safari tap aA, then Hide Toolbar.');if(fe){try{(document.exitFullscreen||document.webkitExitFullscreen).call(document);}catch(e){}}else{const f=el.requestFullscreen||el.webkitRequestFullscreen;if(!f)hint();else{try{const r=f.call(el);if(r&&r.catch)r.catch(hint);}catch(e){hint();}}}}
else if(a==='close')close();
return;}
const t=e.target.closest('[data-c]');if(false&&t&&!focus&&!pick){zoomFrom=t.getBoundingClientRect();zBack=null;zSel=null;zAnim=true;focus=t.dataset.c;sig='';render();}
});
function close(){document.removeEventListener('visibilitychange',vis);try{if(wl)wl.release();}catch(e){}clearInterval(timer);clearInterval(tk);root.remove();style.remove();delete window.__lhpBoard;}
window.__lhpBoard={close};
root.addEventListener('pointerdown',e=>{lastTouch=Date.now();if(bub&&e.target.closest&&e.target.closest('.bub'))bubArm();if(tvOn){tvOn=false;root.classList.toggle('tv',false);try{if(e.target.closest('.hd,.tabs'))wakeTap=Date.now();}catch(x){}}},true);
(()=>{let sx=0,sy=0,st=null,sl=null,ud=null;
const showU=()=>{if(!ud||Date.now()>ud.until){ud=null;return;}if(root.querySelector('.undo'))return;const d=document.createElement('div');d.className='undo';d.innerHTML='<span></span><button>Undo</button>';d.firstChild.textContent=ud.nm+' hidden';d.querySelector('button').onclick=()=>{const s0=ud.s;ud=null;clearTimeout(undoT);d.remove();toggleMember(s0);try{localStorage.setItem('lhp_sel2',JSON.stringify(sel));}catch(x){}reload();};root.appendChild(d);};
try{new MutationObserver(()=>{if(ud)showU();}).observe(root,{childList:true});}catch(e){}
root.addEventListener('pointerdown',e=>{const h=e.target.closest&&e.target.closest('.sch');if(!h||e.target.closest('button')){sl=null;return;}const cc=h.closest('.scc[data-s]');sl=cc?cc.dataset.s:null;sx=e.clientX;sy=e.clientY;st=Date.now();},true);
root.addEventListener('pointerup',e=>{if(!sl)return;const s0=sl;sl=null;const dy=e.clientY-sy,dx=e.clientX-sx;if(dy>-60||Math.abs(dx)>Math.abs(dy)*.7||Date.now()-st>1200)return;
if(!groupSlugs().includes(s0))return;toggleMember(s0);try{localStorage.setItem('lhp_sel2',JSON.stringify(sel));}catch(x){}
pg=Math.min(pg,Math.max(0,Math.ceil((tabAll.length-2)/MAX)));reload();
ud={s:s0,nm:(all.find(c=>c.slug===s0)||{}).name||'Client',until:Date.now()+5000};clearTimeout(undoT);const o=root.querySelector('.undo');if(o)o.remove();showU();undoT=setTimeout(()=>{ud=null;const o2=root.querySelector('.undo');if(o2)o2.remove();},5000);},true);})();
(()=>{let raf=0;const upd=b=>{if(!motionOn()){b.querySelectorAll('.scb').forEach(x=>{x.style.removeProperty('--sz');});return;}const H=b.clientHeight;if(b.scrollHeight<=H+4){b.querySelectorAll('.scb').forEach(x=>{x.style.transform='';x.style.opacity='';});return;}const r=b.getBoundingClientRect(),mid=r.top+H/2;b.querySelectorAll('.scb').forEach(x=>{const q=x.getBoundingClientRect();const d=Math.min(1,Math.abs(q.top+q.height/2-mid)/(H*.75));x.style.transform='scale('+(1-d*.07).toFixed(3)+')';x.style.opacity=(1-d*.45).toFixed(2);});};
const run=e=>{const b=e.target.closest&&e.target.closest('.scbody');if(!b)return;cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>upd(b));};
root.addEventListener('scroll',run,true);})();
(async()=>{
root.innerHTML='<div class="msg" style="margin:auto">Loading…</div>';
try{const cs=await (await fetch('/api/v1/organizations/me/coaches',H)).json();const cl=cs.coaches||cs;const seen={};const lists=await Promise.all((Array.isArray(cl)?cl:[]).map(async co=>{try{const j=await (await fetch('/api/v1/coaches/'+co.id+'/clients?per_page=200',H)).json();return (j.clients||[]).filter(c=>c.state==='active').map(c=>{c._coach=co.first_name||'';return c;});}catch(e){return [];}}));lists.forEach(l=>l.forEach(c=>{if(!seen[c.slug]){seen[c.slug]=1;all.push(c);}}));}catch(e){}
if(!all.length){try{all=((await (await fetch('/api/v1/clients?per_page=200',H)).json()).clients||[]).filter(c=>c.state==='active');}catch(e){}}
if(!all.length){root.innerHTML='<div class="msg" style="margin:auto">Could not load clients. Make sure you are signed in to CoachRx.</div>';return;}
{const G=all.find(c=>c.slug===GRP);if(G){G.name='Group';G._grp=1;}}
try{sel=JSON.parse(localStorage.getItem('lhp_sel2')||'[]').filter(s=>all.some(c=>c.slug===s)).slice(0,MAX);}catch(e){sel=[];}
if(!sel.length)sel=DEFAULT.map(n=>all.find(c=>norm(c.name)===norm(n))).filter(Boolean).map(c=>c.slug);
try{const t=localStorage.getItem('lhp_tab');if(t)tab=t;}catch(e){}
if(tab==='group'&&!all.some(c=>c._grp))tab='custom';if(tab!=='custom'&&tab!=='group'&&!tabList().includes(tab))tab='custom';if(tab!=='custom'&&tab!=='group'){const mm=slotMap()[tab];if(mm&&mm.coach)cc=mm.coach;followDay();}
setClients();try{const v=JSON.parse(localStorage.getItem('lhp_view')||'null');if(v){snap=false;exp=!!v.exp;summary=!!v.summary;cnv=!!v.cnv;clv=!!v.clv;gi=v.gi|0;focus=null;}}catch(e){}
render();await load();histLoad().then(()=>{sig='';render();prLoad();});
wake();timer=setInterval(load,POLL);tk=setInterval(tick,1000);
})();
})();
