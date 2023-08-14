// ControlledDropdown.tsx
import React from 'react';
import { Controller, Control } from 'react-hook-form';
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
    error?: boolean;
    errorMessage?: string;
}

const ControlledDropdown: React.FC<ControlledSelectProps> = ({ control, name, label, rules, error, errorMessage }) => {
    return (
        <FormControl fullWidth variant="outlined" margin="normal" error={error}>
            <FormLabel component="legend">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <Select defaultValue='0' {...field} label={`Select ${label}`}>
                        <MenuItem value="0">please select</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="subadmin">Sub Admin</MenuItem>
                    </Select>
                )}
            />
            {error && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
    );
};

export default ControlledDropdown;
