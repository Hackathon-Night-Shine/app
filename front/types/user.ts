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
    october7thExperience?: October7thExperience;
    img?: string;
};

