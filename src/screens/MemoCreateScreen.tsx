import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AppBar } from '../components/AppBar';
import { FloatingAction } from '../components/FloatingAction';
import { CircleButton } from '../components/CircleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

export const MemoCreateScreen: React.FC = () => (
  <KeyboardAvoidingView style={styles.container} behavior="height">
    <AppBar />
    <View style={styles.inputContainer}>
      <TextInput value="" multiline style={styles.input} />
    </View>
    <FloatingAction bottom={40} right={40}>
      <CircleButton>
        <Feather name="check" size={32} />
      </CircleButton>
    </FloatingAction>
  </KeyboardAvoidingView>
);
