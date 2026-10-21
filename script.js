// Add your LinkedIn profile URL here when ready. Keep blank to hide the link.
const LINKEDIN_URL = '';
document.querySelectorAll('[data-linkedin]').forEach(a => { if(LINKEDIN_URL.trim()){ a.href=LINKEDIN_URL; a.hidden=false; } });
document.getElementById('year').textContent = new Date().getFullYear();
const menu=document.querySelector('.menu'), nav=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});document.querySelectorAll('.certificate-card').forEach(card=>{card.hidden=filter!=='All'&&card.dataset.category!==filter;});}));
