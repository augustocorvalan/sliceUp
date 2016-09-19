import React from 'react';

import Row from 'common/components/Row';
import EditClipForm from 'common/components/EditClipForm';

const EditClipCard = ({ onClipUpdate, clip, ...otherProps}) => (
	<Row>
		<EditClipForm onSubmit={onClipUpdate.bind(this, clip)} {...otherProps} />
	</Row>
);

export default EditClipCard;