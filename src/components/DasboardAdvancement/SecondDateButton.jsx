import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function SecondDateButton() {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
            
        //   label=" إلى حدود"
        
          value={selectedDate}
          onChange={handleDateChange}
          disableFuture
          inputFormat="DD/MM/YYYY"
          okLabel="تأكيد"
          cancelLabel="إلغاء"
          clearLabel="مسح"
          todayLabel="اليوم"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
