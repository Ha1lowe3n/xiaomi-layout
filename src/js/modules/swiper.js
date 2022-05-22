export const swiper = () => {
    new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        direction: "vertical",
        autoHeight: true,
        simulateTouch: true,
        grabCursor: true,
        speed: 1200,
        loop: true,
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
    });
};
