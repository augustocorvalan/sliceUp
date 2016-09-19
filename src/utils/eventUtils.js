import map from 'lodash.map';

export const getValuesFromEvent = (e) => map($(e.target).serializeArray(), 'value')
export const clearEvent = (e) => {
	e.preventDefault();
	e.stopPropagation();
};
