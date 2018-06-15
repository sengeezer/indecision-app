const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOpts}>What should I do?</button>
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.option}
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOpts}>Remove All</button>
      <ol>
      {
        props.options.map(opt => <li key={opt}><Option option={opt} /></li>)
      }
      </ol>
    </div>
  );
};

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

    this.setState(() => ({ error }));

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
      opts: props.opts,
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
    this.setState(() => ({ opts: [] }));
  }
  handleAddOpt(option) {
    if (!option) {
      return 'Please enter a valid option';
    } else if (this.state.opts.indexOf(option) > -1) {
      return 'Duplicates are not allowed';
    }

    // replace opts with new arr (not modified existing)
    this.setState((prevState) => ({ opts: prevState.opts.concat(option) }));
  }
  render() {
    const subtitle = 'A simple randomizer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOpts={this.state.opts.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.opts} handleDeleteOpts={this.handleDeleteOpts} />
        <AddOption handleAddOpt={this.handleAddOpt} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  opts: [],
};

// default options: <IndecisionApp opts={['Hwonne', 'Tooo', 'Phree']} />
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
