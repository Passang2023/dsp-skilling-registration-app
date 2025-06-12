import React from 'react';
import { SafeAreaView } from 'react-native';
import CourseList from '@/components/Course-list';

export default function index() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50">
      <CourseList />
    </SafeAreaView>
  );
}
