
import React from 'react';
import Counter from './containers/counter';
import TodoForm from './containers/Todoform';

const App = () => {
  return (
    <>
      <Counter />
      <TodoForm />
    </>
  );
};
export default App;

// can have this below due to implied return
// const App = () => (
//   <>
//   <Counter />
//   <TodoForm />
// </>
// )