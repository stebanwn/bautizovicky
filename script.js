const params = new URLSearchParams(window.location.search);

const recipientName = (params.get('name') || 'NOMBRE APELLIDO').trim();
const explicitTitle = (params.get('title') || '').toLowerCase().trim();
const extra = (params.get('extra') || '').trim();

const map = {
  'señor': 'Estimado Señor',
  'senor': 'Estimado Señor',
  'señora': 'Estimada Señora',
  'senora': 'Estimada Señora',
  'señorita': 'Estimada Señorita',
  'senorita': 'Estimada Señorita'
};

const isFamily = explicitTitle === 'familia';
const greeting = isFamily ? 'Estimado' : (map[explicitTitle] || 'Estimado Señor');

document.getElementById('greeting').textContent = greeting;
document.getElementById('recipientName').textContent = recipientName;
const familySuffix = document.getElementById('familySuffix');
let suffixText = '';
if (isFamily) {
  suffixText = 'y Familia';
} else if (extra) {
  suffixText = extra;
}
familySuffix.textContent = suffixText;
familySuffix.hidden = !suffixText;

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
