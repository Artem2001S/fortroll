import React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';

const MontserratText: React.FC<TextProps> = ({...props}) => {
  return <Text {...props}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  default: {},
});

export default MontserratText;
