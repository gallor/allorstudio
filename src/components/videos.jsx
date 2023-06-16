import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid black;
`;

const SingleVideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.5%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
`;

const videos = [
  {
    url: "https://www.youtube.com/embed/OO6PaeGyCQU?controls=0",
    title: "Recondita armonia from Tosca by Puccini"
  },
  {
    url: "https://www.youtube.com/embed/6C9BhmJCYJU?controls=0",
    title: "Kendra's Aria from The Cookoff by Shawn Okpebholo"
  }
];

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <SingleVideoFrame>
    <iframe
      style={{ height: '100%', widget: '100%', left: '0', right: '0', position: 'absolute' }}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      height="100%"
      width="100%"
    />
  </SingleVideoFrame>
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