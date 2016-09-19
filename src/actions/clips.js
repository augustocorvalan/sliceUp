import { createAction } from 'redux-actions';

export const addClip = createAction('ADD_CLIP', (name, start, end) => ({ name, start, end }));
export const deleteClip = createAction('DELETE_CLIP', (clip) => ({ clip }));
export const saveClip = createAction('SAVE_CLIP', (clip) => ({ clip }));
export const updateClip = createAction('UPDATE_CLIP', (id, name, start, end) => ({ id, name, start, end }));