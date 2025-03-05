export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  bloodType: string;
  condition: string;
  lastVisit: string;
  imageUrl: string;
}