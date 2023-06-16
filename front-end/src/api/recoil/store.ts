import { atom } from 'recoil';

export const isDarkState = atom<boolean>({ key: 'IsDarkState', default: false });
export const isSmoothState = atom<boolean>({ key: 'IsSmoothState', default: false });

// 삭제예정
export const appState = atom<HTMLDivElement>({
  key: 'appState',
  default: document.getElementById('app') as HTMLDivElement,
});
