import React from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  onClickAdd: React.MouseEventHandler<HTMLButtonElement>;
  onChangeInput: React.FormEventHandler<HTMLFormElement>;
};

export const AddTodo: React.VFC<Props> = (props) => {
  const { onClickAdd, onChangeInput } = props;

  return (
    <Box
      sx={{ p: '8px 16px', display: 'flex', justifyContent: 'space-between' }}
      component={'form'}
      onChange={onChangeInput}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField required label={'Todo'} sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12}>
          <TextField
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
