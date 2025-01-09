"use strict"; // Define o modo estrito para evitar erros comuns.

// Selecionar os elementos

const openModabtn1 = document.getElementById("openModalBtn1");
const openModabtn2 = document.getElementById("openModalBtn2");
const modal = document.getElementById("myModal");
const modalText = document.getElementById("modalText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const overlay = document.getElementById("overlay");
const content = document.getElementById("content");

function showModal(textToShow) {
  console.log("botao clicado");
  modal.style.display = "block";
  overlay.style.display = "block";
  content.style.filter = "blur(2px)";
  modalText.innerText = textToShow;
}

// Evento de clique para abrir o botão
openModabtn1.addEventListener("click", function () {
  showModal("Este é o modal 1.\n Pressione Sim ou não");
});

// Evento de clique para abrir o botão
openModabtn2.addEventListener("click", function () {
  showModal("Este é o modal 2.\n Pressione Sim ou não");
});

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  content.style.filter = "blur(0px)";
}

// Evento do botão fechar
closeBtn.addEventListener("click", function () {
  console.log("botao fechar clicado");
  closeModal();
});

// Evento do click do Sim
yesBtn.addEventListener("click", function () {
  console.log("botão sim foi pressionado");

  closeModal();
});

// Evento do click do Não
noBtn.addEventListener("click", function () {
  console.log("botão Não foi pressionado");
  closeModal();
});

// Função para pegar tecla pressionada
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    console.log("esc pressionado");
    closeModal();
  }
});
