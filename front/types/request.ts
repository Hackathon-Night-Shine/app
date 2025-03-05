import { Status } from './status';

export interface Request {
    id: number;
    clientId: number; 
    retreatId: number; 
    createdTs: string;
    status: Status;
};