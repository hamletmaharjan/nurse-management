
import * as authAction from '../actions/authAction';

const INITIAL_STATE = {
  auth: {
    id: '',
    email: '',
    token: '',
  },
  isLoggedIn: false
}

function authReducer(state = INITIAL_STATE, action:any) {
  switch(action.type) {
    case authAction.LOGIN:
      return {
        auth: action.payload,
        isLoggedIn: true,
      }
    case authAction.LOGOUT:
      return {
        auth: {
          id: '',
          email: '',
          token: '',
        },
        isLoggedIn: false
      }
    default:
      return state;
  }
}

export default authReducer;
