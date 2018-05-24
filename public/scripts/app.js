function printme() {
  return 'Hello hot stuff!';
}

const tmpl = React.createElement('h1', { id: 'title' }, 'Indecision');

console.log(printme());
ReactDOM.render(
  tmpl,
  document.getElementById('app'),
);
