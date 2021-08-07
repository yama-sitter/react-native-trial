import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { MemoList } from '../components/MemoList';
import { FloatingAction } from '../components/FloatingAction';
import { CircleButton } from '../components/CircleButton';
import { IconButton } from '../components/IconButton';

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

type MemoListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'MemoDetail'>,
  StackNavigationProp<RootStackParamList, 'MemoCreate'>
>;
type Props = {
  navigation: MemoListScreenNavigationProp;
};

export const MemoListScreen: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <MemoList
      items={memoListItems}
      onPressItem={() => navigation.navigate('MemoDetail')}
      onDeleteItem={() => Alert.alert('Are you sure?')}
    />
    <FloatingAction right={40} bottom={40}>
      <CircleButton onPress={() => navigation.navigate('MemoCreate')}>
        <IconButton name="plus" size={32} color="#fff" />
      </CircleButton>
    </FloatingAction>
  </View>
);
