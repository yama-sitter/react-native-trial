import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { FloatingAction } from '../components/FloatingAction';
import { CircleButton } from '../components/CircleButton';
import { IconButton } from '../components/IconButton';

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

type MemoCreateScreenNavigationProp = StackNavigationProp<RootStackParamList>;
type Props = {
  navigation: MemoCreateScreenNavigationProp;
};

export const MemoCreateScreen: React.FC<Props> = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="height">
    <View style={styles.inputContainer}>
      <TextInput value="" multiline style={styles.input} />
    </View>
    <FloatingAction bottom={40} right={40}>
      <CircleButton onPress={() => navigation.goBack()}>
        <IconButton name="check" size={32} color="#fff" />
      </CircleButton>
    </FloatingAction>
  </KeyboardAvoidingView>
);
