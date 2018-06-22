import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOpts}>What should I do?</button>
    </div>
  );
};

export default Action;
