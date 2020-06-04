import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Title, Button } from 'react-native-paper';

const SignUp = ({ history }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Title>SignUp</Title>
        <Button
          mode="contained" 
          onPress={() => history.push('/')}
        >
          Sign In
        </Button>
      </SafeAreaView>
    </>
  );
};

export default SignUp;