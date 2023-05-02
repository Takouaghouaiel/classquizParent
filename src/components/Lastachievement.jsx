import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, CardHeader, Typography } from '@mui/material';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { useAcheivement } from '../context/AcheivementContext';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Lastachievement() {
  const { lastUnlockedRewardData } = useAcheivement();
  const r1 = lastUnlockedRewardData[0]?.lastUnlockedReward;
  const r2 = lastUnlockedRewardData[1]?.lastUnlockedReward;
  const r3 = lastUnlockedRewardData[2]?.lastUnlockedReward;
  const r4 = lastUnlockedRewardData[3]?.lastUnlockedReward;
  const r5 = lastUnlockedRewardData[4]?.lastUnlockedReward;

  return (
    <Card
      sx={{
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        border: '2px solid #3BC5CA',
      }}
    >
      <CardHeader
        title={
          <Typography variant="h4" color="orange">
            آخر الإنجازات المحقّقة
          </Typography>
        }
      />

      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {[
              { content: r1?.description, image: r1?.imgUrl },
              { content: r2?.description, image: r2?.imgUrl },
              { content: r3?.description, image: r3?.imgUrl },
              { content: r4?.description, image: r4?.imgUrl },
              { content: r5?.description, image: r5?.imgUrl },
              { content: r1?.description, image: r1?.imgUrl },
            ].map(({ content, image }, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
                <Item>{content}</Item>
                
                  <Avatar src={image} />
                
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
