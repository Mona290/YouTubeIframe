const videoId = 'XHYfi5hQC3E'; // Replace with your YouTube video ID
const apiKey = 'AIzaSyAWqzf9LkRVu1TvWaVxAYt8RSisrzmeLq8'; // Replace with your YouTube API key

// Fetch video data from the YouTube API
fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process the retrieved video data
    const videoTitle = data.items[0].snippet.title;
    const videoDescription = data.items[0].snippet.description;

    // Update UI with video data (example: set title and description in HTML elements)
    document.getElementById('videoTitle').innerText = videoTitle;
    document.getElementById('videoDescription').innerText = videoDescription;

    // Play the video using the YouTube API player
    const player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: videoId,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the video:', error);
  });
