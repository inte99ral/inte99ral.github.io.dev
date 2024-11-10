import { atom } from 'recoil';

export const isDarkState = atom<boolean>({ key: 'IsDarkState', default: false });

export const appState = atom<HTMLDivElement>({
  key: 'AppState',
  default: document.getElementById('default') as HTMLDivElement,
});
