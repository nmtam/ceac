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
		sf.superfish({ 
			animation: {height:'show'},
			delay: 800 // don't hide menu when mouse-out
		}); 
	}
}
function _addSpanDeco(){
	$('.add_span').each(function(){
		var obj = $(this);
		var child = $(obj.attr('data-child'), obj);
		var method = parseInt(obj.attr('data-dir')); //0: append, 1: prepend
		if (method == 0) child.append('<span></span>');
		else child.prepend('<span></span>');
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