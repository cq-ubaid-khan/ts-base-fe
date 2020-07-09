import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import React, { SyntheticEvent } from 'react';

interface ISnackBarAlertProps {
  open: boolean,
  onClose: (e: SyntheticEvent) => void,
  message: string,
}

const SnackBarAlert = ({ open, onClose, message }: ISnackBarAlertProps) => (
  <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={onClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <Alert variant="filled" onClose={onClose} severity="success">{message}</Alert>
  </Snackbar>
);

export default SnackBarAlert;

SnackBarAlert.defaultProps = {
  message: '',
};
