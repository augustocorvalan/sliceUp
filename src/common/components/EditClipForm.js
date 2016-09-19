import React from 'react';

import ClipForm from 'common/components/ClipForm';

const AddClipForm = ({onUpdate, ...otherProps}) => (
	<ClipForm onSubmit={onUpdate} submitText='Update Clip' {...otherProps} />
);

export default AddClipForm;