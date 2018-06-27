import React, { Component } from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
  state = {
    opts: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    // account for invalid JSON
    try {
      const json = localStorage.getItem('options');
      const opts = JSON.parse(json);

      if (opts) {
        this.setState(() => ({ opts }));
      }
    } catch (e) {
      console.log('Possibly iunvalid JSON', e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.opts.length !== this.state.opts.length) {
      const json = JSON.stringify(this.state.opts);
      localStorage.setItem('options', json);
    }
  }
  handlePick = (ev) => {
    ev.preventDefault();

    const randNum = Math.floor(Math.random() * this.state.opts.length);
    const option = this.state.opts[randNum];

    this.setState(() => ({ selectedOption: option }));
  }
  handleClearSelected = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOpts = () => {
    this.setState(() => ({ opts: [] }));
  }
  handleDeleteOpt = (opt) => {
    this.setState(prevState => ({
      opts: prevState.opts.filter(currOpt => opt !== currOpt),
    }));
  }
  handleAddOpt = (option) => {
    if (!option) {
      return 'Please enter a valid option';
    } else if (this.state.opts.indexOf(option) > -1) {
      return 'Duplicates are not allowed';
    }

    // replace opts with new arr (not modified existing)
    this.setState(prevState => ({ opts: prevState.opts.concat(option) }));

    return undefined;
  }
  render() {
    const subtitle = 'A simple randomizer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOpts={this.state.opts.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.opts}
          handleDeleteOpts={this.handleDeleteOpts}
          handleDeleteOpt={this.handleDeleteOpt}
        />
        <AddOption handleAddOpt={this.handleAddOpt} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelected={this.handleClearSelected}
        />
      </div>
    );
  }
}

export default IndecisionApp;
