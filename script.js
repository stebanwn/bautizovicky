const params = new URLSearchParams(window.location.search);

const recipientName = (params.get('name') || 'NOMBRE APELLIDO').trim();
const explicitTitle = (params.get('title') || '').toLowerCase().trim();

const map = {
  'señor': 'Estimado Señor', 'senor': 'Estimado Señor',
  'señora': 'Estimada Señora', 'senora': 'Estimada Señora',
  'señorita': 'Estimada Señorita', 'senorita': 'Estimada Señorita',
  'familia': `Estimado ${recipientName} y Familia`,
  'señor y señora': 'Estimados Señor y Señorita',
  'senor y senora': 'Estimados Señor y Señorita'
};

const greeting = map[explicitTitle] || 'Estimado señor/a';

document.getElementById('greeting').textContent = greeting;
document.getElementById('recipientName').textContent = recipientName;

document.getElementById('openInvite').addEventListener('click', () => {
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
document.getElementById('whatsappLink').href = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
