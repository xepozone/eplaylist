    $(function() {
        $("#search_music").autocomplete({
            source: function(request, response) {
                $.ajax({
                    url: g_sges + request.term,
                    cache: !0,
                    dataType: "jsonp",
                    async: !0,
                    crossDomain: !0,
                    method: "GET",
                    headers: {
                        "accept": "application/json",
                    },
                    success: function(data) {
                        response($.map(data[1], function(value, key) {
                            return {
                                label: value,
                                value: value,
                            }
                        }))
                    }
                })
            },
            select: function(event, ui) {
                var url = ui.item.label;
                $(location).attr("href", baseURL + 'download/' + site_name + '-' + url.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/\s\s+/g, ' ').split(' ').join('-'))
            },
            minLength: 2,
            delay: 100,
        })
    })