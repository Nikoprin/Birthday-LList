import {createStore} from 'redux';
import {combineReducers } from 'redux';
import birthdayListReducer from '../Reducers/BirthdayListReducer';

let reducers = combineReducers({
    birthdayList: birthdayListReducer
})

let store = createStore(reducers);
window.store = store;
export default store;