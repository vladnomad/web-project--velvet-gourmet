function openModal(modalSelector) {
    
    const modal = document.getElementById(modalSelector);

    modal.classList.remove("hide");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeModal(modalSelector) {
    const modal = document.getElementById(modalSelector);

    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "";
}    

function modal(triggerSelector, modalSelector) {
    const modalOpen = document.querySelectorAll(triggerSelector),
          modal = document.getElementById(modalSelector);

    modalOpen.forEach(btn => {
        btn.addEventListener("click", () => openModal(modalSelector));
    });
    
    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute("data-close") == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && !modal.classList.contains("hide")) {
            closeModal(modalSelector);
        }
    });
}

export default modal;
export {openModal, closeModal};