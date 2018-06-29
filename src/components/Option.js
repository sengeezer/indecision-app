import React from 'react';

const Option = props => (
  <div className="option">
    <p className="option__text">{props.option}</p>
    <button
      onClick={(e) => {
        props.handleDeleteOpt(props.option);
      }}
      className="small--link"
    >x</button>
  </div>
);

export default Option;
