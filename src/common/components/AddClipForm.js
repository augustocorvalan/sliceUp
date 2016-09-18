import React from 'react';

import RangeInput from 'common/components/RangeInput';
import TextInput from 'common/components/TextInput';
import Row from 'common/components/Row';
import Col from 'common/components/Col';
import SubmitButton from 'common/components/SubmitButton';

//constants
const inputs = [
	{ name: 'name', placeholder: 'Clip Name'},
	{ name: 'start', label: 'Start Time', type:'range'},
	{ name: 'end', label: 'End Time', type:'range'}
];

//helper functions
const getInputs = (videoDuration) => (
	inputs.map((input, i) => {
		let InputComp = input.type === 'range' ? RangeInput : TextInput;

		return (
			<Col s='12' key={i}>
				<InputComp
				min={0}
				max={videoDuration}
				key={i} 
				{...input} />
			</Col>
		)
	})
);

const AddClipForm = ({videoDuration, onAddClip}) => {
	return (
		<Row>
			<form onSubmit={onAddClip}>
				{getInputs(videoDuration)}
				<SubmitButton>Add Clip</SubmitButton>
			</form>
		</Row>
	);
}

export default AddClipForm;