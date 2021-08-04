import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  logoutButton: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export const LogoutButton: React.FC = React.memo(() => (
  <Text style={styles.logoutButton}>ログアウト</Text>
));
