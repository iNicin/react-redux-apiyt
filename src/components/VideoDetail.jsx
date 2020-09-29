import React from 'react';


import '../style/videoDetail.css'

const VideoDetail = ({video}) => {
    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="main-detail">
            <div className="video-detail-main">
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className="description">
                <h1 className="title-video">{video.snippet.title}</h1>
            </div>
        </div>

    )
};

export default VideoDetail;