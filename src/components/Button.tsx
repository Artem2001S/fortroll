import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { blue } from '../style/colors';
import MontserratText from './MontserratText';

interface ButtonProps {
  onPress?: () => void;
  rootStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ onPress, children, rootStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.root, rootStyle]}>
      <MontserratText style={styles.title}>{children}</MontserratText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    minWidth: 184,
    minHeight: 45,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: blue,
  },
  title: {
    color: 'white', fontFamily: 'Montserrat-Bold',

    fontSize: 18,
  },
});

export default Button;
