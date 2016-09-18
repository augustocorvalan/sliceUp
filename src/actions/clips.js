import { createAction } from 'redux-actions';

export const addClip = createAction('ADD_CLIP', (name, start, end) => ({ name, start, end }));
export const deleteClip = createAction('DELETE_CLIP', (index) => ({ clipIndex: index }));
export const saveClip = createAction('SAVE_CLIP', (clip) => ({ clip }));