function printme() {
  return 'Hello hot stuff!';
}

const app = {
  title: 'Indecision',
  subtitle: 'Not King Crimson',
  options: ['One', 'Two'],
};

const handleSubmit = (ev) => {
  ev.preventDefault();

  const option = ev.target.elements.option.value;

  if (option) {
    app.options.push(option);
    ev.target.elements.option.value = '';
    renderTmpl();
  }
};

const onRemoveAll = () => {
  app.options = ['One', 'Two'];
  renderTmpl();
};

const numbers = [22, 55, 1001];

const renderTmpl = () => {
  const tmpl = (
    <div>
      <h1>{app.title}</h1>
      {/* Conditional rendering */}
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        numbers.map(num => <p key={num}>{num}</p>)
      }
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(tmpl, appRoot);
};

const appRoot = document.getElementById('app');

renderTmpl();

console.log(printme());
