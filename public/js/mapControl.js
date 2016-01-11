/**

This module handles the map

**/
window.mapControl=(function(){
	//private
	var mapContainer;

	function addMarker(map){
		map.on('style.load', function () {
			map.addSource("markers", {
				"type": "geojson",
				"data": {
					"type": "FeatureCollection",
					"features": [{
						"type": "Feature",
						"geometry": {
							"type": "Point",
							"coordinates": [ 6.925506591796875, 62.310708160426636]
						},
						"properties": {
							"title": "Sunnsnacks UB",
							"marker-symbol": "library"
						}
					}]
				}
			});

			map.addLayer({
				"id": "markers",
				"type": "symbol",
				"source": "markers",
				"layout": {
					"icon-image": "{marker-symbol}-15",
					"text-field": "{title}",
					"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
					"text-offset": [0, 0.6],
					"text-anchor": "top"
				},
				"paint": {
					"text-size": 12
				}
			});
		});


		
	}
	function fly (map) {
		map.flyTo({
			zoom: 8,
			speed: 0.5, // make the flying slow
			curve: 1, // change the speed at which it zooms out

	        // This can be any easing function: it takes a number between
	        // 0 and 1 and returns another number between 0 and 1.
	        easing: function (t) {
	        	return t;
	        }

	    });
	}

	function checkAppear(callback){

		var scroll = $(window).scrollTop() + window.innerHeight;
		var map = $('#map').offset().top + $('#map').height();

		if(scroll >= map){
			callback();
			 //mapAppeared();
	 		$(document).off('scroll', checkAppear); // delete event listener
	 	}
	 }



	 function showMapText(callback){
	 	$("#maptext").animate({
	 		width: '200px'
	 	}, 3000, callback);

	 }

	//public:
	return{
		init:function(container){
			mapContainer = $('#' + container);
			
			mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FwdHJhc3QiLCJhIjoiY2lpNzJpbTN6MDA2OXY2bHhneDhrd3Z5cCJ9.4ph3SMx1X9LGaQOQtnuWsg';
			var map = new mapboxgl.Map({
			    container: container, // container id
			    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
			    center: [ 6.925506591796875, 62.310708160426636], // starting position
			    zoom: 5, // starting zoom
			    interactive: false
			});


			// addMarker(map);



			$(document).on('scroll', function(){
				checkAppear(function(){
					showMapText(function(){
						fly(map);
					});
					setTimeout(function() {
						$('#stranda').show(1000);
					}, 6000);
				})
			});


		}
	}

}());