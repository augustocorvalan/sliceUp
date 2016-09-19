import React from 'react';

import Row from 'common/components/Row';
import Col from 'common/components/Col';
import Card from 'common/components/Card';

import EditButton from 'common/components/EditButton';
import SaveButton from 'common/components/SaveButton';
import DeleteButton from 'common/components/DeleteButton';

const InfoClipCard = ({ clip, isSelected, onClipSelect, onClipDelete, onClipSave, onClipEdit }) => (
	<div onClick={onClipSelect.bind(this, clip)}>
		<Row>
			<Col>
				{`${clip.name}: [${clip.start} - ${clip.end}]`}
			</Col>
		</Row>
		<Row>
			<Col s='4'>
				<EditButton onClick={onClipEdit.bind(this, clip)} />
			</Col>
			<Col s='4'>
				<SaveButton onClick={onClipSave.bind(this, clip)} />
			</Col>
			<Col s='4'>
				<DeleteButton onClick={onClipDelete.bind(this, clip)} />
			</Col>
		</Row>
	</div>
);

export default InfoClipCard;