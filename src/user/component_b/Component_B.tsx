import React from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Button } from '@mui/material';
import ControlledTextField from './ControlledTextField';
import ControlledDropdown from './ControlledDropdown'; // Update the import based on your file structure
import ControlledRadioGroup from './ControlledRadioGroup';
import ControlledCheckboxGroup from './ControlledCheckBoxGroup';

interface ComponentBProps {
  onSubmit: (data: FormValues) => void;
}

interface FormValues {
  name: string;
  description: string;
  role: string;
  gender: string;
  languages: string[];
}

const ComponentB: React.FC<ComponentBProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  }: UseFormReturn<FormValues> = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField
        control={control}
        name="name"
        rules={{ required: 'Name is required' }}
      />

      <ControlledTextField
        control={control}
        name="description"
        rules={{ required: 'Description is required' }}
      />

      <ControlledDropdown
        control={control}
        name="role"
        label="Role"
        rules={{ required: 'Role is required' }}
        error={!!errors.role}
        errorMessage={errors.role?.message}
      />

      <ControlledRadioGroup
        control={control}
        errors={errors}
        name="gender"
        options={['male', 'female', 'other']}
        label="Gender"
        rules={{ required: 'Gender is required' }}
      
      />

      <ControlledCheckboxGroup
        control={control}
        name="languages"
        options={['hindi', 'english', 'other']}
        label="Languages"
        rules={{
          validate: (value: string[] | undefined) => {
            if (!value || value.length === 0) {
              return 'At least one language is required';
            }
            return undefined;
          },
        }}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ComponentB;
