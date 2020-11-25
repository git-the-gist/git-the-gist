setTimeout(function() {
    $('#first-screen').fadeOut('fast');
}, 4000);

setTimeout(function() {
	$('#closed-book').fadeIn('slow');
}, 4000);

setTimeout(function() {
	$('#book-cover').fadeIn('slow');
}, 6000);

setTimeout(function() {
	$('#book-cover').fadeOut('slow');
}, 10000);

setTimeout(function() {
	$('#book-gif').fadeIn('fast');
}, 10000);

setTimeout(function() {
	$('#book-gif').fadeOut('fast');
}, 10500);

setTimeout(function() {
	$('#open-book').fadeIn('fast');
}, 10500);

setTimeout(function() {
	$('#book-tale').fadeIn('fast');
}, 10600);

setTimeout(function() {
	$('#book-img').fadeIn('fast');
}, 10500);

var audio = new Audio('birthday_song.mp3');
setTimeout(function() {
	document.getElementById('my_audio').play();
}, 8000);


