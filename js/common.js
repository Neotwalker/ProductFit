'use strict';
$(document).ready(function () {
	$('.advantages-block').click(function (event) {
		$('.block').removeClass('block-active');
		var num = $(this).attr('data-class');
		$('#block' + num).addClass('block-active');
	});
	$(".advantages-block").on("click", function () {
		$(".advantages-block").removeClass("active");
		$(this).addClass("active");
	});
	
	if ($(window).innerWidth() <= 560) {
    $('#sync1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '#sync2',
      prevArrow: '<i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i>',
			nextArrow: '<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>',
    });
    $('#sync2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '#sync1',
      dots: false,
      arrows: false,
    });
  }
	var companies = $('.header-companies-slider');
	companies.owlCarousel({
		nav: true,
		dots: false,
		responsiveClass: true,
    loop: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1440: {
				items: 5
			}
		},
		navText: ['<i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i>',
			'<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>'],
	});
	if ($(window).innerWidth() <= 1441) {
		$('.advantages-slider').owlCarousel({
			nav: true,
			dots: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				560: {
					items: 2
				},
				768: {
					items: 3
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				},
        1300: {
          items: 5,
          nav: false,
          navText: ['', ''],
        }
			},
			navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
				'<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'],
		});
		$('.projects-list').owlCarousel({
			nav: true,
			dots: false,
      loop: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				580: {
					items: 2
				},
				1024: {
					items: 3
				},
				1440: {
					items: 4
				}
			},
			navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
				'<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'],
		});
		var services = $(".services-list");
		services.owlCarousel({
			dots: false,
			nav: true,
      loop: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 3
				}
			},
			navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
				'<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'],
		});
	}
	var slider = $(".banner-slider");
	slider.owlCarousel({
		dots: false,
		nav: true,
    loop: true,
		items: 1,
		responsiveClass: true,
		navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
			'<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'],
	});
	var slider_case = $(".header-case");
	slider_case.owlCarousel({
		dots: true,
		nav: true,
    loop: true,
		items: 1,
		responsiveClass: true,
		navText: ['<i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i>',
			'<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>'],
	});

	$("#products_grid").mixItUp();

	$('.products li').click(function () {
		$('.products li').removeClass('active');
		$(this).addClass('active');
	});
});