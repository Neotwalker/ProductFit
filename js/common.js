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
		var sync1 = $("#sync1");
		var sync2 = $("#sync2");
		var syncedSecondary = true;

		sync1.owlCarousel({
			items: 1,
			slideSpeed: 2000,
			nav: true,
			autoplay: false,
			dots: false,
			loop: true,
			responsiveRefreshRate: 200,
			navText: ['<i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i>',
			'<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>'],
		}).on('changed.owl.carousel', syncPosition);

		sync2
			.on('initialized.owl.carousel', function () {
				sync2.find(".owl-item").eq(0).addClass("current");
			})
			.owlCarousel({
				items: 1,
				dots: false,
				nav: false,
				responsiveRefreshRate: 100
			}).on('changed.owl.carousel', syncPosition2);

		function syncPosition(el) {
			var count = el.item.count - 1;
			var current = Math.round(el.item.index - (el.item.count / 2) - .5);

			if (current < 0) {
				current = count;
			}
			if (current > count) {
				current = 0;
			}

			//end block

			sync2
				.find(".owl-item")
				.removeClass("current")
				.eq(current)
				.addClass("current");
			var onscreen = sync2.find('.owl-item.active').length - 1;
			var start = sync2.find('.owl-item.active').first().index();
			var end = sync2.find('.owl-item.active').last().index();

			if (current > end) {
				sync2.data('owl.carousel').to(current, 100, true);
			}
			if (current < start) {
				sync2.data('owl.carousel').to(current - onscreen, 100, true);
			}
		}

		function syncPosition2(el) {
			if (syncedSecondary) {
				var number = el.item.index;
				sync1.data('owl.carousel').to(number, 100, true);
			}
		}

		sync2.on("click", ".owl-item", function (e) {
			var number = $(this).index();
			sync1.data('owl.carousel').to(number, 300, true);
		});
	}
	var companies = $('.companies-slider');
	companies.owlCarousel({
		nav: true,
		dots: false,
		responsiveClass: true,
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
	if ($(window).innerWidth() <= 1440) {
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
				}
			},
			navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
				'<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'],
		});
		$('.projects-list').owlCarousel({
			nav: true,
			dots: false,
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
		items: 1,
		responsiveClass: true,
		navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
			'<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'],
	});
	var slider_case = $(".header-case");
	slider_case.owlCarousel({
		dots: true,
		nav: true,
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