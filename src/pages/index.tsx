import React, { useEffect, useState } from 'react';
import { TodoList } from '@src/components/TodoList';
import { AllTodos } from '@src/slices/types';
import { todosApi } from '@src/api/todos';

const Index = () => {
  const [state, setState] = useState<AllTodos>();

  useEffect(() => {
    (async () => {
      const result = await todosApi.getAll();
      setState(result);
    })();
  }, []);

  return (
    <React.Fragment>
      <TodoList
        listHeaderTitle={'Incomplete Todo'}
        completeStatus={false}
        dataSource={state}
        onClickCheckbox={() => alert()}
        onClickEdit={() => alert()}
        onClickDelete={() => alert()}
      />
      <TodoList
        listHeaderTitle={'Complete Todo'}
        completeStatus={true}
        dataSource={state}
        onClickCheckbox={() => alert()}
        onClickEdit={() => alert()}
        onClickDelete={() => alert()}
      />
    </React.Fragment>
  );
};

export default Index;
