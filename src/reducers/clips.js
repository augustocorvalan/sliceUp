import { handleActions } from 'redux-actions';
import omit from 'lodash.omit';
import shortid from 'shortid';
//actions
import { addClip, deleteClip, saveClip, updateClip } from 'actions/clips';
//utils
import { getClipsFromStorage, saveClipsToStorage} from 'utils/clipStorage';

//constants
//TODO: a real world app would make an ajax call here and retrieve/save clips to the server
let savedClips = getClipsFromStorage() || [];

const id = shortid.generate();
//the first clip is the full video and so has no start or end
const firstClip = { [id]: {id, name: 'Full Video', start: '', end: ''}};
const initState = {...firstClip, ...savedClips};

export default handleActions({
	[addClip]: (state, action) => {
		const { name, start, end } = action.payload;
		const id = shortid.generate();
		const newClip = {id, name, start, end};

		return {...state, [id]: newClip };
	},
	[deleteClip]: (state, action) => {
		const {clip} = action.payload;

		//delete from the saved clips
		savedClips = omit(savedClips, clip.id);
		saveClipsToStorage(savedClips);

		//and omit from our app state as well
		return omit(state, clip.id);
	},
	[saveClip]: (state, action) => {
		const { clip } = action.payload;
		savedClips = {...savedClips, [clip.id]: clip};

		saveClipsToStorage(savedClips);

		return state;
	},
	[updateClip]: (state, action) => {
		debugger;
		const newClip = { [action.payload.id]: action.payload };

		//update in clip storage
		savedClips = {...savedClips, ...newClip };
		saveClipsToStorage(savedClips);

		//and in our app state
		return {...state, ...newClip };
	}
}, initState);