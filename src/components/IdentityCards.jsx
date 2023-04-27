import React from 'react';
import { Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const SecondCardContent = ({ icon, iconn, titlle, title, UserId, level }) => {
  return (
    <CardContent
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Stack>
        {icon}
        <Typography sx={{ color: '#3BC5CA' }}>{title}</Typography>
        <Typography sx={{ color: 'gray' }}>{UserId} </Typography>
        <Typography sx={{ color: 'gray' }}>{level}</Typography>
      </Stack>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
        {iconn}
        <Typography sx={{ color: 'gray' }}>{titlle}</Typography>
      </Box>
    </CardContent>
  );
};
const styles = {
  root: {
    flexGrow: 1,
    direction: 'rtl',
  },
  success: {
    color: '#3BC5CA',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '48%',
  },
  progress: {
    padding: '8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: theme => ({
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
    border: '2px solid #3BC5CA',
  }),

  SecondCardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
};

const CardList = ({ items, scoreitems }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: '70%',
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#3BC5CA' : '#3BC5CA',
    },
  }));
  return (
    <>
      <Grid container sx={styles.root}>
        {items.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={styles.card}>
              <SecondCardContent
                icon={item.icon}
                title={item.title}
                UserId={item.UserId}
                level={item.level}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box>
        <Grid container sx={styles.root}>
          {scoreitems.map(scoreitem => (
            <Grid item xs={12} sm={6} md={4} key={scoreitem.id}>
              <Card sx={styles.card}>
                <Box sx={styles.progress}>
                  <Box sx={styles.success}>
                    {scoreitem.titlle}
                    {scoreitem.iconn}
                  </Box>

                  <BorderLinearProgress
                    sx={{ marginLeft: '20%', marginTop: '-5%' }}
                    variant="determinate"
                    value={50}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CardList;
