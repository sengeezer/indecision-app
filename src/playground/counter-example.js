class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleIncrement() {
    // count += 1;
    console.log('increment');
  }
  handleDecrement() {
    // count -= 1;
    console.log('decrement');
  }
  handleReset() {
    // count = 0;
    console.log('reset');
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: </p>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));