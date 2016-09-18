import React from "react";
import map from 'lodash.map';
import { connect } from 'react-redux';
import styles from "./style.css";

//components
import Row from 'common/components/Row';
import Col from 'common/components/Col';
import VideoPlayer from 'common/components/VideoPlayer';
import ClipPlaylist from 'common/components/ClipPlaylist';

//actions
import { addClip, deleteClip } from 'actions/clips';
import { setVideoRange, setVideoMetadata} from 'actions/video';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	handleLoadedMetadata(e) {
		e.preventDefault();
		const video = e.target;
		const { duration, videoWidth, videoHeight } = video;

		this.props.setVideoMetadata({ duration, width: videoWidth, height: videoHeight });

		this.props.addClip('Full Video', 0, duration);
	}

	handleAddClip(e) {
		e.preventDefault();
		let data = map($(e.target).serializeArray(), 'value');
		this.props.addClip.apply(this, data);
	}

	handleSelectClip(clip) {
		const { start, end } = clip;
		this.props.setVideoRange({ start, end });
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
						<VideoPlayer 
							{...this.props.video}
							className='center-align' 
							onLoadedMetadata={::this.handleLoadedMetadata} />
					</Col>
				</Row>
				<Row>
					<Col>
						<ClipPlaylist 
							videoDuration={this.props.video.duration}
							onAddClip={::this.handleAddClip}
							onClipDelete={::this.props.deleteClip}
							onClipSelect={::this.handleSelectClip}
							clips={this.props.clips} />
					</Col>
				</Row>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		clips: state.clips,
		video: state.video
	}
}

export default connect(
	mapStateToProps,
	{ addClip, deleteClip, setVideoRange, setVideoMetadata }
)(HomePage);
