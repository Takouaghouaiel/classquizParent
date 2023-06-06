import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function FirstDateButton({ handleChangeStartDate, startDate,endDate }) {
  const handleDate = (value) => {
    handleChangeStartDate(value);
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
          defaultValue={dayjs(startDate)}
          onChange={handleDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

