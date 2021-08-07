import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3',
  },
});

export type Props = {
  fontSize?: number;
  onPress?: () => void;
};

export const TextLink: React.FC<Props> = React.memo(
  ({ children, onPress, ...props }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ ...styles.text, ...props }}>{children}</Text>
    </TouchableOpacity>
  )
);
