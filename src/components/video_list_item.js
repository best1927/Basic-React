import React from 'react';

const VideoListItem = (props) => {
    const vdo = props.video;
    const onSelect = props.onVideoSelect;
    console.log(vdo);
    const imgUrl = vdo.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onSelect(vdo)} className='list-group-item'>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-obj" src={imgUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{vdo.snippet.title}</div>
                </div>
            </div>

        </li>

    );
}

export default VideoListItem;