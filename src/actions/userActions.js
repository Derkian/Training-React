import { USERS_LOADING, USERS_FETCH_SUCCESS , USERS_POSTING , USERS_POST_SUCCESS } from '../constants/actionTypes';
import { performFetch } from '../constants/apiBase';

export const usersLoading = (isLoading) => {
  return {
    type: USERS_LOADING,
    payload: isLoading
  };
};

export const usersPosting = (isPosting) => {
  return {
    type: USERS_POSTING,
    payload: isPosting
  };
};

export function usersFetchSuccess(items) {
  return {
    type: USERS_FETCH_SUCCESS,
    payload: items
  };
}

export function usersPostSuccess(item) {
  return {
    type: USERS_POST_SUCCESS,
    payload: item
  };
}

export function fetchUsersThunk () {
  return (dispatch) => {
    dispatch(usersLoading(true));

    performFetch('items', { method: 'GET' })
      .then(result => {
        dispatch(usersFetchSuccess(result));
      });
  };
}

export function postUsersThunk(userObject) {
  return (dispatch) => {
    dispatch(usersPosting(true));

    performFetch('items', { method: 'POST' , body : JSON.stringify( userObject ) })
      .then(item => {
        dispatch(usersPostSuccess(item));
      });
  };
}
