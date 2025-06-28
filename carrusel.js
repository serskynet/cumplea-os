document.addEventListener("DOMContentLoaded", () => {
  const fotos = [
    "foto_mejorada1.jpg",
    "foto_mejorada2.jpg",
    "foto_mejorada3.jpg",
    "foto_mejorada4.jpg"
  ];
  let indice = 0;
  const img = document.getElementById("foto-carrusel");

  setInterval(() => {
    indice = (indice + 1) % fotos.length;
    img.classList.add("fade-out");
    setTimeout(() => {
      img.src = fotos[indice];
      img.classList.remove("fade-out");
    }, 500);
  }, 4000);
});
