import { handleActions } from 'redux-actions';
import { addClip } from 'actions/clips';

export default handleActions({
	[addClip]: (state, action) => {
		const { name, start, end } = action.payload;
		return [...state, { name, start, end }];
	}
}, [])