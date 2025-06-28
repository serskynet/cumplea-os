function crearPetalo() {
  const petalo = document.createElement('div');
  petalo.classList.add('petalo');
  petalo.style.left = Math.random() * 100 + 'vw';
  petalo.style.animationDuration = (Math.random() * 5 + 5) + 's';

  document.body.appendChild(petalo);

  setTimeout(() => petalo.remove(), 8000);
}

setInterval(crearPetalo, 300);


document.getElementById('cambiar-foto').addEventListener('click', function() {
  document.getElementById('foto-broma').src = 'foto_real.jpg'; // Cambia por el nombre de tu foto real
  document.getElementById('mensaje-foto').textContent = '¡Ahora sí, la verdadera foto! 😁';
  this.style.display = 'none';
});

document.getElementById('cambiar-foto').addEventListener('click', function() {
  document.getElementById('foto-broma').src = '1.jpeg'; // Cambia por el nombre de tu foto real
  document.getElementById('mensaje-foto').textContent = '¡Ahora sí, la verdadera foto! 😁';
  this.style.display = 'none';
});
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

document.addEventListener('DOMContentLoaded', () => {
  confettiEffect();

  const cambiarFotoBtn = document.getElementById('cambiar-foto');
  if (cambiarFotoBtn) {
    cambiarFotoBtn.addEventListener('click', () => {
      confettiEffect();
    });
  }
});

function confettiEffect() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const btnMensaje = document.getElementById('ver-mensaje');
  const modalMensaje = document.getElementById('modal-mensaje');
  const cerrarModal = document.getElementById('cerrar-modal');

  const btnGaleria = document.getElementById('ver-galeria');
  const modalGaleria = document.getElementById('galeria-modal');
  const cerrarGaleria = document.getElementById('cerrar-galeria');

  btnMensaje.addEventListener('click', () => modalMensaje.classList.add('active'));
  cerrarModal.addEventListener('click', () => modalMensaje.classList.remove('active'));

  btnGaleria.addEventListener('click', () => modalGaleria.classList.add('active'));
  cerrarGaleria.addEventListener('click', () => modalGaleria.classList.remove('active'));
});
