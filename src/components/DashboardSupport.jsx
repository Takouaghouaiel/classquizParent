import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { makeStyles } from 'tss-react/mui';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  InputBase,
} from '@mui/material';

const useStyles = makeStyles()(theme => {
  return {
    root: {
      color: theme.palette.primary.main,
    },
    inputbase: {
      border: '2px solid #3BC5CA',
      borderRadius: '7px',
    },
  };
});

function DashboardSupport() {
  const { classes } = useStyles();

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
      <div
        style={{
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
          <InputBase
            direction="rtl"
            placeholder="البريد الإلكتروني "
            value={email}
            type="email"
            onChange={event => setEmail(event.target.value)}
            fullWidth
            style={{ width: '70%' }}
            inputProps={{ dir: 'rtl' }}
            className={classes.inputbase}
          />
          <InputBase
            placeholder="أكتب رسالة "
            value={message}
            onChange={event => setMessage(event.target.value)}
            multiline
            type="text"
            rows={4}
            fullWidth
            style={{ width: '80%' }}
            inputProps={{ dir: 'rtl' }}
            className={classes.inputbase}
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
              <DialogContentText>
              شكرا على الثقة
              </DialogContentText>
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
        </Stack>
      </div>
    </form>
  );
}
export default DashboardSupport;
