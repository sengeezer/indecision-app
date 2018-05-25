function printme() {
  return 'Hello hot stuff!';
}

const app = {
  title: 'Indecision',
  subtitle: 'Not King Crimson',
};

const tmpl = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

const tmpl2vars = {
  name: 'F. M. Albertin',
  age: 'Not old',
  location: 'UK',
};

const tmpl2 = (
  <div>
    <h1>{tmpl2vars.name}</h1>
    <p>Age: {tmpl2vars.age}</p>
    <p>Location: {tmpl2vars.location}</p>
  </div>
);

console.log(printme());
ReactDOM.render(
  tmpl,
  document.getElementById('app'),
);
