import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | Our Pets'
  }, [props])

  return null
};

export default Head;
