import React from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  onClickAdd: React.MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: React.FormEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onChangeDetail: React.FormEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  disabled: boolean;
};

export const AddTodo: React.VFC<Props> = (props) => {
  const { onClickAdd, onChangeTitle, onChangeDetail, disabled } = props;

  return (
    <Box
      sx={{ p: '8px 16px', display: 'flex', justifyContent: 'space-between' }}
      component={'form'}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            onChange={onChangeTitle}
            required
            label={'Todo'}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={onChangeDetail}
            required
            label={'Details'}
            rows={4}
            multiline
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={onClickAdd}
            disabled={disabled}
            variant={'contained'}
            size={'large'}
            sx={{ width: '100%' }}
          >
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
