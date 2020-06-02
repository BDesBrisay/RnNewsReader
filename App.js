import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './components/Home';
import SignIn from './components/SignIn';

import { BottomNavigation } from 'react-native-paper';

class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home', color: '#32a875' },
      { key: 'signin', title: 'Sign In', icon: 'account_circle', color: '#4e32a8' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    signin: SignIn,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        shifting={true}
        labeled={true}
      />
    );
  }
}

/*
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: () => <Icon name="home" />
          }}
        />
        <Tab.Screen name="SignIn" component={SignIn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/

export default App;
