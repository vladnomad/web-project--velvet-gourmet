window.addEventListener("DOMContentLoaded", () => {

// --------------------------- Tabs --------------------------- //

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

// -------------------------- Timer -------------------------- //

    const deadline = "December 1 2022 00:00:00 GMT+0100";

    function getTimeRemaining(time) {
        let days, hours, minutes, seconds;
        const t = Date.parse(time) - Date.parse(new Date());
        
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor( (t/(1000*60*60*24)) ),
            hours = Math.floor( (t/(1000*60*60) % 24) ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            seconds = Math.floor( (t/1000) % 60 );
        }
        
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

        updateTimer();

        function updateTimer() {
            const t = getTimeRemaining(time);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setTimer("timer__wrapper", deadline);

// -------------------------- Modal -------------------------- //

    const modalOpen = document.querySelectorAll("[data-modal]"),
          modal = document.getElementById("modal"),
          modalClose = document.querySelector("[data-close]");

    function openModal() {
        modal.classList.toggle("hide");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.toggle("hide");
        document.body.style.overflow = "";
    }

    modalOpen.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    modalClose.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && !modal.classList.contains("hide")) {
            closeModal();
        }
    });

// -------------------------- Cards -------------------------- //

    class MenuCard {
        constructor(num, alt, title, descr, price, parentSelector) {
            this.num = num;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.rate = 4.55;
            this.currencyExchange();
        }

        currencyExchange() {
            this.price = Math.floor(this.price / this.rate) - 0.01;
        }

        render() {
            const element = document.createElement("div");
            element.innerHTML = `
                <article aria-labelledby="menu__item--label-${this.num}" 
                        class="menu__item"
                        id="menu__item--${this.num}">
                    <img src="img/menu/menu__1920--${this.num}.jpg" 
                        alt=${this.alt} 
                        srcset="img/menu/menu__428--${this.num}.jpg 338w, 
                                img/menu/menu__810--${this.num}.jpg 427w, 
                                img/menu/menu__1366--${this.num}.jpg 350w, 
                                img/menu/menu__1920--${this.num}.jpg 420w, 
                                img/menu/menu__2040--${this.num}.jpg 520w, 
                                img/menu/menu__2550--${this.num}.jpg 620w, 
                                img/menu/menu__3800--${this.num}.jpg 720w"
                        sizes="(max-width: 429px) 338px, 
                                (max-width: 811px) 427px, 
                                (max-width: 1367px) 350px, 
                                (max-width: 1921px) 420px, 
                                (max-width: 2041px) 520px, 
                                (max-width: 2551px) 620px, 
                                720px" />
                    <div class="bg__shadow absolute"></div>
                    <h3 id="menu__item--label-${this.num}">
                        ${this.title}&nbsp;&nbsp;menu
                    </h3>
                    <p class="menu__item--text">
                        ${this.descr}
                    </p>
                    <hr>
                    <div class="menu__item--price flex justify-between align-center">
                        <p>
                            Price:
                        </p>
                        <div class="menu__item--price-total">
                            <span>${this.price}</span>
                                USD/day
                        </div>
                    </div>
                </article>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "1",
        "Assorted delicious cheese and nuts, bruschette with yogurt, pesto and bresaola, and a plate of spaghetti on the marble table",
        "FITNESS",
        "The Fitness menu is a new approach to cooking - more fresh vegetables and fruits. For people who are into sports, being active and healthy. This is a completely new product, providing high quality food for a good price!",
        80,
        "#menu__wrapper .container"
    ).render();

    new MenuCard(
        "2",
        "Assorted delicious grilled seafood, meat and fruits, served with multiple sauces and a bottle of wine on the wooden table",
        "PREMIUM",
        "In the premium menu, we use not only beautiful packaging design, but also 'haute cuisine' cooking techniques and ingredients. Red fish, seafood, fruits - a dinner at the restaurant without going out!",
        105,
        "#menu__wrapper .container"
    ).render();

    new MenuCard(
        "3",
        "Indonesian vegan plate of vegetables cut in small pieces with quinoa and komosa served with sauce",
        "VEGAN",
        "Our special Vegan menu has a thorough selection of ingredients - a plant-based diet avoiding all animal foods such as meat, dairy, eggs and honey. Complete harmony with oneself and nature in every element!",
        90,
        "#menu__wrapper .container"
    ).render();
});