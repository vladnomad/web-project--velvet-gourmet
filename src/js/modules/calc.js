function calc() {
    
    const range = document.getElementById("input__activity"),
          datalist = document.getElementById("activity__datalist");
    
    datalist.options[2].classList.remove("hide");
    datalist.options[2].classList.add("show");

    range.addEventListener("input", function () {
        datalist.querySelectorAll('option').forEach(option => {
            option.classList.remove("show");
            option.classList.add("hide");
        });
        range.removeAttribute("class");

        if (range.value === datalist.options[0].value) {
            datalist.options[0].classList.remove("hide");
            datalist.options[0].classList.add("show");
            range.classList.add("option--0");
        } else if (range.value === datalist.options[1].value) {
            datalist.options[1].classList.remove("hide");
            datalist.options[1].classList.add("show");
            range.classList.add("option--1");
        } else if (range.value === datalist.options[3].value) {
            datalist.options[3].classList.remove("hide");
            datalist.options[3].classList.add("show");
            range.classList.add("option--3");
        } else if (range.value === datalist.options[4].value) {
            datalist.options[4].classList.remove("hide");
            datalist.options[4].classList.add("show");
            range.classList.add("option--4");
        } else {
            datalist.options[2].classList.remove("hide");
            datalist.options[2].classList.add("show");
        } 
    }, false);

    const result = document.querySelector(".calc__result span");

    let sex, height, weight, age, activity;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    }

    if (localStorage.getItem("activity")) {
        activity = localStorage.getItem("activity");
    } else {
        activity = 1.55;
        localStorage.setItem("activity", 1.55);
    }

    function initLocalStorage(selector) {
        const inputSex = document.querySelectorAll(selector),
              localActivity = JSON.parse(localStorage.getItem('activity')),
              inputHeight = document.getElementById("input__height"),
              inputWeight = document.getElementById("input__weight"),
              inputAge = document.getElementById("input__age");

        inputSex.forEach(input => {
            input.checked = false;
            if (input.getAttribute("id") === localStorage.getItem("sex")) {
                input.checked = true;
            }
        });

        datalist.querySelectorAll('option').forEach(option => {
            option.classList.remove("show");
            option.classList.add("hide");
        });
        range.removeAttribute("class");

        if (localStorage.getItem("activity") >= 1.2) {
            range.value = localActivity;
            switch (localActivity) {
                case 1.2:
                    datalist.options[0].classList.remove("hide");
                    datalist.options[0].classList.add("show");
                    range.classList.add("option--0");
                    break;
                case 1.375:
                    datalist.options[1].classList.remove("hide");
                    datalist.options[1].classList.add("show");
                    range.classList.add("option--1");
                    break;
                case 1.55:
                    datalist.options[2].classList.remove("hide");
                    datalist.options[2].classList.add("show");
                    range.classList.add("option--2");
                    break;
                case 1.725:
                    datalist.options[3].classList.remove("hide");
                    datalist.options[3].classList.add("show");
                    range.classList.add("option--3");
                    break;
                case 1.9:
                    datalist.options[4].classList.remove("hide");
                    datalist.options[4].classList.add("show");
                    range.classList.add("option--4");
                    break;
            }
        }

        if (localStorage.getItem("input__height")) {
            height = localStorage.getItem("input__height");
            inputHeight.value = localStorage.getItem("input__height");
            inputHeight.textContent = inputHeight.value;
        }
        
        if (localStorage.getItem("input__weight")) {
            weight = localStorage.getItem("input__weight");
            inputWeight.value = localStorage.getItem("input__weight");
            inputWeight.textContent = inputWeight.value;
        }

        if (localStorage.getItem("input__age")) {
            age = localStorage.getItem("input__age");
            inputAge.value = localStorage.getItem("input__age");
            inputAge.textContent = inputAge.value;
        }

        calcTotal();
    }

    initLocalStorage("[name='input__calc--sex']");

    function calcTotal() {
        if (!sex || !height || !weight || !age || !activity ||
            age < 1 || weight < 2.5 || height < 46 ||
            age > 122 || weight > 442 || height > 272) {
            result.textContent = "----";
            return;
        }

        if (sex === "input__female") {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity);
        }
    }

    calcTotal();

    function getStaticData(parentSelector) {
        document.getElementById(parentSelector).addEventListener("change", (e) => {
            if (e.target.checked) {
                sex = e.target.getAttribute("id");
                localStorage.setItem("sex", e.target.getAttribute("id"));
            } else {
                activity = +e.target.value;
                localStorage.setItem("activity", +e.target.value);
            }

            calcTotal();
        });

    }

    getStaticData("calc__small");
    getStaticData("calc__medium");

    function getDynamicData(selector) {
        const input = document.getElementById(selector);

        input.addEventListener("input", () => {
            if (input.value.match(/\D/g)) {
                input.classList.add("js-active");
            } else {
                input.classList.remove("js-active");
            }

            switch (input.getAttribute("id")) {
                case "input__height":
                    height = +input.value;
                    localStorage.setItem(selector, +input.value);
                    break;
                case "input__weight":
                    weight = +input.value;
                    localStorage.setItem(selector, +input.value);
                    break;
                case "input__age":
                    age = +input.value;
                    localStorage.setItem(selector, +input.value);
                    break;
            }

            calcTotal();
        });
    }

    getDynamicData("input__height");
    getDynamicData("input__weight");
    getDynamicData("input__age");
}

export default calc;