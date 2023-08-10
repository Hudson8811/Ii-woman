$(document).ready(function() {
	$('.header__burger').click(function() {
		$('.header__burger').toggleClass('js-active');
		$('.menu-header').toggleClass('js-active');
		$('body').toggleClass('overflow-hidden');
	})
	$('.socials__icon-open-popup').click(function() {
		$('.popup').toggleClass('js-active');
	})
	$('.popup__close').click(function() {
		$('.popup').removeClass('js-active');
	})



	$('.aivsman-body__title-main-span').click(function() {
		$('.aivsman-body__title-main-span').toggleClass('js-active');
		$('.aivsman-switch-content-before').toggleClass('js-active');
	})


	$('.menu-header__link-man').click(function() {
		$('.aivsman-body__title-main-span').removeClass('js-active');
		$('.aivsman-switch-content-before').removeClass('js-active');
		$('.header__burger').removeClass('js-active');
		$('.menu-header').removeClass('js-active');
		$('body').removeClass('overflow-hidden');
	})
	$('.menu-header__link-ai').click(function() {
		$('.aivsman-body__title-main-span').addClass('js-active');
		$('.aivsman-switch-content-before').addClass('js-active');
		$('.header__burger').removeClass('js-active');
		$('.menu-header').removeClass('js-active');
		$('body').removeClass('overflow-hidden');
	})
	



	$('.click').on('click', function() {

		let href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top - $('.aivsman-body__title-main').innerHeight()
		}, {
			duration: 700,
			easing: "linear"
		});

		return false;
	});





if ($(window).innerWidth() > 768) {
	
	$(function(){	
		var column = 0;
		$('.aivsman-body .aivsman-body__same-height1').each(function(){
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		}).height(column);
		$('.aivsman-body .aivsman-body__same-height2').each(function(){
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		}).height(column);
		$('.aivsman-body .aivsman-body__same-height3').each(function(){
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		}).height(column);
		$('.aivsman-body .aivsman-body__same-height4').each(function(){
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		}).height(column);
		$('.aivsman-body .aivsman-body__same-height5').each(function(){
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		}).height(column);
		$('.aivsman-body .aivsman-body__same-height6').each(function(){
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		}).height(column);
		$('.aivsman-body .aivsman-body__same-height7').each(function(){
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		}).height(column);
		$('.aivsman-body .aivsman-body__same-height8').each(function(){
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		}).height(column);
	});
}

	setTimeout(function () {
		var aivsman_switcher = $('.aivsman-switcher').innerHeight();
		$(".aivsman-switch-content__container").css({"margin-top" : -aivsman_switcher})
		
		
		var running_line = $('.aivsman-body__running-line').innerHeight();
		var running_line1 = $('.aivsman-body__running-line1');
		var running_line2 = $('.aivsman-body__running-line2');
		
		var aivsman_body__title_main = $('.aivsman-body__title-main').innerHeight();

		var aivsman_body_sec_wrapper1H = $('.aivsman-body__sec-wrapper1').innerHeight();
		var aivsman_body_sec_wrapper2H = $('.aivsman-body__sec-wrapper2').innerHeight();

		var aivsman_body_sec_wrapper1 = $('.aivsman-body__sec-wrapper1');
		var aivsman_body_sec_wrapper2 = $('.aivsman-body__sec-wrapper2');
		
		
		
		aivsman_body_sec_wrapper1.css({"padding-bottom" : running_line});
		aivsman_body_sec_wrapper2.css({"padding-bottom" : running_line});
		
		running_line1.css({"top" : aivsman_body__title_main + aivsman_body_sec_wrapper1H});
		running_line2.css({"top" : aivsman_body__title_main + running_line + aivsman_body_sec_wrapper1H + aivsman_body_sec_wrapper2H});


		$(window).scroll(function() {
			if ($('.aivsman').offset().top + 100 < $(window).scrollTop()) {
				$('.aivsman-body__title-main').addClass('js-active');
				$('.aivsman-switcher').addClass('js-active');
			}else {
				$('.aivsman-body__title-main').removeClass('js-active');
				$('.aivsman-switcher').removeClass('js-active');
			}




			/* var image_parallax1 = $('.js-image-parallax1');
			image_parallax1.each(function( index ) {
				if ($(this).offset().top + 100 < $(window).scrollTop()) {
					let scrollPosition = $(window).scrollTop();
					$(this).css({"margin-top" : scrollPosition * -0.1 + 'px'});
				}
			});
			var image_parallax2 = $('.js-image-parallax2');
			var image_parallax3 = $('.js-image-parallax3');
			image_parallax2.css({"margin-top" : scrollPosition * -0.11 + 'px'});
			image_parallax3.css({"margin-top" : scrollPosition * -0.15 + 'px'}); */
		})


		
	}, 500);




const body__sec2 = gsap.timeline();

body__sec2.fromTo('.aivsman-body__sec2 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec2.fromTo('.aivsman-body__sec2 .js-image-parallax2', 1, {y: -100}, {y:100}, 0)
body__sec2.fromTo('.aivsman-body__sec2 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec2,
	trigger: '.aivsman-body__sec2',
	scrub: 2,
})




