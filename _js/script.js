document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("lingua-pop-up");
    const btnPt = document.getElementById("pt-br");
    const btnEn = document.getElementById("en-us");
    const btnClose = document.getElementById("close-popup");

    // Exibe o pop-up sempre que o site for acessado
    popup.style.display = "flex";

    // Função para fechar o pop-up
    function closePopup() {
        popup.style.display = "none";
    }

    // Fecha ao clicar nos botões de idioma
    btnPt.addEventListener("click", closePopup);
    btnEn.addEventListener("click", closePopup);

    // Fecha ao clicar no botão X
    btnClose.addEventListener("click", closePopup);

    // Fecha ao pressionar a tecla ESC
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });
});