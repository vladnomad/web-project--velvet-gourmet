import _      from "lodash";
import tabs   from "./modules/tabs";
import timer  from "./modules/timer";
import modal  from "./modules/modal";
import cards  from "./modules/cards";
import server from "./modules/server";
import slider from "./modules/slider";
import calc   from "./modules/calc";

window.addEventListener("DOMContentLoaded", () => {
    tabs(".tab", ".tabpanel", ".tablist", "js-active");
    timer("timer__wrapper", "August 26 2023 00:00:00 GMT+0100");
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