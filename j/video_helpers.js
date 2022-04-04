/** clipeo_helpers.js
 *  
 * Helper functions for controlling the clipeo element.
 * by Troy Bennett 7-2010
 *
 */


	function selectMedia(e, clip) 
	{
		clip.src = e.target.value;
		clip.load();
		playVideo(clip);
	}

	function playMedia(clip) 
	{
		clip.play();
	}

	function seekVideo(clip, position) 
	{
		if(!position) position = 0;
		clip.currentTime = position;
		clip.play();
	}

	function pauseVideo(clip) 
	{
		clip.pause();
	}

	function muteVideo(clip) 
	{
		clip.muted = true;
		if(document.getElementById("unmute").disabled = true) {
			document.getElementById("unmute").disabled = false;
		}
		document.getElementById("mute").disabled = true;
	}

	function unmuteVideo(clip) 
	{
		clip.muted = false;
		document.getElementById("mute").disabled = false;
		document.getElementById("unmute").disabled = true;
	}

	function onFinished(clip) 
	{
		clip.currentTime = 0;
	}

	// rate can be a positive integer
	// .5 is half speed, 1 is normal speed,
	// 2 is double speed, etc.
	//Only Safari supports negative values (backwards)
	function playRate(clip, rate) 
	{
		clip.playbackRate = rate;
	}

