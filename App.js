import React from 'react';
import { NativeRouter, Route, BackButton } from 'react-router-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AuthRoute from './components/Auth/AuthRoute';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';

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
        </BackButton>
      </NativeRouter>
    </PaperProvider>
  );
}

export default App;
