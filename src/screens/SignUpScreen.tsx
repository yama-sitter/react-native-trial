import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Button } from '../components/Button';
import { TextLink } from '../components/TextLink';
import { BlankSeparator } from '../components/BlankSeparator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  inner: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    height: 48,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  buttonWrapper: {
    alignSelf: 'flex-start',
  },
  prompt: {
    flexDirection: 'row',
  },
  promptText: {
    fontSize: 14,
    lineHeight: 24,
  },
  promptLinkTextWrapper: {
    marginLeft: 8,
  },
});

type SignUpScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Login'>,
  StackNavigationProp<RootStackParamList, 'MemoList'>
>;
type Props = {
  navigation: SignUpScreenNavigationProp;
};

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const onPressSubmit = () => {
    navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] });
  };
  const onPressLoginLink = () => {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <BlankSeparator height={24} />
        <View>
          <TextInput style={styles.input} value="Email Address" />
          <BlankSeparator height={16} />
          <TextInput style={styles.input} value="Password" />
        </View>
        <BlankSeparator height={24} />
        <View style={styles.buttonWrapper}>
          <Button onPress={onPressSubmit}>Submit</Button>
        </View>
        <BlankSeparator height={24} />
        <View style={styles.prompt}>
          <Text style={styles.promptText}>Already Registered?</Text>
          <View style={styles.promptLinkTextWrapper}>
            <TextLink fontSize={14} onPress={onPressLoginLink}>
              Login.
            </TextLink>
          </View>
        </View>
      </View>
    </View>
  );
};
