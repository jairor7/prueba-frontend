// Types
import { generalTypes } from '../../types';

// Initial State
const initialState = {
  isLoading: false
};

export default function generalReducer(state = initialState, action) {
  switch (action.type) {
    case generalTypes.LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
}