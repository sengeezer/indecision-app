'use strict';

var display = false;
var copy = ['Hide details', 'Show details'];

var toggleIt = function toggleIt() {
  display = !display;
  render();
};

var render = function render() {
  var tmpl = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleIt },
      display ? copy[0] : copy[1]
    ),
    display && React.createElement(
      'p',
      null,
      'And now for the news...'
    )
  );

  ReactDOM.render(tmpl, appRoot);
};

var appRoot = document.getElementById('app');

render();
