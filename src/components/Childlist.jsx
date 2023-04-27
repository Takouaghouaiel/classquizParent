import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
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

const List = ({ childrenList }) => {
  const navigate = useNavigate();
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
        {childrenList.map(child => (
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
                height="140"
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
                  onClick={() => {
                    navigate('/dashboard/' + child.id + '/advancement');
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

export default List;
