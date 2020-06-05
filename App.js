import React from 'react';
import { NativeRouter, Route, BackButton } from 'react-router-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AuthRoute from './components/Auth/AuthRoute';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';
import Help from './components/Help/Help';
import Payments from './components/Payments/Payments';
import Usage from './components/Usage/Usage';
import Devices from './components/Devices/Devices';
import Settings from './components/Settings/Settings';
import Account from './components/Account/Account';

import { primary, accent } from './utils/constants.js';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary,
    accent,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NativeRouter>
        <BackButton>
          <Route path="/" exact component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <AuthRoute path="/Home" component={Home} />
          <AuthRoute path="/Help" component={Help} />
          <AuthRoute path="/Payments" component={Payments} />
          <AuthRoute path="/Usage" component={Usage} />
          <AuthRoute path="/Devices" component={Devices} />
          <AuthRoute path="/Settings" component={Settings} />
          <AuthRoute path="/Account" component={Account} />
        </BackButton>
      </NativeRouter>
    </PaperProvider>
  );
}

export default App;
