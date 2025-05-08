import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>안녕하세요!</Text>
    <View style={styles.headerButtons}>
      <TouchableOpacity style={styles.iconButton}>
        <Text>🔔</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Text>☰</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#f5f8fa',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
    fontSize: 24,
  },
});

export default Header; 