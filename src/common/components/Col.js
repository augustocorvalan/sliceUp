import React from 'react';
import classnames from 'classnames';

const Col = ({children, s = '12', m = '', l = ''}) => (
	<div className={`col s${s} m${m} l${l}`}>
		{children}
	</div>
);

export default Col;