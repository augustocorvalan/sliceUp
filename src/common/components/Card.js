import React from 'react';
import classnames from 'classnames'

const Card = ({ children, className }) => (
	<div className={classnames('card', className)}>
		<div className='card-content'>
			{children}
		</div>
	</div>
);

export default Card;