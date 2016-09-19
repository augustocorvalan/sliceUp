import React from 'react';

import Row from 'common/components/Row';
import Col from 'common/components/Col';
import AddClipCard from 'common/components/AddClipCard';
import ClipList from 'common/components/ClipList';

const ClipPlaylist = ({ onClipAdd, videoDuration, ...clipProps }) => (
	<Row>
		<Col s='3'>
			<Row>
				<AddClipCard onClipAdd={onClipAdd} max={videoDuration} />
			</Row>
		</Col>
		<ClipList videoDuration={videoDuration} {...clipProps} />
	</Row>
)

export default ClipPlaylist;