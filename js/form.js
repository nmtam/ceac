$(document).ready(function(){

	initTableBottomBtn();
	
	addOnLoadEvent(function(){
		_preventHashAnchor();
		_addSpanDeco();
		
		setTimeout("_resizeWindow()", 300);
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
	var innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var innerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    var targetWidth = document.getElementById('popup_wrapper').offsetWidth;
    var targetHeight = document.getElementById('popup_wrapper').offsetHeight;
    
    var left = parseInt((screen.availWidth/2) - (targetWidth/2));
    var top = parseInt((screen.availHeight/2) - (targetHeight/2));
    window.moveTo(left,top);
    
    window.resizeBy(targetWidth-innerWidth, targetHeight-innerHeight);
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