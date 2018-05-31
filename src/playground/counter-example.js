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

rendertmpl2();