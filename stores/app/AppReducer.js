import {SHOW_LOADING, HIDE_LOADING, SAVE_APP_CONFIG} from './action/types';
const initialState = {
  loading: false,
  appConfig: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HIDE_LOADING:
      return {...state, loading: false};
    case SHOW_LOADING:
      return {...state, loading: true};
    case SAVE_APP_CONFIG:
      const appConfig = {
        ...action?.appConfig,
      };

      return {
        ...state,
        appConfig,
      };
    default:
      return state;
  }
}
