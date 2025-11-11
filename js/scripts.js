// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

$(() => {
	if ($('.integ-equipment__slider').length) {
		new Swiper('.integ-equipment__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 20,
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
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 15,
					slidesPerView: 3,
				},
				'1300': {
					spaceBetween: 30,
					slidesPerView: 3,
				},
				'1440': {
					spaceBetween: 46,
					slidesPerView: 3,
				},
			}
		})
	}

	if ($('.sale-conditions__slider').length) {
		new Swiper('.sale-conditions__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 15,
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
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 15,
					slidesPerView: 3,
				},
				'1300': {
					spaceBetween: 25,
					slidesPerView: 3,
				},
				'1440': {
					spaceBetween: 25,
					slidesPerView: 3,
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ($('.articles__slider').length) {
		new Swiper('.articles__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 15,
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
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 15,
					slidesPerView: 3,
				},
				'1300': {
					spaceBetween: 22,
					slidesPerView: 4,
				},
				'1440': {
					spaceBetween: 22,
					slidesPerView: 4,
				},
			}
		})
	}

	if ($('.history__slider').length) {
		new Swiper('.history__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 15,
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
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 15,
					slidesPerView: 3,
				},
				'1300': {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				'1440': {
					spaceBetween: 20,
					slidesPerView: 2,
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}
});


$(window).on('load', () => {
	if ($('.application__slider').length){
		applicationSlider()
	}

	$('.advantages__items .advantages__box').height('auto')
	setTimeout(function(){
		setHeight($('.advantages__items .advantages__box'))
	}, 100)
});


$(window).on('resize', () => {
	if ($('.application__slider').length){
		applicationSlider()
	}

	// if ($('.sale-conditions__slider').length){
	// 	saleconditionsSlider()
	// }

	$('.advantages__items .advantages__box').height('auto')
	setTimeout(function(){
		setHeight($('.advantages__items .advantages__box'))
	}, 100)
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
		if ($('.application__slider').length === 1 && $('.application__slider').hasClass('swiper-initialized')) {
			approachSwiper.destroy(true, true)
		} else if ($('.application__slider').length >= 2 && $('.application__slider').hasClass('swiper-initialized')) {
			approachSwiper.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.application__slider').removeClass('swiper')
		$('.application__items').removeClass('swiper-wrapper').addClass('_flex')
		$('.application__item').removeClass('swiper-slide')
	}
}

// function saleconditionsSlider(){
// 	if ( $(window).width() < 480 && !$('.sale-conditions__slider').hasClass('swiper-initialized') ) {
// 		$('.sale-conditions__slider').removeClass('swiper')
// 		$('.sale-conditions__items').removeClass('swiper-wrapper')
// 		$('.sale-conditions__item').removeClass('swiper-slide')

// 		saleconditionsSwiper = new Swiper('.sale-conditions__slider', {
// 			loop: false,
// 			watchSlidesProgress: true,
// 			watchOverflow: true,
// 			spaceBetween: 10,
// 			slidesPerView: 'auto',
// 			preloadImages: false,
// 			lazy: {
// 				loadPrevNext: true,
// 				elementClass: 'lazyload',
// 				enabled: true,
// 				loadedClass: 'loaded',
// 				checkInView: true,
// 				loadOnTransitionStart: true
// 			},
// 			navigation: {
// 				nextEl: '.slider-button-next',
// 				prevEl: '.slider-button-prev'
// 			}
// 		})
// 	} else if ($(window).width() > 479 && $('.sale-conditions__slider').hasClass('swiper-initialized')) {
// 		if ($('.sale-conditions__slider').length === 1 && $('.sale-conditions__slider').hasClass('swiper-initialized')) {
// 			saleconditionsSwiper.destroy(true, true)
// 		} else if ($('.sale-conditions__slider').length >= 2 && $('.sale-conditions__slider').hasClass('swiper-initialized')) {
// 			saleconditionsSwiper.forEach(function (element) {
// 				element.destroy(true, true)
// 			})
// 		}

// 		$('.sale-conditions__slider').addClass('swiper')
// 		$('.sale-conditions__items').addClass('swiper-wrapper')
// 		$('.sale-conditions__item').addClass('swiper-slide')
// 	}
// }