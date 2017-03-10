// This script gets injected into the youtube web page.
(function() {
	'use strict';
	
	function getId() {
		return document.location.search.replace("?v=", "")
	}
	
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    function setCookie(name, value, days) {
        var date, expires;
        if (days) {
            date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    window.onbeforeunload = function() {
        var player = document.getElementsByClassName("html5-main-video")[0];
        setCookie("stoppedTime_" + getId(), player.currentTime, 1);
    };
	
	var player = document.getElementsByClassName("html5-main-video")[0];
	player.currentTime = getCookie("stoppedTime_" + getId());
})();