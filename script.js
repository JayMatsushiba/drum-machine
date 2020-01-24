'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrumMachine = function (_React$Component) {
    _inherits(DrumMachine, _React$Component);

    function DrumMachine(props) {
        _classCallCheck(this, DrumMachine);

        var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this, props));

        _this.state = {
            currentInstrument: 'Welcome!'
        };
        _this.displayInstrument = _this.displayInstrument.bind(_this);
        return _this;
    }

    // need to loop through drumArray and create DrumPad for each one 


    _createClass(DrumMachine, [{
        key: 'displayInstrument',
        value: function displayInstrument(selectedInstrument) {
            this.setState({
                currentInstrument: selectedInstrument
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return (
                // need to pass properties of each drumArray object to the DrumPad map
                React.createElement(
                    'div',
                    { id: 'display' },
                    React.createElement(
                        'h1',
                        null,
                        'DRUM MACHINE'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        this.state.currentInstrument
                    ),
                    React.createElement(
                        'div',
                        { className: 'container' },
                        drumInfoArray.map(function (drumPad) {
                            return React.createElement(DrumPad, { displayInstrument: _this2.displayInstrument,
                                instrument: drumPad.instrument,
                                key: drumPad.KC, id: drumPad.KC, keyCode: drumPad.KC, keyboardInput: drumPad.key, audio: drumPad.link });
                        })
                    )
                )
            );
        }
    }]);

    return DrumMachine;
}(React.Component);

var DrumPad = function (_React$Component2) {
    _inherits(DrumPad, _React$Component2);

    function DrumPad(props) {
        _classCallCheck(this, DrumPad);

        var _this3 = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this, props));

        _this3.handleClick = _this3.handleClick.bind(_this3);
        _this3.handleKeypress = _this3.handleKeypress.bind(_this3);
        return _this3;
    }

    _createClass(DrumPad, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener("keydown", this.handleKeypress);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener("keydown", this.handleKeypress);
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            $("#" + this.props.keyboardInput).trigger("play");

            // removes active class from all other buttons, then adds active class to last button pressed
            $(".drum-button").removeClass("active");
            $('#' + this.props.keyboardInput + 1).addClass("active");

            this.props.displayInstrument(this.props.instrument);
        }
    }, {
        key: 'handleKeypress',
        value: function handleKeypress(event) {
            if (event.keyCode === this.props.keyCode) {
                $("#" + this.props.keyboardInput).trigger("play");

                // removes active class from all other buttons, then adds active class to last button pressed
                $(".drum-button").removeClass("active");
                $('#' + this.props.keyboardInput + 1).addClass("active");

                this.props.displayInstrument(this.props.instrument);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: this.props.id, className: 'drum-pad', onClick: this.handleClick },
                React.createElement(
                    'button',
                    { className: 'drum-button', id: this.props.keyboardInput + 1 },
                    this.props.keyboardInput
                ),
                React.createElement('audio', { className: 'clip', id: this.props.keyboardInput, src: this.props.audio })
            );
        }
    }]);

    return DrumPad;
}(React.Component);

var drumInfoArray = [{ key: 'Q', link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', KC: 81, instrument: "Kick" }, { key: 'W', link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', KC: 87, instrument: "Snare" }, { key: 'E', link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', KC: 69, instrument: "Closed Hi-hat" }, { key: 'A', link: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', KC: 65, instrument: "Hi-hat" }, { key: 'S', link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", KC: 83, instrument: "Heater 3" }, { key: 'D', link: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', KC: 68, instrument: "Rim" }, { key: 'Z', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', KC: 90, instrument: "Heater 4" }, { key: 'X', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', KC: 88, instrument: "Heater 2" }, { key: 'C', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', KC: 67, instrument: "Heater 1" }];

ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('drum-machine'));