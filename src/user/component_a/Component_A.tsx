import React from 'react';
import { Container, Typography } from '@mui/material';
import ComponentB from '../component_b/Component_B';

const ComponentA: React.FC = () => {
  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <Typography variant="h4">User Details</Typography>
      <ComponentB onSubmit={handleFormSubmit} />
    </Container>
  );
};

export default ComponentA;