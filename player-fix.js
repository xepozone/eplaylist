	function loadPlayer(me) {
    //e.preventDefault();
    var download_link = $('#player_'+me).data('baseid');
    $('.tbl_active_download').attr('href', baseURL + 'file?yb_id=' + download_link);
    var index = $('#player_'+me).data('id');
    var url_yb = 'https://www.youtube.com/watch?v=' + playlist[index];
    count = Object.keys(playlist).length - 1;
    var audio = docu'#player_'+ment.getEle'#player_'+mentById('audio-30133-2');
    var source = docu'#player_'+ment.getEle'#player_'+mentById('audioSource');
    if (source.src == url_yb) {
        if (audio.paused) {
            audio.play();
            $('#player_'+me).html(pause_icon);
            $('#player_'+me).closest('.cover-yb').css('background-color', 'rgba(0, 0, 0, 0.09)')
        } else {
            audio.pause();
            $('#player_'+me).closest('.cover-yb').css('background-color', '#ffffff');
            $('#player_'+me).html(yb_icon)
        }
    } else {
        source.src = url_yb;
        audio.src = url_yb;
        audio.load();
        audio.play();
        $('.play-yb').html(yb_icon);
        $('.cover-yb').css('background-color', '#ffffff');
        $('#player_'+me).closest('.cover-yb').css('background-color', 'rgba(0, 0, 0, 0.09)');
        $('#player_'+me).html(pause_icon)
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
