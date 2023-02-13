import {openModal, closeModal} from "./modal";
import {postData} from "../services/services";

function server(formSelector) {

    // Forms
    
    const forms = document.querySelectorAll(formSelector);

    const message = {
        load: "Please wait, loading...",
        success: "Thank you! We will get in touch soon",
        error: "Something went wrong..."
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            statusMessage.textContent = message.load;
            form.append(statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData("./requests", json)
            .then(data => {
                console.log(data);
                showStatusModal(message.success);
                statusMessage.remove();
            })
            .catch(() => {
                showStatusModal(message.error);
            })
            .finally(() => {
                form.reset();
            })
        });
    }

    // Status Message

    function showStatusModal(message) {
        const prevModal = document.querySelector(".modal__container");

        prevModal.classList.add("hide");
        openModal("modal");

        const statusModal = document.createElement("div");
        statusModal.classList.add("modal__container");
        statusModal.innerHTML = `
            <div class="modal__wrapper glass relative">
                <div class="modal__close align-y absolute c-pointer" data-close>&#x2715;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.getElementById("modal__form").classList.toggle("hide");
        document.querySelector("#modal").append(statusModal);
        setTimeout(() => {
            statusModal.remove();
            prevModal.classList.remove("hide");
            prevModal.classList.add("show");
            closeModal("modal");
            document.getElementById("modal__form").classList.toggle("hide");
        }, 3000);
    }
}

export default server;