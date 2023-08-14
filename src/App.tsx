import React from 'react';
import ComponentA from './user/component_a/Component_A';
import { CssBaseline, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <ComponentA />
      </Container>
    </React.Fragment>
  );
};

export default App;

// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import DynamicDialog from './dialogbox/DynamicDialog';

// function App() {
//   const [dialogOpen, setDialogOpen] = useState(false);

//   const handleOpenDialog = () => {
//     setDialogOpen(true);
//   };



//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//   };

//   const handleSave = (data: string) => {
//     console.log("Data:", data);
//   };

//   const openDialogButton = (
//     <Button variant="contained" color="primary" onClick={handleOpenDialog}>
//       Open Dialog
//     </Button>
//   );

//   return (
//     <div style={{ padding: '2rem', textAlign: 'center' }}>
//       <h1>Dynamic Dialog Example</h1>
//       {openDialogButton}
//       <DynamicDialog
//         open={dialogOpen}
//         onClose={handleCloseDialog}
//         heading="Custom Heading"
       
//         actionBtnTitle='Save'
//         closeBtnTitle='Cancel'
//         onSave={handleSave} // Pass the handleSave function as a prop
//       />

//       {/* <PrimaryButton
//           title='Add'
//           onClick={()=>handleSave("data")}
//       /> */}
//     </div>


//   );
// }

// export default App;
