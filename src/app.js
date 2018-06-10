class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOpts}>What should I do?</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.option}
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOpts}>Remove All</button>
        <ol>
        {
          this.props.options.map(opt => <li key={opt}><Option option={opt} /></li>)
        }
        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(ev) {
    ev.preventDefault();

    const option = ev.target.elements.option.value.trim();

    const error = this.props.handleAddOpt(option);

    this.setState(() => {
      return { error };
    });

    ev.target.elements.option.value = '';
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // opts: ['Hwonne', 'Tooo', 'Phree'],
      opts: [],
    };

    this.handleDeleteOpts = this.handleDeleteOpts.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOpt = this.handleAddOpt.bind(this);
  }
  handlePick(ev) {
    ev.preventDefault();

    const randNum = Math.floor(Math.random() * this.state.opts.length);
    const option = this.state.opts[randNum];

    console.log(option);
  }
  handleDeleteOpts() {
    this.setState(() => {
      return {
        opts: [],
      };
    });
  }
  handleAddOpt(option) {
    if (!option) {
      return 'Please enter a valid option';
    } else if (this.state.opts.indexOf(option) > -1) {
      return 'Duplicates are not allowed';
    }

    this.setState((prevState) => {
      // replace opts with new arr (not modified existing)
      return {
        opts: prevState.opts.concat(option),
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'A simple randomizer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOpts={this.state.opts.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.opts} handleDeleteOpts={this.handleDeleteOpts} />
        <AddOption handleAddOpt={this.handleAddOpt} />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