const body__sec5 = gsap.timeline();

body__sec5.fromTo('.aivsman-body__sec5 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec5.fromTo('.aivsman-body__sec5 .js-image-parallax2', 1, {y: -100}, {y:100}, 0)
body__sec5.fromTo('.aivsman-body__sec5 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec5,
	trigger: '.aivsman-body__sec5',
	scrub: 3,
})


const body__sec6 = gsap.timeline();

body__sec6.fromTo('.aivsman-body__sec6 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec6.fromTo('.aivsman-body__sec6 .js-image-parallax2', 1, {y: 0}, {y:-100}, 0)
body__sec6.fromTo('.aivsman-body__sec6 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec6,
	trigger: '.aivsman-body__sec6',
	scrub: 2,
})


const body__sec7 = gsap.timeline();

body__sec7.fromTo('.aivsman-body__sec7 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec7.fromTo('.aivsman-body__sec7 .js-image-parallax2', 1, {y: -100}, {y:100}, 0)
body__sec7.fromTo('.aivsman-body__sec7 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec7,
	trigger: '.aivsman-body__sec7',
	scrub: 2,
})
const body__sec22 = gsap.timeline();

body__sec22.fromTo('.aivsman-body__sec22 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec22.fromTo('.aivsman-body__sec22 .js-image-parallax2', 1, {y: -100}, {y:100}, 0)
body__sec22.fromTo('.aivsman-body__sec22 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec22,
	trigger: '.aivsman-body__sec22',
	scrub: 2,
})




const body__sec55 = gsap.timeline();

body__sec55.fromTo('.aivsman-body__sec55 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec55.fromTo('.aivsman-body__sec55 .js-image-parallax2', 1, {y: -100}, {y:100}, 0)
body__sec55.fromTo('.aivsman-body__sec55 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec55,
	trigger: '.aivsman-body__sec55',
	scrub: 3,
})


const body__sec66 = gsap.timeline();

body__sec66.fromTo('.aivsman-body__sec66 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec66.fromTo('.aivsman-body__sec66 .js-image-parallax2', 1, {y: 0}, {y:-100}, 0)
body__sec66.fromTo('.aivsman-body__sec66 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec66,
	trigger: '.aivsman-body__sec66',
	scrub: 2,
})


const body__sec77 = gsap.timeline();

body__sec7.fromTo('.aivsman-body__sec77 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec7.fromTo('.aivsman-body__sec77 .js-image-parallax2', 1, {y: 100}, {y:-100}, 0)
body__sec7.fromTo('.aivsman-body__sec77 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec77,
	trigger: '.aivsman-body__sec77',
	scrub: 2,
})


/* const body__sec3 = gsap.timeline();

body__sec3.fromTo('.aivsman-body__sec2 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec3.fromTo('.aivsman-body__sec2 .js-image-parallax2', 1, {y: -100}, {y:100}, 0)
body__sec3.fromTo('.aivsman-body__sec2 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec3,
	trigger: '.aivsman-body__sec3',
	scrub: 2,
})
const body__sec2 = gsap.timeline();

body__sec2.fromTo('.aivsman-body__sec2 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec2.fromTo('.aivsman-body__sec2 .js-image-parallax2', 1, {y: -100}, {y:100}, 0)
body__sec2.fromTo('.aivsman-body__sec2 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec2,
	trigger: '.aivsman-body__sec2',
	scrub: 2,
})
const body__sec2 = gsap.timeline();

body__sec2.fromTo('.aivsman-body__sec2 .js-image-parallax1', 1, {y: 50}, {y:-50}, 0)
body__sec2.fromTo('.aivsman-body__sec2 .js-image-parallax2', 1, {y: -100}, {y:100}, 0)
body__sec2.fromTo('.aivsman-body__sec2 .js-image-parallax3', 1, {y: -50}, {y:50}, 0)

ScrollTrigger.create({
	animation: body__sec2,
	trigger: '.aivsman-body__sec2',
	scrub: 2,
}) */





	/* $(document).on('scroll', function() {
		$('.js-image-parallax2').each(function(){
			var wh = $(window).height();
			var wt = ($(window).scrollTop());
			var wb = (wh + wt) - 300;
			var eh = $(this).outerHeight();
			var et = $(this).offset().top;
			var eb = (eh + et);
			if ((eb >= wt) && (et <= wb)){
				$(this).parent().addClass('js-active');
				$(this).css({"margin-top" : wt * (1 / 100) + 'px'});
			} else {
				console.log('2');
			}
		})
	}); */





	/* var aivsman_switch_content_before = $('.aivsman-switch-content-before .aivsman-switch-content-general-inner').innerHeight();
	var aivsman_switch_content_after = $('.aivsman-switch-content-after .aivsman-switch-content-general-inner').innerHeight();
	
	if (aivsman_switch_content_before > aivsman_switch_content_after) {
		$(".aivsman-switch-content__container").css({"height" : aivsman_switch_content_before})
	}
	if (aivsman_switch_content_before < aivsman_switch_content_after) {
		$(".aivsman-switch-content__container").css({"height" : aivsman_switch_content_after})
	} */


	




})