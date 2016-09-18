import React from 'react';
import classnames from 'classnames';
import styles from 'common/styles/clipCard.css';

import Row from 'common/components/Row';
import Col from 'common/components/Col';
import Card from 'common/components/Card';

import EditButton from 'common/components/EditButton';
import SaveButton from 'common/components/SaveButton';
import DeleteButton from 'common/components/DeleteButton';

const ClipCard = ({ clip, isSelected, onClipDelete, onClipEdit, onClipSave, onClick }) => {
	const className = classnames('clip-card', { 'is-selected': isSelected })
	return (
		<div className={className} onClick={onClick}>
			<Card>
				<Row>
					<Col>
						{`${clip.name}: [${clip.start} - ${clip.end}]`}
					</Col>
				</Row>
				<Row>
					<Col s='4'>
						<EditButton onClick={onClipEdit} />
					</Col>
					<Col s='4'>
						<SaveButton onClick={onClipSave} />
					</Col>
					<Col s='4'>
						<DeleteButton onClick={onClipDelete} />
					</Col>
				</Row>
			</Card>
		</div>
	);
}

export default ClipCard;