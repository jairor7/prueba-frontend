import { combineReducers } from 'redux';

import generalReducer from "./general/generalReducer"
import accountReducer from "./account/accountReducer"
import userReducer from "./user/userReducer"

export default combineReducers({
  accountReducer,
  generalReducer,
  userReducer,
});