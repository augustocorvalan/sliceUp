import React from 'react';
import omit from 'lodash.omit';

import Row from 'common/components/Row';
import Col from 'common/components/Col';
import ClipCard from 'common/components/ClipCard';

//helper
const getClips = ({ clips, selectedClip, editedClip, ...otherProps}) => {
	return Object.keys(clips).map((key) => {
		const clip = clips[key];
		//full video clip has less functionality than the others
		const clipProps = clip.isFullVideo ? 
			omit(otherProps, ['onClipDelete', 'onClipSave', 'onClipEdit']) 
			: otherProps;

		return (
			<Col key={key} s='3'>
				<ClipCard 
					{...clipProps}
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