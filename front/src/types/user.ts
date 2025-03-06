import { Gender } from './gender';
import { October7thExperience } from './october7thExperience';
import { UserRole } from './userRole';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email: string;
    address?: string;
    role: UserRole;
    createdTs: string;
    birthDate?: string; 
    gender?: Gender;
    october7thExperience?: October7thExperience.DefenceForces;
    img?: string;
};

export const users: User[] = [
    {
      id: 1,
      firstName: 'יוסי',
      lastName: 'כהן',
      phoneNumber: '052-1234567',
      email: 'yosi.koen@example.com',
      role: UserRole.Client,
      createdTs: '2025-03-01T10:30:00',
      birthDate: '1990-05-15',
      gender: Gender.Male,
      october7thExperience: October7thExperience.DefenceForces,
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      firstName: 'מירה',
      lastName: 'לוי',
      phoneNumber: '052-9876543',
      email: 'mira.levi@example.com',
      role: UserRole.Client,
      createdTs: '2025-03-02T12:00:00',
      birthDate: '1985-08-20',
      gender: Gender.Female,
      october7thExperience: October7thExperience.DefenceForces,
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      firstName: 'אורן',
      lastName: 'ברק',
      phoneNumber: '053-1239876',
      email: 'oren.barak@example.com',
      role: UserRole.Client,
      createdTs: '2025-02-28T09:00:00',
      birthDate: '1982-11-12',
      gender: Gender.Male,
      october7thExperience: October7thExperience.DefenceForces,
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      firstName: 'שרה',
      lastName: 'מאיר',
      phoneNumber: '054-3245879',
      email: 'sara.mayor@example.com',
      role: UserRole.Admin,
      createdTs: '2025-03-04T14:30:00',
      birthDate: '1994-02-25',
      gender: Gender.Female,
      october7thExperience: October7thExperience.DefenceForces,
      img: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 5,
      firstName: 'גיא',
      lastName: 'הרצוג',
      phoneNumber: '052-2345678',
      email: 'guy.herzog@example.com',
      role: UserRole.Admin,
      createdTs: '2025-03-05T15:00:00',
      birthDate: '1992-06-10',
      gender: Gender.Male,
      october7thExperience: October7thExperience.DefenceForces,
      img: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  ];
  

