var timer;
var slides = 4;
var timeLen = 5000;

function nextSlide() {
	clearTimeout( timer );
	var current = parseInt($("#counter").html());

	if (current < slides) {
		var nextSlide = current + 1;
	} else {
		var nextSlide = 1;
	}
	//sets rear image to next slide (still not visible)
	$("#slide_back img").attr("src","assets/slideShow/slide" + nextSlide + ".jpg");
	
	//Hide front image..
	$("#slide_front").animate({opacity:"0"},700,"linear", function (){
		//Change the front image src currently hidden
		$("#slide_front img").attr("src","assets/slideShow/slide" + nextSlide + ".jpg");
		//Display front image
		$("#slide_front").css("opacity","1");
		//change jumpers
		$("#jumpers li.current").removeAttr("class");
		$("#jumpers #" + nextSlide).attr("class","current");
		//update counter
		$("#counter").html(nextSlide);
		//set timer for next image
		timer = setTimeout("nextSlide()", timeLen);
		
	});
}

function ready() {
	$("#loading").css("display","none");
	$("#slideWrap").css("display", "block");
	timer = setTimeout("nextSlide()", timeLen);
}

$(document).ready (function (){
	setTimeout("ready()");
});