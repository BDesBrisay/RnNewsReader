import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';
import { Title, Button, TextInput } from 'react-native-paper';

import { signIn } from '../../utils/userState.js';
import { companyLogo } from '../../utils/constants.js';

const SignIn = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image source={companyLogo} />
        <Title>SignIn</Title>
        <TextInput 
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput 
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          mode="contained"
          onPress={() => {
            signIn({
              user: { name: 'username' }
            });
            history.push('/Home');
          }}
        >
          Sign In
        </Button>
        <Button
          mode="outlined" 
          onPress={() => history.push('/SignUp')}
        >
          Register
        </Button>
      </SafeAreaView>
    </>
  );
};

export default SignIn;