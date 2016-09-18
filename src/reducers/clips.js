import { handleActions } from 'redux-actions';
import { addClip, deleteClip } from 'actions/clips';

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
	}
}, [])