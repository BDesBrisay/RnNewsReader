import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Title, Text, TouchableRipple } from 'react-native-paper';

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Title>Home</Title>
        <TouchableRipple onPress={() => navigation.navigate('Tabs')}>
          <Text>Tabs</Text>
        </TouchableRipple>
      </SafeAreaView>
    </>
  );
};

export default Home;