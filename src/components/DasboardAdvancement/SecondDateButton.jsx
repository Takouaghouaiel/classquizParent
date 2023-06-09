import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function SecondDateButton({handleChangeEndDate , endDate}) {
 
  const handleDate = (value) => {
   
    handleChangeEndDate(value)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
                    sx={{
                        // width: 50, 
                        // height:50,
                        '& input': { // customize the input color
                          backgroundColor: '#3BC5CA',
                          color:'white',
                        },
                        '& .MuiOutlinedInput-notchedOutline': { // customize the outline color
                     
                          border :'2px solid #3BC5CA',
                    
                        
                        },
                      }}
                      defaultValue={dayjs(endDate)}

          onChange={handleDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
