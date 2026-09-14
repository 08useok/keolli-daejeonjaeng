const STAGES=[
 {name:'한국',flag:'🇰🇷',hp:500,gap:5,wave:0,sky:'#84cef3',land:'#8fca52',desc:'첫 출격 · 5초마다 멍뭉이'},
 {name:'몽골',flag:'🇲🇳',hp:500,gap:4.8,wave:0,sky:'#a3daf2',land:'#aac66d',desc:'신규 적 낼름이 · 빠른 접근에 주의하세요'},
 {name:'중국',flag:'🇨🇳',hp:500,gap:4.6,wave:24,sky:'#bdd5da',land:'#79ab71',desc:'24초마다 멍뭉이 2마리 증원 · 클리어 보상: 오렌지'},
 {name:'태국',flag:'🇹🇭',hp:500,gap:4.4,wave:22,sky:'#9bdfdb',land:'#68b084',desc:'신규 적 놈놈놈 · 세 명이 함께 달려옵니다'},
 {name:'캄보디아',flag:'🇰🇭',hp:750,gap:4.2,wave:20,sky:'#c3d8bd',land:'#76985e',desc:'20초마다 증원 · 수입 업그레이드를 활용하세요'},
 {name:'필리핀',flag:'🇵🇭',hp:750,gap:4,wave:18,sky:'#77d9e8',land:'#d5cd8b',desc:'18초마다 증원 · 클리어 보상: 옐로우'},
 {name:'일본',flag:'🇯🇵',hp:2400,gap:3.8,wave:16,sky:'#f1d8e5',land:'#a0b57a',desc:'신규 적 하마양 · 적 성 체력 50%에서 보스 출현 · 보상: 그린'},
 {name:'호주',flag:'🇦🇺',hp:1500,gap:3.6,wave:15,sky:'#b3ddf2',land:'#d5ae72',desc:'멍뭉이 · 낼름이 · 놈놈놈의 혼성 전투'},
 {name:'싱가포르',flag:'🇸🇬',hp:3000,gap:3.5,wave:15,sky:'#a1dbed',land:'#85b87d',desc:'몰디브로 향하는 전선'},
 {name:'몰디브',flag:'🇲🇻',hp:2500,gap:3.4,wave:15,sky:'#78dae9',land:'#e6d29d',desc:'신규 빨간 적 돼지새끼 · 범위 공격에 주의하세요'},
 {name:'인도',flag:'🇮🇳',hp:3500,gap:3.4,wave:16,sky:'#f3d2a0',land:'#bca364',desc:'하마양 재등장 · 강화한 아군으로 돌파하세요'},
 {name:'네팔',flag:'🇳🇵',hp:4000,gap:3.3,wave:16,sky:'#bedeee',land:'#92a399',desc:'돼지새끼의 범위 공격을 견디세요'},
 {name:'두바이',flag:'🇦🇪',hp:5000,gap:3.2,wave:15,sky:'#ead8b3',land:'#cfa768',desc:'신규 적 재키펭 · 클리어 보상: 시안'},
 {"name": "사우디아라비아", "flag": "🇸🇦", "hp": 6000, "gap": 4, "wave": 0, "sky": "#efd1a1", "land": "#d1aa6e", "desc": "하마양과 혼성 부대"},
 {"name": "케냐", "flag": "🇰🇪", "hp": 6100, "gap": 4, "wave": 0, "sky": "#f0cea0", "land": "#bb9d56", "desc": "하마양과 돼지새끼의 협공"},
 {"name": "마다가스카르", "flag": "🇲🇬", "hp": 7000, "gap": 4, "wave": 0, "sky": "#a4dfed", "land": "#6ba976", "desc": "신규 적 고릴라저씨 · 클리어 보상: 블루"},
 {"name": "남아프리카", "flag": "🇿🇦", "hp": 7000, "gap": 4, "wave": 0, "sky": "#c2deee", "land": "#b9b17d", "desc": "재키펭과 대형 적이 합류합니다"},
 {"name": "가나", "flag": "🇬🇭", "hp": 8000, "gap": 4, "wave": 0, "sky": "#f2dcb7", "land": "#b69a68", "desc": "빠른 재키펭과 돼지새끼"},
 {"name": "사하라사막", "flag": "🏜️", "hp": 9000, "gap": 4, "wave": 0, "sky": "#eec08f", "land": "#d0a567", "desc": "신규 적 메에메에 · 클리어 보상: 퍼플"},
 {"name": "이집트", "flag": "🇪🇬", "hp": 9000, "gap": 4, "wave": 0, "sky": "#e5caab", "land": "#cdb47a", "desc": "고릴라저씨를 중심으로 한 혼성 부대"},
 {"name": "터키", "flag": "🇹🇷", "hp": 10000, "gap": 4, "wave": 0, "sky": "#b7d9e7", "land": "#b09d80", "desc": "여덟 종류의 적을 상대하세요"},
 {"name": "러시아", "flag": "🇷🇺", "hp": 12000, "gap": 4, "wave": 0, "sky": "#d7e8f3", "land": "#b6c8c7", "desc": "재키펭과 고릴라저씨의 빠른 진격"},
 {"name": "그리스", "flag": "🇬🇷", "hp": 15000, "gap": 4, "wave": 0, "sky": "#98d6ef", "land": "#bcbf9a", "desc": "신규 빨간 적 바다레오파드 · 퍼플을 활용하세요"},
 {"name": "이탈리아", "flag": "🇮🇹", "hp": 15000, "gap": 4, "wave": 0, "sky": "#c4dfdf", "land": "#a4b58a", "desc": "대형 적과 고릴라저씨의 전선"},
 {"name": "모나코", "flag": "🇲🇨", "hp": 15000, "gap": 4, "wave": 0, "sky": "#aaddec", "land": "#cfba98", "desc": "재키펭과 메에메에의 혼성 부대"},
 {"name": "스페인", "flag": "🇪🇸", "hp": 15000, "gap": 4, "wave": 0, "sky": "#f0cfb4", "land": "#c6ae6d", "desc": "바다레오파드와 아거"},
 {"name": "프랑스", "flag": "🇫🇷", "hp": 15000, "gap": 4, "wave": 0, "sky": "#b8d9ef", "land": "#93ad75", "desc": "일곱 종류의 혼성 부대"},
 {"name": "독일", "flag": "🇩🇪", "hp": 15000, "gap": 4, "wave": 0, "sky": "#c9d7e2", "land": "#8da06c", "desc": "아홉 종류의 혼성 부대"},
 {"name": "덴마크", "flag": "🇩🇰", "hp": 18000, "gap": 4, "wave": 0, "sky": "#9bd3ec", "land": "#79a77c", "desc": "신규 적 빠옹"},
 {"name":"노르웨이","flag":"🇳🇴","hp":15000,"gap":4,"wave":0,"sky":"#b9dff1","land":"#8ba987","desc":"고릴라저씨·바다레오파드가 뒤섞인 혼성 전선"},
 {"name":"영국","flag":"🇬🇧","hp":8000,"gap":4,"wave":0,"sky":"#c7d9e5","land":"#85956f","desc":"빠옹이 다시 등장하는 영국 전선"},
 {"name":"그린란드","flag":"🇬🇱","hp":18000,"gap":4,"wave":0,"sky":"#bfe8f5","land":"#cfdcce","desc":"신규 적 엘리트래빗"},
 {"name":"캐나다","flag":"🇨🇦","hp":18000,"gap":4,"wave":0,"sky":"#c9e1ed","land":"#91a979","desc":"고릴라저씨 증원이 늘어난 대규모 혼성 전선"},
 {"name":"뉴욕","flag":"🇺🇸","hp":18000,"gap":4,"wave":0,"sky":"#a9cee2","land":"#8f9877","desc":"바다레오파드가 반복 출현하는 격전지"},
 {"name":"버뮤다","flag":"🇧🇲","hp":20000,"gap":4,"wave":0,"sky":"#77d7e7","land":"#ddc58e","desc":"신규 적 캥거류"},
 {"name":"자메이카","flag":"🇯🇲","hp":20000,"gap":4,"wave":0,"sky":"#9edbd0","land":"#8dac68","desc":"빠옹이 최종 보스로 재등장"},
 {"name":"콜롬비아","flag":"🇨🇴","hp":20000,"gap":4,"wave":0,"sky":"#a8dfc4","land":"#7fae5a","desc":"캥거류가 보스로 재등장하는 남미 전선"},
 {"name":"브라질","flag":"🇧🇷","hp":20000,"gap":4,"wave":0,"sky":"#9fd9e0","land":"#6ea85c","desc":"고릴라저씨 지원군과 함께 나나나난나방이 보스로 등장"},
 {"name":"아르헨티나","flag":"🇦🇷","hp":20000,"gap":4,"wave":0,"sky":"#9edcf0","land":"#88b878","desc":"고릴라저씨·바다레오파드·재키펭이 뒤섞인 혼성 전선"},
 {"name":"마추픽추","flag":"🇵🇪","hp":20000,"gap":4,"wave":0,"sky":"#add9e4","land":"#799b69","desc":"캥거류가 재등장하는 혼성 전선"},
 {"name":"이스터섬","flag":"🗿","hp":20000,"gap":4,"wave":0,"sky":"#91d4e5","land":"#9ea26b","desc":"신규 적 투뿔소(One Horn)가 보스로 등장"},
 {"name":"멕시코","flag":"🇲🇽","hp":25000,"gap":4,"wave":0,"sky":"#e4d29d","land":"#b49262","desc":"캥거류가 세 번 증원되는 혼성 전선"},
 {"name":"NASA","flag":"🚀","hp":20000,"gap":4,"wave":0,"sky":"#7188b5","land":"#777a82","desc":"투뿔소가 반복 출현하는 전선"},
 {"name":"라스베이거스","flag":"🎰","hp":25000,"gap":4,"wave":0,"sky":"#d8a5cf","land":"#a47b72","desc":"신규 적 곰선생(Teacher Bear)이 보스로 등장"},
 {"name":"할리우드","flag":"🎬","hp":20000,"gap":4,"wave":0,"sky":"#f0c58e","land":"#977c64","desc":"하마양·돼지새끼부터 나나나난나방까지 총출동"},
 {"name":"알래스카","flag":"🏔️","hp":20000,"gap":4,"wave":0,"sky":"#cce9f3","land":"#c4d4cf","desc":"다람G 물량과 곰선생·나나나난나방의 협공"},
 {"name":"하와이","flag":"🌺","hp":30000,"gap":4,"wave":0,"sky":"#7fd6e0","land":"#4f9e6e","desc":"강적 총출동 · 달 직전 마지막 관문"},
 {"name":"달","flag":"🌕","hp":99999,"gap":4,"wave":0,"sky":"#202743","land":"#8b8d99","desc":"최종 보스 대갈이군(The Face)"}
];
let selectedStage=0,cleared=[];
try{const saved=JSON.parse(localStorage.getItem('red-battle-progress-v1')||'[]');if(Array.isArray(saved))cleared=[...new Set(saved.filter(x=>Number.isInteger(x)&&x>=0&&x<STAGES.length))]}catch{}
function saveProgress(){try{localStorage.setItem('red-battle-progress-v1',JSON.stringify(cleared))}catch{}}
function isUnlocked(i){return i===0||cleared.includes(i-1)||cleared.includes(i)}
const RHINO_SHEET='assets/rhino_sheet.png';
const BEAR_SHEET='assets/bear_sheet.png';
const FACE_SHEET='assets/face_sheet.png';
// Reserved for the Norway expansion: user-supplied Elite Rabbit spritesheet.
const ELITE_RABBIT_SHEET='assets/elite_rabbit_sheet.png';
// Reserved user-supplied enemy sheets for the next Empire of Cats expansion.
const SQUIRREL_G_SHEET='assets/squirrel_g_sheet.png';
const KANG_ROO_SHEET='assets/kang_roo_sheet.png';
const data={bases:{ally:{hp:2000,max:2000,x:90},enemy:{hp:1000,max:1000,x:10}},units:{cyan:{"hp": 180, "atk": 200, "interval": 3.4, "speed": 4.3, "range": 30, "cost": 260, "cooldown": 9, "knockbacks": 3, "projectile": true, "splash": 0.5, "flight": 0.6, "floatStrong": true},blue:{"hp": 240, "atk": 38, "interval": 0.4, "speed": 13, "range": 4, "cost": 140, "cooldown": 3, "knockbacks": 3, "attackDuration": 0.3},purple:{"hp": 600, "atk": 90, "interval": 1.6, "speed": 5, "range": 6, "cost": 180, "cooldown": 6, "knockbacks": 3, "projectile": true, "splash": 1.5, "redStrong": true},peng:{"hp": 1300, "atk": 80, "interval": 0.8, "speed": 7, "range": 5, "reward": 180, "knockbacks": 3, "attackDuration": 0.55, "windup": 0.26666666666666666},gory:{"hp": 1000, "atk": 80, "interval": 0.5333333333333333, "speed": 8, "range": 5, "reward": 220, "knockbacks": 3, "attackDuration": 0.5, "windup": 0.26666666666666666, "area": true},baa:{"hp": 800, "atk": 50, "interval": 1.1, "speed": 4.5, "range": 3.7, "reward": 100, "knockbacks": 3, "attackDuration": 0.8, "windup": 0.4666666666666667},seal:{"hp": 2500, "atk": 150, "interval": 0.7666666666666667, "speed": 5, "range": 5.7, "reward": 450, "knockbacks": 1, "attackDuration": 0.6, "windup": 0.26666666666666666, "area": true, "trait": "red"},croco:{"hp": 70, "atk": 30, "interval": 0.6, "speed": 7.5, "range": 3.7, "reward": 30, "knockbacks": 1, "attackDuration": 0.5, "windup": 0.26666666666666666},red:{hp:450,atk:15,interval:1.2,speed:6,range:4.5,cost:30,cooldown:1,knockbacks:3},orange:{hp:220,atk:100,interval:2.4,speed:4.5,range:16,cost:150,cooldown:6.5,knockbacks:3,projectile:true,splash:3.5},yellow:{hp:900,atk:45,interval:1.8,speed:5,range:4,cost:125,cooldown:5,knockbacks:1},green:{hp:280,atk:65,interval:2.8,speed:5.5,range:12,cost:175,cooldown:7,knockbacks:3,boomerang:true},dog:{hp:200,atk:50,interval:1.4,speed:5,range:4,reward:40,knockbacks:3},snache:{hp:220,atk:85,interval:1.1,speed:7,range:4,reward:70,knockbacks:3},guys:{hp:420,atk:120,interval:1,speed:4.8,range:4.2,reward:110,knockbacks:1,attackDuration:.9},pigge:{trait:"red",hp:2400,atk:130,interval:1.8,speed:2.5,range:5,reward:400,knockbacks:2,attackDuration:28/30,windup:14/30,area:true},hippo:{hp:1600,atk:150,interval:2.2,speed:2.8,range:5,reward:200,knockbacks:1,attackDuration:.8,area:true}},income:[{max:1000,rate:20,cost:100},{max:1300,rate:28,cost:150},{max:1700,rate:38,cost:220},{max:2200,rate:50,cost:320},{max:2800,rate:65,cost:450},{max:3600,rate:85,cost:null}]};
data.units.leboin={hp:4000,atk:654,interval:187/30,speed:2.5,range:13.5,reward:650,knockbacks:1,attackDuration:.9,windup:8/30,area:true};
const MOOTH_SHEET='assets/mooth_sheet.png';
data.units.rabbit={trait:"red",hp:320,atk:60,interval:.9,speed:9,range:4,reward:70,knockbacks:3,attackDuration:.45,windup:.2};
data.units.squirrel={hp:300,atk:45,interval:1.05,speed:8.5,range:4.2,reward:85,knockbacks:3,attackDuration:.55,windup:.25};
data.units.kangaroo={hp:4000,atk:250,interval:1.2,speed:10,range:5.5,reward:700,knockbacks:1,attackDuration:.85,windup:.53};
data.units.mooth={trait:"floating",hp:5000,atk:300,interval:2.8,speed:3.2,range:12,reward:850,knockbacks:1,attackDuration:1.1,windup:.55,area:true};
data.units.pink={hp:520,atk:125,interval:1.9,speed:6,range:23,engageRange:4.5,cost:225,cooldown:7,knockbacks:3,attackDuration:.7,windup:.3,area:true};
data.units.rhino={hp:5200,atk:420,interval:2.1,speed:5.5,range:5.2,reward:900,knockbacks:2,attackDuration:.9,windup:.45,area:true};
data.units.bear={hp:6500,atk:520,interval:2.4,speed:4.5,range:8.5,reward:1050,knockbacks:2,attackDuration:1,windup:.5,area:true};
data.units.face={trait:"floating",hp:18000,atk:850,interval:3.4,speed:1.8,range:14,reward:2500,knockbacks:3,attackDuration:1.2,windup:.65,area:true};
const domCache=new Map();const $=s=>{let el=domCache.get(s);if(!el){el=document.querySelector(s);domCache.set(s,el)}return el}, unitsEl=$('#units');let game, last=0;
function syncBasePositions(){
 const field=$('#field').getBoundingClientRect();if(!field.width)return;
 for(const name of ['enemy','ally']){const rect=$('#'+name+'Base').getBoundingClientRect();data.bases[name].x=(rect.left+rect.width/2-field.left)/field.width*100;data.bases[name].frontX=((name==='enemy'?rect.left+rect.width:rect.left)-field.left)/field.width*100}
 const spriteScale=Math.min(1.35,Math.max(.65,.65+(field.width-380)/1540*.7));
 document.documentElement.style.setProperty('--sprite-scale',spriteScale);
}
function orangeUnlocked(){return cleared.some(i=>i>=2)}
function yellowUnlocked(){return cleared.some(i=>i>=5)}
function greenUnlocked(){return cleared.some(i=>i>=6)}
function cooldownKey(type){return type==='red'?'spawnCd':type+'Cd'}
function unitCooldown(type){return game[cooldownKey(type)]||0}
function reset(){syncBasePositions();last=0;game={money:0,level:0,units:[],defeated:[],spawnCd:0,orangeCd:0,yellowCd:0,greenCd:0,cyanCd:0,blueCd:0,purpleCd:0,pinkCd:0,boomerangs:[],projectiles:[],effects:[],running:false,ended:false,tutorial:0,paused:false,elapsed:0,speedMultiplier:1,speedUnlocked:false};game.spawnRules=(STAGE_SPAWNS[selectedStage]||[]).map(r=>({...r,triggered:false,clock:0,spawned:0}));data.bases.ally.hp=data.bases.ally.max=baseHpFor();data.bases.enemy.hp=data.bases.enemy.max=STAGES[selectedStage].hp;game.tutorial=selectedStage===0?0:6;$('#field').style.background=`linear-gradient(${STAGES[selectedStage].sky} 0 32%,${STAGES[selectedStage].land} 32% 100%)`;$('#field').setAttribute('aria-label',STAGES[selectedStage].name+' 전장');$('#stageMenu').classList.add('hidden');unitsEl.innerHTML='';$('#result').classList.add('hidden');tutorial();render()}
function addUnit(type){
 if(game.ended)return;
 const d=data.units[type],ally=ALLIES.includes(type);
 if(ally&&(!(game.running||(type==='red'&&game.tutorial===2))||game.paused||unitCooldown(type)>0||game.money<d.cost||!allyUnlocked(type)))return;
 const stats=unitStats(type);const u={type,ally,stats,hp:stats.hp,max:stats.hp,x:ally?data.bases.ally.x:data.bases.enemy.x,emerging:true,atkCd:0,kb:0,animTime:0,attackTime:0,hurtTime:0,kbTime:0,flashTime:0};
 game.units.push(u);drawUnit(u);u.el.style.left=`calc(${u.x}% - 21px)`;
 if(ally){game.money-=d.cost;game[cooldownKey(type)]=d.cooldown;if(game.tutorial===2){game.tutorial=3;tutorial()}}render();
}
function drawUnit(u){let e=document.createElement('div'),evolved=u.ally&&u.stats?.evolved;e.className='unit '+u.type+(u.ally?' ally-art':'')+(evolved?' evolved':'');e.style.setProperty('--unit-color',COLORS?.[u.type]||'#fff');e.innerHTML='<div class="bar"><i style="width:100%"></i></div>'+(u.ally?'<span class="ally-shadow"></span><span class="ally-sprite"></span>'+(evolved?'<span class="evolved-sprite"></span>':'')+(u.type==='pink'&&!evolved?'<span class="pink-ribbon"><i></i></span>':''):'<span class="dog-shadow"></span><span class="dog-sprite"></span>');e.setAttribute('aria-label',UNIT_NAMES[u.type]+(evolved?' 2진':''));u.el=e;unitsEl.append(e);if(!u.ally){const sheet={rabbit:ELITE_RABBIT_SHEET,squirrel:SQUIRREL_G_SHEET,kangaroo:KANG_ROO_SHEET,mooth:MOOTH_SHEET,rhino:RHINO_SHEET,bear:BEAR_SHEET,face:FACE_SHEET}[u.type];if(sheet)e.querySelector('.dog-sprite').style.backgroundImage=`url(${sheet})`}if(u.ally)animateAlly(u);else animateDog(u)}
function target(u){let foes=game.units.filter(v=>v.hp>0&&v.kbTime<=0&&!v.emerging&&v.ally!==u.ally);let dir=u.ally?-1:1;return foes.filter(v=>dir*(v.x-u.x)>=-1).sort((a,b)=>Math.abs(a.x-u.x)-Math.abs(b.x-u.x))[0]}
// Canonical knockback counts include death. Red keeps its original two live hitbacks.
const HITBACK_DURATION=20/30;
// Shorter displacement tuned to this compact battlefield.
const HITBACK_DISTANCE=6;
function startHitback(u){
 u.kbTime=HITBACK_DURATION;u.hurtTime=HITBACK_DURATION;
 u.kbStart=u.x;u.kbEnd=Math.max(0,Math.min(100,u.x+(u.ally?1:-1)*HITBACK_DISTANCE));
 u.attackTime=0;u.atkCd=0;u.pendingAttack=null;
 u.el.classList.add('knocked-back');if(u.ally)animateAlly(u);else animateDog(u);
}
function tickHitback(u,dt){
 u.kbTime=Math.max(0,u.kbTime-dt);u.hurtTime=u.kbTime;
 const progress=1-u.kbTime/HITBACK_DURATION;
 u.x=u.kbStart+(u.kbEnd-u.kbStart)*(1-(1-progress)**2);
 u.el.style.left=`calc(${u.x}% - 21px)`;
 u.el.style.translate=`0 ${-Math.sin(progress*Math.PI)*18}px`;
 if(u.ally)animateAlly(u);else animateDog(u);
 if(u.kbTime===0){u.el.classList.remove('knocked-back');u.el.style.translate='0 0'}
}
const BOSS_KNOCKBACK_DURATION=.8;
const BOSS_KNOCKBACK_DISTANCE=2;
function triggerBossShockwave(){
 const field=$('#field');field.classList.remove('boss-shake');void field.offsetWidth;field.classList.add('boss-shake');
 const wave=document.createElement('i');wave.className='boss-wave';field.append(wave);if(typeof setTimeout==='function'){setTimeout(()=>wave.remove(),850);setTimeout(()=>field.classList.remove('boss-shake'),450);}
 for(const u of game.units){if(!u.ally||u.hp<=0)continue;u.bossKbTime=BOSS_KNOCKBACK_DURATION;u.bossKbStart=u.x;u.bossKbEnd=Math.min(data.bases.ally.x-2,u.x+BOSS_KNOCKBACK_DISTANCE);u.attackTime=0;u.pendingAttack=null;u.atkCd=0;u.el.classList.add('boss-knocked');}
}
function tickBossKnockback(u,dt){
 u.bossKbTime=Math.max(0,u.bossKbTime-dt);const progress=1-u.bossKbTime/BOSS_KNOCKBACK_DURATION;
 u.x=u.bossKbStart+(u.bossKbEnd-u.bossKbStart)*(1-(1-progress)**3);u.el.style.left=`calc(${u.x}% - 21px)`;u.el.style.translate=`0 ${-Math.sin(progress*Math.PI)*12}px`;animateAlly(u);
 if(u.bossKbTime===0){u.el.classList.remove('boss-knocked');u.el.style.translate='0 0'}
}
function damage(v,amount,from){
 if(game.ended||v.hp<=0||v.kbTime>0)return;
 if(from?.stats?.redStrong&&data.units[v.type].trait==='red')amount*=from.stats.redDamage||2;
 if(v.stats?.redStrong&&from&&data.units[from.type].trait==='red')amount*=v.stats.redResist||.5;
 if(from?.stats?.floatStrong&&data.units[v.type].trait==='floating')amount*=from.stats.floatDamage||2;
 if(v.stats?.floatStrong&&from&&data.units[from.type].trait==='floating')amount*=v.stats.floatResist||.5;
 v.hp=Math.max(0,v.hp-amount);v.flashTime=.1;v.el.classList.add('damage-flash');
 v.el.querySelector('i').style.setProperty('width',Math.max(0,v.hp/v.max)*100+'%');
 if(v.hp===0){
  if(!v.ally)game.money=Math.min(data.income[game.level].max,game.money+data.units[v.type].reward);
  game.units.splice(game.units.indexOf(v),1);
  startHitback(v);v.el.classList.add('defeated');game.defeated.push(v);return;
 }
 const total=data.units[v.type].knockbacks;
 // Consume every crossed threshold, but play only one hitback for a single blow.
 const crossed=Math.min(total-1,Math.floor((v.max-v.hp)*total/v.max+1e-9));
 if(crossed>v.kb){v.kb=crossed;startHitback(v)}
}
function launchBoomerang(u){
 const el=document.createElement('span');el.className='boomerang';unitsEl.append(el);
 const b={start:u.x,end:Math.max(0,u.x-u.stats.range),time:0,damage:u.stats.atk,returnMult:u.stats.returnMult||1,source:u,el,hits:[new Set(),new Set()],baseHits:[false,false]};game.boomerangs.push(b);positionBoomerang(b);
}
function boomerangX(b,t){return b.start+(b.end-b.start)*(t<=.6?t/.6:(1.2-t)/.6)}
function positionBoomerang(b){b.el.style.left=boomerangX(b,b.time)+'%';b.el.style.transform=`translate(-50%,-24px) rotate(${b.time*900}deg)`}
function updateBoomerangs(dt){
 for(const b of [...game.boomerangs]){
  const endTime=Math.min(1.2,b.time+dt);
  while(b.time<endTime){
   const leg=b.time<.6?0:1,next=Math.min(endTime,leg===0?.6:1.2),a=boomerangX(b,b.time),z=boomerangX(b,next),lo=Math.min(a,z)-.6,hi=Math.max(a,z)+.6;
   for(const v of [...game.units])if(!v.ally&&v.hp>0&&v.kbTime<=0&&!b.hits[leg].has(v)&&v.x>=lo&&v.x<=hi){b.hits[leg].add(v);damage(v,b.damage*(leg?b.returnMult:1),b.source)}
   const base=data.bases.enemy;
   if(!b.baseHits[leg]&&base.frontX>=lo&&base.frontX<=hi){b.baseHits[leg]=true;base.hp=Math.max(0,base.hp-b.damage*(leg?b.returnMult:1));if(!base.hp){finish(true);return}}
   b.time=next;
  }
  positionBoomerang(b);if(b.time>=1.2){b.el.remove();game.boomerangs.splice(game.boomerangs.indexOf(b),1)}
 }
}
function renderGreenButton(){
 const b=$('#greenBtn'),d=data.units.green;b.disabled=!greenUnlocked()||!game.running||game.paused||game.ended||game.money<d.cost||game.greenCd>0;
 b.querySelector('small').textContent=greenUnlocked()?'175원':'일본 클리어 시 해금';b.querySelector('em').style.display=game.greenCd?'block':'none';b.querySelector('em').style.transform=`scaleY(${game.greenCd/d.cooldown})`;
 b.title='체력 280 · 편도당 공격력 65 · 공격 주기 2.8초 · 재출격 7초';
}
function launchJuice(u,t){
 const end=t?t.x:data.bases.enemy.frontX,el=document.createElement('span');el.className='juice-projectile '+u.type+'-shot';unitsEl.append(el);
 const shot={start:u.x,end,time:0,duration:u.stats.flight||.35,damage:u.stats.atk,radius:u.stats.splash,source:u,type:u.type,el};
 game.projectiles.push(shot);positionJuice(shot);
}
function positionJuice(p){const progress=p.time/p.duration;p.el.style.left=(p.start+(p.end-p.start)*progress)+'%';p.el.style.translate=`-50% ${-28-Math.sin(progress*Math.PI)*32}px`}
function updateJuice(dt){
 for(const e of [...game.effects]){e.time-=dt;e.el.style.opacity=Math.max(0,e.time/.25);if(e.time<=0){e.el.remove();game.effects.splice(game.effects.indexOf(e),1)}}
 for(const p of [...game.projectiles]){
  p.time=Math.min(p.duration,p.time+dt);positionJuice(p);if(p.time<p.duration)continue;
  p.el.remove();game.projectiles.splice(game.projectiles.indexOf(p),1);
  const effect=document.createElement('span');effect.className='juice-splash '+p.type+'-splash';effect.style.left=p.end+'%';effect.style.width=(p.radius*2)+'%';unitsEl.append(effect);game.effects.push({el:effect,time:.25});
  for(const v of [...game.units])if(!v.ally&&Math.abs(v.x-p.end)<=p.radius)damage(v,p.damage,p.source);
  const base=data.bases.enemy;if(Math.abs(base.frontX-p.end)<=p.radius){base.hp=Math.max(0,base.hp-p.damage);if(!base.hp){finish(true);return}}
 }
}
function resolveAttack(u,t){
 const d=u.stats||data.units[u.type],dir=u.ally?-1:1;
 const inRange=v=>v&&v.hp>0&&v.kbTime<=0&&v.ally!==u.ally&&dir*(v.x-u.x)>=-1&&Math.abs(v.x-u.x)<=d.range;
 if(d.area){for(const v of [...game.units])if(inRange(v))damage(v,d.atk,u)}
 else{const victim=inRange(t)?t:target(u);if(inRange(victim)){damage(victim,d.atk,u);return}}
 const base=u.ally?data.bases.enemy:data.bases.ally;
 if(Math.abs(base.frontX-u.x)<=(d.engageRange??d.range)){base.hp=Math.max(0,base.hp-d.atk);if(!base.hp)finish(u.ally)}
}
function attack(u,t){
 if(game.ended||u.hp<=0||u.kbTime>0)return;
 const d=u.stats||data.units[u.type];u.atkCd=d.interval;
 u.attackTime=d.attackDuration||.56;
 if(u.type==='yellow'){const bolt=document.createElement('span');bolt.className='electric-bolt';bolt.textContent='ϟ';bolt.style.left=((u.x+(t?t.x:data.bases.enemy.frontX))/2)+'%';unitsEl.append(bolt);game.effects.push({el:bolt,time:.25})}if(d.boomerang){launchBoomerang(u);return}if(d.projectile){launchJuice(u,t);return}if(d.windup)u.pendingAttack={remaining:d.windup};else resolveAttack(u,t);
}
function update(dt){
 updateBoomerangs(dt);if(game.ended){render();return}updateJuice(dt);if(game.ended){render();return}
 for(const v of [...game.defeated]){tickHitback(v,dt);v.el.style.opacity=v.kbTime/HITBACK_DURATION;if(v.kbTime===0){v.el.remove();game.defeated.splice(game.defeated.indexOf(v),1)}}
 game.noticeTime=Math.max(0,(game.noticeTime||0)-dt);game.elapsed+=dt;game.money=Math.min(data.income[game.level].max,game.money+data.income[game.level].rate*dt);updateStageSpawns(dt);
game.spawnCd=Math.max(0,game.spawnCd-dt);game.orangeCd=Math.max(0,game.orangeCd-dt);game.yellowCd=Math.max(0,game.yellowCd-dt);game.greenCd=Math.max(0,game.greenCd-dt);for(const t of ['cyan','blue','purple','pink'])game[cooldownKey(t)]=Math.max(0,unitCooldown(t)-dt);for(const u of [...game.units]){if(game.ended)break;if(u.hp<=0)continue;u.flashTime=Math.max(0,u.flashTime-dt);u.el.classList.toggle('damage-flash',u.flashTime>0);if(u.bossKbTime>0){tickBossKnockback(u,dt);continue}if(u.kbTime>0){tickHitback(u,dt);continue}if(u.pendingAttack){u.pendingAttack.remaining-=dt;if(u.pendingAttack.remaining<=0){u.pendingAttack=null;resolveAttack(u);if(game.ended)break}}u.atkCd-=dt;u.animTime+=dt;u.attackTime=Math.max(0,u.attackTime-dt);u.hurtTime=Math.max(0,u.hurtTime-dt);let d=u.stats||data.units[u.type];if(!u.ally&&(u.emerging||u.x<data.bases.enemy.frontX)){u.emerging=true;u.x=Math.min(data.bases.enemy.frontX,u.x+d.speed*dt);if(u.x>=data.bases.enemy.frontX)u.emerging=false;u.el.style.left=`calc(${u.x}% - 21px)`;animateDog(u);continue}if(u.ally&&(u.emerging||u.x>data.bases.ally.frontX)){u.emerging=true;u.x=Math.max(data.bases.ally.frontX,u.x-d.speed*dt);if(u.x<=data.bases.ally.frontX)u.emerging=false;u.el.style.left=`calc(${u.x}% - 21px)`;animateAlly(u);continue}let t=target(u),dist=t?Math.abs(t.x-u.x):Infinity;if(t&&dist<=(d.engageRange??d.range)){if(u.atkCd<=0)attack(u,t)}else{let baseDist=u.ally?u.x-data.bases.enemy.frontX:data.bases.ally.frontX-u.x;if(!t&&baseDist<=(d.engageRange??d.range)){if(u.atkCd<=0)attack(u)}else if(u.ally||(!u.attackTime&&!u.hurtTime))u.x+=(u.ally?-1:1)*d.speed*dt}u.x=Math.max(0,Math.min(100,u.x));u.el.style.left=`calc(${u.x}% - 21px)`;if(u.ally)animateAlly(u);else animateDog(u)}render()}
function render(){renderDeckButtons();renderSpeedButton();renderNewButtons();renderGreenButton();renderOrangeButton();renderYellowButton();renderUnitLevels();$('#battleNotice').classList.toggle('hidden',!(game.noticeTime>0));$('#pauseBtn').disabled=!game.running||game.ended;$('#pauseBtn').textContent=game.paused?'계속하기':'일시정지';$('#pauseNotice').classList.toggle('hidden',!game.paused);$('#timer').textContent=`${STAGES[selectedStage].name} · ${Math.floor(game.elapsed)}초`;let l=data.income[game.level];$('#money').textContent=`${Math.floor(game.money)}원`;$('#enemyHp').textContent=data.bases.enemy.hp;$('#allyHp').textContent=data.bases.ally.hp;for(let [name,b] of Object.entries(data.bases))$(`#${name}Base span`).style.width=(b.hp/b.max*100)+'%';let sb=$('#spawnBtn'),ib=$('#incomeBtn'),canSpawn=!game.ended&&!game.paused&&(game.running||game.tutorial===2),canUpgrade=!game.ended&&!game.paused&&(game.running||game.tutorial===4);sb.disabled=game.money<data.units.red.cost||game.spawnCd>0||!canSpawn;sb.querySelector('small').textContent=data.units.red.cost+'원';sb.querySelector('em').style.display=game.spawnCd?'block':'none';sb.querySelector('em').style.transform=`scaleY(${game.spawnCd/data.units.red.cooldown})`;ib.disabled=!canUpgrade||game.level===5||game.money<(l.cost||0);ib.innerHTML=game.level===5?'수입 Lv.MAX':`수입 업그레이드<br><small>${l.cost}원</small>`}
function renderOrangeButton(){
 const button=$('#orangeBtn'),d=data.units.orange,unlocked=orangeUnlocked();
 button.disabled=!unlocked||!game.running||game.paused||game.ended||game.money<d.cost||game.orangeCd>0;
 button.querySelector('small').textContent=unlocked?`${d.cost}원`:'중국 클리어 시 해금';
 button.querySelector('em').style.display=game.orangeCd>0?'block':'none';button.querySelector('em').style.transform=`scaleY(${game.orangeCd/d.cooldown})`;
 button.title='체력 220 · 공격력 100 · 공격 주기 2.4초 · 재출격 6.5초';
}
function renderYellowButton(){
 const button=$('#yellowBtn'),d=data.units.yellow;
 button.disabled=!yellowUnlocked()||!game.running||game.paused||game.ended||game.money<d.cost||game.yellowCd>0;
 button.querySelector('small').textContent=yellowUnlocked()?`${d.cost}원`:'필리핀 클리어 시 해금';
 button.querySelector('em').style.display=game.yellowCd>0?'block':'none';button.querySelector('em').style.transform=`scaleY(${game.yellowCd/d.cooldown})`;
 button.title='체력 900 · 공격력 45 · 공격 주기 1.8초 · 재출격 5초';
}
function loop(t){const raw=last?Math.min(.05,(t-last)/1000):0;last=t;const dt=raw*(game.speedMultiplier||1);if(game&&!game.ended&&!game.paused){if(game.running)update(dt);else if(game.tutorial===2||game.tutorial===4){game.money=Math.min(data.income[game.level].max,game.money+data.income[game.level].rate*dt);render()}}requestAnimationFrame(loop)}
function highlight(sel){document.querySelectorAll('.tutorial-target').forEach(e=>e.classList.remove('tutorial-target'));if(sel)$(sel).classList.add('tutorial-target');$('#game').classList.toggle('guiding',!!sel)}
function tutorial(){let text=$('#tutorialText'),next=$('#nextBtn'),box=$('#tutorial');let steps=[['오른쪽은 아군의 성입니다.','#allyBase'],['왼쪽의 적 성을 파괴하면 승리합니다!','#enemyBase'],['돈을 사용해서 레드를 생성해 보세요!','#spawnBtn'],['돈은 시간이 지나면 자동으로 모입니다. 적을 쓰러뜨려도 돈을 얻습니다!','#money'],['수입을 업그레이드하면 더 많은 돈을 더 빠르게 모을 수 있습니다!','#incomeBtn'],['캐릭터와 적은 자동으로 이동하고 공격합니다. 레드를 계속 생성해 적 성을 파괴하세요!','']];if(game.tutorial>=steps.length){box.classList.add('hidden');highlight();game.running=true;return}box.classList.remove('hidden');text.textContent=steps[game.tutorial][0];highlight(steps[game.tutorial][1]);next.style.display=(game.tutorial===2||game.tutorial===4)?'none':'inline-block'}
$('#nextBtn').onclick=()=>{game.tutorial++;tutorial();render()};$('#spawnBtn').onclick=()=>addUnit('red');$('#orangeBtn').onclick=()=>addUnit('orange');$('#yellowBtn').onclick=()=>addUnit('yellow');$('#greenBtn').onclick=()=>addUnit('green');for(const t of ['cyan','blue','purple','pink'])$('#'+t+'Btn').onclick=()=>addUnit(t);$('#incomeBtn').onclick=()=>{let l=data.income[game.level];if(!game.ended&&!game.paused&&(game.running||game.tutorial===4)&&l.cost!==null&&game.money>=l.cost){game.money-=l.cost;game.level++;if(game.tutorial===4){game.tutorial++;tutorial()}render()}};function finish(win){if(game.ended)return;const xpReward=win?awardXP():0;const speedDropped=win&&selectedStage>=18&&Math.random()<0.1;if(speedDropped){speedTickets++;saveSpeedTickets();renderSpeedButton()}game.ended=true;game.running=false;highlight();$('#result').classList.remove('hidden');$('#resultTitle').textContent=win?STAGES[selectedStage].name+' 정복 완료!':'패배...';if(win&&!cleared.includes(selectedStage)){cleared.push(selectedStage);saveProgress()}$('#nextStageBtn').classList.toggle('hidden',!win||selectedStage===STAGES.length-1);$('#resultDetail').textContent=win?(selectedStage===STAGES.length-1?STAGES.length+'개 스테이지를 모두 정복했어요!':STAGES[selectedStage+1].name+' 스테이지가 열렸어요!'):'수입을 올리고 아군을 모아서 다시 도전하세요.';if(win&&selectedStage===2)$('#resultDetail').textContent+=' 오렌지가 해금됐어요!';if(win&&selectedStage===5)$('#resultDetail').textContent+=' 옐로우가 해금됐어요!';if(win&&selectedStage===6)$('#resultDetail').textContent+=' 그린이 해금됐어요!';if(win){for(const t of ['cyan','blue','purple'])if(selectedStage===UNLOCK_AT[t])$('#resultDetail').textContent+=' '+UNIT_NAMES[t]+' 해금!';$('#resultDetail').textContent+=` 보상 +${xpReward} XP`;}if(speedDropped)$('#resultDetail').textContent+=' 2배속권 획득!';renderNewButtons();renderOrangeButton();renderYellowButton();renderGreenButton()}$('#restartBtn').onclick=reset;
$('#skipBtn').onclick=()=>{game.tutorial=6;tutorial();render()};
$('#pauseBtn').onclick=()=>{if(game.running&&!game.ended){game.paused=!game.paused;render()}};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&game.running&&!game.ended){game.paused=true;render()}});



