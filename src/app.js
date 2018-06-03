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
        <button onClick={this.handlePick}>What should I do?</button>
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
  handleRemoveAll() {
    console.log('remove all');
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
