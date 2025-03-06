import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  Paper,
  Grid
} from '@mui/material';
import {
  Group as GroupIcon,
  TrendingUp as TrendingUpIcon,
  CalendarMonth as CalendarIcon
} from '@mui/icons-material';

export default function Home() {
  const navigate = useNavigate(); // ⬅️ לשימוש בניווט

  const features = [
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: 'Patient Management',
      description: 'View and manage patient records with ease',
      action: () => {}
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'מידע',
      description: 'ספקים וחשבוניות',
      action: () => navigate('/SupplierTable') // ⬅️ ניווט לעמוד ספקים
    },
    {
      icon: <CalendarIcon sx={{ fontSize: 40 }} />,
      title: 'Retreats Appointments',
      description: 'Schedule and manage patient appointments',
      action: () => navigate('/retreat')
    }
  ];

  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Medical Center
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Streamline your patient care with our comprehensive management system
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'primary.50'
                }
              }}
              onClick={feature.action} // ⬅️ פעולה בעת לחיצה
            >
              <Box sx={{ color: 'primary.main', mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                {feature.description}
              </Typography>
              <Button
                variant="contained"
                onClick={feature.action} // ⬅️ כפתור הניווט
                sx={{ mt: 'auto' }}
              >
                Access
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
