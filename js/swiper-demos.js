/*
Author: Vladimir Kharlampidi, The iDangero.us
*/
$(function(){

	//Movies App
	var allowMovieClick = true
	// var swiperMControl = $('.mc-control').swiper({
	// 	mode : "horizontal", 
	// 	scrollContainer:true,
	// 	onTouchMove : function(){
	// 		allowMovieClick = false	
	// 	},
	// 	onTouchEnd : function() {
	// 		setTimeout(function(){allowMovieClick = true},100)	
	// 	}
	// });
	// $('.mc-control img').bind('mousedown',function(e){
	// 	e.preventDefault()
	// })
	$('.mc-control img').bind('click',function(e){
		e.preventDefault()
		if (!allowMovieClick) return;
		$('.zoomImgOff').removeClass('zoomImgOff')
		$(".mc-control").addClass("zoomImgOn")
		$('body').css({ 'overflow':'scroll' })
		$('.swiper-container').css({ 'overflow':'scroll' })
	    $('.swiper-wrapper').css({   'overflow':'scroll' })
	    $('.swiper-slide').css({     'overflow':'scroll' })
		alert('click')
	})
	
	/* Dynamic Swiper */
	function randomColor () {
		var colors = ('blue red green orange pink').split(' ');
		return colors[ Math.floor( Math.random()*colors.length ) ]
	}
	var count = 5;
	var swiperDyn = $('.swiper-dynamic').swiper({
		pagination:'.pagination-sd'
	})
	$('.sdl-append').click(function(e) {
		e.preventDefault();
		swiperDyn.appendSlide('<h2>Slide '+(++count)+'</h2>', 'swiper-slide '+randomColor()+'-slide')
	});
	$('.sdl-prepend').click(function(e) {
		e.preventDefault();
		swiperDyn.prependSlide('<h2>Slide  '+(++count)+'</h2>', 'swiper-slide '+randomColor()+'-slide')
	});
	$('.sdl-swap').click(function(e) {
		e.preventDefault();
		swiperDyn
			.getFirstSlide()
			.insertAfter(1)
	});
	$('.sdl-insert').click(function(e) {
		e.preventDefault();
		swiperDyn
			.createSlide('<h2>Slide  '+(++count)+'</h2>', 'swiper-slide '+randomColor()+'-slide')
			.insertAfter(0)
	});
	$('.sdl-remove1').click(function(e) {
		e.preventDefault();
		swiperDyn.removeSlide(0)
	});
	$('.sdl-removel').click(function(e) {
		e.preventDefault();
		swiperDyn.removeLastSlide()
	});
	$('.sdl-remove2').click(function(e) {
		e.preventDefault();
		swiperDyn.removeSlide(1)
	});
	
})

