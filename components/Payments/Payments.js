import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Text, Button } from 'react-native-paper';

const Payments = ({ history }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Payments PAGE</Text>
        <Button onPress={() => history.goBack()}>
          Back
        </Button>
      </SafeAreaView>
    </>
  );
};

export default Payments;