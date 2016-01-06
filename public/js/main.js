

 $(document).ready(function(){

 	function checkAppear(){

 		var scroll = $(window).scrollTop() + window.innerHeight;
 		var map = $('#map').offset().top + $('#map').height();

 		if(scroll >= map){

 			mapAppeared();

 			$(document).off('scroll', checkAppear); // delete event listener
 		}
 	}

 	$(document).on('scroll', checkAppear);


 	function mapAppeared(){
 		var waitDuration = 7000;

 		// map.zoomTo(7, {
 		// 	duration: waitDuration
 		// });

 		setTimeout(function(){
 			console.log('yeyeye')
 			$("#maptext").animate({
 				width: '200px'
 			}, 3000)
 		}, (waitDuration-1000))

 	}

 });