class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.copy = ['Hide details', 'Show details'];

    this.state = {
      visible: false,
    };

    this.handleButtonToggle = this.handleButtonToggle.bind(this);
  }
  handleButtonToggle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Viz: E. Billy ☕ &reg;</h1>
        <button onClick={this.handleButtonToggle}>
          {this.state.visible ? this.copy[0] : this.copy[1]}
        </button>
        {this.state.visible && <p>And now for the news...</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
