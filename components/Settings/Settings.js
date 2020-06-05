import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';

const Settings = ({ history }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Settings PAGE</Text>
      </SafeAreaView>
    </>
  );
};

export default Settings;