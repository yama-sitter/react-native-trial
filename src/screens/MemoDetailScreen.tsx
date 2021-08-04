import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppBar } from '../components/AppBar';
import { FloatingAction } from '../components/FloatingAction';
import { CircleButton } from '../components/CircleButton';
import { MemoDetailHeader } from '../components/MemoDetailHeader';
import { MemoDetailContent } from '../components/MemoDetailContent';
import { IconButton } from '../components/IconButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const header = {
  title: '買い物リスト1',
  date: new Date(),
};
const body =
  '買い物リスト\n書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。';

export const MemoDetailScreen: React.FC = () => (
  <View style={styles.container}>
    <AppBar />
    <MemoDetailHeader {...header} />
    <MemoDetailContent body={body} />
    <FloatingAction top={160} right={40}>
      <CircleButton>
        <IconButton name="edit" size={32} color="#fff" />
      </CircleButton>
    </FloatingAction>
  </View>
);
