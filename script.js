// Screen flow reconstructed from the reference recording.
// Negative buttons escalate to the next plea; "forgiven" buttons go to the ending.
const LETTER = "I'm really sorry. Idk why but ur depressed and dull but i hope this cheers u up and take this as a token of appreciation okay and dont take it that way  !! . You are doing so good , your hard working and ur always perfect. You know butterflies cant see thier wing jst like how u dont see how perfect and amazing you are . So smilee plsss . everything will be better and as u want it to be so jst relaxx and be happy . im always there is u want to talk about anything anytime . Im really sorry i wasnt there for u last night to talk to , i feel horribel for that , im reallly sryyyyyyyyyyyyy . My Apologiess Amaiyee .\nForever your best friend";
const P = {
 p2:{t:'I am Sorry ',a:'catheart',y:['Aww, okay','end'],n:['Not Accepted','p3']},
 p3:{t:'Pleaseeeeee',a:'pig',y:['Okay okay Fine','end'],n:['No','p4']},
 p4:{t:'Are you sure?',a:'blanket',y:['Okay, forgiven','end'],n:["Yes, I'm sure",'p5']},
 p5:{t:'Flowers for you',a:'flowers',y:['Aww, thankyou, forgiven','end'],n:['No','p6']},
 p6:{t:'Okay Cake too....',a:'cake',y:['Cake?! I forgive you','end'],n:['Still not enough','p7']},
 p7:{t:'Momos?',a:'momos',y:['Okay!! Fine','end'],n:['NO','p8']},
 p8:{t:"Okay I'm leaving now, don't miss me",a:'bike',y:["Wait, don't go! Forgiven",'end'],n:['Okay Byeee','p9']},
 p9:{t:'Pleaseeeeeeeee.........',a:'plead',y:['Okay come back, apology accepted','end'],n:['Still No','p10']},
 p10:{t:'Wanna fight?',a:'bunny',y:['Fine fine, forgiven','end'],n:['Yes, why not','p11']},
 p11:{t:"No, I can't fight you",a:'bunnyflower',y:["Aww, I can't either, frogiven",'end'],n:["Good because I'm still mad",'p12']},
 p12:{t:"Please, I won't do it again",a:'cry',y:['Okay, Accepted','end'],n:['NO NO NO','p13']},
 p13:{t:'You can\u2019t click \u201CNo\u201D now, try clicking if you want',a:'monkey',y:['Fine! forgiven','end'],n:['No',null]}
};
// Optional real stickers: drop assets/<key>.png and it replaces the built-in drawing.
const S = (b,x='')=>`<svg viewBox="0 0 100 100">${b}${x}</svg>`;
const cat=(f,x='',e='')=>S(`<path d="M22 40 26 12 44 28ZM78 40 74 12 56 28Z" fill="${f}"/><ellipse cx="50" cy="52" rx="32" ry="28" fill="${f}"/><ellipse cx="50" cy="60" rx="14" ry="10" fill="#fff"/><circle cx="38" cy="48" r="5" fill="#222"/><circle cx="62" cy="48" r="5" fill="#222"/><path d="M46 57h8l-4 4Z" fill="#e88"/>${e}`,x);
const heart=(x,y,c='#e65b8a')=>`<path transform="translate(${x} ${y})" d="M0 4C-6-4 6-8 0 0 6-8 18-4 12 4L6 12Z" fill="${c}"/>`;
const ART={
 catheart:()=>cat('#b9a79a',`<ellipse cx="38" cy="86" rx="12" ry="9" fill="#f3c9c3"/><ellipse cx="62" cy="86" rx="12" ry="9" fill="#f3c9c3"/>`+heart(44,76)),
 pig:()=>S(`<ellipse cx="50" cy="55" rx="36" ry="32" fill="#f4b6b6"/><path d="M20 30 32 14 40 34ZM80 30 68 14 60 34Z" fill="#eaa0a0"/><ellipse cx="50" cy="64" rx="15" ry="11" fill="#f08e9a"/><circle cx="45" cy="64" r="2.5" fill="#a44"/><circle cx="55" cy="64" r="2.5" fill="#a44"/><circle cx="36" cy="46" r="4" fill="#222"/><circle cx="64" cy="46" r="4" fill="#222"/>`),
 blanket:()=>cat('#d9a56a','',`<path d="M12 70Q50 60 90 72L88 96 14 96Z" fill="#e88aa0"/>`),
 flowers:()=>cat('#aaa','',`<circle cx="74" cy="24" r="7" fill="#f4a0c0"/><g fill="#f4a0c0"><circle cx="24" cy="84" r="9"/><circle cx="38" cy="90" r="9"/></g>`),
 cake:()=>cat('#e8a35c','',`<rect x="30" y="78" width="40" height="18" rx="4" fill="#f7e3e3"/><circle cx="50" cy="76" r="7" fill="#d33"/><path d="M26 18l10 8-4-12ZM74 18l-10 8 4-12Z" fill="#c33"/>`),
 momos:()=>cat('#bbb','',`<ellipse cx="30" cy="86" rx="22" ry="10" fill="#fff"/><g fill="#f1d9a6"><circle cx="20" cy="80" r="7"/><circle cx="34" cy="78" r="7"/><circle cx="28" cy="88" r="7"/></g>`),
 bike:()=>cat('#e9c9a0','',`<circle cx="30" cy="90" r="9" fill="none" stroke="#d33" stroke-width="5"/><circle cx="72" cy="90" r="7" fill="none" stroke="#d33" stroke-width="5"/><rect x="40" y="76" width="30" height="14" rx="6" fill="#f4b6c6"/>`),
 plead:()=>cat('#f0a35c','',`<ellipse cx="34" cy="88" rx="10" ry="7" fill="#f6d7b0"/><ellipse cx="66" cy="88" rx="10" ry="7" fill="#f6d7b0"/>`),
 bunny:()=>S(`<ellipse cx="38" cy="14" rx="6" ry="20" fill="#e6e1dc"/><ellipse cx="62" cy="14" rx="6" ry="20" fill="#e6e1dc"/><ellipse cx="50" cy="60" rx="30" ry="34" fill="#eeeae6"/><circle cx="40" cy="48" r="3.5" fill="#222"/><circle cx="60" cy="48" r="3.5" fill="#222"/><path d="M46 56h8l-4 4Z" fill="#e88"/>`),
 bunnyflower:()=>S(`<ellipse cx="30" cy="40" rx="6" ry="22" fill="#d7d1ca" transform="rotate(25 30 40)"/><ellipse cx="70" cy="40" rx="6" ry="22" fill="#d7d1ca" transform="rotate(-25 70 40)"/><ellipse cx="50" cy="62" rx="26" ry="32" fill="#e3ded8"/><path d="M26 30Q50 8 74 30Q50 26 26 30Z" fill="#e8a4cc"/><circle cx="42" cy="52" r="3" fill="#222"/><circle cx="58" cy="52" r="3" fill="#222"/>`),
 cry:()=>cat('#999','',`<path d="M32 52c-6 14-8 26 0 30M68 52c6 14 8 26 0 30" stroke="#3aa0e8" stroke-width="7" fill="none"/><path d="M42 86l8-18 8 18Z" fill="#f2b84b"/>`),
 monkey:()=>S(`<circle cx="18" cy="48" r="9" fill="#9a6b45"/><circle cx="82" cy="48" r="9" fill="#9a6b45"/><ellipse cx="50" cy="50" rx="30" ry="32" fill="#8a5a38"/><ellipse cx="50" cy="56" rx="19" ry="17" fill="#e0b793"/><circle cx="41" cy="46" r="3.5" fill="#222"/><circle cx="59" cy="46" r="3.5" fill="#222"/>`,heart(44,78,'#d46a8a')),
 sign:()=>S(`<circle cx="50" cy="20" r="14" fill="#fff" stroke="#222" stroke-width="2.5"/><rect x="18" y="38" width="64" height="34" rx="3" fill="#d9a6e8" stroke="#222" stroke-width="3"/><text x="50" y="55" font-size="11" text-anchor="middle" font-family="Gochi Hand,cursive">you are</text><text x="50" y="67" font-size="11" text-anchor="middle" font-family="Gochi Hand,cursive">amazing</text><path d="M34 72v16M66 72v16" stroke="#222" stroke-width="3"/>`,heart(8,10,'#c58ae0')+heart(80,6,'#c58ae0'))
};
const $=document.getElementById('app');
function art(k){const d=document.createElement('div');d.className='art';d.innerHTML=ART[k]();
 const i=new Image();i.alt='';i.onload=()=>{d.innerHTML='';d.appendChild(i)};i.src=`assets/${k}.png`;return d}
