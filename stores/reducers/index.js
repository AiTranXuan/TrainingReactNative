import {combineReducers} from 'redux';
 
import AppReducer from '../app/AppReducer'; 

export default combineReducers({
  app: AppReducer,
});
