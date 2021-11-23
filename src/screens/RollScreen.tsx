import React, {useCallback, useRef, useState} from 'react';
import {RootStackParamList} from '../components/RootNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Dimensions,
  StyleSheet,
  Animated,
  View,
  Easing,
  Pressable,
} from 'react-native';
import {blue, dark, dark2} from '../style/colors';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Pointer from '../components/Pointer';
import MontserratText from '../components/MontserratText';

type RollScreenProps = NativeStackScreenProps<RootStackParamList, 'Roll'>;

const {width, height} = Dimensions.get('window');

const ROULETTE_CONTAINER_WIDTH = width - 60;

function rand(min: number, max: number, step: number) {
  var delta, range, rand;
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }
  if (!step) {
    step = 1;
  }
  delta = max - min;
  range = delta / step;
  rand = Math.random();
  rand *= range;
  rand = Math.floor(rand);
  rand *= step;
  rand += min;
  return rand;
}

const ROULETTE_DIAMETER = ROULETTE_CONTAINER_WIDTH - 40;

const RollScreen: React.FC<RollScreenProps> = ({route}) => {
  const {reward, code} = route.params;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const [result, setResult] = useState<boolean | undefined>(undefined);

  const handleButtonPress = useCallback(() => {
    const isZero = Math.random() > 0.5;

    let random = rand(360 * 10, 360 * 20 * 2, 360);
    if (isZero) {
      random = 90 * 45;
    }

    Animated.timing(rotateAnim, {
      toValue: random,
      duration: 4000,
      easing: Easing.bezier(0, 0.55, 0.25, 1),
      useNativeDriver: true,
    }).start(() => {
      if (isZero) {
        setResult(false);
      } else {
        setResult(true);
      }
      Animated.timing(rotateAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    });
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1deg'],
  });

  return (
    <View style={styles.root}>
      {result !== undefined && (
        <Pressable onPress={() => setResult(undefined)} style={styles.modal}>
          <View style={styles.modalWindow}>
            <MontserratText style={styles.modalText}>
              {result ? code : 'Не повезло'}
            </MontserratText>
            <Button rootStyle={styles.modalBtn}>{'Ок'}</Button>
          </View>
        </Pressable>
      )}
      <Logo rootStyle={styles.logo} />
      <View style={styles.container}>
        <View style={styles.pointer}>
          <Pointer />
        </View>
        <Animated.View
          style={[
            styles.circleRoot,
            {
              transform: [{rotate: spin}],
            },
          ]}>
          <MontserratText style={[styles.text, styles.textTop]}>
            {reward}
          </MontserratText>
          <MontserratText style={[styles.text, styles.textBottom]}>
            {reward}
          </MontserratText>

          <MontserratText style={[styles.text, styles.textLeft]}>
            0
          </MontserratText>
          <MontserratText style={[styles.text, styles.textRight]}>
            0
          </MontserratText>

          <View style={styles.circleBig} />
          <View style={styles.circleMedium} />
          <View style={styles.circleSmall} />
          <View style={styles.circleSmallest} />
        </Animated.View>

        <Button onPress={handleButtonPress} rootStyle={styles.btn}>
          Крутить
        </Button>
      </View>
    </View>
  );
};

export default RollScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: dark,
  },
  modal: {
    position: 'absolute',
    zIndex: 1000,
    width,
    height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWindow: {
    backgroundColor: 'white',
    width: width * 0.75,
    height: 115,
    borderRadius: 24,
    paddingTop: 20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtn: {
    maxWidth: 80,
    width: 80,
    marginTop: 16,
  },
  modalText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  btn: {marginTop: 50},
  container: {
    width: ROULETTE_CONTAINER_WIDTH,
    backgroundColor: dark2,
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 150,
    borderRadius: 17,
  },
  circleRoot: {
    backgroundColor: blue,
    width: ROULETTE_DIAMETER,
    height: ROULETTE_DIAMETER,
    borderRadius: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    position: 'absolute',
    fontSize: 23,
    fontWeight: '900',
    zIndex: 3,
  },
  textLeft: {
    alignSelf: 'flex-start',
    left: 25,
  },
  textRight: {
    right: 25,
    alignSelf: 'flex-end',
  },
  textTop: {
    top: 20,
  },
  textBottom: {
    bottom: 15,
    transform: [{rotate: '180deg'}],
  },
  circleSmallest: {
    position: 'absolute',
    width: ROULETTE_DIAMETER * 0.27,
    height: ROULETTE_DIAMETER * 0.27,
    borderRadius: width,
    backgroundColor: dark2,
  },

  circleSmall: {
    position: 'absolute',
    width: ROULETTE_DIAMETER * 0.4,
    height: ROULETTE_DIAMETER * 0.4,
    borderRadius: width,
    backgroundColor: '#162a49',
  },
  pointer: {
    position: 'absolute',
    zIndex: 22,
    top: 5,
  },
  circleMedium: {
    position: 'absolute',
    width: ROULETTE_DIAMETER * 0.47,
    height: ROULETTE_DIAMETER * 0.47,
    borderRadius: width,
    backgroundColor: '#103c7f',
  },

  circleBig: {
    position: 'absolute',
    width: ROULETTE_DIAMETER * 0.55,
    height: ROULETTE_DIAMETER * 0.55,
    borderRadius: width,
    backgroundColor: '#13315f',
  },
  logo: {marginBottom: 57, marginTop: 57},
});
