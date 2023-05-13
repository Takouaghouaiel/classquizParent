import { Table, TableBody, TableContainer, TableHead, TableRow, Paper }from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useAcheivement } from '../../context/AcheivementContext.jsx';
import { useEffect, useRef ,useState} from 'react';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function MistakesTable({scoreType}) {
  const { MistakesbySubject,MistakesbySubjectsANDChapiter } = useAcheivement();
  let Mistakes;
  if (scoreType === 'semester') {
    Mistakes =MistakesbySubjectsANDChapiter ;
  } else {
    Mistakes = MistakesbySubject;
  }

  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;
    if (table) {
      const tableRows = table.getElementsByTagName('tr');
      for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        row.style.opacity = '0';
        row.style.animation = `fadeInAnimation 0.5s ease-in-out forwards ${i * 0.1}s`;
      }
    }
  }, [Mistakes,scoreType]);

  let tableRows = null;
  if (Mistakes) {
    const filteredData = Mistakes.filter(item => item.nbMistakes !== 0);
    tableRows = filteredData.map((item, index) => (
      <StyledTableRow key={index}>
        <StyledTableCell>{item.nbMistakes}</StyledTableCell> {/* عدد الأخطاء */}
        <StyledTableCell>{item.firstQuestion}</StyledTableCell> {/* التعليمة */}
        <StyledTableCell>{item.numOfQuestions}</StyledTableCell> {/* عدد الأسئلة */}
        <StyledTableCell>{item.name}</StyledTableCell> {/* رقم التمرين */}
        <StyledTableCell>{item.chapter}</StyledTableCell> {/* المحور */}
        <StyledTableCell>{item.subject}</StyledTableCell> {/* المادة */}
      </StyledTableRow>
    ));
  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth: { xs: 350, md: 800 } }}>
      <Table ref={tableRef}>
        <TableHead>
          <StyledTableRow>
            <TableCell>عدد الأخطاء</TableCell>
            <TableCell>التعليمة</TableCell>
            <TableCell>عدد الأسئلة</TableCell>
            <TableCell>رقم التمرين</TableCell>
            <TableCell>المحور</TableCell>
            <TableCell>المادة</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
