import React from 'react';
import VideoListInfo from './video_list_info';

const VideoList = (props) => {
    const videoInfo = props.videos.map((video) => {
        return <VideoListInfo key={video.etag} video={video} />
    })
    return (
        <ul className="col-md-4 list-group">
            {videoInfo}
        </ul>
    );
};

export default VideoList;