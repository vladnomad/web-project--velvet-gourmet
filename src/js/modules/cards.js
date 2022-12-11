import {getResource} from "../services/services";

function cards() {
    
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
}

export default cards;