import { Modal, Box, Typography } from '@mui/material';
import PatientForm from './patientForm/patientForm';
import { useState } from 'react';
import { Patient } from '../../types/patient';
import { users } from '../../types/user';

interface Props {
    open: boolean;
    setOpen: (value: React.SetStateAction<boolean>) => void;
    userId: number;
}

const PatientCase: React.FC<Props> = ({ open, setOpen, userId }) => {
    const handleClose = () => setOpen(false);

    const userDetails = users.find(user => user.id === userId)!;

    // שליפה של patient מסוים על פי userid
    const [formData, setFormData] = useState<Patient>({
        userId: userId,
        event: '',
        status: '',
        livingPlace: '',
        livingWith: '',
        meetsPsychiatrist: '',
        usesMedications: '',
        medicationPurpose: '',
        smokes: false,
        usesOtherSubstances: false,
        treatedBefore: false,
        hospitalizedBefore: false,
        tookPsychiatricMedication: false,
        dailyRoutine: '',
        retreatReason: '',
        additionalInfo: '',
        allergies: '',
        emergencyPhone: '',
        openComments: '',
    });

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 750,
                        bgcolor: 'background.paper',
                        border: '1px solid #000',
                        borderRadius: 5,
                        boxShadow: 24,
                        p: 4,
                        maxHeight: 500,
                        overflowY: 'auto',
                        padding: 2,
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#555',
                        },
                    }}
                >
                    {open && (
                        <div >
                            <Typography id="modal-description" sx={{ fontSize: '25px' }}>
                                <strong>
                                    טופס מילוי מטופל
                                </strong>
                            </Typography>

                            <div style={{ display: 'flex', gap: '10px' }}>

                                <div style={{
                                    padding: '10px',
                                    width: '100%',
                                    direction: 'rtl',
                                    // display: 'flex',
                                    // flexDirection: 'column',
                                    // alignItems: 'start'
                                }}>
                                    <Typography id="modal-description" sx={{ fontSize: '15px' }}>
                                        <strong>שם:</strong> {`${userDetails.firstName} ${userDetails.lastName}`}
                                    </Typography>
                                    <Typography id="modal-description" sx={{ fontSize: '15px' }}>
                                        <strong>טלפון:</strong> {userDetails.phoneNumber}
                                    </Typography>
                                    <Typography id="modal-description" sx={{ fontSize: '15px' }}>
                                        <strong>מייל:</strong> {userDetails.email}
                                    </Typography>
                                    <Typography id="modal-description" sx={{ fontSize: '15px' }}>
                                        <strong>כתובת :</strong> {userDetails.phoneNumber}
                                    </Typography>
                                    <Typography id="modal-description" sx={{ fontSize: '15px' }}>
                                        <strong>תאריך לידה:</strong> {userDetails.email}
                                    </Typography>
                                </div>

                            </div >

                            <PatientForm formData={formData} setFormData={setFormData} />
                        </div>
                    )}
                </Box>
            </Modal>
        </div >
    );
};

export default PatientCase;
