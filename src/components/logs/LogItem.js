import React from 'react';

const LogItem = ({ log }) => {
  return (
    <div>
      <p>{log.message}</p>
    </div>
  );
};

export default LogItem;