// Original PNG atlas coordinates: Doge only, not Doge Dark or variants.
const DOG_FRAMES={walk:[[4,50],[57,50],[110,50]],attack:[[4,125],[57,125],[110,125],[164,125]],hurt:[[4,201]]};
function animateDog(u){
 if(u.type==='pigge'){animatePigge(u);return}
 if(u.type==='snache'){animateSnache(u);return}
 if(NEW_ATLASES[u.type]){animateAtlas(u);return}
 const state=u.hurtTime>0?'hurt':u.attackTime>0?'attack':'walk';
 const frames=DOG_FRAMES[state];
 const index=state==='walk'?Math.floor(u.animTime/.14)%3:state==='attack'?Math.min(3,Math.floor((.56-u.attackTime)/.14)):0;
 const [x,y]=frames[index];
 u.el.dataset.animation=state;
 u.el.querySelector('.dog-sprite').style.backgroundPosition=`-${x}px -${y}px`;
}


// Snache has no dedicated hurt frame; reuse its pose with a hit flash.
const SNACHE_FRAMES={walk:[[6,43,54,52],[63,43,58,52],[124,43,62,52],[189,43,69,52]],attack:[[5,113,52,59],[60,113,52,59],[115,113,74,59],[192,113,74,59]]};
function animateSnache(u){
 const attacking=u.attackTime>0;
 const frame=attacking?Math.min(3,Math.floor((.56-u.attackTime)/.14)):Math.floor(u.animTime/.14)%4;
 const [x,y,w,h]=SNACHE_FRAMES[attacking?'attack':'walk'][frame];
 const sprite=u.el.querySelector('.dog-sprite');
 sprite.style.backgroundPosition=`-${x}px -${y}px`;
 sprite.style.width=w+'px';sprite.style.height=h+'px';
 // Keep the tail anchored while the head reaches forward in the attack.
 sprite.style.left='-10px';
 sprite.style.filter=u.hurtTime>0?'brightness(1.8)':'none';
 u.el.dataset.animation=u.hurtTime>0?'hurt':attacking?'attack':'walk';
}

