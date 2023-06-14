import { atom } from 'recoil';

export const isDarkState = atom<boolean>({ key: 'IsDarkState', default: false });
export const isSmoothState = atom<boolean>({ key: 'IsSmoothState', default: false });
