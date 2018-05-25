'use strict';

function printme() {
  return 'Hello hot stuff!';
}

var app = {
  title: 'Indecision',
  subtitle: 'Not King Crimson'
};

var tmpl = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

var tmpl2vars = {
  name: 'F. M. Albertin',
  age: 'Not old',
  location: 'UK'
};

var tmpl2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    tmpl2vars.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    tmpl2vars.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    tmpl2vars.location
  )
);

console.log(printme());
ReactDOM.render(tmpl, document.getElementById('app'));
