import { isSignedIn } from "../../../../utils/accountUtils";

// Initial State
const initialState = {
  loggedIn: isSignedIn()
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}