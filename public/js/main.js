

$(document).ready(function(){

	$('#skjema').submit(function(e){
		e.preventDefault();

		$('#skjema .questions').addClass('loading');

		i = 0;
		$('#skjema button').html("Sender");
		var interval = setInterval(function() {
			i = ++i % 4;
			$('#skjema button').html("Sender"+Array(i+1).join("."));
		}, 750);

		var email = "larskarbo@hotmail.com";

		$.ajax({
			url: "//formspree.io/" + email, 
			method: "POST",
			data: $('#skjema').serialize(),
			dataType: "json"
		}).done(function(response) {
			console.log('successfully posted request: ' + response);
			finished('Melding sendt');
			$('#skjema').find('*').val('');
		})
		.fail(function() {
			finished('Kunne ikke sende epost. Vennligst send manuelt til ' + email);
		});

		function finished(backt){
			clearInterval(interval);
			$('#skjema .questions').removeClass('loading');
			
			$('#skjema button').html('Send');
			$('#skjema .message').html(backt);
		}
	})


	slider.init($('#slider'), {
		arrows: false,
		autoplay: true,
		pauseOnHover: false
	});

	mapControl.init('map')

	if($(window).width() > 480){

		slider.init($('#produktSlider'), {
			arrows: true,
			autoplay: false
		});
	}else{
		$('#notSmall').hide();
	};



});