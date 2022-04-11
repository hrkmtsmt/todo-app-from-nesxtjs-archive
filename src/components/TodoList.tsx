import React from 'react';
import { List, ListSubheader } from '@mui/material';
import { Box } from '@mui/system';
import { TodoListItem } from '@src/components/TodoListItem';
import type { AllTodos } from '@src/slices/types';

type Props = {
  dataSource: AllTodos;
  listHeaderTitle: string;
  completeStatus: boolean;
  onClickEdit: React.MouseEventHandler<HTMLButtonElement>;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
  onClickCheckbox: React.MouseEventHandler<HTMLDivElement>;
};

export const TodoList: React.VFC<Props> = (props) => {
  const {
    dataSource,
    listHeaderTitle,
    completeStatus,
    onClickEdit,
    onClickDelete,
    onClickCheckbox,
  } = props;

  const todos = (dataSource || []).filter(
    (state) => state.isChecked === completeStatus
  );

  return (
    <Box>
      <List>
        <ListSubheader component={'h3'}>{listHeaderTitle}</ListSubheader>
        {todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              checked={todo.isChecked}
              todoTitle={todo.todoTitle}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              onClickCheckbox={onClickCheckbox}
            />
          );
        })}
      </List>
    </Box>
  );
};
