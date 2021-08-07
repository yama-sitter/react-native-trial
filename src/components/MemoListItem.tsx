import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native';
import { CloseButton } from '../components/CloseButton';
import { formatDate } from '../lib';

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

export type Props = {
  title: string;
  date: Date;
  onPress?: () => void;
  onDelete?: () => void;
};

export const MemoListItem: React.FC<Props> = ({
  title,
  date,
  onPress,
  onDelete,
}) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{formatDate(date)}</Text>
    </View>
    <View>
      <CloseButton size={24} onPress={onDelete} />
    </View>
  </TouchableOpacity>
);
