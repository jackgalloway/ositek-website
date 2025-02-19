/* Ositek Javascript File for my shitty website */

/* Audio stuff */
var bAudioPlaying = false

function toggleAudio() {
	if (bAudioPlaying) {
		$('#backgroundaudio').prop("volume", 0.00);
		bAudioPlaying = false
		document.getElementById("menuitemlinkMuteAudio").classList.remove('active');
		document.getElementById("menuitemlinkMuteAudioIcon").classList.remove('fa-volume-up');
		document.getElementById("menuitemlinkMuteAudioIcon").classList.add('fa-volume-off');
	}
	else {
		$('#backgroundaudio').prop("volume", 0.04);
		document.getElementById('backgroundaudio').play();
		bAudioPlaying = true
		document.getElementById("menuitemlinkMuteAudio").classList.add('active');
		document.getElementById("menuitemlinkMuteAudioIcon").classList.remove('fa-volume-off');
		document.getElementById("menuitemlinkMuteAudioIcon").classList.add('fa-volume-up');
	}
}


//