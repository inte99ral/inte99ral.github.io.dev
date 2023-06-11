import { atom } from 'recoil';

export const isDark = atom<boolean>({ key: 'IsDark', default: false });
export const isSmooth = atom<boolean>({ key: 'IsSmooth', default: false });
export const scroll = atom<number>({ key: 'Scroll', default: 0 });
