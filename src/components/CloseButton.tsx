import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IconButton, Props as IconButtonProps } from './IconButton';

export type Props = Partial<Omit<IconButtonProps, 'name'>> & {
  onPress?: () => void;
};

export const CloseButton: React.FC<Props> = React.memo(
  ({ size, color, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <IconButton name="close" size={size || 16} color={color || '#b0b0b0'} />
    </TouchableOpacity>
  )
);
