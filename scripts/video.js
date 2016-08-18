var player, videoDone = false;

function initVideoPlayer(videoId) {
  return new YT.Player('video-player', {
    height: '390',
    width: '640',
    videoId: videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {rel: 0}
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}


function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !videoDone) {
    setTimeout(stopVideo, 6000);
    videoDone = true;
  }
}
function stopVideo() {
  if(player) {
    player.stopVideo();
  }
}