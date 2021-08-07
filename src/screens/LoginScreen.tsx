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

type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'SignUp'>,
  StackNavigationProp<RootStackParamList, 'MemoList'>
>;
type Props = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const onPressSubmit = () => {
    navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] });
  };
  const onPressSignUpLink = () => {
    navigation.reset({ index: 0, routes: [{ name: 'SignUp' }] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View>
          <Text style={styles.title}>Login</Text>
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
          <Text style={styles.promptText}>Not Registered?</Text>
          <View style={styles.promptLinkTextWrapper}>
            <TextLink fontSize={14} onPress={onPressSignUpLink}>
              Sign up here!
            </TextLink>
          </View>
        </View>
      </View>
    </View>
  );
};
