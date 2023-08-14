import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';

interface FormValues {
    name: string;
    description: string;
    role: string;
    gender: string;
    languages: string[];
}

interface ControlledRadioGroupProps {
    control: Control<FormValues>;
    name: keyof FormValues;
    options: string[];
    label: string;
    rules?: Record<string, any>;
    errors? : any
}

const ControlledRadioGroup: React.FC<ControlledRadioGroupProps> = ({ control, name, options, label, rules,errors }) => {
    console.log(errors)
    //const { formState: { errors } } = useForm<FormValues>();

    return (
        <FormControl fullWidth margin="normal" error={!!errors?.[name]}>
            <FormLabel component="legend">{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <RadioGroup
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                    >
                        {options.map((value) => (
                            <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                        ))}
                    </RadioGroup>
                )}
            />
            {errors?.[name] && <FormHelperText>{errors[name]?.message}</FormHelperText>}
        </FormControl>
    );
};

export default ControlledRadioGroup;
