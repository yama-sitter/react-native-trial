import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MemoList: undefined;
  MemoDetail: undefined;
  MemoCreate: undefined;
  MemoEdit: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
