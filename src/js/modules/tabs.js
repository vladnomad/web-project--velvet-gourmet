function tabs(tabSelector, tabPanelSelector, tabListSelector, activeClass, tabListBtnSelector, menuOpenClass, tabListIconSelector) {
    
    const tabs = document.querySelectorAll(tabSelector),
          tabPanels = document.querySelectorAll(tabPanelSelector),
          tabList = document.querySelector(tabListSelector),
          tabListBtn = document.querySelector(tabListBtnSelector),
          tabListIcon = document.querySelector(tabListIconSelector);

    function hideTabPanel() {
        tabPanels.forEach(item => {
            item.classList.add("invisible", "fade-out");
            item.classList.remove("flex", "fade-in");
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabPanel(i = 0) {
        tabPanels[i].classList.add("flex", "fade-in");
        tabPanels[i].classList.remove("invisible", "fade-out");
        tabs[i].classList.add(activeClass);
    }

    hideTabPanel();
    showTabPanel();

    tabList.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabSelector.slice(1))) {
            tabs.forEach((item, i) => {
                item.classList.remove(menuOpenClass);
                tabListIcon.classList.remove(menuOpenClass);
                if (target == item) {
                    hideTabPanel();
                    showTabPanel(i);
                }
            });
        }
    });

    tabListBtn.addEventListener("click", () => {
        tabs.forEach(item => {
            if (item.classList.contains(menuOpenClass)) {
                item.classList.remove(menuOpenClass);
                tabListIcon.classList.remove(menuOpenClass);
            } else {
                item.classList.add(menuOpenClass);
                tabListIcon.classList.add(menuOpenClass);
            }
        });
    });
}

export default tabs;