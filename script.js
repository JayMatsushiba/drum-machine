'use strict';

// const drums = [
//     {
//         name: "Snare",
//         sound: 'https://actions.google.com/sounds/v1/impacts/hit_with_metal_tray.ogg',
//         keyTrigger: 'Q'
//     },
//     {
//         name: "Hihat",
//         sound: 'chick',
//         keyTrigger: 'W'
//     },
//     {
//         name: "Bass Drum",
//         sound: 'https://actions.google.com/sounds/v1/impacts/reverberating_slam.ogg',
//         keyTrigger: 'E'
//     }
// ]

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drum = {
    name: "Snare",
    sound: 'https://actions.google.com/sounds/v1/impacts/hit_with_metal_tray.ogg',
    keyTrigger: 'Q'
};

var activeStyle = {
    backgroundColor: 'red'
};

var inactiveStyle = {
    backgroundColor: 'green'
};

var DrumPad = function (_React$Component) {
    _inherits(DrumPad, _React$Component);

    function DrumPad(props) {
        _classCallCheck(this, DrumPad);

        var _this = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this, props));

        _this.state = {
            style: inactiveStyle
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(DrumPad, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState = {
                style: activeStyle
            };
            console.log('clicked');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleClick, style: this.state.style },
                    'Press me and change colour'
                )
            );
        }
    }]);

    return DrumPad;
}(React.Component);

ReactDOM.render(React.createElement(DrumPad, null), document.getElementById('drum-machine'));