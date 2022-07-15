import {LOGIN_ACTION} from '../actions/index.actions';

const login = (state = {}, action) => {
  switch (action.type) {
  case LOGIN_ACTION: {
    return action.payload;
  }
  default:
    return state;
  }
};

export default test;