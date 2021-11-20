$(document).ready(function(){


	$(window).scroll(function(event){

		var y_cordinate = $(this).scrollTop();

		var simple = $('.responsive').position();
		var advance = $('.advance').position();

		var simpleht = $('.responsive').height();
		var advanceht = $('.advance').height();
		

		if(y_cordinate >= (simple.top - simpleht)){
			$('.responsive img').addClass('animate');
		}else{
			$('.responsive img').removeClass('animate');
		}

		if(y_cordinate >= (advance.top - advanceht )){
			$('.advance img').addClass('animate');
		}else{
			$('.advance img').removeClass('animate');
		}

	});

});