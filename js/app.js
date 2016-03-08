$(document).ready(function() {
	$('.go').click(function() {
		for (var start = 1; start < 101; start++) {
			if (start % 3 === 0 && start % 5 ===0) {
				$('ul').append('Fizz Buzz')
			}
			else if (start % 3 === 0) {
				$('ul').append('Fizz')
			}
			else if (start % 5 === 0) {
				$('ul').append('Buzz')
			}
			else {
				$('ul').append(start);
			}
			$('ul').append('<br />');
		}
	});
});