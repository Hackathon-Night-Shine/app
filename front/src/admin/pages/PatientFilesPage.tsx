import React, { useState } from 'react';
import { patients } from './data';
import { Patient } from '../../../types/patient';
import { PatientCard } from './components/PatientCard';
import { PatientDetails } from './components/PatientDetails';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import { Group as GroupIcon } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      '50': '#e3f2fd'
    },
    background: {
      default: '#f5f5f5'
    }
  }
});

function PatientFilesPage() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', py: 4 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <GroupIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h4" component="h1" fontWeight="bold">
              Patient Files
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} lg={4}>
              {patients.map((patient) => (
                <PatientCard
                  key={patient.id}
                  patient={patient}
                  onClick={setSelectedPatient}
                  isSelected={selectedPatient?.id === patient.id}
                />
              ))}
            </Grid>
            
            <Grid item xs={12} lg={8}>
              {selectedPatient ? (
                <PatientDetails patient={selectedPatient} />
              ) : (
                <Paper 
                  elevation={2} 
                  sx={{ 
                    height: 300, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    Select a patient to view their details
                  </Typography>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export {PatientFilesPage};