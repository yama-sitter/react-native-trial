import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { AppBar } from '../components/AppBar';
import { Button } from '../components/Button';
import { TouchableText } from '../components/TouchableText';
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

export const LoginScreen: React.FC = () => (
  <View style={styles.container}>
    <AppBar />
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
        <Button>Submit</Button>
      </View>
      <BlankSeparator height={24} />
      <View style={styles.prompt}>
        <Text style={styles.promptText}>Not Registered?</Text>
        <View style={styles.promptLinkTextWrapper}>
          <TouchableText fontSize={14}>Sign up here!</TouchableText>
        </View>
      </View>
    </View>
  </View>
);
