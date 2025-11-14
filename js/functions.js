$(() => {
	// Observer API
	const boxes = document.querySelectorAll('.lazyload, .animate')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-src') && !entry.target.classList.contains('loaded')) {
				entry.target.classList.add('loaded')

				entry.target.src = entry.target.getAttribute('data-src')
			}

			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-srcset') && !entry.target.classList.contains('loaded')) {
				entry.target.srcset = entry.target.getAttribute('data-srcset')

				entry.target.classList.add('loaded')
			}

			if (entry.intersectionRatio >= 0.2 && entry.target.classList.contains('animate') && !entry.target.classList.contains('animated')) {
				entry.target.classList.add('animated')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))
	

	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')

	// Моб. меню
	$('.mob-menu-btn').click((e) => {
		e.preventDefault()

		$('.mob-menu-btn').toggleClass('_active')
		$('body').toggleClass('_lock-add')
		$('.header__wrap').toggleClass('_show')
	})

	$('.close-menu').click((e) => {
		e.preventDefault()

		$('.mob-menu-btn').removeClass('_active')
		$('body').removeClass('_lock-add')
		$('.header__wrap').removeClass('_show')
	})

	// Показать все
	$('body').on('click', '.integ-equipment__all', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')

			$(this).closest('.integ-equipment__manufacturers').find('._hide').removeClass('_show')
		} else {
			$(this).addClass('_active')

			$(this).closest('.integ-equipment__manufacturers').find('._hide').addClass('_show')
		}
	})

	if ( $(window).width() < 1025 ) {
		$('body').on('click', '.header__menu-link_active', function (e) {
			e.preventDefault()

			if ($(this).hasClass('active')){
				$(this).removeClass('active')

				$(this).closest('.header__menu-item').find('.header__sub-menu').slideUp()
			} else {
				$(this).addClass('active')

				$(this).closest('.header__menu-item').find('.header__sub-menu').slideDown()
			}
		})
	}

	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs__button_js', function(e) {
		e.preventDefault()

		if( !$(this).hasClass('_active') ) {
			let parent = $(this).closest('.tabs-container')
			let activeTab = $(this).data('content')
			let activeTitle = $(this).data('content-title')
			let level = $(this).data('level')

			console.log(activeTitle)

			parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
			parent.find('.tab-content.' + level).removeClass('_active')

			if ( parent.hasClass('animated') ) {
				parent.removeClass('animated')

				setTimeout(function(){
					if ( !parent.hasClass('animated') ) {
						parent.addClass('animated')
					}
				},50)
			}

			$(this).addClass('_active')
			$(activeTab).addClass('_active')

			if( $(this).closest('.tabs__item').length ){
				parent.find('.tabs__item').removeClass('_active')
				$(this).closest('.tabs__item').addClass('_active')
			}

			if( activeTitle !== 'undefined' ){
				parent.find('.tabs__data').removeClass('_active')
				$(activeTitle).addClass('_active')
			}
		}
	})

	if( locationHash && $('.tabs-container').length ) {
		let activeTab = $('.tabs__button_js[data-content="'+ locationHash +'"]')
		let parent = activeTab.closest('.tabs-container')
		let level = activeTab.data('level')

		parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
		parent.find('.tab-content.' + level).removeClass('_active')

		activeTab.addClass('_active')
		$(locationHash).addClass('_active')

		$('html, body').stop().animate({
			scrollTop: $(locationHash).offset().top - 120
		}, 1000)
	}


	// Аккордион
	$('body').on('click', '.accordion__title', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.accordion__item')
		let accordion = $(this).closest('.accordion')

		if( parent.hasClass('_active') ) {
			parent.removeClass('_active')
			parent.find('.accordion__data').slideUp(300)
		} else {
			accordion.find('.accordion__item').removeClass('_active')
			accordion.find('.accordion__data').slideUp(300)

			parent.addClass('_active')
			parent.find('.accordion__data').slideDown(300)
		}
	})


	// Маска ввода
	$('input[type=tel]').each(function(){
		let datamask = $(this).data('mask');

		$(this).inputmask(`${datamask}`, {
			showMaskOnHover: false
		})
	})



	// Fancybox
	Fancybox.getDefaults().dragToClose = false;
	Fancybox.getDefaults().placeFocusBack = false;

	// Всплывающие окна
	$('body').on('click', '.modal-btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}],
		{
			on: {
				init: (fancyboxRef) => {
					if ($('.modal-product__slider').length) {
						new Swiper('.modal-product__slider:not(.swiper-initialized)', {
							loop: false,
							watchSlidesProgress: true,
							watchOverflow: true,
							spaceBetween: 0,
							slidesPerView: 1,
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
						})
					}

					if ( $(this).attr('data-modal-top') ) {
						$('body').addClass('_top-modal')
					}
				},
				destroy: (fancyboxRef) => {
					if ( $(this).attr('data-modal-top') ) {
						$('body').removeClass('_top-modal')
					}
				},
			},
		})
	})


	// Отправка форм
	$('body').on('submit', '.form.ajax-submit', function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src  : '#modal-cod',
			type : 'inline',
			opts : {
				touch : false,
				speed : 300,
				backFocus : false,
				trapFocus : false,
				autoFocus : false,
				mobile : {
					clickSlide: "close"
				}
			}
		}])
	})


	// Увеличение картинки
	Fancybox.bind('.fancy-img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})
})


$(window).on('load', () => {
	
})

document.addEventListener('DOMContentLoaded', () =>{
	document.querySelectorAll('.modal-small-btn').forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
		
			const modal = item.getAttribute('data-content');

			document.querySelector(modal).classList.add('_show');
			document.querySelector('body').classList.add('_lock-modal');
		});
	});

	document.querySelectorAll('.modal-block__close').forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();

			item.closest('.modal-wrap').classList.remove('_show')
	
			document.querySelector('body').classList.remove('_lock-modal')
		});
	});

	document.querySelectorAll('.modal-wrap').forEach(item => {
		item.addEventListener('click', (e) => {
			if ( $(e.target).closest('.modal-block').length == 0 ) {
				item.classList.remove('_show')
	
				document.querySelector('body').classList.remove('_lock-modal')
			}
		});
	});

	document.querySelectorAll('.modal-wrap').forEach(item => {
		item.addEventListener('click', (e) => {
			if ( e.target === item || e.target === item.querySelector('.modal-wrap__scroll') ) {
				item.classList.remove('_show')
				document.querySelector('body').classList.remove('_lock-modal')
			}
		});
	});
});


// Вспомогательные функции
const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}

function setHeight(className){
    let maxheight = 0

    className.each(function() {
		let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
			maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}

const is_touch_device = () => !!('ontouchstart' in window)