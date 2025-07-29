document.addEventListener("DOMContentLoaded", () => {
  const stickerTemplate = document.getElementById("sticker-mapa");
  const stickerData = JSON.parse(stickerTemplate.innerHTML);
  const ramosStickers = stickerData.ramos || {};
  
  // Buscar todos los nodos que contengan los nombres de los ramos y agregar los stickers correspondientes
  for (const [ramo, rutaSticker] of Object.entries(ramosStickers)) {
    const elementos = [...document.querySelectorAll("*")].filter(el => el.textContent.includes(ramo));
    if (elementos.length > 0) {
      const elemento = elementos[0];
      const img = document.createElement("img");
      img.src = rutaSticker;
      img.classList.add("sticker");
      if (ramo.includes("Historia Social")) img.classList.add("sticker-historia");
      if (ramo.includes("Epistemología")) img.classList.add("sticker-epistemologia");
      elemento.style.position = "relative";
      elemento.appendChild(img);
    }
  }

  // Modal para bloqueo de ramos (ejemplo básico, puedes personalizar)
  const modal = document.getElementById("modal");
  const modalMensaje = document.getElementById("modalMensaje");
  const closeModal = document.getElementById("closeModal");

  closeModal.onclick = () => (modal.style.display = "none");
  window.onclick = event => {
    if (event.target === modal) modal.style.display = "none";
  };
});
