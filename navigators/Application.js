import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './Root';
import MainNavigator from './Main';
import Screens from '../theme/Screens';

const Stack = createStackNavigator();
const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {/* <Stack.Screen
          name={Screens.Splash.id}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.Login.id}
          component={LoginScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name={Screens.Main.id}
          component={MainNavigator}
          options={{
            headerBackTitleVisible: false,
            title: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
