'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drumArray = [{ Q: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', KC: 81 }, { W: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', KC: 87 }, { E: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', KC: 69 }, { A: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', KC: 65 }, { S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", KC: 83 }, { D: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', KC: 68 }, { Z: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', KC: 90 }, { X: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', KC: 88 }, { C: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', KC: 67 }];

var DrumPad = function (_React$Component) {
    _inherits(DrumPad, _React$Component);

    function DrumPad(props) {
        _classCallCheck(this, DrumPad);

        var _this = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this, props));

        _this.handleClick = function (e) {
            console.log('you hit the snare');
        };

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(DrumPad, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { onClick: this.handleClick },
                'Change colour'
            );
        }
    }]);

    return DrumPad;
}(React.Component);

ReactDOM.render(React.createElement(DrumPad, null), document.getElementById('drum-machine'));