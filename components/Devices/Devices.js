import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';

const Devices = ({ history }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>DEVICES PAGE</Text>
      </SafeAreaView>
    </>
  );
};

export default Devices;