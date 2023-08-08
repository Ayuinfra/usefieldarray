import React, { useState } from 'react';
import { Grid, IconButton, MenuItem, Select, Typography } from '@mui/material';
import { Controller, Control } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';
import RuleInputField from './RuleInputFields';

interface RuleInputsProps {
  fields: {
    id: string;
    name: string;
    description: string;
    isAdmin: boolean;
  }[];
  remove: (index: number) => void;
  control: Control<any>;
  commonErrorMessage: string;
  userType: 'admin' | 'non-admin';
}

const RuleInputs: React.FC<RuleInputsProps> = ({
  fields,
  remove,
  control,
  commonErrorMessage,
  userType,
}) => {
  const [disabledFields, setDisabledFields] = useState<boolean[]>(
    fields.map((field) => field.isAdmin)
  );

  const handleAdminChange = (index: number, value: string) => {
    const updatedDisabledFields = [...disabledFields];
    updatedDisabledFields[index] = value === 'non-admin';
    setDisabledFields(updatedDisabledFields);
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h6" gutterBottom>
        Rules
      </Typography>
      {fields.map((field, index) => (
      <Grid container key={field.id}>
      {/* Admin Status Dropdown */}
      <Grid item xs={3}>
        <Controller
          name={`rules.${index}.isAdmin`}
          control={control}
          defaultValue={field.isAdmin}
          render={({ field }) => (
            <Select
              {...field}
              variant="outlined"
              onChange={(e) => {
                field.onChange(e);
                handleAdminChange(index, e.target.value);
              }}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="non-admin">Non Admin</MenuItem>
            </Select>
          )}
        />
      </Grid>
      {/* Name Input Field */}
      <Grid item xs={3}>
        <Controller
          name={`rules.${index}.name`}
          control={control}
          defaultValue={field.name}
          rules={{ required: 'Name is required' }}
          render={({ field, fieldState }) => (
            <RuleInputField
              field={field}
              fieldState={fieldState}
              label="Name"
              disabled={disabledFields[index]}
            />
          )}
        />
      </Grid>
      {/* Description Input Field */}
      <Grid item xs={3}>
        <Controller
          name={`rules.${index}.description`}
          control={control}
          defaultValue={field.description}
          rules={{ required: 'Description is required' }}
          render={({ field, fieldState }) => (
            <RuleInputField
              field={field}
              fieldState={fieldState}
              label="Description"
              disabled={disabledFields[index]}
            />
          )}
        />
      </Grid>
      {/* Delete Button */}
      <Grid item xs={2}>
        <IconButton onClick={() => remove(index)} color="secondary">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  ))}
  {/* Display error message if there are no fields */}
      {fields.length === 0 && (
        <Typography color="error">{commonErrorMessage}</Typography>
      )}
    </Grid>
  );
};

export default RuleInputs;

