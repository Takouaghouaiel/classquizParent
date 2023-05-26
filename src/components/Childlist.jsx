import React, { useState } from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import addicon from '../images/addicon.png';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  ButtonBase,
  ListItem,
  List,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate,useParams } from 'react-router-dom';
import { useAcheivement } from '../context/AcheivementContext';



const Liste = ({ childrenList }) => {

  const { DeleteChild } = useAcheivement();
  const [showDialogcode, setShowDialogcode] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [password, setPassword] = useState('');
  const handleContextMenu = event => {
    event.preventDefault();
    setShowContextMenu(true);
  };
  const { studentId } = useParams();
  // console.log(studentId);
  const navigate = useNavigate();

  const handleshowpsswdverification = () => {
    setShowDialogcode(true);
  };

  const handleDeleteChild = async () => {
    try {
      await DeleteChild(studentId);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Create an "Add child" card object
  const addChildCard = {
    id: 'add-child',
    fullName: 'إضافة طفل جديد',
    avatar: {
      height: '140',
      width: '140',
      urlPath: addicon,
    },
  };

  // Append the "Add child" card to the childrenList array
  const childrenWithAddChildCard = [...childrenList, addChildCard];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h3>قائمة أطفالي</h3>
        <GroupsIcon sx={{ color: '#1CC3CB' }} />
      </Box>
      <Grid container spacing={3} justifyContent="center" border="10">
        {childrenWithAddChildCard.map((child, index) => (
          <Grid item key={child.id}>
            <Card
              sx={{
                maxWidth: 345,
                border: '4px solid #1CC3CB',
                cursor: 'pointer',
              }}
            >
              <CardMedia
                component="img"
                height={child.avatar.height ? child.avatar.height : '140'}
                image={child.avatar.urlPath}
                alt={child.fullName}
              />

              <CardContent
                sx={{
                  background:
                    'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
                }}
              >
                <ButtonBase
                  onContextMenu={event => handleContextMenu(event, index)}
                  onClick={() => {
                    if (child.id === 'add-child') {
                      navigate('/add-child'); // Replace with the path to the add child form
                    } else {
                      navigate(`/dashboard/${child.id}/advancement`);
                    }
                  }}
                >
                  <Typography variant="h5" color="white">
                    {child.fullName}
                  </Typography>
                </ButtonBase>
                {showContextMenu && index < childrenList.length && (
                  <Box sx={{ color: 'white' }} className="context-menu">
                    <List>
                      <ListItem
                        onClick={() => {
                          handleshowpsswdverification();
                        }}
                      >
                        Delete
                      </ListItem>
                      <ListItem >Update</ListItem>
                    </List>
                  </Box>
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
                      الرجاء كتابة الرقم السرّي
                    </DialogTitle>
                    <DialogContent sx={{ alignSelf: 'center' }}>
                      <DialogContentText>
                        <input
                          type="number"
                          placeholder="رقم السرّ"
                          onChange={event =>{setPassword(event.target.value)}}
                        
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={() => {
                          handleDeleteChild();
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
                        <span>حذف الحساب </span>
                      </Button>
                    </DialogActions>
                  </Dialog>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Liste;
