import React from 'react';
import { Controller, Control, useForm } from 'react-hook-form';
import { FormControl, FormLabel, Select, MenuItem, FormHelperText } from '@mui/material';

interface FormValues {
    name: string;
    description: string;
    role: string;
    gender: string;
    languages: string[];
}

interface ControlledSelectProps {
    control: Control<FormValues>;
    name: keyof FormValues;
    label: string;
    rules?: Record<string, any>;
}

const ControlledDropdown: React.FC<ControlledSelectProps> = ({ control, name, label, rules }) => {
    const { formState: { errors } } = useForm<FormValues>();

    return (
        <FormControl fullWidth variant="outlined" margin="normal" error={!!rules?.required && !!errors?.[name]}>
            <FormLabel component="legend">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <Select {...field} label={`Select ${label}`}>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="subadmin">Sub Admin</MenuItem>
                    </Select>
                )}
            />
            {errors?.[name] && <FormHelperText>{errors[name]?.message}</FormHelperText>}
        </FormControl>
    );
};

export default ControlledDropdown;
