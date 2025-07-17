

  // API YouTube
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);

  let players = {};
  let playerCount = 0;

  function onYouTubeIframeAPIReady() {
    document.querySelectorAll('.logo-item').forEach((el, index) => {
      const videoId = el.dataset.video;
      const previewDiv = el.querySelector('.video-preview');
      const img = el.querySelector('img');

      
      el.addEventListener('mouseenter', () => {
        img.style.display = 'none';
        previewDiv.style.display = 'block';
        console.log("")
        const playerId = 'yt-player-' + index;
        previewDiv.id = playerId;

        if (!players[playerId]) {
          players[playerId] = new YT.Player(playerId, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
              autoplay: 1,
              mute: 1,
              controls: 0,
              modestbranding: 1,
              rel: 0
            }
          });
        } else {
          players[playerId].playVideo();
        }
      });

      
      el.addEventListener('mouseleave', () => {
        img.style.display = 'block';
        previewDiv.style.display = 'none';
        const playerId = previewDiv.id;
        if (players[playerId]) {
          players[playerId].stopVideo();
        }
      });
    });
  }

  