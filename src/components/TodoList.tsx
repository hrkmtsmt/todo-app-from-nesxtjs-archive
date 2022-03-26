import React from 'react';
import { List, ListSubheader } from '@mui/material';
import { Box } from '@mui/system';
import { TodoListItem } from '@src/components/TodoListItem';

type UUID = string;

type TodoData = {
  id: UUID;
  content: string;
  checked: boolean;
};

type Props = {
  dataSource: Array<TodoData>;
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

  const todos = dataSource.filter(
    (status) => status.checked === completeStatus
  );

  return (
    <Box>
      <List>
        <ListSubheader component={'h3'}>{listHeaderTitle}</ListSubheader>
        {todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              checked={todo.checked}
              content={todo.content}
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
