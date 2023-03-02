import { Alert, AlertTitle } from '@mui/material';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      {message}
    </Alert>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
