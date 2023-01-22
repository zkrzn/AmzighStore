import React, { useEffect } from 'react';
import $ from 'jquery';

function VideoPlayer() {
  useEffect(() => {
    // Handle the mousedown event on the video container
    $('.video-container').on('mousedown', function(e) {
      var width = e.pageX - $(this).offset().left;
      var height = e.pageY - $(this).offset().top;
      $('#myVideo').width(width).height(height);
    });

    // Handle the mouseup event on the video container
    $('.video-container').on('mouseup', function(e) {
      // code to handle the mouseup event
    });

    // Handle the window resize event
    $(window).resize(function() {
      var width = $(window).width();
      $("#myVideo").width(width);
    });
  }, []);

  return (
    <div className="video-container">
      <video id="myVideo" className="w-36 h-36" src="./video.mp4" controls />
    </div>
  );
}

export default VideoPlayer;
