import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NoticeBar = () => (
  <TouchableOpacity style={styles.noticeBar}>
    <Text style={styles.noticeText}>공지: 아이큐비터린 오픈 기념 안내입니다.</Text>
    <Text>›</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  noticeBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  noticeText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
});

export default NoticeBar; 