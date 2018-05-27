'use strict';

function printme() {
  return 'Hello hot stuff!';
}

var app = {
  title: 'Indecision',
  subtitle: 'Not King Crimson',
  options: ['One', 'Two']
};

var tmpl = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  )
);

var tmpl2vars = {
  name: 'F. M. Albertin',
  age: 37,
  location: 'UK'
};

function getLocation(loc) {
  if (loc) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      loc
    );
  }

  return undefined;
}

var tmpl2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    tmpl2vars.name ? tmpl2vars.name : 'Anonymous'
  ),
  tmpl2vars.age && tmpl2vars.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    tmpl2vars.age
  ),
  getLocation(tmpl2vars.location)
);

console.log(printme());
ReactDOM.render(tmpl, document.getElementById('app'));
