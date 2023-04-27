import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SecondCardContent = ({ icon, score }) => {
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
      {icon}
      <Typography sx={{ color: '#3BC5CA' }}>{score}</Typography>
    </CardContent>
  );
};
const styles = {
  root: {
    flexGrow: 1,
    direction: 'rtl',
  },
  card: theme => ({
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
    border: '2px solid #3BC5CA',
  }),
  cardContent: {
    flexGrow: 1,
    background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
    textAlign: 'center',
    color: 'white',
  },
  SecondCardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const CardList = ({ items }) => {
  return (
    <Grid container sx={styles.root}>
      {items.map(item => (
        <Grid item  key={item.id} xs={12} sm={6} md={4}>
          <Card sx={styles.card}>
            <CardContent sx={styles.cardContent}>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
            </CardContent>
            <SecondCardContent icon={item.icon} score={item.score} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
