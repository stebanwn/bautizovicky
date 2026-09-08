const params = new URLSearchParams(window.location.search);

const recipientName = (params.get('name') || 'NOMBRE APELLIDO').trim();
const gender = (params.get('gender') || '').toLowerCase().trim();
const explicitTitle = (params.get('title') || '').toLowerCase().trim();

let greeting = 'Estimado señor/a';
if (explicitTitle) {
  const map = {
    'señor':'Estimado señor', 'senor':'Estimado señor',
    'señora':'Estimada señora', 'senora':'Estimada señora',
    'señorita':'Estimada señorita', 'senorita':'Estimada señorita'
  };
  greeting = map[explicitTitle] || explicitTitle;
} else if (gender === 'hombre' || gender === 'm' || gender === 'masculino') {
  greeting = 'Estimado señor';
} else if (gender === 'mujer' || gender === 'f' || gender === 'femenino') {
  greeting = 'Estimada señora';
}

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
