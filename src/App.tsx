 import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import MyForm from './form/MyForm';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <MyForm />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;