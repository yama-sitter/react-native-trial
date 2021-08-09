import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types';
import { TextLink } from '../components/TextLink';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
  },
  textLinkWrapper: {
    marginLeft: 8,
  },
});

export type ContainerProps = {};

export type Props = {
  questionText: string;
  linkText: string;
  onPressLink?: () => void;
} & ContainerProps;

export const AuthFormPrompt: React.FC<Props> = React.memo(
  ({ questionText, linkText, onPressLink }) => (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{questionText}</Text>
      <View style={styles.textLinkWrapper}>
        <TextLink fontSize={14} onPress={onPressLink}>
          {linkText}
        </TextLink>
      </View>
    </View>
  )
);

export const SignUpFormPromptContainer: React.FC<ContainerProps> = () => {
  const navigation = useNavigation<NavigationProp>();
  const onPressLink = useCallback(() => {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  }, []);

  return (
    <AuthFormPrompt
      {...{
        questionText: 'Already Registered?',
        linkText: 'Login',
        onPressLink,
      }}
    />
  );
};

export const LoginFormPromptContainer: React.FC<ContainerProps> = () => {
  const navigation = useNavigation<NavigationProp>();
  const onPressLink = useCallback(() => {
    navigation.reset({ index: 0, routes: [{ name: 'SignUp' }] });
  }, []);

  return (
    <AuthFormPrompt
      {...{
        questionText: 'Not Registered?',
        linkText: 'Sign up here!',
        onPressLink,
      }}
    />
  );
};
