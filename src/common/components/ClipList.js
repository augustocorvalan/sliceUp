import React from 'react';

import Row from 'common/components/Row';
import Col from 'common/components/Col';
import ClipCard from 'common/components/ClipCard';
import AddClipCard from 'common/components/AddClipCard';

//helper functions
const getClips = (clips) => (
	clips.map((clip, i) => 
		<Col key={i} s='3'>
			<ClipCard key={i} clip={clip} />
		</Col>
	)
);

const getAddClipForm = (otherProps) => (
	<Col s='3'>
		<AddClipCard {...otherProps} />
	</Col>
);

const ClipList = ({ clips = [], ...otherProps }) => {
	return (
		<div className='clip-list'>
			<Row>
				{getAddClipForm(otherProps)}
				{getClips(clips)}
			</Row> 
		</div>
	);
}

export default ClipList;