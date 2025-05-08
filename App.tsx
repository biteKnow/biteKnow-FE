import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import NoticeBar from './components/NoticeBar';
import FactCard from './components/FactCard';
import Loading from './components/Loading';
import { Fact } from './types';

export default function App() {
  const [fact, setFact] = useState<Fact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];

    fetch('https://raw.githubusercontent.com/biteKnow/biteKnow-FE/main/facts/facts.json')
      .then(res => res.json())
      .then((data: Fact[]) => {
        const todayFact = data.find((f: Fact) => f.date === today);
        setFact(todayFact || null);
      })
      .catch(err => {
        console.error('❌ 오류:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <NoticeBar />
      <View style={styles.contentContainer}>
        <FactCard fact={fact} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f5f8fa',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: -10,
  },
});
