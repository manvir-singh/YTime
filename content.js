// Injects script.js into the webpage via a script tag.

var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);
