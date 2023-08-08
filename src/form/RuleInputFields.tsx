import React from 'react';
import { TextField } from '@mui/material';
import FieldError from './FieldError';

const RuleInputField: React.FC<{
  field: any;
  fieldState: any;
  label: string;
  disabled: boolean;
}> = ({ field, fieldState, label, disabled }) => (
  <>
    <TextField
      {...field}
      label={label}
      variant="outlined"
      fullWidth
      disabled={disabled}
    />
    {!disabled && fieldState?.invalid && (
      <FieldError error={fieldState.error?.message} />
    )}
  </>
);

export default RuleInputField;
