/* video youtube */

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

let player;

function onYouTubeIframeAPIReady() {
  document.getElementById('video-cover').addEventListener('click', function () {
    
    document.getElementById('player').style.display = 'block'; 

    // Créer le lecteur YouTube
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '1bxrFRP2F74',
      playerVars: {
        autoplay: 1,
        controls: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0
    }
});
});
}

const btnFermer = document.querySelector(".btn-fermer");
const cadreVideo = document.querySelector(".cadre_video")
btnFermer.addEventListener('click', function () {
    cadreVideo.style.display = 'none'; 
    player.stopVideo();
});