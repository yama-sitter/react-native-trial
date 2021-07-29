import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  floatingAction: {
    position: 'absolute',
  },
});

export type Props = {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
};

export const FloatingAction: React.FC<Props> = ({ children, ...position }) => (
  <View style={{ ...styles.floatingAction, ...position }}>{children}</View>
);
