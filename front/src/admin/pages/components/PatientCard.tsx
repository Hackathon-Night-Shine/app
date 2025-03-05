import React from 'react';
import { Patient } from '../types';
import { Card, CardContent, Avatar, Typography, CardActionArea } from '@mui/material';
import { Description as DescriptionIcon } from '@mui/icons-material';

interface PatientCardProps {
  patient: Patient;
  onClick: (patient: Patient) => void;
  isSelected: boolean;
}

export function PatientCard({ patient, onClick, isSelected }: PatientCardProps) {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        mb: 2,
        borderColor: isSelected ? 'primary.main' : 'divider',
        bgcolor: isSelected ? 'primary.50' : 'background.paper',
        transition: 'background-color 0.2s, border-color 0.2s'
      }}
    >
      <CardActionArea onClick={() => onClick(patient)}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={patient.imageUrl}
            alt={patient.name}
            sx={{ width: 56, height: 56 }}
          />
          <div style={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" component="h3" fontWeight="medium">
              {patient.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last visit: {patient.lastVisit}
            </Typography>
          </div>
          <DescriptionIcon color="action" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}