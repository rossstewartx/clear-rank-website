const reveals = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.14});

reveals.forEach(el=>io.observe(el));

const progress = document.getElementById('progressBar');
const parallax = [...document.querySelectorAll('[data-parallax]')];

function onScroll(){
  const max = document.documentElement.scrollHeight - innerHeight;
  const pct = max > 0 ? (scrollY/max)*100 : 0;
  progress.style.width = pct + '%';

  parallax.forEach(el=>{
    const speed = Number(el.dataset.parallax || 0);
    el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });
}
addEventListener('scroll', onScroll, {passive:true});
onScroll();

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('leadForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Looks good — this prototype does not send form data yet.';
});
