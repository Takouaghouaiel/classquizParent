import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function FirstDateButton({ handleChangeStartDate }, startDate) {
  const handleDate = (startDate) => {
    handleChangeStartDate(startDate);
    console.log(startDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          sx={{
            '& input': {
              backgroundColor: '#3BC5CA',
              color: 'white',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: '2px solid #3BC5CA',
            },
          }}
          value={startDate}
          onChange={handleDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}


