import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Title } from 'react-native-paper';

const Home = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Title>Home</Title>
      </SafeAreaView>
    </>
  );
};

export default Home;