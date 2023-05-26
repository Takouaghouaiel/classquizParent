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
  MenuItem,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useAcheivement } from '../context/AcheivementContext';
import { useParams } from 'react-router-dom';

function UpdateChildForm() {
// const {studentId}=useParams();

const { child: currentChild ,refreshState} = useAcheivement();
 const {student,getStudentDetails } = useAcheivement();
 const studentId=student?.id
// console.log(studentId);

 useEffect(() => {
    getStudentDetails(studentId);

  }, []);
   
  const [password, setPassword] = useState('');

  const DeleteChild = async (studentId,password) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(
        `https://api.omega.classquiz.tn/v2/students/${studentId}/delete`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          password: password,
        },
      }
    );
      if (response.status === 200) {
        const data = response.data;

    
      } else if (response.status === 401) {
        throw new Error('Failure DeleteChild');
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [fullName, setfullName] = React.useState('');
  const [school, setschool] = React.useState('');
  const [years, setYears] = React.useState([]);
  const [gender, setGender] = useState(null);
  const [selectedYear, setSelectedYear] = useState({ id: "", name: "" });
  const [showDialogcode, setShowDialogcode] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
 
  useEffect(() => {
    setfullName(currentChild?.fullName);
    setschool(currentChild?.school);
    setSelectedYear({ id: currentChild?.state?.id || undefined, name: currentChild?.state?.name || undefined });
    setGender(currentChild?.gender);
  }, [currentChild]);
  
  const handleshowpsswdverification = () => {
    setShowDialogcode(true);
  };
  
  const handleDeleteChild = async () => {
    handleshowpsswdverification()
  };

  
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
 
  };

  const handleClose = () => {
    setOpen(false);
  
    navigate('/dashboard/'+studentId +'/advancement');
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

  const handleUpdateChild = async () => {
    const token = localStorage.getItem('token');

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://api.omega.classquiz.tn/v2/students/${student?.id}`,
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
        refreshState(response.data.child);
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
             
             <Avatar
            alt="User Avatar"
            src={student?.avatar?.urlPath}
            style={{ width: '100px', height: '100px'}}
          />
       
            <Box
              sx={{
                color: '#2ebbc0',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
               تعديل معطيات الطفل
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
              onClick={handleUpdateChild}
            >
              سجل التحديثات
            </Button>
          
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
                      الرجاء كتابة الرقم السرّي
                    </DialogTitle>
                    <DialogContent sx={{ alignSelf: 'center' }}>
                      <DialogContentText>
                        <input
                         value={password}
                          type="number"
                          placeholder="رقم السرّ"
                          onChange={event =>{setPassword(event.target.value)}}
                        
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                      onClick={() => {
                        DeleteChild(studentId, password);
                      }}
                      
                        type="submit"
                        id="token"
                        name="token"
                        sx={{
                          background:
                            'linear-gradient(to bottom right, #FF0000,#FFFFFF )',
                          width: '200px',
                          height: '35px',
                          borderRadius: '10px',
                          color: 'white',
                        }}
                      >
                        <span > تأكيد حذف الحساب </span>
                      </Button>
                    </DialogActions>
                  </Dialog>
                )}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                marginBottom: '10px',
                background:
                  'linear-gradient(to bottom right, #FF0000, #FF0000)',
                width: '30%',
             
                borderRadius: '10px',
              }}
              onClick={() => {
                handleDeleteChild();
              }}
            
            >
              حذف الحساب 
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
        <DialogTitle>لقد تم تعديل المعطيات بنجاح</DialogTitle>
        <DialogContent>
          <DialogContentText>يمكنك الرجوع إلى ملف طفلك </DialogContentText>
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
<DialogTitle>يوجد خطأ في تعديل المعطيات</DialogTitle>
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
export default UpdateChildForm;
