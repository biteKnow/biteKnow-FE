import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Fact } from '../types';

interface FactCardProps {
  fact: Fact | null;
}

const FactCard = ({ fact }: FactCardProps) => {
  if (!fact) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>오늘의 지식이 없어요 🥲</Text>
      </View>
    );
  }

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{ uri: fact.imageUrl || 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4' }}
        style={styles.cardBackground}
        imageStyle={styles.cardBackgroundImage}
        resizeMode="cover"
      >
        <View style={styles.cardContent}>
          <Text style={styles.title} adjustsFontSizeToFit numberOfLines={2}>{fact.title}</Text>
          <Text style={styles.content} adjustsFontSizeToFit={false} numberOfLines={6}>{fact.content}</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>무료 체험하기</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 400,
    maxHeight: 400,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBackgroundImage: {
    borderRadius: 16,
  },
  cardContent: {
    padding: '5%',
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    flex: 0.8,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: '4%', 
    textAlign: 'center',
    color: 'white',
    maxWidth: '100%',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  content: { 
    fontSize: 18, 
    textAlign: 'center',
    color: 'white',
    marginBottom: '6%',
    maxWidth: '100%',
    flexShrink: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  actionButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginTop: 'auto',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
  },
});

export default FactCard; 