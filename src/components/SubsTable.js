import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import subs from '../CssModules/SubscriptionPage.module.css';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function createData(name, one, two, three) {
    return { name, one, two, three };
}
const doneStyle = {color:'green'};

const rows = [
    createData('Тариф 1', <DoneOutlineIcon style={doneStyle}/>, <DoneOutlineIcon style={doneStyle}/>, <DoneOutlineIcon style={doneStyle}/>),
    createData('Тариф 2', '', <DoneOutlineIcon style={doneStyle}/>, <DoneOutlineIcon style={doneStyle}/>),
    createData('Тариф 3', '', '', <DoneOutlineIcon style={doneStyle}/>),
];

export default function SubsTable() {
    return (
        <TableContainer component={Paper} style={{border:'none' , boxShadow:'none'}}>
            <Table sx={{ minWidth: '50%' , boxShadow:'none' }} aria-label="caption table">
                <caption>
                    <div className={subs.prices}>
                        <h4>4.99$</h4>
                        <h4>5.99$</h4>
                        <h4>9.99$</h4>
                    </div>

                </caption>
                <TableHead>
                    <TableRow>
                        <TableCell><h4>Тарифы:</h4></TableCell>
                        <TableCell align="right">1</TableCell>
                        <TableCell align="right">2</TableCell>
                        <TableCell align="right">3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.one}</TableCell>
                            <TableCell align="right">{row.two}</TableCell>
                            <TableCell align="right">{row.three}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
