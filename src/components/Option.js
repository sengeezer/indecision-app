import React from 'react';

const Option = props => (
  <div>
    {props.option}
    <button
      onClick={(e) => {
        props.handleDeleteOpt(props.option);
      }}
      className="small--link"
    >x</button>
  </div>
);

export default Option;
