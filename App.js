import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './components/Home';
import SignIn from './components/SignIn';


const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({}) => <Icon name="home" />
          }}
        />
        <Tab.Screen name="SignIn" component={SignIn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
