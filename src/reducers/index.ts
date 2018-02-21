import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import connectionReducer from './connection';
import hallOfFameReducer from './hall_of_fame';

export default combineReducers({
  routing: routerReducer,
  hallOfFame: hallOfFameReducer,
  connection: connectionReducer,
});
