import React from 'react';
import { TextInput } from './TextInput';

export type Props = {
  value: string | undefined;
  onChange?: (value: string) => void;
};

export const PasswordInput: React.FC<Props> = ({ value, onChange }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    autoCapitalize="none"
    placeholder="Password"
    secureTextEntry
    textContentType="password"
  />
);
