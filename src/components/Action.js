import React from 'react';

const Action = props => (
  <div>
    <button
      onClick={props.handlePick}
      disabled={!props.hasOpts}
      className="big"
    >What should I do?</button>
  </div>
);

export default Action;
