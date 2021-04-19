import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import stores from './stores';
import {ApplicationNavigator} from './navigators';

const App = () => {
  return (
    // <Provider store={stores}>
      <ApplicationNavigator />
    // </Provider>
  );
};

export default App;
