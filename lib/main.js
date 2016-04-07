var Hls = require("hls.js");
var attachVideojsStreamrootProvider = require('./vjs-hls');

if (!document.createElement('video').canPlayType('application/vnd.apple.mpegURL')) {
    attachVideojsStreamrootProvider(window, window.videojs, Hls);
}
