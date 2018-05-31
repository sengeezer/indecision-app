'use strict';

function printme() {
  return 'Hello hot stuff!';
}

var app = {
  title: 'Indecision',
  subtitle: 'Not King Crimson',
  options: ['One', 'Two']
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
  app.options = ['One', 'Two'];
  renderTmpl();
};

var numbers = [22, 55, 1001];

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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    numbers.map(function (num) {
      return React.createElement(
        'p',
        { key: num },
        num
      );
    }),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
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