const UNIT_NAMES={pink:'핑크',rhino:'투뿔소',bear:'곰선생',face:'대갈이군',cyan:'시안',blue:'블루',purple:'퍼플',peng:'재키펭',gory:'고릴라저씨',baa:'메에메에',seal:'바다레오파드',croco:'아거',leboin:'빠옹',rabbit:'엘리트래빗',squirrel:'다람G',kangaroo:'캥거류',mooth:'나나나난나방',red:'레드',orange:'오렌지',green:'그린',yellow:'옐로우',dog:'멍뭉이',snache:'낼름이',guys:'놈놈놈',hippo:'하마양',pigge:'돼지새끼'};
// Every rule sourced from each stage's wiki Battleground section: {type, at:{t:seconds}|{hp:percent}, delay:[min,max] (omit for a one-shot), count (omit = infinite), boss:true (adds the shockwave+banner, only where the wiki says "spawns as the boss")}.
const STAGE_SPAWNS={
0:[{type:'dog',at:{t:0},count:1},{type:'dog',at:{t:20},delay:[6,10]}],
1:[{type:'dog',at:{t:0},delay:[6,10]},{type:'snache',at:{t:20},delay:[10,26.67]}],
2:[{type:'dog',at:{t:0},delay:[4.67,8]},{type:'snache',at:{t:20},delay:[10,26.67]}],
3:[{type:'dog',at:{t:0},delay:[6,10]},{type:'snache',at:{t:0},delay:[10,26.67]},{type:'guys',at:{t:40},delay:[10,26.67]}],
4:[{type:'dog',at:{t:0},delay:[6,10]},{type:'snache',at:{t:0},delay:[10,26.67]},{type:'guys',at:{t:40},delay:[10,26.67]}],
5:[{type:'dog',at:{t:0},delay:[6,10]},{type:'snache',at:{t:0},delay:[10,26.67]},{type:'guys',at:{t:40},delay:[10,26.67]}],
6:[{type:'dog',at:{t:0},delay:[10.67,18.67]},{type:'snache',at:{t:0},delay:[20,53.33]},{type:'guys',at:{t:40},delay:[20,53.33]},{type:'guys',at:{hp:90},count:6,delay:[2,4]},{type:'hippo',at:{hp:90},count:1,boss:true}],
7:[{type:'dog',at:{t:0},delay:[6,10]},{type:'snache',at:{t:10},delay:[10,26.67]},{type:'guys',at:{t:20},delay:[10,26.67]},{type:'guys',at:{hp:90},count:20,delay:[1,2]}],
8:[{type:'dog',at:{t:0},delay:[4,10]},{type:'dog',at:{t:30},delay:[6,30]},{type:'snache',at:{t:60},delay:[10,30]},{type:'guys',at:{t:90},delay:[10,30]},{type:'guys',at:{hp:60},count:20,delay:[0.07,0.13]}],
9:[{type:'dog',at:{t:0},delay:[10.67,18.67]},{type:'snache',at:{t:8},delay:[20,53.33]},{type:'guys',at:{t:40},delay:[20,53.33]},{type:'guys',at:{hp:95},count:6,delay:[2,4]},{type:'pigge',at:{hp:90},count:1,boss:true}],
10:[{type:'dog',at:{t:0},delay:[10.67,18.67]},{type:'snache',at:{t:8},delay:[20,53.33]},{type:'guys',at:{t:40},delay:[10,40]},{type:'guys',at:{hp:90},count:6,delay:[2,4]},{type:'hippo',at:{hp:80},count:1},{type:'hippo',at:{hp:40},count:1}],
11:[{type:'dog',at:{t:0},delay:[10.67,18.67]},{type:'snache',at:{t:8},delay:[20,53.33]},{type:'guys',at:{t:40},delay:[10,40]},{type:'guys',at:{hp:99},count:6,delay:[2,4]},{type:'pigge',at:{hp:98},count:1},{type:'pigge',at:{hp:78},count:1}],
12:[{type:'dog',at:{t:0},delay:[6.67,13.33]},{type:'snache',at:{t:20},delay:[6.67,13.33]},{type:'guys',at:{t:40},delay:[6.67,13.33]},{type:'guys',at:{hp:90},count:6,delay:[2,4]},{type:'peng',at:{hp:90},count:1},{type:'guys',at:{hp:88},delay:[3.33,13.33]},{type:'peng',at:{hp:88},count:1}],
13:[{type:'dog',at:{t:0},delay:[21.33,37.33]},{type:'snache',at:{t:20},delay:[40,80]},{type:'guys',at:{t:40},delay:[40,80]},{type:'hippo',at:{t:0},count:1},{type:'guys',at:{hp:99},count:6,delay:[2,4]},{type:'hippo',at:{hp:50},count:1}],
14:[{type:'dog',at:{t:0},delay:[1,10]},{type:'snache',at:{t:20},delay:[10,20]},{type:'guys',at:{t:40},delay:[20,40]},{type:'pigge',at:{t:60},count:1},{type:'hippo',at:{t:80},count:1},{type:'pigge',at:{t:133.33},count:1},{type:'hippo',at:{t:280},count:1},{type:'guys',at:{hp:99},count:8,delay:[0.67,2]}],
15:[{type:'guys',at:{t:0},delay:[1,10]},{type:'dog',at:{t:0},delay:[10,20]},{type:'guys',at:{t:0},delay:[10,20]},{type:'guys',at:{hp:85},count:12,delay:[0.67,2]},{type:'gory',at:{hp:85},count:1},{type:'gory',at:{hp:60},count:1,boss:true}],
16:[{type:'dog',at:{t:0},delay:[1,10]},{type:'snache',at:{t:0},delay:[1,10]},{type:'guys',at:{t:0},delay:[1,10]},{type:'peng',at:{t:100},count:1},{type:'peng',at:{t:102},count:1},{type:'pigge',at:{t:133.33},delay:[40,60]},{type:'hippo',at:{t:133.33},delay:[40,60]},{type:'peng',at:{hp:20},count:2}],
17:[{type:'dog',at:{t:0},delay:[1,10]},{type:'snache',at:{t:0},delay:[1,10]},{type:'guys',at:{t:0},delay:[1,10]},{type:'peng',at:{t:100},count:1},{type:'pigge',at:{t:133.33},delay:[40,60]},{type:'peng',at:{t:133.33},delay:[40,60]},{type:'peng',at:{hp:62},count:1},{type:'peng',at:{hp:61},count:1},{type:'peng',at:{hp:60},count:2}],
18:[{type:'guys',at:{t:0},delay:[1,20]},{type:'guys',at:{t:0},delay:[1,20]},{type:'guys',at:{t:10},delay:[1,10]},{type:'gory',at:{t:100},count:1},{type:'baa',at:{t:60},delay:[1,10]},{type:'gory',at:{t:133.33},count:2,delay:[0.07,0.07]},{type:'baa',at:{hp:60},count:10,delay:[1,2]}],
19:[{type:'dog',at:{t:0},delay:[1,10]},{type:'snache',at:{t:0},delay:[1,10]},{type:'guys',at:{t:10},delay:[1,10]},{type:'baa',at:{t:60},delay:[1,10]},{type:'pigge',at:{t:60},delay:[60,120]},{type:'hippo',at:{t:80},delay:[60,120]},{type:'gory',at:{t:133.33},count:4,delay:[60,120]}],
20:[{type:'dog',at:{t:0},delay:[1,10]},{type:'snache',at:{t:0},delay:[1,10]},{type:'guys',at:{t:0},delay:[1,10]},{type:'baa',at:{t:60},delay:[1,10]},{type:'pigge',at:{t:60},delay:[60,120]},{type:'hippo',at:{t:80},delay:[60,120]},{type:'gory',at:{t:133.33},delay:[60,120]},{type:'peng',at:{t:80},delay:[60,120]}],
21:[{type:'snache',at:{t:0},delay:[1,10]},{type:'snache',at:{t:0},delay:[1,10]},{type:'guys',at:{t:0},delay:[1,10]},{type:'baa',at:{t:0},delay:[1,10]},{type:'peng',at:{t:0},count:1},{type:'gory',at:{hp:80},count:2,delay:[0.07,2]},{type:'gory',at:{hp:70},count:2,delay:[0.07,2]},{type:'gory',at:{hp:60},count:2,delay:[0.07,2]}],
22:[{type:'guys',at:{t:0},delay:[1,4]},{type:'pigge',at:{t:10},count:1},{type:'guys',at:{hp:95},delay:[1,2]},{type:'seal',at:{hp:93},count:1,boss:true}],
23:[{type:'gory',at:{t:180},count:1},{type:'peng',at:{t:120},count:1},{type:'pigge',at:{t:60},count:1},{type:'hippo',at:{t:0},count:1},{type:'hippo',at:{hp:90},delay:[10,40]},{type:'pigge',at:{hp:90},delay:[10,40]},{type:'peng',at:{hp:90},delay:[10,40]},{type:'gory',at:{hp:90},delay:[10,40]}],
24:[{type:'dog',at:{t:0},delay:[1,10]},{type:'snache',at:{t:0},delay:[1,10]},{type:'guys',at:{t:20},delay:[1,2]},{type:'hippo',at:{t:40},count:1},{type:'baa',at:{hp:50},delay:[4.33,8]},{type:'peng',at:{hp:50},delay:[4.33,8]}],
25:[{type:'croco',at:{t:0},count:1},{type:'croco',at:{t:10},delay:[5.33,8]},{type:'croco',at:{t:30},delay:[4,8]},{type:'croco',at:{hp:90},delay:[4,10]},{type:'seal',at:{hp:90},count:1},{type:'croco',at:{hp:70},delay:[3,8]},{type:'croco',at:{hp:70},delay:[3,8]},{type:'croco',at:{hp:70},delay:[0.07,2]}],
26:[{type:'dog',at:{t:0},delay:[3.33,13.33]},{type:'snache',at:{t:10},delay:[6.67,26.67]},{type:'guys',at:{t:20},delay:[12,48]},{type:'croco',at:{t:40},delay:[20,80]},{type:'gory',at:{t:80},delay:[30,60]},{type:'seal',at:{t:120},delay:[30,60]},{type:'baa',at:{hp:50},delay:[25.33,101.33]}],
27:[{type:'dog',at:{t:0},delay:[3.33,13.33]},{type:'snache',at:{t:10},delay:[5,6.67]},{type:'guys',at:{t:20},delay:[6.67,10]},{type:'croco',at:{t:40},delay:[10,20]},{type:'gory',at:{t:160},delay:[30,60]},{type:'seal',at:{t:200},delay:[30,60]},{type:'peng',at:{t:80},delay:[30,60]},{type:'hippo',at:{t:120},delay:[30,60]},{type:'pigge',at:{t:120},delay:[30,60]}],
28:[{type:'dog',at:{t:0},delay:[3.33,30]},{type:'snache',at:{t:10},delay:[10,20]},{type:'guys',at:{t:20},delay:[10,10]},{type:'croco',at:{t:40},delay:[10,40]},{type:'leboin',at:{hp:90},count:1,boss:true},{type:'guys',at:{hp:90},delay:[0.07,1]},{type:'guys',at:{hp:90},count:20,delay:[0.07,0.07]}],
29:[{type:'snache',at:{t:10},delay:[5,6.67]},{type:'guys',at:{t:20},delay:[6.67,10]},{type:'croco',at:{t:40},delay:[10,20]},{type:'baa',at:{t:60},delay:[10,20]},{type:'gory',at:{t:160},delay:[30,60]},{type:'seal',at:{t:200},delay:[30,60]},{type:'peng',at:{t:80},delay:[30,60]},{type:'hippo',at:{t:120},delay:[30,60]},{type:'pigge',at:{t:120},delay:[30,60]}],
30:[{type:'croco',at:{t:0},delay:[3.33,10]},{type:'guys',at:{t:10},delay:[5,10]},{type:'baa',at:{t:20},delay:[6.67,10]},{type:'leboin',at:{t:60},count:1},{type:'pigge',at:{t:180},delay:[20,40]}],
31:[{type:'guys',at:{t:0},delay:[3.33,13.33]},{type:'rabbit',at:{t:20},delay:[2,10]},{type:'seal',at:{t:60},delay:[20,40]},{type:'pigge',at:{t:40},delay:[20,40]},{type:'rabbit',at:{hp:99},delay:[2,10]}],
32:[{type:'snache',at:{t:10},delay:[5,6.67]},{type:'guys',at:{t:20},delay:[6.67,10]},{type:'croco',at:{t:40},delay:[10,20]},{type:'baa',at:{t:60},delay:[10,20]},{type:'gory',at:{t:100},delay:[30,60]},{type:'seal',at:{t:200},delay:[30,60]},{type:'peng',at:{t:80},delay:[30,60]},{type:'hippo',at:{t:120},delay:[30,60]},{type:'pigge',at:{t:120},delay:[30,60]},{type:'gory',at:{t:133.33},delay:[30,60]},{type:'gory',at:{hp:50},count:4,delay:[0.07,0.07]}],
33:[{type:'snache',at:{t:10},delay:[5,6.67]},{type:'guys',at:{t:20},delay:[6.67,10]},{type:'croco',at:{t:40},delay:[10,20]},{type:'baa',at:{t:60},delay:[10,20]},{type:'gory',at:{t:100},delay:[30,60]},{type:'seal',at:{t:200},delay:[66.67,133.33]},{type:'peng',at:{t:80},delay:[30,60]},{type:'hippo',at:{t:120},delay:[30,60]},{type:'pigge',at:{t:120},delay:[30,60]},{type:'pigge',at:{t:133.33},delay:[30,60]},{type:'seal',at:{hp:90},count:1},{type:'seal',at:{hp:70},count:1},{type:'seal',at:{hp:50},count:1},{type:'seal',at:{hp:30},count:1}],
34:[{type:'dog',at:{t:0},delay:[4,13.33]},{type:'snache',at:{t:13.33},delay:[4,13.33]},{type:'guys',at:{t:60},delay:[4,13.33]},{type:'croco',at:{t:80},delay:[10,20]},{type:'rabbit',at:{t:100},delay:[10,20]},{type:'kangaroo',at:{hp:99},count:1,boss:true}],
35:[{type:'dog',at:{t:0},delay:[3.33,10]},{type:'snache',at:{t:13.33},delay:[3.33,10]},{type:'guys',at:{t:60},delay:[3.33,10]},{type:'croco',at:{t:80},delay:[3.33,10]},{type:'rabbit',at:{t:100},delay:[3.33,13.33]},{type:'baa',at:{t:100},delay:[3.33,20]},{type:'hippo',at:{t:120},delay:[30,60]},{type:'pigge',at:{t:120},delay:[30,60]},{type:'leboin',at:{t:100},count:1},{type:'leboin',at:{t:233.33},delay:[133.33,200]}],
36:[{type:'dog',at:{t:0},delay:[3.33,10]},{type:'snache',at:{t:13.33},delay:[3.33,10]},{type:'guys',at:{t:6.67},delay:[3.33,10]},{type:'croco',at:{t:80},delay:[3.33,10]},{type:'rabbit',at:{t:100},delay:[3.33,13.33]},{type:'baa',at:{t:100},delay:[3.33,20]},{type:'hippo',at:{t:120},delay:[30,60]},{type:'pigge',at:{t:120},delay:[30,60]},{type:'kangaroo',at:{t:100},count:1},{type:'kangaroo',at:{t:166.67},count:1}],
37:[{type:'dog',at:{t:0},delay:[10,30]},{type:'guys',at:{t:0},delay:[10,30]},{type:'squirrel',at:{t:30},delay:[10,30]},{type:'gory',at:{hp:99},count:1},{type:'gory',at:{hp:97},count:1},{type:'gory',at:{hp:95},count:1},{type:'guys',at:{hp:95},delay:[1,10]},{type:'gory',at:{hp:93},count:1},{type:'mooth',at:{hp:92},count:1,boss:true},{type:'croco',at:{hp:92},delay:[1,10]},{type:'squirrel',at:{hp:92},delay:[1,10]}],
38:[{type:'dog',at:{t:0},delay:[3,14]},{type:'snache',at:{t:0},delay:[3,14]},{type:'guys',at:{t:40},delay:[6,14]},{type:'squirrel',at:{t:80},delay:[6,14]},{type:'gory',at:{t:66.67},delay:[66.67,100]},{type:'seal',at:{t:86.67},delay:[66.67,100]},{type:'peng',at:{t:106.67},delay:[66.67,100]},{type:'gory',at:{hp:80},count:3,delay:[0.07,0.07]},{type:'peng',at:{hp:60},count:8,delay:[0.07,0.07]},{type:'seal',at:{hp:40},count:4,delay:[0.07,0.07]}],
39:[{type:'dog',at:{t:0},delay:[3,14]},{type:'snache',at:{t:0},delay:[3,14]},{type:'guys',at:{t:40},delay:[6,14]},{type:'squirrel',at:{t:80},delay:[6,14]},{type:'gory',at:{t:66.67},delay:[66.67,100]},{type:'seal',at:{t:86.67},delay:[66.67,100]},{type:'peng',at:{t:40},delay:[20,30]},{type:'gory',at:{t:80},delay:[40,60]},{type:'leboin',at:{t:100},delay:[100,100]},{type:'kangaroo',at:{hp:80},count:1},{type:'kangaroo',at:{hp:60},count:1}],
40:[{type:'guys',at:{t:0},delay:[1,10]},{type:'croco',at:{t:20},delay:[10,30]},{type:'squirrel',at:{t:0},delay:[1,16.67]},{type:'rhino',at:{t:0},count:1},{type:'rhino',at:{hp:80},count:1,boss:true}],
41:[{type:'dog',at:{t:0},delay:[3,14]},{type:'snache',at:{t:0},delay:[3,14]},{type:'guys',at:{t:40},delay:[6,14]},{type:'squirrel',at:{t:80},delay:[6,14]},{type:'gory',at:{t:66.67},delay:[66.67,100]},{type:'seal',at:{t:86.67},delay:[66.67,100]},{type:'peng',at:{t:40},delay:[20,30]},{type:'gory',at:{t:80},delay:[10,30]},{type:'leboin',at:{t:100},delay:[100,100]},{type:'kangaroo',at:{t:140},count:1},{type:'kangaroo',at:{hp:50},count:2}],
42:[{type:'dog',at:{t:0},delay:[3,20]},{type:'snache',at:{t:0},delay:[3,20]},{type:'guys',at:{t:40},delay:[3,20]},{type:'croco',at:{t:20},delay:[3,20]},{type:'rabbit',at:{t:20},delay:[3,20]},{type:'pigge',at:{t:30},delay:[30,60]},{type:'seal',at:{t:60},delay:[30,60]},{type:'rabbit',at:{t:90},delay:[30,60]},{type:'rhino',at:{t:20},count:1},{type:'rhino',at:{hp:80},count:1},{type:'rhino',at:{hp:60},count:1}],
43:[{type:'dog',at:{t:0},delay:[3,14]},{type:'snache',at:{t:0},delay:[3,14]},{type:'guys',at:{t:40},delay:[6,14]},{type:'squirrel',at:{t:0},delay:[1,2]},{type:'bear',at:{hp:99},count:1,boss:true}],
44:[{type:'hippo',at:{t:0},delay:[1,2]},{type:'pigge',at:{t:0},delay:[1,2]},{type:'peng',at:{t:40},delay:[10,20]},{type:'gory',at:{t:60},delay:[13.33,30]},{type:'seal',at:{t:80},delay:[40,53.33]},{type:'leboin',at:{t:100},delay:[73.33,113.33]},{type:'kangaroo',at:{t:120},delay:[43.33,80]},{type:'mooth',at:{t:140},count:1}],
45:[{type:'squirrel',at:{t:0},count:20,delay:[0.67,1]},{type:'bear',at:{t:100},delay:[100,133.33]},{type:'bear',at:{hp:99},count:1},{type:'squirrel',at:{t:0},delay:[3.33,10]},{type:'pigge',at:{t:0},delay:[40,60]},{type:'rabbit',at:{t:0},delay:[20,40]},{type:'mooth',at:{hp:90},count:1}],
46:[{type:'guys',at:{t:0},delay:[0.07,0.07]},{type:'hippo',at:{t:0},delay:[1,2]},{type:'peng',at:{t:0},delay:[1,2]},{type:'gory',at:{t:60},delay:[13.33,30]},{type:'seal',at:{t:80},delay:[26.67,53.33]},{type:'leboin',at:{t:100},delay:[53.33,100]},{type:'kangaroo',at:{t:120},delay:[30,50]},{type:'rhino',at:{t:140},delay:[66.67,86.67]},{type:'bear',at:{t:160},delay:[133.33,266.67]}],
47:[{type:'dog',at:{t:5},delay:[5,6]},{type:'snache',at:{t:12},delay:[12,13]},{type:'guys',at:{t:9},delay:[9,15]},{type:'rhino',at:{t:28},delay:[28,52]},{type:'bear',at:{t:32},delay:[32,58]},{type:'face',at:{hp:50},count:1,boss:true}]
};
function stageEnemies(i){return [...new Set((STAGE_SPAWNS[i]||[]).map(r=>r.type))]}
function pickDelay(range){return range[0]+Math.random()*(range[1]-range[0])}
function updateStageSpawns(dt){
 const hpPct=data.bases.enemy.hp/data.bases.enemy.max*100;
 for(const r of game.spawnRules){
  if(r.count!==undefined&&r.spawned>=r.count)continue;
  if(!r.triggered){
   const hit=r.at.t!==undefined?game.elapsed>=r.at.t:hpPct<=r.at.hp;
   if(!hit)continue;
   r.triggered=true;r.clock=0;
  }
  r.clock-=dt;
  if(r.clock<=0){
   addUnit(r.type);r.spawned++;
   if(r.boss){triggerBossShockwave();$('#battleNotice').textContent='보스 '+UNIT_NAMES[r.type]+' 등장!';game.noticeTime=3}
   r.clock+=r.delay?pickDelay(r.delay):1e9;
  }
 }
}
function renderNewButtons(){for(const type of ['cyan','blue','purple','pink']){
 const b=$('#'+type+'Btn'),d=data.units[type],unlocked=allyUnlocked(type),cd=unitCooldown(type);
 b.disabled=!unlocked||!game.running||game.paused||game.ended||game.money<d.cost||cd>0;
 b.querySelector('small').textContent=unlocked?`${d.cost}원`:STAGES[UNLOCK_AT[type]].name+' 클리어 시 해금';
 b.querySelector('em').style.display=cd?'block':'none';b.querySelector('em').style.transform=`scaleY(${cd/d.cooldown})`;
}}

