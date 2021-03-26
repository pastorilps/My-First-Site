function showModal(li) {
    const imageSrc = li.children[0].src;
    const modal = document.querySelector(".modal");
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
    const modalImage = document.querySelector(".modal__banner");
    modalImage.src = imageSrc;
}

function closeModal() {
    const modal = document.querySelector(".modal");
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
    const modalImage = document.querySelector(".modal__banner");
    modalImage.src = "";
}