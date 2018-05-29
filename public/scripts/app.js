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

// MANUAL refresh

var count = 0;

var rendertmpl2 = function rendertmpl2() {
  var tmpl2 = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Counter'
    ),
    React.createElement(
      'p',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: increment },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: decrement },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(tmpl2, appRoot);
};

var increment = function increment() {
  count += 1;
  rendertmpl2();
};

var decrement = function decrement() {
  count -= 1;
  rendertmpl2();
};

var reset = function reset() {
  count = 0;
  rendertmpl2();
};

var appRoot = document.getElementById('app');

console.log(printme());

rendertmpl2();