function go(id){
 const s=document.createElement('section');s.className='screen';
 if(id==='end'){s.classList.add('end');s.innerHTML='<h1>Yayyyyy!! Thank you for forgiving</h1>';const a=art('sign');a.classList.add('sign');s.appendChild(a);}
 else{const p=P[id];
  const t=document.createElement('div');t.className='pill';t.textContent=p.t;
  const b=document.createElement('div');b.className='btns';
  [p.y,p.n].forEach(([l,to])=>{const x=document.createElement('button');x.className='btn';x.textContent=l;
   if(to)x.onclick=()=>go(to);else{x.disabled=true;x.setAttribute('aria-disabled','true')}b.appendChild(x)});
  s.append(t,art(p.a),b);}
 $.replaceChildren(s);
}
function letter(){
 const s=document.createElement('section');s.className='screen letter';
 s.innerHTML='<div class="photo">\u{1F497}</div><div class="wrap"><div class="note"></div></div>';
 const n=s.querySelector('.note'),w=s.querySelector('.wrap');$.replaceChildren(s);
 let i=0;
 const btn=()=>{if(w.querySelector('.btn'))return;const b=document.createElement('button');b.className='btn cont';b.textContent='Continue';b.onclick=()=>go('p2');w.appendChild(b)};
 const iv=setInterval(()=>{n.innerHTML=LETTER.slice(0,++i).replace('\n','<br>');
  if(i>=LETTER.length){clearInterval(iv);btn()}},35);
 s.onclick=e=>{if(i<LETTER.length-1)i=LETTER.length-1}; // tap to skip typing
}
letter();
