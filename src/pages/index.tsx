import React, { useState } from 'react';
import { AllTodos } from '@src/slices/types';
import { todosApi } from '@src/api/todos';

const Index = () => {
  const [state, setState] = useState<AllTodos>();

  const postData = {
    todoTitle: 'This is sample todo.',
    todoDetail: 'What are you doing?',
    isChecked: false,
  };

  const onClickPost = async () => {
    await todosApi.post(postData);
    const result = await todosApi.getAll();
    setState(result);
    console.log(state);
  };

  return <button onClick={onClickPost}>Post</button>;
};

export default Index;
