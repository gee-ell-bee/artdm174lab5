/** clipeo_helpers.js
 *  
 * Helper functions for controlling the clipeo element.
 * by Troy Bennett 7-2010
 *
 */


	function selectVideo(e, clip) 
	{
		clip.src = e.target.value;
		clip.load();
		playVideo(clip);
	}

	function playVideo(clip) 
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

	/* function below written by GLB */
	function stopVideo(clip)
	{
		clip.pause();
		clip.currentTime = 0;
	}

	function muteclip(clip) 
	{
		clip.muted = true;
	}

	function unmuteclip(clip) 
	{
		clip.muted = false;
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

