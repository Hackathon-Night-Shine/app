import React from 'react';
import { Patient } from '../types';
import { 
  Paper, 
  Avatar, 
  Typography, 
  Grid, 
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Person as PersonIcon,
  CalendarToday as CalendarIcon,
  Opacity as OpacityIcon,
  AccessTime as AccessTimeIcon,
  LocalHospital as LocalHospitalIcon
} from '@mui/icons-material';

interface PatientDetailsProps {
  patient: Patient;
}

export function PatientDetails({ patient }: PatientDetailsProps) {
  const details = [
    { icon: <PersonIcon />, label: 'Gender', value: patient.gender },
    { icon: <CalendarIcon />, label: 'Date of Birth', value: patient.dateOfBirth },
    { icon: <OpacityIcon />, label: 'Blood Type', value: patient.bloodType },
    { icon: <AccessTimeIcon />, label: 'Last Visit', value: patient.lastVisit },
    { icon: <LocalHospitalIcon />, label: 'Current Condition', value: patient.condition }
  ];

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
        <Avatar
          src={patient.imageUrl}
          alt={patient.name}
          sx={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="h5" component="h2" gutterBottom>
            {patient.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Patient ID: {patient.id}
          </Typography>
        </Box>
      </Box>

      <List>
        <Grid container spacing={2}>
          {details.map((detail, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ListItem>
                <ListItemIcon sx={{ color: 'primary.main' }}>
                  {detail.icon}
                </ListItemIcon>
                <ListItemText
                  primary={detail.label}
                  secondary={detail.value}
                  primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                  secondaryTypographyProps={{ variant: 'body1', color: 'text.primary' }}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
    </Paper>
  );
}