import React from 'react';

const Error = ({ error }) => {
  console.log(error);
  if (!error) return null;
  return (
    <p style={{ color: '#f31', margin: '1rem 0', maxWidth: '280px' }}>
      {error.error}
    </p>
  );
};

export default Error;
