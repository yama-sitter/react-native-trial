import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LogoutButton } from './LogoutButton';

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end',
  },
  appBarInner: {
    position: 'relative',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    marginBottom: 0,
    fontSize: 22,
    lineHeight: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  navigation: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export const AppBar: React.FC = React.memo(() => (
  <View style={styles.appBar}>
    <View style={styles.appBarInner}>
      <Text style={styles.title}>Memo App</Text>
      <View style={styles.navigation}>
        <LogoutButton />
      </View>
    </View>
  </View>
));
