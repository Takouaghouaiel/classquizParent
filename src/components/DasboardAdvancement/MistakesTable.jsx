import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useAcheivement } from '../../context/AcheivementContext.jsx';

export default function MistakesTable() {
const {MistakesbySubject}=useAcheivement();
// Map over the MistakesbySubject data and generate the table rows dynamically
let tableRows = null;
if (MistakesbySubject) {
  const filteredData = MistakesbySubject.filter(item => item.nbMistakes !== 0);
  tableRows = filteredData.map((item, index) => (
  <TableRow key={index}>
    <TableCell>{item.nbMistakes}</TableCell> {/* عدد الأخطاء */}
    <TableCell>{item.firstQuestion}</TableCell> {/* التعليمة */}
    <TableCell>{item.numOfQuestions}</TableCell> {/* عدد الأسئلة */}
    <TableCell>{item.name}</TableCell> {/* رقم التمرين */}
    <TableCell>{item.chapter}</TableCell> {/*  المحور*/}
    <TableCell>{item.subject}</TableCell> {/* المادة */}
   
  </TableRow>
));
 }
  return (
    <TableContainer component={Paper} sx={{ maxWidth: { xs: 350, md: 800 } }}>
       <Table>
    <TableHead>
      <TableRow>
        <TableCell>عدد الأخطاء</TableCell>
        <TableCell>التعليمة</TableCell>
        <TableCell>عدد الأسئلة</TableCell>
        <TableCell>رقم التمرين</TableCell>
        <TableCell>المحور</TableCell>
        <TableCell>المادة</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {tableRows}
    </TableBody>
  </Table>
    </TableContainer>
  );
}
