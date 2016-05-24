$('body').on('mousedown', 'td[url]', function(e){
    var click = e.which;
    var url = $(this).attr('url');
    if(url){
        if(click == 1){
            window.location.href = url;
        }
        else if(click == 2){
            window.open(url, '_blank');
            window.focus();
        }
        return true;
    }
});

$('body').on('mousedown', 'tr[url]', function(e){
    var click = e.which;
    var url = $(this).attr('url');
    if(url){
        if(click == 1){
            window.location.href = url;
        }
        else if(click == 2){
            window.open(url, '_blank');
            window.focus();
        }
        return true;
    }
});