window.addEventListener("DOMContentLoaded", () => {

    // --------------------------- Tabs --------------------------- //
    
        let tab = document.querySelectorAll(".tab"),
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
    
        const deadline = "January 1 2023 00:00:00 GMT+0100";
    
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
                modal = document.getElementById("modal");
    
        modalOpen.forEach(btn => {
            btn.addEventListener("click", openModal);
        });
        
        function openModal() {
            modal.classList.remove("hide");
            modal.classList.add("show");
            document.body.style.overflow = "hidden";
        }
    
        function closeModal() {
            modal.classList.remove("show");
            modal.classList.add("hide");
            document.body.style.overflow = "";
        }    
    
        modal.addEventListener("click", (e) => {
            if (e.target === modal || e.target.getAttribute("data-close") == "") {
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
            constructor(num, alt, title, descr, price, parentSelector, ...classes) {
                this.num = num;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.price = price;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
                this.rate = 4.55;
                this.currencyExchange();
            }
    
            currencyExchange() {
                this.price = Math.floor(this.price / this.rate) - 0.01;
            }
    
            render() {
                const element = document.createElement("article");
                element.setAttribute("aria-labelledby", `menu__item--label-${this.num}`);
    
                if (this.classes.length === 0) {
                    this.classes = "menu__item";
                    element.classList.add(this.classes);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
                
                element.innerHTML = `
                    <img src="img/menu/menu__1920--${this.num}.jpg" 
                        alt="${this.alt}"
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
                `;
                this.parent.append(element);
            }
        }
    
        getResource("http://localhost:3000/menu")
            .then(data => {
                data.forEach(({num, alt, title, descr, price}) => {
                    new MenuCard(num, alt, title, descr, price, "#menu__wrapper .container", "menu__item", `num--${num}`)
                    .render();
                });
            });
        
    // -------------------------- Server -------------------------- //
    
        // Forms
    
        const forms = document.querySelectorAll("form");
    
        const message = {
            load: "Please wait, loading...",
            success: "Thank you! We will get in touch soon",
            error: "Something went wrong..."
        };
    
        forms.forEach(item => {
            bindPostData(item);
        });
    
        const postData = async (url, json) => {
            let res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: json
            });
    
            return await res.json();
        };
    
        async function getResource(url) {
            let res = await (fetch(url));
    
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
    
            return await res.json();
        }
    
        function bindPostData(form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
    
                let statusMessage = document.createElement("div");
                statusMessage.classList.add("status");
                statusMessage.textContent = message.load;
                form.append(statusMessage);
    
                const formData = new FormData(form);
    
                const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
                postData("http://localhost:3000/requests", json)
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
            openModal();
    
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
                closeModal();
                document.getElementById("modal__form").classList.toggle("hide");
            }, 3000);
        }
    
    // -------------------------- Slides -------------------------- //
    
        const slide = document.querySelectorAll(".concept__gallery--slide"),
              left = document.getElementById("concept__gallery--btn-left"),
              right = document.getElementById("concept__gallery--btn-right"),
              current = document.getElementById("slide__current"),
              total = document.getElementById("slide__total");
    
        let slideIndex = 1;
    
        showSlide(slideIndex);
    
        if (slide.length < 10) {
            total.textContent = `0${slide.length}`;
        } else {
            total.textContent = slide.length;
        }
    
        function showSlide(n) {
            if (n > slide.length) {
                slideIndex = 1;
            }
    
            if (n < 1) {
                slideIndex = slide.length;
            }
    
            slide.forEach(item => item.hidden = true);
            slide[slideIndex - 1].hidden = false;
    
            if (slide.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
        }
    
        function plusSlide(n) {
            showSlide(slideIndex += n);
        }
    
        left.addEventListener("click", () => {
            plusSlide(-1);
        });
    
        right.addEventListener("click", () => {
            plusSlide(1);
        });
    });