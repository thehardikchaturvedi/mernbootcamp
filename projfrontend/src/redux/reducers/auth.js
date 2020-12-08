import isEmpty from '../../validation/is-empty';

import { SET_CURRENT_USER ,LOGIN_SUCCESS,USER_LOADED,AUTH_ERROR} from '../actions/types';

const initialState = {
  token:localStorage.getItem('token'),
  isAuthenticated: null,
  loading:true,
  user:null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token',action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated:true,
        loading:false,
        user: action.payload
      };
      
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
