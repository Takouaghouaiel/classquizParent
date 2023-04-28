import React, { useState, useEffect } from 'react';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  InputBase,
  MenuItem,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';


function UpdateparentForm() {

  const { user: connectedUser ,refreshState} = useAuth();
  // console.log('current user is :',connectedUser)

 
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [fullName, setfullName] = React.useState('');
  const [cities, setCities] = React.useState([]);
  const [gender, setGender] = useState(null);
  const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
  console.log(selectedCity)

  useEffect(() => {
    setfullName(connectedUser?.fullName);
    setEmail(connectedUser?.email);
    setAddress(connectedUser?.address);
    setPhone(connectedUser?.phone);
    // setSelectedCity({ id: connectedUser?.state?.id, name: connectedUser?.state?.name });
    setSelectedCity({ id: connectedUser?.state?.id || undefined, name: connectedUser?.state?.name || undefined });
    setGender(connectedUser?.gender);
  }, [connectedUser]);

  const handleCities = async () => {
    try {
      const token = localStorage.getItem('token');

      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.omega.classquiz.tn/v2/countries/1',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };

      const response = await axios.request(config);
      const data = response.data;
      setCities(data.states);

    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    handleCities();
   
  }, []);


  // popup
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
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
    const city = event.target.value;
    const cityObject = cities.find((c) => c.name === city);
    if (cityObject) {
      setSelectedCity(cityObject);
    }
  };

  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  function handleUpdate() {
   
    handleUpdateParent();
    handleOpen();
  }

  const handleSubmit = event => {
    event.preventDefault();
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
        data: {
          fullName: fullName,
          email: email,
          phone: phone,
          stateId:selectedCity.id,
          address: address,
          gender: gender,
        },
      };
    
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
     refreshState(response.data.user)

    } catch (error) {
      console.log(error);
    }
  };

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
              sx={{ border: '2px solid #3BC5CA',
              borderRadius: '10px',
              background: 'white',
              width: '100vh',
              maxWidth: 400,}}
            />
            <TextField
              placeholder=" العنوان  "
              value={address}
              type="text"
              onChange={event => setAddress(event.target.value)}
              inputProps={{ dir: 'rtl' }}
              sx={{ border: '2px solid #3BC5CA',
              borderRadius: '10px',
              background: 'white',
              width: '100vh',
              maxWidth: 400,}}
            />

            <InputBase
              placeholder="البريد الإلكتروني "
              value={email}
              type="email"
              onChange={event => setEmail(event.target.value)}
              inputProps={{ dir: 'rtl' }}
              sx={{ border: '2px solid #3BC5CA',
              borderRadius: '10px',
              background: 'white',
              width: '100vh',
              maxWidth: 400,}}
            />
            <TextField
              placeholder=" رقم الهاتف  "
              value={phone}
              type="number"
              onChange={event => setPhone(event.target.value)}
              inputProps={{ dir: 'rtl' }}
              sx={{ border: '2px solid #3BC5CA',
              borderRadius: '10px',
              background: 'white',
              width: '100vh',
              maxWidth: 400,}}
            />
            <TextField
              select
              placeholder="الولاية"
              inputProps={{ dir: 'rtl' }}
              sx={{ border: '2px solid #3BC5CA',
              borderRadius: '10px',
              background: 'white',
              width: '100vh',
              maxWidth: 400,}}
              value={selectedCity.name}
              onChange={handleChange}
            >
              {cities.map(city => (
                <MenuItem key={city.id} value={city.name}>
                  {city.name}
                </MenuItem>
              ))}
            </TextField>
            <Box display="flex" justifyContent="center">
              <Button
                style={{
                  background: gender == '1' ? '#3BC5CA' : 'white',
                  color: gender == '1' ? 'white' : '#3BC5CA',
                  borderRadius: '10%',
                  border: '2px solid #3BC5CA',
                }}
                onClick={handleMaleClick}
              >
                أب
              </Button>

              <Button
                style={{
                  background: gender == '2' ? '#3BC5CA' : 'white',
                  color: gender == '2' ? 'white' : '#3BC5CA',
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
