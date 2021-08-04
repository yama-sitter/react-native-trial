import React from 'react';
import { View } from 'react-native';

export type Props = {
  height: number;
};

export const BlankSeparator: React.FC<Props> = React.memo(({ height }) => (
  <View style={{ height }} />
));
