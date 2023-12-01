var audio = new Audio('https://youtu.be/Wy-v-FgiUD8?t=13');
audio.volume = 0.1;
audio.autoplay = true;

$('.trigger').click(function() {
  if (audio.paused == false) {
      audio.pause();
      $('.fa-play').show();
      $('.fa-pause').hide();
      $('.music-card').removeClass('playing');
  } else {
      audio.play();
      $('.fa-pause').show();
      $('.fa-play').hide();
      $('.music-card').addClass('playing');
  }
});