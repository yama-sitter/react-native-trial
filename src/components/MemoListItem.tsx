import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  title: {
    fontSize: 16,
    lineHeight: 32,
  },
  date: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});

const formatDate = (d: Date) =>
  `${d.getFullYear()}年${
    d.getMonth() + 1
  }月${d.getDate()}日 ${d.getUTCHours()}:${d.getUTCMinutes()}`.replace(
    /\n|\r/g,
    ''
  );

export type Props = {
  title: string;
  date: Date;
};

export const MemoListItem: React.FC<Props> = ({ title, date }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{formatDate(date)}</Text>
    </View>
    <View>
      <Text>X</Text>
    </View>
  </View>
);