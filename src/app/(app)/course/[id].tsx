/* eslint-disable prettier/prettier */
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';

import { Button, Text, View } from '@/components/ui';
import type { Course } from '@/types';

// Demo data for course details and trainer
const courses: (Course & {
  trainer: { name: string; about: string };
  location: string;
  startDate: string;
  endDate: string;
})[] = [
    {
      id: '1',
      title: 'React Native Basics',
      description: 'Learn the basics of React Native.',
      imageUrl: 'https://placehold.co/100x100',
      trainer: {
        name: 'Jane Doe',
        about: 'React Native expert with 5+ years experience.',
      },
      location: 'Online',
      startDate: '2025-07-01',
      endDate: '2025-07-15',
    },
    {
      id: '2',
      title: 'Advanced TypeScript',
      description: 'Deep dive into TypeScript for React Native.',
      imageUrl: 'https://placehold.co/100x100',
      trainer: {
        name: 'John Smith',
        about: 'TypeScript evangelist and trainer.',
      },
      location: 'New York',
      startDate: '2025-08-01',
      endDate: '2025-08-10',
    },
    {
      id: '3',
      title: 'Expo & Nativewind',
      description: 'Build beautiful apps with Expo and Nativewind.',
      imageUrl: 'https://placehold.co/100x100',
      trainer: { name: 'Alex Lee', about: 'Expo contributor and UI specialist.' },
      location: 'Remote',
      startDate: '2025-09-01',
      endDate: '2025-09-12',
    },
  ];

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const course = React.useMemo(() => courses.find((c) => c.id === id), [id]);

  if (!course) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Course not found.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1  p-4">
      <Text className="mb-2 text-2xl font-bold">{course.title}</Text>
      <Text className="mb-4 text-base text-neutral-700">
        {course.description}
      </Text>
      <Text className="mt-2 text-lg font-semibold">
        Trainer: {course.trainer.name}
      </Text>
      <Text className="mb-2 text-sm text-neutral-600">
        {course.trainer.about}
      </Text>
      <Text className="mt-2 text-base">Location: {course.location}</Text>
      <Text className="text-base">Start: {course.startDate}</Text>
      <Text className="mb-4 text-base">End: {course.endDate}</Text>
      <Button
        className="mt-6"
        onPress={() => router.push(`/course/apply?id=${course.id}`)}
        accessibilityLabel="Apply to this course"
      >
        Apply to Course
      </Button>
    </View>
  );
}
