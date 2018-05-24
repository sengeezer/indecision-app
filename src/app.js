function printme() {
  return 'Hello hot stuff!';
}

const tmpl = <h1>Indecision</h1>;

console.log(printme());
ReactDOM.render(
  tmpl,
  document.getElementById('app'),
);
