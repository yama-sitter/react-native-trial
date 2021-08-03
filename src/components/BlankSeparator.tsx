import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

export type Props = {
  height: number;
};

export const BlankSeparator: React.FC<Props> = ({ height }) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        separator: {
          height,
        },
      }),
    [height]
  );

  return <View style={styles.separator} />;
};
