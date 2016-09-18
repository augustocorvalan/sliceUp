import React from 'react';

const Card = ({ children }) => (
	<div className='card'>
		<div className='card-content'>
			{children}
		</div>
	</div>
);

export default Card;