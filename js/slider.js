document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slider article");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const pagers = document.querySelectorAll(".pager span");

    let index = 0;
    let timer;

    function updateSlides() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "prev", "next");

            if (i === index) slide.classList.add("active");
            else if (i === (index - 1 + slides.length) % slides.length) slide.classList.add("prev");
            else slide.classList.add("next");
        });

        pagers.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateSlides();
        restartAuto();
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateSlides();
        restartAuto();
    }

    pagers.forEach((pager, i) => {
        pager.addEventListener("click", () => {
            index = i;
            updateSlides();
            restartAuto();
        });
    });

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    function auto() {
        timer = setInterval(nextSlide, 4000);
    }

    function restartAuto() {
        clearInterval(timer);
        auto();
    }

    updateSlides();
    auto();
});