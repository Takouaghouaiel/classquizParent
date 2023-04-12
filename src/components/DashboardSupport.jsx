import * as React from 'react';
import { TextField, Button, InputBase } from '@mui/material';
import Stack from '@mui/material/Stack';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => {
  return {
    root: {
      color: theme.palette.primary.main,
    },
    inputbase: {
      border: '2px solid #3BC5CA',
      borderRadius: '7px',
    },
  };
});

function DashboardSupport() {
  const { classes } = useStyles();

  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Email: ${email}, Message: ${message}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          width="70%"
        >
          <InputBase
            direction="rtl"
            placeholder="البريد الإلكتروني "
            value={email}
            type="email"
            onChange={event => setEmail(event.target.value)}
            fullWidth
            style={{ width: '70%' }}
            inputProps={{ dir: 'rtl' }}
            className={classes.inputbase}
          />
          <InputBase
            placeholder="أكتب رسالة "
            value={message}
            onChange={event => setMessage(event.target.value)}
            multiline
            type="text"
            rows={4}
            fullWidth
            style={{ width: '80%' }}
            inputProps={{ dir: 'rtl' }}
            className={classes.inputbase}
           
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              marginBottom: '10px',
              background: 'linear-gradient(to bottom right, #1CC3CB, #67D5D7)',
              width: '50%',
              height: '100%',
              borderRadius: '10px',
            }}
          >
            إرسال
          </Button>
        </Stack>
      </div>
    </form>
  );
}
export default DashboardSupport;
