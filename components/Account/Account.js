import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';

const Account = ({ history }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Account PAGE</Text>
      </SafeAreaView>
    </>
  );
};

export default Account;