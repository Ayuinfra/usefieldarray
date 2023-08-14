import React from 'react';
import { Controller, Control, useForm } from 'react-hook-form';
import { FormControl, FormLabel, Checkbox, FormControlLabel, FormHelperText } from '@mui/material';

interface FormValues {
    name: string;
    description: string;
    role: string;
    gender: string;
    languages: string[];
}


interface ControlledCheckboxGroupProps {
    control: Control<any>;
    name: keyof FormValues;
    options: string[];
    label: string;
    rules?: Record<string, any>;
}

const ControlledCheckboxGroup: React.FC<ControlledCheckboxGroupProps> = ({ control, name, options, label, rules }) => {
    const { formState: { errors } } = useForm<FormValues>();

    return (
        <FormControl fullWidth margin="normal" error={!!errors?.[name]}>
            <FormLabel component="legend">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <div>
                        {options.map((option) => (
                            <FormControlLabel
                                key={option}
                                control={<Checkbox {...field} value={option} />}
                                label={option.charAt(0).toUpperCase() + option.slice(1)}
                            />
                        ))}
                    </div>
                )}
            />
            {errors?.[name] && <FormHelperText>{errors[name]?.message}</FormHelperText>}
        </FormControl>
    );
};

export default ControlledCheckboxGroup;
