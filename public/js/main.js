

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

		$.post('send-mail',$('#skjema').serialize(),function(response){
			console.log('successfully posted request: ' + response);
			finished();
		});

		setTimeout(function() {finished();}, 3000);

		function finished(){
			clearInterval(interval);
			$('#skjema .questions').removeClass('loading');
			$('#skjema').find('*').val('');
			$('#skjema button').html('Send');
			$('#skjema .message').html('Melding sendt');
		}
	})


	slider.init($('#slider'), {
		arrows: true,
		autoplay: false,
		pauseOnHover: false
	});

	mapControl.init('map')

	if($(window).width() > 480){

		slider.init($('#produktSlider'), {
			arrows: true,
			autoplay: false
		});
	};



});