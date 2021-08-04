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
};

export const TouchableText: React.FC<Props> = React.memo(
  ({ children, ...props }) => (
    <TouchableOpacity>
      <Text style={{ ...styles.text, ...props }}>{children}</Text>
    </TouchableOpacity>
  )
);
