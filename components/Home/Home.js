import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Title, Text, Button } from 'react-native-paper';

import { signOut } from '../../utils/userState.js';

const Home = ({ history }) => {
  useEffect(() => {
    // component did mount
    // fetch data
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Title>Home</Title>
        <Button mode="contained" onPress={() => {
          signOut();
          history.push('/');
        }}>
          <Text>Sign out</Text>
        </Button>
      </SafeAreaView>
    </>
  );
};

export default Home;