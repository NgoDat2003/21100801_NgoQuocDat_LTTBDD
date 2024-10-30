import { selector } from 'recoil';
import axios from 'axios';
import { todoAtom } from './todoAtom';

export const fetchTodosSelector = selector({
  key: 'fetchTodosSelector',
  get: async ({ get }) => {
    const response = await axios.get('https://66fc9741c3a184a84d176b30.mockapi.io/bai1');
    return response.data; // Trả về dữ liệu nhận được từ API
  },
});
