import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '../../types/user';


const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>('https://example.com/api/users');
  return response.data;
};

export const useUsers = () => {
  // return useQuery(['users'], fetchUsers);
};
