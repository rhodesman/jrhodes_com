function Track(src, spriteLength, audioLead) {
  var track = this,
	audio = document.createElement('audio');
	audio.preload = 'auto';
  audio.src = src;
  audio.autobuffer = true;
  audio.load();
  audio.muted = true; // makes no difference on iOS :(
  
  /* This is the magic. Since we can't preload, and loading requires a user's 
     input. So we bind a touch event to the body, and fingers crossed, the 
     user taps. This means we can call play() and immediate pause - which will
     start the download process - so it's effectively preloaded.
     
     This logic is pretty insane, but forces iOS devices to successfully 
     skip an unload audio to a specific point in time.
     first we play, when the play event fires we pause, allowing the asset
     to be downloaded, once the progress event fires, we should have enough
     to skip the currentTime head to a specific point. */
     
  var force = function () {
    audio.pause();
    audio.removeEventListener('play', force, false);
  };
  
  var progress = function () {
    audio.removeEventListener('progress', progress, false);
    if (track.updateCallback !== null) track.updateCallback();
  };
  
  audio.addEventListener('play', force, false);
  audio.addEventListener('progress', progress, false);
  
  var kickoff = function () {
    audio.play();
    document.documentElement.removeEventListener('click', kickoff, true);
  };
  
  document.documentElement.addEventListener('click', kickoff, true);
  
  this.updateCallback = null;
  this.audio = audio;
  this.playing = false;
  this.lastUsed = 0;
  this.spriteLength = spriteLength;
  this.audioLead = audioLead;
}
 
Track.prototype.play = function (position) {
  var track = this,
      audio = this.audio,
      lead = this.audioLead,
      length = this.spriteLength,
      time = lead + position * length,
      nextTime = time + length,
			padding = 1;
      
  clearInterval(track.timer);
  track.playing = true;
  track.lastUsed = +new Date;
  
  audio.muted = false;
  audio.pause();

	update_currentTime(audio, track, time, this);

  track.timer = setInterval(function () {
		//DEBUG document.getElementById('timerp').innerHTML = audio.currentTime + ' - max: ' + nextTime;
    if (audio.currentTime >= nextTime - padding) {
      update_currentTime(audio, track, nextTime - length, this);
    }
  }, 10);
};

function update_currentTime(audio, track, time, player_item) {
  try {
    if (time == 0) time = 0.01; // yay hacks. Sometimes setting time to 0 doesn't play back
    audio.currentTime = time;
    audio.play();
  } catch (e) {
		alert('con catch');
    player_item.updateCallback = function () {
      track.updateCallback = null;
      audio.currentTime = time;
      audio.play();
    };
    audio.play();
  }
}

// myaudiosprite.mp3 is the complete audio sprite
// 1 = the number of tracks, increase this for the desktop
// 1 = the length of the individual audio clip
// 0.25 = the lead on the audio - hopefully zero, but in case any junk is added


// Usage: player.play(position)
