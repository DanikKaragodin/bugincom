
const swiper = new Swiper('.sample-slider', {
    loop: true,
    speed: 1000,
    slidesPerView: getSlidesPerView(1), // Initialize slidesPerView based on screen width
    autoplay: {
        delay: 1500,
        pauseOnMouseEnter: true, // stop autoplay when hovering
        disableOnInteraction: false, // restart autoplay when hover is removed
        reverseDirection: false, // reverse the autoplay direction
    }
});
function getSlidesPerView(ratio) {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 767) {
        return Math.floor(1 * ratio);
    } else if (screenWidth >= 768 && screenWidth <= 1199) {
        return Math.floor(2 * ratio);
    } else {
        return Math.floor(3 * ratio);
    }
};
swiper.on('resize', function () {
    swiper.params.slidesPerView = getSlidesPerView(1);
    swiper.updateSlides(); // Update the swiper instance on resize

});
const advertSwiper = new Swiper('.advert-slider', {
    loop: true,
    speed: 1000,
    slidesPerView: getSlidesPerView(1),
    autoplay: {
        delay: 0,
        disableOnInteraction: false, // restart autoplay when hover is removed
        reverseDirection: false, // reverse the autoplay direction
    }
});
advertSwiper.on('resize', function () {
    advertSwiper.params.slidesPerView = getSlidesPerView(1);
    advertSwiper.updateSlides(); // Update the swiper instance on resize

});
window.onresize = () =>function(){
    AOS.refresh();
}