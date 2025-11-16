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
					spaceBetween: 22,
					slidesPerView: 3,
				},
				'1300': {
					spaceBetween: 15,
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
					spaceBetween: 20,
					slidesPerView: 2,
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

	if ($('.interface__slider_js').length) {
		new Swiper('.interface__slider_js', {
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
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				'1300': {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				'1440': {
					spaceBetween: 22,
					slidesPerView: 3,
				},
			}
		})
	}

	if ($('.interface__slider_js2').length) {
		new Swiper('.interface__slider_js2', {
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
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				'1300': {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				'1440': {
					spaceBetween: 22,
					slidesPerView: 2,
				},
			}
		})
	}

	if ($('.app-info__slider').length) {
		new Swiper('.app-info__slider', {
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
					slidesPerView: 2,
				},
				'1300': {
					spaceBetween: 30,
					slidesPerView: 2,
				}
			}
		})
	}

	if ($('.interface-program__slider').length) {
		new Swiper('.interface-program__slider', {
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
				}
			}
		})
	}

	if ($('.gallery-slider').length) {
		new Swiper('.gallery-slider', {
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
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 22,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				'1300': {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				'1440': {
					spaceBetween: 22,
					slidesPerView: 4,
				},
			}
		})
	}

	// Изменение количества товара
	$('body').on('click', '.amount__btn_minus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')
			input = parent.find('input')
			inputVal = parseFloat(input.val())
			inputText = input.data('text')
			minimum = parseFloat(input.data('minimum'))
			step = parseFloat(input.data('step'));

		if (inputVal > minimum) {
			input.val(inputVal - step)
		}

		if (inputVal-step == minimum) {
			$(this).prop("disabled", true)
		}

		if(inputText){
			input.val(inputVal - step + inputText)
		}
	})

	$('body').on('click', '.amount__btn_plus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')
			input = parent.find('input')
			inputVal = parseFloat(input.val())
			inputText = input.data('text')
			maximum = parseFloat(input.data('maximum'))
			step = parseFloat(input.data('step'))

		if (inputVal < maximum) {
			input.val(inputVal + step)

			parent.find('.amount__btn_minus').prop("disabled", false)
		}

		if(inputText){
			input.val(inputVal + step + inputText)
		}
	})
});


$(window).on('load', () => {
	if ($('.application__slider').length){
		applicationSlider()
	}

	$('.advantages__items .advantages__box').height('auto')
	setTimeout(function(){
		setHeight($('.advantages__items .advantages__box'))
	}, 100)


	let testDriveAnim = gsap.timeline({
		scrollTrigger: {
			trigger: ".test-drive",
			scrub: true,
			start: "top center",
			end: "bottom bottom",
			// pin: true,
			// markers: true,
			onToggle: (self) => {
				// if (self.isActive == true ){
				// 	$('.test-drive__wrap').addClass('_start')
				// 	$('.test-drive__wrap').addClass('_bot')
				// } else {
				// 	$('.test-drive__wrap').removeClass('_start')
				// }
			},
			onUpdate: (self) => {
				// if( self.progress == 1 ){
				// 	let parentTop = $('.test-drive__anim').offset().top;
				// 	let childTop  = $('.test-drive__wrap').offset().top;

				// 	let relativeTop = childTop - parentTop;
				// 	console.log(relativeTop);
				// 	$('.test-drive__wrap').css('transform', 'translateY('+ relativeTop +'px)')
				// } else {
				// 	$('.test-drive__wrap').css('transform', 'translateY(0)')
				// 	console.log('asd');
				// }

				// if( self.progress == 0 ){
				// 	$('.test-drive__wrap').removeClass('_bot')
				// }
			},
		}
	})
	.fromTo('.test-drive__main-form', { y: '100%' }, { duration: 1, y: '0' })
	// .to('.test-drive__anim', { duration: 1, 'margin-bottom': 0 });

	// let testDriveAnim = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".test-drive",
	// 		scrub: true,
	// 		start: "top top",
	// 		end: "top bottom",
	// 		pin: ".test-drive__wrap",
	// 		markers:true,
	// 		onToggle: (self) => {
	// 			$('.test-drive').toggleClass('index', self.isActive);
	// 		},
			// onEnter: () => {
			// 	if ( !$('.line-svg').hasClass('_active') ){
			// 		$('.line-svg').addClass('_active')
			// 		myVivus.play();
			// 	}

			// 	if ( !$('.main-about').hasClass('_start') ){
			// 		$('.main-about').addClass('_start')
			// 	}
			// },
			// onToggle: (self) => {
			// 	$('.main-about').toggleClass('index', self.isActive);
			// },
	// 	}
	// });

	// testDriveAnim
    // .add([
    //   TweenMax.to('.main-about__item1 .main-about__name span', { duration: 1, opacity: 0 }),
    //   TweenMax.to('.main-about__item1 .main-about__img3 img', { duration: 1, opacity: 0, scale: 1.5, x: '60%', filter: 'blur(10px)' }),
    //   TweenMax.to('.main-about__item1 .main-about__img2 img', { duration: 1, opacity: 0, scale: 1.5, y: '40%', filter: 'blur(10px)' }),
    //   TweenMax.to('.main-about__item1 .main-about__img1 img', { duration: 1, opacity: 0, scale: 1.5, y: '-50%', filter: 'blur(10px)' }),
    //   TweenMax.to('.main-about__item1 .main-about__coll', { duration: 1, opacity: 0 })
    // ])
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