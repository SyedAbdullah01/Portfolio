const root = document.documentElement;
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const themeToggle = document.querySelector('.theme-toggle');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('#site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('nav-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const savedTheme = localStorage.getItem('abdullah-theme');
if (savedTheme === 'light') root.classList.add('light');
updateThemeIcon();

themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('abdullah-theme', root.classList.contains('light') ? 'light' : 'dark');
  updateThemeIcon();
});

function updateThemeIcon() {
  if (!themeToggle) return;
  const light = root.classList.contains('light');
  themeToggle.textContent = light ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
}

document.getElementById('year').textContent = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.scrollTo?.({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '#top');
};

document.getElementById('brand-home')?.addEventListener('click', event => {
  event.preventDefault();
  scrollToTop();
});

document.getElementById('back-to-top')?.addEventListener('click', event => {
  event.preventDefault();
  scrollToTop();
});

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
