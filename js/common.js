'use strict';

$('.advantages-block').click(function (event) {
	$('.block').removeClass('block-active');
	var num = $(this).attr('data-class');
	$('#block' + num).addClass('block-active');
});
$(".advantages-block").on("click", function () {
	$(".advantages-block").removeClass("active");
	$(this).addClass("active");
});


$(document).ready(function() {
	var companies = $('.companies-slider');
	companies.owlCarousel({
		nav: true,
		dots: false,
		responsiveClass:true,
		responsive: {
			0:{
				items: 1
			},
			480:{
				items: 1
			},
			768:{
				items: 2
			},
			1024:{
				items: 3
			},
			1440:{
				items: 5
			}
		},
		navText: ['<i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i>',
								'<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>'],
	});
	if($(window).innerWidth() <= 1358){
		$('.advantages-slider').owlCarousel({
			nav: true,
			dots: false,
			responsiveClass:true,
			responsive: {
				0:{
					items: 1
				},
				480:{
					items: 1
				},
				768:{
					items: 2
				},
				1024:{
					items: 3
				},
				1440:{
					items: 4
				}
			},
			navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
								'<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'],
		});
		$('.projects-list').owlCarousel({
			nav: true,
			dots: false,
			responsiveClass:true,
			responsive: {
				0:{
					items: 1
				},
				480:{
					items: 1
				},
				580:{
					items: 2
				},
				1024:{
					items: 3
				},
				1440:{
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
				0:{
					items: 1
				},
				480:{
					items: 1
				},
				768:{
					items: 2
				},
				1024:{
					items: 3
				},
				1440:{
					items: 4
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
			responsiveClass:true,
			navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
								'<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'],
	});
	var slider_case = $(".header-case");
		slider_case.owlCarousel({
			dots: true,
			nav: true,
			items: 1,
			responsiveClass:true,
			navText: ['<i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i>',
								'<i class="fa fa-chevron-right fa-lg" aria-hidden="true"></i>'],
	});
});