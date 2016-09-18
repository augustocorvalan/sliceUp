import React from 'react';

import Card from 'common/components/Card';
import AddClipForm from 'common/components/AddClipForm';

const AddClipCard = (props) => (
	<Card>
		<AddClipForm {...props} />
	</Card>
);

export default AddClipCard;