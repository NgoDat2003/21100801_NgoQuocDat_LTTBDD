import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './todoList';

const App = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
