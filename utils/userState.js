import AsyncStorage from '@react-native-community/async-storage';

import { companyName } from './constants.js';

const USER_KEY = `${companyName}-user`;

function signIn({ user }) {
  setUser(user);
}

function signOut() {
  removeUser();
}

async function getUser() {
  const user = await AsyncStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : undefined;
};

async function setUser(user) {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

async function removeUser() {
  await AsyncStorage.removeItem(USER_KEY);
}

function isSignedIn() {
  const user = getUser();
  return user ? user : false;
};

module.exports = {
  signIn,
  signOut,
  getUser,
  setUser,
  isSignedIn
};
