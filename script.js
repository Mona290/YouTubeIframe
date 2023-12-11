//const videoId = 'XHYfi5hQC3E'; // Replace with your YouTube video ID
const apiKey = 'AIzaSyAWqzf9LkRVu1TvWaVxAYt8RSisrzmeLq8'; // Replace with your YouTube API key

// Fetch video data from the YouTube API
//let apiKey = 'AIzaSyAWqzf9LkRVu1TvWaVxAYt8RSisrzmeLq8'; // Replace with your YouTube API key

    let player; 
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        
      });
    }

    function loadYouTubeAPI() {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
  }
  
    function loadVideo() {
      const videoId = document.getElementById('videoIdInput').value;
    
    if (videoId) {
        player.loadVideoById(videoId);
    } else {
        alert('Please enter a valid YouTube Video ID.');
    }
}
      