class Counter extends React.Component {
  constructor() {
    super();

    this.state = { count: 0 };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      const count = parseInt(json, 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch(e) {
      console.log('Error encountered:', e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  handleIncrement() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  handleDecrement() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }
  handleReset() {
    this.setState(() => ({ count: 0 }));
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
