import { useRouter } from 'expo-router';
import * as React from 'react';
import { FlatList } from 'react-native';

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
];

type CourseItemProps = {
  course: Course;
};

function CourseItem({ course }: CourseItemProps) {
  const router = useRouter();
  return (
    <View className="flex-row items-center border-b border-neutral-200 p-4">
      {course.imageUrl && (
        <Image
          source={{ uri: course.imageUrl }}
          className="mr-4 size-16 rounded"
          accessibilityLabel={`${course.title} image`}
        />
      )}
      <View className="flex-1">
        <Text className="text-lg font-semibold text-neutral-900">
          {course.title}
        </Text>
        <Text className="mt-1 text-sm text-neutral-500">
          {course.description}
        </Text>
      </View>
      <Button
        className="ml-2"
        onPress={() => router.push(`/course/${course.id}`)}
        accessibilityLabel={`View details for ${course.title}`}
      >
        View
      </Button>
    </View>
  );
}

export default function CourseListScreen() {
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
