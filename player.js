function loadPlayer(me) {
    //e.preventDefault();
    var download_link = $(me).data('baseid');
    $('.tbl_active_download').attr('href', baseURL + 'file?yb_id=' + download_link);
    var index = $(me).data('id');
    var url_yb = 'https://www.youtube.com/watch?v=' + playlist[index];
    count = Object.keys(playlist).length - 1;
    var audio = document.getElementById('audio-30133-2');
    var source = document.getElementById('audioSource');
    if (source.src == url_yb) {
        if (audio.paused) {
            audio.play();
            $(me).html(pause_icon);
            $(me).closest('.cover-yb').css('background-color', 'rgba(0, 0, 0, 0.09)')
        } else {
            audio.pause();
            $(me).closest('.cover-yb').css('background-color', '#ffffff');
            $(me).html(yb_icon)
        }
    } else {
        source.src = url_yb;
        audio.src = url_yb;
        audio.load();
        audio.play();
        $('.play-yb').html(yb_icon);
        $('.cover-yb').css('background-color', '#ffffff');
        $(me).closest('.cover-yb').css('background-color', 'rgba(0, 0, 0, 0.09)');
        $(me).html(pause_icon)
    }
    audio.addEventListener('ended', function(e) {
        index++;
        if (index <= count) {
            loadTrack(index)
        } else if (index > count) {
            index = 0;
            loadTrack(0);
            $('html, body').animate({
                scrollTop: $('#player_' + index).position().top
            }, 'slow')
        }
    });
    audio.addEventListener('error', function(e) {
        index++;
        if (index <= count) {
            loadTrack(index)
        } else if (index > count) {
            index = 0;
            loadTrack(0);
            $('html, body').animate({
                scrollTop: $('#player_' + index).position().top
            }, 'slow')
        }
    });
    loadTrack = function(index) {
        url_yb = 'https://www.youtube.com/watch?v=' + playlist[index];
        source.src = url_yb;
        audio.src = url_yb;
        audio.load();
        audio.play();
        var download_link = $('#player_' + index).data('baseid');
        $('.tbl_active_download').attr('href', baseURL + 'file?yb_id=' + download_link);
        $('.play-yb').html(yb_icon);
        $('.cover-yb').css('background-color', '#ffffff');
        $('#player_' + index).closest('.cover-yb').css('background-color', 'rgba(0, 0, 0, 0.09)');
        $('#player_' + index).html(pause_icon)
    }
};
