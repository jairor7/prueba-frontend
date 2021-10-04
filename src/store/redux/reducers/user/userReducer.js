// Types
import { userTypes } from '../../types';

// Initial State
const initialState = {
  usersList: [],
  loggedUser: {},
  posts: [],
  comments: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userTypes.LOGGED_USER:
      return {
        ...state,
        loggedUser: action.loggedUser
      };
    case userTypes.USERS:
      return {
        ...state,
        usersList: action.usersList
      };
    case userTypes.POSTS_USERS:
      return {
        ...state,
        posts: action.posts
      };
    case userTypes.COMMENTS_USERS:
      return {
        ...state,
        comments: action.comments
      };
    default:
      return state;
  }
}