import React from 'react';

import Option from './Option';

const Options = props => (
  <div>
    <div className="header">
      <h3 className="header__title">Your Options</h3>
      <button
        onClick={props.handleDeleteOpts}
        className="small--link"
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started.</p>}
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

export default Options;
