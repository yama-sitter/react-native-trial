import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { MemoListScreen } from './src/screens/MemoListScreen';
import { MemoDetailScreen } from './src/screens/MemoDetailScreen';
import { MemoCreateScreen } from './src/screens/MemoCreateScreen';
import { MemoEditScreen } from './src/screens/MemoEditScreen';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#467fd3' },
        headerTitleStyle: { color: '#fff' },
        headerTitle: 'Memo App',
        headerTintColor: '#fff',
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen name="MemoList" component={MemoListScreen} />
      <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
      <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
      <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
