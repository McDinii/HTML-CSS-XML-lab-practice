if(document.querySelector('.main-slider_slider')){
    new Swiper('.main-slider_slider',{
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 3,
        pagination: {
            el: '.controls-slider-main_dotts',
            clickable: true
        }        
    });
}


  