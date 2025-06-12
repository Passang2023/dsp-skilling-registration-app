import { useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';
import { Image } from 'react-native';
import { Button, Text, View } from '@/components/ui';
import type { Course } from '@/types';
import { ScrollView } from 'moti';

const courses: (Course & {
  trainer: { name: string; about: string };
  location: string;
  startDate: string;
  endDate: string;
})[] = [
  {
    id: '1',
    title: 'React Native Basics',
    description:
      'Learn the basics of React Native. Learn More about the fundamentals of React Native',
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
  {
    id: '4',
    title: 'Expo & Nativewind',
    description: 'Build beautiful apps with Expo and Nativewind.',
    imageUrl: require('../../../../assets/icon.png'),
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
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl text-gray-600">Course not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <View className="bg-white rounded-2xl shadow-md p-5">
        {/* Course Title */}
        <Text className="text-3xl font-bold text-center text-blue-900 mb-4">
          {course.title}
        </Text>

        {/* Image */}
        <View className="mb-5 w-full h-40 overflow-hidden rounded-xl ">
          {typeof course.imageUrl === 'string' ? (
            <Image
              source={{ uri: course.imageUrl }}
              // className="w-full h-40 rounded-xl mb-5"
              resizeMode="cover"
            />
          ) : (
            <Image
              source={course.imageUrl}
              // className="h-40 w-full rounded-xl mb-5"
              resizeMode="contain"
            />
          )}
        </View>

        {/* Description */}
        <Text className="text-xl font-semibold text-orange-500 mb-1">
          About
        </Text>
        <Text className="text-base text-gray-700 mb-4">
          {course.description}
        </Text>

        {/* Trainer */}
        <View className="flex-row items-center mb-4">
          <Text className="text-lg font-semibold text-gray-800">Trainer</Text>
          <Text className="text-base text-gray-700">{course.trainer.name}</Text>
        </View>

        <Text className="text-sm text-gray-500 mb-4">
          {course.trainer.about}
        </Text>

        {/* Details */}
        <View className="space-y-2">
          <Text className="text-base">
            <Text className="font-semibold">Location:</Text> {course.location}
          </Text>
          <Text className="text-base">
            <Text className="font-semibold">Start:</Text> {course.startDate}
          </Text>
          <Text className="text-base">
            <Text className="font-semibold">End:</Text> {course.endDate}
          </Text>
        </View>

        {/* Button */}
        <View className="mt-6 items-center">
          <Button
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl"
            onPress={() => router.push(`/course/apply?id=${course.id}`)}
            accessibilityLabel="Apply to this course"
          >
            Apply to Course
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
