import Box from '@material-ui/core/Box';
import { Alert } from '@material-ui/lab';
import React from 'react';

interface IErrorMessageProps { message: string | null }

const ErrorMessage = ({ message }: IErrorMessageProps) => (
  <div>
    { message
      && (
      <Box mt={1}>
        <Alert variant="filled" severity="error">{message}</Alert>
      </Box>
      )}
  </div>
);

export default ErrorMessage;

ErrorMessage.defaultProps = {
  message: null,
};
