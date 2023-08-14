import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextField } from '@mui/material';

interface FormValues {
    name: string;
    description: string;
    role: string;
    gender: string;
    languages: string[];
}

interface ControlledTextFieldProps {
    control: Control<FormValues>;
    name: keyof FormValues;
    rules?: Record<string, any>;
}

const ControlledTextField: React.FC<ControlledTextFieldProps> = ({ control, name, rules }) => (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
            <TextField
                label={name.charAt(0).toUpperCase() + name.slice(1)}
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                {...field}
            />
        )}
    />
);

export default ControlledTextField;
