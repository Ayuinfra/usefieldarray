import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import {TextField,Button,Container,Grid, Typography, IconButton,} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RuleInputs from './Rules';

interface FormData {
  name: string;
  email: string;
  rules: Array<{ name: string; description: string }>;
}

const FormWithValidation: React.FC = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rules',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Form with Validation
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              {...register('name', { required: true })}
              error={!!errors.name}
              helperText={errors.name ? 'Name is required' : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              error={!!errors.email}
              helperText={ errors.email ? 'email is required' : ''}
              
            />
          </Grid>
          <RuleInputs fields={fields} remove={remove} control={control} commonErrorMessage={''} />
          <Grid item xs={12}>
            <IconButton onClick={() => append({ name: '', description: '' })}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default FormWithValidation;
