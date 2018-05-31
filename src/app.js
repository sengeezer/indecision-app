function printme() {
  return 'Hello hot stuff!';
}

const app = {
  title: 'Indecision',
  subtitle: 'Not King Crimson',
  options: [],
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
  app.options = [];
  renderTmpl();
};

const getRandomDecision = (ev) => {
  ev.preventDefault();

  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];

  console.log(option);
};

const renderTmpl = () => {
  const tmpl = (
    <div>
      <h1>{app.title}</h1>
      {/* Conditional rendering */}
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={getRandomDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>

      <ol>
        {
          app.options.map(opt => <li key={opt}>{opt}</li>)
        }
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
