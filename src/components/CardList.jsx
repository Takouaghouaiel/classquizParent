import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    direction:'rtl'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2),
    border: '2px solid #3BC5CA', 
   
  },
  cardContent: {
    flexGrow: 1, 
    background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
    textAlign: 'center',
    color: 'white',
  },
  SecondCardContent :{
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection:'row',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const CardList = ({ items }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {items.map(item => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card className={classes.card} >
            <CardContent
              className={classes.cardContent}
              
            >
              <Typography gutterBottom-variant="h5"
              component="div">{item.title}</Typography>
            </CardContent>
            <SecondCardContent  icon={item.icon} score={item.score} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
