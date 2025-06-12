import { useRouter } from 'expo-router';
import * as React from 'react';
import { ImageBackground } from 'react-native';

import { Pressable, Text, View } from '@/components/ui';
import type { Course } from '@/types';

type CourseItemProps = {
  course: Course;
};

export default function CourseItem({ course }: CourseItemProps) {
  const router = useRouter();

  return (
    <View className="w-full px-4 py-3">
      <Pressable
        className="w-full overflow-hidden rounded-xl shadow-md"
        onPress={() => router.push(`/course/${course.id}`)}
        accessibilityLabel={`View details for ${course.title}`}
      >
        <ImageBackground
          source={
            typeof course.imageUrl === 'string'
              ? { uri: course.imageUrl }
              : course.imageUrl
          }
          style={{ height: 180, width: '100%', justifyContent: 'flex-end' }}
          imageStyle={{ borderRadius: 16 }}
        >
          <View className="absolute inset-0 rounded-xl bg-black/50" />
          <View className="p-4">
            <Text className="text-xl font-bold text-white drop-shadow-md">
              {course.title}
            </Text>
            <Text className="mt-2 text-sm text-white opacity-80">
              {course.description}
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}
