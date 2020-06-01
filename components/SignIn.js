import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Title } from 'react-native-paper';

const SignIn = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Title>SignIn</Title>
      </SafeAreaView>
    </>
  );
};

export default SignIn;