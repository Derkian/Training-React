import { USERS_LOADING, USERS_FETCH_SUCCESS, USERS_POSTING, USERS_POST_SUCCESS } from '../constants/actionTypes';
import initialState from './initialState';

export default function(state = initialState.users, action) {  
  switch(action.type) {
    case USERS_LOADING:
      return Object.assign({}, state, { isLoading: action.payload  });
    case USERS_POSTING:
      return Object.assign({}, state, { isPosting: action.payload  });
    case USERS_FETCH_SUCCESS:
      return Object.assign({}, state, { isLoading: false, items: action.payload  });
    case USERS_POST_SUCCESS:      
      let obj = Object.assign({}, state, { items: [...state.items, action.payload] }, { isPosting : false}); 
      return obj;
    default:
      return state;
  }
}
