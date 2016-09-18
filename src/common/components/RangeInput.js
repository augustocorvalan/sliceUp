import React from 'react';

import Input from 'common/components/Input';

const RangeInput = ({ type = 'range', label, ...otherProps}) => (
	<div>
		<p>{label}</p>
		<p className="range-field">
			<Input type={type} {...otherProps} />
	    </p>
	</div>
);

export default RangeInput;