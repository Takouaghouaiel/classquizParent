import React from 'react';
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
} from '@mui/material';
import { useNavigate } from 'react-router-dom';




const Liste = ({ childrenList }) => {

  const navigate = useNavigate();


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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Liste;
