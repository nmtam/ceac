$(document).ready(function(){

	initTableBottomBtn();
	
	addOnLoadEvent(function(){
		_preventHashAnchor();
		_addSpanDeco();
		
		_resizeWindow();
	});
});


function initTableBottomBtn(){
	$('table.listing').hover(
		function(){
			$('.listing2_action', this).toggleClass('hidden');
		},
		function(){
			$('.listing2_action', this).toggleClass('hidden');
		}
	);
}

function _resizeWindow(){
	//var w = $(window).width();
	//var h = $(window).height();
	var w = $(window).width();
	var h = $('.fe').height();
	//var n_h = $('.fe').height();
	console.log(w, h);
	
	window.resizeTo(w+16, h+90);
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

function _preventHashAnchor() {
	$('a[href="#"]').click(function(e){
		e.preventDefault();
	});
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