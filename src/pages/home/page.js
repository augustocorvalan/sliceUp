import React from "react";
import { connect } from 'react-redux';
import styles from "./style.css";

//components
import Row from 'common/components/Row';
import Col from 'common/components/Col';
import VideoPlayer from 'common/components/VideoPlayer';
import ClipPlaylist from 'common/components/ClipPlaylist';

//actions
import { addClip, deleteClip, saveClip, updateClip } from 'actions/clips';
import { setVideoRange, setVideoMetadata} from 'actions/video';

//utils
import { clearEvent, getValuesFromEvent } from 'utils/eventUtils';

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		//whether a clip is selected or edited is a UI concern and thus can be stored in state
		//rather than in our app wide store
		this.state = { selectedClip: null, editedClip: null };
	}

	clearEvent(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	handleLoadedMetadata(e) {
		clearEvent(e);
		const video = e.target;
		const { duration, videoWidth, videoHeight } = video;

		this.props.setVideoMetadata({ duration, width: videoWidth, height: videoHeight });
	}

	handleClipAdd(e) {
		clearEvent(e);
		this.props.addClip.apply(this, getValuesFromEvent(e));
	}

	handleClipDelete(clip, e) {
		clearEvent(e);
		//unselect all clips after delete
		this.setState({ selectedClip: null });
		//fire action
		this.props.deleteClip(clip);
	}

	handleClipEdit(clip, e) {
		clearEvent(e);
		this.setState({ editedClip: clip.id });
	}

	handleClipSave(clip, e) {
		clearEvent(e);

		//only save clip if it hasn't already been saved
		if (!clip.isSaved) {
			this.props.saveClip(clip);
		}
	}

	handleClipSelect(clip) {
		const { start, end } = clip;
		this.setState({ selectedClip: clip.id });

		this.props.setVideoRange({ start, end });
	}

	handleClipUpdate(clip, e) {
		clearEvent(e);
		const [ name, start, end ] = getValuesFromEvent(e);

		this.setState({ editedClip: null });
		this.props.updateClip({...clip, name, start, end});
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
							selectedClip={this.state.selectedClip}
							editedClip={this.state.editedClip}
							videoDuration={this.props.video.duration}
							onClipAdd={::this.handleClipAdd}
							onClipDelete={::this.handleClipDelete}
							onClipEdit={::this.handleClipEdit}
							onClipSave={::this.handleClipSave}
							onClipSelect={::this.handleClipSelect}
							onClipUpdate={::this.handleClipUpdate}
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
	{ addClip, deleteClip, saveClip, updateClip, setVideoRange, setVideoMetadata }
)(HomePage);
