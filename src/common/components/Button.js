import React from 'react';

const Button = ({ children, ...otherProps }) => (
	<a className="waves-effect waves-light btn" {...otherProps}>{children}</a>
);

export default Button;