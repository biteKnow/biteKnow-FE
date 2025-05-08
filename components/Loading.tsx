import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator color="#3498db" size="large" />
    <Text style={styles.loadingText}>지식을 요리하는 중...</Text>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555'
  },
});

export default Loading; 