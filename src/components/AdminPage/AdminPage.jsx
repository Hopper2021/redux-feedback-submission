import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AdminPage() {
    const [answerList, setAnswerList] = useState([]);

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

    function createData(feeling, understanding, support, comments) {
        return { feeling, understanding, support, comments };
      }
      
      const rows = [
        createData('Feeling', 159, 6.0, 24, 4.0),
        createData('Understanding', 237, 9.0, 37, 4.3),
        createData('Support', 262, 16.0, 24, 6.0),
        createData('Comments', 305, 3.7, 67, 4.3)
      ];

    useEffect(() => {
        getAnswers()
    },[]);

    const getAnswers = () => {
        axios({
            method: 'GET',
            url: '/answers'
        }).then(response => {
            setAnswerList(response.data);
        }).catch(error => {
            alert('Something went wrong!');
            console.log('Error in GET getAnswers',error);
        });
    }

    return(
        <>
        <h1>Admin Page</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center">Feeling</StyledTableCell>
                <StyledTableCell align="center">Understanding</StyledTableCell>
                <StyledTableCell align="center">Support</StyledTableCell>
                <StyledTableCell align="center">Comments</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
                {/* To make a subcomponent, pass in 'answer' via props answer={answer} to the component teal text on this page
                    Then in the component, props would be: ({answer}), and you would call the answer.feeling 
                    for each property. */}
                {answerList.map((answer) => (
                <StyledTableRow
                  key={answer.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <StyledTableCell align="center">{answer.feeling}</StyledTableCell>
                    <StyledTableCell align="center">{answer.understanding}</StyledTableCell>
                    <StyledTableCell align="center">{answer.support}</StyledTableCell>
                    <StyledTableCell align="left">{answer.comments}</StyledTableCell>
                  </StyledTableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
      );
}

export default AdminPage;