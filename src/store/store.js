import {createStore} from 'redux';
import myReducer from '../reducers/reducer';

const store = createStore(myReducer);

export default store;