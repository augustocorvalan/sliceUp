import React from 'react';

import Row from 'common/components/Row';
import Col from 'common/components/Col';
import ClipCard from 'common/components/ClipCard';

class ClipList extends React.Component {
	constructor(props) {
		super(props);
		//which clip is selected is a UI concern and thus can be stored in state
		//rather than in our app wide store
		this.state = { selectedClip: 0 };
	}

	handleClipDelete(i, e) {
		e.preventDefault();
		e.stopPropagation();
		//unselect all clips after delete
		this.setState({ selectedClip: -1});
		//fire callback
		this.props.onClipDelete && this.props.onClipDelete(i);
	}

	handleClipSave(clip, e) {
		e.preventDefault();
		e.stopPropagation();

		this.props.onClipSave && this.props.onClipSave(clip);
	}

	handleClick(clip, i, e) {
		e.preventDefault();
		this.setState({ selectedClip: i });
		//trigger callback
		this.props.onClipSelect(clip)
	}

	getClips() {
		const { clips, ...otherProps} = this.props;
		return clips.map((clip, i) => 
			<Col key={i} s='3'>
				<ClipCard 
					{...otherProps}
					key={i} 
					clip={clip} 
					isSelected={i === this.state.selectedClip}
					onClipSave={this.handleClipSave.bind(this, clip)}
					onClick={this.handleClick.bind(this, clip, i)} 
					onClipDelete={this.handleClipDelete.bind(this, i)} />
			</Col>
		)
	}


	render () {
		return (
			<div className='clip-list'>
				{this.getClips()}
			</div>
		);
	}
}

export default ClipList;