import React from 'react';

import { StyleProp, ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';

import animations from 'assets/animations';

export type AnimationOptions = keyof typeof animations;

type AnimatedProps = {
  name: AnimationOptions;
  style?: StyleProp<ViewStyle>;
  loop?: boolean;
};

export const Animated = ({ name, style, loop = false }: AnimatedProps) => {
  return <LottieView source={animations[name]} autoPlay loop={loop} style={style} />;
};
