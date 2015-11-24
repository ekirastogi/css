var timer,date,hrs=0,min=0,sec=0;
$(function() {
	$(document).on("clockTime",function(){clockUpdate(event)});
	init();	
	// timer(clockTimer,1000);
});

function init(){
	clockTimer();
	date = new Date();
}

function clockTimer() {
	date = new Date();
	hrs=date.getHours();
	min=date.getMinutes();
	sec=date.getSeconds();
	$.event.trigger("clockTime");
	timer = setTimeout(clockTimer,1000);
}

function clockUpdate(event){
	
	var secDeg=sec*6;
	var minDeg=min*6;
	var hrsDeg=(hrs-12)*30 + 0.5*min;
	$("#test").html("caught :: " + hrs+ " " +0 +" :: "+min+ " " +minDeg +" :: "+sec +" "+secDeg +"");
	applyEffect(".sec-hand",secDeg);
	applyEffect(".min-hand",minDeg);
	applyEffect(".hrs-hand",hrsDeg);
	
	}
function applyEffect(element,degree){
	$(element).css({'-webkit-transform' : 'rotate('+ degree +'deg)',
        '-moz-transform' : 'rotate('+ degree +'deg)',
        '-ms-transform' : 'rotate('+ degree +'deg)',
        'transform' : 'rotate('+ degree +'deg)',
        '-webkit-transform-origin': '50% 100%',
        '-moz-transform-origin': '50% 100%',
        '-ms-transform-origin': '50% 100%',
        '-o-transform-origin': '50% 100%',
        'transform-origin': '50% 100%'});
}
