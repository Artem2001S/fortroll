import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import MontserratText from './MontserratText';
import {blue} from '../style/colors';

interface LogoProps {
  rootStyle?: StyleProp<ViewStyle>;
}

const Logo: React.FC<LogoProps> = ({rootStyle}) => {
  return (
    <View style={[styles.root, rootStyle]}>
      <MontserratText style={styles.title}>FORTROLL</MontserratText>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: blue,
    width: 160,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontFamily:'Montserrat-ExtraBold',
    fontSize: 24,
  },
});

export default Logo;
