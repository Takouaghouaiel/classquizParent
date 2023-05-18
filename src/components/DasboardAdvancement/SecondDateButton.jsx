import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function SecondDateButton({handleChangeEndDate} ,startDate, endDate) {
 
  const handleDate = (startDate,endDate) => {
   
    handleChangeEndDate(startDate,endDate)
    console.log(startDate,endDate)
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
             
          value={endDate}
          onChange={handleDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
