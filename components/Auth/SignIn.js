import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';
import { Title, Button, TextInput } from 'react-native-paper';

import { signIn } from '../../utils/userState.js';
import { logoDark } from '../../utils/constants.js';

const SignIn = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image source={logoDark} />
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
              user: { 
                username 
              }
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
          Create Account
        </Button>
      </SafeAreaView>
    </>
  );
};

export default SignIn;