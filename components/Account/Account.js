import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { signOut } from '../../utils/userState.js';

const Account = ({ history }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Account PAGE</Text>
        <Button onPress={() => history.goBack()}>
          Back
        </Button>
        <Button 
          mode="contained" 
          onPress={() => {
            signOut();
            history.push('/');
          }}
        >
          <Text>Sign out</Text>
        </Button>
      </SafeAreaView>
    </>
  );
};

export default Account;