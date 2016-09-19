import React from 'react';

import ClipForm from 'common/components/ClipForm';

const AddClipForm = ({onClipAdd, ...otherProps}) => (
	<ClipForm onSubmit={onClipAdd} submitText='Add Clip' {...otherProps} />
);

export default AddClipForm;