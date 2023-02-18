import { atom } from 'recoil';

export const scroll = atom<number>({ key: 'scroll', default: 0 });
