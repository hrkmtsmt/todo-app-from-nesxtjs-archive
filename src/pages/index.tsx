import React, { useEffect, useState } from 'react';
import { TodoList } from '@src/components/TodoList';
import { AllTodos, PostTodo } from '@src/slices/types';
import { todosApi } from '@src/api/todos';
import { AddTodo } from '@src/components/AddTodo';

const Index = () => {
  const [state, setState] = useState<AllTodos>();
  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');

  const data: PostTodo = {
    todoTitle: title,
    todoDetail: detail,
    isChecked: false,
  };

  const getAllTodosAndChangeState = async () => {
    const result = await todosApi.getAll();
    setState(result);
  };

  useEffect(() => {
    (async () => {
      await getAllTodosAndChangeState();
    })();
  }, []);

  const onClickAdd = async () => {
    await todosApi.post(data);
    await getAllTodosAndChangeState();
    setTitle('');
    setDetail('');
  };

  const onChangeTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const onChangeDetail = (event) => {
    const value = event.target.value;
    setDetail(value);
  };

  const onClickDelete = async (e) => {
    console.log(e.currentTarget);
    await todosApi.delete(e.currentTarget.dataset.id);
    await getAllTodosAndChangeState();
  };

  const isDisabled = () => {
    const result: boolean = title === '' || detail === '';
    return result;
  };

  return (
    <React.Fragment>
      <AddTodo
        onChangeTitle={onChangeTitle}
        onChangeDetail={onChangeDetail}
        titleValue={title}
        detailValue={detail}
        onClickAdd={onClickAdd}
        disabled={isDisabled()}
      />
      <TodoList
        listHeaderTitle={'Incomplete Todo'}
        completeStatus={false}
        dataSource={state}
        onClickCheckbox={() => alert()}
        onClickEdit={() => alert()}
        onClickDelete={onClickDelete}
      />
      <TodoList
        listHeaderTitle={'Complete Todo'}
        completeStatus={true}
        dataSource={state}
        onClickCheckbox={() => alert()}
        onClickEdit={() => alert()}
        onClickDelete={onClickDelete}
      />
    </React.Fragment>
  );
};

export default Index;
