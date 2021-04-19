import {SAVE_APP_CONFIG, SHOW_LOADING, HIDE_LOADING} from './types';
import {appService} from '../../../services/AppService';

export const showLoadingApp = () => ({type: SHOW_LOADING});
export const hideLoadingApp = () => ({type: HIDE_LOADING});
export const saveAppConfig = (appConfig) => ({
  type: SAVE_APP_CONFIG,
  appConfig,
});

export function getAppConfigAction() {
  return async (dispatch) => {
    try {
      const apiReq = await appService.getMultiConfig();
      console.log('getMultiConfigAction ', apiReq);
      if (apiReq && apiReq?.result) {
        await dispatch(saveAppConfig(apiReq?.result));
      } else {
        await dispatch(saveAppConfig(null));
      }
    } catch (error) {
      console.error(error);
    }
  };
}
