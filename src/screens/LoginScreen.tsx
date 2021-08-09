import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LoginFormContainer as LoginForm } from '../components/AuthForm';
import { LoginFormPromptContainer as LoginFormPrompt } from '../components/AuthFormPrompt';
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
});

export const LoginScreen: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.inner}>
      <View>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <BlankSeparator height={24} />
      <LoginForm />
      <BlankSeparator height={24} />
      <LoginFormPrompt />
    </View>
  </View>
);
