$(document).ready(function(){
	$('.nav-tabs li').hover(function(){
		$('ul', this).fadeOut(0).stop(true, true).fadeIn(400);
	},
	function(){
		$('ul', this).css("display", "block").stop(true, true).delay(150).fadeOut(200);
	});
});