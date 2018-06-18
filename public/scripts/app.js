'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick, disabled: !props.hasOpts },
      'What should I do?'
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.option,
    React.createElement(
      'button',
      {
        onClick: function onClick(e) {
          props.handleDeleteOpt(props.option);
        }
      },
      'x'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOpts },
      'Remove All'
    ),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option to get started.'
    ),
    React.createElement(
      'ol',
      null,
      props.options.map(function (opt) {
        return React.createElement(
          'li',
          { key: opt },
          React.createElement(Option, {
            option: opt,
            handleDeleteOpt: props.handleDeleteOpt
          })
        );
      })
    )
  );
};

var AddOption = function (_React$Component) {
  _inherits(AddOption, _React$Component);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this.state = {
      error: undefined
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(AddOption, [{
    key: 'handleSubmit',
    value: function handleSubmit(ev) {
      ev.preventDefault();

      var option = ev.target.elements.option.value.trim();

      var error = this.props.handleAddOpt(option);

      this.setState(function () {
        return { error: error };
      });

      // Don't reset input in case of invalid input data
      if (!error) {
        ev.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            { type: 'submit' },
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component2) {
  _inherits(IndecisionApp, _React$Component2);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this2.state = {
      opts: props.opts
    };

    _this2.handleDeleteOpts = _this2.handleDeleteOpts.bind(_this2);
    _this2.handleDeleteOpt = _this2.handleDeleteOpt.bind(_this2);
    _this2.handlePick = _this2.handlePick.bind(_this2);
    _this2.handleAddOpt = _this2.handleAddOpt.bind(_this2);
    return _this2;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // account for invalid JSON
      try {
        var json = localStorage.getItem('options');
        var opts = JSON.parse(json);

        if (opts) {
          this.setState(function () {
            return { opts: opts };
          });
        }
      } catch (e) {
        console.log('Possibly iunvalid JSON', e);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.opts.length !== this.state.opts.length) {
        var json = JSON.stringify(this.state.opts);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'handlePick',
    value: function handlePick(ev) {
      ev.preventDefault();

      var randNum = Math.floor(Math.random() * this.state.opts.length);
      var option = this.state.opts[randNum];

      console.log(option);
    }
  }, {
    key: 'handleDeleteOpts',
    value: function handleDeleteOpts() {
      this.setState(function () {
        return { opts: [] };
      });
    }
  }, {
    key: 'handleDeleteOpt',
    value: function handleDeleteOpt(opt) {
      this.setState(function (prevState) {
        return {
          opts: prevState.opts.filter(function (currOpt) {
            return opt !== currOpt;
          })
        };
      });
    }
  }, {
    key: 'handleAddOpt',
    value: function handleAddOpt(option) {
      if (!option) {
        return 'Please enter a valid option';
      } else if (this.state.opts.indexOf(option) > -1) {
        return 'Duplicates are not allowed';
      }

      // replace opts with new arr (not modified existing)
      this.setState(function (prevState) {
        return { opts: prevState.opts.concat(option) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = 'A simple randomizer';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { hasOpts: this.state.opts.length > 0, handlePick: this.handlePick }),
        React.createElement(Options, {
          options: this.state.opts,
          handleDeleteOpts: this.handleDeleteOpts,
          handleDeleteOpt: this.handleDeleteOpt
        }),
        React.createElement(AddOption, { handleAddOpt: this.handleAddOpt })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  opts: []
};

// default options: <IndecisionApp opts={['Hwonne', 'Tooo', 'Phree']} />
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
