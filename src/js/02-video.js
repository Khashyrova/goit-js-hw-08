import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const CURRENT_TIME_KEY =  'videoplayer-current-time';

const onPlay = function(data) {
   const time = data.seconds.toFixed(2)
   console.log(time)
   localStorage.setItem(CURRENT_TIME_KEY, time);
};

if (localStorage.getItem(CURRENT_TIME_KEY))
   player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)));

player.on('timeupdate', throttle(onPlay, 1000));




