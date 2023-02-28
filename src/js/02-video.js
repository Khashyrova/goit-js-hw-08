import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const CURRENT_TIME_KEY =  'videoplayer-current-time';

const onPlay = function(data) {
   const time = data.seconds
   console.log(time)
   localStorage.setItem(CURRENT_TIME_KEY, time);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)));