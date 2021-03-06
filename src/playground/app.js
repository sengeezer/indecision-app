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
      <button
        onClick={(e) => {
          props.handleDeleteOpt(props.option);
        }}
      >x</button>
    </div>
  );
};

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

    // Don't reset input in case of invalid input data
    if (!error) {
      ev.target.elements.option.value = '';
    }
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
  constructor() {
    super();
    this.state = {
      opts: [],
    };

    this.handleDeleteOpts = this.handleDeleteOpts.bind(this);
    this.handleDeleteOpt = this.handleDeleteOpt.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOpt = this.handleAddOpt.bind(this);
  }
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
  handlePick(ev) {
    ev.preventDefault();

    const randNum = Math.floor(Math.random() * this.state.opts.length);
    const option = this.state.opts[randNum];

    console.log(option);
  }
  handleDeleteOpts() {
    this.setState(() => ({ opts: [] }));
  }
  handleDeleteOpt(opt) {
    this.setState(prevState => ({
      opts: prevState.opts.filter(currOpt => opt !== currOpt),
    }));
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
        <Options
          options={this.state.opts}
          handleDeleteOpts={this.handleDeleteOpts}
          handleDeleteOpt={this.handleDeleteOpt}
        />
        <AddOption handleAddOpt={this.handleAddOpt} />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
