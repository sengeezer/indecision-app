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

const tmpl2vars = {
  name: 'F. M. Albertin',
  age: 37,
  location: 'UK',
};

function getLocation(loc) {
  if (loc) {
    return <p>Location: {loc}</p>;
  }

  return undefined;
}

const tmpl2 = (
  <div>
    <h1>{tmpl2vars.name ? tmpl2vars.name : 'Anonymous'}</h1>
    {(tmpl2vars.age && tmpl2vars.age >= 18) && <p>Age: {tmpl2vars.age}</p>}
    {getLocation(tmpl2vars.location)}
  </div>
);

console.log(printme());
ReactDOM.render(
  tmpl,
  document.getElementById('app'),
);
