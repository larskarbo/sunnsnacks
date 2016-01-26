

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

		var email;

		var production = false;

		if(production){
			email = 'ub.sunnsnacks@gmail.com';
		}else{
			email = "larskarbo@hotmail.com";
		}

		var data = $('#skjema').serializeArray();
		console.log(data);
		$.ajax({
			url: "postvesen", 
			method: "POST",
			data: data
		}).done(function(response) {
			console.log('successfully posted request: ' + response);
			finished('Melding sendt');
			console.log(response);
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