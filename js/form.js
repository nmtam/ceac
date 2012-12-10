$(document).ready(function(){

	initTableBottomBtn();
	sendTabKeyWhenEnter();
	initJSPanel();
	
	addOnLoadEvent(function(){
		_preventHashAnchor();
		_addSpanDeco();
		
		setTimeout("_resizeWindow()", 200);
	});
});

function initJSPanel(){
	var jsp = $('.jsPanel');
	if (jsp.length > 0) {
		jsp.jScrollPane({
			verticalDragMinHeight: 30,
			verticalDragMaxHeight: 120,
			verticalGutter: 0
		});
	}
}

function sendTabKeyWhenEnter(){
	// send TAB key when user press ENTER on input box	
	var form = $('form');	
	$('form input:visible:enabled:first').focus().select();

	var focusable = form.find('input,a,select,button,textarea').filter(':visible');
	
	$('form input:visible:enabled, form select:enabled, form textarea:enabled').bind('keydown', function(e){
		console.log(e.keyCode);
		var next;
		if (e.keyCode == 13) {
			next = focusable.eq(focusable.index(this)+1)
			if (next.length) {
				this.blur();
				next.focus().select();
			} 
			return false;
		}
	}); 
}


function initTableBottomBtn(){
	$('div.listing').hover(
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
    var top = parseInt((screen.availHeight/2) - (targetHeight/2) - 30);
	if (top < 0) top = 0;
	
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