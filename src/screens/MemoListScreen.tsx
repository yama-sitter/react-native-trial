import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppBar } from '../components/AppBar';
import { MemoList } from '../components/MemoList';
import { FloatingAction } from '../components/FloatingAction';
import { CircleButton } from '../components/CircleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});

const memoListItems = [
  { title: '買い物リスト1', date: new Date() },
  { title: '買い物リスト2', date: new Date() },
];

export const MemoListScreen: React.FC = () => (
  <View style={styles.container}>
    <AppBar />
    <MemoList items={memoListItems} />
    <FloatingAction right={40} bottom={40}>
      <CircleButton>+</CircleButton>
    </FloatingAction>
  </View>
);
