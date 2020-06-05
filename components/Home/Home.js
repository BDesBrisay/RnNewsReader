import React from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet, Image, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/AntDesign';

import { logoDark } from '../../utils/constants.js';
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
          </View>
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
  },
  list: {
    display: 'flex',
    marginTop: 24
  }
});

export default Home;