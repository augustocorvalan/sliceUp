import React from 'react';

import Input from 'common/components/Input';

const TextInput = (props) => (
	<div className="input-field">
    	<Input {...props} />
    </div>
);

export default TextInput;