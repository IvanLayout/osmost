// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 320) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=320, user-scalable=no'
}

$(() => {
	
});


$(window).on('load', () => {
	if ($('.application__slider').length){
		applicationSlider()
	}
});


$(window).on('resize', () => {
	
});

function applicationSlider(){
	if ( $(window).width() < 768 && !$('.application__slider').hasClass('swiper-initialized') ) {
		$('.application__slider').addClass('swiper')
		$('.application__items').addClass('swiper-wrapper').removeClass('_flex')
		$('.application__item').addClass('swiper-slide')

		approachSwiper = new Swiper('.application__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 10,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			}
		})
	} else if ($(window).width() > 767 && $('.application__slider').hasClass('swiper-initialized')) {
		approachSwiper.destroy(true, true)

		$('.application__slider').removeClass('swiper')
		$('.application__items').removeClass('swiper-wrapper').addClass('_flex')
		$('.application__item').removeClass('swiper-slide')
	}
}