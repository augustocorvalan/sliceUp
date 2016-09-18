import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import clips from 'reducers/clips';
 
export default combineReducers({
	//routing
	routing: routerReducer,
	clips
});
