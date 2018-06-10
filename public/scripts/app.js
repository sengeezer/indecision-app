"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.handlePick, disabled: !this.props.hasOpts },
          "What should I do?"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Option = function (_React$Component3) {
  _inherits(Option, _React$Component3);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.handleDeleteOpts },
          "Remove All"
        ),
        React.createElement(
          "ol",
          null,
          this.props.options.map(function (opt) {
            return React.createElement(
              "li",
              { key: opt },
              React.createElement(Option, { option: opt })
            );
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var AddOption = function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this5.state = {
      error: undefined
    };

    _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
    return _this5;
  }

  _createClass(AddOption, [{
    key: "handleSubmit",
    value: function handleSubmit(ev) {
      ev.preventDefault();

      var option = ev.target.elements.option.value.trim();

      var error = this.props.handleAddOpt(option);

      this.setState(function () {
        return { error: error };
      });

      ev.target.elements.option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            { type: "submit" },
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component6) {
  _inherits(IndecisionApp, _React$Component6);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this6 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this6.state = {
      // opts: ['Hwonne', 'Tooo', 'Phree'],
      opts: []
    };

    _this6.handleDeleteOpts = _this6.handleDeleteOpts.bind(_this6);
    _this6.handlePick = _this6.handlePick.bind(_this6);
    _this6.handleAddOpt = _this6.handleAddOpt.bind(_this6);
    return _this6;
  }

  _createClass(IndecisionApp, [{
    key: "handlePick",
    value: function handlePick(ev) {
      ev.preventDefault();

      var randNum = Math.floor(Math.random() * this.state.opts.length);
      var option = this.state.opts[randNum];

      console.log(option);
    }
  }, {
    key: "handleDeleteOpts",
    value: function handleDeleteOpts() {
      this.setState(function () {
        return {
          opts: []
        };
      });
    }
  }, {
    key: "handleAddOpt",
    value: function handleAddOpt(option) {
      if (!option) {
        return 'Please enter a valid option';
      } else if (this.state.opts.indexOf(option) > -1) {
        return 'Duplicates are not allowed';
      }

      this.setState(function (prevState) {
        // replace opts with new arr (not modified existing)
        return {
          opts: prevState.opts.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'A simple randomizer';
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOpts: this.state.opts.length > 0, handlePick: this.handlePick }),
        React.createElement(Options, { options: this.state.opts, handleDeleteOpts: this.handleDeleteOpts }),
        React.createElement(AddOption, { handleAddOpt: this.handleAddOpt })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
