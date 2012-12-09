/*
 * Quy uoc: cac ham bat dau voi _ deu la cac ham xu ly giao dien
 */

var popup_w = 1000,
	popup_h = 800;
var main_biz_delay = 900000; // 15 min

$(document).ready(function(){

	initSuperfishMenu();
	initTopUse();
	
	addOnLoadEvent(function(){
		_addSpanDeco();
		_addTopNAVActiveIndicator();
		_preventHashAnchor();
	});
});

function initTopUse(){
	$('#top_use > ul > li').click(function(e){
		var href = $(this).attr('data-href');
		_openNewWindow(href);
		
		e.preventDefault();
	});
	
	$('#top_use > ul > li > .remove').click(function(e){
		var parent = $(this).parents().get(0);
		$(parent).remove();
		
		e.preventDefault();
	});
}

function initSuperfishMenu(){
	var sf = $('.sf-menu');
	if (sf.length > 0) {
		// add deco LI
		$('.sf-menu .sub').prepend('<li class="deco_top"></li>').append('<li class="deco_bottom"></li>');
		
		// init SUPERFISH
		sf.superfish({ 
			delay: main_biz_delay, // don't hide menu when mouse-out within 15'
			dropShadows: false,
			speed: 'fast',
			onInit: function(){
				$(' > li > .sub > .deco_top', this).append('<span class="left_arr"></span>');
			}
		}); 
		
		$('.sf-menu .sub .make_shortcut').click(function(e){
			alert('click me');
		});
	}
}

function _openNewWindow(href){
	var left = (screen.width/2)-(popup_w/2);
	var top = (screen.height/2)-(popup_h/2);
	var _option = "toolbar=0,location=0,menubar=0,status=0,scrollbars=yes,resizable=1,location=0,width="+popup_w+",height="+popup_h+",top="+top+",left="+left;

	window.open(href, '_blank', _option);
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