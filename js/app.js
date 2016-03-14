$(document).ready(function() {
	$('form').submit(function(e) {
		e.preventDefault();
		var input = $('input[name="number"]').val();
			if(isNaN(input)){
				alert("Please enter a number only!");
			}
			else if(input % 1 !== 0) {
				alert("Please enter a whole number only!");
			}
			else if(input < 1 ) {
				alert("Please enter a number between 1-100 only!");
			}
			else if(input > 100 ) {
				alert("Please enter a number between 1-100 only!");
			}
			else 
		for (var start = 1; start < input; start++) {
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