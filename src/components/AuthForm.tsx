import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types';
import { EmailInput } from './EmailInput';
import { PasswordInput } from './PasswordInput';
import { Button } from '../components/Button';
import { BlankSeparator } from '../components/BlankSeparator';
import { useSignUp, useLogin } from '../services/auth';

const styles = StyleSheet.create({
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
});

export type ContainerProps = {};

export type Props = {
  email: string | undefined;
  password: string | undefined;
  onChangeEmail?: (email: string) => void;
  onChangePassword?: (password: string) => void;
  onSubmit?: () => void;
} & ContainerProps;

export const AuthForm: React.FC<Props> = React.memo(
  ({ email, password, onChangeEmail, onChangePassword, onSubmit }) => (
    <>
      <View>
        <EmailInput value={email} onChange={onChangeEmail} />
        <BlankSeparator height={16} />
        <PasswordInput value={password} onChange={onChangePassword} />
      </View>
      <BlankSeparator height={24} />
      <View style={styles.buttonWrapper}>
        <Button onPress={onSubmit}>Submit</Button>
      </View>
    </>
  )
);

export const SignUpFormContainer: React.FC<ContainerProps> = () => {
  const navigation = useNavigation<NavigationProp>();
  const { email, password, setEmail, setPassword, signUp } = useSignUp();

  const onSubmit = () =>
    useCallback(async () => {
      await signUp();
      navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] });
    }, []);

  return (
    <AuthForm
      {...{
        email,
        password,
        onChangeEmail: setEmail,
        onChangePassword: setPassword,
        onSubmit,
      }}
    />
  );
};

export const LoginFormContainer: React.FC<ContainerProps> = () => {
  const navigation = useNavigation<NavigationProp>();
  const { email, password, setEmail, setPassword, login } = useLogin();

  const onSubmit = () =>
    useCallback(async () => {
      await login();
      navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] });
    }, []);

  return (
    <AuthForm
      {...{
        email,
        password,
        onChangeEmail: setEmail,
        onChangePassword: setPassword,
        onSubmit,
      }}
    />
  );
};
