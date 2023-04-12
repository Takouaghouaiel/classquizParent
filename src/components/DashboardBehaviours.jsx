import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import smart from '../images/smart.png';
import observe from '../images/observe.png';
import communicate from '../images/communicate.png';
export default function DashboardBehaviours() {
  return (
    <Grid  container
    spacing={3}
    style={{ minHeight: '100vh' }}
    justifyContent="center"
    alignItems="center"
    alignContent="center"
    height="100vh" >
      <Grid item xs={12} sm={12}>
        <Card sx={{ maxWidth: 400, backgroundColor: '#FFC800' }}>
          <CardActionArea>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h5"
                component="div"
                color="white"
                padding="5%"
                sx={{ ml: 2 }}
              >
                أنجز إختبار الذكاء
              </Typography>
              <img src={smart} alt="smart" width={150} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Card sx={{ maxWidth: 400, backgroundColor: '#CB55D7' }}>
          <CardActionArea>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
                padding="5%"
              >
                أنجز إختبار السلوك
              </Typography>
              <img src={observe} alt="observe" width={140} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Card sx={{ maxWidth: 400, backgroundColor: '#67D5D7' }}>
          <CardActionArea>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
                padding="5%"
              >
                أنجز إختبار التواصل
              </Typography>
              <img src={communicate} alt="communicate" width={150} />
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
