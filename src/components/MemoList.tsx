import React from 'react';
import { View } from 'react-native';
import { MemoListItem, Props as MemoListItemProps } from './MemoListItem';

export type Props = {
  items: MemoListItemProps[];
  onPressItem?: () => void;
  onDeleteItem?: () => void;
};

export const MemoList: React.FC<Props> = React.memo(
  ({ items, onPressItem, onDeleteItem }) => (
    <View>
      {items.map((item) => (
        <MemoListItem
          key={item.title}
          {...item}
          onPress={onPressItem}
          onDelete={onDeleteItem}
        />
      ))}
    </View>
  )
);
