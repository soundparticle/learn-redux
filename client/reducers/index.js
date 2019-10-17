import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// NOTE: All Reducers run when any action is fired(dispatched) 
const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;
