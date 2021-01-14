/*
* All the common functions use for animations
*/

var toggele = 1;
function changeBanner(){
	console.log("toggele: ",toggele);
	if( toggele == 0 ) {
    	// $(".intro").css("marginTop","20vh");
    	$(".intro").animate({marginTop: '20vh'},1000);
    	toggele = 1;
    }else{
      	// $(".intro").css("marginTop","45vh");
      	$(".intro").animate({marginTop: '45vh'},1000);
      	toggele = 0;
    };
}

function moveToAbout(){
	console.log("moveToAbout");
	$('html,body').animate({
    	scrollTop: $("#about").offset().top},
    2000);
}

//services-area
function moveToServices(){
	console.log("moveToServices");
	$('html,body').animate({
    	scrollTop: $("#services").offset().top},
    2000);
}