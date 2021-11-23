import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInRight, FadeOut, FadeOutLeft, RollInLeft, RollOutLeft, RollOutRight, useAnimatedStyle, useSharedValue, withSpring, ZoomOutDown } from 'react-native-reanimated';
import Button from '../components/Button';
import ExpandIcon from '../components/ExpandIcon';
import Logo from '../components/Logo';
import MontserratText from '../components/MontserratText';
import ToggleIcon from '../components/ToggleIcon';
import { cases } from '../data';
import { blue, dark, dark2 } from '../style/colors';

const { width } = Dimensions.get('window');

const ITEM_SIZE = width * 0.8;
const CASE_IMAGE_SIZE = ITEM_SIZE * 0.5;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const MainScreen = () => {
  const nav = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const show = useSharedValue(0);

  const handleClick = () => {
    show.value = show.value === 0 ? 281 : 0;
  }

  const as = useAnimatedStyle(() => {
    return {
      height: withSpring(show.value, { damping: 20 }),
      opacity: show.value === 0 ? withSpring(0) : withSpring(1)
    }
  })

  const as2 = useAnimatedStyle(() => {
    return {
      bottom: show.value === 0 ? withSpring(0) : withSpring(0)
    }
  })

  return (
    <View style={styles.root}>
      <Logo rootStyle={styles.logo} />
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={cases}
        renderItem={({ item, index }) => {
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
      <AnimatedPressable onPress={() => { setExpanded(!expanded); handleClick(); }} style={[styles.toggle, as2]}>
        <Animated.View style={[styles.toggleIcon]}>
          {expanded ? <ToggleIcon /> : <ExpandIcon />}
        </Animated.View>
        <Animated.View entering={FadeIn.duration(400)}
          exiting={FadeIn.duration(400)}
          style={[styles.content, as]}>

          <MontserratText style={styles.tip}>
            {`Для того чтобы открыть кейс:
1. Выберите кейс, который хотите открыть
2. Нажмите на цену
3. Оплатите
4. Откройте кейс
5. Сделайте скриншот с кодом
6. Активируйте на сайте`}
          </MontserratText>
        </Animated.View>

      </AnimatedPressable>
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
  content: {
    marginTop: 20,
    width,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#131313',
    height: 261,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  tip: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 15
  },
  toggle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleIcon: {
    backgroundColor: blue,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 26
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
    alignItems: 'center',
    marginBottom: 30,
  },

  caseTitle: {
    color: 'white',
    fontSize: 21,
    fontFamily: 'Montserrat-Bold',

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
