const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}});

document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();const f=e.target,err=f.querySelector('.err');
  if(!f.nome.value.trim()){err.hidden=false;f.nome.focus();return}
  err.hidden=true;
  const t=`Olá! Sou ${f.nome.value.trim()}.\nInteresse: ${f.linha.value}\n${f.msg.value.trim()}`;
  window.open('https://wa.me/5582996250255?text='+encodeURIComponent(t),'_blank','noopener');
});

if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){
  const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.15});
  document.querySelectorAll('section:not(.hero)').forEach(s=>{s.classList.add('reveal');io.observe(s)});
}
