$(document).on('click', '.mejs__pause', function() {
    $('.play-yb').html(yb_icon);
    $('.cover-yb').css('background-color', '#ffffff')
});
$(document).on('click', '.play-yb', function(e) {
	e.preventDefault();
	loadPlayer(this);
})
