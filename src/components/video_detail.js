import React from 'react';

const VideoDetail = ({v}) => {
	//let video = prop.v;
	if(!v){
		return <div>loading...</div>
	};

	const videoId = v.id.videoId;
	const url = 'https://www.youtube.com/embed/' + videoId; 
	//console.log(video);
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>

			<div className="details">
				<div>{v.snippet.title}</div>
				<div>{v.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;