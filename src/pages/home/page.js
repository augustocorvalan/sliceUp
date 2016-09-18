import React from "react";
import map from 'lodash.map';
import { connect } from 'react-redux';
import styles from "./style.css";

//components
import Row from 'common/components/Row';
import Col from 'common/components/Col';
import VideoPlayer from 'common/components/VideoPlayer';
import ClipList from 'common/components/ClipList';

//actions
import { addClip } from 'actions/clips';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { duration: 0 };
	}

	getFirstClip(e) {
		e.preventDefault();
		const duration = e.target.duration;
		this.setState({ duration })
		this.props.addClip('Full Video', 0, duration);
	}

	handleAddClip(e) {
		e.preventDefault();
		let data = map($(e.target).serializeArray(), 'value');
		this.props.addClip.apply(this, data);
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
						<VideoPlayer 
							className='center-align' 
							onLoadedMetadata={::this.getFirstClip} />
					</Col>
				</Row>
				<Row>
					<Col>
						<ClipList 
							videoDuration={this.state.duration}
							onAddClip={::this.handleAddClip}
							clips={this.props.clips} />
					</Col>
				</Row>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		clips: state.clips
	}
}

export default connect(
	mapStateToProps,
	{ addClip }
)(HomePage);
