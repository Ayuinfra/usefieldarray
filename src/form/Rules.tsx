import React from 'react';
import { Grid, IconButton, Typography, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';

interface Rule {
  name: string;
  description: string;
}

interface RuleInputsProps {
  fields: Rule[];
  remove: (index: number) => void;
  control: any;
  commonErrorMessage: string; 
}

const FieldError: React.FC<{ error?: string }> = ({ error }) => (
    <Typography variant="body2" color="error">
      {error || ''}
    </Typography>
  );
  

const RuleInputs: React.FC<RuleInputsProps> = ({ fields, remove, control, commonErrorMessage }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h6" gutterBottom>
        Rules
      </Typography>
      {fields.map((field, index) => (
        <Grid container spacing={1} key={index}>
          <Grid item xs={5}>
            <Controller
              name={`rules.${index}.name`}
              control={control}
              defaultValue={field.name}
              rules={{ required: 'Name is required' }} 
              render={({ field, fieldState }) => (
                <>
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                  />
                  {fieldState?.invalid && (
                    <FieldError error={fieldState.error?.message} />
                  )}
                </>
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <Controller
              name={`rules.${index}.description`}
              control={control}
              defaultValue={field.description}
              rules={{ required: 'Description is required' }} 
              render={({ field, fieldState }) => (
                <>
                  <TextField
                    {...field}
                    label="Description"
                    variant="outlined"
                    fullWidth
                  />
                  {fieldState?.invalid && (
                    <FieldError error={fieldState.error?.message} />
                  )}
                </>
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={() => remove(index)} color="secondary">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      {fields.length === 0 && <Typography color="error">{commonErrorMessage}</Typography>}
    </Grid>
  );
};

export default RuleInputs;