const NEW_ATLASES={
rhino:{scale:.55,left:-27,walk:[[0,0,126,84],[128,0,126,84],[256,0,126,84],[384,0,128,84],[0,85,126,84],[128,85,126,84],[256,85,126,84]],attack:[[384,85,128,84],[0,170,126,86],[128,170,126,86],[256,170,126,86]],hurt:[[0,85,126,84]]},
bear:{scale:.58,left:-22,walk:[[0,0,88,130],[94,67,97,183],[190,67,100,183],[443,0,69,128],[0,0,88,130]],attack:[[190,67,100,183],[290,67,126,160],[0,0,88,130]]},
face:{scale:.62,left:-25,walk:[[0,0,118,130],[121,0,120,130]],attack:[[244,0,125,130],[371,0,126,130]],hurt:[[0,134,155,118]]},
rabbit:{scale:.72,left:-10,walk:[[7,7,52,68],[79,25,56,50],[153,27,55,48],[235,2,57,75],[292,2,72,75],[376,8,65,69]],attack:[[7,84,72,77],[104,78,64,76],[236,79,58,79],[324,80,116,72]],hurt:[[13,177,92,65]]},
squirrel:{scale:.68,left:-12,walk:[[20,18,54,52],[99,18,54,52],[178,17,66,53],[259,13,75,57],[340,13,77,57]],attack:[[5,84,79,83],[95,84,79,83],[181,84,79,83],[269,84,80,83]],hurt:[[348,91,69,76]]},
kangaroo:{scale:.58,left:-24,walk:[[5,1,115,124],[126,1,70,124],[4,129,115,124],[124,129,72,124]],attack:[[199,1,110,124],[202,129,108,124],[312,1,105,124],[313,129,104,124]],hurt:[[126,1,70,124]]},
mooth:{scale:.7,left:-28,walk:[[7,0,99,128],[126,0,100,128],[247,0,76,128]],attack:[[0,132,123,124],[124,132,121,124],[247,132,119,124],[376,0,136,153]],hurt:[[247,0,76,128]]},
leboin:{scale:.55,left:-16,walk:[[298,0,103,252],[298,0,103,252],[298,0,103,252]],attack:[[298,0,103,252],[1,10,156,147],[1,10,156,147]],hurt:[[298,0,103,252]]},
peng:{"scale": 0.72, "left": 0, "walk": [[1, 1, 63, 87], [68, 1, 61, 87], [136, 1, 61, 87], [204, 1, 64, 87], [272, 1, 62, 87], [340, 1, 61, 87], [405, 1, 62, 87]], "attack": [[1, 91, 64, 88], [71, 92, 61, 87], [137, 92, 62, 87], [204, 92, 63, 87], [271, 92, 60, 87], [329, 92, 61, 87], [391, 91, 113, 135]], "hurt": [[1, 185, 86, 63]]},
gory:{"scale": 0.7, "left": -5, "walk": [[2, 3, 72, 84], [77, 3, 70, 84], [152, 3, 72, 84], [228, 3, 73, 84], [304, 3, 72, 84], [378, 3, 72, 84]], "attack": [[2, 90, 74, 101], [80, 90, 75, 101], [158, 89, 100, 90], [261, 91, 99, 77], [364, 91, 91, 77]], "hurt": [[261, 169, 98, 77]]},
baa:{"scale": 0.68, "left": -7, "walk": [[6, 1, 86, 75], [99, 1, 85, 75], [190, 1, 87, 75], [280, 1, 85, 75], [371, 1, 85, 75]], "attack": [[1, 79, 86, 75], [92, 79, 85, 75], [180, 77, 118, 77], [301, 78, 88, 76]], "hurt": [[91, 157, 86, 70]]},
seal:{"scale": 0.78, "left": -22, "walk": [[1, 2, 112, 79], [116, 1, 111, 80], [1, 85, 112, 74]], "attack": [[116, 88, 111, 71], [116, 162, 111, 77], [231, 3, 115, 110], [349, 1, 117, 112], [349, 115, 117, 108]], "hurt": [[116, 162, 111, 77]]},
croco:{"scale": 0.72, "left": -10, "walk": [[1, 28, 85, 42], [89, 28, 85, 42], [178, 28, 85, 42], [266, 28, 85, 42], [354, 28, 86, 42]], "attack": [[1, 98, 86, 40], [89, 70, 86, 69], [178, 70, 86, 69], [266, 70, 86, 69], [353, 102, 88, 37]], "hurt": [[89, 141, 86, 114]]},

 pigge:{scale:.8,left:-20,walk:[[4,1,103,77],[4,79,103,76],[4,157,103,76],[115,5,104,73],[112,80,109,76],[115,158,104,75]],attack:[[225,1,126,104],[225,107,126,67],[225,177,126,67]],hurt:[[355,3,124,65],[368,72,103,65]]},
 guys:{scale:1,left:0,walk:[[30,40,43,32],[90,40,42,32],[150,40,43,32],[210,40,43,32],[270,40,43,32]],attack:[[30,100,43,32],[90,100,48,32],[150,100,51,32],[210,100,54,32],[270,87,63,45],[30,147,64,45],[100,154,56,38],[160,154,56,38],[220,161,43,31]],hurt:[[33,221,41,31]]},
 hippo:{scale:.9,left:-26,walk:[[1,24,105,78],[113,24,105,78],[226,24,104,78]],attack:[[337,4,99,98],[1,104,99,101],[113,118,110,87],[225,140,109,65],[338,127,104,78]]}
};
// The first column is locomotion; the second is windup; the third is impact/recovery.
// Keep the body anchored and show impact at the same 14f threshold as damage.
function animatePigge(u){
 let frame,state;
 if(u.hurtTime>0){state='hurt';frame=[368,72,103,65]}
 else if(u.attackTime>0){
  state='attack';const f=(data.units.pigge.attackDuration-u.attackTime)*30;
  frame=f<5?[115,5,104,73]:f<10?[112,80,109,76]:f<14?[115,158,104,75]:f<17?[225,1,126,104]:f<22?[225,107,126,67]:[225,177,126,67];
 }else{
  const t=target(u),stationary=(t&&Math.abs(t.x-u.x)<=data.units.pigge.range)||(!t&&data.bases.ally.frontX-u.x<=data.units.pigge.range);
  state=stationary?'idle':'walk';frame=[[4,1,103,77],[4,79,103,76],[4,157,103,76]][stationary?0:Math.floor(u.animTime/.16)%3];
 }
 const [x,y,w,h]=frame,el=u.el.querySelector('.dog-sprite');el.style.backgroundPosition=`-${x}px -${y}px`;el.style.width=w+'px';el.style.height=h+'px';el.style.left='-20px';el.style.transform='scale(.8)';el.style.transformOrigin='left bottom';el.style.filter='none';u.el.dataset.animation=state;
}
function animateAtlas(u){
 const atlas=NEW_ATLASES[u.type];
 const state=u.hurtTime>0?'hurt':u.attackTime>0?'attack':'walk';
 // Gory's raised-fists sprite is its actual hitback pose; Peng uses an upright pose.
 const visualState=state==='hurt'&&u.type==='gory'?'attack':state==='hurt'&&(['peng'].includes(u.type)||!atlas.hurt)?'walk':state;
 const frames=atlas[visualState];
 const duration=data.units[u.type].attackDuration;
 let index=visualState==='attack'?Math.min(frames.length-1,Math.max(0,Math.floor((duration-u.attackTime)/duration*frames.length))):visualState==='walk'?Math.floor(u.animTime/.14)%frames.length:0;
 if(visualState==='attack'&&u.type==='peng'){
  // Play all seven attack drawings across the complete animation. Damage still lands at windup.
  const elapsed=Math.max(0,duration-u.attackTime);
  index=Math.min(frames.length-1,Math.floor(elapsed/duration*frames.length));
 }else if(visualState==='attack'&&data.units[u.type].windup){const elapsed=duration-u.attackTime,windup=data.units[u.type].windup,strike={gory:2,baa:2,seal:4,croco:3}[u.type];if(strike!==undefined)index=elapsed<windup?Math.min(strike-1,Math.floor(elapsed/windup*strike)):Math.min(frames.length-1,strike+Math.floor((elapsed-windup)/Math.max(.01,duration-windup)*(frames.length-strike)));}
 if(state==='hurt'&&u.type==='gory')index=0;
 if(visualState==='attack'&&u.type==='leboin')index=(duration-u.attackTime)<data.units.leboin.windup?0:2;
 const [x,y,w,h]=frames[index];const sprite=u.el.querySelector('.dog-sprite');
 sprite.style.backgroundPosition=`-${x}px -${y}px`;
 sprite.style.width=w+'px';sprite.style.height=h+'px';sprite.style.left=atlas.left+'px';
 sprite.style.transform=`scale(${atlas.scale})`;sprite.style.transformOrigin='left bottom';
 sprite.style.filter=state==='hurt'&&!atlas.hurt?'brightness(1.8)':'none';
 u.el.dataset.animation=state;
}

