import { useQuery } from '@tanstack/react-query';

import type { Course } from '@/types';

export async function fetchCourses(): Promise<Course[]> {
  // Replace with your real API endpoint
  const response = await fetch('https://api.example.com/courses');
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return response.json();
}

export function useCourses() {
  return useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });
}
