import React from 'react';
import { TextInput } from './TextInput';

export type Props = {
  value: string | undefined;
  onChange?: (value: string) => void;
};

export const EmailInput: React.FC<Props> = ({ value, onChange }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    autoCapitalize="none"
    keyboardType="email-address"
    placeholder="Email Address"
    textContentType="emailAddress"
  />
);
