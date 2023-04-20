import React, { useState } from 'react';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import { ArrowBack } from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles()(theme => {
  return {
    inputbase: {
      border: '2px solid #3BC5CA',
      borderRadius: '10px',
      background: 'white',
      width: '100vh',
      maxWidth: 400,
    },
  };
});
const cities = [
  { value: 'Tunis', label: 'تونس' },
  { value: 'Ariana', label: 'أريانة' },
  { value: 'Ben Arous', label: 'بن عروس' },
  { value: 'Manouba', label: 'منوبة' },
  { value: 'Nabeul', label: 'نابل' },
  { value: 'Zaghouan', label: 'زغوان' },
  { value: 'Bizerte', label: 'بنزرت' },
  { value: 'Béja', label: 'باجة' },
  { value: 'Jendouba', label: 'جندوبة' },
  { value: 'Le Kef', label: 'الكاف' },
  { value: 'Siliana', label: 'سليانة' },
  { value: 'Sousse', label: 'سوسة' },
  { value: 'Monastir', label: 'المنستير' },
  { value: 'Mahdia', label: 'المهدية' },
  { value: 'Sfax', label: 'صفاقس' },
  { value: 'Kairouan', label: 'القيروان' },
  { value: 'Kasserine', label: 'القصرين' },
  { value: 'Sidi Bouzid', label: 'سيدي بوزيد' },
  { value: 'Gabès', label: 'قابس' },
  { value: 'Medenine', label: 'مدنين' },
  { value: 'Tataouine', label: 'تطاوين' },
  { value: 'Tozeur', label: 'توزر' },
  { value: 'Kebili', label: 'قبلي' },
  { value: 'Gafsa', label: 'قفصة' },
];
function UpdateparentForm() {
  const { classes } = useStyles();

  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [fullName, setfullName] = React.useState('');
  const [city, setCity] = React.useState('');
  const [gender, setGender] = useState(null);


  // popup
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log('handleOpen triggered');
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/children/');
  };
  const handleMaleClick = () => {
    setGender('1');
  };

  const handleFemaleClick = () => {
    setGender('2');
  };

  const handleChange = event => {
    setCity(event.target.value);
  };

  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  function handleUpdate() {
    console.log('handleUpdate triggered');
    handleUpdateParent();
    handleOpen();
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Email: ${email}`);
  };

  const handleUpdateParent = async () => {
    const token = localStorage.getItem('token');
    try {
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.omega.classquiz.tn/v2/users',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          phone: phone,
          city: city,
          address: address,
          gender: gender,
        }),
      };
      setfullName(fullName);
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  //   const handleUpdateParent = async () => {
  //     const token = localStorage.getItem('token');
  //   try {
  //     const response = await fetch('https://api.omega.classquiz.tn/v2/users', {

  //       method: 'POST',

  //       headers: {
  //                Accept: 'application/json',
  //               Authorization: 'Bearer ' + token,
  //            },
  //            body: JSON.stringify({
  //                     fullName: fullName,
  //                     email: email,
  //                     phone: phone,
  //                     city: city,
  //                     address: address,
  //                     gender: gender,
  //                   }),
  //     });

  //     if (response.status === 200) {

  //       const data = await response.json();

  //       localStorage.setItem('fullName', JSON.stringify(data.fullName));

  //       setfullName(data.fullName);
  //       console.log(fullName);

  //       return 'success';
  //     } else if (response.status === 401) {
  //       throw new Error('Unauthorized');
  //     } else {
  //       throw new Error(`Unexpected response status: ${response.status}`);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     return 'error';
  //   }
  // };

  return (
    <Box>
      <Button
        sx={{ color: 'grey' }}
        startIcon={<ArrowBack />}
        onClick={handleBack}
      >
        رجوع
      </Button>

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
            spacing={1}
          >
            <Box
              sx={{
                color: '#2ebbc0',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              معلومات حساب الولي
            </Box>
            <TextField
              placeholder=" إسم الولي "
              value={fullName}
              type="text"
              onChange={event => setfullName(event.target.value)}
              inputProps={{ dir: 'rtl' }}
              className={classes.inputbase}
            />
            <TextField
              placeholder=" العنوان  "
              value={address}
              type="text"
              onChange={event => setAddress(event.target.value)}
              inputProps={{ dir: 'rtl' }}
              className={classes.inputbase}
            />

            <TextField
              placeholder="البريد الإلكتروني "
              value={email}
              type="email"
              onChange={event => setEmail(event.target.value)}
              inputProps={{ dir: 'rtl' }}
              className={classes.inputbase}
            />
            <TextField
              placeholder=" رقم الهاتف  "
              value={phone}
              type="number"
              onChange={event => setPhone(event.target.value)}
              inputProps={{ dir: 'rtl' }}
              className={classes.inputbase}
            />
            <TextField
              select
              placeholder="الولاية"
              inputProps={{ dir: 'rtl' }}
              className={classes.inputbase}
              value={city}
              onChange={handleChange}
            >
              {cities.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Box display="flex" justifyContent="center">
              <Button
                style={{
                  background: gender === '1' ? '#3BC5CA' : 'white',
                  color: gender === '1' ? 'white' : '#3BC5CA',
                  borderRadius: '10%',
                  border: '2px solid #3BC5CA',
                }}
                onClick={handleMaleClick}
              >
                أب
              </Button>

              <Button
                style={{
                  background: gender === '2' ? '#3BC5CA' : 'white',
                  color: gender === '2' ? 'white' : '#3BC5CA',
                  borderRadius: '10%',
                  border: '2px solid #3BC5CA',
                  marginLeft: '8px',
                }}
                onClick={handleFemaleClick}
              >
                أم
              </Button>
            </Box>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                marginBottom: '10px',
                background:
                  'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
                width: '50%',
                height: '100%',
                borderRadius: '10px',
              }}
              onClick={handleUpdate}
            >
              تسجيل
            </Button>
          </Stack>
        </Box>
      </form>

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
        <DialogTitle>لقد تم تعديل معلومات الولي بنجاح</DialogTitle>
        <DialogContent>
          <DialogContentText>يمكنك الرجوع إلى قائمة الأطفال</DialogContentText>
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
    </Box>
  );
}
export default UpdateparentForm;
