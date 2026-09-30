const art = document.querySelector('#hero-art');
const frame = art?.querySelector('.art-frame');
const buttons = [...document.querySelectorAll('.mode-button')];
const caption = art?.querySelector('.art-caption');
const modes = [
  { number: '01 / 03', title: 'Melihat lebih dekat' },
  { number: '02 / 03', title: 'Mencari sudut baru' },
  { number: '03 / 03', title: 'Membuatnya nyata' },
];
let selectedMode = 0;
let raf = 0;
let pointerX = 50;
let pointerY = 50;

function setMode(index) {
  selectedMode = index;
  art.dataset.mode = String(index);
  buttons.forEach((button, i) => {
    button.classList.toggle('is-active', i === index);
    button.setAttribute('aria-pressed', String(i === index));
  });
  caption.querySelector('.caption-number').textContent = modes[index].number;
  caption.querySelector('strong').textContent = modes[index].title;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => setMode(Number(button.dataset.mode)));
  button.addEventListener('mouseenter', () => setMode(Number(button.dataset.mode)));
});

if (frame && window.matchMedia('(hover: hover)').matches) {
  frame.addEventListener('pointermove', (event) => {
    const rect = frame.getBoundingClientRect();
    pointerX = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
    pointerY = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
    if (!raf) {
      raf = requestAnimationFrame(() => {
        frame.style.setProperty('--pointer-x', `${pointerX}%`);
        frame.style.setProperty('--pointer-y', `${pointerY}%`);
        frame.style.setProperty('--tilt-x', `${(pointerY - 50) * -0.035}deg`);
        frame.style.setProperty('--tilt-y', `${(pointerX - 50) * 0.035}deg`);
        raf = 0;
      });
    }
  });
  frame.addEventListener('pointerenter', () => art.classList.add('is-hovered'));
  frame.addEventListener('pointerleave', () => {
    art.classList.remove('is-hovered');
    frame.style.setProperty('--tilt-x', '0deg');
    frame.style.setProperty('--tilt-y', '0deg');
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const progress = document.querySelector('.progress');
const statementBg = document.querySelector('.statement-bg');
let scrollRaf = 0;
function updateScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  if (statementBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const bounds = statementBg.parentElement.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < innerHeight) {
      const offset = ((bounds.top + bounds.height / 2) - innerHeight / 2) * -0.10;
      statementBg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.16)`;
    }
  }
  scrollRaf = 0;
}
addEventListener('scroll', () => { if (!scrollRaf) scrollRaf = requestAnimationFrame(updateScroll); }, { passive: true });
addEventListener('resize', updateScroll);
updateScroll();
document.querySelector('#year').textContent = String(new Date().getFullYear());
