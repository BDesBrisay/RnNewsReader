import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';

const Payments = ({ history }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Payments PAGE</Text>
      </SafeAreaView>
    </>
  );
};

export default Payments;