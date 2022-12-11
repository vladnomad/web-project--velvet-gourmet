function slider({slideItem, slideWrapper, leftNav, rightNav, currentCounter, totalCounter, slideContainer}) {
    
    const slide = document.querySelectorAll(slideItem),
          wrapper = document.getElementById(slideWrapper),

          left = document.getElementById(leftNav),
          right = document.getElementById(rightNav),

          current = document.getElementById(currentCounter),
          total = document.getElementById(totalCounter),

          container = document.getElementById(slideContainer),
          width = window.getComputedStyle(container).width;

    let slideIndex = 1,
        offset = 0;

    if (slide.length < 10) {
        total.textContent = `0${slide.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slide.length;
        current.textContent = slideIndex;
    }

    wrapper.style.width = 100 * slide.length + "%";
    
    slide.forEach(item => {
        item.style.width = width;
    });

    function deleteNonDigits(str) {
        return +str.replace(/[^0-9.]/g, "");
    }

    right.addEventListener("click", () => {
        if (offset == (deleteNonDigits(width) * (slide.length - 1))) {
            offset = 0;
        } else {
            offset += deleteNonDigits(width);
        }

        wrapper.style.transform = `translateX(-${offset}px)`

        if (slideIndex == slide.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slide.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    });

    left.addEventListener("click", () => {
        if (offset == 0) {
            offset = deleteNonDigits(width) * (slide.length - 1);
        } else {
            offset -= deleteNonDigits(width);
        }

        wrapper.style.transform = `translateX(-${offset}px)`

        if (slideIndex == 1) {
            slideIndex = slide.length;
        } else {
            slideIndex--;
        }

        if (slide.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    });  
}

export default slider;