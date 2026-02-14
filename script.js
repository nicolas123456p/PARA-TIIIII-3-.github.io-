const contenedor = document.querySelector(".corazones");

function crearCorazon() {
  const corazon = document.createElement("span");
  corazon.innerHTML = "❤";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = (Math.random() * 20 + 10) + "px";
  corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";

  contenedor.appendChild(corazon);

  setTimeout(() => corazon.remove(), 6000);
}

setInterval(crearCorazon, 300);

function abrirCarta() {
  document.querySelector(".sobre").classList.toggle("abierto");
}

function mostrarSorpresa() {
  document.getElementById("mensajeSorpresa").style.display = "block";
}
