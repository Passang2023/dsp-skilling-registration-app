import { useRouter } from 'expo-router';
import * as React from 'react';
import { FlatList } from 'react-native';
import CourseItem from './Course-item';

import { Button, Image, Text, View } from '@/components/ui';
import type { Course } from '@/types';

// Demo data, replace with API later
const courses: Course[] = [
  {
    id: '1',
    title: 'React Native Basics',
    description: 'Learn the basics of React Native.',
    imageUrl: 'https://placehold.co/100x100',
  },
  {
    id: '2',
    title: 'Advanced TypeScript',
    description: 'Deep dive into TypeScript for React Native.',
    imageUrl: 'https://placehold.co/100x100',
  },
  {
    id: '3',
    title: 'Expo & Nativewind',
    description: 'Build beautiful apps with Expo and Nativewind.',
    imageUrl: 'https://placehold.co/100x100',
  },
  {
    id: '4',
    title: 'Expo & Nativewind',
    description: 'Build beautiful apps with Expo and Nativewind.',
    imageUrl: 'https://placehold.co/100x100',
  },
  {
    id: '5',
    title: 'Expo & Nativewind',
    description: 'Build beautiful apps with Expo and Nativewind.',
    imageUrl: require('../../assets/ict-literacy.png'),
  },
];

export default function CourseList() {
  return (
    <View className="flex-1 bg-neutral-50">
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseItem course={item} />}
        accessibilityRole="list"
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}
