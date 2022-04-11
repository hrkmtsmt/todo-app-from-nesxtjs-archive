import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';

type Props = {
  id: string;
  checked: boolean;
  todoTitle: React.ReactNode;
  onClickEdit: React.MouseEventHandler<HTMLButtonElement>;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
  onClickCheckbox: React.MouseEventHandler<HTMLDivElement>;
};

const SecondaryActionWrappear = styled.div`
  display: flex;
  gap: 10px;
`;

export const TodoListItem: React.VFC<Props> = (props) => {
  const {
    id,
    checked,
    todoTitle,
    onClickEdit,
    onClickDelete,
    onClickCheckbox,
  } = props;

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <SecondaryActionWrappear>
          <IconButton data-id={id} onClick={onClickEdit}>
            <EditIcon />
          </IconButton>
          <IconButton data-id={id} onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </SecondaryActionWrappear>
      }
    >
      <ListItemButton>
        <ListItemIcon onClick={onClickCheckbox}>
          <Checkbox data-id={id} checked={checked} />
        </ListItemIcon>
        <ListItemText primary={todoTitle} />
      </ListItemButton>
    </ListItem>
  );
};
