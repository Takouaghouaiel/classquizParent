import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
  TextField,
  Grid,
} from '@mui/material';
import {
  FacebookIcon,
  InstagramIcon,
} from '.././components/icons/sidebaricons';

function DashboardSupport() {
  // popup
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Email: ${email}, Message: ${message}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          width="70%"
        >
          <TextField
            direction="rtl"
            placeholder="البريد الإلكتروني "
            value={email}
            type="email"
            onChange={event => setEmail(event.target.value)}
            fullWidth
            style={{ width: '70%', background: 'white' }}
            inputProps={{ dir: 'rtl' }}
            sx={{ border: '2px solid #3BC5CA', borderRadius: '7px' }}
          />
          <TextField
            placeholder="أكتب رسالة "
            value={message}
            onChange={event => setMessage(event.target.value)}
            multiline
            type="text"
            rows={4}
            fullWidth
            style={{ width: '80%', background: 'white' }}
            inputProps={{ dir: 'rtl' }}
            sx={{ border: '2px solid #3BC5CA', borderRadius: '7px' }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              marginBottom: '10px',
              background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
              width: '50%',
              height: '100%',
              borderRadius: '10px',
            }}
            onClick={handleOpen}
          >
            إرسال
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
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
            <DialogTitle>لقد تم إرسال الرسالة بنجاح</DialogTitle>
            <DialogContent>
              <DialogContentText>شكرا على الثقة</DialogContentText>
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
                  background:
                    'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
                  width: '200px',
                  height: '35px',
                  borderRadius: '10px',
                  color: 'white',
                }}
                onClick={handleClose}
              >
                رجوع
              </Button>
            </DialogActions>
          </Dialog>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <a href="https://www.facebook.com/ClassQuiz" target="_blank"> <FacebookIcon /></a>
           
            <a href="https://www.instagram.com/classquiz/" target="_blank"> <InstagramIcon /></a>
          </Grid>
        </Stack>
      </Box>
    </form>
  );
}
export default DashboardSupport;
