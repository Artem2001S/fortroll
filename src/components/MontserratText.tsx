import * as React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';

const MontserratText: React.FC<TextProps> = ({...props}) => {
  return <Text {...props} style={[props.style,styles.default]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  default: {
  },
});

export default MontserratText;
