import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import facts from './facts/facts.json';

const today = new Date();
const koreaToday = new Date(today.getTime() + 9 * 60 * 60 * 1000); // KST 보정
const dateOnly = koreaToday.toISOString().split('T')[0];
console.log(dateOnly);
const fact = facts.find(f => f.date === dateOnly);

export default function App() {
  console.log(fact);
  console.log(today);
  return (
    <View style={styles.container}>
      {fact ? (
        <>
          <Text style={styles.title}>{fact.title}</Text>
          <Text style={styles.content}>{fact.content}</Text>
        </>
      ) : (
        <Text>오늘의 지식이 준비되지 않았어요 😥</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  content: { fontSize: 18, textAlign: 'center' },
});
