import React from 'react';


import '../style/videoItem.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className="main-video-item">
            <img className="img-video" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className="video-item">
                <div className="title">{video.snippet.title}</div>
            </div>
        </div>
    );
}
export default VideoItem;