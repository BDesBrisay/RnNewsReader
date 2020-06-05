import React, { useEffect } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet, Image, Dimensions } from 'react-native';
import { Title, Text, Button, Colors, useTheme } from 'react-native-paper';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/AntDesign';

import { signOut } from '../../utils/userState.js';
import { logoDark } from '../../utils/constants.js';

const { width } = Dimensions.get('window');

const gridItems = [
  {
    route: '/Help',
    label: 'Get Help',
    iconName: 'heart'
  },
  {
    route: '/Payments',
    label: 'Pay Online',
    iconName: 'credit-card'
  },
  {
    route: '/Usage',
    label: 'My Usage',
    iconName: 'dashboard'
  },
  {
    route: '/Devices',
    label: 'My Devices',
    iconName: 'cpu'
  },
  {
    route: '/Settings',
    label: 'Get Help',
    iconName: 'sliders'
  },
  {
    route: '/Account',
    label: 'My Account',
    iconName: 'user'
  },
]

const Home = ({ history }) => {
  useEffect(() => {
    // component did mount
    // fetch data
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.contain}>
          <Image source={logoDark} style={styles.logo} />
          <View style={styles.grid}>
            {gridItems.map((item, i) => (
              <Link
                key={i}
                to={item.route}
                style={styles.gridItem}
                underlayColor="#e8e8e8"
              >
                <>
                  {item.label === 'My Usage' 
                    ? <AIcon name={item.iconName} size={24} />
                    : <Icon name={item.iconName} size={24} />
                  }
                  <Text style={styles.gridText}>{item.label}</Text>
                </>
              </Link>
            ))}
          </View>
          <Title>Home</Title>
          <Button mode="contained" onPress={() => {
            signOut();
            history.push('/');
          }}>
            <Text>Sign out</Text>
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contain: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    marginHorizontal: 'auto',
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 12
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    width: (width - 32) / 2,
    backgroundColor: '#eee',
    marginBottom: 8,
    borderRadius: 6
  },
  gridText: {
    marginTop: 6
  }
});

export default Home;