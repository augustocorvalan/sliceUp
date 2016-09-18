import React from 'react';

const Input = ({ type = 'text', ...otherProps }) => (
	<input type={type} required className="validate" {...otherProps} />
);

export default Input;