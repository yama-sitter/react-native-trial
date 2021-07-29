import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export type Props = {
  body: string;
};

export const MemoDetailContent: React.FC<Props> = ({ body }) => (
  <ScrollView style={styles.wrapper}>
    <Text style={styles.body}>{body}</Text>
  </ScrollView>
);
