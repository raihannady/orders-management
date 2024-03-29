import { produce } from 'immer';

import { SET_LOGIN, SET_TOKEN, SET_USER_DATA } from '@containers/Client/constants';

export const initialState = {
  login: false,
  token: null,
  userData: null,
};

export const storedKey = ['token', 'login', 'userData'];

const clientReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.login = action.login;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
      case SET_USER_DATA:
        draft.userData = action.userData;
        break;
    }
  });

export default clientReducer;
