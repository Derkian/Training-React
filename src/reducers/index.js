import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './userReducers';
import products from './productReducers';

const rootReducer = combineReducers({
  users,
  products,
  routing: routerReducer
});

export default rootReducer;
