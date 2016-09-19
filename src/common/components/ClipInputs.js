import React from 'react';

import Col from 'common/components/Col';
import RangeInput from 'common/components/RangeInput';
import TextInput from 'common/components/TextInput';

//constants
const inputs = [
	{ name: 'name', placeholder: 'Clip Name'},
	{ name: 'start', label: 'Start Time', type:'range'},
	{ name: 'end', label: 'End Time', type:'range'}
];

//helper functions
const getInputs = ({ max = 0, defaults = {} }) => (
	inputs.map((input, i) => {
		let InputComp = input.type === 'range' ? RangeInput : TextInput;

		return (
			<Col s='12' key={i}>
				<InputComp
					min={0}
					max={max}
					key={i} 
					defaultValue={defaults[input.name]}
					{...input} />
			</Col>
		)
	})
);

const ClipInputs = (props) => (
	<div>
		{getInputs(props)}
	</div>
);

export default ClipInputs;