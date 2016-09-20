import { handleActions } from 'redux-actions';
import omit from 'lodash.omit';
import shortid from 'shortid';
//actions
import { addClip, deleteClip, saveClip, updateClip } from 'actions/clips';
//utils
import { getClipsFromStorage, saveClipsToStorage} from 'utils/clipStorage';

const id = shortid.generate();
//the first clip is the full video and so has no start or end. 
//The flag is to mark it off from the rest of the clips
const firstClip = { [id]: {id, name: 'Full Video', start: '', end: '', isFullVideo: true}};
//TODO: a real world app would make an ajax call here and retrieve/save clips to the server
let savedClips = getClipsFromStorage() || [];
const initState = {...firstClip, ...savedClips};

export default handleActions({
	[addClip]: (state, action) => {
		const id = shortid.generate();
		let { name, start, end } = action.payload;

		//TODO: usually I would hook up actual validation to the forms,
		//I've had good results using 'redux-forms'
		//but that seemed outside the scope of this assignment 
		if (+start > +end) start = end;

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
		const id = clip.id;
		const newClip = {...clip, isSaved: true}

		savedClips = {...savedClips, [id]: newClip};
		saveClipsToStorage(savedClips);

		return {...state, [id]: newClip};
	},
	[updateClip]: (state, action) => {
		const { clip } = action.payload;
		const newClip = { [clip.id]: clip };

		savedClips = {...savedClips, ...newClip };
		saveClipsToStorage(savedClips);

		return {...state, ...newClip };
	}
}, initState);