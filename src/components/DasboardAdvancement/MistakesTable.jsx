import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function MistakesTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
            <TableCell>Column 4</TableCell>
            <TableCell>Column 5</TableCell>
            <TableCell>Column 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Row 1, Column 1</TableCell>
            <TableCell>Row 1, Column 2</TableCell>
            <TableCell>Row 1, Column 3</TableCell>
            <TableCell>Row 1, Column 4</TableCell>
            <TableCell>Row 1, Column 5</TableCell>
            <TableCell>Row 1, Column 6</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Column 1</TableCell>
            <TableCell>Row 2, Column 2</TableCell>
            <TableCell>Row 2, Column 3</TableCell>
            <TableCell>Row 2, Column 4</TableCell>
            <TableCell>Row 2, Column 5</TableCell>
            <TableCell>Row 2, Column 6</TableCell>
          </TableRow>
          {/* Add more rows here */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
