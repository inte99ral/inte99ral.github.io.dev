import { atom } from 'recoil';

// State
export const count = atom({
  key: 'count',
  default: 6,
});

// Action
export const data = atom({
  key: 'data',
  default: 2,
});
