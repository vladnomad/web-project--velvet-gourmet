window.addEventListener("DOMContentLoaded", () => {
    const tab = document.querySelectorAll(".tab"),
          tabPanel = document.querySelectorAll(".tabpanel"),
          tabList = document.querySelector(".tablist");

    function hideTabPanel() {
        tabPanel.forEach(item => {
            item.classList.add("invisible", "fade-out");
            item.classList.remove("flex", "fade-in");
        });
        tab.forEach(item => {
            item.classList.remove("js-active");
        });
    }

    function showTabPanel(i = 0) {
        tabPanel[i].classList.add("flex", "fade-in");
        tabPanel[i].classList.remove("invisible", "fade-out");
        tab[i].classList.add("js-active");
    }

    hideTabPanel();
    showTabPanel();

    tabList.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("tab")) {
            tab.forEach((item, i) => {
                if (target == item) {
                    hideTabPanel();
                    showTabPanel(i);
                }
            });
        }
    });
});