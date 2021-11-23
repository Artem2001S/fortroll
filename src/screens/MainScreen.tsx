import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import Logo from '../components/Logo';
import MontserratText from '../components/MontserratText';
import {cases} from '../data';
import {dark, dark2} from '../style/colors';

const {width} = Dimensions.get('window');

const ITEM_SIZE = width * 0.8;
const CASE_IMAGE_SIZE = ITEM_SIZE * 0.5;

const MainScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.root}>
      <Logo rootStyle={styles.logo} />
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={cases}
        renderItem={({item, index}) => {
          return (
            <>
              <View
                style={[
                  styles.caseRoot,
                  index === cases.length - 1 && styles.lastCase,
                ]}>
                <View style={styles.caseBackground} />
                <Image
                  style={styles.caseImage}
                  source={require('../assets/case.png')}
                />
                <MontserratText style={styles.caseTitle}>
                  {item.title}
                </MontserratText>
                <Button
                  rootStyle={styles.caseButton}
                  onPress={() => {
                    nav.navigate('Roll' as never, item as never);
                  }}>
                  Открыть
                </Button>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: dark,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',

    marginTop: 55,
    marginBottom: 20,
  },
  list: {
    paddingTop: 33,
  },
  caseRoot: {
    width: ITEM_SIZE,
    alignSelf: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  caseTitle: {
    color: 'white',
    fontSize: 21,
    marginTop: 11,
  },

  lastCase: {
    marginBottom: 130,
  },
  caseImage: {
    width: CASE_IMAGE_SIZE,
    height: CASE_IMAGE_SIZE,
  },
  caseButton: {
    marginTop: 30,
    marginBottom: 38,
  },
  caseBackground: {
    position: 'absolute',
    backgroundColor: dark2,
    width: 286,
    height: 275,
    borderRadius: 37,
    bottom: 0,
  },
});

export default MainScreen;
