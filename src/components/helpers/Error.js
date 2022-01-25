import React from 'react';

const Error = ({ error }) => {
  console.log(error);
  if (!error) return null;
  return (
    <p style={{ color: '#f31', margin: '1rem 0', maxWidth: '280px' }}>
      <div dangerouslySetInnerHTML={{ __html: error }}></div>
    </p>
  );
};

export default Error;
