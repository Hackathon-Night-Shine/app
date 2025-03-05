import { Patient } from './types';

export const patients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 45,
    gender: 'Female',
    dateOfBirth: '1979-03-15',
    bloodType: 'O+',
    condition: 'Hypertension',
    lastVisit: '2024-02-15',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 32,
    gender: 'Male',
    dateOfBirth: '1992-08-21',
    bloodType: 'A-',
    condition: 'Diabetes Type 2',
    lastVisit: '2024-02-20',
    imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    age: 28,
    gender: 'Female',
    dateOfBirth: '1996-11-30',
    bloodType: 'B+',
    condition: 'Asthma',
    lastVisit: '2024-02-18',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
  }
];