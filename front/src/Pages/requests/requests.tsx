import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import { Select, MenuItem, FormControl, InputLabel, Container, SelectChangeEvent } from '@mui/material';
import { Status } from '../../types/status';

interface RowData {
    id: number;
    fullName: string;
    retreatName: string;
    status: string;
    requestDate: string;
}

const Requests: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedRow, setSelectedRow] = useState<RowData | null>(null);

    const [rows, setRows] = useState<GridRowsProp>([
        { id: 1, fullName: 'יוסף כהן', retreatName: 'ריטריט פסיכולוגי', status: 'פעיל', requestDate: '2025-03-05' },
        { id: 2, fullName: 'מרים לוי', retreatName: 'ריטריט חוויתי', status: 'ממתין', requestDate: '2025-02-25' },
        // Additional data here...
    ]);

    const [statuses] = useState<string[]>(['פעיל', 'ממתין', 'הושלם', 'דחוי']);

    const columns: GridColDef[] = [
        {
            field: 'fullName',
            headerName: 'שם מלא',
            flex: 1,
            align: 'right'
        },
        {
            field: 'retreatName',
            headerName: 'שם ריטריט',
            flex: 1,
            align: 'right'
        },
        {
            field: 'requestDate',
            headerName: 'תאריך בקשה',
            flex: 1,
            align: 'right'
        },

        {
            field: 'status',
            headerName: 'סטטוס',
            flex: 1,
            align: 'right',
            renderCell: (params: any) => {
                return (
                    <FormControl fullWidth>
                        <InputLabel id={`status-select-${params.id}`}>סטטוס</InputLabel>
                        <Select
                            labelId={`status-select-${params.id}`}
                            value={params.value}
                            onChange={(event) => handleStatusChange(event, params.id)}
                            sx={{
                                backgroundColor: 'transparent',
                                '& .MuiSelect-root': {
                                    padding: '10px 14px',
                                },
                                '& .MuiSelect-icon': {
                                    color: '#333',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    display: 'none',
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#333',
                                },
                                '&:hover .MuiSelect-icon': {
                                    color: '#555',
                                },
                            }}
                        >
                            {statuses.map((status) => (
                                <MenuItem key={status} value={status}>
                                    {status}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                );
            },
        },
    ];

    const handleStatusChange = async (event: SelectChangeEvent<any>,  requestId: number) => {
        const selectedStatus = event.target.value as Status;
        console.log("selectedStatus", selectedStatus)

        // עדכון הסטטוס ב-React State

        // שליחת בקשה לשרת
        // try {
        //     const response = await axios.post('https://example.com/api/status', {
        //         status: selectedStatus,
        //         // הוספת נתונים נוספים שתוסיף בעצמך כאן
        //     });

        //     console.log('Response:', response.data); // תשובה מהשרת
        // } catch (error) {
        //     console.error('Error during POST request:', error);
        // }
    };

    const handleRowClick = (params: GridRowParams) => {
        setSelectedRow(params.row as RowData);
        setOpen(true);
    };

    return (
        <Container style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                onRowClick={handleRowClick}
                sx={{ direction: 'rtl' }}
            />
            {/* <PatientCase
                userId={user}
                open={open}
                setOpen={setOpen}
            /> */}
        </Container>
    )
};

export default Requests;
