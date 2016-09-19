import React from 'react';

import SubmitButton from 'common/components/SubmitButton';
import ClipInputs from 'common/components/ClipInputs';

const ClipForm = ({onSubmit, submitText, ...otherProps}) => (
	<form onSubmit={onSubmit}>
		<ClipInputs {...otherProps} />
		<SubmitButton>{submitText}</SubmitButton>
	</form>
);

export default ClipForm;