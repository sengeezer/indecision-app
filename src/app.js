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
  handlePick() {
    console.log('picked');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick} disabled={!this.props.hasOpts}>What should I do?</button>
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
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleSubmit(ev) {
    ev.preventDefault();

    const option = ev.target.elements.option.value.trim();

    if (option) {
      console.log(option);
      ev.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
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
      opts: ['Hwonne', 'Tooo', 'Phree'],
    };
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'A simple randomizer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOpts={this.state.opts.length > 0} />
        <Options options={this.state.opts} />
        <AddOption />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
