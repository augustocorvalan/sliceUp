import React from 'react';

import Row from 'common/components/Row';
import Col from 'common/components/Col';
import ClipCard from 'common/components/ClipCard';

//helper
const getClips = ({ clips, selectedClip, editedClip, ...otherProps}) => {
	return Object.keys(clips).map((key) => {
		const clip = clips[key];

		return (
			<Col key={key} s='3'>
				<ClipCard 
					{...otherProps}
					key={key} 
					clip={clip} 
					isSelected={clip.id === selectedClip}
					isEdited={clip.id === editedClip} />
			</Col>
		);
	})
}

const ClipList = (props) => (
	<div className='clip-list'>
		{getClips(props)}
	</div>
);

export default ClipList;