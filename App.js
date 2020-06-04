import React from 'react';
import { NativeRouter, Route, BackButton } from 'react-router-native';

import AuthRoute from './components/Auth/AuthRoute';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';

const App = () => {
  return (
    <NativeRouter>
      <BackButton>
        <Route path="/" exact component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <AuthRoute path="/Home" component={Home} />
      </BackButton>
    </NativeRouter>
  );
}

export default App;