function renderStageMenu(){renderTraining();renderBaseUpgrade();
 $('#stageGrid').innerHTML='';
 STAGES.forEach((stage,i)=>{const button=document.createElement('button');button.className='stage-card'+(cleared.includes(i)?' cleared':'');button.disabled=!isUnlocked(i);button.title=`등장 적: ${stageEnemies(i).map(type=>UNIT_NAMES[type]).join(' · ')} · 적 성 체력 ${stage.hp}`;button.innerHTML=`<strong>${stage.name}</strong>${cleared.includes(i)?'<small>✓</small>':''}`;button.onclick=()=>{selectedStage=i;reset()};$('#stageGrid').append(button)});
 $('#progressText').textContent=`${cleared.length} / ${STAGES.length} 스테이지 클리어`;
}
function openStages(){if(game.running&&!game.ended)game.paused=true;highlight();render();renderStageMenu();$('#stageMenu').classList.remove('hidden');$('#resumeBtn').textContent=game.ended?'결과로 돌아가기':'전투로 돌아가기'}
$('#stagesBtn').onclick=openStages;
$('#resultStagesBtn').onclick=openStages;
$('#resumeBtn').onclick=()=>{$('#stageMenu').classList.add('hidden');if(!game.ended){game.paused=false;tutorial()}render()};
$('#nextStageBtn').onclick=()=>{if(game.ended&&selectedStage<STAGES.length-1&&isUnlocked(selectedStage+1)){selectedStage++;reset()}};
window.addEventListener('resize',syncBasePositions);


