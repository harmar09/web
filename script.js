function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = element.src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
