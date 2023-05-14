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
import axios from 'axios';
import addchildimage from '../images/addchildimage.png'



function UpdateparentForm() {


  const [fullName, setfullName] = React.useState('');
  const [school, setschool] = React.useState('');
  const [years, setYears] = React.useState([]);
  const [gender, setGender] = useState(null);
  const [selectedYear, setSelectedYear] = useState({ id: "", name: "" });

  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const handleYears = async () => {
    try {
      const token = localStorage.getItem('token');

      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.omega.classquiz.tn/v2/levels',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };

      const response = await axios.request(config);
      const data = response.data;
      setYears(data);

    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    handleYears();
   
  }, []);


  // popup
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
    setShowErrorPopup(prevState => !prevState)
    console.log(showErrorPopup);
  };

  const handleClose = () => {
    setOpen(false);
  
    navigate('/children/');
  };

  const handleCloseErrorPopup = () => {
    setShowErrorPopup(prevState => !prevState)
  };

  const handleMaleClick = () => {
    setGender('1');
  };

  const handleFemaleClick = () => {
    setGender('2');
  };
 

  const handleChange = event => {
    const year = event.target.value;
    const yearObject = years.find((y) => y.name === year);
    if (yearObject) {
      setSelectedYear(yearObject);
    }
  };

  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };


  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleAddChild = async () => {
    const token = localStorage.getItem('token');

 
    
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.omega.classquiz.tn/v2/students',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
        data: {
          fullName: fullName,
          gender: gender,
          levelId:selectedYear.id,
          school: school,
         
        },
      };
    
      const response = await axios.request(config).then(response =>{
        handleOpen();
        refreshState(response.data.user);
      }).catch(error=>setShowErrorPopup(prevState => !prevState))

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
             
            <img src={addchildimage} width="20%" />
       
            <Box
              sx={{
                color: '#2ebbc0',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
               إضافة طفل جديد 
            </Box>
            <TextField
              placeholder="  إسم طفلك هنا "
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
              placeholder="    إسم مدرسة طفلك هنا "
              value={school}
              type="text"
              onChange={event => setschool(event.target.value)}
              inputProps={{ dir: 'rtl' }}
              sx={{ border: '2px solid #3BC5CA',
              borderRadius: '10px',
              background: 'white',
              width: '100vh',
              maxWidth: 400,}}
            />

            <TextField
              select
              placeholder="إختار السنة الدراسية"
              inputProps={{ dir: 'rtl' }}
              sx={{ border: '2px solid #3BC5CA',
              borderRadius: '10px',
              background: 'white',
              width: '100vh',
              maxWidth: 400,}}
              value={selectedYear.name}
              onChange={handleChange}
            >
              {years.map(year => (
                <MenuItem key={year.id} value={year.name}>
                  {year.name}
                </MenuItem>
              ))}
            </TextField>

            <Box display="flex" justifyContent="center">
              <Button
                style={{
                  background: gender == '1' ? '#B0F2B6' : 'white',
                  color: gender == '1' ? 'white' : '#B0F2B6',
                  borderRadius: '10%',
                  border: '2px solid #B0F2B6',
                }}
                onClick={handleMaleClick}
              >
                ولد
              </Button>

              <Button
                style={{
                  background: gender == '2' ? '#FFACC8' : 'white',
                  color: gender == '2' ? 'white' : '#FFACC8',
                  borderRadius: '10%',
                  border: '2px solid #FFACC8',
                  marginLeft: '8px',
                }}
                onClick={handleFemaleClick}
              >
                بنت
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
              onClick={handleAddChild}
            >
              إنشاء حساب الطفل
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
        <DialogTitle>لقد تم إضافة طفلك بنجاح</DialogTitle>
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
    onClick={handleCloseErrorPopup}
  >
    أنا موافق
  </Button>
</DialogActions>
</Dialog>
    </Box>
  );
}
export default UpdateparentForm;
