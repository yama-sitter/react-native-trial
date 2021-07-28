import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppBar } from './src/components/AppBar';
import { MemoList } from './src/components/MemoList';
import { CircleButton } from './src/components/CircleButton';
import { FloatingAction } from './src/components/FloatingAction';

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

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList items={memoListItems} />
      <FloatingAction>
        <CircleButton>+</CircleButton>
      </FloatingAction>
    </View>
  );
}
