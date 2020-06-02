import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './components/Home';
import SignIn from './components/SignIn';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabsNav() {
  return (
    <Tab.Navigator
      style={{ backgroundColor: 'tomato' }}
      backgroundColor="green"
      shifting={false}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarColor: '#157efb',
          tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />
        }}
      />
      <Tab.Screen 
        name="account" 
        component={SignIn} 
        options={{
          tabBarColor: '#0471f2',
          tabBarIcon: ({ color }) => <Icon name="account" size={24} color={color} />
        }}
      />
      <Tab.Screen 
        name="Pay Online" 
        component={SignIn} 
        options={{
          tabBarColor: '#0471f2',
          tabBarIcon: ({ color }) => <Icon name="credit-card" size={24} color={color} />
        }}
      />
      <Tab.Screen 
        name="Usage" 
        component={SignIn} 
        options={{
          tabBarColor: '#0471f2',
          tabBarIcon: ({ color }) => <Icon name="gauge" size={24} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Tabs" component={TabsNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
