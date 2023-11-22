import _      from "lodash";
import tabs   from "./modules/tabs";
import timer  from "./modules/timer";
import modal  from "./modules/modal";
import cards  from "./modules/cards";
import server from "./modules/server";
import slider from "./modules/slider";
import calc   from "./modules/calc";

window.addEventListener("DOMContentLoaded", () => {
    const currentDate = new Date();
    const nextMonth = new Date(currentDate);
    const nextMonthSpan = document.querySelector(".next-month");
    
    nextMonthSpan.innerHTML = "1st of " + nextMonth.toLocaleDateString("en-US", { month: "long" })
    nextMonth.setMonth(currentDate.getMonth() + 1);
    nextMonth.setDate(1);

    const lastDayOfCurrentMonth = new Date(nextMonth);

    lastDayOfCurrentMonth.setDate(nextMonth.getDate() - 1);
    lastDayOfCurrentMonth.setHours(0, 0, 0, 0);

    const deadline = lastDayOfCurrentMonth.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) + " " + lastDayOfCurrentMonth.toTimeString().split(" ")[0] + " GMT+0100";

    tabs(".tab", ".tabpanel", ".tablist", "js-active", ".tablist__btn", "has-menu-open", ".tablist__icon");
    timer("timer__wrapper", deadline);
    modal("[data-modal]", "modal");
    cards();
    server("form");
    slider({
        slideItem: ".concept__gallery--slide",
        slideWrapper: "concept__gallery--wrapper",
        leftNav: "concept__gallery--btn-left",
        rightNav: "concept__gallery--btn-right",
        currentCounter: "slide__current",
        totalCounter: "slide__total",
        slideContainer: "concept__gallery--slider"
    });
    calc();
});