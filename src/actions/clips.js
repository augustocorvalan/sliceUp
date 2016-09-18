import { createAction } from 'redux-actions';

export const addClip = createAction('ADD_CLIP', (name, start, end) => ({ name, start, end }));
