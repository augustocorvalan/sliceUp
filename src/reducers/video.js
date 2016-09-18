import { handleActions } from 'redux-actions';
import { setVideoRange, setVideoMetadata } from 'actions/video';

const initState = {
	start: 0,
	end: 0,
	duration: 0,
	height: 'auto',
	width: 'auto'
};
export default handleActions({
	[setVideoRange]: (state, action) => ({
		...state,	
		start: action.payload.start,
		end: action.payload.end
	}),
	[setVideoMetadata]: (state, action) => ({
		...state,
		...action.payload
	})
}, initState);