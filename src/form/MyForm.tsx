import React from 'react';
import {Container,Grid,Typography, TextField,IconButton,Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RuleInputs from './Rules';
import { useForm, useFieldArray } from 'react-hook-form';


interface RuleData {
  name: string;
  description: string;
  isAdmin: boolean;
}

interface FormData {
  name: string;
  email: string;
  userType: 'admin' | 'non-admin';
  rules: RuleData[];
}

const FormWithValidation: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    register,
  } = useForm<FormData>();

  const userType = watch('userType', 'non-admin');

  const { fields, append, remove } = useFieldArray<FormData, 'rules'>({
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
              helperText={errors.email ? 'Email is required' : ''}
            />
          </Grid>
          <RuleInputs
            fields={fields}
            remove={remove}
            control={control}
            commonErrorMessage={''}
            userType={userType} // Pass the userType value here
          />
          <Grid item xs={12}>
            <IconButton onClick={() => append({ name: '', description: '', isAdmin: false })}>
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