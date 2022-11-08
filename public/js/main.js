window.addEventListener("DOMContentLoaded", () => {

// Tabs

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

// Timer

    const deadline = "2022-12-01";

    function getTimeRemaining(time) {
        const t = Date.parse(time) - new Date(),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        
        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num 
        }
    }

    function setTimer(selector, time) {
        const timer = document.getElementById(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateTimer, 1000);

        updateClock();

        function updateTimer() {
            const t = getTimeRemaining(time);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours - 1);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setTimer("timer__wrapper", deadline);
});