import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

player.on('timeupdate', throttle(curentTimeToPlay, 1000));

function curentTimeToPlay(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
