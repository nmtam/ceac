/*
 * Quy uoc: cac ham bat dau voi _ deu la cac ham xu ly giao dien
 */

$(document).ready(function(){

	initSuperfishMenu();
	
	addOnLoadEvent(function(){
		_addSpanDeco();
		_addTopNAVActiveIndicator();
	});
});


function initSuperfishMenu(){
	var sf = $('.sf-menu');
	if (sf.length > 0) {
		// add deco LI
		$('.sf-menu .sub').prepend('<li class="deco_top"></li>').append('<li class="deco_bottom"></li>');
		// init SUPERFISH
		sf.superfish({ 
			animation: {height:'show'},
			delay: 80000, // don't hide menu when mouse-out
			disableHI: true,
			dropShadows: false
		}); 
	}
}
function _addSpanDeco(){
	$('.add_span').each(function(){
		var obj = $(this);
		var child = $(obj.attr('data-child'), obj);
		var method = parseInt(obj.attr('data-dir')); //0: append, 1: prepend
		var span_class = obj.attr('data-class');
		if (span_class) var html = '<span class="'+span_class+'"></span>';
		else var html = '<span></span>';
		if (method == 0) child.append(html);
		else child.prepend(html);
	});
}

function _addTopNAVActiveIndicator(){
	$('#top .active').append('<i></i>');
}

// Add event to window.onload so they don't overwrite each other. 
// Given func will be executed after content is loaded
function addOnLoadEvent(func){
	if (window.addEventListener){
		window.addEventListener('load', func, false); 
	} else if (window.attachEvent) { 
		window.attachEvent('onload', func);
	}
}