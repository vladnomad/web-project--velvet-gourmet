function tabs(tabSelector, tabPanelSelector, tabListSelector, activeClass) {
    
    let tab = document.querySelectorAll(tabSelector),
        tabPanel = document.querySelectorAll(tabPanelSelector),
        tabList = document.querySelector(tabListSelector);

    function hideTabPanel() {
        tabPanel.forEach(item => {
            item.classList.add("invisible", "fade-out");
            item.classList.remove("flex", "fade-in");
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabPanel(i = 0) {
        tabPanel[i].classList.add("flex", "fade-in");
        tabPanel[i].classList.remove("invisible", "fade-out");
        tab[i].classList.add(activeClass);
    }

    hideTabPanel();
    showTabPanel();

    tabList.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabSelector.slice(1))) {
            tab.forEach((item, i) => {
                if (target == item) {
                    hideTabPanel();
                    showTabPanel(i);
                }
            });
        }
    });
}

export default tabs;