import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ComponentData from './ComponentData';
import { handleCommonClose } from './CommonDialogUtils';
import PrimaryButton from './Button';

interface DynamicDialogProps {
  open: boolean;
  heading: string;
  openDialogButton: React.ReactNode;
  actionBtnTitle: string;
  closeBtnTitle?: string;
  onClose: () => void;
  onSave: (data: any) => void; // onSave callback function
}

const DynamicDialog: React.FC<DynamicDialogProps> = ({
  open,
  onClose,
  heading,
  actionBtnTitle,
  closeBtnTitle,
  onSave, // Received onSave prop
}) => {
  const [componentData, setComponentData] = useState('');

  const handleClose = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleCommonClose(event, onClose),
    [onClose]
  );

  const handleSave = () => {
    onSave(componentData);
  };

  return (
    <Dialog open={open} onClose={onClose} onClick={handleClose}>
      <DialogTitle>
        <Typography variant="h6">{heading}</Typography>
        {closeBtnTitle &&  
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>}
       
      </DialogTitle>
      <DialogContent>
        <ComponentData value={componentData} onChange={setComponentData} />
      </DialogContent>
      <DialogActions>
        {closeBtnTitle && <PrimaryButton title={closeBtnTitle} onClick={onClose} />}
        <PrimaryButton title={actionBtnTitle} onClick={handleSave} />
      </DialogActions>
    </Dialog>
  );
};

export default DynamicDialog;
