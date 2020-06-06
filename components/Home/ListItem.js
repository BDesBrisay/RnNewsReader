import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';

const { width } = Dimensions.get('window');

const ListItem = ({
  text,
  subtext,
  onClick,
  rightIcon,
  leftIcon,
  ...rest
}) => {
  return (
    <TouchableRipple
      onClick={onClick}
      {...rest}
    > 
      <View style={styles.contain}>
        {leftIcon ?
          <View style={styles.leftIcon}>
            {leftIcon}
          </View>
        : ''}
        <View style={styles.textContain}>
          {text && <Text style={styles.text}>{text}</Text>}
          {subtext && <Text style={styles.subtext}>{subtext}</Text>}
        </View>
        {rightIcon ?
          <View style={styles.rightIcon}>
            {rightIcon}
          </View>
        : ''}
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  contain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  leftIcon: {
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContain: {
    flex: 1
  },
  text: {
    fontSize: 14
  },
  subtext: {
    color: '#444',
    fontSize: 12,
    marginTop: 3
  },
  rightIcon: {
    minWidth: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ListItem;