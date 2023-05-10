import React from 'react';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
function ErrorPopup(){
    
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/children/');
  };
    return(
<Dialog
open={showErrorPopup}
onClose={handleCloseErrorPopup}
sx={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiDialogContent-root': {
    textAlign: 'center',
  },
  '@media (max-width: 600px)': {
    '& .MuiDialogTitle-root, & .MuiDialogActions-root': {
      textAlign: 'center',
    },
  },
}}
>
<DialogTitle>اسم الطفل و السنة الدراسية ضرورين لإضافة طفلك </DialogTitle>
<DialogContent>
  <DialogContentText>يمكنك المحاولة ثانيةً</DialogContentText>
</DialogContent>
<DialogActions
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiDialogContent-root': {
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      '& .MuiDialogTitle-root, & .MuiDialogActions-root': {
        textAlign: 'center',
      },
    },
  }}
>
  <Button
    type="submit"
    sx={{
      alignSelf: 'center',
      background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
      width: '200px',
      height: '35px',
      borderRadius: '10px',
      color: 'white',
    }}
    onClick={handleClose}
  >
    أنا موافق
  </Button>
</DialogActions>
</Dialog>

);
}
export default ErrorPopup;
