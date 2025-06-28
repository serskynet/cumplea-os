window.addEventListener('DOMContentLoaded', () => {
  // Música
  const audio = document.getElementById("musica");
  audio.volume = 0.8;

  const playButton = document.getElementById("play-music");
  if (playButton) {
    playButton.addEventListener('click', () => {
      audio.play();
      playButton.style.display = 'none';
    });
  }

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // En móviles: requiere interacción del usuario
      document.body.addEventListener('touchstart', () => {
        audio.play();
      }, { once: true });
    });
  }

  // Efecto 3D en galería usando movimiento del dispositivo o mouse
  const fotos = document.querySelectorAll('.galeria img');

  // Para móviles: movimiento del dispositivo
  window.addEventListener('deviceorientation', (e) => {
    const tiltX = e.gamma || 0;
    const tiltY = e.beta || 0;
    fotos.forEach(img => {
      img.style.transform = `rotateY(${tiltX / 8}deg) rotateX(${-tiltY / 12}deg) scale(1.05)`;
    });
  });

  // Para PC: movimiento del mouse
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    fotos.forEach(img => {
      img.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
    });
  });

  // Restablecer al salir del área
  const galeria = document.querySelector('.galeria');
  if (galeria) {
    galeria.addEventListener('mouseleave', () => {
      fotos.forEach(img => {
        img.style.transform = '';
      });
    });
  }
});