import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import '../App.css';
import background from '../images/background.png';
import Header from './Header';

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
  const [PasswordError, setPasswordError] = useState('');
  const [PasswordBorderColor, setPasswordBorderColor] = useState('#707070');
  const { login} = useAuth();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const status = await login(usertel, password);
    if (status === 200) {
      handleLogin();
    } else {
      setPasswordError('نسيت كلمة السّر');
      setPasswordBorderColor('red');
    }
  };; 

  const handleLogin = async () => {
    try {
      await login(usertel, password);
      // Redirect to children page if login is successful
    } catch (error) {
      console.error('Error:', error);
      setPasswordError('نسيت كلمة السّر');
      setPasswordBorderColor('red');
    }
  };
  
  
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

  const [showDialog, setShowDialog] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowDialog(true); // Show the dialog
  };
  const [usertel, setUserTel] = useState('');
  const [password, setPassword] = useState('');
  // const { setUserTel, setPassword } = useAuth();

  const handleInputChange = event => {
    console.log(event.target.value);
    setUserTel(event.target.value);
  };



  return (
    <div className="">
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
                  setPassword(event.target.value);
                  // console.log(event.target.value);
                  setPasswordError('');
                  setPasswordBorderColor('#707070');
                }}
                // value={password}
                InputProps={{
                  sx: {
                    border: `2px solid ${PasswordBorderColor}`,
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

              {PasswordError && (
                <span onClick={() => setShowDialog(true)}>
                  <Typography
                    variant="body2"
                    color="error"
                    justifyContent="space-between"
                  >
                    {PasswordError}
                  </Typography>
                </span>
              )}

              {showDialog && (
                <Dialog
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    '& .MuiDialogContent-root': {
                      textAlign: 'center',
                    },
                    '@media (max-width: 600px)': {
                      '& .MuiDialogTitle-root, & .MuiDialogActions-root': {
                        textAlign: 'center',
                      },
                    },
                  }}
                  onClose={() => setShowDialog(false)}
                  open={showDialog}
                >
                  <DialogTitle>
                    تمّ إرسال رمز تأكيد إلى رقم هاتفك تحتاج استعماله ككلمة مرور
                  </DialogTitle>
                  <DialogContent>
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
