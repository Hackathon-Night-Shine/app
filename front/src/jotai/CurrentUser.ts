import { atomWithStorage } from 'jotai/utils';

export const currentUserAtom = atomWithStorage<any>('user', undefined);
