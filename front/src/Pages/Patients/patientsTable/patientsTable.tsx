import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import PatientCase from '../../../components/patientCase/patientCase';
import { User } from '../../../types/user';

export interface RowData {
    id: number;
    fullName: string;
    phoneNumber: string;
    email: string;
    gender: string;
    experience: string;
}

interface Props {
    users: User[]
}

const PatientsTable: React.FC<Props> = ({ users }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedUserId, setSelectedUserId] = useState<number | undefined>(undefined);

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: '',
            width: 90,
            align: 'right'
        },
        {
            field: 'fullName',
            headerName: 'שם מלא',
            width: 180,
            align: 'right'
        },
        {
            field: 'phoneNumber',
            headerName: 'מספר טלפון',
            width: 180,
            align: 'right'
        },
        {
            field: 'email',
            headerName: 'מייל',
            width: 250,
            align: 'right'
        },
        {
            field: 'gender',
            headerName: 'מגדר',
            width: 120,
            align: 'right'
        },
        {
            field: 'experience',
            headerName: 'חוויה',
            width: 200,
            align: 'right'
        },
    ];

    const rows = users.map((user) => ({
        id: user.id,
        fullName: `${user.firstName} ${user.lastName}`,
        phoneNumber: user.phoneNumber ?? '-',
        email: user.email ?? '',
        gender: user.gender ?? '-',
        experience: user.october7thExperience ?? '-'
    }))

    const handleRowClick = (params: GridRowParams) => {
        setSelectedUserId((params.row as RowData)?.id);
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
            {selectedUserId &&
                <PatientCase
                    open={open}
                    setOpen={setOpen}
                    userId={selectedUserId}
                />
            }
        </Container>
    );
};

export default PatientsTable;
