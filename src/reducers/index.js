import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import clips from 'reducers/clips';
import video from 'reducers/video';
 
export default combineReducers({
	//routing
	routing: routerReducer,
	clips,
	video
});
