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

const SecondCardContent = ({
  icon,
  iconn,
  titlle,
  progressvalue,
  title,
  UserId,
  level,
  subscription,
  index,
}) => {
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
        {index === 0 && (
          <>
            <Typography sx={{ color: 'gray' }}>
              المعرف الوحيد: <span style={{ color: 'orange' }}>{UserId}</span>
            </Typography>
            <Typography sx={{ color: 'gray' }}>
              السنة الدراسية : <span style={{ color: 'orange' }}>{level}</span>
            </Typography>
            <Typography sx={{ color: 'gray' }}>
              الإشتراك الحالي المفعّل :{' '}
              <span style={{ color: 'orange' }}>{subscription}</span>
            </Typography>
          </>
        )}
      </Stack>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
        {iconn}
        <Typography sx={{ color: 'gray' }}>
          {titlle} {progressvalue}
        </Typography>
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
    justifyContent: 'space-between',
    '& > *': {
      marginRight: 3, // add spacing between child elements
    },
   
  },

  card: theme => ({
    display: 'flex',
    alignItems: 'center',
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
    width: '100%',
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
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={styles.card}>
              <SecondCardContent
                icon={item.icon}
                title={item.title}
                UserId={item.UserId}
                level={item.level}
                subscription={item.subscription}
                index={index}
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
                  <Stack sx={styles.success}>
                    {scoreitem.iconn}
                    {scoreitem.titlle}
                    <Box sx={styles.progressValue}>
                      <Typography sx={{fontWeight: 'bold',}}> {scoreitem.progressvalue}</Typography>
                    </Box>
                  </Stack>

                <BorderLinearProgress
                  variant="determinate"
                  value={60}
                  sx={{ width: '40%', marginBottom: '10%' }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CardList;
