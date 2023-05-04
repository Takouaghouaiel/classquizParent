import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function FirstDateButton() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
        //  label="إبتداءََ من"
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
          />
      </DemoContainer>
    </LocalizationProvider>
  );
}

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//  function DateButton() {
//   const [selectedDate, setSelectedDate] = React.useState(null);
//   const [open, setOpen] = React.useState(false);
  
//   const handleButtonClick = () => {
//     setOpen(true);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setOpen(false);
//   };

//   return (
//     <>
//       <Button onClick={handleButtonClick}>Select Date</Button>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         open={open}
//         onClose={() => setOpen(false)}
//         value={selectedDate}
//         onChange={handleDateChange}
//         renderInput={(params) => <TextField {...params} />}
//       />
//        </LocalizationProvider>
//     </>
//   );
// }
// export default DateButton ;
