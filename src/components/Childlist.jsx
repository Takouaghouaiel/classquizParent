import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import  Add_child from '/src/images/add_child.svg';


const List = ({childrenList}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent:'space-around',
       

      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center',  gap: '10px'}} >  
        <h3>قائمة أطفالي</h3>
        <GroupsIcon sx={{ color: '#1CC3CB' }} />
      </Box>
      <Grid container spacing={3} justifyContent="center" border="10">
        {childrenList.map(child => (
          <Grid item key={child.id}>
    <Card sx={{ maxWidth: 345 ,border: '3px solid #1CC3CB' ,cursor:'pointer' }}>


              <CardMedia
              
                component="img"
                height="140"
                image={child.avatar.urlPath}
                alt={child.fullName}
              />
              <CardContent sx={{background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)'}} >
                <Typography gutterBottom variant="h5" component="div" color='white' >
                  {child.fullName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
