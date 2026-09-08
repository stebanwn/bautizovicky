const params = new URLSearchParams(window.location.search);
const pathParts = window.location.pathname.split('/').filter(Boolean);
const repoIndex = pathParts.findIndex(part => part.toLowerCase() === 'bautizovicky');
const pathSlug = repoIndex >= 0 ? (pathParts[repoIndex + 1] || '').toLowerCase().replace(/\/$/, '') : '';
const normalizedPathSlug = decodeURIComponent(pathSlug).trim();
const requestedGuest = (params.get('guest') || normalizedPathSlug).toLowerCase().trim();

function normalize(value) {
  return String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().trim();
}

const guest = (window.GUESTS || []).find(g =>
  normalize(g.slug) === normalize(requestedGuest) ||
  normalize(g.alias) === normalize(requestedGuest)
) || null;

const recipientName = (params.get('name') || guest?.name || 'NOMBRE APELLIDO').trim();
const explicitTitle = (params.get('title') || guest?.title || '').toLowerCase().trim();

const greetingMap = {
  'señor': 'Estimado señor', 'senor': 'Estimado señor',
  'señora': 'Estimada señora', 'senora': 'Estimada señora',
  'señorita': 'Estimada señorita', 'senorita': 'Estimada señorita',
  'señor y señora': 'Estimados señor y señora',
  'familia': 'Familia'
};
const greeting = greetingMap[explicitTitle] || guest?.greeting || 'Estimado señor/a';

document.getElementById('greeting').textContent = greeting;
document.getElementById('recipientName').textContent = recipientName;

const openInvite = document.getElementById('openInvite');
openInvite.addEventListener('click', () => {
  const opening = document.getElementById('opening');
  const page = document.getElementById('page');
  opening.classList.add('opening--closing');
  setTimeout(() => {
    opening.style.display = 'none';
    page.classList.remove('is-hidden');
    page.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 420);
});

const phone = '593959191735';
const defaultMessage = `Hola, confirmo mi asistencia al bautizo de Vicky.\n\nNombre: ${recipientName}\nAcompañado por: `;
const whatsappLink = document.getElementById('whatsappLink');
if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
