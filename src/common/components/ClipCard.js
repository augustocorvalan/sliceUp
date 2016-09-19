import React from 'react';
import classnames from 'classnames';
import styles from 'common/styles/clipCard.css';

import InfoClipCard from 'common/components/InfoClipCard';
import EditClipCard from 'common/components/EditClipCard';
import Card from 'common/components/Card';

const ClipCard = ({ clip, videoDuration, isSelected, isEdited, onClipUpdate, ...otherProps }) => (
	<Card className={classnames('clip-card', { 'is-selected': isSelected })}>
		{
			isEdited ? 
				<EditClipCard 
					clip={clip} 
					max={videoDuration} 
					defaults={{ start: clip.start, end: clip.end}} 
					onClipUpdate={onClipUpdate} /> : 
				<InfoClipCard 
					clip={clip} 
					{...otherProps} />
		}
	</Card>
);


export default ClipCard;