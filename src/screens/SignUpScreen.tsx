import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { AppBar } from '../components/AppBar';
import { Button } from '../components/Button';
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
  promptLinkText: {
    color: '#467fd3',
  },
});

export const SignUpScreen: React.FC = () => (
  <View style={styles.container}>
    <AppBar />
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
        <Button>Submit</Button>
      </View>
      <BlankSeparator height={24} />
      <View style={styles.prompt}>
        <Text style={styles.promptText}>Already Registered?</Text>
        <View style={styles.promptLinkTextWrapper}>
          <Text style={[styles.promptText, styles.promptLinkText]}>Login.</Text>
        </View>
      </View>
    </View>
  </View>
);
