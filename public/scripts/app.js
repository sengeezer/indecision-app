'use strict';

function printme() {
  return 'Hello hot stuff!';
}

var tmpl = React.createElement(
  'h1',
  null,
  'Indecision'
);

console.log(printme());
ReactDOM.render(tmpl, document.getElementById('app'));
