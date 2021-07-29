import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { formatDate } from '../lib';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
  },
});

export type Props = {
  title: string;
  date: Date;
};

export const MemoDetailHeader: React.FC<Props> = ({ title, date }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.date}>{formatDate(date)}</Text>
  </View>
);
