$(document).ready(function() {
	$('.header__burger').click(function() {
		$('.header__burger').toggleClass('js-active');
		$('.menu-header').toggleClass('js-active');
		$('body').toggleClass('overflow-hidden');
	})
	var aivsman_body__title_main_span = $('.aivsman-body__title-main-span');
	aivsman_body__title_main_span.click(function() {
		aivsman_body__title_main_span.toggleClass('js-active');
		$('.aivsman-switch-content-before').toggleClass('js-active');
	})






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
	}, 500);

	






	/* var aivsman_switch_content_before = $('.aivsman-switch-content-before .aivsman-switch-content-general-inner').innerHeight();
	var aivsman_switch_content_after = $('.aivsman-switch-content-after .aivsman-switch-content-general-inner').innerHeight();
	
	if (aivsman_switch_content_before > aivsman_switch_content_after) {
		$(".aivsman-switch-content__container").css({"height" : aivsman_switch_content_before})
	}
	if (aivsman_switch_content_before < aivsman_switch_content_after) {
		$(".aivsman-switch-content__container").css({"height" : aivsman_switch_content_after})
	} */


	




})