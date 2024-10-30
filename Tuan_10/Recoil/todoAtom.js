import { atom } from 'recoil';

export const todoAtom = atom({
  key: 'todoAtom', // unique ID ( với mỗi atom trong ứng dụng)
  default: [], // giá trị mặc định
});
