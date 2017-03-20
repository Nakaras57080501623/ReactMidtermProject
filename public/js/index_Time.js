'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var Clock = function (_React$Component) {
	_inherits(Clock, _React$Component);

	function Clock() {
		_classCallCheck(this, Clock);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			time: moment().format('LTS'),
			one: true,
			two: false,
			three: false,
			four: false,
			background: {
				backgroundColor: "#000000".replace(/0/g, function () {
					return (~ ~(Math.random() * 16)).toString(16);
				})
			},
			class: ''
		};
		_this.clicked = _this.clicked.bind(_this);
		return _this;
	}

	Clock.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		setInterval(function () {
			if (_this2.state.one == true) {
				_this2.setState({
					time: moment().format('LTS')
				});
			} else if (_this2.state.four == true) {
				_this2.setState({
					time: moment().format('LT')
				});
			}
		}, 1000);
	};

	Clock.prototype.clicked = function clicked() {
		var _this3 = this;

		this.setState({
			background: {
				backgroundColor: "#000000".replace(/0/g, function () {
					return (~ ~(Math.random() * 16)).toString(16);
				})
			}
		});
		if (this.state.one == true) {
			this.setState({ class: 'faded' });
			setTimeout(function () {
				_this3.setState({
					time: moment().format('l'),
					one: false,
					two: true,
					class: ''
				});
			}, 200);
		} else if (this.state.two == true) {
			this.setState({ class: 'faded' });
			setTimeout(function () {
				_this3.setState({
					time: moment().format('MMMM Do YY'),
					two: false,
					three: true,
					class: ''
				});
			}, 200);
		} else if (this.state.three == true) {
			this.setState({ class: 'faded' });
			setTimeout(function () {
				_this3.setState({
					time: moment().format('LT'),
					three: false,
					four: true,
					class: ''
				});
			}, 200);
		} else if (this.state.four == true) {
			this.setState({ class: 'faded' });
			setTimeout(function () {
				_this3.setState({
					time: moment().format('LTS'),
					four: false,
					one: true,
					class: ''
				});
			}, 200);
		}
	};

	Clock.prototype.render = function render() {
		return React.createElement(
			'div',
			{ id: 'clock', style: this.state.background, onClick: this.clicked },
			React.createElement(
				'h1',
				{ className: this.state.class },
				this.state.time
			)
		);
	};

	return Clock;
}(React.Component);



var App = function (_React$Component3) {
	_inherits(App, _React$Component3);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	App.prototype.render = function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Instruction, null),
			React.createElement(Clock, null)
		);
	};

	return App;
}(React.Component);

var Instruction = function (_React$Component2) {
	_inherits(Instruction, _React$Component2);

	function Instruction() {
		_classCallCheck(this, Instruction);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	Instruction.prototype.render = function render() {
		return React.createElement(
			'p',
			{ id: 'instruction' },
			'กดที่หน้าจอ เพื่อเปลี่ยนรูปเเบบของวันเวลา เวลาที่เหมาะกับการลิสต์บุญ 7:00 Am - 11:00 Am จะทำให้โยมได้บุญหนัก'
		);
	};

	return Instruction;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app2'));