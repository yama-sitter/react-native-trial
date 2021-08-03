import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { AppBar } from '../components/AppBar';
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
  button: {
    backgroundColor: '#467fd3',
    borderRadius: 4,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#fff',
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
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Submit</Text>
        </View>
      </View>
      <BlankSeparator height={24} />
      <View style={styles.prompt}>
        <Text style={styles.promptText}>Not Registered?</Text>
        <View style={styles.promptLinkTextWrapper}>
          <Text style={[styles.promptText, styles.promptLinkText]}>
            Sign up here!!
          </Text>
        </View>
      </View>
    </View>
  </View>
);
