import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StatusBar, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/AntDesign';

import { companyName, logoDark, primary } from '../../utils/constants.js';
import ListItem from './ListItem.js';

const { width } = Dimensions.get('window');

const gridItems = [
  {
    route: '/Help',
    label: 'Get Help',
    icon: <Icon name="heart" size={24} />
  },
  {
    route: '/Payments',
    label: 'Pay Online',
    icon: <Icon name="credit-card" size={24} />
  },
  {
    route: '/Usage',
    label: 'Usage',
    icon: <AIcon name="dashboard" size={24} />
  },
  {
    route: '/Devices',
    label: 'Devices',
    icon: <Icon name="cpu" size={24} />
  },
  {
    route: '/Settings',
    label: 'Settings',
    icon: <Icon name="sliders" size={24} />
  },
  {
    route: '/Account',
    label: 'Account',
    icon: <Icon name="user" size={24} />
  },
]

const Home = ({ history }) => {
  const [networkEnabled, setNetworkEnabled] = useState(false);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.contain}>
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
                  {item.icon}
                  <Text style={styles.gridText}>{item.label}</Text>
                </>
              </Link>
            ))}
          </View>
          <View style={styles.list}>
            <ListItem 
              onClick={() => history.navigate('/Help')}
              text="Upgrade &amp; Save"
              subtext="Choose the plan that is right for you"
              leftIcon={<Icon name="bar-chart" size={28} />}
              rightIcon={<Icon name="external-link" size={20} />}
            />
            <ListItem 
              onClick={() => history.navigate('/Help')}
              text="Earn up to $250!"
              subtext={`Refer friends to ${companyName}`}
              leftIcon={
                <View style={styles.moneyIcon}>
                  <Icon name="dollar-sign" size={22} color="white" />
                </View>
              }
              rightIcon={<Icon name="chevron-right" size={20} />}
              style={{ backgroundColor: '#e3f2cb' }}
            />
            <ListItem 
              onClick={() => setNetworkEnabled(!networkEnabled)}
              text={`Network is ${networkEnabled ? 'enabled' : 'disabled'}`}
              leftIcon={<Icon name="wifi" size={28} />}
              rightIcon={
                <Switch 
                  value={networkEnabled}
                  onValueChange={() => setNetworkEnabled(!networkEnabled)}
                  style={{ marginRight: 12 }}
                  color={primary}
                />
              }
            />
            <ListItem 
              onClick={() => history.navigate('/Help')}
              text="Configure security"
              leftIcon={<Icon name="shield" size={28} />}
              rightIcon={<Icon name="chevron-right" size={20} />}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contain: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
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
  },
  list: {
    display: 'flex',
    marginTop: 24
  },
  moneyIcon: {
    backgroundColor: '#4aaf06',
    height: 40,
    width: 40,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Home;