import React from 'react';
import classnames from 'classnames';
import once from 'lodash.once';


class VideoPlayer extends React.Component {
	constructor(props) {
		super(props);

		//internally, the video will load every time there is a src update
		//but users of this component will not want a metadata update every time 
		//(since it will be the same metadat) so we will only call the callback once	
		this.onLoadedMetadata = once(this.props.onLoadedMetadata);
	}

	componentDidUpdate(prevProps, prevState) {
		//if the start or end have changed, load/play video	      
		if (prevProps.start !== this.props.start || prevProps.end !== this.props.end) {
			this.video.load();
			this.video.play()
		}
	}

	render() {
		const {start, end, onLoadedMetadata, ...otherProps} = this.props;
		const videoRef = (video) => (this.video = video);
		//set media fragments if we have a start or ending point
		const mediaFragments = start || end ? `#t=${start},${end}` : ''; 

		return (
			<div className={classnames('video-wrapper', this.props.className)}>
				<video 
					id='media-video' 
					ref={videoRef}
					controls 
					preload
					onLoadedMetadata={this.onLoadedMetadata}
					{...otherProps} 
				>
					<source 
						src={`http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4${mediaFragments}`} 
						type='video/mp4' />
				</video>
			</div>
		);
	}
}

export default VideoPlayer;