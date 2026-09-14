const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];


// ===== GAME DATA / LINKS =====
const gameData=window.SYNDFCO_GAMES||{};
$$('[data-game-link]').forEach(link=>{
  const game=gameData[link.dataset.gameLink];
  if(!game) return;
  link.href=game.link||'#';
  if(game.link && game.link !== '#'){
    link.target='_blank';
    link.rel='noopener noreferrer';
  }
});

const header=$('.site-header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>20),{passive:true});

const glow=$('.cursor-glow');
addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}},{passive:true});

const menuBtn=$('.menu-btn'), nav=$('.main-nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
$$('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const reveals=$$('.reveal');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
reveals.forEach(el=>io.observe(el));

let slide=0, timer;
const slides=$$('.hero-slide'), dots=$$('.slider-dots button');
function showSlide(i){slide=(i+slides.length)%slides.length;slides.forEach((el,n)=>el.classList.toggle('active',n===slide));dots.forEach((el,n)=>el.classList.toggle('active',n===slide));clearInterval(timer);timer=setInterval(()=>showSlide(slide+1),6500)}
$('.next')?.addEventListener('click',()=>showSlide(slide+1));$('.prev')?.addEventListener('click',()=>showSlide(slide-1));dots.forEach(d=>d.addEventListener('click',()=>showSlide(+d.dataset.slide)));showSlide(0);

$$('.filters button').forEach(btn=>btn.addEventListener('click',()=>{ $$('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;$$('.game-card').forEach(card=>card.classList.toggle('hidden',f!=='all'&&card.dataset.category!==f));}));

$$('.news-tabs button').forEach(btn=>btn.addEventListener('click',()=>{ $$('.news-tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.news;$$('[data-type]').forEach(card=>card.classList.toggle('hidden',f!=='all'&&card.dataset.type!==f));}));

$$('.tilt').forEach(card=>{card.addEventListener('pointermove',e=>{if(matchMedia('(pointer:fine)').matches){const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(800px) rotateX(${-y*5}deg) rotateY(${x*7}deg) translateY(-4px)`}});card.addEventListener('pointerleave',()=>card.style.transform='')});

const modal=$('#trailerModal'), title=$('#trailerTitle'), trailerVideo=$('#trailerVideo');
function closeModal(){
  trailerVideo?.pause();
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
$$('.trailer-btn').forEach(b=>b.addEventListener('click',()=>{
  const game=gameData[b.dataset.gameId]||{};
  title.textContent=game.name||b.dataset.title||'Game Trailer';
  if(trailerVideo){
    trailerVideo.src=game.trailer||'';
    trailerVideo.poster=game.hero||'';
    trailerVideo.load();
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}));
$('.modal-close')?.addEventListener('click',closeModal);$('.modal-backdrop')?.addEventListener('click',closeModal);addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const toast=$('#toast'), toastCode=$('#toastCode');let toastTimer;
$$('.claim-btn').forEach(btn=>btn.addEventListener('click',async()=>{const code=btn.dataset.code;toastCode.textContent=code;try{await navigator.clipboard.writeText(code)}catch{}toast.classList.add('show');btn.textContent='Đã copy';clearTimeout(toastTimer);toastTimer=setTimeout(()=>{toast.classList.remove('show');btn.textContent='Nhận code'},2600)}));

const sections=$$('main section[id]');
const navLinks=$$('.main-nav a');
const spy=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>spy.observe(s));
