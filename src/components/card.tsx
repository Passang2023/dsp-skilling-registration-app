import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { Text, TouchableOpacity, View } from '@/components/ui';

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  date?: string;
};

export const Card = ({ title, id, imageUrl, date }: Props) => {
  return (
    <Link href={`/course/${id}`} asChild>
      <TouchableOpacity activeOpacity={0.6}>
        <ImageBackground
          imageStyle={styles.image}
          source={{ uri: imageUrl }}
          style={styles.imageContainer}
        >
          <View style={styles.textContainer}>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
              {title}
            </Text>
            {date ? <Text style={styles.date}>{date}</Text> : null}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    borderRadius: 10,
    opacity: 0.6,
  },
  imageContainer: {
    backgroundColor: '#888',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    padding: 12,
  },
  date: {
    color: '#fff',
    padding: 12,
    marginBottom: 12,
  },
});