const EVOLVED_CELL_W=1536/7*.75,EVOLVED_CELL_H=1024/8*.75;
const WIDE_THROW_TYPES=new Set(['orange','yellow','purple']);
function animateAlly(u){
 const state=u.hurtTime>0?'hurt':u.attackTime>0?'attack':'walk';
 if(u.stats?.evolved){
  const sprite=u.el.querySelector('.evolved-sprite'),row=ALLIES.indexOf(u.type);
  const duration=data.units[u.type].attackDuration||.56;
  const col=u.hurtTime>0?6:u.attackTime>0?3+Math.min(2,Math.max(0,Math.floor((duration-u.attackTime)/duration*3))):Math.floor(u.animTime/.16)%3;
  sprite.style.backgroundPosition=`${-col*EVOLVED_CELL_W}px ${-row*EVOLVED_CELL_H}px`;
  u.el.dataset.animation=state;
  return;
 }
 const sprite=u.el.querySelector('.ally-sprite');
 // The source art draws the thrown-projectile pose spanning cols 3+4 as one wide
 // picture (it splits the object down the middle at the col boundary). Reveal both
 // cells together at the impact instant instead of cropping it in half.
 if(u.type==='cyan'||u.type==='blue'){
  const cell=77.6125;
  const duration=data.units[u.type].attackDuration||.56;
  const col=u.hurtTime>0?6:u.attackTime>0?3+Math.min(2,Math.max(0,Math.floor((duration-u.attackTime)/duration*3))):Math.floor(u.animTime/(u.type==='blue'?.075:.16))%3;
  if(u.type==='cyan'&&col===3){
   sprite.style.width=cell+'px';sprite.style.backgroundPosition=`${-2*cell}px 0px`;
  }else if(u.type==='cyan'&&col===4){
   sprite.style.width=(cell*2)+'px';sprite.style.backgroundPosition=`${-3*cell}px 0px`;
  }else{
   sprite.style.width=cell+'px';sprite.style.backgroundPosition=`${-col*cell}px 0px`;
  }
  u.el.querySelector('.ally-shadow').style.backgroundPosition='-543.2875px -77.6125px';
 }else{
  const row={red:0,orange:1,yellow:2,green:3,purple:1,pink:0}[u.type],cell=77.6125;
  const duration=data.units[u.type].attackDuration||.56;
  const col=u.hurtTime>0?6:u.attackTime>0?3+Math.min(2,Math.max(0,Math.floor((duration-u.attackTime)/duration*3))):Math.floor(u.animTime/.16)%3;
  if(WIDE_THROW_TYPES.has(u.type)&&col===3){
   sprite.style.width=cell+'px';sprite.style.backgroundPosition=`${-2*cell}px ${-row*cell}px`;
  }else if(WIDE_THROW_TYPES.has(u.type)&&col===4){
   sprite.style.width=(cell*2)+'px';sprite.style.backgroundPosition=`${-3*cell}px ${-row*cell}px`;
  }else{
   sprite.style.width=cell+'px';sprite.style.backgroundPosition=`${-col*cell}px ${-row*cell}px`;
  }
  u.el.querySelector('.ally-shadow').style.backgroundPosition=`${-7*cell}px ${-row*cell}px`;
 }
 u.el.dataset.animation=state;
}

