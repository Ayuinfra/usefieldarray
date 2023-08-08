import React from 'react';
import { Typography } from '@mui/material';

const FieldError: React.FC<{ error?: string }> = ({ error }) => (
  <Typography variant="body2" color="error">
    {error || ''}
  </Typography>
);

export default FieldError;
