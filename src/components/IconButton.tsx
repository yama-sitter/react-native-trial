import React from 'react';
import { Feather } from '@expo/vector-icons';

export type IconName = 'plus' | 'check' | 'edit' | 'close';
type FeatherIconName = 'plus' | 'check' | 'edit-2' | 'x';

export type Props = {
  name: IconName;
  size: number;
  color?: string;
};

const convertNameToIconName = (name: IconName): FeatherIconName => {
  switch (name) {
    case 'edit':
      return 'edit-2';
    case 'close':
      return 'x';
    default:
      return name;
  }
};

export const IconButton: React.FC<Props> = ({ name, ...props }) => (
  <Feather name={convertNameToIconName(name)} {...props} />
);
