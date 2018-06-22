import React from 'react';

import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOpts}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started.</p>}
      <ol>
      {
        props.options.map(opt => (
          <li key={opt}>
            <Option
              option={opt}
              handleDeleteOpt={props.handleDeleteOpt}
            />
          </li>
        ))
      }
      </ol>
    </div>
  );
};

export default Options;
