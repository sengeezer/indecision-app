let display = false;
const copy = ['Hide details', 'Show details'];

const toggleIt = () => {
  display = !display;
  render();
};

const render = () => {
  const tmpl = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleIt}>{display ? copy[0] : copy[1]}</button>
      {display && <p>And now for the news...</p>}
    </div>
  );

  ReactDOM.render(tmpl, appRoot);
};


const appRoot = document.getElementById('app');

render();
