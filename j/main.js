/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * 
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got this working.
 * @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it to be vanilla JS 
 * with no dependencies. by Troy Bennett 7-2010 (updated 12-2021)
 */

import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        { seconds: 10, callback: askAboutLanguage },
        { seconds: 35, callback: func2 },
        { seconds: 50, callback: func3 }
    ];

    //this activates the cuepoints module.
    // Pass it the ID of the video to watch
    // and the array of cuepoint objects.
    cueTimer.setup("vid", myCues);

    //shortcut variables
    const vid = document.querySelector("#vid");
    const selectList = document.querySelector("#video_select");

    // make the select list control what video format to play
    selectList.addEventListener("change", (e) => {
        selectMedia(e, vid);
    });

    //shortcut variables
    const aud = document.querySelector("#audio");
    const audList = document.querySelector("#audio_select");

    //make the list control what audio plays
    audList.addEventListener("change", (e) => {
        selectMedia(e, aud);
    })
});



//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks
//feel free to rename the functions to be more descriptive of what they do.
function askAboutLanguage() { // pop-up to let user know they can change the sub/captions language from English to Chinese
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Prefer Chinese subtitles?</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        pop.classList.toggle("hide");
    }, 2000);
}

function func2() { //links to where to learn chinese
    document.querySelector("#web").src =
        "https://web.archive.org/web/20200515203419/https://www.languageadvantage.com/learn-to-speak-a-language/learn-to-speak-mandarin-chinese/";
}

function func3() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/JJ_Lin";
}



