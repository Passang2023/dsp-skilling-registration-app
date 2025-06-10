import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import platform, { Platform } from 'react-native';

import { Button, ControlledInput, Text, View } from '@/components/ui';

export const SubmitForm = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 justify-center p-4">
        <View className="items-center justify-center">
          <Text
            testID="form-title"
            className="pb-6 text-center text-4xl font-bold"
          >
            Enter your Information
          </Text>
        </View>

        <ControlledInput name="name" label="Name" />

        <ControlledInput name="email" label="Email" />
        <ControlledInput
          name="phoneNumber"
          label="Phone number"
          placeholder="Phone number"
        />
        <Button label="Submit" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};
