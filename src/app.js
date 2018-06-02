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
        <button>What should I do?</button>
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
  render() {
    return (
      <div>
        <p>Add option here</p>
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'A simple randomizer';
    const opts = ['Hwonne', 'Tooo', 'Phree'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={opts} />
        <AddOption />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
