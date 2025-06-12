import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Button } from '@/components/ui'; // Assuming you have a custom Button component
import { useRouter } from 'expo-router';
import type { Course } from '@/types';

type CourseItemProps = {
  course: Course;
};

export default function CourseItem({ course }: CourseItemProps) {
  const router = useRouter();

  return (
    <View className="w-full px-4 py-3">
      <Pressable
        className="w-full rounded-xl shadow-md"
        onPress={() => router.push(`/course/${course.id}`)}
        accessibilityLabel={`View details for ${course.title}`}
      >
        {course.imageUrl && (
          <Image
            source={
              typeof course.imageUrl === 'string'
                ? { uri: course.imageUrl }
                : course.imageUrl
            }
            // source={{ uri: course.imageUrl }}
            // className="h-40 w-full"
            accessibilityLabel={`${course.title} image`}
          />
        )}

        {/* Content */}
        <View className="p-4">
          <Text className="text-xl font-bold text-orange-500">
            {course.title}
          </Text>
          <Text className="mt-2 text-sm text-gray-600">
            {course.description}
          </Text>

          {/* <Button
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
            onPress={() => router.push(`/course/${course.id}`)}
            accessibilityLabel={`View details for ${course.title}`}
          >
            View
          </Button> */}
        </View>
      </Pressable>
    </View>
  );
}
