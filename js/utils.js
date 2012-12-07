$(document).ready(function(){

	/*
	 * process fullsize background image on splash page
	 */
	makeDecoFullsize('#page_deco_img');
	$(window).resize(function(){
		makeDecoFullsize('#page_deco_img');
	});
});


function makeDecoFullsize(id) {
	var imgageHolder = $(id);

	if (imgageHolder.length == 1) {
		var w=1280, h=700;
		var navWidth = $(window).width();
		var navHeight = $(window).height();
		var navRatio = navWidth / navHeight;
	
		var mainImage = $('.main_image');
		if (mainImage.width() > 1) w = mainImage.width();
		if (mainImage.height() > 1) h = mainImage.height();
		picRatio = w / h;
		
		if (navRatio > picRatio) {
			var newHeight = (navWidth / w) * h;
			var newWidth = navWidth;
		} else {
			var newHeight = navHeight;
			var newWidth = (navHeight / h) * w;
		}

		newTop = 0 - ((newHeight - navHeight) / 2);
		newTop = 0;
		newLeft =  0 - ((newWidth - navWidth) / 2);

		imgageHolder.css({height: navHeight, width: navWidth});
		mainImage.css({height: newHeight, width: newWidth, top: newTop, left: newLeft});
	}
}

// add event to window.onload so they don't overwrite each other. Given func will be executed after content is loaded
function addOnLoadEvent(func){
	if (window.addEventListener){
		window.addEventListener('load', func, false); 
	} else if (window.attachEvent) { 
		window.attachEvent('onload', func);
	}
}