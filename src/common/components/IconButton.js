import React from 'react';

import Button from 'common/components/Button';
import Icon from 'common/components/Icon';

const IconButton = ({ onClick, children }) => (
	<Button onClick={onClick}>
		<Icon>{children}</Icon>
	</Button>
);

export default IconButton;