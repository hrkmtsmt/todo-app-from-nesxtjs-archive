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
  checked: boolean;
  content: React.ReactNode;
  onClickEdit: React.MouseEventHandler<HTMLButtonElement>;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
};

const SecondaryActionWrappear = styled.div`
  display: flex;
  gap: 10px;
`;

export const TodoListItem: React.VFC<Props> = (props) => {
  const { checked, content, onClickEdit, onClickDelete } = props;

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <SecondaryActionWrappear>
          <IconButton onClick={onClickEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        </SecondaryActionWrappear>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox checked={checked} />
        </ListItemIcon>
        <ListItemText primary={content} />
      </ListItemButton>
    </ListItem>
  );
};
