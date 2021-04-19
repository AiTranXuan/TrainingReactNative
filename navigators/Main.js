import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../theme/Variables';
import {Images} from '../theme';
import FastImage from 'react-native-fast-image';
import Screens from '../theme/Screens';
import FavoriteScreen from '../screens/favorite';
import RecentlyScreen from '../screens/recently';
import ContactScreen from '../screens/contact';

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.Favorite.id}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.txtDataHomeTitle,
        labelStyle: {
          textAlignVertical: 'center',
          textAlign: 'center',
          fontSize: 12,
          fontWeight: '500',
        },
        // tabStyle:{fontSize:24},
        // style:{fontSize:26}
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FastImage
              tintColor={color}
              style={{width: size, height: size}}
              source={Images.ic_favorite}
            />
          ),
          title: 'Mục ưa thích',
        }}
        name={Screens.Favorite.id}
        component={FavoriteScreen}
        // listeners={({ navigation, route }) => ({
        //   tabPress: e => {
        //     // Prevent default action
        //     e.preventDefault();

        //     // Do something with the `navigation` object
        //     navigation.navigate('AnotherPlace');
        //   },
        // })}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FastImage
              tintColor={color}
              style={{width: size, height: size}}
              source={Images.ic_recently}
            />
          ),
          title: 'Gần đây',
        }}
        name={Screens.Recently.id}
        component={RecentlyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FastImage
              tintColor={color}
              style={{width: size, height: size}}
              source={Images.ic_profile}
            />
          ),
          title: 'Liên hệ',
        }}
        name={Screens.Contact.id}
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
