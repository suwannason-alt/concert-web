/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCell } from '@mui/material';
import { useEffect, useState } from 'react';
import { getHistory } from '../../services/consert.service';
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid';



export default function CustomizedTables() {
    const [data, setData] = useState<any[]>([])

    async function listHistory() {
        const response = await getHistory();
        setData(response.data)
    }
    useEffect(() => {
        listHistory()
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ border: '1px solid #ccc', fontWeight: 800 }}>Date time</TableCell>
                        <TableCell align={'left'} sx={{ border: '1px solid #ccc', fontWeight: 800 }}>Username</TableCell>
                        <TableCell align={'left'} sx={{ border: '1px solid #ccc', fontWeight: 800 }}>Concert name</TableCell>
                        <TableCell align={'left'} sx={{ border: '1px solid #ccc', fontWeight: 800 }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={uuidv4()}>
                            <TableCell component="th" scope="row" sx={{ border: '1px solid #ccc' }}>
                                {format(new Date(row.create_at), 'dd/MM/yyyy hh:mm:ss') }
                            </TableCell>
                            <TableCell align={'left'} sx={{ border: '1px solid #ccc' }}>{row.full_name}</TableCell>
                            <TableCell align={'left'} sx={{ border: '1px solid #ccc' }}>{row.concert_name}</TableCell>
                            <TableCell align={'left'} sx={{ border: '1px solid #ccc' }}>{row.action}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}