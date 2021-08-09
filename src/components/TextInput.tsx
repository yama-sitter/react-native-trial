import React from 'react';
import {
  StyleSheet,
  TextInput as NativeTextInput,
  TextInputProps,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    height: 48,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
});

export type Props = TextInputProps;

export const TextInput: React.FC<Props> = (props) => (
  <NativeTextInput style={styles.input} {...props} />
);
