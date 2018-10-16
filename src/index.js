import $ from 'jquery';
import slick from 'slick-carousel';
import magnificPopup from 'magnific-popup';
import Headhesive from 'headhesive';

let header = new Headhesive('.header', {
    offset: 700
});

$(function () {

    const heroSlider = $('.hero__slider');

    if (heroSlider.length) {
        heroSlider.slick({
            arrows: false,
            dots: true,
        });
    }

    const storyBtn = $('.story__btn');
    if (storyBtn.length) {
        storyBtn.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    }

    const testimonials = $('.testimonials__slider-list');

    if (testimonials.length) {
        testimonials.slick({
            arrows: false,
            fade: true,
            asNavFor: '.testimonials__slider-nav-list',
        });
    }

    $('.testimonials__slider-nav-list').slick({
        centerMode: true,
        centerPadding: 60,
        slidesToShow: 5,
        asNavFor: '.testimonials__slider-list',
        prevArrow: $('.testimonials__slider-btn--prev'),
        nextArrow: $('.testimonials__slider-btn--next'),
    });

});
