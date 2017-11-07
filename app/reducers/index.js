import { combineReducers } from 'redux';
import userinfo from './userinfo';
import page from './page';

const reducer = combineReducers({
    userinfo,
    page
});

export default reducer;