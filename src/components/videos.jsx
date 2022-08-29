import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid black;
`;

const videos = [{
  url: "https://www.youtube.com/embed/qytOmvQP3JY?controls=0",
  title: 'Go Figure - Blue/Tesori'
}];

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="560"
      height="315"
    />
  </div>
)

const Videos = () => {
  return (
    <VideoContainer>
    {videos.map((video, idx) => (
      <Video videoSrcURL={video.url} videoTitle={video.title} key={idx} />
    ))}
    </VideoContainer>
  );
}

export default Videos