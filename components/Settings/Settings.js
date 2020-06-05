import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text, Button } from 'react-native-paper';

const Settings = ({ history }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Settings PAGE</Text>
        <Button onPress={() => history.goBack()}>
          Back
        </Button>
      </SafeAreaView>
    </>
  );
};

export default Settings;