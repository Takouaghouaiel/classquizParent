import { Table, TableBody, TableContainer, TableHead, TableRow, Paper }from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useAcheivement } from '../../context/AcheivementContext.jsx';
import { useEffect, useRef } from 'react';
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

const StyledTableRow = styled(TableRow)(({ theme, nbMistakes }) => ({
  
    backgroundColor: nbMistakes !== 0 ? 'rgba(255, 99, 132, 0.2)' :  'rgba(75, 192, 192,  0.5)',
    

  
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    
  },

}));

const StyledFirstRow = styled(TableRow)(({ theme, nbMistakes }) => ({
 
'&:first-child td, &:first-child th': {
 color:'#3BC5CA',
 backgroundColor:"white"
  
},
}));


export default function 
MistakesTable({scoreType}) {
  const { MistakesbySubject,MistakesbySubjectsANDChapiter,CurrentMistakes } = useAcheivement();
  let Mistakes;
  if (scoreType === 'semester') {
    Mistakes =MistakesbySubjectsANDChapiter ;
  } else if (scoreType === 'subject') {
    Mistakes = MistakesbySubject;
  }else{
    Mistakes = CurrentMistakes;
  }

  const tableRef = useRef(null);

  useEffect(() => {
    
    const table = tableRef.current;
    if (table) {
      const tableRows = table.getElementsByTagName('tr');
      for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const nbMistakes = Number(row.cells[0].innerText);
        console.log(nbMistakes);
        if (nbMistakes !== 0) {
          row.style.opacity = '0';
          row.style.animation = `fadeInAnimation 0.5s ease-in-out forwards ${i * 0.5}s`;
        }
      }
    }

  }, [Mistakes,scoreType]);

  let tableRows = null;
  if (Mistakes) {
      // filtre mistakes different from 0
    // const filteredData = Mistakes.filter(item => item.nbMistakes !== 0);

    tableRows = Mistakes.map((item, index) => (
      <StyledTableRow key={index} nbMistakes={item.nbMistakes} >
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
        <TableHead sx={{color:'#3BC5CA'}}>
          <StyledFirstRow >
            <TableCell  >عدد الأخطاء</TableCell>
            <TableCell>التعليمة</TableCell>
            <TableCell>عدد الأسئلة</TableCell>
            <TableCell>رقم التمرين</TableCell>
            <TableCell>المحور</TableCell>
            <TableCell>المادة</TableCell>
          </StyledFirstRow>
        </TableHead>
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
