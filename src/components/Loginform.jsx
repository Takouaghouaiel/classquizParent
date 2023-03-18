import React from 'react';
// import { makeStyles, ThemeProvider } from '@mui/styles';
// import { createTheme } from "@mui/material/styles"

import Button from '@mui/material/Button';
import background from '../images/background.png';
import { useTheme, Typography, DialogContentText } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './Header';
import { useState } from 'react';
import {
  FormControl,
  TextField,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import '../App.css';
import { Stack } from 'react-bootstrap';

function MyCustomLabel(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <label htmlFor={props.htmlFor}>{props.children}</label>
      <span>{props.value}</span>
    </Box>
  );
}

function Login() {
  //  const classes = useStyles();
  //  const { palette } = useTheme();

  // popup
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // dialogcode
  const [showDialogcode, setShowDialogcode] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [passwordBorderColor, setPasswordBorderColor] = useState('#707070');

  const [showDialog, setShowDialog] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowDialog(true); // Show the dialog
  };

  const [usertel, setUsertel] = useState('');
  const [password, SetPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleInputChange = event => {
    console.log(event.target.value);
    setUsertel(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // retrieve the both values
    const formData = new FormData(event.target);
    const usertel = formData.get('usertel');
    const password = formData.get('password');
    console.log(formData);

    // handle form submission here
    // Make API call

    fetch('https://api.omega.classquiz.tn/v2/auth/login', {
      method: 'POST',
      // body: formData,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: usertel,
        password: password,
      }),
    })
      .then(response => response.json())

      .then(data => {
        if (
          data.message === 'login_failed' ||
          data.message === 'The given data was invalid.'
        ) {
          setPasswordError('نسيت كلمة السّر');
          setPasswordBorderColor('red');
        } else {
          setMessage('Login successful!');
          console.log('login success');
          console.log(window.location.hostname);
          localStorage.setItem('token',data.token.token)
          localStorage.setItem('user',JSON.stringify(data.user))
        }
      })

      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <div className="">
      {/* <h1>Login Page</h1>
        <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
          Login page
       </Typography> */}

      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        {' '}
        <Header />
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'space-between',
              justifyContent: 'flex-start',
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto',
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
              '@media screen and (min-width: 768px) and (min-height : 768px)': {
                width: '50%',
                height: '50%',
                padding: '40px',
              },
            }}
          >
            <FormControl
              fullWidth
              sx={{
                alignItems: 'end',
              }}
            >
              <MyCustomLabel htmlFor="username">:رقم الهاتف</MyCustomLabel>

              <TextField
                id="usertel"
                name="usertel"
                type="tel"
                onChange={handleInputChange}
                InputProps={{
                  sx: {
                    border: '2px solid #707070',
                    borderColor: 'theme.palette.secondary.grey',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    width: '327px',
                    height: '48px',
                  },
                }}
              />
            </FormControl>

            <FormControl
              fullWidth
              sx={{
                alignItems: 'end',
              }}
            >
              <MyCustomLabel htmlFor="password"> :كلمة السّر </MyCustomLabel>
              <TextField
                id="password"
                name="password"
                onChange={event => {
                  SetPassword(event.target.value);
                  setPasswordError('');
                  setPasswordBorderColor('#707070');
                }}
                // value={password}
                InputProps={{
                  sx: {
                    border: `2px solid ${passwordBorderColor}`,
                    borderRadius: '10px',
                    marginBottom: '20px',
                    borderColor: 'theme.palette.secondary.grey',
                    width: '327px',
                    height: '48px',
                  },
                }}
                type="password"
                autoComplete="current-password"
              />

              {passwordError && (
                <span onClick={() => setShowDialog(true)}>
                  <Typography
                    variant="body2"
                    color="error"
                    justifyContent="space-between"
                  >
                    {passwordError}
                  </Typography>
                </span>
              )}

              {showDialog && (
                <Dialog
                  sx={{ display: 'flex',flexDirection:'column', justifyContent: 'center' ,'& .MuiDialogContent-root': {
                    textAlign: 'center',
                  },
                  '@media (max-width: 600px)': {
                    '& .MuiDialogTitle-root, & .MuiDialogActions-root': {
                      textAlign: 'center',
                    }},
                 }}
                  onClose={() => setShowDialog(false)}
                  open={showDialog}
                >
                  <DialogTitle >
                    تمّ إرسال رمز تأكيد إلى رقم هاتفك تحتاج استعماله ككلمة مرور
                  </DialogTitle>
                  <DialogContent >
                    <DialogContentText>
                      سيتصل بك فريق الدعم في أقرب وقت ممكن لمتابعة عملية
                      الإشتراك
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => {
                        setShowDialog(false);
                        setShowDialogcode(true);
                      }}
                      type="submit"
                      sx={{
                        alignSelf: 'center',
                        background:
                          'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
                        width: '200px',
                        height: '35px',
                        borderRadius: '10px',
                        color: 'white',
                        
                        
                        // mr: {
                        //   xs: 'auto',
                        //   sm: '130px',
                        // },
                        // mb: '15px',
                      }}
                    >
                      <span>أنا موافق</span>
                    </Button>
                  </DialogActions>
                </Dialog>
              )}
              {showDialogcode && (
                <Dialog
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onClose={() => setShowDialogcode(false)}
                  open={showDialogcode}
                >
                  <DialogTitle sx={{ alignSelf: 'center' }}>
                    {' '}
                    رمز الدخول الشخصي
                  </DialogTitle>
                  <DialogContent sx={{ alignSelf: 'center' }}>
                    <DialogContentText>
                      <input type="number" placeholder="code PIN" />
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => setShowDialogcode(false)}
                      type="submit"
                      sx={{
                        background:
                          'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
                        width: '200px',
                        height: '35px',
                        borderRadius: '10px',
                        color: 'white',
                      }}
                    >
                      <span>تسجيل الدخول </span>
                    </Button>
                  </DialogActions>
                </Dialog>
              )}
            </FormControl>
            <MyCustomLabel sx={{ alignSelf: 'center' }}>
              <Button
                onClick={handleOpen}
                type="submit"
                sx={{
                  marginBottom: '10px',
                  background:
                    'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
                  width: '327px',
                  height: '48px',
                  borderRadius: '10px',
                }}
                variant="contained"
                color="primary"
              >
                تسجيل الدخول{' '}
              </Button>
            </MyCustomLabel>
          </Box>
        </form>
      </Box>
    </div>
  );
}

export default Login;
