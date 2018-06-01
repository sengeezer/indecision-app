'use strict';

function printme() {
  return 'Hello hot stuff!';
}

var app = {
  title: 'Indecision',
  subtitle: 'Not King Crimson',
  options: []
};

var handleSubmit = function handleSubmit(ev) {
  ev.preventDefault();

  var option = ev.target.elements.option.value;

  if (option) {
    app.options.push(option);
    ev.target.elements.option.value = '';
    renderTmpl();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderTmpl();
};

var getRandomDecision = function getRandomDecision(ev) {
  ev.preventDefault();

  var randNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randNum];

  console.log(option);
};

var renderTmpl = function renderTmpl() {
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
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: getRandomDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (opt) {
        return React.createElement(
          'li',
          { key: opt },
          opt
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add option'
      )
    )
  );

  ReactDOM.render(tmpl, appRoot);
};

var appRoot = document.getElementById('app');

renderTmpl();

console.log(printme());
