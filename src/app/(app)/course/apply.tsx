import { useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';

import { useApplyToCourse } from '@/api/course/use-apply-course';
import { Button, Input, Text, View } from '@/components/ui';

export default function CourseApplyFormScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [did, setDid] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const { mutate, isPending } = useApplyToCourse();

  function handleSubmit() {
    mutate(
      { courseId: id ?? '', name, did, phone },
      {
        onSuccess: () => {
          router.replace('/');
        },
      }
    );
  }

  return (
    <View className="flex-1 p-4">
      <Text className="mb-4 text-xl font-bold">Apply to Course</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Your Name"
        className="mb-3"
        accessibilityLabel="Name"
      />
      <Input
        value={did}
        onChangeText={setDid}
        placeholder="DID"
        className="mb-3"
        accessibilityLabel="DID"
      />
      <Input
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        className="mb-6"
        accessibilityLabel="Phone Number"
      />
      <Button
        onPress={handleSubmit}
        disabled={isPending || !name || !did || !phone}
        accessibilityLabel="Submit application"
      >
        {isPending ? 'Submitting...' : 'Submit'}
      </Button>
    </View>
  );
}
