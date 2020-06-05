import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';

const Help = ({ history }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>HELP PAGE</Text>
      </SafeAreaView>
    </>
  );
};

export default Help;