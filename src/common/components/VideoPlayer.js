import React from 'react';
import classnames from 'classnames';

const VideoPlayer = ({ className, onLoadedMetadata }) => {
	return (
		<div className={classnames('video-wrapper', className)}>
			<video id='media-video' controls onLoadedMetadata={onLoadedMetadata}>
				<source 
					src='http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4' 
					type='video/mp4' />
			</video>
		</div>
	);
}

export default VideoPlayer;