const ALLIES=['red','orange','yellow','green','cyan','blue','purple','pink'];
const UNLOCK_AT={red:-1,orange:2,yellow:5,green:6,cyan:12,blue:15,purple:18,pink:37};
const ROLES={red:'기본 근접',orange:'중거리 범위',yellow:'방어형 전기',green:'왕복 부메랑',cyan:'초장거리 저격',blue:'고속 연타',purple:'근접 빨간 적 특화',pink:'근거리 광역'};
const COLORS={red:'#ff7272',orange:'#ffb452',yellow:'#ffe46d',green:'#83e595',cyan:'#53e5ef',blue:'#629aff',purple:'#c893ff',pink:'#ff73b8'};
const PROFILE_SHEET='assets/profile_sheet.png';
const PROFILE_TEXT={red:'가장 먼저 전선에 뛰어든 기본 전투원. 단순하지만 어떤 전투에서도 믿을 만하다.',orange:'멀리서 과즙을 던져 모여 있는 적을 한꺼번에 공격한다.',yellow:'튼튼한 몸으로 앞줄을 지키며 가까운 적에게 전기를 방출한다.',green:'왕복하는 부메랑으로 같은 적을 두 번 공격할 수 있다.',cyan:'아주 먼 거리에서 넓은 범위를 노리는 장거리 전투원.',blue:'빠른 이동과 연속 공격으로 빈틈을 놓치지 않는 속공 전투원.',purple:'빨간 적을 상대하도록 특별히 훈련된 색상 특화 전투원.',pink:'가까이 접근한 뒤 긴 광역 판정으로 뒤쪽의 적까지 휩쓴다.'};
const EVOLUTION_TEXT={red:'강타',orange:'과즙 범위 확대',yellow:'추가 체력',green:'귀환 부메랑 강화',cyan:'광역 범위 확대',blue:'공격 속도 증가',purple:'빨간 적 특화 강화',pink:'광역 공격력 증가'};
const PROFILE_TEXT_EVOLVED={red:'수많은 전투를 거치며 맨몸으로도 강력한 일격을 날릴 수 있게 되었다. 이제는 단순한 몸빵이 아니라 한 방을 노리는 타격형 전투원.',orange:'더 많은 과즙을 담아 던지게 되면서 폭발 범위가 눈에 띄게 넓어졌다.',yellow:'두꺼워진 몸으로 더 오래 버티며 최전선을 든든하게 지킨다.',green:'부메랑을 던지는 손목 힘이 강해져 돌아올 때 더 강력한 일격을 남긴다.',cyan:'조준 실력이 늘어 폭발 범위가 한층 넓어진 저격수로 거듭났다.',blue:'손이 더 빨라져 눈 깜짝할 사이에 연타를 꽂아 넣는다.',purple:'빨간 적의 약점을 완벽히 파악해 압도적인 피해를 입히고, 받는 피해는 최소화한다.',pink:'리본을 휘두르는 힘이 강해져 광역 공격의 위력이 한층 강력해졌다.'};
const PROFILE_CALIB={
 red:{base:{size:541,x:1,y:-7},evolved:{size:486,x:7,y:-241}},
 orange:{base:{size:520,x:-136,y:-5},evolved:{size:486,x:-121,y:-241}},
 yellow:{base:{size:494,x:-246,y:-1},evolved:{size:486,x:-244,y:-241}},
 green:{base:{size:488,x:-364,y:0},evolved:{size:486,x:-362,y:-241}},
 cyan:{base:{size:494,x:1,y:-120},evolved:{size:488,x:2,y:-363}},
 blue:{base:{size:538,x:-133,y:-135},evolved:{size:492,x:-120,y:-367}},
 purple:{base:{size:504,x:-253,y:-124},evolved:{size:488,x:-242,y:-363}},
 pink:{base:{size:534,x:-407,y:-131},evolved:{size:492,x:-366,y:-367}}
};
function profileMarkup(type,evolved){const c=PROFILE_CALIB[type][evolved?'evolved':'base'];return `<div class="generated-profile" role="img" aria-label="${UNIT_NAMES[type]}${evolved?' 2진':''} 프로필" style="background-image:url(${PROFILE_SHEET});background-size:${c.size}px ${c.size}px;background-position:${c.x}px ${c.y}px"></div>`}
let training={xp:0,baseLevel:1,levels:{red:1,orange:1,yellow:1,green:1,cyan:1,blue:1,purple:1,pink:1}},trainingSaveFailed=false;
function stageXP(i){return 200+i*50}
try{
 const raw=localStorage.getItem('red-battle-training-v1');
 if(raw){const saved=JSON.parse(raw);training.xp=Number.isSafeInteger(saved.xp)&&saved.xp>=0?saved.xp:0;training.baseLevel=Number.isInteger(saved.baseLevel)?Math.max(1,Math.min(10,saved.baseLevel)):1;for(const t of ALLIES){const n=saved.levels?.[t];training.levels[t]=Number.isInteger(n)?Math.max(1,Math.min(10,n)):1}}
 else{training.xp=cleared.reduce((sum,i)=>sum+stageXP(i),0);saveTraining()}
}catch{trainingSaveFailed=true}
function saveTraining(){try{localStorage.setItem('red-battle-training-v1',JSON.stringify(training));trainingSaveFailed=false}catch{trainingSaveFailed=true}}
function unitStats(type,level=training.levels[type]||1){const d=data.units[type],stats={...d,hp:Math.round(d.hp*(1+.1*(level-1))),atk:Math.round(d.atk*(1+.1*(level-1)))};if(level<10)return stats;stats.evolved=true;stats.range=d.range*1.2;if(d.engageRange)stats.engageRange=d.engageRange*1.2;if(type==='red')stats.atk=Math.round(stats.atk*1.2);if(type==='orange')stats.splash=d.splash*1.35;if(type==='yellow')stats.hp=Math.round(stats.hp*1.25);if(type==='green')stats.returnMult=1.35;if(type==='cyan')stats.splash=d.splash*1.3;if(type==='blue')stats.interval=d.interval*.8;if(type==='purple'){stats.redDamage=3;stats.redResist=.4}if(type==='pink')stats.atk=Math.round(stats.atk*1.15);return stats}
function allyUnlocked(t){return t==='red'||cleared.some(i=>i>=UNLOCK_AT[t])}
const DECK_SIZE=10;
let deck=['red'];
try{
 const raw=localStorage.getItem('red-battle-deck-v1');
 if(raw){const saved=JSON.parse(raw);if(Array.isArray(saved))deck=[...new Set(saved.filter(t=>ALLIES.includes(t)))].slice(0,DECK_SIZE)}
}catch{}
function saveDeck(){try{localStorage.setItem('red-battle-deck-v1',JSON.stringify(deck))}catch{}}
function toggleDeck(t){
 if(!allyUnlocked(t))return;
 if(deck.includes(t))deck=deck.filter(x=>x!==t);
 else if(deck.length<DECK_SIZE)deck.push(t);
 saveDeck();renderTraining();render();
}
function renderDeckButtons(){const tutorialActive=game&&game.tutorial<6;for(const t of ALLIES)$(t==='red'?'#spawnBtn':'#'+t+'Btn').hidden=!deck.includes(t)&&!(t==='red'&&tutorialActive)}
let speedTickets=0;
try{const raw=localStorage.getItem('red-battle-speed-v1');const n=parseInt(raw,10);if(Number.isInteger(n)&&n>=0)speedTickets=n}catch{}
function saveSpeedTickets(){try{localStorage.setItem('red-battle-speed-v1',String(speedTickets))}catch{}}
function renderSpeedButton(){
 const b=$('#speedBtn');
 b.firstChild.textContent=game.speedMultiplier===2?'2배속':'1배속';
 b.querySelector('small').textContent=game.speedUnlocked?'':`배속권 ${speedTickets}개`;
 b.disabled=!game.speedUnlocked&&speedTickets<=0;
}
$('#speedBtn').onclick=()=>{
 if(!game.speedUnlocked){
  if(speedTickets<=0)return;
  speedTickets--;saveSpeedTickets();game.speedUnlocked=true;game.speedMultiplier=2;
 }else{
  game.speedMultiplier=game.speedMultiplier===2?1:2;
 }
 renderSpeedButton();
};
function upgradeCost(t){return training.levels[t]*100}
function upgradeCharacter(t){if(!ALLIES.includes(t)||!allyUnlocked(t)||training.levels[t]>=10||training.xp<upgradeCost(t))return false;training.xp-=upgradeCost(t);training.levels[t]++;saveTraining();renderTraining();renderBaseUpgrade();render();return true}
function baseHpFor(level=training.baseLevel){return Math.round(2000*(1+.1*(level-1)))}
function baseHpCost(){return training.baseLevel*150}
function upgradeBase(){if(training.baseLevel>=10||training.xp<baseHpCost())return false;training.xp-=baseHpCost();training.baseLevel++;saveTraining();renderBaseUpgrade();renderTraining();return true}
function renderBaseUpgrade(){
 const grid=$('#baseGrid');grid.innerHTML='';
 const l=training.baseLevel,hp=baseHpFor(l),next=baseHpFor(Math.min(10,l+1)),card=document.createElement('article');card.className='training-card';
 card.innerHTML=`<h3>아군 성 체력 <small>Lv.${l} / 10</small></h3><p>기지 방어력 강화<br>체력 ${hp}${l<10?' → '+next:''}</p>`;
 const b=document.createElement('button');b.textContent=l===10?'최대 레벨':baseHpCost()+' XP · 강화';b.disabled=l>=10||training.xp<baseHpCost();b.onclick=()=>upgradeBase();card.append(b);
 grid.append(card);
}
function awardXP(){const reward=cleared.includes(selectedStage)?Math.floor(stageXP(selectedStage)/2):stageXP(selectedStage);training.xp+=reward;saveTraining();return reward}
function renderUnitLevels(){for(const t of ALLIES){const b=$(t==='red'?'#spawnBtn':'#'+t+'Btn'),d=unitStats(t),e=d.evolved;b.querySelector('strong').textContent=UNIT_NAMES[t]+(e?' 2진':'')+' Lv.'+training.levels[t];b.title=`${ROLES[t]} · 체력 ${d.hp} · 공격력 ${d.atk} · 사거리 ${Math.round(d.range)} · 공격 주기 ${d.interval.toFixed(2)}초 · 이동 ${d.speed} · ${d.cost}원${t==='purple'?' · 빨간 적에게 강함':''}${t==='cyan'?' · 떠다니는 적에게 강함':''}${e?' · 스틱맨 2진':''}`}}
function renderTraining(){
 $('#xpText').textContent=training.xp+' XP';$('#trainingGrid').innerHTML='';
 $('#deckText').textContent=`출전 덱 ${deck.length} / ${DECK_SIZE} · 전투에는 덱에 넣은 아군만 나옵니다`;
 for(const t of ALLIES){const l=training.levels[t],d=unitStats(t),next=unitStats(t,Math.min(10,l+1)),unlocked=allyUnlocked(t),inDeck=deck.includes(t),evolved=l===10,card=document.createElement('article');card.className='training-card';card.innerHTML=`${profileMarkup(t,evolved)}<h3 style="color:${COLORS[t]}">${UNIT_NAMES[t]}${evolved?' 2진':''} <small>Lv.${l} / 10</small></h3><p class="profile-copy"><strong>${ROLES[t]}</strong>${t==='purple'?' · 빨간 적에게 강함':''}${t==='cyan'?' · 떠다니는 적에게 강함':''}<br>${evolved?PROFILE_TEXT_EVOLVED[t]:PROFILE_TEXT[t]}${evolved?'<br><strong>2진 효과: '+EVOLUTION_TEXT[t]+' · 사거리 20% 증가</strong>':''}</p><p>체력 ${d.hp}${l<10?' → '+next.hp:''}<br>공격력 ${d.atk}${l<10?' → '+next.atk:''}</p>`;const b=document.createElement('button');b.textContent=!unlocked?STAGES[UNLOCK_AT[t]].name+' 클리어로 해금':l===10?'2진 진화 완료':upgradeCost(t)+' XP · 강화';b.disabled=!unlocked||l>=10||training.xp<upgradeCost(t);b.onclick=()=>upgradeCharacter(t);card.append(b);
  if(unlocked){const db=document.createElement('button');db.className='deck-btn';db.textContent=inDeck?'덱에서 제외':deck.length>=DECK_SIZE?'덱 가득참':'덱에 추가';db.disabled=!inDeck&&deck.length>=DECK_SIZE;db.classList.toggle('active',inDeck);db.onclick=()=>toggleDeck(t);card.append(db)}
  $('#trainingGrid').append(card)}
 $('#saveWarning').textContent=trainingSaveFailed?'브라우저 저장을 사용할 수 없습니다. 이번 플레이에서만 유지됩니다.':'';
}

function saveAll(){saveProgress();saveTraining();saveDeck();saveSpeedTickets()}
addEventListener('pagehide',saveAll);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')saveAll()});

reset();openStages();requestAnimationFrame(loop);

