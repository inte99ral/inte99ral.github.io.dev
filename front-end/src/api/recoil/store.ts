import { atom, selector } from 'recoil';

export const isDark = atom<boolean>({ key: 'IsDark', default: false });

export const scroll = atom<number>({ key: 'Scroll', default: 0 });

export const scrollUnit = selector<number>({
  key: 'ScrollUnit',
  get: ({ get }) => {
    return get(scroll) * 6;
  },
  set: ({ set }, newValue) => {
    set(scroll, Number(newValue) / 6);
  },
});
