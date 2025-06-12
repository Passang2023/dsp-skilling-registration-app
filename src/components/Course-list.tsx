import * as React from 'react';
import { FlatList } from 'react-native';

import { View } from '@/components/ui';
import type { Course } from '@/types';

import CourseItem from './course-item';

// Demo data, replace with API later
const courses: Course[] = [
  {
    id: '1',
    title: 'React Native Basics',
    description: 'Learn the basics of React Native.',
    imageUrl:
      'https://desuung.org.bt/wp-content/uploads/2022/05/284465153_170962315368551_7458606490171083865_n.jpg',
  },
  {
    id: '2',
    title: 'Advanced TypeScript',
    description: 'Deep dive into TypeScript for React Native.',
    imageUrl:
      'https://desuung.org.bt/wp-content/uploads/2022/05/284465153_170962315368551_7458606490171083865_n.jpg',
  },
  {
    id: '3',
    title: 'Expo & Nativewind',
    description: 'Build beautiful apps with Expo and Nativewind.',
    imageUrl: 'https://dsp.org.bt/assets/cms/img/carousel-0.jpeg',
  },
  {
    id: '4',
    title: 'Expo & Nativewind',
    description: 'Build beautiful apps with Expo and Nativewind.',
    imageUrl: 'https://dsp.org.bt/assets/cms/img/carousel-0.jpeg',
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
