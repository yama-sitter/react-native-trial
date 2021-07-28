import React from 'react';
import { View } from 'react-native';
import { MemoListItem, Props as MemoListItemProps } from './MemoListItem';

export type Props = {
  items: MemoListItemProps[];
};

export const MemoList: React.FC<Props> = ({ items }) => (
  <View>
    {items.map((item) => (
      <MemoListItem key={item.title} {...item} />
    ))}
  </View>
);
