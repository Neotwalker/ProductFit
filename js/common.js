'use strict';
$('html').css('overflow-x', 'initial');
$('.companies-slider').owlCarousel({
	nav: true,
	dots: false,
	responsive: {
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	},
	navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
              '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
});
$('.advantages-block').click(function (event) {
	$('.block').removeClass('block-active');
	var num = $(this).attr('data-class');
	$('#block' + num).addClass('block-active');
});
$(".advantages-block").on("click", function () {
	$(".advantages-block").removeClass("active");
	$(this).addClass("active");
});

if($(window).innerWidth() <= 1358){
	$('.advantages-slider').owlCarousel({
		nav: true,
		dots: false,
		responsive: {
			0:{
				items: 1
			},
			600:{
				items: 3
			},
			1000:{
				items: 3
			}
		},
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
              '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	});
	$('.projects-list').owlCarousel({
		nav: true,
		dots: false,
		responsive: {
			0:{
				items: 1
			},
			600:{
				items: 3
			},
			1000:{
				items: 4
			}
		},
	});
}
var slider = $(".banner-slider");
  slider.owlCarousel({
    items:1,
		dots: false,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>',
              '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
  });