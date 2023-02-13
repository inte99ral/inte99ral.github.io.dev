import { atom, useRecoilState } from 'recoil';

// State
export const count = atom({
  key: 'count',
  default: 2,
});

// Action
export const countUp = atom({
  key: 'count',
  default: 2,
});
