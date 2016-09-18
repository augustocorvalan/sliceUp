import React from 'react';

const Button = ({text, ...otherProps}) => (
	<a className="waves-effect waves-light btn" {...otherProps}>{text}</a>
);

export default Button;