import React from 'react';
import { Message } from 'semantic-ui-react';

const Notification = ({ message, success }) => {
  if (!message) {
    return null;
  }

  return (
    <Message success={success} error={!success}>
      {message}
    </Message>
  );
};

export default Notification;
