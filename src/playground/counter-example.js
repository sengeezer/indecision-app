class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleIncrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleDecrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: this.props.count,
      };
    });
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

Counter.defaultProps = {
  count: 0,
};

ReactDOM.render(<Counter />, document.getElementById('app'));