import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  floatingAction: {
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
});

export const FloatingAction: React.FC = ({ children }) => (
  <View style={styles.floatingAction}>{children}</View>
);
