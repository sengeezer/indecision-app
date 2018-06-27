import React from 'react';

import Modal from 'react-modal';

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelected}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button
      onClick={props.handleClearSelected}
    >Ok</button>
  </Modal>
);

Modal.setAppElement('#app');

export default OptionModal;
