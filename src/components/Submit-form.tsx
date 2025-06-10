import React from 'react';
import { useForm } from 'react-hook-form';
// import { ControlledInput } from './ControlledInput'; // assuming your component is named like this
import {
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import { ControlledInput } from './ui';

export default function SubmitForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      ds: '',
      year: '',
      number: '',
      phone: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form Submitted:', data);
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
      >
        <View>
          <ControlledInput
            name="name"
            label="Name"
            placeholder="Enter Your Name"
            control={control}
            rules={{ required: 'Name is required' }}
          />
        </View>

        <View className="flex flex-row w-full gap-2">
          <Text> DID</Text>
          <View className="flex flex-row w-full gap-2">
            <ControlledInput
              name="ds"
              placeholder="DS"
              // className="border border-gray-300 rounded-md p-2"
              control={control}
              rules={{ required: 'DS is required' }}
            />
            <ControlledInput
              name="year"
              placeholder="Year"
              // label="Year"
              // className="w-[25%] bg-white border border-gray-300 rounded-md p-2"
              control={control}
              rules={{ required: 'Year is required' }}
            />
            <ControlledInput
              name="number"
              placeholder="Number"
              // label="Number"
              // className="w-[45%] bg-white border border-gray-300 rounded-md p-2"
              control={control}
              rules={{ required: 'Number is required' }}
            />
          </View>
        </View>

        <View>
          <ControlledInput
            name="phone"
            label="Phone Number"
            placeholder="Phone Number"
            control={control}
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{8,}$/,
                message: 'Phone must be at least 8 digits',
              },
            }}
          />
        </View>

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </KeyboardAvoidingView>
    </>
  );
}
