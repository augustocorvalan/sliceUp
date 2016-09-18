import { handleActions } from 'redux-actions';
import { addClip, deleteClip, saveClip } from 'actions/clips';

//constants
const SAVED_CLIPS_KEY = 'savedClips';
//TODO: a real world app would make an ajax call here and retrieve/save clips to the server
const initState = JSON.parse(localStorage.getItem(SAVED_CLIPS_KEY)) || [];

export default handleActions({
	[addClip]: (state, action) => {
		const { name, start, end } = action.payload;
		return [...state, { name, start, end }];
	},
	[deleteClip]: (state, action) => {
		const {clipIndex} = action.payload;
		return [
			...state.slice(0, clipIndex),
			...state.slice(clipIndex + 1, state.length)
		];
	},
	[saveClip]: (state, action) => {
		const { clip } = action.payload;
		const savedClips = localStorage.getItem(SAVED_CLIPS_KEY) || [];
		localStorage.setItem(SAVED_CLIPS_KEY, JSON.stringify([...savedClips, clip]));
		return state;
	}
}, initState);