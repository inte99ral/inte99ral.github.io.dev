import { atom, selector } from 'recoil';

export const isDark = atom<boolean>({ key: 'IsDark', default: false });

export const scroll = atom<number>({ key: 'Scroll', default: 0 });
