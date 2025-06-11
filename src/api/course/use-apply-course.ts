import { useMutation } from '@tanstack/react-query';

export type ApplyCoursePayload = {
  courseId: string;
  name: string;
  did: string;
  phone: string;
};

export type ApplyCourseResponse = {
  success: boolean;
  message: string;
};

async function applyToCourse(
  _payload: ApplyCoursePayload
): Promise<ApplyCourseResponse> {
  const response = await fetch('https://api.example.com/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(_payload),
  });

  if (!response.ok) {
    throw new Error('Failed to apply to course');
  }

  return {
    success: true,
    message: 'Application submitted successfully',
  };
}

export function useApplyToCourse() {
  return useMutation({
    mutationFn: applyToCourse,
  });
}
