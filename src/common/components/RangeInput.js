import React from 'react';

import Input from 'common/components/Input';

const RangeInput = ({ type = 'range', ...otherProps}) => (
	<p className="range-field">
		<Input type={type} {...otherProps} />
    </p>
);

export default RangeInput;