function printme() {
  return 'Hello hot stuff!';
}

const app = {
  title: 'Indecision',
  subtitle: 'Not King Crimson',
  options: ['One', 'Two'],
};

const tmpl = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
  </div>
);

// MANUAL refresh

let count = 0;

const rendertmpl2 = () => {
  const tmpl2 = (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(tmpl2, appRoot);
};

const increment = () => {
  count += 1;
  rendertmpl2();
};

const decrement = () => {
  count -= 1;
  rendertmpl2();
};

const reset = () => {
  count = 0;
  rendertmpl2();
};

const appRoot = document.getElementById('app');

console.log(printme());

rendertmpl2();
