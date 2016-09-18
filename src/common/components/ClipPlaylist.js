import React from 'react';

import Row from 'common/components/Row';
import Col from 'common/components/Col';
import AddClipCard from 'common/components/AddClipCard';
import ClipList from 'common/components/ClipList';

const ClipPlaylist = ({ onAddClip, videoDuration, ...clipProps }) => {
	return (
		<Row>
			<Col s='3'>
				<AddClipCard onAddClip={onAddClip} videoDuration={videoDuration} />
			</Col>
			<ClipList {...clipProps} />
		</Row>
	);
}

ClipList.defaultProps = {
	clips: [],
	onClipSelect: () => {} 
}

export default ClipPlaylist;