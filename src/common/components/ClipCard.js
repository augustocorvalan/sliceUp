import React from 'react';

import Card from 'common/components/Card';

const ClipCard = ({ clip }) => {
	return (
		<div className='clip'>
			<Card> 
				{`${clip.name}: [${clip.start} - ${clip.end}]`}
			</Card>
		</div>
	);
}

export default ClipCard;