import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  floatingAction: {
    position: 'absolute',
  },
  floatingActionButton: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
});

export type Props = {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
};

export const FloatingAction: React.FC<Props> = ({ children, ...position }) => (
  <View style={{ ...styles.floatingAction, ...position }}>
    <View style={styles.floatingActionButton}>{children}</View>
  </View>
);
