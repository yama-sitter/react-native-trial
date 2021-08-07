import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
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

type MemoDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MemoEdit'
>;
type Props = {
  navigation: MemoDetailScreenNavigationProp;
};

export const MemoDetailScreen: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <MemoDetailHeader {...header} />
    <MemoDetailContent body={body} />
    <FloatingAction top={60} right={40}>
      <CircleButton onPress={() => navigation.navigate('MemoEdit')}>
        <IconButton name="edit" size={32} color="#fff" />
      </CircleButton>
    </FloatingAction>
  </View>
);
