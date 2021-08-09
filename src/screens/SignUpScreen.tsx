import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SignUpFormContainer as SignUpForm } from '../components/AuthForm';
import { SignUpFormPromptContainer as SignUpFormPrompt } from '../components/AuthFormPrompt';
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

export const SignUpScreen: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.inner}>
      <View>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <BlankSeparator height={24} />
      <SignUpForm />
      <BlankSeparator height={24} />
      <SignUpFormPrompt />
    </View>
  </View>
);
