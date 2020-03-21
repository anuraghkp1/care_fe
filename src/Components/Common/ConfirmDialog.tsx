import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const ConfirmDialog = (props: any) => {
  const { title, message, handleCancel, handleOk } = props;
  return (
    <Dialog
      open={true}
    >
      <DialogTitle id="alert-dialog-title">{title || ''}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
